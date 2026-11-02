import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FestivalPage from "@/components/festival/FestivalPage";
import { FESTIVAL_PAGES } from "@/data/festivals/index";
import { MONTH_SLUGS } from "@/data/festivals/months-2027";
import { LANGS } from "@/lib/i18n";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string; month: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.flatMap((lang) => MONTH_SLUGS.map((month) => ({ lang, month })));

const pageFor = (month: string) => FESTIVAL_PAGES.find((f) => f.path === `/calendar-2027/${month}`);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const f = pageFor(p.month);
  if (!f) return {};
  const lang = langOf(p.lang);
  return pageMeta({ lang, title: f.title[lang], description: f.description[lang], path: f.path });
}

/** One month of 2027: every festival, Ekadashi, Purnima, Amavasya and vrat, each row from its sourced page. */
export default async function MonthPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const f = pageFor(p.month);
  if (!f) notFound();
  return <FestivalPage lang={langOf(p.lang)} f={f} />;
}
