import type { Metadata } from "next";
import Link from "next/link";
import MyPuja, { type MePandal } from "@/components/me/MyPuja";
import { playStrings } from "@/components/play/strings";
import { getDict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { pandals } from "@/data/pandals";
import { LANGS, withLang } from "@/lib/i18n";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  // Personal page: fine to crawl the shell, but it has nothing worth indexing.
  return { ...pageMeta({ lang, title: fun.my.metaTitle[lang], description: fun.my.metaDesc[lang], path: "/me" }), robots: { index: false, follow: true } };
}

/** "My Puja": the visitor's own log, built entirely from this browser's storage. */
export default async function MePage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const items: MePandal[] = pandals.map((p) => ({ id: p.id, name: p.name, area: p.area, lat: p.lat, lng: p.lng }));
  return (
    <>
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1>{fun.my.h1[lang]}</h1>
      <p className="lead">{fun.my.lead[lang]}</p>
      <MyPuja lang={lang} items={items} s={playStrings(t)} />
    </>
  );
}
