# Festival Atlas — Project Status

## Puja-week engagement: passport, live crowd meter, greeting cards (latest, 2026-10-15)
**Not run here** (no shell). Two static reviews by a second reader; all findings fixed. Owner: push, paste the SQL, verify on the live URL.

- **Pandal passport** (`lib/visits.ts`, `components/puja/VisitButton.tsx`, `Passport.tsx`, `/passport`): "✓ ঘুরেছি" on every pandal page; `/passport` has a tick list (Kolkata, Dhaka, elsewhere) and a shareable card ("Rini-র পুজো পাসপোর্ট · ৭টা প্যান্ডেল", areas, north+south badge). Ticks live in localStorage (in-memory fallback); a shared link carries the ids and name only. Home shows "🎫 Passport: n pandals" and "🗺️ Your plan" chips once they exist (`MyPlanChip.tsx`; PlanBuilder saves the last plan URL).
- **Tithi greeting**: the countdown pill says "শুভ অষ্টমী, Rini!" during Puja.
- **Greeting cards** `/greetings` (`data/play/greetings.ts`, `components/play/GreetingMaker.tsx`): one card per day (Mahalaya, Panchami, Shashthi, Saptami, Ashtami, Navami, Dashami, Bijoya, Sharodiya), today's picked automatically, sender name (from profile) and optional recipient, 2–4 lines per day (warm/funny), portrait/square/story PNG, WhatsApp/Facebook/native share with hashtags. Shared link reproduces the card and offers "make your own". Own OG image; crawlable list of every day's headline for "শুভ অষ্টমী শুভেচ্ছা" searches. Hero button + footer link.
- **Live layer (Supabase, free tier)**: `supabase/schema.sql` (table `signals`, RLS insert-only for anon, column grants, `live_board()` security-definer function), `lib/live.ts` (REST, no SDK), `app/api/live/route.ts` (GET board cached 30 s at the edge; POST validated, duplicate = 409 = "already"), `components/live/*` (CrowdMeter on pandal pages: ফাঁকা/মাঝারি/ঠাসা + "I'm here" + "❤️"; LiveBadge in the directory list; LiveBoard "Buzzing right now" on the home page). Everything hides itself when `NEXT_PUBLIC_SUPABASE_URL`/`ANON_KEY` are missing (`/api/live` → `{ok:true,disabled:true}`). One report per device/pandal/kind per hour (love: per Kolkata day), remembered in sessionStorage. Anonymous: random device id only.
- **Setup still needed (owner):** env vars are set in Vercel; paste `supabase/schema.sql` into the Supabase SQL Editor and Run; push; then on the live site tap a crowd level on a pandal page and check the home board updates within a minute. Spam is limited by the hourly rule only (no IP limits).
- Tests: visits, live helpers, greetings (bilingual, calendar pick). Smoke: `/greetings`, `/passport`, visit button, `/api/live`.
- Distribution plan: `docs/DISTRIBUTION.md`.

## Rebrand: Pujo Guide + dhak mark (2026-10-12)
- Name: "Pujo Guide" (Latin, used in share images, filenames, manifest, `BRAND.name`) and "পুজো গাইড" in the Bangla UI (`t.site.name`, card brand, titles). Every "Festival Atlas" string in app/components/data/lib/scripts is replaced; package name is `pujo-guide`.
- Mark: a head-on dhak with crossed sticks (own drawing; `lib/brand.ts` ICON_SVG, `public/brand/logo-icon*.svg`, `app/icon.svg`). Previewed at 128/64/32/16 px, on dark and on an app tile. The wordmark is now HTML (`.brand-word`, display font) next to the mark, so Bangla pages show a Bangla wordmark; `logo-primary*.svg` are kept as text-based fallbacks.
- `app/apple-icon.tsx` generates the 180×180 home-screen PNG at build time (the mark on a cream tile). **The owner must `git rm app/favicon.ico app/apple-icon.png`** before pushing (the static apple-icon would conflict with the generated one; the ICO still showed the old globe). Manifest points at `/icon.svg` and `/apple-icon`; theme colour is sindoor.
- OG images: brand line and alts say Pujo Guide; default gradient is sindoor→ink. Card PNG footer prints "Pujo Guide" / "পুজো গাইড" by language.
- `docs/BRAND.md` rewritten. Smoke test: brand strings on home, apple-touch-icon link, `/icon.svg` and `/apple-icon` as images.
- Not run here.

## Domain + analytics (2026-10-12)
- Live domain is now `pujoguide.vercel.app` (old `festival-atlas-world.vercel.app` kept attached). The site address is baked in at build time, so metadata, share links and the card footer only change after a rebuild.
- `next.config.ts` `siteOrigin()` now prefers an explicit `NEXT_PUBLIC_SITE_URL` (set it in Vercel to `https://pujoguide.vercel.app`), falling back to Vercel's shortest production domain; a mismatch between the two is printed in the build log.
- **Google Analytics 4** (`components/Analytics.tsx`): loads gtag.js after the page is interactive only when `NEXT_PUBLIC_GA_ID` (G-…) is set; `anonymize_ip` on. Custom events via `lib/analytics.ts` `track()`: `game_result` (game + result id), `share` (method, path, format), `save_image`, `challenge_friend`. Names typed by players are never sent. The "Simple and private" copy on About now says visits and shares are counted with Google Analytics.
- Not run here. Owner: set the two env vars in Vercel, push, redeploy, then verify the card footer host and GA Realtime.

## Live test + SEO pass (2026-10-12)
**Live test (festival-atlas-world.vercel.app, phone-sized browser, after the owner's push):** name prompt → personalised quiz result (ribbon, traits, verdict, formats, challenge), squad card with Bangla names (names in the link), countdown + Puja-mode palette, palette picker (persists across pages), route maker → plan builder → plan card (share link carries the plan + name), map quick chips + collapsed filters (78 listings, 63 pinned), Get-directions link, shared result page ("play too" + challenge banner), reel-idea mode via link, About page (FAQPage JSON-LD), sitemap (244 URLs), robots, OG images. No console errors. Fixed from that test: palette popover clipped on phones (now anchored to the header bar), result card below the fold after the last question (quiz/challenge scroll it into view; `scroll-padding-top` added), three-row header on phones (now logo+tools, then nav), `?r=` on the Local page now remembered, "Rini, Four scenes" capitalisation.

**SEO (not run here; CI will build it):**
- **Landing pages** (static, both languages, own titles/descriptions/OG images, Breadcrumb + CollectionPage + ItemList + FAQPage JSON-LD): `/puja/kolkata` (IN listings grouped by area, 2026 highlights, Metro/dates FAQ), `/puja/dhaka` (BD listings by city, holidays FAQ), `/puja/abroad` (diaspora by country). Config in `data/pandals/collections.ts`, renderer `components/puja/CollectionPage.tsx`. Static folders win over `/puja/[id]`.
- **`/durga-puja-2026`**: day-by-day dates table for Kolkata and Bangladesh (BD Saptami/Ashtami marked as estimates; BD Mahanabami corrected to 20 Oct per the holiday notification), countdown, sourced news cards, FAQ; Event JSON-LD for both festivals + FAQPage.
- **Event JSON-LD** on every confirmed 2026 pandal page (dates from the regional calendar, Place with address/geo, organiser). Pandal titles now carry the year ("… Durga Puja 2026 in Kolkata, India") and the breadcrumb includes the city landing page.
- **WebSite SearchAction** (sitelinks search box → `/puja?q=`), `robots` meta with `max-image-preview:large`, sitemap rebuilt (new pages, `lastModified` from `lastVerified`, daily/weekly frequencies, priorities), footer and home links to the new pages.
- **OG alt text** per game and per result via `generateImageMetadata` (image URLs change to `…/opengraph-image/card`; the smoke test now reads `og:image` from each page instead of hardcoding paths, and checks the alt is specific).
- Titles: play index "Durga Puja Quizzes & Games 2026: Which Puja Character Are You?", Local page "Kolkata & Dhaka Durga Puja 2026 Guide: News, Routes & Plans".
- Tests: collections cover every listing exactly once, title/description lengths, date formatting. Smoke: all new pages, JSON-LD types, sitemap entries.
- **Footer rebuilt** (`components/SiteFooter.tsx`): brand blurb + three grouped columns (Explore: dates, Kolkata, Dhaka, abroad, map, local guide · Play: quiz, squad, all games · This site: about, language) and a bottom row with the OSM credit and year. The old single wrapped line is gone.
- **Owner to do after deploy:** submit the sitemap in Google Search Console (set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel), test `/en/puja/kolkata` and `/en/durga-puja-2026` in the Rich Results Test, and re-check share previews in the Facebook debugger (OG image URLs changed for game/result pages).

## Data, map page & reel ideas (2026-10-12)
Not run here (no shell); owner tests with `docker compose run --rm --build verify`.
- **23 new directory entries** (`entries.json`, Bangla in `bn.json`), all with 2025/2026 news sources: the eight 2026 Kolkata theme highlights are now listings (Sreebhumi, Ekdalia, Ballygunge SSS, Kumartuli Park, Jagat Mukherjee Park, Shibmandir, Chorebagan, Chaltabagan Lohapatty) and the events link to them; plus College Square, Mohammad Ali Park, 66 Pally, 64 Pally, Lalabagan Nabankur, Simla Sporting, Deshapriya Park, Singhi Park, Tridhara; Siliguri (Rabindra Sangha, Haiderpara); Bangladesh: Brahmarajpur Satkhira (matchstick idol, also a trending card), Chandranath Temple, Bhabanipur Shaktipeeth, Jeshoreshwari. Pins only where Wikipedia infobox coordinates were seen (area/city level, `coordSource`). New cities in `geo-bn.json`.
- **Route maker** stops now use directory ids (so each stop links to its page) and only Kolkata/Khardaha or Dhaka/Narayanganj listings.
- **Map page:** one-tap 🥁 Kolkata / 🛕 Dhaka / 🌍 All chips above the search; other filters sit behind one "Filters" button on phones (always open on wide screens); shorter heading, lead and notice; the notice moved below the explorer.
- **Captions & Excuses** gained a third mode, **Reel idea** (shot + last-second twist): evergreen formats people film at Puja (dhak-beat transition, anjali POV, dhunuchi slow-mo, hopping timelapse, queue before/after, bhog top-shot, Mahalaya 4 a.m., Puja abroad, friends' roll call, phuchka challenge). Not claims about what is trending.
- **Research outcome:** no reliable 2026 data on viral reel formats, trending audio or hashtags could be found (platform trends aren't crawlable), so nothing "trending" was invented. Verified diaspora 2026 events were found (West London Durga Puja 17–21 Oct, Newham 16–20 Oct, BAS Singapore from 16 Oct, Sydney VMS 24 Oct, Christchurch 17 Oct); the event model is WB/BD only, so adding a "world" region is a follow-up.
- Removed the owner's name from UI placeholders and code comments; tests use other names.

## Home & engagement upgrade (2026-10-12)
Not run here (no shell); owner tests with `docker compose run --rm --build verify` and the dev server.
- **Hero:** live countdown pill (`components/home/Countdown.tsx`: days to Shashthi / "আজ অষ্টমী" / Bijoya; region from the Local page choice, WB default; calendar in `lib/puja-dates.ts`), one headline ("পুজোয় তুমি কে? ৩০ সেকেন্ডে জেনে নাও।"), one main CTA into the personality quiz, and a sample result card (`HeroCard.tsx`) that uses the player's own name once set.
- **Games:** three tiles on the home page (personality quiz, squad card, pandal challenge) plus "আরও {n}টা খেলা" → `/play`.
- **Trending:** a live, long-running notice ("no carnival this year") now sorts after the next real happening (`lib/events.ts`); test updated. "🌙 আজ রাতের রুট বানাও" shortcut into the route maker.
- **Voice:** `bn.ts` rewritten to তুমি throughout (37 lines); `a11y.skip` too.
- **About page** `/about` (honesty cards, coverage note, FAQ with FAQPage JSON-LD); the home page keeps one sourced line + link. Footer links to Local and About; sitemap updated.
- **Characters** on the home strip link to their quiz (`QUIZ_OF` in `CastStrip.tsx`).
- **Sharing loop:** shared result pages open with a full-width "তুমিও খেলো" button above the card; share texts start with the character's emoji (`CHAR_EMOJI`); personal results end with a nudge into the squad card.
- **Colour palettes:** header 🎨 picker (`components/ThemePicker.tsx`, `lib/theme.ts`): Classic, সিঁদুর, শিউলি, নদী, and "Puja mode (auto)" = সিঁদুর from Mahalaya to Dashami, Classic otherwise. Saved in localStorage; applied via `data-theme` on `<html>` by an inline script in `<head>` (no flash). Palettes override the raw colour tokens in `site.css`; the game pages' background follows via `--cx-bg`.
- **Name chip** in the header (shows the saved name, opens the name prompt via `/play?me=1`).
- **Install:** `app/manifest.ts` + `InstallHint.tsx` (banner on the second visit: Chrome install prompt where available, iOS tip otherwise; dismissible; hidden when already installed).
- **Map:** `/puja` opens on the visitor's region (IN/BD) when the link has no filters and a region was chosen on the Local page.
- **SEO quick wins:** home and map titles now carry "2026" and "Kolkata & Dhaka".
- **Tests:** puja phase per region (incl. BD's missing 20 Oct), Puja-mode window, theme auto, boot script; smoke test covers the new hero, About, manifest and `data-theme`.
- **Still to check on a phone:** the header with four nav links + chip + 🎨 + language switch at 320px (chip is capped at 9rem), the palette popover, the install banner on iOS, and the sample card's ribbon in all four palettes.

## Improvement tasks, group 1 (from the "Festival Atlas improvement tasks" checklist)
- **Live domain metadata:** the origin is resolved once in `next.config.ts` (`NEXT_PUBLIC_SITE_ORIGIN`). On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` always wins, so a stale `NEXT_PUBLIC_SITE_URL` (the dead festival-atlas-eight domain) no longer leaks into canonical, og:url, og:image, the sitemap or card footers. Preview builds also canonicalise to production. Docker and CI still use `NEXT_PUBLIC_SITE_URL`.
- **Homepage share image:** `app/[lang]/opengraph-image.tsx` with alt text (Latin-only, like the other OG images).
- **Pins:** 15 more IN/BD listings now have area- or city-level pins taken from Wikipedia infobox coordinates (`coordSource` on each).
  - City-level: Khardaha, Narayanganj, Bagerhat, Barishal.
  - Still unpinned (no citable coordinates found): Rajdanga Naba Uday Sangha, Siddheshwari Kali Mandir, Shankhari Bazar, Krishibid Institute (Farmgate), Rayshaheb Bari (Dinajpur).
- **Get directions:** a button on each pandal page opens Google Maps directions by name, address and city (more precise than our area pins).
- Not run here (no shell). The last CI run passed install, validate, tests, build and type-check; only the smoke test failed, and its FAIL lines are still needed.

## CI/CD setup
- `.github/workflows/ci.yml` runs on every push and PR with Node 24: `npm ci` → validate → tests → build → type-check → smoke test (`NEXT_PUBLIC_SITE_URL=http://localhost:3100`, as in docker-compose `verify`). It has not run yet; it first runs on the first push.
- Deploys are left to Vercel's Git integration: previews per branch/PR, production on `main`. Set `NEXT_PUBLIC_SITE_URL` in Vercel (production = real domain; optionally Preview = the preview URL), plus the optional verification variables.
- `package.json` engines changed to `node >=22.18`, matching what the tests already needed.
- Git: nothing was committed or pushed from this session (no shell here). The owner pushes using the commands in the chat.

## Route maker
- On `/local`, the "plans side by side" table is replaced by a "Your pandal-hopping route in 20 seconds" toy (`components/local/RouteMaker.tsx`, data and logic in `data/local/routes.ts`). It sits first in each region view.
- The player picks a starting neighbourhood (Kolkata: Behala, Gariahat, Tollygunge, Shyambazar, Dum Dum, Salt Lake, New Town, Howrah; Dhaka: Old Dhaka, Motijheel, Dhanmondi, Mirpur, Uttara, Gulshan–Banani), a vibe (heritage, theme-crazy, just here to eat, walk less) and a time on a slider (4 pm to 4 am).
- The result is a route "ticket":
  - Stops are ordered by rough area, nearest first, with food breaks between them.
  - It shows a joke for the starting place, a vibe verdict, a time-of-night line, and one sourced fact with an ℹ️ link (Kolkata Metro hours; Bangladesh holidays).
  - "🎲 Another route" reshuffles the choice; "Use this route" sends the stops to the plan builder and its share card.
- Areas are rough, for ordering only; distances are not claimed. The single honesty line now sits at the bottom of the section.
- Tests (`tests/personal.test.mjs`): every route stop is a real stop in the right region; every start × vibe combination gives a full route; nearest-area, walk-less and heritage behaviour; "another route" can change the route. **Not run here (no shell).**

## Personalisation, local Puja & shareability (2026-10-10)

**Not run here:** the sandbox could not start on this machine, so no `npm test`, `typecheck`, `next build`, smoke test or browser check ran. The code was checked by a static read only. Owner to run `docker compose run --rm --build verify` and the manual checklist below.

- **Optional profile** (`lib/profile.ts`, `lib/use-profile.ts`): name or nickname, plus optional city, favourite activity, friend-group role and mood. It is asked when a game opens (`components/play/PlayerSetup.tsx`), never on the home page. It can be skipped, collapses to "Playing as … · Change", and has a "Forget my details" button. Stored only in localStorage (in memory if storage is blocked).
- **Personal results** for every game, all passed through `ResultPanel`'s `personal` prop:
  - A name ribbon with a licence-style title, e.g. "সৈকতের ভোগ খাওয়ার সরকারি লাইসেন্স". Titles are picked by the choices; "Another title" cycles them.
  - Trait chips from the character each answer leaned to, plus the optional details.
  - A personal verdict line, the city in the kicker, and the name added to game intros.
  - Bangla possessives are handled for Bengali and Latin names (সৈকতের / পিয়ার / Saikat-এর). Without a name the card says তোমার / Your.
  - Content and pure logic live in `data/play/personal.ts`. Static result pages stay generic.
- **Cards** (`lib/share.ts`): portrait 1080×1350, square 1080×1080 and story 1080×1920, chosen in the share bar. Optional blocks (traits, list, verdict, blurb) are drawn only if they fit. On square cards the stat bar gives way to traits. Story cards keep text clear of app UI.
- **Friend challenge:** "Challenge a friend" shares `/play/<slug>?vs=Name&vr=<result>`. The recipient sees a banner, and after playing sees a "You vs Name" duo line. Personal result links add `?from=Name`, and the result page then offers "play and see". Only the name the player typed travels in the link, and the UI says so.
- **Squad card** `/play/puja-squad` (new `group` kind): 2–6 names get unique roles (real leader, 3 a.m. phuchka squad, lost GPS, adda committee president…). The names travel in the link, so recipients see the same card.
- **Local discovery** `/local` (nav item "আমার পুজো / Local Puja"):
  - A skippable region picker (Kolkata & West Bengal / Bangladesh / both), remembered per browser and in `?r=`.
  - Sourced dates and news, 2026 theme highlights, local traditions (general, undated), a side-by-side comparison of two plans per region, and an itinerary builder (up to 8 stops, optional day) that makes an "আমার পুজো প্ল্যান" card. The plan travels in the link.
- **Trending** "এখন কোথায় পুজোর হইচই? / What's happening now?" on home and `/local`, from static curated data in `data/events/events.ts`. The update guide is at the top of that file.
  - Status (upcoming / on now / over / unconfirmed) is computed in the visitor's browser in each region's time zone. Themes are labelled "as reported". It is not live social-media data.
- **Home:** a trending block, local entry buttons and a play-with-friends box were added. Games remain the second section, straight after the hero. The "festival universe" strip is hidden for now at the owner's request; `data/festivals.ts`, the `.fest-*` CSS and the `home.fest*` strings are kept for later.
- **Tests:** `tests/personal.test.mjs` covers possessives, name cleaning (long Bengali and Latin names), profile validation, coverage of all characters, choice-driven badges and traits, duo symmetry, squad determinism, the event data rules, time-zone status boundaries, trending order and plan stop ids. Smoke test: added `/local` and `/play/puja-squad` in EN/BN, plus the home trending and Coming-soon text.

### Event data (verified 2026-10-10)
- WB:
  - Puja dates 17–21 Oct ("reported": Drik Panchang via Hindutone; some calendars differ by a day).
  - Mahalaya and the Eden Gardens inauguration (The Week).
  - Metro overnight services 15–21 Oct (India TV/PTI).
  - No Red Road carnival, plus the Ashtami/DJ/crane rules (The Week).
  - 10 theme highlights (The Federal, 7 Oct). Suruchi Sangha was left out because the report frames its theme politically.
- BD:
  - Puja 16–21 Oct and Mahalaya at Dhakeshwari (News On AIR).
  - Holidays 20–24 Oct (Jagonews24).
  - Parishad meeting on 26 Sep (News On AIR).
- Not found: Ramakrishna Mission Dhaka Kumari Puja 2026 timing, the 2026 mandap count, and Bagbazar/Shobhabazar 2026 details. These were not added.

### Open items
- The Bangla copy (new jokes, badges, traditions) needs a native editor's read.
- `npm test` needs Node ≥ 22.18 (type stripping), but `package.json` engines says ≥ 20.9. This was already true before this phase.
- Check on a phone: PNG export in all three sizes (Bangla glyphs, long names, ribbon), native share, the 4-link header at 320px, and `/local` plan-card links opened by another device.

## Relatable cast update

- Home: the "festival universe / coming soon" strip, its FAQ entry and "more festivals" copy are removed. `data/festivals.ts` + `.fest-*` CSS are kept for future separate festival menus.
- Cast renamed to relatable Puja types: Theme-da Tanmoy, Bhog-er Bumba, Reel-Rini, Pore-Debo Pintu, Paanch-Minit Pia, Bari-Chol Babai (own inventions, art unchanged).
- Added public-domain figures with new original art: Gopal Bhar (folk), Bagha (Upendrakishore Ray Chowdhury), Hansjaru (Sukumar Ray). Used in `gopal-wit` and `book-mood`. `castAll` drives the cast strip/play page; `castOrder` is the six for the classic quiz.
- Satyajit Ray / Humayun Ahmed characters are still copyrighted: not drawn (name-only reading tips).
- Research on youth/social-media Puja talk was light; Bangla copy still needs a native editor's review.

## UX & content upgrade
- `/` no longer shows a chooser: it redirects by `Accept-Language` (Bangla if preferred, else English). Header switcher is now বাংলা / English.
- Home rebuilt: playable games first, then a "festival universe" strip (Durga Puja open; Kali Puja, Saraswati Puja, Eid, Pohela Boishakh, Biju, more marked **Coming soon**, not linked), map teaser, cast, honesty notes, FAQ. Titles/descriptions are festival-neutral.
- 4 new quizzes (3 scenes each, original content, EN + BN): `puja-family`, `gopal-wit` (folk-tale spirit), `epic-adda` (Mahabharata character types), `book-mood` (Bengali reading moods; Ray/Humayun Ahmed named only as reading tips, Sukumar Ray noted as public domain). Source: `data/play/stories.ts`; one data-driven runner (`data/play/quizzes.ts`). Notes shown on result pages.
- New result cards reuse the six-character cast art (different titles/colours per outcome); no new character art.
- Deliberately not done: deity-as-cartoon quizzes (Shiva-Parvati family) and a Sukumar-Ray-style rhyme generator.

## Previous phase
Bilingual (EN/বাংলা) upgrade: worldwide Puja pandal directory, new brand, interactive cartoon cards, bilingual SEO. Code complete and copied to this folder. **Owner review pending; nothing committed, pushed or deployed.**

## What changed
- **Routing/i18n:** `/` language chooser; `/en/...` and `/bn/...` (static, `app/[lang]`). Dictionaries in `data/i18n/{en,bn}.ts`; content as `{en,bn}` in `data/play/*`. One codebase, no duplication. Old `/puja`, `/play/*` redirect (temporary) to `/en/...`.
- **SEO:** per-language `<html lang>`, canonical, hreflang (`en`, `bn`, `x-default` → `/`), localized titles/descriptions, JSON-LD (WebSite, BreadcrumbList, ItemList), bilingual `sitemap.xml` with alternates, `robots.txt`, one indexable URL per pandal and per result. Needs `NEXT_PUBLIC_SITE_URL` (optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`).
- **Directory:** `data/pandals/` (55 entries: West Bengal 20, Bangladesh 15, UK/EU 8, rest of world 12). Statuses `confirmed` / `historical` / `awaiting verification` (text + shape, not colour only). Search, filters (country, city, year, theme, status) synced to the URL, map/list toggle, detail pages `/puja/<id>`, empty states. Every entry has sources and `lastVerified`; pins are labelled approximate.
- **Brand:** universal globe-and-confetti logo, favicon/apple icon, palette + type in `docs/BRAND.md`; fonts bundled in `public/fonts/` (OFL).
- **Cards:** tap the character for a reaction/animation, regenerate/replay, brand footer (logo + site host), PNG export (1080×1350, Bangla verified), native image share with link fallback. Reduced motion respected.
- **Home:** new lively landing page (hero, map teaser, games, tappable cast, honesty notes, FAQ).
- Game progress survives a language switch (sessionStorage / `?seed=` / URL state).

## Decisions
- OG share images are Latin-only (satori can't be relied on for Bangla shaping); in-page cards and PNG export are fully Bangla-capable.
- Pandal proper names are never translated; descriptions/themes have Bangla in `data/pandals/bn.json` (themes fall back to the original name).
- Leaflet + OSM tiles (attribution shown), loaded lazily. Tile URL is one constant in `components/puja/PujaMap.tsx`.
- Non-language paths like `/xyz` use Next's default 404.
- Festival universe strip: hidden for now; to be reworked later.

## Verification (what was actually run)
| Check | Result |
|---|---|
| `node scripts/validate-data.mjs` (55 entries: ids, status rules, sources, coordinates, bn coverage) | PASSED (cloud sandbox) |
| `node --test tests/*.test.mjs` (24 tests: all 5 quizzes bilingual, every outcome reachable, filters, spreadPins) | PASSED (cloud sandbox) |
| Chromium harness: 4 new quizzes played through in EN + BN, result card, tap, PNG export (language, fonts, art, footer checked); 18 routes x 2 langs x 2 widths, no overflow | PASSED (cloud sandbox) |
| `/` Accept-Language redirect, `next build`, smoke script (updated, covers redirect + new quizzes) | NOT RUN here; owner to run `verify` |
| Stub type-check | No errors in project code; only stub limitations (no real React/Next/Leaflet types) |
| Chromium render of real page components (harness, no Next): 18 routes × EN/BN × mobile/desktop | PASSED: text present, no horizontal scroll, no console errors |
| Explorer search, empty state, pin→list selection, status badges (map replaced by a stub) | PASSED |
| Card tap reaction, PNG download EN + BN (Bangla glyphs, footer, logo visible), reduced motion | PASSED |
| Metadata (canonical/hreflang/og:locale) via `generateMetadata` | PASSED |
| **`next build`, real Leaflet map, `scripts/smoke.mjs`, native share on a phone, Docker Compose** | **NOT RUN here. Owner to run.** |

## Manual checklist
1. `docker compose down` then `docker compose up --build -V dev`; `docker compose run --rm dev npm install --package-lock-only` if the lockfile is stale.
2. `docker compose run --rm --build verify` (validate, tests, build, smoke).
3. `/` chooser → `/en` and `/bn`; switch language on `/puja`, a game result and a pandal page (query/hash kept).
4. `/en/puja`: pins appear, zoom, click pin ↔ list, filters, toggle on a phone width, share a `?city=` link.
5. Play each game, switch language mid-game (progress stays), save image, share on a phone (image attaches).
6. View source: `lang`, canonical, hreflang, JSON-LD. Check favicon in the tab.

## Data limitations
- Not a complete list: curated starting set, mostly 2025 editions, some single-source entries.
- 35 of 55 have a pin; all are approximate (area/city level), none venue-exact. The rest are list-only.
- 3 entries are "awaiting verification". Historical = edition ≤ 2024, never shown as current.
- Hours/dates/addresses only where a source gave them; no images (no clearly licensed ones).
- Bangla copy is written in a West Bengal conversational tone but not reviewed by a native editor; quiz copy especially deserves a read-through.

## Known issues / risks
- Project folder is on NTFS: the dev server may not see edits to existing files (polling enabled; restart if not).
- Obsolete old files (`app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/error.tsx`, `app/play/`, `app/puja/page.tsx`, `app/globals.css`, `data/puja/`, old `components/puja/*`) must be removed from the project folder (see final report).
- No git repository in this folder.

## Next step
Run the checklist and `verify`, report failures, then decide on commit/push (not done).
