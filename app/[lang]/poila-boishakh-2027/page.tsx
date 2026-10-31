import type { Metadata } from "next";
import FestivalPage from "@/components/festival/FestivalPage";
import { POILA_BOISHAKH_2027 as F } from "@/data/festivals/poila-boishakh-2027";
import { LANGS } from "@/lib/i18n";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: F.title[lang], description: F.description[lang], path: F.path });
}

/** Poila Boishakh 1434 (2027): West Bengal and Bangladesh dates, why they differ, customs, FAQ. */
export default async function PoilaBoishakhPage({ params }: { params: Promise<Params> }) {
  return <FestivalPage lang={langOf((await params).lang)} f={F} />;
}
