import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, getActivity } from "@/data/play";
import { getDict } from "@/data/i18n";
import ResultPanel from "@/components/play/ResultPanel";
import ChallengeBanner from "@/components/play/ChallengeBanner";
import { playStrings } from "@/components/play/strings";
import { fmt } from "@/lib/format";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

type Params = { lang: string; slug: string; result: string };

export function generateStaticParams(): { lang: string; slug: string; result: string }[] {
  return LANGS.flatMap((lang) => activities.flatMap((a) => a.results.map((r) => ({ lang, slug: a.meta.slug, result: r.id }))));
}

function find(slug: string, resultId: string) {
  const activity = getActivity(slug);
  const result = activity?.results.find((r) => r.id === resultId);
  return activity && result ? { activity, result } : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang: l, slug, result: resultId } = await params;
  const lang = langOf(l);
  const found = find(slug, resultId);
  if (!found) return {};
  return pageMeta({
    lang,
    title: `${found.result.title[lang]} · ${found.activity.meta.title[lang]}`,
    description: `${found.result.punchline[lang]} ${found.result.blurb[lang]}`,
    path: `/play/${slug}/r/${resultId}`,
  });
}

export default async function ResultPage({ params }: { params: Promise<Params> }) {
  const { lang: l, slug, result: resultId } = await params;
  const lang = langOf(l);
  const found = find(slug, resultId);
  if (!found) notFound();
  const t = getDict(lang);
  const { activity, result } = found;
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: t.play.breadcrumb, path: withLang(lang, "/play") },
    { name: activity.meta.title[lang], path: withLang(lang, `/play/${slug}`) },
    { name: result.title[lang], path: withLang(lang, `/play/${slug}/r/${resultId}`) },
  ]);

  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/play")}>{t.play.breadcrumb}</Link> /{" "}
        <Link href={withLang(lang, `/play/${slug}`)}>{activity.meta.title[lang]}</Link> /
      </p>
      <h1 className="visually-hidden">{fmt(t.play.resultHidden, { title: result.title[lang], game: activity.meta.title[lang] }, lang)}</h1>
      <ChallengeBanner lang={lang} slug={slug} resultId={resultId} />
      <ResultPanel
        s={playStrings(t)}
        slug={slug}
        card={{
          lang,
          char: result.char,
          mood: result.mood,
          kicker: activity.meta.kicker[lang],
          title: result.title[lang],
          punchline: result.punchline[lang],
          blurb: result.blurb[lang],
          stat: { label: result.stat.label[lang], value: result.stat.value },
        }}
        sharePath={`/play/${slug}/r/${resultId}`}
        shareText={`${result.title[lang]}! ${activity.meta.title[lang]}`}
        note={activity.meta.note?.[lang]}
      />
    </div>
  );
}
