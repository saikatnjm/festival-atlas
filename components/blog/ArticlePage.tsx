import Link from "next/link";
import type { Article, ArticleSource } from "@/data/blog/types";
import { getDict } from "@/data/i18n";
import { fmtDate } from "@/lib/dates";
import { num, withLang, type L, type Lang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs, orgRef } from "@/lib/jsonld";
import SharePage from "@/components/festival/SharePage";

export const BLOG_TEXT = {
  name: { bn: "পুজোর কথা", en: "Puja stories" },
  source: { bn: "সূত্র", en: "Source" },
  sources: { bn: "সূত্র", en: "Sources" },
  faqH2: { bn: "প্রশ্নোত্তর", en: "Questions" },
  related: { bn: "আরও দেখো", en: "See also" },
  updated: { bn: "শেষ যাচাই", en: "Last checked" },
} satisfies Record<string, L>;

const dateLabel = (iso: string, lang: Lang) => `${fmtDate(iso, lang)} ${num(Number(iso.slice(0, 4)), lang)}`;

function Src({ source, lang }: { source: ArticleSource; lang: Lang }) {
  return (
    <span className="fineprint">
      {" "}
      (
      <a href={source.url} rel="noopener noreferrer nofollow" target="_blank">
        {BLOG_TEXT.source[lang]}: {source.title}
      </a>
      )
    </span>
  );
}

/** One blog article: body blocks with inline sources, FAQ, related links, Article + FAQPage + Breadcrumb JSON-LD. */
export default function ArticlePage({ lang, a }: { lang: Lang; a: Article }) {
  const t = getDict(lang);
  const path = `/blog/${a.slug}`;
  const url = abs(withLang(lang, path));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: BLOG_TEXT.name[lang], path: withLang(lang, "/blog") },
    { name: a.h1[lang], path: withLang(lang, path) },
  ]);
  return (
    <article className="blog-article">
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {url ? (
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: a.title[lang],
              description: a.description[lang],
              inLanguage: lang,
              datePublished: a.published,
              dateModified: a.updated,
              mainEntityOfPage: url,
              author: orgRef(),
              publisher: orgRef(),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: a.faq.map((q) => ({ "@type": "Question", name: q.q[lang], acceptedAnswer: { "@type": "Answer", text: q.a[lang] } })),
            },
          ]}
        />
      ) : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> / <Link href={withLang(lang, "/blog")}>{BLOG_TEXT.name[lang]}</Link> /
      </p>
      <h1>{a.h1[lang]}</h1>
      <p className="lead">{a.lead[lang]}</p>
      <p className="fineprint">
        {BLOG_TEXT.updated[lang]}: <time dateTime={a.updated}>{dateLabel(a.updated, lang)}</time> · {a.sources.length}{" "}
        {BLOG_TEXT.sources[lang].toLowerCase()}
      </p>

      {a.body.map((b, i) => {
        if (b.kind === "h2") return <h2 key={i}>{b.text[lang]}</h2>;
        if (b.kind === "p")
          return (
            <p key={i}>
              {b.text[lang]}
              {b.source ? <Src source={b.source} lang={lang} /> : null}
            </p>
          );
        if (b.kind === "list")
          return (
            <div key={i}>
              <ul>
                {b.items.map((x) => (
                  <li key={x.en}>{x[lang]}</li>
                ))}
              </ul>
              {b.source ? (
                <p>
                  <Src source={b.source} lang={lang} />
                </p>
              ) : null}
            </div>
          );
        return (
          <p key={i} className="blog-tip">
            💡 {b.text[lang]}
          </p>
        );
      })}

      <SharePage lang={lang} title={a.title[lang]} text={a.h1[lang]} />

      <section className="home-section" aria-labelledby="blog-faq">
        <h2 id="blog-faq">{BLOG_TEXT.faqH2[lang]}</h2>
        <dl className="faq">
          {a.faq.map((q) => (
            <div key={q.q.en}>
              <dt>{q.q[lang]}</dt>
              <dd>{q.a[lang]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="home-section" aria-labelledby="blog-related">
        <h2 id="blog-related">{BLOG_TEXT.related[lang]}</h2>
        <p className="cta-row">
          {a.related.map((r, i) => (
            <Link key={r.href} className={i === 0 ? "button" : "button button-light"} href={withLang(lang, r.href)}>
              {r.label[lang]}
            </Link>
          ))}
        </p>
      </section>

      <section className="about" aria-labelledby="blog-src">
        <h2 id="blog-src">{BLOG_TEXT.sources[lang]}</h2>
        <ul className="link-list">
          {a.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="noopener noreferrer nofollow" target="_blank">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
