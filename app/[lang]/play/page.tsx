import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { activities } from "@/data/play";
import { cast, castAll } from "@/data/play/cast";
import { getDict } from "@/data/i18n";
import Bubble from "@/components/play/Bubble";
import Character from "@/components/play/art/Character";
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
  return pageMeta({ lang, title: t.meta.play.title, description: t.meta.play.description, path: "/play" });
}

export default async function PlayPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: t.play.breadcrumb, path: withLang(lang, "/play") },
  ]);
  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <h1 className="cx-h1">{t.play.h1}</h1>
      <p className="lead">{t.play.lead}</p>
      <ul className="cx-menu">
        {activities.map(({ meta }, i) => (
          <li key={meta.slug} className="cx-menu-item" style={{ "--c1": cast[meta.chars[0]].c1 } as CSSProperties}>
            <div className="cx-menu-art" aria-hidden="true">
              {meta.chars.slice(0, 2).map((id, k) => (
                <Character key={id} id={id} mood={(i + k) % 2 ? "smug" : "happy"} />
              ))}
            </div>
            <div className="cx-menu-text">
              <h2>{meta.title[lang]}</h2>
              <p>{meta.tagline[lang]}</p>
              <Link className="cx-btn" href={withLang(lang, `/play/${meta.slug}`)}>
                {t.play.playBtn}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <section className="about" aria-labelledby="cast-h">
        <h2 id="cast-h" className="cx-h2">
          {t.play.castH2}
        </h2>
        <ul className="cx-cast-list">
          {castAll.map((id) => {
            const c = cast[id];
            return (
              <li key={id} className="cx-cast-item">
                <Character id={id} mood="happy" />
                <div>
                  <h3>{c.name[lang]}</h3>
                  <p className="cx-role">{c.role[lang]}</p>
                  <Bubble tail="up">{c.catchphrase[lang]}</Bubble>
                  <p>
                    <b>{t.play.strength}</b> {c.strength[lang]}
                  </p>
                  <p>
                    <b>{t.play.weakness}</b> {c.weakness[lang]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="cx-note">{t.play.fiction}</p>
      </section>

      <p className="next-up">
        {t.play.nextUp} <Link href={withLang(lang, "/puja")}>{t.play.nextLink}</Link>.
      </p>
    </div>
  );
}
