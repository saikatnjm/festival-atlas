import type { Metadata } from "next";
import Link from "next/link";
import { getDict } from "@/data/i18n";
import { events } from "@/data/events/events";
import { ui } from "@/data/local/content";
import { stopsFor } from "@/data/local/stops";
import LocalExplorer from "@/components/local/LocalExplorer";
import { playStrings } from "@/components/play/strings";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: ui.metaTitle[lang], description: ui.metaDesc[lang], path: "/local" });
}

export default async function LocalPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: t.nav.local, path: withLang(lang, "/local") },
  ]);
  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1 className="cx-h1">{ui.h1[lang]}</h1>
      <p className="lead">{ui.lead[lang]}</p>
      <LocalExplorer lang={lang} s={playStrings(t)} events={events} stops={{ wb: stopsFor("wb", lang), bd: stopsFor("bd", lang) }} />
    </div>
  );
}
