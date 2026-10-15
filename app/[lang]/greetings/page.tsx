import type { Metadata } from "next";
import Link from "next/link";
import GreetingMaker from "@/components/play/GreetingMaker";
import { playStrings } from "@/components/play/strings";
import { getDict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { GREETINGS } from "@/data/play/greetings";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: fun.greet.metaTitle[lang], description: fun.greet.metaDesc[lang], path: "/greetings" });
}

/** Greeting cards for every Puja day, with names, built from the same card engine as the games. */
export default async function GreetingsPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const G = fun.greet;
  const url = abs(withLang(lang, "/greetings"));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: G.h1[lang], path: withLang(lang, "/greetings") },
  ]);
  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {url ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: G.metaTitle[lang],
            url,
            inLanguage: lang,
            applicationCategory: "EntertainmentApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
            description: G.metaDesc[lang],
          }}
        />
      ) : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1 className="cx-h1">{G.h1[lang]}</h1>
      <p className="lead">{G.lead[lang]}</p>
      <GreetingMaker lang={lang} s={playStrings(t)} />
      {/* Crawlable list of every day's headline, so "শুভ অষ্টমী শুভেচ্ছা" searches find this page. */}
      <section className="about" aria-labelledby="greet-days">
        <h2 id="greet-days" className="cx-h2">
          {G.pickDay[lang]}
        </h2>
        <ul className="link-list">
          {GREETINGS.map((g) => (
            <li key={g.id}>
              <Link href={`${withLang(lang, "/greetings")}?d=${g.id}`}>
                {g.icon} {g.headline[lang]}
              </Link>{" "}
              <span className="fineprint">{g.lines[0][lang]}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
