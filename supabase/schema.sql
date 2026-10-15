-- Pujo Guide: live crowd reports, check-ins and daily "love" votes.
-- Run once in the Supabase SQL Editor (Project → SQL Editor → New query → paste → Run).
-- Safe to re-run: every statement is idempotent.
--
-- Privacy: rows hold a random per-browser id ("device"), a pandal id and a value. No names, no IPs.
-- The anon key may only INSERT/UPSERT rows and read the aggregated board (a function); it cannot read
-- or change raw rows.

create table if not exists public.signals (
  device     text        not null,
  pandal_id  text        not null,
  kind       text        not null check (kind in ('crowd', 'here', 'love')),
  -- crowd: 1 = quiet, 2 = busy, 3 = packed. here/love: always 1.
  value      smallint    not null default 1 check (value between 1 and 3),
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

create or replace function public.live_board()
returns table (
  pandal_id    text,
  crowd_n      integer,   -- crowd reports in the last 60 minutes
  crowd_avg    numeric,   -- their average level (1 quiet … 3 packed)
  here_n       integer,   -- check-ins in the last 45 minutes
  love_today   integer    -- love votes today (Kolkata day)
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
    count(*) filter (where s.kind = 'love'  and s.bucket = to_char(now() at time zone 'Asia/Kolkata', 'YYYY-MM-DD'))::int
  from public.signals s
  where s.created_at > now() - interval '36 hours'
  group by s.pandal_id
$$;

revoke all on function public.live_board() from public;
grant execute on function public.live_board() to anon, authenticated;

-- Housekeeping (optional): delete rows older than 3 days. Run by hand after Puja, or schedule it.
-- delete from public.signals where created_at < now() - interval '3 days';
