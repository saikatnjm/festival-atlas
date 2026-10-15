import type { Metadata } from "next";
import Link from "next/link";
import Passport, { type PassportGroup } from "@/components/puja/Passport";
import { playStrings } from "@/components/play/strings";
import { getDict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { regionInfo } from "@/data/local/content";
import { stopsFor } from "@/data/local/stops";
import { toItems } from "@/data/pandals/view";
import { LANGS, withLang, type Lang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: fun.passport.metaTitle[lang], description: fun.passport.metaDesc[lang], path: "/passport" });
}

/** Kolkata, Dhaka, then every other listing (Siliguri, Satkhira, abroad…) so any pandal can be ticked. */
function passportGroups(lang: Lang): PassportGroup[] {
  const wb = stopsFor("wb", lang);
  const bd = stopsFor("bd", lang);
  const seen = new Set([...wb, ...bd].map((x) => x.id));
  const more = toItems(lang)
    .filter((p) => !seen.has(p.id))
    .map((p) => ({ id: p.id, name: p.name, place: p.place, href: p.href }));
  return [
    { key: "wb", icon: regionInfo.wb.icon, title: regionInfo.wb.name[lang], stops: wb },
    { key: "bd", icon: regionInfo.bd.icon, title: regionInfo.bd.name[lang], stops: bd },
    { key: "more", icon: "🌍", title: lang === "bn" ? "অন্যান্য জায়গা" : "Elsewhere", stops: more },
  ];
}

/** The Puja passport: tick visited pandals, get a card with your name, share it. */
export default async function PassportPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const p = fun.passport;
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: p.title[lang], path: withLang(lang, "/passport") },
  ]);
  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1 className="cx-h1">{p.h1[lang]}</h1>
      <p className="lead">{p.lead[lang]}</p>
      <Passport lang={lang} s={playStrings(t)} groups={passportGroups(lang)} />
    </div>
  );
}
