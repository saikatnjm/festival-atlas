import type { Metadata } from "next";
import Link from "next/link";
import AddPlaceForm, { type KnownPin } from "@/components/places/AddPlaceForm";
import { getDict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { hasPin, pandals } from "@/data/pandals";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: fun.places.metaTitle[lang], description: fun.places.metaDesc[lang], path: "/add-pandal" });
}

/** "Add a pandal": visitors submit a name + location; the owner approves on /admin; the map shows it. */
export default async function AddPandalPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const P = fun.places;
  const known: KnownPin[] = pandals.filter(hasPin).map((p) => ({ id: p.id, name: p.name, lat: p.lat, lng: p.lng }));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: P.h1[lang], path: withLang(lang, "/add-pandal") },
  ]);
  return (
    <>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/puja")}>{t.puja.breadcrumb}</Link> /
      </p>
      <h1>{P.h1[lang]}</h1>
      <p className="lead">{P.lead[lang]}</p>
      <AddPlaceForm lang={lang} known={known} />
    </>
  );
}
