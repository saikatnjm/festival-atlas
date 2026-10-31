import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_TEXT } from "@/components/blog/ArticlePage";
import { ARTICLES } from "@/data/blog";
import { getDict } from "@/data/i18n";
import { LANGS, withLang, type L } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

const T = {
  title: { bn: "পুজোর কথা: বাঙালি উৎসবের ইতিহাস, রীতি আর গাইড", en: "Puja Stories: Bengali Festival History, Rituals & Guides" },
  description: {
    bn: "কালীপুজো, ভাইফোঁটা, জগদ্ধাত্রী, সরস্বতী পুজো: বাঙালি পুজো-পার্বণের ইতিহাস, রীতি আর ঘোরার গাইড, সূত্রসহ, বাংলা আর ইংরেজিতে।",
    en: "Kali Puja, Bhai Phota, Jagaddhatri, Saraswati Puja: history, rituals and visiting guides for Bengali festivals, with sources, in Bangla and English.",
  },
  lead: {
    bn: "প্রতিটা উৎসবের পেছনের গল্প, রীতি আর ঘোরার টিপস। সব তথ্যের পাশে সূত্র।",
    en: "The stories, rituals and practical tips behind each festival. Every fact comes with its source.",
  },
} satisfies Record<string, L>;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: T.title[lang], description: T.description[lang], path: "/blog" });
}

/** Blog index: every article as a card, newest first. */
export default async function BlogIndex({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: BLOG_TEXT.name[lang], path: withLang(lang, "/blog") },
  ]);
  const url = abs(withLang(lang, "/blog"));
  return (
    <div>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {url && ARTICLES.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: T.title[lang],
            itemListElement: ARTICLES.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.title[lang], url: abs(withLang(lang, `/blog/${a.slug}`)) })),
          }}
        />
      ) : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1>{BLOG_TEXT.name[lang]}</h1>
      <p className="lead">{T.lead[lang]}</p>
      <ul className="blog-list">
        {ARTICLES.map((a) => (
          <li key={a.slug} className="blog-card">
            <h2>
              <Link href={withLang(lang, `/blog/${a.slug}`)}>
                {a.icon} {a.h1[lang]}
              </Link>
            </h2>
            <p>{a.description[lang]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
