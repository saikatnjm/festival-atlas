import type { Metadata } from "next";
import Link from "next/link";
import { getDict } from "@/data/i18n";
import { summary } from "@/data/pandals/counts";
import { fmt } from "@/lib/format";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  return pageMeta({ lang, title: t.about.title, description: t.about.description, path: "/about" });
}

/** How the site works: sourcing rules, labels, privacy and the FAQ (moved here from the home page). */
export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const h = t.home;
  const { total, countries } = summary();
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: t.about.title, path: withLang(lang, "/about") },
  ]);
  return (
    <article>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: h.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1>{t.about.title}</h1>
      <p className="lead">{t.about.lead}</p>
      <ul className="stat-row" aria-label={t.site.name}>
        <li>{fmt(h.statPandals, { n: total }, lang)}</li>
        <li>{fmt(h.statCountries, { n: countries }, lang)}</li>
        <li>{h.statSources}</li>
      </ul>

      <section className="home-section" aria-labelledby="about-honest">
        <h2 id="about-honest">{h.honestH2}</h2>
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

      <section className="home-section" aria-labelledby="about-faq">
        <h2 id="about-faq">{h.faqH2}</h2>
        <dl className="faq">
          {h.faq.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="cta-row">
        <Link className="button" href={withLang(lang, "/play")}>
          {h.ctaPlay}
        </Link>
        <Link className="button button-light" href={withLang(lang, "/puja")}>
          {h.ctaMap}
        </Link>
      </p>
    </article>
  );
}
