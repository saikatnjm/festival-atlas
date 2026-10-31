import type { Metadata } from "next";
import FestivalPage from "@/components/festival/FestivalPage";
import { SARASWATI_2027 as F } from "@/data/festivals/saraswati-2027";
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

/** Saraswati Puja 2027: sourced date, Panchami tithi and muhurat (Kolkata + Dhaka), customs, FAQ. */
export default async function SaraswatiPujaPage({ params }: { params: Promise<Params> }) {
  return <FestivalPage lang={langOf((await params).lang)} f={F} />;
}
