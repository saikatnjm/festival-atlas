import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "@/components/puja/StatusBadge";
import { cityName, countryName, descriptionOf, getPandal, hasPin, pandals, placeLabel, sortPandals, themeOf } from "@/data/pandals";
import { collections } from "@/data/pandals/collections";
import { getDict } from "@/data/i18n";
import { fmt } from "@/lib/format";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { PUJA_2026 } from "@/lib/puja-dates";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

type Params = { lang: string; id: string };

export function generateStaticParams(): { lang: string; id: string }[] {
  return LANGS.flatMap((lang) => pandals.map((p) => ({ lang, id: p.id })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang: l, id } = await params;
  const lang = langOf(l);
  const p = getPandal(id);
  if (!p) return {};
  const t = getDict(lang).puja;
  const description = p.year
    ? fmt(t.detailMeta, { description: descriptionOf(p, lang), year: p.year }, lang)
    : fmt(t.detailMetaNoYear, { description: descriptionOf(p, lang) }, lang);
  return pageMeta({
    lang,
    // Titles carry the edition year for current pujas ("… Durga Puja 2026 in Kolkata, India").
    title: p.year && p.year >= 2025 ? fmt(t.detailTitleYear, { name: p.name, year: p.year, place: placeLabel(p, lang) }, lang) : fmt(t.detailTitle, { name: p.name, place: placeLabel(p, lang) }, lang),
    description,
    path: `/puja/${id}`,
  });
}

export default async function PandalPage({ params }: { params: Promise<Params> }) {
  const { lang: l, id } = await params;
  const lang = langOf(l);
  const p = getPandal(id);
  if (!p) notFound();
  const d = getDict(lang);
  const t = d.puja;
  const theme = themeOf(p, lang);
  const related = sortPandals(pandals.filter((x) => x.city === p.city && x.id !== p.id)).slice(0, 6);
  const collection = collections.find((c) => c.match(p));
  const crumbs = breadcrumbs([
    { name: d.nav.home, path: withLang(lang, "/") },
    { name: d.nav.puja, path: withLang(lang, "/puja") },
    ...(collection ? [{ name: collection.h1[lang], path: withLang(lang, `/puja/${collection.slug}`) }] : []),
    { name: p.name, path: withLang(lang, `/puja/${p.id}`) },
  ]);
  const pinText = p.pin ? fmt(t.pinApprox, { kind: t.pinKind[p.pin] }, lang) : undefined;
  const pageUrl = abs(withLang(lang, `/puja/${p.id}`));
  // Event rich result for this year's confirmed pujas in Kolkata/Bangladesh (dates from the regional calendar).
  const region = p.country === "IN" ? "wb" : p.country === "BD" ? "bd" : null;
  const eventLd =
    pageUrl && region && p.status === "confirmed" && p.year === 2026
      ? {
          "@context": "https://schema.org",
          "@type": "Event",
          name: `${p.name}: Durga Puja 2026`,
          startDate: PUJA_2026[region].shashthi,
          endDate: PUJA_2026[region].dashami,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          isAccessibleForFree: true,
          url: pageUrl,
          description: descriptionOf(p, lang),
          location: {
            "@type": "Place",
            name: p.name,
            address: { "@type": "PostalAddress", streetAddress: p.address, addressLocality: p.area ? `${p.area}, ${p.city}` : p.city, addressCountry: p.country },
            ...(hasPin(p) ? { geo: { "@type": "GeoCoordinates", latitude: p.lat, longitude: p.lng } } : {}),
          },
          ...(p.committee ? { organizer: { "@type": "Organization", name: p.committee } } : {}),
        }
      : null;

  const rows: [string, React.ReactNode][] = [];
  rows.push([t.facts.location, `${p.area ? `${p.area}, ` : ""}${placeLabel(p, lang)}`]);
  rows.push([t.facts.edition, p.year ? fmt(t.edition, { year: p.year }, lang) : t.yearUnknown]);
  if (theme) rows.push([t.facts.theme, p.themeYear ? fmt(t.themeYear, { theme, year: p.themeYear }, lang) : theme]);
  if (p.committee) rows.push([t.facts.committee, p.committee]);
  if (p.address) rows.push([t.facts.address, p.address]);
  if (p.dates) rows.push([t.facts.dates, p.dates]);
  if (p.website)
    rows.push([
      t.facts.website,
      <a key="w" href={p.website} rel="noopener noreferrer" target="_blank">
        {p.website.replace(/^https?:\/\//, "")}
      </a>,
    ]);
  if (hasPin(p) && pinText)
    rows.push([
      t.facts.pin,
      <>
        {pinText} ·{" "}
        <a href={`https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lng}#map=13/${p.lat}/${p.lng}`} rel="noopener noreferrer" target="_blank">
          {t.openOsm}
        </a>
      </>,
    ]);
  rows.push([t.facts.verified, p.lastVerified]);

  return (
    <article>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {eventLd ? <JsonLd data={eventLd} /> : null}
      {abs(withLang(lang, `/puja/${p.id}`)) ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: fmt(t.detailTitle, { name: p.name, place: placeLabel(p, lang) }, lang),
            url: abs(withLang(lang, `/puja/${p.id}`)),
            inLanguage: lang,
            description: descriptionOf(p, lang),
            dateModified: p.lastVerified,
          }}
        />
      ) : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/puja")}>{t.breadcrumb}</Link> /{" "}
        {collection ? (
          <>
            <Link href={withLang(lang, `/puja/${collection.slug}`)}>{collection.h1[lang]}</Link> /
          </>
        ) : null}
      </p>
      <h1>{p.name}</h1>
      <p className="entry-badges">
        <StatusBadge status={p.status} label={t.statusLabel[p.status]} />
        <span className="year-badge">{p.year ? fmt(t.edition, { year: p.year }, lang) : t.yearUnknown}</span>
      </p>
      <p className="status-help">{t.statusHelp[p.status]}</p>
      <p className="lead">{descriptionOf(p, lang)}</p>

      <dl className="facts facts-table">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <p className="cta-row">
        {/* Google Maps resolves the venue by name and address, which is more precise than our area-level pins. */}
        <a
          className="button"
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent([p.name, p.address ?? p.area, p.city].filter(Boolean).join(", "))}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t.directions}
        </a>
        {hasPin(p) ? (
          <Link className="button button-light" href={`${withLang(lang, "/puja")}#e=${p.id}`}>
            {t.showOnMap}
          </Link>
        ) : null}
        <Link className="button button-light" href={withLang(lang, "/puja")}>
          {t.backToDirectory}
        </Link>
      </p>

      <section className="about" aria-labelledby="src-h">
        <h2 id="src-h">{t.sources}</h2>
        <p className="fineprint">{t.sourcesNote}</p>
        <ul className="link-list">
          {p.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="noopener noreferrer nofollow" target="_blank">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="about" aria-labelledby="rel-h">
          <h2 id="rel-h">{fmt(t.sameCity, { city: cityName(p.city, lang) }, lang)}</h2>
          <ul className="link-list">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={withLang(lang, `/puja/${r.id}`)}>{r.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <p className="fineprint">{countryName(p.country, lang)} · {t.osmAttr}</p>
    </article>
  );
}
