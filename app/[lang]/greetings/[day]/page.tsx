import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyLine from "@/components/play/CopyLine";
import GreetingMaker from "@/components/play/GreetingMaker";
import { playStrings } from "@/components/play/strings";
import { getDict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { GREETINGS, GREETING_PAGES, getGreeting, linesFor } from "@/data/play/greetings";
import { fill } from "@/data/play/personal";
import { LANGS, num, withLang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string; day: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.flatMap((lang) => GREETINGS.map((g) => ({ lang, day: g.id })));

const bare = (headline: string) => headline.replace(/!$/, "");

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang: l, day } = await params;
  const lang = langOf(l);
  const g = getGreeting(day);
  if (!g) return {};
  const G = fun.greet;
  const n = num(linesFor(g).length, lang);
  return pageMeta({
    lang,
    title: fill(G.wishTitle[lang], { headline: bare(g.headline[lang]) }),
    description: fill(G.wishDesc[lang], { n, name: g.name[lang] }),
    path: `/greetings/${g.id}`,
  });
}

/** One festival day's wishes: every line to copy (Bangla, with English on /en), the card maker on that day, links. */
export default async function WishesPage({ params }: { params: Promise<Params> }) {
  const { lang: l, day } = await params;
  const lang = langOf(l);
  const g = getGreeting(day);
  if (!g) notFound();
  const t = getDict(lang);
  const G = fun.greet;
  const lines = linesFor(g);
  const h1 = fill(G.wishH1[lang], { headline: bare(g.headline[lang]) });
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: G.h1[lang], path: withLang(lang, "/greetings") },
    { name: h1, path: withLang(lang, `/greetings/${g.id}`) },
  ]);
  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> / <Link href={withLang(lang, "/greetings")}>{G.h1[lang]}</Link> /
      </p>
      <h1 className="cx-h1">
        {g.icon} {h1}
      </h1>
      <p className="lead">{fill(G.wishLead[lang], { n: num(lines.length, lang) })}</p>
      <p className="cta-row">
        <Link className="button button-light" href={withLang(lang, GREETING_PAGES[g.id])}>
          {G.wishDates[lang]}
        </Link>
      </p>

      <section className="about" aria-labelledby="wish-lines">
        <h2 id="wish-lines" className="cx-h2">
          {G.wishListH2[lang]}
        </h2>
        <ol className="wish-list">
          {lines.map((x) => (
            <li key={x.en}>
              <p className="wish-bn" lang="bn">
                {x.bn}
              </p>
              {lang === "en" ? <p className="wish-en">{x.en}</p> : null}
              <p className="wish-actions">
                <CopyLine text={x.bn} label={lang === "en" ? G.copyBn[lang] : G.copy[lang]} done={G.copied[lang]} />
                {lang === "en" ? <CopyLine text={x.en} label={G.copyEn[lang]} done={G.copied[lang]} /> : null}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="wish-card">
        <h2 id="wish-card" className="cx-h2">
          {G.wishCardH2[lang]}
        </h2>
        <GreetingMaker lang={lang} s={playStrings(t)} initialDay={g.id} />
      </section>

      <section className="about" aria-labelledby="wish-others">
        <h2 id="wish-others" className="cx-h2">
          {G.wishOthers[lang]}
        </h2>
        <ul className="link-list">
          {GREETINGS.filter((x) => x.id !== g.id).map((x) => (
            <li key={x.id}>
              <Link href={withLang(lang, `/greetings/${x.id}`)}>
                {x.icon} {x.headline[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
