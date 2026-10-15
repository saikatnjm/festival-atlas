import type { Metadata } from "next";
import Link from "next/link";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import { getDict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: fun.feedback.metaTitle[lang], description: fun.feedback.metaDesc[lang], path: "/feedback" });
}

/** Feedback page: a short form whose entries only the site owner reads (see /admin). */
export default async function FeedbackPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const F = fun.feedback;
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: F.h1[lang], path: withLang(lang, "/feedback") },
  ]);
  return (
    <>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1>{F.h1[lang]}</h1>
      <p className="lead">{F.lead[lang]}</p>
      <FeedbackForm lang={lang} />
    </>
  );
}
