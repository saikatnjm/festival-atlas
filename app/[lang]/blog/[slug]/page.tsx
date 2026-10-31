import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/blog/ArticlePage";
import { ARTICLES, getArticle } from "@/data/blog";
import { LANGS } from "@/lib/i18n";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string; slug: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.flatMap((lang) => ARTICLES.map((a) => ({ lang, slug: a.slug })));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang: l, slug } = await params;
  const lang = langOf(l);
  const a = getArticle(slug);
  if (!a) return {};
  return pageMeta({ lang, title: a.title[lang], description: a.description[lang], path: `/blog/${slug}` });
}

/** A blog article. */
export default async function BlogArticle({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  return <ArticlePage lang={langOf(lang)} a={a} />;
}
