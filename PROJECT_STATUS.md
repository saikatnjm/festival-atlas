# Festival Atlas — Project Status

## Improvement tasks, group 1 (latest, from the "Festival Atlas improvement tasks" checklist)
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
