import type { Metadata } from "next";
import FestivalPage from "@/components/festival/FestivalPage";
import { RASH_2026 as F } from "@/data/festivals/rash-2026";
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

/** Rash Purnima 2026: Nabadwip, Shantipur, Cooch Behar, sourced date and Purnima tithi. */
export default async function RashPurnimaPage({ params }: { params: Promise<Params> }) {
  return <FestivalPage lang={langOf((await params).lang)} f={F} />;
}
