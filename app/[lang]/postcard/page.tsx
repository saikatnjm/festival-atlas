import type { Metadata } from "next";
import Link from "next/link";
import { playStrings } from "@/components/play/strings";
import PostcardMaker, { type PostcardPandal } from "@/components/postcard/PostcardMaker";
import { getDict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { areaOf, cityName, nameOf, pandals, placeLabel, sortPandals } from "@/data/pandals";
import { LANGS, withLang, type Lang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: fun.postcard.metaTitle[lang], description: fun.postcard.metaDesc[lang], path: "/postcard" });
}

/** The picker only needs names, places and pins, in both scripts for search. */
function pickerItems(lang: Lang): PostcardPandal[] {
  return sortPandals(pandals).map((p) => {
    const area = areaOf(p, lang);
    return {
      id: p.id,
      name: nameOf(p, lang),
      place: area ? `${area} · ${cityName(p.city, lang)}` : placeLabel(p, lang),
      lat: p.lat,
      lng: p.lng,
      search: [p.name, p.name_bn, p.area, p.area_bn, p.city, cityName(p.city, "bn")].filter(Boolean).join(" ").toLowerCase(),
    };
  });
}

/** Photo → postcard page: the visitor's pandal photo with name, map, tithi and brand, shared from the phone. */
export default async function PostcardPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const P = fun.postcard;
  const url = abs(withLang(lang, "/postcard"));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: P.h1[lang], path: withLang(lang, "/postcard") },
  ]);
  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {url ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: P.metaTitle[lang],
            url,
            inLanguage: lang,
            applicationCategory: "PhotographyApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
            description: P.metaDesc[lang],
          }}
        />
      ) : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1 className="cx-h1">{P.h1[lang]}</h1>
      <p className="lead">{P.lead[lang]}</p>
      <PostcardMaker lang={lang} items={pickerItems(lang)} s={playStrings(t)} />
      <section className="about" aria-labelledby="pc-how">
        <h2 id="pc-how" className="cx-h2">
          {P.howH2[lang]}
        </h2>
        <ol className="steps">
          {P.how.map((step) => (
            <li key={step.en}>{step[lang]}</li>
          ))}
        </ol>
        <p className="fineprint">{P.privacy[lang]}</p>
      </section>
    </div>
  );
}
