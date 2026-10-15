import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EventList from "@/components/local/EventList";
import StatusBadge from "@/components/puja/StatusBadge";
import { getDict } from "@/data/i18n";
import { events } from "@/data/events/events";
import { regionInfo, ui as localUi } from "@/data/local/content";
import { areaOf, cityName, countryName, nameOf, pandals, sortPandals, themeOf, type Pandal } from "@/data/pandals";
import { collections, getCollection } from "@/data/pandals/collections";
import { collectionCounts } from "@/data/pandals/counts";
import { fmt } from "@/lib/format";
import { num, withLang, type Lang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { pageMeta } from "@/lib/site";

const T = {
  highlights: { bn: "২০২৬-এর খবর ও থিম-হাইলাইট", en: "2026 news and theme highlights" },
  listH2: { bn: "তালিকা: {n}টি প্যান্ডেল", en: "The list: {n} pandals" },
  listP: { bn: "সূত্র, সাল আর অবস্থা প্রতিটি এন্ট্রির পাতায়। এলাকাভাগ মোটামুটি।", en: "Sources, year and status are on each entry's page. Area grouping is approximate." },
  onMap: { bn: "এগুলো ম্যাপে দেখো", en: "See these on the map" },
  route: { bn: "আজ রাতের রুট বানাও", en: "Plan tonight's route" },
  dates: { bn: "দুর্গাপুজো ২০২৬-এর তারিখ", en: "Durga Puja 2026 dates" },
  faq: { bn: "প্রশ্নোত্তর", en: "Questions" },
  other: { bn: "আরও", en: "More" },
  unknownArea: { bn: "অন্যান্য", en: "Other areas" },
  edition: { bn: "{year} সংস্করণ", en: "Edition {year}" },
  listed: { bn: "{n}টি তালিকায়, {m}টি ম্যাপে", en: "{n} listed, {m} on the map" },
  split: { bn: "{city}-এ {n}টি · অন্যত্র {e}টি · ম্যাপে {m}টি", en: "{n} in {city} · {e} elsewhere · {m} on the map" },
};

export function collectionMetadata(lang: Lang, slug: string): Metadata {
  const c = getCollection(slug);
  if (!c) return {};
  return pageMeta({ lang, title: c.title[lang], description: c.description[lang], path: `/puja/${c.slug}`, region: c.region });
}

/** Grouping key: always the English area, so entries with and without a Bangla spelling land in one group. */
function groupKey(p: Pandal, by: "area" | "city" | "country", lang: Lang): string {
  if (by === "country") return countryName(p.country, lang);
  if (by === "city") return cityName(p.city, lang);
  return p.area?.split(/[,(]/)[0].trim() || "";
}

/** Heading for an area group: the Bangla spelling of its first member that has one, else the key itself. */
function groupLabel(key: string, items: Pandal[], by: "area" | "city" | "country", lang: Lang): string {
  if (by !== "area" || lang !== "bn") return key;
  const withBn = items.find((p) => p.area_bn);
  return withBn ? (areaOf(withBn, lang)?.split(/[,(]/)[0].trim() ?? key) : key;
}

/** A static landing page for one slice of the directory: intro, sourced 2026 highlights, the list, FAQ. */
export default function CollectionPage({ lang, slug }: { lang: Lang; slug: string }) {
  const c = getCollection(slug);
  if (!c) notFound();
  const t = getDict(lang);
  const list = sortPandals(pandals.filter(c.match));
  const counts = collectionCounts(c);
  // With a primary city and area grouping, the rest of the region (Siliguri, Khardaha…) forms one trailing group.
  const splitOthers = Boolean(c.primaryCity && c.othersLabel && c.groupBy !== "city");
  const groups = new Map<string, Pandal[]>();
  const others: Pandal[] = [];
  for (const p of list) {
    if (splitOthers && p.city !== c.primaryCity) {
      others.push(p);
      continue;
    }
    const k = groupKey(p, c.groupBy, lang) || T.unknownArea[lang];
    groups.set(k, [...(groups.get(k) ?? []), p]);
  }
  const grouped: [string, Pandal[]][] = [...groups.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([key, items]) => [groupLabel(key, items, c.groupBy, lang), items]);
  if (others.length && c.othersLabel) grouped.push([c.othersLabel[lang], others]);
  const regionEvents = c.region ? events.filter((e) => e.region === c.region) : [];
  const path = `/puja/${c.slug}`;
  const url = abs(withLang(lang, path));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: t.nav.puja, path: withLang(lang, "/puja") },
    { name: c.h1[lang], path: withLang(lang, path) },
  ]);

  return (
    <article>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {url ? (
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: c.title[lang],
              url,
              inLanguage: lang,
              description: c.description[lang],
              isPartOf: { "@type": "WebSite", name: t.site.name, url: abs(withLang(lang, "/")) },
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: c.h1[lang],
              numberOfItems: list.length,
              itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: nameOf(p, lang), url: abs(withLang(lang, `/puja/${p.id}`)) })),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q[lang], acceptedAnswer: { "@type": "Answer", text: f.a[lang] } })),
            },
          ]}
        />
      ) : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/puja")}>{t.nav.puja}</Link> /
      </p>
      <h1>{c.h1[lang]}</h1>
      <p className="lead">{c.lead[lang]}</p>
      <ul className="stat-row" aria-label={t.site.name}>
        <li>
          {c.primaryCity && counts.elsewhere > 0
            ? fmt(T.split[lang], { city: cityName(c.primaryCity, lang), n: counts.primary, e: counts.elsewhere, m: counts.pinned }, lang)
            : fmt(T.listed[lang], { n: counts.total, m: counts.pinned }, lang)}
        </li>
        <li>{t.home.statSources}</li>
      </ul>
      <p className="cta-row">
        <Link className="button" href={`${withLang(lang, "/puja")}${c.mapQuery}`}>
          {T.onMap[lang]}
        </Link>
        {c.region ? (
          <Link className="button button-light" href={`${withLang(lang, "/local")}?r=${c.region}#local-route`}>
            🌙 {T.route[lang]}
          </Link>
        ) : null}
        <Link className="button button-light" href={withLang(lang, "/durga-puja-2026")}>
          📅 {T.dates[lang]}
        </Link>
      </p>

      {regionEvents.length ? (
        <section className="home-section" aria-labelledby="col-news">
          <h2 id="col-news">{T.highlights[lang]}</h2>
          <p className="section-lead">{localUi.trendNote[lang]}</p>
          <EventList lang={lang} events={regionEvents} limit={6} />
          <p>
            <Link href={`${withLang(lang, "/local")}?r=${c.region}`}>{localUi.seeAll[lang]}</Link>
          </p>
        </section>
      ) : null}

      <section className="home-section" aria-labelledby="col-list">
        <h2 id="col-list">{fmt(T.listH2[lang], { n: list.length }, lang)}</h2>
        <p className="section-lead">{T.listP[lang]}</p>
        {grouped.map(([group, items], gi) => (
          <section key={group} className="col-group" aria-labelledby={`g-${gi}`}>
            <h3 id={`g-${gi}`}>
              {group} <span className="col-count">{num(items.length, lang)}</span>
            </h3>
            <ul className="col-list">
              {items.map((p) => {
                const theme = themeOf(p, lang);
                return (
                  <li key={p.id}>
                    <Link href={withLang(lang, `/puja/${p.id}`)}>{nameOf(p, lang)}</Link>
                    <span className="col-meta">
                      {splitOthers && p.city !== c.primaryCity ? <span className="col-city">{cityName(p.city, lang)}</span> : null}
                      <StatusBadge status={p.status} label={t.puja.statusLabel[p.status]} />
                      {p.year ? <span className="year-badge">{fmt(T.edition[lang], { year: p.year }, lang)}</span> : null}
                      {theme ? <span className="col-theme">{p.themeYear ? fmt(t.puja.themeYear, { theme, year: p.themeYear }, lang) : theme}</span> : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </section>

      <section className="home-section" aria-labelledby="col-faq">
        <h2 id="col-faq">{T.faq[lang]}</h2>
        <dl className="faq">
          {c.faq.map((f) => (
            <div key={f.q.en}>
              <dt>{f.q[lang]}</dt>
              <dd>{f.a[lang]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="cta-row">
        {collections
          .filter((o) => o.slug !== c.slug)
          .map((o) => (
            <Link key={o.slug} className="button button-light" href={withLang(lang, `/puja/${o.slug}`)}>
              {o.region ? regionInfo[o.region].icon : "🌍"} {o.h1[lang]}
            </Link>
          ))}
      </p>
      <p className="fineprint">{t.puja.notice}</p>
    </article>
  );
}
