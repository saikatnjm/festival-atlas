import type { Metadata } from "next";
import FestivalPage from "@/components/festival/FestivalPage";
import { CALENDAR_2027 as F } from "@/data/festivals/calendar-2027";
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

/** Bengali festival calendar 2027: every major festival's date and tithi (Drik Panchang, Kolkata), linking to the festival pages. */
export default async function Calendar2027Page({ params }: { params: Promise<Params> }) {
  return <FestivalPage lang={langOf((await params).lang)} f={F} />;
}
