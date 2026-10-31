import type { Metadata } from "next";
import FestivalPage from "@/components/festival/FestivalPage";
import { AMAVASYA_2027 as F } from "@/data/festivals/lunar-2027";
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

/** Amavasya dates Nov 2026 to Dec 2027 for Kolkata and Dhaka, with Darsha days, from Drik Panchang. */
export default async function AmavasyaPage({ params }: { params: Promise<Params> }) {
  return <FestivalPage lang={langOf((await params).lang)} f={F} />;
}
