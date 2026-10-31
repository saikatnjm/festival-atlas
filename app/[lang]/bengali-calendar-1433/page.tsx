import type { Metadata } from "next";
import FestivalPage from "@/components/festival/FestivalPage";
import TodayBanglaDate from "@/components/festival/TodayBanglaDate";
import { BENGALI_CALENDAR_1433 as F } from "@/data/festivals/bengali-calendar-1433";
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

/** Bengali calendar 1433: today's Bangla date (Bangladesh), month start dates (Bangladesh), Sankrantis (West Bengal). */
export default async function BengaliCalendarPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  return (
    <FestivalPage lang={lang} f={F}>
      <TodayBanglaDate lang={lang} />
    </FestivalPage>
  );
}
