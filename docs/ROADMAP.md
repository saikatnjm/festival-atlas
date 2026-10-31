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
| 0 | **Next.js security upgrade**: `npm audit` (31 Oct) flags next 16.0.0–16.4.0 as critical (GHSA-2464-fhr4-w9xw, GHSA-p3m5-59mp-jv5r, GHSA-673q-mjm6-r5xr); bump to the patched release, rebuild, smoke | **Waiting for owner OK** | now |
| 1 | **Kali Puja 2026 hub** `/kali-puja-2026`: sourced dates and Nishita times (Kolkata + Dhaka), the week ahead (Bhai Phota, Jagaddhatri), cracker rules (2026 notice pending, 2025 pattern shown as last year's), Naihati Boro Maa crowd note, FAQ + Event JSON-LD; Pujo menu chip goes live | **Review** (built 31 Oct; owner pushes) | before 8 Nov |
| 2 | **Cracker notice update**: replace the "awaiting 2026 notice" row with the Kolkata Police / WBPCB 2026 order as soon as it is published | Queued (watch news) | 4–8 Nov |
| 3 | **Kali/Diwali greeting cards + postcard stamp**: add Kali Puja, Diwali and Bhai Phota days to `data/play/greetings.ts`; postcard postmark for Shyama Puja | Queued | before 8 Nov |
| 4 | **Bhai Phota card**: phonta card ("to my brother/sister"), the rhyme, both dates if panjikas differ | Queued | before 11 Nov |
| 5 | **Kali Puja pandals**: sourced entries (Barasat, Naihati, Madhyamgram, Kolkata) in the directory with `puja: "kali"`, so map, passport, crowd meter work | Queued (needs sources per pandal) | before 8 Nov if sources exist |
| 6 | **Crowd-safety layer**: "very crowded, try later" nudge from the crowd meter, an "unsafe crowd" report kind, official helplines (sourced). Context: Chorbagan crush, 17 Oct 2026 ([The Quint](https://www.thequint.com/news/breaking-news/kolkata-durga-puja-pandal-stampede-investigation-updates)) | Queued | November |
| 7 | **Jagaddhatri Puja hub** `/jagaddhatri-puja-2026`: Chandannagar + Krishnanagar, lighting, trains from Howrah, dates per panjika | Queued | before 16 Nov |
| 8 | **Puja Wrapped 2026**: end-of-season recap card from `/me` (pandals, days, postcards, km) | Queued | November |
| 9 | **Updates opt-in**: a WhatsApp channel / Telegram link for "tell me when the notice is out" (no numbers stored) | Queued | November |
| 10 | **Festival calendar 2027** `/calendar-2027`: every Bengali puja with WB and BD dates, sourced | Queued | December |
| 11 | **"Puja near me" pages**: per-city/area landing pages (Kolkata areas, Dhaka, Siliguri, diaspora cities) | Queued | December–January |
| 12 | **Saraswati Puja 2027 hub**: dates, anjali window, school/college pujas via `/add-pandal`, "hate-khori" card | Queued | before 11 Feb 2027 |
| 13 | **Theme archive**: per-pandal year history for "[pandal] 2027 theme" searches | Queued | mid-2027 |
| 14 | **Safety-first route planner** for Durga Puja 2027: off-peak hours from wait/crowd data, rain advice | Queued | before Durga Puja 2027 |
| 15 | **Push notifications** (free tier only) for the live board and saved pandals | Queued | before Durga Puja 2027 |

## Done
- 31 Oct: SEO pass on all pages, both languages (share images, title/description lengths); see PROJECT_STATUS.md.

## Housekeeping
- Kojagori Lakshmi Puja (the October full moon after Dashami) has passed; removed from the Pujo menu with item 1.
- Owner step still open from the SEO batch: `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel.
