import type { Metadata } from "next";
import Link from "next/link";
import { cast } from "@/data/play/cast";
import { activities } from "@/data/play";
import { getDict } from "@/data/i18n";
import { cityName, pandals } from "@/data/pandals";
import Character from "@/components/play/art/Character";
import CastStrip from "@/components/home/CastStrip";
import Countdown from "@/components/home/Countdown";
import HeroCard from "@/components/home/HeroCard";
import MyPlanChip from "@/components/home/MyPlanChip";
import LiveBoard, { type BoardName } from "@/components/live/LiveBoard";
import ActivityTicker from "@/components/community/ActivityTicker";
import { toItems } from "@/data/pandals/view";
import type { Lang } from "@/lib/i18n";
import EventList from "@/components/local/EventList";
import { playStrings } from "@/components/play/strings";
import { events } from "@/data/events/events";
import { fun } from "@/data/i18n/fun";
import { REGIONS, regionInfo, ui } from "@/data/local/content";
import JsonLd, { abs } from "@/lib/jsonld";
import { num, withLang } from "@/lib/i18n";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  return pageMeta({ lang, title: t.meta.home.title, description: t.meta.home.description, path: "/", absoluteTitle: true });
}

/** Cities with the most listings, for the "browse by place" chips. */
function topCities(limit: number): { city: string; n: number }[] {
  const counts = new Map<string, number>();
  for (const p of pandals) counts.set(p.city, (counts.get(p.city) ?? 0) + 1);
  return [...counts.entries()]
    .map(([city, n]) => ({ city, n }))
    .sort((a, b) => b.n - a.n || a.city.localeCompare(b.city))
    .slice(0, limit);
}

/** Names and links for the live board (ids only travel over the wire; names come from the build). */
function boardNames(lang: Lang): Record<string, BoardName> {
  const out: Record<string, BoardName> = {};
  for (const p of toItems(lang)) out[p.id] = { name: p.name, place: p.area ? `${p.area}, ${cityName(p.city, lang)}` : cityName(p.city, lang), href: p.href };
  return out;
}

/** game slug → result id → title, for the activity ticker. */
function resultTitles(lang: Lang): Record<string, Record<string, string>> {
  const out: Record<string, Record<string, string>> = {};
  for (const a of activities) out[a.meta.slug] = Object.fromEntries(a.results.map((r) => [r.id, r.title[lang]]));
  return out;
}

/** The three games shown on the home page; the rest live on /play. */
const FEATURED = ["puja-personality", "puja-squad", "pandal-challenge"];

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const h = t.home;
  const f = fun.home;
  const cities = topCities(6);
  const url = abs(withLang(lang, "/"));
  const featured = FEATURED.map((slug) => activities.find((a) => a.meta.slug === slug)).filter((a): a is (typeof activities)[number] => Boolean(a));
  const rest = activities.length - featured.length;

  return (
    <>
      {url ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: t.site.name,
            url,
            inLanguage: lang,
            description: t.meta.home.description,
            // Sitelinks search box: the directory's ?q= search.
            potentialAction: {
              "@type": "SearchAction",
              target: { "@type": "EntryPoint", urlTemplate: `${abs(withLang(lang, "/puja"))}?q={search_term_string}` },
              "query-input": "required name=search_term_string",
            },
          }}
        />
      ) : null}

      <section className="home-hero" aria-labelledby="home-h1">
        <div className="home-hero-text">
          <Countdown lang={lang} />
          <h1 id="home-h1">{f.h1[lang]}</h1>
          <p className="lead">{f.lead[lang]}</p>
          <p className="cta-row">
            <Link className="button button-big" href={withLang(lang, "/play/puja-personality")}>
              {f.ctaQuiz[lang]}
            </Link>
            <Link className="button button-big button-light" href={withLang(lang, "/greetings")}>
              {fun.greet.homeCta[lang]}
            </Link>
            <Link className="button button-big button-light" href={withLang(lang, "/local")}>
              {f.ctaLocal[lang]}
            </Link>
          </p>
          <MyPlanChip lang={lang} />
        </div>
        <HeroCard lang={lang} s={playStrings(t)} />
      </section>

      <section className="home-section" aria-labelledby="home-play">
        <h2 id="home-play">{f.pickH2[lang]}</h2>
        <p className="section-lead">{f.pickP[lang]}</p>
        <ul className="game-grid game-pick">
          {featured.map(({ meta }) => {
            const lead = cast[meta.chars[0]];
            return (
              <li key={meta.slug} className="game-card" style={{ "--c1": lead.c1, "--c2": lead.c2 } as React.CSSProperties}>
                <div className="game-card-art" aria-hidden="true">
                  {meta.chars.slice(0, 2).map((id, k) => (
                    <Character key={id} id={id} mood={k % 2 ? "smug" : "happy"} />
                  ))}
                </div>
                <h3>{meta.title[lang]}</h3>
                <p>{meta.tagline[lang]}</p>
                <Link className="button" href={withLang(lang, `/play/${meta.slug}`)}>
                  {h.playNow}
                </Link>
              </li>
            );
          })}
        </ul>
        <p>
          <Link className="button button-light" href={withLang(lang, "/play")}>
            {f.moreGames[lang].replace("{n}", num(rest, lang))} →
          </Link>
        </p>
      </section>

      <LiveBoard lang={lang} names={boardNames(lang)} />
      <ActivityTicker lang={lang} names={boardNames(lang)} titles={resultTitles(lang)} />

      <section className="home-section" aria-labelledby="home-trend">
        <h2 id="home-trend">{ui.trendH2[lang]}</h2>
        <p className="section-lead">{ui.trendNote[lang]}</p>
        <EventList lang={lang} events={events} limit={4} showRegion />
        <p className="cta-row">
          <Link className="button" href={`${withLang(lang, "/local")}#local-route`}>
            <span className="home-night">
              <span aria-hidden="true">🌙</span> {f.tonight[lang]}
            </span>
          </Link>
          <Link className="button button-light" href={withLang(lang, "/local")}>
            {ui.seeAll[lang]}
          </Link>
        </p>
      </section>

      <section className="home-section" aria-labelledby="home-local">
        <h2 id="home-local">{f.localH2[lang]}</h2>
        <p className="section-lead">{f.localP[lang]}</p>
        <p className="cta-row">
          {REGIONS.map((r) => (
            <Link key={r} className="button button-big button-light" href={`${withLang(lang, "/local")}?r=${r}`}>
              {regionInfo[r].icon} {regionInfo[r].name[lang]}
            </Link>
          ))}
        </p>
      </section>

      <section className="home-section" aria-labelledby="home-map">
        <div className="feature">
          <div className="feature-text">
            <h2 id="home-map">{h.mapH2}</h2>
            <p>{h.mapP}</p>
            <p>
              <Link className="button" href={withLang(lang, "/puja")}>
                {h.mapCta}
              </Link>
            </p>
            <p className="cta-row">
              <Link className="button button-light" href={withLang(lang, "/puja/kolkata")}>
                🥁 {f.kolkataPage[lang]}
              </Link>
              <Link className="button button-light" href={withLang(lang, "/puja/dhaka")}>
                🛕 {f.dhakaPage[lang]}
              </Link>
              <Link className="button button-light" href={withLang(lang, "/durga-puja-2026")}>
                📅 {f.datesPage[lang]}
              </Link>
            </p>
            <p className="fineprint">
              {f.sourcedLine[lang]} <Link href={withLang(lang, "/about")}>{f.aboutLink[lang]}</Link>
            </p>
          </div>
          <div className="feature-side">
            <p className="feature-label">{h.mapCities}</p>
            <ul className="chip-links">
              {cities.map(({ city, n }) => (
                <li key={city}>
                  <Link href={`${withLang(lang, "/puja")}?city=${encodeURIComponent(city)}`}>
                    {cityName(city, lang)} <span>{num(n, lang)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-cast">
        <h2 id="home-cast">{h.castH2}</h2>
        <p className="section-lead">{f.castHint[lang]}</p>
        <CastStrip lang={lang} labels={{ tap: t.card.tapChar, strength: t.play.strength, weakness: t.play.weakness, play: f.castPlay[lang] }} />
      </section>
    </>
  );
}
