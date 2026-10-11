import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, getActivity } from "@/data/play";
import { getDict } from "@/data/i18n";
import PersonalityQuiz from "@/components/play/PersonalityQuiz";
import PandalChallenge from "@/components/play/PandalChallenge";
import PujaBingo from "@/components/play/PujaBingo";
import PujaLines from "@/components/play/PujaLines";
import PujaSquad from "@/components/play/PujaSquad";
import PlayerSetup from "@/components/play/PlayerSetup";
import ChallengeBanner from "@/components/play/ChallengeBanner";
import Character from "@/components/play/art/Character";
import { playStrings } from "@/components/play/strings";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

type Params = { lang: string; slug: string };

export function generateStaticParams(): { lang: string; slug: string }[] {
  return LANGS.flatMap((lang) => activities.map((a) => ({ lang, slug: a.meta.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang: l, slug } = await params;
  const lang = langOf(l);
  const activity = getActivity(slug);
  if (!activity) return {};
  return pageMeta({
    lang,
    title: activity.meta.title[lang],
    description: activity.meta.description[lang],
    path: `/play/${slug}`,
  });
}

const RUNNERS = {
  challenge: PandalChallenge,
  bingo: PujaBingo,
  generator: PujaLines,
  group: PujaSquad,
} as const;

export default async function ActivityPage({ params }: { params: Promise<Params> }) {
  const { lang: l, slug } = await params;
  const lang = langOf(l);
  const activity = getActivity(slug);
  if (!activity) notFound();
  const t = getDict(lang);
  const { meta, results } = activity;
  const Runner = meta.kind === "quiz" ? null : RUNNERS[meta.kind];
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: t.play.breadcrumb, path: withLang(lang, "/play") },
    { name: meta.title[lang], path: withLang(lang, `/play/${slug}`) },
  ]);

  return (
    <div className="cx">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/play")}>{t.play.breadcrumb}</Link> /
      </p>
      <h1 className="cx-h1">{meta.title[lang]}</h1>
      <p className="lead">{meta.tagline[lang]}</p>
      <ChallengeBanner lang={lang} slug={slug} />
      <PlayerSetup lang={lang} />
      {Runner ?<Runner lang={lang} s={playStrings(t)} /> : <PersonalityQuiz lang={lang} s={playStrings(t)} slug={slug} />}
      {results.length > 0 && (
        <section className="about">
          <h2 className="cx-h2">{t.play.outcomesH2}</h2>
          <ul className="cx-outcomes">
            {results.map((r) => (
              <li key={r.id}>
                <Character id={r.char} mood={r.mood} />
                <Link href={withLang(lang, `/play/${meta.slug}/r/${r.id}`)}>{r.title[lang]}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
