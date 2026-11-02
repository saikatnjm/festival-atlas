import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FestivalPage from "@/components/festival/FestivalPage";
import { FESTIVAL_PAGES } from "@/data/festivals/index";
import { EKADASHI_SLUGS } from "@/data/festivals/ekadashi-pages-2027";
import { LANGS } from "@/lib/i18n";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string; name: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.flatMap((lang) => EKADASHI_SLUGS.map((name) => ({ lang, name })));

const pageFor = (name: string) => FESTIVAL_PAGES.find((f) => f.path === `/ekadashi-2027/${name}`);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const f = pageFor(p.name);
  if (!f) return {};
  const lang = langOf(p.lang);
  return pageMeta({ lang, title: f.title[lang], description: f.description[lang], path: f.path });
}

/** One Ekadashi of 2027: date, tithi and parana for Kolkata and Dhaka, sourced. */
export default async function EkadashiDayPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const f = pageFor(p.name);
  if (!f) notFound();
  return <FestivalPage lang={langOf(p.lang)} f={f} />;
}
