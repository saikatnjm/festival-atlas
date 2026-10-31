import type { Metadata } from "next";
import Link from "next/link";
import { getDict } from "@/data/i18n";
import type { Region } from "@/data/events/events";
import { CRACKERS, CROWD, KALI_2026, KALI_PANDALS_TEXT as KP, KALI_TEXT as T, KALI_TIMINGS, KALI_WEEK } from "@/data/kali-puja";
import { areaOf, cityName, nameOf, pandals, pujaOf, sortPandals } from "@/data/pandals";
import { regionInfo } from "@/data/local/content";
import { TIMINGS_TEXT } from "@/data/puja-timings";
import { LANGS, withLang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

const PATH = "/kali-puja-2026";
const REGIONS: Region[] = ["wb", "bd"];

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: T.title[lang], description: T.description[lang], path: PATH });
}

function Src({ source, label }: { source: { title: string; url: string }; label: string }) {
  return (
    <span className="fineprint">
      (
      <a href={source.url} rel="noopener noreferrer nofollow" target="_blank">
        {label}: {source.title}
      </a>
      )
    </span>
  );
}

/** Kali Puja 2026: sourced date and night timings for Kolkata and Bangladesh, the week after, crackers, crowds. */
export default async function KaliPujaPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const url = abs(withLang(lang, PATH));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: T.h1[lang], path: withLang(lang, PATH) },
  ]);
  const event = (region: Region) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: region === "wb" ? (lang === "bn" ? "কালীপুজো ২০২৬, কলকাতা" : "Kali Puja 2026, Kolkata") : lang === "bn" ? "শ্যামাপুজো ২০২৬, বাংলাদেশ" : "Shyama Puja 2026, Bangladesh",
    startDate: KALI_2026.kali,
    endDate: KALI_2026.kali,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    url,
    location:
      region === "wb"
        ? { "@type": "Place", name: "Kolkata", address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" } }
        : { "@type": "Place", name: "Dhaka", address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" } },
    description: T.description[lang],
  });

  const kaliPandals = sortPandals(pandals.filter((p) => pujaOf(p) === "kali"));
  const kaliCities = [...new Set(kaliPandals.map((p) => p.city))];

  return (
    <article>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {url ? (
        <JsonLd
          data={[
            event("wb"),
            event("bd"),
            ...(kaliPandals.length
              ? [
                  {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: KP.h2[lang],
                    itemListElement: kaliPandals.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: nameOf(p, lang), url: abs(withLang(lang, `/puja/${p.id}`)) })),
                  },
                ]
              : []),
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: T.faq.map((f) => ({ "@type": "Question", name: f.q[lang], acceptedAnswer: { "@type": "Answer", text: f.a[lang] } })),
            },
          ]}
        />
      ) : null}
      <p className="breadcrumb">
        <Link href={withLang(lang, "/")}>{t.nav.home}</Link> /
      </p>
      <h1>{T.h1[lang]}</h1>
      <p className="lead">{T.lead[lang]}</p>

      <section className="home-section" aria-labelledby="kali-timings">
        <h2 id="kali-timings">{T.timingsH2[lang]}</h2>
        <p className="section-lead">{T.timingsLead[lang]}</p>
        {REGIONS.map((r) => (
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
                {KALI_TIMINGS[r].map((row) => (
                  <tr key={row.what.en}>
                    <th scope="row">{row.day[lang]}</th>
                    <td>{row.what[lang]}</td>
                    <td>
                      {row.when[lang]} <Src source={row.source} label={T.sources[lang]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <p className="fineprint">{T.bdHoliday[lang]}</p>
      </section>

      {kaliPandals.length ? (
        <section className="home-section" aria-labelledby="kali-pandals">
          <h2 id="kali-pandals">{KP.h2[lang]}</h2>
          <p className="section-lead">{KP.lead[lang]}</p>
          {kaliCities.map((city) => (
            <div key={city}>
              <h3>{cityName(city, lang)}</h3>
              <ul className="link-list">
                {kaliPandals
                  .filter((p) => p.city === city)
                  .map((p) => {
                    const past = p.history?.find((h) => h.year === 2025 && h.theme);
                    const area = areaOf(p, lang);
                    return (
                      <li key={p.id}>
                        <Link href={withLang(lang, `/puja/${p.id}`)}>{nameOf(p, lang)}</Link>
                        {area ? <span className="fineprint"> · {area}</span> : null}
                        {past ? (
                          <span className="fineprint">
                            {" "}
                            · {KP.theme2025[lang]}: {past.theme}
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
          <p className="cta-row">
            <Link className="button button-light" href={`${withLang(lang, "/puja")}?puja=kali`}>
              {KP.map[lang]}
            </Link>
          </p>
        </section>
      ) : null}

      <section className="home-section" aria-labelledby="kali-week">
        <h2 id="kali-week">{T.weekH2[lang]}</h2>
        <dl className="faq">
          {KALI_WEEK.map((w) => (
            <div key={w.what.en}>
              <dt>
                {w.href ? <Link href={withLang(lang, w.href)}>{w.what[lang]}</Link> : w.what[lang]}: {w.when[lang]}
              </dt>
              <dd>
                {w.note ? `${w.note[lang]} ` : null}
                <Src source={w.source} label={T.sources[lang]} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="home-section" aria-labelledby="kali-crackers">
        <h2 id="kali-crackers">{CRACKERS.h2[lang]}</h2>
        <p>{CRACKERS.status[lang]}</p>
        <p>
          {CRACKERS.last[lang]} <Src source={CRACKERS.source} label={T.sources[lang]} />
        </p>
      </section>

      <section className="home-section" aria-labelledby="kali-crowd">
        <h2 id="kali-crowd">{CROWD.h2[lang]}</h2>
        <p>
          {CROWD.boroMaa[lang]} <Src source={CROWD.boroMaaSource} label={T.sources[lang]} />
        </p>
        <ul>
          {CROWD.tips.map((tip) => (
            <li key={tip.en}>{tip[lang]}</li>
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="kali-faq">
        <h2 id="kali-faq">{T.faqH2[lang]}</h2>
        <dl className="faq">
          {T.faq.map((f) => (
            <div key={f.q.en}>
              <dt>{f.q[lang]}</dt>
              <dd>{f.a[lang]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="cta-row">
        <Link className="button" href={`${withLang(lang, "/greetings")}?d=kali`}>
          🪔 {lang === "bn" ? "কালীপুজোর শুভেচ্ছা কার্ড বানাও" : "Make a Kali Puja greeting card"}
        </Link>
        <Link className="button button-light" href={withLang(lang, "/jagaddhatri-puja-2026")}>
          🏮 {lang === "bn" ? "জগদ্ধাত্রী পুজো ২০২৬" : "Jagaddhatri Puja 2026"}
        </Link>
        <Link className="button button-light" href={withLang(lang, "/durga-puja-2026")}>
          {lang === "bn" ? "দুর্গাপুজো ২০২৬-এর তারিখ" : "Durga Puja 2026 dates"}
        </Link>
      </p>
    </article>
  );
}
