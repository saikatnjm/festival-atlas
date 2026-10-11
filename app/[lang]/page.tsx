import type { Metadata } from "next";
import Link from "next/link";
import { cast } from "@/data/play/cast";
import { activities } from "@/data/play";
import { getDict } from "@/data/i18n";
import { cityName, pandals, summary } from "@/data/pandals";
import Character from "@/components/play/art/Character";
import CastStrip from "@/components/home/CastStrip";
import EventList from "@/components/local/EventList";
import { events } from "@/data/events/events";
import { fun } from "@/data/i18n/fun";
import { REGIONS, regionInfo, ui } from "@/data/local/content";
import { meta as squadMeta } from "@/data/play/squad";
import { fmt } from "@/lib/format";
import { ICON_SVG } from "@/lib/brand";
import JsonLd, { abs } from "@/lib/jsonld";
import { withLang } from "@/lib/i18n";
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

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const h = t.home;
  const { total, countries } = summary();
  const cities = topCities(6);
  const url = abs(withLang(lang, "/"));

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
          }}
        />
      ) : null}

      <section className="home-hero" aria-labelledby="home-h1">
        <div className="home-hero-text">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="home-h1">{h.h1}</h1>
          <p className="lead">{h.lead}</p>
          <p className="cta-row">
            <Link className="button button-big" href={withLang(lang, "/play")}>
              {h.ctaPlay}
            </Link>
            <Link className="button button-big button-light" href={withLang(lang, "/puja")}>
              {h.ctaMap}
            </Link>
          </p>
          <ul className="stat-row" aria-label={t.site.name}>
            <li>{fmt(h.statPandals, { n: total }, lang)}</li>
            <li>{fmt(h.statCountries, { n: countries }, lang)}</li>
            <li>{h.statSources}</li>
          </ul>
        </div>
        <div className="home-hero-art" aria-hidden="true">
          <span className="hero-globe" dangerouslySetInnerHTML={{ __html: ICON_SVG }} />
          <span className="hero-char hero-char-a">
            <Character id="selfie" mood="proud" />
          </span>
          <span className="hero-char hero-char-b">
            <Character id="bhog" mood="happy" />
          </span>
          <span className="hero-char hero-char-c">
            <Character id="detective" mood="smug" />
          </span>
          <i className="confetti c1" />
          <i className="confetti c2" />
          <i className="confetti c3" />
          <i className="confetti c4" />
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-play">
        <h2 id="home-play">{h.playH2}</h2>
        <p className="section-lead">{h.playP}</p>
        <ul className="game-grid">
          {activities.map(({ meta }) => {
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
          <Link href={withLang(lang, "/play")}>{h.playCta} →</Link>
        </p>
        <div className="notice home-friends">
          <h3>{fun.home.friendsH3[lang]}</h3>
          <p>{fun.home.friendsP[lang]}</p>
          <p>
            <Link className="button" href={withLang(lang, "/play/puja-squad")}>
              {squadMeta.title[lang]}
            </Link>
          </p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-trend">
        <h2 id="home-trend">{ui.trendH2[lang]}</h2>
        <p className="section-lead">{ui.trendNote[lang]}</p>
        <EventList lang={lang} events={events} limit={4} showRegion />
        <p>
          <Link href={withLang(lang, "/local")}>{ui.seeAll[lang]}</Link>
        </p>
      </section>

      <section className="home-section" aria-labelledby="home-local">
        <h2 id="home-local">{fun.home.localH2[lang]}</h2>
        <p className="section-lead">{fun.home.localP[lang]}</p>
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
          </div>
          <div className="feature-side">
            <p className="feature-label">{h.mapCities}</p>
            <ul className="chip-links">
              {cities.map(({ city, n }) => (
                <li key={city}>
                  <Link href={`${withLang(lang, "/puja")}?city=${encodeURIComponent(city)}`}>
                    {cityName(city, lang)} <span>{lang === "bn" ? n.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]) : n}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-cast">
        <h2 id="home-cast">{h.castH2}</h2>
        <p className="section-lead">{h.castHint}</p>
        <CastStrip lang={lang} labels={{ tap: t.card.tapChar, strength: t.play.strength, weakness: t.play.weakness }} />
      </section>

      <section className="home-section" aria-labelledby="home-honest">
        <h2 id="home-honest">{h.honestH2}</h2>
        <ul className="honest-grid">
          {h.honest.map((x) => (
            <li key={x.t} className="honest-card">
              <h3>{x.t}</h3>
              <p>{x.p}</p>
            </li>
          ))}
        </ul>
        <p className="notice">{h.coverage}</p>
      </section>

      <section className="home-section" aria-labelledby="home-faq">
        <h2 id="home-faq">{h.faqH2}</h2>
        <dl className="faq">
          {h.faq.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
