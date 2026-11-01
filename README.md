# Pujo Guide (Festival Atlas)

**A free, bilingual (বাংলা + English) guide to Durga Puja and every Bengali Hindu festival, for West Bengal, Bangladesh and Bengalis everywhere.**

🌐 Live site: **[pujoguide.vercel.app](https://pujoguide.vercel.app)**

Every date and time on the site comes from a cited source, and pages show Kolkata and Dhaka times side by side.

---

## What's inside

| Area | What it does |
|---|---|
| 🗺️ **Pandal guide** | A sourced directory of Durga Puja pandals with a map, themes and directions |
| 📅 **Festival date pages** | Durga Puja, Kali Puja, Saraswati Puja, Dol, Rath Yatra, Janmashtami, Diwali and many more, each with tithi and muhurat times for Kolkata and Dhaka |
| 🪔 **Panjika lists** | Every Ekadashi, Purnima, Amavasya, Sankashti Chaturthi, Pradosh Vrat and Masik Shivratri of the year |
| 💍 **Shubh dates** | Marriage and Griha Pravesh dates for the year |
| 🗓️ **Bengali calendar** | Today's Bangla date and the month table |
| 📍 **Live crowd board** | Visitors report how crowded a pandal is right now |
| 🎴 **Shareable cards** | Festival wishes, photo postcards, quiz results and a pandal "passport" |
| 📰 **Stories** | Short sourced articles on traditions, temples and festivals |

Everything is in both languages: `/bn/...` for Bangla and `/en/...` for English.

---

## Principles

1. **Sourced facts only.** Every date, time and claim links to where it came from. If we don't know something, the page says so.
2. **Privacy first.** No accounts and no ads. Photos and locations stay on your device.
3. **Free to run.** It runs entirely on free tiers: Vercel Hobby, Supabase Free and GitHub Actions.

---

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (app router) + **React 19** + **TypeScript**
- **[Supabase](https://supabase.com/)** (Postgres) for the live board, games and visitor-added pandals. It is called with plain `fetch`; there's no SDK.
- **[Leaflet](https://leafletjs.com/)** for maps
- **Vercel** for hosting and the daily cron, and **GitHub Actions** for CI

The project keeps dependencies to a minimum on purpose.

---

## Run it locally

You need **Node.js 22.18 or newer**.

```bash
git clone https://github.com/saikatnjm/festival-atlas.git
cd festival-atlas
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site works without a database. Without the Supabase settings, the live features (crowd board, leaderboard, add-a-pandal) simply hide themselves.

---

## Environment variables

Set these in **Vercel → Settings → Environment Variables**, or in a local `.env.local` file. All of them are optional.

| Variable | Needed for | Type |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical links and the sitemap, e.g. `https://pujoguide.vercel.app` | Config |
| `NEXT_PUBLIC_SUPABASE_URL` | Live features. Use exactly `https://xxxx.supabase.co` | Config |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Live features. Use the `sb_publishable_…` key | Config |
| `SUPABASE_SERVICE_ROLE_KEY` | The admin page. Use the `sb_secret_…` key. **Server-only: never add `NEXT_PUBLIC_`** | Secret |
| `ADMIN_USER`, `ADMIN_PASSWORD` | Login for `/en/admin` (password must be 10+ characters) | Secret |
| `CRON_SECRET` | Protects `/api/keepalive`. Add the same value as a GitHub Actions secret | Secret |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (`G-…`) | Config |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification | Config |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools verification | Config |

> After changing any variable in Vercel, **redeploy**. Values are read when the site is built.

---

## Database setup (Supabase)

1. Create a free Supabase project.
2. Open **SQL Editor → New query**, paste all of [`supabase/schema.sql`](supabase/schema.sql), and click **Run**. The file is safe to run again; it never deletes data.
3. If the API still answers 404 straight afterwards, run `notify pgrst, 'reload schema';` once.
4. Add the URL and keys to Vercel (see above) and redeploy.

**Keeping a free project awake:** Supabase pauses Free projects after a week without database activity ([Supabase docs](https://supabase.com/docs/guides/platform/free-project-pausing)). This repo pings the database automatically:

- a **daily Vercel cron** (configured in `vercel.json`), and
- a **GitHub Action**, "Keep Supabase awake", that runs twice a day and emails you if it fails.

Both call `/api/keepalive`, which runs three small read-only queries.

---

## Useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm test` | Run the unit tests |
| `npm run typecheck` | TypeScript check |
| `npm run validate` | Check the pandal data files |
| `npm run verify` | Everything CI runs: data, tests, build, smoke test |
| `npm run indexnow` | After a deploy, tell Bing and other search engines about new pages |

---

## Project layout

```
app/[lang]/        every page (lang = en | bn)
app/api/           server routes (live board, community, places, feedback, keepalive)
components/        UI, grouped by feature
data/              all content: pandals, festival pages, blog posts, greetings, translations
  festivals/       festival date pages (one object per page, every row cites its source)
  blog/            stories
lib/               helpers (Supabase access, SEO, analytics, dates)
supabase/          schema.sql: the whole database
scripts/           data validation, smoke test, IndexNow
tests/             unit tests
```

### Adding a festival page

1. Add a `FestivalPage` object in `data/festivals/`. Look at `mid-2027.ts` for the pattern. Every date and time needs a `source: { title, url }`.
2. Register it in `data/festivals/index.ts`. That adds it to the sitemap and `llms.txt`.
3. Add a route folder `app/[lang]/<slug>/` with `page.tsx` and `opengraph-image.tsx`, copied from an existing festival.
4. Optionally add it to the menu (`data/pujas.ts`) and the home page's "Coming up" strip (`data/festivals/upcoming.ts`).
5. Run `npm run verify`.

---

## Contributing

Corrections are very welcome, especially dates that differ between panjikas, or between West Bengal and Bangladesh. Please include the source (a link, or the panjika name and page) with any change to a date or time.

- **Found a wrong date?** Open an issue, or use the feedback form on the site.
- **Know a pandal we're missing?** Use **Add a pandal** on the site.

For anyone working on the code (people or AI tools), [`AGENTS.md`](AGENTS.md) has the full working rules. [`PROJECT_STATUS.md`](PROJECT_STATUS.md) logs what was built and when.

---

Made with ❤️ for every Bengali, wherever the dhak reaches.
