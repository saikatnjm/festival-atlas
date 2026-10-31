# Pujo Guide roadmap (pipeline)

Ordered by the festival calendar: whatever people search for next ships first. Each item moves
**Queued → Building → Review (owner pushes) → Live**. One item at a time; when an item goes Live,
note the date and the `PROJECT_STATUS.md` section. Facts on every page follow AGENTS.md rule 1
(sourced, both readings where panjikas differ).

Research basis (31 Oct 2026): Google's India Year in Search 2025 lists "Durga Puja near me" among the
top trending "near me" questions ([t2online](https://t2online.in/tech/tech-news/google-s-year-in-search-2025--india-s-biggest-questions--trends-and-viral-moments-revealed/2002546));
no search-volume data was available beyond that, so the order below follows the calendar and news.

## Calendar that drives the order (sourced)

| Festival | Date | Source |
|---|---|---|
| Kali Puja / Diwali | Sun 8 Nov 2026; Kolkata Nishita 10:55–11:46 pm | [Drik Panchang, Kolkata](https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=1275004&year=2026) |
| Bhai Phota | Wed 11 Nov 2026 (some panjikas may differ) | [HinduTone, 6 Oct 2026 (cites Drik)](https://hindutone.com/festivals/bhai-phonta-2026-bengal-date/) |
| Jagaddhatri Puja (Navami) | Thu 19 Nov 2026 in Kolkata (Delhi listings say 18) | [Drik Panchang, Kolkata](https://www.drikpanchang.com/festivals/jagaddhatri-puja/jagaddhatri-puja-date-time.html?geoname-id=1275004&year=2026) |
| Saraswati Puja | Thu 11 Feb 2027 | [Wikipedia, Vasant Panchami](https://en.wikipedia.org/wiki/Vasant_Panchami) — recheck with a panjika before building |

## Pipeline

| # | Item | Status | Window |
|---|---|---|---|
| 1 | **Kali Puja 2026 hub** `/kali-puja-2026`: sourced dates and Nishita times (Kolkata + Dhaka), the week ahead (Bhai Phota, Jagaddhatri), cracker rules (2026 notice pending, 2025 pattern shown as last year's), Naihati Boro Maa crowd note, FAQ + Event JSON-LD; Pujo menu chip goes live | **Review** (built 31 Oct; owner pushes) | before 8 Nov |
| 2 | **Cracker notice update**: replace the "awaiting 2026 notice" row with the Kolkata Police / WBPCB 2026 order as soon as it is published | Queued (watch news) | 4–8 Nov |
| 3 | **Kali/Diwali greeting cards + postcard stamp**: add Kali Puja, Diwali and Bhai Phota days to `data/play/greetings.ts`; postcard postmark for Shyama Puja | **Review** (built 31 Oct; owner pushes) | before 8 Nov |
| 4 | **Bhai Phota card**: phonta card ("to my brother/sister"), the rhyme, both dates if panjikas differ | **Review** (sibling placeholder added 31 Oct) |  before 11 Nov |
| 5 | **Kali Puja pandals**: sourced entries (Barasat, Naihati, Madhyamgram, Kolkata) in the directory with `puja: "kali"`, so map, passport, crowd meter work | **Review** (14 entries built 31 Oct; add 2026 themes when announced ~3–7 Nov) | before 8 Nov if sources exist |
| 6 | **Crowd-safety layer**: "very crowded, try later" nudge from the crowd meter, an "unsafe crowd" report kind, official helplines (sourced). Context: Chorbagan crush, 17 Oct 2026 ([The Quint](https://www.thequint.com/news/breaking-news/kolkata-durga-puja-pandal-stampede-investigation-updates)) | Queued | November |
| 7 | **Jagaddhatri Puja hub** `/jagaddhatri-puja-2026`: Chandannagar + Krishnanagar, lighting, trains from Howrah, dates per panjika | **Review** (built 31 Oct; add 2026 procession/trains when announced) | before 16 Nov |
| 8 | **Puja Wrapped 2026**: end-of-season recap card from `/me` (pandals, days, postcards, km) | Queued | November |
| 9 | **Updates opt-in**: a WhatsApp channel / Telegram link for "tell me when the notice is out" (no numbers stored) | Queued | November |
| 10 | **Festival calendar 2027** `/calendar-2027`: every Bengali puja with WB and BD dates, sourced | Queued | December |
| 11 | **"Puja near me" pages**: per-city/area landing pages (Kolkata areas, Dhaka, Siliguri, diaspora cities) | Queued | December–January |
| 12 | **Saraswati Puja 2027 hub**: dates, anjali window, school/college pujas via `/add-pandal`, "hate-khori" card | Queued | before 11 Feb 2027 |
| 13 | **Theme archive**: per-pandal year history for "[pandal] 2027 theme" searches | Queued | mid-2027 |
| 14 | **Safety-first route planner** for Durga Puja 2027: off-peak hours from wait/crowd data, rain advice | Queued | before Durga Puja 2027 |
| 15 | **Push notifications** (free tier only) for the live board and saved pandals | Queued | before Durga Puja 2027 |

## Calendar landing pages (panjika SEO) — plan, 31 Oct 2026

Goal: pages that people land on from Google for "when is X" questions (Ekadashi, Purnima, Amavasya,
festival dates, Bengali calendar), in Bangla and English, with WB and Bangladesh side by side.

**What the research found** (agent report, 31 Oct): no search-volume numbers are available to us
(no Trends/Keyword Planner access); demand is inferred from how many sites serve each query. Drik
Panchang dominates "today's panchang"/choghadiya (don't compete there). Bangla-language results for
"একাদশী কবে", "পঞ্জিকা ২০২৭" are thin; nobody shows Kolkata and Dhaka together; neither Drik nor
bangladatetoday.com has a visible FAQ. Real numbers: read Search Console (`NEXT_PUBLIC_GSC_VERIFICATION`)
after a few weeks and reorder.

**Data rule** (AGENTS.md rule 1): every date is hand-entered from a cited per-festival page
(Drik Panchang Kolkata/Dhaka pages, ISKCON lists for Vaishnava Ekadashi, Bangladesh holiday gazette,
panjika readings reported in news), with `{title, url, date}`; Smarta and Vaishnava Ekadashi are kept
separate, never merged; a date with no source shows "to be confirmed". No bulk copying of Drik tables
(their footer claims copyright on data): one festival = one cited row. Computing tithis ourselves
(astronomy-engine, MIT) is parked: it may differ from printed panjikas by a day, so at most a labelled
"computed" cross-check later, never the shown date.

**Structure** (same slug style as `/durga-puja-2026`, `/kali-puja-2026`; both languages; one
reusable `FestivalPage` renderer + `data/calendar/*.ts`, so later pages are data-only):
- Hero answer first: date, weekday, tithi window for Kolkata (IST) and Dhaka (BST), source links.
- "Why panjikas differ" note where they do; rituals/what to do in 2–3 short paras (own words).
- FAQ (4–6, visible) → FAQPage JSON-LD; Event JSON-LD only for sourced dates; BreadcrumbList.
- Related-dates strip (previous/next festival) + link to `/calendar-2027` hub; greeting card and
  postcard CTAs where the festival has them (shareable = backlinks).
- Titles: "<Festival> 2027: তারিখ, তিথি ও সময়" / "<Festival> 2027: Date, Tithi & Time" (≤60 chars),
  sitemap entries, smoke strings, OG image per page.

**Order** (calendar-first; each ships ~1–3 weeks before its date):
| # | Page | Why now |
|---|---|---|
| C1 | `/jagaddhatri-puja-2026` (roadmap 7): Chandannagar + Krishnanagar, dates, trains, lighting, pandals | **Review** (built 31 Oct) |
| C2 | `/ekadashi-2027`: every Ekadashi Nov 2026 → Dec 2027, Smarta vs ISKCON columns, Kolkata + Dhaka | **Review** (built 31 Oct) |
| C3 | `/purnima-amavasya-2027`: full/new moon dates and tithi windows | Parked: Drik shows separate vrat and main days for some Purnimas; decide which to show |
| C4 | `/calendar-2027` (roadmap 10): every Bengali puja/festival, links to C-pages | **Review** (built 31 Oct; WB dates; BD only for Poila Boishakh) |
| C5 | `/saraswati-puja-2027` (roadmap 12) | **Review** (built 31 Oct) |
| C6 | `/shivratri-2027`, `/dol-purnima-2027` | **Review** (built 31 Oct; Dol from Drik's Bengali calendar, 22 Mar) |
| C7 | `/poila-boishakh-2027` (1434): WB vs BD dates | **Review** (built 31 Oct) |
| C8 | `/durga-puja-2027` **Review** (built 31 Oct, days only; add times when panjikas publish). Later: Rath Yatra, Janmashtami, Lokkhi Puja 2027 pages (dates already on `/calendar-2027`) | mid-2027 |
Not planned: daily "today's tithi" pages, wedding/annaprashan dates (no open sourced data; high competition).

## Built on 31 Oct 2026 (autonomous session; all pushed)
| Area | What exists now |
|---|---|
| Festival pages (FestivalPage + data file each) | Kali Puja 2026, Jagaddhatri 2026, Rash Purnima 2026, Poush Sankranti 2027, Saraswati 2027, Shivratri 2027, Dol 2027, Ram Navami 2027, Poila Boishakh 1434, Jamai Shashthi 2027, Rath Yatra 2027, Janmashtami 2027, Durga Puja 2027 (+ Mahalaya tarpan), Lakshmi Puja 2027 |
| Lists / tools | `/calendar-2027` hub, `/ekadashi-2027`, `/purnima-2027`, `/amavasya-2027`, `/bengali-calendar-1433` (today's Bangla date, BD month starts, WB Sankrantis) |
| Directory | Kali Puja (14) and Jagaddhatri (5) listings with chips, badges, passport groups, hub breadcrumbs |
| Blog `/blog` | 21 sourced articles (Kali/Diwali, Bhoot Chaturdashi, Naihati, Tarapith, Dakshineswar, Kalighat, Belur Math, Bangladesh Shyama Puja, Bhai Phota, Chhath, Chandannagar, Krishnanagar, Nabanna, Poush Mela, Book Fair, Ekadashi fasting, Saraswati rituals, Poila Boishakh, Mahishasura Mardini, Kumartuli, Durga Puja UNESCO) |
| Wishes `/greetings/<day>` | 23 days incl. Kali, Diwali, Bhai Phota, Jagaddhatri, Rash, Christmas, New Year, Poush, Saraswati, Shivratri, Dol, Noboborsho, Jamai Shashthi |
| AI / search | `/llms.txt`, `/llms-full.txt`, AI crawler rules, Organization JSON-LD, dated pages, IndexNow key + `npm run indexnow`, share buttons, "Coming up" + next-festival countdown + Bangla date on home |

## Next (in order)
1. **Owner steps**: after the deploy, `npm run indexnow`; add the site to Bing Webmaster Tools; resubmit `sitemap.xml` in Search Console; watch Search Console queries for 2–3 weeks and reorder this list by real impressions.
2. **Kali Puja 2026 updates (3–8 Nov)**: 2026 pandal themes into the Kali entries as they're reported; the 2026 cracker order (roadmap 2).
3. **Jagaddhatri 2026 updates (by 16 Nov)**: Chandannagar procession date, special trains, committee count.
4. Pages still missing a source: Basanti Puja, Charak/Gajan, Kartik Puja, Itu Puja, Nabanna date (no Drik row); Gangasagar Mela 2027 dates (not announced); Kolkata Christmas guide.
5. Calendar 2028 and Durga Puja 2027 clock times when panjikas publish (usually mid-2027).
6. Puja Wrapped card (roadmap 8), crowd-safety layer (roadmap 6), updates opt-in (roadmap 9).

## Done
- 31 Oct: Next.js 16.4.0 → 16.4.3 security upgrade (`npm audit` clean).
- 31 Oct: SEO pass on all pages, both languages (share images, title/description lengths); see PROJECT_STATUS.md.

## Housekeeping
- Kojagori Lakshmi Puja (the October full moon after Dashami) has passed; removed from the Pujo menu with item 1.
- Owner step still open from the SEO batch: `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel.
