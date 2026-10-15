-- Pujo Guide: live crowd reports, check-ins and daily "love" votes.
-- Run once in the Supabase SQL Editor (Project → SQL Editor → New query → paste → Run).
-- Safe to re-run: every statement is idempotent.
--
-- Privacy: rows hold a random per-browser id ("device") plus a pandal id / game result. No IPs. The
-- only name ever stored is the nickname a player types when joining the leaderboard (plays.nickname).
-- The anon key may only INSERT rows and read aggregates through functions; it cannot read or change
-- raw rows.

create table if not exists public.signals (
  device     text        not null,
  pandal_id  text        not null,
  kind       text        not null check (kind in ('crowd', 'here', 'love', 'wait')),
  -- crowd: 1 = quiet, 2 = busy, 3 = packed. wait (queue): 1 ≈ 5 min, 2 ≈ 15, 3 ≈ 30, 4 = 60+. here/love: 1.
  value      smallint    not null default 1 check (value between 1 and 4),
  -- One row per device + pandal + kind + bucket. The site sends the bucket: the current hour
  -- for crowd/here (reports expire), the Kolkata calendar day for love (one vote a day).
  bucket     text        not null,
  created_at timestamptz not null default now(),
  primary key (device, pandal_id, kind, bucket),
  check (char_length(device) between 16 and 64),
  check (pandal_id ~ '^[a-z0-9-]{3,80}$'),
  check (char_length(bucket) between 8 and 20)
);

create index if not exists signals_recent on public.signals (created_at desc);

-- Existing installs: widen the checks to allow queue-wait reports (no-ops on a fresh install).
alter table public.signals drop constraint if exists signals_kind_check;
alter table public.signals add constraint signals_kind_check check (kind in ('crowd', 'here', 'love', 'wait'));
alter table public.signals drop constraint if exists signals_value_check;
alter table public.signals add constraint signals_value_check check (value between 1 and 4);

alter table public.signals enable row level security;

-- Column-level grants (new Supabase projects don't expose tables automatically). The anon role may
-- insert only the columns the site sends; created_at always comes from the default, so a client
-- can't post-date a report. No SELECT at all: a duplicate insert simply fails on the primary key
-- (the site treats that as "already reported").
revoke all on public.signals from anon, authenticated;
grant insert (device, pandal_id, kind, value, bucket) on public.signals to anon;

drop policy if exists "anon can report" on public.signals;
create policy "anon can report" on public.signals
  for insert to anon with check (true);

-- No UPDATE/DELETE/SELECT policies for anon: a browser can add a report, never change or read raw
-- rows. A second report in the same bucket is ignored (first one wins). Reads go through live_board().

drop function if exists public.live_board();
create or replace function public.live_board()
returns table (
  pandal_id    text,
  crowd_n      integer,   -- crowd reports in the last 60 minutes
  crowd_avg    numeric,   -- their average level (1 quiet … 3 packed)
  here_n       integer,   -- check-ins in the last 45 minutes
  love_today   integer,   -- love votes today (Kolkata day)
  wait_n       integer,   -- queue-wait reports in the last 90 minutes
  wait_med     double precision -- their median bucket (1 ≈ 5 min, 2 ≈ 15, 3 ≈ 30, 4 = 60+); percentile_cont's own type
)
language sql
security definer
set search_path = public
stable
as $$
  select
    s.pandal_id,
    count(*) filter (where s.kind = 'crowd' and s.created_at > now() - interval '60 minutes')::int,
    round(avg(s.value) filter (where s.kind = 'crowd' and s.created_at > now() - interval '60 minutes'), 2),
    count(*) filter (where s.kind = 'here'  and s.created_at > now() - interval '45 minutes')::int,
    count(*) filter (where s.kind = 'love'  and s.bucket = to_char(now() at time zone 'Asia/Kolkata', 'YYYY-MM-DD'))::int,
    count(*) filter (where s.kind = 'wait'  and s.created_at > now() - interval '90 minutes')::int,
    percentile_cont(0.5) within group (order by s.value) filter (where s.kind = 'wait' and s.created_at > now() - interval '90 minutes')
  from public.signals s
  where s.created_at > now() - interval '36 hours'
  group by s.pandal_id
$$;

-- ---------------------------------------------------------------------------------------------
-- Timings: "অঞ্জলি কটায়? ভোগ কটায়?" reported by visitors, one per device/pandal/kind/day.
-- ---------------------------------------------------------------------------------------------

create table if not exists public.timings (
  device     text        not null check (char_length(device) between 16 and 64),
  pandal_id  text        not null check (pandal_id ~ '^[a-z0-9-]{3,80}$'),
  kind       text        not null check (kind in ('anjali', 'bhog')),
  minutes    smallint    not null check (minutes between 0 and 1439),   -- minutes after midnight
  day        text        not null check (day ~ '^\d{4}-\d{2}-\d{2}$'),  -- Kolkata calendar day
  created_at timestamptz not null default now(),
  primary key (device, pandal_id, kind, day)
);

alter table public.timings enable row level security;
revoke all on public.timings from anon, authenticated;
grant insert (device, pandal_id, kind, minutes, day) on public.timings to anon;

drop policy if exists "anon can report a timing" on public.timings;
create policy "anon can report a timing" on public.timings
  for insert to anon with check (true);

-- Today's most-reported time per pandal and kind, rounded to 15 minutes, with the number of reports.
create or replace function public.timings_today()
returns table (pandal_id text, kind text, minutes integer, n integer)
language sql security definer set search_path = public stable as $$
  select t.pandal_id, t.kind,
         (mode() within group (order by (t.minutes / 15) * 15))::int,
         count(*)::int
  from public.timings t
  where t.day = to_char(now() at time zone 'Asia/Kolkata', 'YYYY-MM-DD')
  group by t.pandal_id, t.kind
$$;

revoke all on function public.timings_today() from public;
grant execute on function public.timings_today() to anon, authenticated;

revoke all on function public.live_board() from public;
grant execute on function public.live_board() to anon, authenticated;

-- ---------------------------------------------------------------------------------------------
-- Plays: game results and scores. Anonymous by default (device id + result id); a nickname is stored
-- only when the player taps "add me to the leaderboard" and types one.
-- ---------------------------------------------------------------------------------------------

create table if not exists public.plays (
  id         bigint generated by default as identity primary key,
  device     text        not null check (char_length(device) between 16 and 64),
  game       text        not null check (game ~ '^[a-z0-9-]{3,40}$'),
  result     text        check (result is null or result ~ '^[a-z0-9-]{1,80}$'),
  score      integer     not null default 0 check (score between 0 and 100000),
  nickname   text        check (nickname is null or char_length(nickname) between 1 and 24),
  created_at timestamptz not null default now()
);

create index if not exists plays_game_time on public.plays (game, created_at desc);
create index if not exists plays_device on public.plays (device, game);

alter table public.plays enable row level security;
revoke all on public.plays from anon, authenticated;
grant insert (device, game, result, score, nickname) on public.plays to anon;

drop policy if exists "anon can record a play" on public.plays;
create policy "anon can record a play" on public.plays
  for insert to anon with check (true);

-- How many distinct players got each result in the last 30 days (quiz "you and 124 others").
create or replace function public.community_stats()
returns table (game text, result text, players integer)
language sql security definer set search_path = public stable as $$
  select p.game, p.result, count(distinct p.device)::int
  from public.plays p
  where p.result is not null and p.created_at > now() - interval '30 days'
  group by p.game, p.result
$$;

-- Best score per nickname-bearing device for one game (passport: pandals visited).
create or replace function public.leaderboard(p_game text, p_limit integer default 20)
returns table (nickname text, score integer, at timestamptz)
language sql security definer set search_path = public stable as $$
  select best.nickname, best.score, best.at
  from (
    select distinct on (p.device) p.nickname, p.score, p.created_at as at
    from public.plays p
    where p.game = p_game and p.nickname is not null and p.created_at > now() - interval '30 days'
    order by p.device, p.score desc, p.created_at desc
  ) best
  order by best.score desc, best.at asc
  limit greatest(1, least(p_limit, 100))
$$;

-- The last few things that happened, for the home-page ticker. Names only where a nickname was given.
create or replace function public.recent_activity(p_limit integer default 15)
returns table (kind text, game text, result text, pandal_id text, nickname text, at timestamptz)
language sql security definer set search_path = public stable as $$
  (select 'play'::text, p.game, p.result, null::text, p.nickname, p.created_at
     from public.plays p where p.created_at > now() - interval '24 hours' and (p.result is not null or p.nickname is not null))
  union all
  (select s.kind, null::text, null::text, s.pandal_id, null::text, s.created_at
     from public.signals s where s.kind in ('here', 'love') and s.created_at > now() - interval '24 hours')
  order by 6 desc
  limit greatest(1, least(p_limit, 50))
$$;

revoke all on function public.community_stats() from public;
revoke all on function public.leaderboard(text, integer) from public;
revoke all on function public.recent_activity(integer) from public;
grant execute on function public.community_stats() to anon, authenticated;
grant execute on function public.leaderboard(text, integer) to anon, authenticated;
grant execute on function public.recent_activity(integer) to anon, authenticated;

-- ---------------------------------------------------------------------------------------------
-- Feedback: the "your feedback" form. Visitors can only insert; nobody but the owner reads it.
-- The admin dashboard (/admin) reads and deletes rows on the server with the service-role key,
-- which bypasses row-level security, so no read policy or function is needed here.
-- ---------------------------------------------------------------------------------------------

create table if not exists public.feedback (
  id         bigint generated by default as identity primary key,
  device     text        not null check (char_length(device) between 16 and 64),
  topic      text        not null default 'general' check (topic ~ '^[a-z0-9-]{1,40}$'),
  contact    text        check (contact is null or char_length(contact) between 3 and 120),
  message    text        not null check (char_length(message) between 5 and 2000),
  page       text        check (page is null or char_length(page) <= 200),
  lang       text        not null default 'en' check (lang in ('bn', 'en')),
  created_at timestamptz not null default now()
);

create index if not exists feedback_recent on public.feedback (created_at desc);

alter table public.feedback enable row level security;
revoke all on public.feedback from anon, authenticated;
grant insert (device, topic, contact, message, page, lang) on public.feedback to anon;

drop policy if exists "anon can send feedback" on public.feedback;
create policy "anon can send feedback" on public.feedback
  for insert to anon with check (true);

-- ---------------------------------------------------------------------------------------------
-- Places: pandals and mandirs added by visitors (and the owner) from /add-pandal. Visitors can only
-- insert; a place appears on the map after the owner approves it on /admin. No photos are stored:
-- just a name, where it is and a short note. Tiny rows, so it fits the free tier easily.
-- ---------------------------------------------------------------------------------------------

create table if not exists public.places (
  id         bigint generated by default as identity primary key,
  device     text        not null check (char_length(device) between 16 and 64),
  name       text        not null check (char_length(name) between 3 and 80),
  area       text        check (area is null or char_length(area) <= 60),
  city       text        not null check (char_length(city) between 2 and 40),
  country    text        not null check (country ~ '^[A-Z]{2}$'),
  lat        double precision not null check (lat between -90 and 90),
  lng        double precision not null check (lng between -180 and 180),
  note       text        check (note is null or char_length(note) <= 200),
  lang       text        not null default 'en' check (lang in ('bn', 'en')),
  status     text        not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create index if not exists places_status on public.places (status, created_at desc);

alter table public.places enable row level security;
revoke all on public.places from anon, authenticated;
-- No `status` in the grant: a visitor cannot insert an already-approved place.
grant insert (device, name, area, city, country, lat, lng, note, lang) on public.places to anon;

drop policy if exists "anon can add a place" on public.places;
create policy "anon can add a place" on public.places
  for insert to anon with check (true);

-- Approved places for the map (newest first, capped).
create or replace function public.approved_places()
returns table (id bigint, name text, area text, city text, country text, lat double precision, lng double precision, note text)
language sql
security definer
set search_path = public
stable
as $$
  select p.id, p.name, p.area, p.city, p.country, p.lat, p.lng, p.note
  from public.places p
  where p.status = 'approved'
  order by p.created_at desc
  limit 500
$$;

revoke all on function public.approved_places() from public;
grant execute on function public.approved_places() to anon, authenticated;

-- The owner's dashboard (/admin) uses the service-role key. Newer Supabase projects no longer grant
-- it table access automatically, so grant it explicitly (harmless where it already has access).
grant select, insert, update, delete on public.feedback, public.plays, public.signals, public.timings, public.places to service_role;

-- Housekeeping (optional): delete rows older than 3 days. Run by hand after Puja, or schedule it.
-- delete from public.signals where created_at < now() - interval '3 days';
-- delete from public.plays where created_at < now() - interval '30 days';
-- To remove an offensive nickname: delete from public.plays where nickname = '…';
-- (Both can also be done from /admin.)
