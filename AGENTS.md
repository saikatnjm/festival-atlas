# AGENTS.md — working on Pujo Guide

Read this first, whichever model or tool you are. It is the contract for working on this repo without
breaking it. `PROJECT_STATUS.md` has the running log of what was built and what is next; `docs/` has
brand and distribution notes.

## 1. What this is

**Pujo Guide** (`https://pujoguide.vercel.app`, repo name "Festival Atlas") is a bilingual
(বাংলা `/bn`, English `/en`) mobile-first Durga Puja companion for Kolkata, Bangladesh and the
diaspora: a sourced pandal directory with a map, live crowd reports, a pandal "passport", shareable
cards (quiz results, greetings, photo postcards, squad cards), a day-by-day dates/timings page and a
light community layer. It is a **pilot on free tiers**: Vercel Hobby + Supabase Free + GitHub Actions.
No accounts, no ads, no paid services, nothing heavy stored on the server.

The owner is Saikat (one person, non-dev-ops). He reviews, runs `git push`, pastes SQL into Supabase and
sets environment variables in Vercel. He does **not** run local builds.

## 2. Stack and layout

- Next.js 16 app router, React 19, TypeScript strict, `@/*` → repo root. No ORM, no Supabase SDK
  (plain `fetch` to PostgREST), Leaflet for the map, canvas for cards. Few dependencies on purpose.
- `app/[lang]/…` — every page; `lang` is `en | bn` (`generateStaticParams`, `dynamicParams = false`).
  `app/[lang]/layout.tsx` renders `<html>` for all pages; `app/(root)/layout.tsx` exists only for the `/`
  language redirect. `app/api/*` route handlers.
- `components/` — UI by area (`puja`, `live`, `community`, `play`, `postcard`, `places`, `me`, `home`,
  `local`, `feedback`, `admin`). Client components start with `"use client"`.
- `data/` — all curated content, version-controlled: `pandals/entries.json` (+ `bn.json`, `geo-bn.json`),
  `events/events.ts` (sourced news/notices), `puja-timings.ts`, `pujas.ts`, `play/*` (games, greetings,
  cast), `i18n/{en,bn}.ts` (the `Dict`) and `i18n/fun.ts` (feature strings as `{bn, en}` pairs).
- `lib/` — pure helpers and server helpers. Anything named `*-shared.ts` is import-free and
  unit-tested; the matching `*.ts` is server-only and does the network.
- `supabase/schema.sql` — the whole database, idempotent, re-run in full after any change.
- `scripts/validate-data.mjs`, `scripts/smoke.mjs`, `tests/*.test.mjs` — the checks CI runs.
- `app/site.css`, `app/cx.css` — plain CSS with custom properties; palettes via `data-theme` on `<html>`.

## 3. Rules that must not be broken

1. **Sourced facts only.** Dates, times, holidays, Metro hours, themes, "trending" items: every one
   comes from a fetched page, with `{title, url, date}` kept next to it. Never infer a date or time;
   mark unknowns as unknown. Puja days differ between West Bengal and Bangladesh and between panjikas.
2. **Privacy promise.** Names typed by players never leave the browser unless they opt into the
   leaderboard. Position from "near me" and photos stay in memory/on the device; postcards are drawn
   on a canvas client-side and shared as files. Only a random per-browser `device` id goes to the DB.
3. **Nothing big on the server.** No image uploads, no blobs, no per-user storage. Rows are small
   (ids, counts, short text). Reads are aggregates through `security definer` SQL functions;
   GET routes are edge-cached (`s-maxage`). Think free tier before adding any request or row.
4. **Database access model.** The browser's anon key may only INSERT (column-level grants, RLS
   insert-only policies, no SELECT) and call the aggregate functions. The service-role key lives only
   in the server env (`SUPABASE_SERVICE_ROLE_KEY`, never `NEXT_PUBLIC_`), used only by `lib/admin.ts`.
   Duplicate inserts return 409 and are treated as "already".
5. **Untrusted input.** Validate and cap everything from the client and from the DB (`clean*` helpers).
   Look up DB-sourced keys as own properties / null-prototype maps (a row named `constructor` must not
   reach `Object`). Escape visitor text before putting it in HTML strings (map popups).
6. **Never commit, push, deploy or delete without the owner's explicit approval.** Show the change,
   then give him the commands. Never print secrets; never ask him to paste keys into chat.
7. **Both languages, always.** Every string is a `{bn, en}` pair (`L`), added in the same edit. Bangla
   uses the informal "তুমি" register, Bangla digits via `num()`. No real person's name as an example.
8. **Don't rewrite what works.** Reuse `lib/share.ts` (cards), `useLive`, `useVisits`, `useProfile`,
   `useNearMe`, `fill`/`fmt`, `pageMeta`, `JsonLd`. Keep changes scoped; no unrelated refactors.
9. **Keep the SEO shell intact:** `pageMeta`, hreflang alternates, sitemap entries, JSON-LD, and the
   smoke strings. `/me` and `/admin` are `noindex`; everything else is meant to be indexed.

## 4. How to verify (there is no local shell in the owner's AI sessions)

CI (`.github/workflows/ci.yml`, Node 24) is the real test. Before handing anything over:

1. Do a static review of every changed file (imports exist with the used signatures, hooks are
   unconditional, no hydration mismatch — anything from `localStorage`/`Date` is read in `useEffect`).
2. Test-imported `.ts` files must contain **no imports except `import type`** and no enums (Node's
   type stripping). Put pure logic in `lib/*-shared.ts` and test it in `tests/personal.test.mjs`.
3. Add a `scripts/smoke.mjs` line for every new route: the string must appear literally in the SSR
   HTML and be unique to that page.
4. Update `PROJECT_STATUS.md` (newest section first: what, files, owner steps, tests, next).
5. Hand over: the push commands, which env vars or SQL the owner must apply, and what to check live.

Local (owner's machine): `docker compose up` for dev; `npm run verify` = validate + tests + build +
smoke; `npm run typecheck` after a build. CI order: validate → test → build → typecheck → smoke.
The smoke script expects `NEXT_PUBLIC_SITE_URL=http://localhost:3100`.

## 5. Environment variables (Vercel → Settings → Environment Variables; redeploy after changes)

| Name | Where | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | build | Canonical origin (`https://pujoguide.vercel.app`); wins over `VERCEL_PROJECT_PRODUCTION_URL`. |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | server routes | Insert-only access + aggregate RPCs. `sb_publishable_…` keys get `apikey` only; `eyJ…` keys also `Authorization: Bearer`. |
| `NEXT_PUBLIC_GA_ID` | client | Google Analytics 4 (`components/Analytics.tsx`, events via `lib/analytics.ts`). |
| `ADMIN_USER`, `ADMIN_PASSWORD` (10+ chars) | server | `/en/admin` login (HMAC-signed 12 h cookie). Optional `ADMIN_SESSION_SECRET`. |
| `SUPABASE_SERVICE_ROLE_KEY` | server only | Admin reads/updates/deletes (feedback, nicknames, place approval, purge). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` | build | Optional search-console verification meta tags. |

Without Supabase vars every live/community feature hides itself and `/api/*` answers `disabled: true`.

## 6. Database (Supabase, `supabase/schema.sql`)

Tables: `signals` (crowd/here/love/wait, hourly or daily bucket per device), `timings` (anjali/bhog
minutes per device/pandal/day), `plays` (game result, score, optional nickname), `feedback`
(topic, optional contact, message), `places` (visitor-added pandals; `status` pending → approved by the
owner). Functions: `live_board()`, `timings_today()`, `community_stats()`, `leaderboard()`,
`recent_activity()`, `approved_places()`. After editing the file, the owner re-runs the whole thing in
the SQL Editor; write every statement so it is safe to re-run (`if not exists`, `drop … if exists`,
`create or replace`). Changing a function's return columns needs `drop function` first.

## 7. Feature map (routes)

`/` home (countdown, games, live board, ticker, map teaser, Pujo menu) · `/puja` map + directory (filters,
near me, heat layer, community pins) · `/puja/[id]` pandal page (visit tick, crowd meter, waits, timings,
postcard button) · `/puja/kolkata|dhaka|abroad` collections · `/durga-puja-2026` dates, timings, FAQ ·
`/local` region info · `/play/*` quizzes/generators with shareable cards · `/greetings` greeting cards ·
`/postcard` photo postcard · `/passport` passport + leaderboard · `/me` personal log (on-device) ·
`/add-pandal` community submissions · `/feedback` · `/about` · `/en/admin` owner dashboard.
APIs: `/api/live`, `/api/community`, `/api/feedback`, `/api/places`, `/api/admin`.

localStorage keys: `fa:me` profile, `fa:region`, `fa:visited`, `fa:plan`, `fa:device`, `fa:nick`,
`fa:board:passport`, `fa:theme`, `fa:log` (activity), `fa:install-off`. sessionStorage dedupes
(`fa:live:*`, `fa:play:*`, `fa:log:*`, `fa:asked`). Grep before adding a key.

## 8. Conventions and gotchas

- Dates: `lib/puja-dates.ts` (`pujaPhase(now, region)`), `lib/dates.ts` for formatting, Kolkata day
  helpers in `lib/live-shared.ts`. Compute "today" in an effect or a handler, never during render of a
  prerendered page.
- Cards: `lib/share.ts` (`cardToPngBlob`, `shareImage`, `downloadBlob`, formats portrait/square/story),
  `components/play/ShareBar.tsx`. Postcards: `lib/postcard.ts`. Fonts are bundled in `public/fonts`.
- Map: OpenStreetMap tiles with attribution (light use only, no bulk fetching). Pins are area-level;
  distance labels never claim better than 100 m.
- i18n: `getDict(lang)` for page chrome, `fun.<group>` for feature strings, `fill(template, vars)` /
  `fmt(template, vars, lang)` for placeholders, `withLang(lang, path)` for links.
- Pandal ids are `[a-z0-9-]`; `isPandalId`, `isDevice`, `getPandal` guard every API input.
- `x-default` hreflang points at the root without a trailing slash; `NEXT_PUBLIC_SITE_URL` must match
  the deployed domain or canonical/card URLs drift.
- Admin pages are `dynamic = "force-dynamic"`; everything else is static. Keep it that way.

## 9. Working style the owner expects

Short, direct answers; no recap of his request; one question at most and only when it blocks.
Propose before building anything large; build in small phases; report what changed, which files, what
was verified (never claim an unrun test passed), and what remains. Prefer low-cost models/agents for
search, review and routine edits; keep the expensive reasoning for design and debugging.
