import type { Metadata } from "next";
import Link from "next/link";
import PujaExplorer from "@/components/puja/PujaExplorer";
import { facets, pandals } from "@/data/pandals";
import { toItems } from "@/data/pandals/view";
import { getDict } from "@/data/i18n";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  return pageMeta({ lang, title: t.meta.puja.title, description: t.meta.puja.description, path: "/puja" });
}

export default async function PujaPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const items = toItems(lang);
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: t.nav.puja, path: withLang(lang, "/puja") },
  ]);
  const listUrl = abs(withLang(lang, "/puja"));

  return (
    <>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {listUrl ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: t.puja.h1,
            inLanguage: lang,
            numberOfItems: items.length,
            itemListElement: items.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: abs(p.href),
            })),
          }}
        />
      ) : null}
      <header className="page-head">
        <h1>{t.puja.h1}</h1>
        <p className="lead">{t.puja.lead}</p>
      </header>
      <p className="notice">{t.puja.notice}</p>
      <PujaExplorer lang={lang} items={items} facets={facets(pandals, lang)} t={t.puja} />

      <section className="about" aria-labelledby="guide-h">
        <h2 id="guide-h">{t.puja.guideH2}</h2>
        <p className="section-lead">{t.puja.guideP}</p>
        <ul className="guide-grid">
          {t.guide.map((g) => (
            <li key={g.t} className="honest-card">
              <h3>{g.t}</h3>
              <p>{g.p}</p>
              {g.tip ? (
                <p className="tip">
                  <b>{t.puja.tipLabel}</b> {g.tip}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
      <p className="next-up">
        <Link href={withLang(lang, "/play")}>{t.nav.play} →</Link>
      </p>
    </>
  );
}
