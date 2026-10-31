# Festival Atlas — Project Status

Start with `AGENTS.md` (working contract for any model/tool), then this file, newest section first.
The forward plan lives in `docs/ROADMAP.md` (one pipeline item at a time).

## Rath Yatra, Janmashtami, Lakshmi Puja 2027 + three more stories (2026-10-31, night)
- **`/rath-yatra-2027`** (Mon 5 Jul; Dwitiya tithi Kolkata/Dhaka; Mahesh since 1396, Dhamrai), **`/janmashtami-2027`** (Wed 25 Aug for Smarta and ISKCON alike; Ashtami, Rohini, Nishita puja 11:16 pm–12:01 am Kolkata, parana by practice; Dhaka times), **`/lakshmi-puja-2027`** (Kojagori, Thu 14 Oct; Nishita 10:58–11:47 pm Kolkata; Purnima tithi; moonrise). All from Drik's festival pages for Kolkata and Dhaka (`data/festivals/mid-2027.ts`); calendar rows, "Coming up" and the Pujo menu now link to them.
- `/durga-puja-2027`: Mahalaya Amavasya tithi and tarpan Kutup muhurat for Kolkata (11:03–11:51 am) and Dhaka (Drik Amavasya Shraddha page).
- Stories: Mahishasura Mardini (the Mahalaya radio programme), Kumartuli, Durga Puja's UNESCO listing (Dec 2021, decision 16.COM 8.B.15). 21 articles in total. Home hero shows today's Bangla date (Bangladesh calendar) under the countdown.
- Verified in the scratch copy (Node 24): 57/57 tests, build (435 pages), typecheck, smoke 282/282.

## Bengali calendar 1433 + llms-full.txt (2026-10-31, evening)
- **`/bengali-calendar-1433`** ("আজ বাংলা কত তারিখ"): today's date in Bangladesh's revised calendar (client widget, Dhaka date, read off the fixed month starts: Boishakh 14 Apr … Chaitra 15 Mar, Falgun 29/30; Wikipedia "Bengali calendars", 2019– column; `bdBanglaDate()` tested against known days), the Bangladesh month table, and West Bengal's 12 Sankranti dates and times for 1433 as Drik prints them for Kolkata. Drik prints no first-day dates for West Bengal months (only Pohela Boishakh 1433 = 15 Apr 2026), so none are derived; the page says to check the panjika. `FestivalPage` now takes children (rendered under the lead).
- **`/llms-full.txt`**: the key answers of every festival page and article (leads, date/time rows with sources, FAQs) as plain text for AI assistants; linked from `/llms.txt`.
- Verified in the scratch copy (Node 24): 57/57 tests, build (423 pages), typecheck, smoke 274/274.

## Amavasya 2027, temple guides, Christmas/New Year wishes (2026-10-31, evening)
- **`/amavasya-2027`**: 15 rows (Nov 2026–Dec 2027), Kolkata and Dhaka tithi times (Dhaka +30 min everywhere), Drik's "Darsha Amavasya" day shown where printed (Nov 2026, Jul, Sep, Nov 2027), Mahalaya / Kali Puja notes; April 2027 difference shown as printed (Dhaka lists Chaitra Amavasya on 7 Apr, Kolkata only Darsha on 6 Apr). Re-verified by a second agent fetch; linked from the Purnima and Ekadashi pages, menu, sitemap, llms.txt.
- **Temple guides** (evergreen "timings / how to reach" searches): Dakshineswar (hours 6:30 am–12:30 pm, 3:30–7:30 pm, checked by hand against dakshineswarkalitemple.org), Belur Math (6:30–11:30 am; evening 4–9 pm Apr–Sep, 3:30–8:30 pm Oct–Mar, checked against belurmath.org), Kalighat (no official hours online, so none given). Linked from the Kali Puja stories list.
- **Wishes**: "শুভ বড়দিন / Merry Christmas" and "Happy New Year 2027" cards and pages (auto 20–26 Dec and 27 Dec–2 Jan) in a new "Christmas & New Year" group.
- Every article now ends with "More stories" (next four articles), so all 18 articles link to each other.
- Verified in the scratch copy (Node 24): 56/56 tests, build (420 pages), typecheck, smoke 269/269.

## Blog batches 4–5, Kali page stories, home stories (2026-10-31, evening)
- New sourced articles (drafted by cheap-model agents, Bangla-reviewed by another, checked by hand): Tarapith on Kali Puja night, Shyama Puja in Bangladesh (Dhakeshwari, Ramna; holiday status marked unconfirmed), Nabanna, Chhath Puja 2026 in Kolkata (Sun 15 Nov; Drik sunrise/sunset arghya times; no ghat list without a dated source), Poush Mela Shantiniketan (2025: 23–28 Dec; 2026 not announced), Kolkata Book Fair 2027 (50th, 22 Jan–3 Feb per UNI 7 Sep 2026). 15 articles in total. Removed unverifiable details (Bamakhepa's dates conflict on Wikipedia; an unclear food name; an unsourced health line).
- Kali Puja page: "Kali Puja stories" list (6 articles) and two new FAQ answers (same day as Diwali; Bhoot Chaturdashi Sat 7 Nov). Home: "Puja stories" section with the latest three. "Coming up" now includes Chhath Puja and the Book Fair.
- Verified in the scratch copy (Node 24): 56/56 tests, build (408 pages), typecheck, smoke 260/260.

## AI visibility, Rash Purnima 2026, Poush Sankranti 2027 (2026-10-31, afternoon)
- **AI/search visibility** (from a cheap-model audit): `/llms.txt` (generated from the festival registry, articles and greetings; `app/llms.txt/route.ts`), explicit allow rules for AI crawlers in `app/robots.ts` (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended…; admin/API still blocked), Organization JSON-LD on every page (`orgLd`, logo = `/apple-icon`) referenced by articles and the home WebSite, WebPage node with `dateModified` and a visible `<time>` "last checked" under the lead on festival pages, `og:type=article` on blog posts, festival pages in the sitemap with `lastModified` via `data/festivals/index.ts` (import it as `@/data/festivals/index`: an older `data/festivals.ts` shadows the folder).
- **IndexNow** (Bing, Yandex…): key file `public/880f85be5d1a7f2a9a6bf0deec30bb06.txt`, `npm run indexnow` (or `node scripts/indexnow.mjs [paths]`) after a deploy pings every sitemap URL. **Owner step:** run it once after this deploy is live; also add the site to Bing Webmaster Tools (`NEXT_PUBLIC_BING_SITE_VERIFICATION`).
- **Share row** (`components/festival/SharePage.tsx`: share sheet / copy link + WhatsApp) on every festival page and article.
- **`/rash-purnima-2026`**: Tue 24 Nov (Drik Kartika Purnima, Kolkata 23 Nov 11:42 pm → 24 Nov 8:23 pm; Dhaka 12:12 am → 8:53 pm), Nabadwip–Santipur Raas Utsav 24–27 Nov (Incredible India), Shakta Rash and Arong, Shantipur's Rai Raja, Cooch Behar Rash Mela (Wikipedia), trains. Cooch Behar 2026 dates not posted yet.
- **`/poush-sankranti-2027`**: Drik: Fri 15 Jan 2027 for Kolkata and Dhaka; Sankranti moment Thu 14 Jan 9:14 pm (Kolkata) / 9:44 pm (Dhaka); punya and maha punya kaal; pithe-puli, Old Dhaka's Shakrain, Gangasagar (2027 dates not announced). Calendar hub row added.
- Greetings: Rash Purnima (auto 21–25 Nov) and Poush Sankranti (auto 10–16 Jan) cards and wishes pages. Bhoot Chaturdashi article now carries Drik's Kali Chaudas/Bhut Chaturdashi date (Sat 7 Nov, Chaturdashi 7 Nov 10:47 am → 8 Nov 11:27 am).
- Keyword plan from research (no real volume data available): next candidates are Gangasagar Mela 2027, Kolkata Christmas/Book Fair guides, Poush Mela, Nabanna, Lokkhi Puja bhog/panchali, pithe recipes, Bengali calendar 1433/1434 month pages, Bangladesh Shyama Puja (Dhakeshwari).
- Verified in the scratch copy (Node 24): 56/56 tests, build (396 pages), typecheck, smoke 252/252.

## Blog, wishes pages, Purnima 2027, "Coming up" (2026-10-31, afternoon)
Owner asked for continuous work on traffic; built with parallel cheap-model agents (research, drafting, Bangla review) and checked by hand.
- **Blog** (`/blog`, `/blog/[slug]`; `data/blog/*.ts`, `components/blog/ArticlePage.tsx`): sourced explainers in both languages with Article + FAQPage + Breadcrumb JSON-LD, inline sources, per-article OG image, sitemap with `lastModified`. Articles: Kali Puja and Diwali, Naihati Boro Maa, Bhai Phota rituals, Chandannagar's lights, Saraswati Puja rituals, Poila Boishakh traditions (+ batch 3 below when merged). A test enforces title/description length, every inline source listed, no ASCII digits in Bangla. Removed an unsourced "second only to Rio" claim. Footer link; festival pages and the Kali page link to the matching stories.
- **Wishes pages** `/greetings/<day>` (17 days × 2 languages): every line visible and copyable (Bangla, plus English on /en), the card maker preset to that day, link to the festival's date page, links to the other days; per-day OG image. Titles target "<festival> wishes in Bengali". All internal links now use these pages instead of `?d=`.
- **`/purnima-2027`**: 12 Purnimas of 2027 + Nov–Dec 2026, tithi times for Kolkata and Dhaka, the vrat day where Drik puts it a day earlier (Margashirsha 2026, Shravana, Kartika 2027), Dol / Raksha Bandhan / Kojagori notes. `ekadashi-2027.ts` renamed `lunar-2027.ts` (shared formatters; test-imported files may only `import type`).
- **Home**: "Coming up" strip (next 6 festivals, Ekadashis, Purnimas with day counts, read after mount) + link to the 2027 calendar; the countdown pill now counts down to the next festival after Bijoya week instead of "See you next year"; the "More pujas" section copy no longer says the pages are in the works.
- Amavasya page **not built**: Kolkata and Dhaka lists label some months differently (Darsha vs named); needs a manual look at the live pages.
- News check 31 Oct: still no 2026 cracker order, no 2026 Kali Puja themes, no 2026 Chandannagar arrangements.
- Verified in the scratch copy (Node 24): 56/56 tests, build (381 pages), typecheck, smoke 234/234.

## Durga Puja 2027 + Dol Purnima 2027 pages (2026-10-31, late night)
Not pushed yet.
- **`/durga-puja-2027`** (`data/festivals/durga-2027.ts`): Mahalaya Wed 29 Sep; Shashthi Tue 5 Oct (Bilva Nimantran, Kalparambha, Akal Bodhon, Adhivas) → Saptami 6 (Kolabou) → Ashtami 7 (Kumari Puja) → Fri 8 Oct Sandhi Puja (Drik also prints "Maha Navami" that day, shown as printed) → Navami Sat 9 → Vijaya Dashami Sun 10 (Sindoor Khela, Visarjan). Drik Durga Puja calendars for Kolkata and Dhaka fetched by hand: same six days. No clock times yet (Drik prints none); BD 2027 holidays not out. `/durga-puja-2026` now points to it under the lead and in the button row; calendar hub rows link to it.
- **`/dol-purnima-2027`** (`data/festivals/dol-2027.ts`): Mon 22 Mar 2027 (Drik Bengali calendar, Kolkata and Dhaka); Purnima tithi Kolkata 21 Mar 6:21 pm → 22 Mar 4:13 pm, Dhaka 6:51 pm → 4:43 pm (Drik Purnima lists, checked by hand); Holi and Chaitanya Mahaprabhu Jayanti the same day (Drik March festivals, Kolkata). "Happy Dol Jatra" greeting card (auto 16–23 Mar). Menu entry, sitemap, OG image, hub row link.
- Verified in the scratch copy (Node 24): 54/54 tests, build (331 pages), typecheck, smoke 219/219.

## Festival calendar 2027 hub + review fixes (2026-10-31, night)
Calendar plan C4. Not pushed yet.
- **`/calendar-2027`** (`data/festivals/calendar-2027.ts`): 18 rows, Saraswati Puja → Jagaddhatri Puja 2027, date + tithi as printed on Drik Panchang's Bengali calendar for Kolkata (all rows checked by hand against the live page); Raksha Bandhan from Drik's August festivals page. Durga Puja 2027: Shashthi Tue 5 Oct → Vijaya Dashami Sun 10 Oct, Sandhi Puja Fri 8 Oct (Drik Durga Puja calendar); Kali Puja Thu 28 Oct, Diwali 29 Oct, Bhai Phota 31 Oct, Jagaddhatri Sun 7 Nov, Dol Mon 22 Mar, Rath Yatra 5 Jul, Janmashtami 25 Aug, Mahalaya 29 Sep, Kojagori Lakshmi 14 Oct. Rows link to our festival pages; every festival page links back. FAQ answers the "… 2027 kobe" questions; Event JSON-LD for Durga Puja and Kali Puja 2027. Pujo menu entry, sitemap, OG image.
- `FestivalPage`: `timings` optional; table rows can link (`href`).
- Review fixes (cheap-model review of the festival pages): Saraswati small-hours times say "রাত ৩:০৪" (not ভোর) like the rest of the site; "last checked" date in Bangla digits; dropped an unsourced "tithi ends near sunrise" claim on the Ekadashi page; no "this month / next Ekadashi" wording that goes stale; Shivratri prahar rows carry their own day (Sat evening / Sat night / Sun small hours); 5 pm reads বিকেল; Ekadashi menu icon 🪔; all "as of" dates 31 Oct.
- **Parked**: C3 Purnima/Amavasya 2027 (Drik lists both a vrat day and a main day for several Purnimas; needs a clear rule before publishing).
- Verified in the scratch copy (Node 24): 54/54 tests, build (327 pages), typecheck, smoke 211/211. **Not visually checked** (no browser on this machine): please look at `/bn/calendar-2027`, `/bn/ekadashi-2027` and `/en/jagaddhatri-puja-2026` on a phone.

## Calendar landing pages: Ekadashi 2027, Saraswati Puja, Shivratri, Poila Boishakh (2026-10-31, night)
Calendar plan C2, C5, C6 (Shivratri), C7. Not pushed yet. All built on `FestivalPage` (now also renders list tables).
- **`/ekadashi-2027`** (`data/festivals/ekadashi-2027.ts`): all 25 Ekadashis of 2027 + Nov–Dec 2026; Smarta date (same in Kolkata and Dhaka), tithi start–end for Kolkata (IST) and Dhaka (BST), Vaishnava/ISKCON date where it differs (7 in 2027 + Devutthana 2026; Dec 2026 ISKCON for Kolkata marked "not checked"). Source: Drik Panchang yearly Ekadashi and ISKCON pages for Kolkata/Dhaka (geoname honoured); muhuratam.in Kolkata 2027 matches every Smarta date; 7 rows spot-checked by hand against the live Drik page. Rows are raw `"YYYY-MM-DD HH:MM"` strings, only formatted (`dayLabel`, `timeLabel`, Bangla ভোর/সকাল/দুপুর… words), never computed.
- **`/saraswati-puja-2027`**: Thu 11 Feb 2027; Panchami tithi + puja muhurat for Kolkata (6:11–11:51 am) and Dhaka (Drik). BD 2027 holiday status marked unknown (list not out).
- **`/shivratri-2027`**: Sat 6 Mar 2027; Chaturdashi, Nishita kaal, four prahars, parana for Kolkata and Dhaka (Drik; the working URL is `/festivals/maha-shivaratri/…`).
- **`/poila-boishakh-2027`**: 1434 begins Thu 15 Apr in West Bengal (Drik Kolkata, Sankranti 3:33 pm on 14 Apr) and Wed 14 Apr in Bangladesh (fixed date of the revised calendar, Wikipedia); why they differ, Haal Khata, Mangal Shobhajatra (UNESCO 2016).
- **Dol/Holi 2027 not built**: Bengal Dol date conflicts (21 vs 22 Mar, snippets only); Drik's Dhaka Holi page is a day later than Kolkata's. Needs a Bengali panjika/Drik Bengali calendar source.
- **Greetings**: Saraswati Puja, Shivratri, Noboborsho cards (new "Saraswati Puja to New Year" group), auto-picked around each date; a test ties their dates to the festival pages. Pujo menu: Ekadashi, Saraswati, Shivratri, Poila Boishakh entries link to the new pages. Sitemap entries, OG images, Kali page links to Jagaddhatri, Kali week list links Bhai Phota card + Jagaddhatri page. Bhai Phota card suggests "Dada, Bhai, Didi" in the "to whom" field (roadmap 4 done).
- Cracker order (roadmap 2): checked 31 Oct, still only the 2025 Kolkata Police order (8–10 pm, green only, IndiaBlooms 17 Oct 2025); recheck 4–7 Nov.
- Verified in the scratch copy (Node 24): validate (97), 54/54 tests (3 new: spring dates, festival pages, Ekadashi rows/labels), build (325 pages), typecheck, smoke 205/205.

## Jagaddhatri Puja 2026 hub + reusable festival page (2026-10-31, night)
Roadmap item 7 / calendar plan C1. Not pushed yet.
- **`/jagaddhatri-puja-2026`** (`data/festivals/jagaddhatri-2026.ts`, `app/[lang]/jagaddhatri-puja-2026/` page + OG image): Thu 19 Nov 2026 in Kolkata and Dhaka; Navami tithi Kolkata 18 Nov 6:04 am → 19 Nov 7:05 am, Dhaka 6:34 am → 7:35 am (Drik Panchang, both pages fetched); Delhi-based listings show 18 Nov (noted). Chandannagar: community pujas since ~1790, Chaulpatty (Wikipedia); 2025: 180 committees, Kanailal Pally 75 ft, immersion on Ekadashi (ETV Bharat 26 Oct 2025); lighting history and 2024 overnight procession (ETV Bharat 9 Nov 2024); 2026 arrangements marked "not announced as of 31 Oct". Krishnanagar: Krishnachandra account, Chashapara Burima (1772), Choto/Mejo Maa, Jaleswari (Wikipedia). Trains: Chandannagar 33 km from Howrah, Krishnanagar City Jn 100.2 km from Sealdah (Wikipedia station pages). FAQ, Event + FAQPage + ItemList + Breadcrumb JSON-LD, sitemap, Pujo menu chip now live.
- **Reusable renderer**: `components/festival/FestivalPage.tsx` + `data/festivals/types.ts`. A new festival page = one data file + a 20-line route + OG image.
- **Directory**: `puja` kinds generalised (`data/pandals/pujas.ts`: `OTHER_PUJAS` with icon/hub/og kicker; data-free so the client explorer can import it). 5 Jagaddhatri entries: Kanailal Pally, Helapukur (confirmed 2025), Bagbazar Sarbojanin (historical 2024), Lakshmiganj Chaulpatty, Chashapara Burima (pending: no year in source). Chips/badges/passport groups/hub breadcrumbs/OG kickers per puja kind; Event JSON-LD 19 Nov for confirmed 2026 Jagaddhatri entries.
- **Greeting**: "Shubho Jagaddhatri Puja" card (8 lines), auto-picked 12–20 Nov; season group renamed "Kali Puja to Jagaddhatri". `/greetings` title updated.
- Review fixes from the Kali pandal pass: pandal share image kicker follows the puja; Kali/Jagaddhatri pandals no longer appear in the Durga route maker or Durga passport groups (own groups instead).
- Verified in the scratch copy (Node 24): validate (97 entries), 51/51 tests, build, typecheck, smoke 186/186 (15 new).

## Kali Puja pandals in the directory + calendar-pages plan (2026-10-31, late night)
Roadmap item 5. Not pushed yet.
- **Data model**: optional `puja: "kali"` on entries (absent = Durga Puja), `pujaOf()`; validator accepts only `"kali"`. 14 entries: Naihati Boro Maa (UNI 25 Oct 2026: no VIP gate), Fatakesto, Somen Mitra's, Naba Rabin Sangha, Pathuriaghata Byayam Samity, Janbazar Sammilita, Haowa Shokal (Baranagar), Barisha Shanti Sangha, Shyamapally Shyama Sangha, Mainak Club, Keoratala Mahashmashan, ABS Sporting, Nabapally Association (Barasat), Girish Park Five Star. Source for most: Kolkata Khoj "Best Kali Puja Pandals 2026" (checked 27 Oct 2026, says its themes are 2025's), so 2025 themes sit in `history` and every description says the 2026 theme isn't announced yet. Pins: Wikipedia locality pages (Amherst Street = Raja Rammohan Roy Sarani); Naba Rabin Sangha and Mainak Club have no sourced pin. New cities Naihati, Barasat, Baranagar in `geo-bn.json`.
- **Directory**: "🌑 Kali Puja" chip and badge; `puja` filter in the URL (`/puja?puja=kali`). Collections (`/puja/kolkata|dhaka|abroad`) and home city counts are Durga-only (map links add `&puja=durga`).
- **Pandal page**: title "{name}: Kali Puja 2026 in {place}" (dict templates now take `{puja}`), Event JSON-LD on 8 Nov, breadcrumb to `/kali-puja-2026`, "same city" list stays within the same puja.
- **`/kali-puja-2026`**: "Kali Puja pandals 2026: Kolkata, Barasat, Naihati" section grouped by city with 2025 themes, ItemList JSON-LD, map link.
- Verified in the scratch copy (Node 24): validate (92 entries), 51/51 tests (filter + collections updated), build, typecheck, smoke 171/171 (7 new).
- **Plan for calendar landing pages** (Ekadashi, Purnima/Amavasya, festival hubs, calendar 2027): `docs/ROADMAP.md` → "Calendar landing pages". Next: C1 `/jagaddhatri-puja-2026` with a reusable festival-page renderer.

## Kali Puja, Diwali, Bhai Phota greeting cards + Shyama Puja postmark (2026-10-31, night)
Roadmap item 3.
- **Greetings** (`data/play/greetings.ts`): three new days, `kali` (stamp "শ্যামাপুজো / Shyama Puja"), `diwali`, `bhaiphota` (with the folk rhyme), 8–9 lines each. New optional fields: `season` (`durga` default, `kali`), `stamp`, `pool: false` (Diwali and Bhai Phota skip the Durga pandal-hopping pool). `DEFAULT_GREETING` replaces the "last item" fallback.
- **Auto pick**: `greetingFor(today, phase)`: 1–9 Nov → Kali Puja, 10–11 Nov → Bhai Phota, else the Durga calendar (Bijoya runs to 31 Oct). Dates in `KALI_WEEK_2026` mirror `KALI_2026` in `data/kali-puja.ts` (Drik Panchang); a test keeps them equal. Diwali is chip-only.
- **Chips** grouped by season (`components/play/GreetingDayChips.tsx`, `GREETING_SEASONS`, Kali season listed first; flip the order before Durga Puja 2027), used by `/greetings` and `/postcard`. Postcard hashtags follow the season (`#KaliPuja2026 …`).
- `/greetings` title/description/OG alt now lead with Kali Puja, Diwali, Bhai Phota. `/kali-puja-2026` CTA opens `/greetings?d=kali`.
- Verified in a scratch copy (Node 24.22): validate, 51/51 tests (new: Kali week dates), build, typecheck, smoke 164/164 (3 new, 1 changed).
- Next: item 2 (cracker order, when published), item 4 remainder (Bhai Phota "to my brother/sister" wording; the card itself is done), item 5 (Kali pandals, needs sources).

## Next.js security upgrade (2026-10-31, evening)
- `next` 16.4.0 → **16.4.3** (`package.json` `^16.4.3` + lockfile). 16.0.0–16.4.0 were flagged critical by `npm audit` (GHSA-2464-fhr4-w9xw image-optimizer RCE with SVGs, GHSA-p3m5-59mp-jv5r server-action DoS, GHSA-673q-mjm6-r5xr `use cache` RCE); first patched release is 16.4.1. `npm audit` now: 0 vulnerabilities. npm also re-sorted dependency keys and synced the lockfile's stale name/engines.
- Verified in the scratch copy (Node 24): validate, 50/50 tests, build (no security stop any more), typecheck, smoke 161/161.

## SEO pass, both languages (2026-10-31, later)
Audited all 267 built pages (title/description length, one h1, canonical, hreflang, og/twitter image, JSON-LD, duplicates).
- **Share images**: 8 indexed pages had none (`pageMeta` sets `openGraph`, which drops the parent's image). Added `opengraph-image.tsx` to `/local`, `/play`, `/passport`, `/postcard`, `/add-pandal`, `/feedback`, `/about`, `/me`. Don't put `images` in `pageMeta`: in this Next version config images override route image files.
- **Titles**: `pageMeta` drops the " · Pujo Guide" suffix when the title would pass 60 characters; pandal titles use the city without the country. Overlong titles 175 → 41 (the rest are long pandal/result names).
- **Descriptions**: `clampText()` trims meta/og/twitter descriptions to 160 characters at a word boundary. Overlong 119 → 1 (admin, noindex).
- Kali Puja title shortened. Smoke: og:image on `/en/about`, twitter:image on `/bn/passport`, description length on a pandal page; image checks for `/en/about`, `/bn/play`.
- Verified in the scratch copy (Node 24): build, typecheck, 50/50 tests, smoke 161/161.

## Roadmap + Kali Puja 2026 hub (2026-10-31)
- **`docs/ROADMAP.md`**: calendar-ordered pipeline (Kali Puja → crackers → cards → Bhai Phota → Kali pandals → crowd safety → Jagaddhatri → Wrapped → … → Durga Puja 2027), with the sourced dates that drive it.
- **`/kali-puja-2026`** (`app/[lang]/kali-puja-2026/page.tsx` + `opengraph-image.tsx`, data in `data/kali-puja.ts`): Sun 8 Nov; Amavasya and Nishita kaal for Kolkata (10:55–11:46 pm) and Dhaka (11:16 pm–12:08 am) from Drik Panchang; "what comes next" (Bhai Phota Wed 11 Nov per Drik via HinduTone; Jagaddhatri Navami Thu 19 Nov in Kolkata, Delhi listings say 18); firecracker rules (2026 order not out as of 25 Oct, 2025's 8–10 pm green-only shown as last year's); Naihati Boro Maa no-VIP-gate note (UNI, 25 Oct) + crowd tips; BD Shyama Puja holiday marked unconfirmed; FAQ + Event JSON-LD. Sitemap entry.
- **Pujo menu**: `PujaEntry.href` makes an entry a live link; Kali Puja is live, Kojagori Lakshmi (passed) removed, Jagaddhatri added as "soon". Feedback topics follow the same list.
- **Verified locally** in a scratch copy with Node 24: 50/50 unit tests, `next build`, `tsc --noEmit`, smoke 154/154 (7 new checks). The first `next build` stopped on a Next.js security notice; the retry built. `npm audit`: **next 16.4.0 is critical** (RCE advisories) → roadmap item 0.
- Local machine note: `node_modules/` and `.next/` in the repo are root-owned (from Docker) and the system Node (22.22) has no TypeScript stripping, so `npm run verify` can't run in place.
- Next: item 0 (Next.js upgrade) on the owner's OK, then item 2/3 (cracker notice, Kali/Diwali/Bhai Phota greeting cards).

## Greeting variety, whole-photo postcards, region by time zone (2026-10-16, evening)
- **Greeting lines**: 8–10 per day (82 total) + `COMMON_LINES` (12 pandal-hopping lines) appended via `linesFor(g)`; "🎲 Another line" is now `anotherLine()` (random, never the current one). Share-link `l` indexes stay stable (own lines first, pool after). Postcard captions show 4 chips + the same shuffle button.
- **Whole photo**: `renderPostcard({ fit })`: "contain" draws the full photo framed (rounded, cream border) between the brand line and a reserved `textZone`, over a blurred copy of itself (tiny-canvas upscale, works on old iOS). Auto when the photo's shape is >12% off the format; "🖼️ Whole photo / ⤢ Fill the frame" chips override. The format itself defaults to the one closest to the photo's shape until the visitor picks one.
- **Region**: `lib/region.ts` `guessRegion()` = saved choice → phone time zone (Asia/Dhaka → bd, Asia/Kolkata → wb) → wb; used by the postcard, greeting maker, countdown and `/me`. The postcard got the greetings page's day chips (pick ষষ্ঠী/সপ্তমী by hand); the stamp follows the chosen day.
- Tests: line counts/lengths/uniqueness, `anotherLine`, `regionFromTimeZone`.

## Postcard for unlisted pandals (2026-10-16, after the SEO batch)
- `/postcard`: "✏️ Not in the list? Write it" opens one field (the name). The pin comes from the photo's GPS, else "my location", else none (card without the map inset; `renderPostcard` now skips the inset and widens the text when `pin` is null). City/country are guessed from the nearest listed pin within 60 km (else the region's main city) — nothing else is asked. A checkbox (on by default, shown only when there is a pin) sends name + pin to the `places` queue with note "via postcard" for approval on `/admin`; once per name per session. Typed cards don't tick the passport; they log to `/me` as "📸 name · tithi"; share link points at `/postcard`. "Use the pandal near me" with nothing listed nearby now opens the name field instead of dead-ending.

## SEO fixes batch (2026-10-16)
**Owner step:** add `NEXT_PUBLIC_GSC_VERIFICATION=<your Search Console token>` in Vercel (all environments) before/with this deploy; the token is no longer in the code, so without the variable the tag disappears and verification can lapse.
- **GSC tag** from `NEXT_PUBLIC_GSC_VERIFICATION` only (`app/[lang]/layout.tsx`); old hardcoded token and its smoke line removed.
- **2026 editions**: Santosh Mitra Square (150 years of ‘Vande Mataram’, first light-and-sound show) and Alipore Sarbojanin (‘Ramayana: An Epic Woven in Time’) updated to 2026 from The Federal (7 Oct 2026, already cited in `events.ts`); their 2025 themes moved into a new optional `history` field (shown as "Past themes" on the pandal page); `bn.json` updated; validator checks `history`, `name_bn`, `area_bn`.
- **Siliguri off the Kolkata grouping**: collections gained `primaryCity` + `othersLabel`; the Kolkata page groups only Kolkata by area and puts Siliguri/Khardaha under "Elsewhere in West Bengal" with the city shown; stat row reads "N in Kolkata · M elsewhere · P on the map".
- **One counting function**: `data/pandals/counts.ts` (`countWhere`, `cityCount`, `topCities`, `collectionCounts`) feeds the home city chips and the collection pages, so home "Kolkata N" = Kolkata page "N in Kolkata".
- **Bangla names**: optional `name_bn`/`area_bn` on entries, `nameOf()`/`areaOf()` with English fallback, used by the directory/map items, pandal page (h1, title, meta, breadcrumb, JSON-LD), collection lists, live board, passport, postcard picker, `/me`, Bangla search text. Filled for the 10 Kolkata 2026 entries.
- **Coming soon**: only Lakshmi Puja and Kali Puja remain in `data/pujas.ts`.
- **og:locale**: `pageMeta({ region })` → `bn_IN`/`en_IN` on the Kolkata collection and Indian pandal pages; `bn_BD`/`en_US` elsewhere (`ogLocale()` in `lib/i18n.ts`).
- **Smoke checks added** (CI runs them; nothing was run here, no shell): hreflang alternates on `/puja/kolkata`, `/durga-puja-2026` and a pandal page; og:locale values; `sitemap.xml` lists kolkata/dhaka/abroad/dates in both languages; `robots.txt` allows `/`; Bangla h1 on `/bn/puja/sreebhumi-sporting-club`; "Elsewhere in West Bengal" group and the split stat row; past themes row. `summary()` moved to `counts.ts` (about page).
- Tests: none added (counts/collections need the JSON data, which `node --test` cannot import). Next: `area_bn` for the remaining Kolkata entries (Singhi Park, Lalabagan, Kashi Bose Lane share groups with Bangla-named ones), Dhaka `name_bn`, 2026 editions for the other 2025 Kolkata entries as sources appear.

## My Puja page, community places, puja timings, handover docs (latest, 2026-10-15, evening)
**Owner steps:** re-run `supabase/schema.sql` (adds `places` + `approved_places()`, service-role grants); the env vars listed in the section below.
- **`/me` "আমার পুজো-খাতা"** (`components/me/MyPuja.tsx`, `lib/activity.ts`): stats tiles (pandals, days out, postcards, reports, games, km between pins), day-by-day timeline with tithi labels (synthetic rows for visits ticked before logging existed; the passport is the truth), a shareable "My Puja 2026" card from the games' card engine (links to the passport share URL), copy-my-data (JSON) and clear-log. Logging hooks: `useVisits.toggle` (new ticks), `ResultStats` (quiz results, once per session), `CrowdMeter`/near-bar (reports), postcards. Header name chip now opens `/me`; footer link. `noindex`.
- **Community places** (`/add-pandal`, `lib/places*.ts`, `/api/places`, `places` table, `approved_places()`): visitors add a pandal/mandir with a name, area, city, country and a pin from a photo's GPS (read in the browser; the photo is not uploaded), "my location" or typed coordinates; "already listed nearby" hint within 150 m; honeypot. Rows are `pending` until approved on `/admin` (approve/reject with an OSM link to check the pin). Approved places show on `/puja` as teal dots (escaped popups) and a "Added by visitors" list, filtered with the rest. GET edge-cached 5 min.
- **Puja timings 2026** on `/durga-puja-2026` (`data/puja-timings.ts`): tithi start/end, Bodhon/Adhibas, Sandhi Puja (Bishuddha Siddhanta vs Gupta Press), anjali, darpan bisarjan for Kolkata (Drik Panchang, Belur Math, Beni Madhab Sil panjika, Sangbad Pratidin) and Bangladesh (Prothom Alo dates, holiday gazette, Dhaka procession 3 pm; mandir.bd rows marked second-hand). New FAQ "When is Sandhi Puja". BD calendar corrected from the 14 Oct Prothom Alo schedule: Saptami 17–18, **Ashtami 19** (was an 18 Oct estimate); `ESTIMATED.bd` is now only Panchami.
- **Postcard colours**: six palettes in `POSTCARD_THEMES` (`lib/postcard.ts`), picker chips on `/postcard`, default follows the site theme (`fa:theme`) or the last choice (`fa:postcard:theme`).
- **Handover**: `AGENTS.md` (concept, rules, verification, env, DB, routes, gotchas) + `CLAUDE.md` pointer; a saved `pujo-guide-dev` skill mirrors the checklist.
- Not run here; CI runs it. Tests: places cleaning, BD Saptami/Ashtami phase. Smoke: `/add-pandal`, `/api/places`, `/me`, timings strings.
- Next candidates: Puja Wrapped after Dashami (the `/me` card already covers "so far"), postcard thumbnails in IndexedDB, Parishad/Dhakeshwari clock times when published, theme quiz, squad live map, diaspora pins, dhak game.

## Photo postcard, Pujo menu, feedback inbox, admin dashboard (2026-10-15)
**Owner steps:** (1) re-run `supabase/schema.sql` (adds `feedback` + service-role grants); (2) in Vercel → Settings → Environment Variables add `ADMIN_USER`, `ADMIN_PASSWORD` (10+ chars) and `SUPABASE_SERVICE_ROLE_KEY` (Supabase → Project Settings → API keys → service_role / secret key; **no** `NEXT_PUBLIC_` prefix, server-only), then redeploy. Optional `ADMIN_SESSION_SECRET`.
- **Puja postcard** (`/postcard`, `lib/exif.ts`, `lib/postcard.ts`, `components/postcard/PostcardMaker.tsx`): pick/take a photo → its EXIF GPS (read in the browser) picks the nearest pandal within 1.5 km, else "near me" or search → story/square/portrait JPEG drawn on a canvas: full-bleed photo, brand corner + site host, tilted postmark with the day's tithi (by saved region) and date, pandal name + area, map inset from OpenStreetMap tiles (stylised grid when offline) with a pin, caption from the day's greeting lines or your own, "— Name · Pandal #n". Share sheet with the file (caption + hashtags + pandal link), save, copy caption. Making one ticks the passport and logs to the on-device activity log (`lib/activity.ts`, `fa:log`, for the coming `/me` page). Nothing is uploaded. Buttons: home hero, every pandal page (`?p=id`), footer.
- **Pujo menu** (`data/pujas.ts`, `components/home/PujaMenu.tsx`, home section): Durga Puja live + Lakshmi, Kali, Jagaddhatri, Saraswati, Shivratri, Dol, Pohela Boishakh, Rath, Janmashtami, Ekadashi, Purnima as "soon" chips → native `<dialog>` "coming soon" with a link to feedback (`?topic=<id>`). Only seasonal hints, no unsourced dates.
- **Feedback** (`/feedback`, `lib/feedback*.ts`, `/api/feedback`, `feedback` table): topic (general/bug/idea/puja-x), optional email/phone, message; honeypot field; anon key can only insert. Footer link "💬 Give feedback".
- **Admin** (`/en/admin`, `lib/admin*.ts`, `/api/admin`): static username/password from env, HMAC-signed 12 h cookie (`pg_admin`, HttpOnly, Lax, Secure in prod), plain HTML forms (no JS needed), origin check, 800 ms delay on a failed login, noindex + robots disallow. Shows feedback inbox (delete), leaderboard nicknames (remove all rows for a nickname), counts, purge of old signals. Reads use the service-role key on the server only.
- Not run here; CI runs it. Tests: EXIF parser on a synthetic JPEG, activity log, admin sessions, feedback cleaning. Smoke: `/postcard`, `/feedback`, `/admin`, home menu.
- Next (Phase B, tomorrow): `/me` profile page (stats, timeline by tithi, postcard gallery via IndexedDB, export/import); Phase C: Puja Wrapped card.

## Near me, crowd heat layer, queue waits, anjali/bhog timings (2026-10-15)
Ideas 1–4 from the engagement list. **Owner step: re-run `supabase/schema.sql` in the SQL Editor** (it widens `signals` checks for the `wait` kind, drops and recreates `live_board()` with `wait_n`/`wait_med`, and adds the `timings` table + `timings_today()`).
- **Near me** (`components/live/useNearMe.ts`, `lib/geo.ts`): a "📍 কাছের পুজো" chip on the map/explorer asks the browser for location once; the position stays in memory (never stored or sent). Pinned pandals sort by distance with "৮০০ মি / 2.4 km" badges; a near-bar names the nearest pandal and offers "I'm here" only within 800 m. Positions outside the Kolkata/Dhaka box (lat 20–27, lng 86–93) show "no pins near you" instead of sorting nonsense.
- **Heat layer** (`PujaMap` props `user`, `heat`, `userLabel`): soft green/orange/red circles from the live board's crowd level, radius grows with check-ins; a blue dot for the visitor. Pandal-level counts only, no positions stored.
- **Queue wait** (`signals.kind = 'wait'`, value 1–4 ≈ 5/15/30/60+ min, hourly bucket per device): four chips on the pandal page; median over 90 min shown as "⏳ Queue: ~15 min" / "15–30 min" on the pandal page, list rows and the home board.
- **Anjali/bhog timings** (`timings` table, one row per device/pandal/kind/Kolkata-day): `<input type="time">` + "জানাও"; `timings_today()` returns the most common 15-minute slot and count ("অঞ্জলি: সকাল ৯:০০ · ৩ জন জানিয়েছে").
- Review fixes: wait line no longer hidden behind a crowd report; `wait_med` typed `double precision` (what `percentile_cont` returns; `numeric` would fail the SQL-function return check); `minutes` must be a JSON number; distance rounding never prints "1000 m"/"10.0 km".
- Not run here; CI runs it. Tests: `waitLabel`, `fmtClock`, `kolkataDay`, `distanceM`, `fmtDistance`, `inServiceArea`. Next candidates (owner to pick): theme quiz, squad live map, meeting-point card, Puja Wrapped, diaspora pins, dhak game, photo wall, push notifications.

## Community layer: results, leaderboard, activity feed (2026-10-15)
Supabase `plays` table (`supabase/schema.sql`, second section; re-run the whole file, it is idempotent) + `lib/community*.ts` + `/api/community` (GET edge-cached 60 s; POST validated: real game, real result id, passport score ≤ directory size, nickname cleaned to 24 chars) + `components/community/*`:
- **Quiz result stats**: a player's own result is recorded anonymously (device id + result id, once per session) and the card shows "তোমার মতো {title} হয়েছে আরও ১২ জন (৩৪%)". Hidden without a database.
- **Passport leaderboard** (`/passport`): opt-in "🏆 লিডারবোর্ডে আমার নাম তোলো" with a nickname (prefilled from the profile, editable); score = pandals ticked; best score per device; top 20 with 🥇🥈🥉; "update my score" after more ticks.
- **Activity ticker** on the home page: last plays, check-ins and ❤️ ("কেউ একজন চেক-ইন করল শ্রীভূমিতে", "Rini হল ভোগের বুম্বা"); nicknames only where the player joined the board. Result titles are passed from the server so quiz text isn't shipped to the client.
- Hardened after review: database-sourced keys are looked up as own properties only (a row with game "constructor" can't reach `Object`), null-prototype maps server-side, nickname virama fix.
- About page copy updated: names leave the browser only when the player joins the leaderboard; results and crowd reports are anonymous.
- Offensive nicknames: no automatic filter; delete rows in Supabase (`delete from plays where nickname = '…'`). Known soft spot: a scripted client could post fake results/scores; scores are capped and counts use distinct devices.
- Not run here; CI runs it. Tests: nickname cleaning, result share. Smoke: `/api/community`.

## Puja-week engagement: passport, live crowd meter, greeting cards (2026-10-15)
**CI run of 2026-10-15:** install, data validation, unit tests, build and type-check all passed; the smoke test ran 100+ checks and failed exactly one: the `x-default` hreflang regex expected a trailing slash that Next strips from the resolved root URL (a pre-existing test bug, fixed in `scripts/smoke.mjs`). Owner: push again, paste the SQL, verify on the live URL.

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
- **Owner to do after deploy:** submit the sitemap in Google Search Console (set `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel; done 16 Oct), test `/en/puja/kolkata` and `/en/durga-puja-2026` in the Rich Results Test, and re-check share previews in the Facebook debugger (OG image URLs changed for game/result pages).

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
- **SEO:** per-language `<html lang>`, canonical, hreflang (`en`, `bn`, `x-default` → `/`), localized titles/descriptions, JSON-LD (WebSite, BreadcrumbList, ItemList), bilingual `sitemap.xml` with alternates, `robots.txt`, one indexable URL per pandal and per result. Needs `NEXT_PUBLIC_SITE_URL` (optional: `NEXT_PUBLIC_GSC_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`).
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
