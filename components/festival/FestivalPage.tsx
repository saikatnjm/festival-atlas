import Link from "next/link";
import type { Region } from "@/data/events/events";
import { getDict } from "@/data/i18n";
import { regionInfo } from "@/data/local/content";
import { areaOf, cityName, nameOf, pandals, sortPandals } from "@/data/pandals";
import type { FestivalPage as Festival, FestivalSource } from "@/data/festivals/types";
import { TIMINGS_TEXT } from "@/data/puja-timings";
import { num, withLang, type L, type Lang } from "@/lib/i18n";
import { fmtDate } from "@/lib/dates";
import JsonLd, { abs, breadcrumbs, orgRef } from "@/lib/jsonld";
import SharePage from "./SharePage";

const T = {
  source: { bn: "সূত্র", en: "Source" },
  faqH2: { bn: "প্রশ্নোত্তর", en: "Questions" },
  checked: { bn: "শেষ যাচাই", en: "Last checked" },
  past: { bn: "আগের থিম", en: "Past theme" },
} satisfies Record<string, L>;

const REGIONS: Region[] = ["wb", "bd"];

function Src({ source, lang }: { source: FestivalSource; lang: Lang }) {
  return (
    <span className="fineprint">
      (
      <a href={source.url} rel="noopener noreferrer nofollow" target="_blank">
        {T.source[lang]}: {source.title}
      </a>
      )
    </span>
  );
}

/** A festival landing page: sourced date/tithi table for Kolkata and Dhaka, sections, pandals, FAQ, JSON-LD. */
export default function FestivalPage({ lang, f }: { lang: Lang; f: Festival }) {
  const t = getDict(lang);
  const url = abs(withLang(lang, f.path));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: f.h1[lang], path: withLang(lang, f.path) },
  ]);
  const checked = `${fmtDate(f.lastChecked, lang)} ${num(Number(f.lastChecked.slice(0, 4)), lang)}`;
  const list = f.pandals ? sortPandals(pandals.filter((p) => p.puja === f.pandals?.puja)) : [];
  const cities = [...new Set(list.map((p) => p.city))];
  const ld = url
    ? [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: f.title[lang],
          description: f.description[lang],
          url,
          inLanguage: lang,
          dateModified: f.lastChecked,
          publisher: orgRef(),
        },
        ...f.events.map((e) => ({
          "@context": "https://schema.org",
          "@type": "Event",
          name: e.name[lang],
          startDate: e.start,
          endDate: e.end ?? e.start,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          isAccessibleForFree: true,
          url,
          location: {
            "@type": "Place",
            name: e.place.name,
            address: { "@type": "PostalAddress", addressLocality: e.place.locality, ...(e.place.region ? { addressRegion: e.place.region } : {}), addressCountry: e.place.country },
          },
          description: f.description[lang],
        })),
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: f.faq.map((q) => ({ "@type": "Question", name: q.q[lang], acceptedAnswer: { "@type": "Answer", text: q.a[lang] } })),
        },
        ...(list.length && f.pandals
          ? [
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: f.pandals.h2[lang],
                itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: nameOf(p, lang), url: abs(withLang(lang, `/puja/${p.id}`)) })),
              },
            ]
          : []),
      ]
    : null;

  return (
    <article>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {ld ? <JsonLd data={ld} /> : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1>{f.h1[lang]}</h1>
      <p className="lead">{f.lead[lang]}</p>
      <p className="fineprint">
        {T.checked[lang]}: <time dateTime={f.lastChecked}>{checked}</time>
      </p>

      {f.timings ? (
      <section className="home-section" aria-labelledby="fest-timings">
        <h2 id="fest-timings">{f.timings.h2[lang]}</h2>
        <p className="section-lead">{f.timings.lead[lang]}</p>
        {REGIONS.filter((r) => f.timings?.rows[r]?.length).map((r) => (
          <div key={r} className="timings-wrap">
            <table className="timings-table">
              <caption>
                {regionInfo[r].icon} {regionInfo[r].name[lang]} · {r === "wb" ? "IST" : "BST"}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{TIMINGS_TEXT.colDay[lang]}</th>
                  <th scope="col">{TIMINGS_TEXT.colWhat[lang]}</th>
                  <th scope="col">{TIMINGS_TEXT.colWhen[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {f.timings?.rows[r]?.map((row) => (
                  <tr key={row.what.en + row.day.en}>
                    <th scope="row">{row.day[lang]}</th>
                    <td>{row.what[lang]}</td>
                    <td>
                      {row.when[lang]} <Src source={row.source} lang={lang} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        {f.timings.note ? <p className="fineprint">{f.timings.note[lang]}</p> : null}
      </section>
      ) : null}

      {f.tables?.map((tb) => (
        <section key={tb.id} className="home-section" aria-labelledby={`fest-${tb.id}`}>
          <h2 id={`fest-${tb.id}`}>{tb.h2[lang]}</h2>
          {tb.lead ? <p className="section-lead">{tb.lead[lang]}</p> : null}
          <div className="timings-wrap">
            <table className="timings-table">
              <caption>{tb.caption[lang]}</caption>
              <thead>
                <tr>
                  {tb.columns.map((c) => (
                    <th key={c.en} scope="col">
                      {c[lang]}
                    </th>
                  ))}
                  <th scope="col">{T.source[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {tb.rows.map((row) => (
                  <tr key={row.cells.map((c) => c.en).join("|")}>
                    {row.cells.map((c, i) =>
                      i === 0 ? (
                        <th key={i} scope="row">
                          {row.href ? <Link href={withLang(lang, row.href)}>{c[lang]}</Link> : c[lang]}
                        </th>
                      ) : (
                        <td key={i}>{c[lang]}</td>
                      ),
                    )}
                    <td>
                      <a className="fineprint" href={row.source.url} rel="noopener noreferrer nofollow" target="_blank">
                        {row.source.title}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {tb.note ? <p className="fineprint">{tb.note[lang]}</p> : null}
        </section>
      ))}

      {f.sections.map((s) => (
        <section key={s.id} className="home-section" aria-labelledby={`fest-${s.id}`}>
          <h2 id={`fest-${s.id}`}>{s.h2[lang]}</h2>
          {s.paras.map((p) => (
            <p key={p.text.en}>
              {p.text[lang]} {p.source ? <Src source={p.source} lang={lang} /> : null}
            </p>
          ))}
          {s.tips?.length ? (
            <ul>
              {s.tips.map((tip) => (
                <li key={tip.en}>{tip[lang]}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {f.pandals && list.length ? (
        <section className="home-section" aria-labelledby="fest-pandals">
          <h2 id="fest-pandals">{f.pandals.h2[lang]}</h2>
          <p className="section-lead">{f.pandals.lead[lang]}</p>
          {cities.map((city) => (
            <div key={city}>
              <h3>{cityName(city, lang)}</h3>
              <ul className="link-list">
                {list
                  .filter((p) => p.city === city)
                  .map((p) => {
                    const area = areaOf(p, lang);
                    const past = (p.history ?? []).filter((h) => h.theme).sort((a, b) => b.year - a.year)[0];
                    return (
                      <li key={p.id}>
                        <Link href={withLang(lang, `/puja/${p.id}`)}>{nameOf(p, lang)}</Link>
                        {area ? <span className="fineprint"> · {area}</span> : null}
                        {past ? (
                          <span className="fineprint">
                            {" "}
                            · {T.past[lang]} ({num(past.year, lang)}): {past.theme}
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
          <p className="cta-row">
            <Link className="button button-light" href={`${withLang(lang, "/puja")}?puja=${f.pandals.puja}`}>
              {f.pandals.map[lang]}
            </Link>
          </p>
        </section>
      ) : null}

      <section className="home-section" aria-labelledby="fest-faq">
        <h2 id="fest-faq">{T.faqH2[lang]}</h2>
        <dl className="faq">
          {f.faq.map((q) => (
            <div key={q.q.en}>
              <dt>{q.q[lang]}</dt>
              <dd>{q.a[lang]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <SharePage lang={lang} title={f.title[lang]} text={f.h1[lang]} />
      <p className="cta-row">
        {f.links.map((x) => (
          <Link key={x.href} className={x.primary ? "button" : "button button-light"} href={withLang(lang, x.href)}>
            {x.label[lang]}
          </Link>
        ))}
      </p>
    </article>
  );
}
