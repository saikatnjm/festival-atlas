import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/home/Countdown";
import EventList from "@/components/local/EventList";
import { getDict } from "@/data/i18n";
import { events, type Region } from "@/data/events/events";
import { regionInfo, ui as localUi } from "@/data/local/content";
import { fmtDateWithDay } from "@/lib/dates";
import { LANGS, withLang, type Lang } from "@/lib/i18n";
import JsonLd, { abs, breadcrumbs } from "@/lib/jsonld";
import { ESTIMATED, PUJA_2026, PUJA_DAYS } from "@/lib/puja-dates";
import { langOf } from "@/lib/route";
import { pageMeta } from "@/lib/site";

type Params = { lang: string };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

const T = {
  title: { bn: "দুর্গাপুজো ২০২৬-এর তারিখ: কলকাতা ও বাংলাদেশ (ষষ্ঠী থেকে দশমী)", en: "Durga Puja 2026 Dates: Kolkata & Bangladesh (Shashthi to Dashami)" },
  description: {
    bn: "দুর্গাপুজো ২০২৬ কবে? মহালয়া ১০ অক্টোবর; কলকাতায় ষষ্ঠী ১৭ থেকে দশমী ২১ অক্টোবর, বাংলাদেশে মহাষষ্ঠী ১৬ থেকে দশমী ২১ অক্টোবর। দিন ধরে তালিকা, সরকারি ছুটি, মেট্রোর সময়, সূত্রসহ।",
    en: "When is Durga Puja 2026? Mahalaya 10 Oct; in Kolkata Shashthi 17 to Dashami 21 Oct, in Bangladesh Maha Shashthi 16 to Dashami 21 Oct. Day-by-day table, public holidays and Metro timings, with sources.",
  },
  h1: { bn: "দুর্গাপুজো ২০২৬: কবে কোন দিন", en: "Durga Puja 2026: the dates, day by day" },
  lead: {
    bn: "মহালয়া শনিবার ১০ অক্টোবর ২০২৬। কলকাতায় ষষ্ঠী থেকে বিজয়া দশমী ১৭–২১ অক্টোবর, বাংলাদেশে ১৬–২১ অক্টোবর। নিচের তালিকায় প্রতিটি দিনের তারিখ, সঙ্গে সূত্র।",
    en: "Mahalaya is Saturday 10 October 2026. In Kolkata the festival runs Shashthi to Bijoya Dashami, 17–21 October; in Bangladesh 16–21 October. The table below has every day, with sources.",
  },
  tableH2: { bn: "দিন ধরে তারিখ", en: "Day-by-day dates" },
  day: { bn: "তিথি", en: "Day" },
  date: { bn: "তারিখ (২০২৬)", en: "Date (2026)" },
  wbNote: {
    bn: "পশ্চিমবঙ্গের তারিখ দ্রিক পঞ্চাঙ্গ-ভিত্তিক খবর অনুযায়ী; কোনো কোনো পঞ্জিকায় ষষ্ঠী/সপ্তমীতে এক দিনের তফাত আছে। নিজের পঞ্জিকা বা পাড়ার কমিটির সূচি মিলিয়ে নাও।",
    en: "West Bengal dates follow a Drik Panchang-based report; some calendars put Shashthi/Saptami a day earlier. Check your own panjika or your para committee's schedule.",
  },
  bdNote: {
    bn: "বাংলাদেশ: মহাষষ্ঠী ১৬ ও দশমী ২১ অক্টোবর News On AIR অনুযায়ী, মহানবমী ২০ অক্টোবর সরকারি ছুটির প্রজ্ঞাপন অনুযায়ী। * চিহ্নিত দিনগুলো আনুমানিক; তিথি দুই দিন জুড়েও থাকতে পারে, পুজো উদযাপন পরিষদের সূচি মিলিয়ে নাও।",
    en: "Bangladesh: Maha Shashthi 16 and Dashami 21 Oct per News On AIR, Mahanabami 20 Oct per the government holiday notification. Days marked * are estimates; a tithi can span two days, so check the Puja Udjapan Parishad schedule.",
  },
  newsH2: { bn: "তারিখের সঙ্গে যা জানা দরকার", en: "What goes with the dates" },
  faqH2: { bn: "প্রশ্নোত্তর", en: "Questions" },
  faq: [
    {
      q: { bn: "২০২৬-এ দুর্গাপুজো কবে?", en: "When is Durga Puja in 2026?" },
      a: {
        bn: "মহালয়া ১০ অক্টোবর ২০২৬। কলকাতা ও পশ্চিমবঙ্গে ষষ্ঠী ১৭ অক্টোবর থেকে বিজয়া দশমী ২১ অক্টোবর (খবর অনুযায়ী)। বাংলাদেশে মহাষষ্ঠী ১৬ অক্টোবর থেকে দশমী ২১ অক্টোবর।",
        en: "Mahalaya is 10 October 2026. In Kolkata and West Bengal, Shashthi 17 October to Bijoya Dashami 21 October (as reported). In Bangladesh, Maha Shashthi 16 October to Dashami 21 October.",
      },
    },
    {
      q: { bn: "২০২৬-এ অষ্টমী কবে?", en: "When is Ashtami in 2026?" },
      a: { bn: "কলকাতায় সোমবার ১৯ অক্টোবর ২০২৬ (অঞ্জলি ও সন্ধিপুজো), খবর অনুযায়ী। বাংলাদেশে আনুমানিক রবিবার ১৮ অক্টোবর; সূত্রে শুধু ষষ্ঠী (১৬), মহানবমী (২০) ও দশমী (২১) আছে।", en: "In Kolkata, Monday 19 October 2026 (anjali and Sandhi Puja), as reported. In Bangladesh an estimated Sunday 18 October; the sources only state Shashthi (16), Mahanabami (20) and Dashami (21)." },
    },
    {
      q: { bn: "বাংলাদেশে পুজোর ছুটি কবে?", en: "When are the Puja holidays in Bangladesh?" },
      a: {
        bn: "২০ অক্টোবর (মহানবমী) নির্বাহী আদেশে, ২১ অক্টোবর (বিজয়া দশমী) সাধারণ ছুটি, ২২ অক্টোবর অতিরিক্ত; সাপ্তাহিক ছুটি মিলিয়ে ২০–২৪ অক্টোবর। ১৭ অক্টোবর শনিবার অফিস খোলা (সূত্র: Jagonews24, ৭ অক্টোবর)।",
        en: "20 October (Mahanabami) by executive order, 21 October (Bijoya Dashami) as a public holiday and 22 October as an added holiday; with the weekend, 20–24 October. Offices are open on Saturday 17 October (source: Jagonews24, 7 Oct).",
      },
    },
    {
      q: { bn: "পুজোয় কলকাতা মেট্রো কতক্ষণ চলবে?", en: "How late does the Kolkata Metro run at Puja?" },
      a: {
        bn: "সপ্তমী থেকে নবমী (১৭–২০ অক্টোবর) ব্লু লাইন দুপুর ১টা থেকে ভোর ৪টে, গ্রিন লাইন দুপুর দেড়টা থেকে ভোর ৩:৫৯; দশমীতে ব্লু লাইন দুপুর ১টা থেকে রাত সাড়ে ১০টা (সূত্র: India TV/PTI, ৮ অক্টোবর)।",
        en: "Saptami to Navami (17–20 Oct): Blue Line 1 pm to 4 am, Green Line 1:30 pm to 3:59 am; Dashami: Blue Line 1 pm to 10:30 pm (source: India TV/PTI, 8 Oct).",
      },
    },
    {
      q: { bn: "২০২৬-এ রেড রোড কার্নিভাল হবে?", en: "Is there a Red Road carnival in 2026?" },
      a: { bn: "না। রাজ্য সরকারের ঘোষণা অনুযায়ী এবছর দশমীর পরের কার্নিভাল হচ্ছে না (সূত্র: The Week, ৭ সেপ্টেম্বর)।", en: "No. The state government has announced there will be no post-Dashami carnival this year (source: The Week, 7 Sep)." },
    },
  ],
  more: { bn: "এরপর", en: "Next" },
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const lang = langOf((await params).lang);
  return pageMeta({ lang, title: T.title[lang], description: T.description[lang], path: "/durga-puja-2026" });
}

const REGIONS: Region[] = ["wb", "bd"];

function festivalEvent(region: Region, lang: Lang, url: string) {
  const cal = PUJA_2026[region];
  const name = region === "wb" ? { bn: "দুর্গাপুজো ২০২৬, কলকাতা", en: "Durga Puja 2026, Kolkata" } : { bn: "শারদীয় দুর্গোৎসব ২০২৬, বাংলাদেশ", en: "Durga Puja 2026, Bangladesh" };
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: name[lang],
    startDate: cal.shashthi,
    endDate: cal.dashami,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    url,
    location: region === "wb"
      ? { "@type": "Place", name: "Kolkata", address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" } }
      : { "@type": "Place", name: "Dhaka", address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" } },
    description: T.description[lang],
  };
}

/** Durga Puja 2026 dates for both regions, day by day, with the sourced facts that go with them. */
export default async function DatesPage({ params }: { params: Promise<Params> }) {
  const lang = langOf((await params).lang);
  const t = getDict(lang);
  const url = abs(withLang(lang, "/durga-puja-2026"));
  const crumbs = breadcrumbs([
    { name: t.nav.home, path: withLang(lang, "/") },
    { name: T.h1[lang], path: withLang(lang, "/durga-puja-2026") },
  ]);
  const news = events.filter((e) => e.kind !== "pandal");

  return (
    <article>
      {crumbs ? <JsonLd data={crumbs} /> : null}
      {url ? (
        <JsonLd
          data={[
            festivalEvent("wb", lang, url),
            festivalEvent("bd", lang, url),
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
      <Countdown lang={lang} />
      <h1>{T.h1[lang]}</h1>
      <p className="lead">{T.lead[lang]}</p>

      <section className="home-section" aria-labelledby="dates-table">
        <h2 id="dates-table">{T.tableH2[lang]}</h2>
        <div className="dates-grid">
          {REGIONS.map((r) => (
            <table key={r} className="dates-table">
              <caption>
                {regionInfo[r].icon} {regionInfo[r].name[lang]}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{T.day[lang]}</th>
                  <th scope="col">{T.date[lang]}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{lang === "bn" ? "মহালয়া" : "Mahalaya"}</th>
                  <td>{fmtDateWithDay("2026-10-10", lang)}</td>
                </tr>
                {PUJA_DAYS.filter((d) => d.id !== "panchami").map((d) => (
                  <tr key={d.id}>
                    <th scope="row">{d[lang]}</th>
                    <td>
                      {fmtDateWithDay(PUJA_2026[r][d.id], lang)}
                      {ESTIMATED[r].includes(d.id) ? <span className="dates-est"> *</span> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
        <p className="fineprint">{T.wbNote[lang]}</p>
        <p className="fineprint">{T.bdNote[lang]}</p>
      </section>

      <section className="home-section" aria-labelledby="dates-news">
        <h2 id="dates-news">{T.newsH2[lang]}</h2>
        <p className="section-lead">{localUi.trendNote[lang]}</p>
        <EventList lang={lang} events={news} limit={news.length} showRegion />
      </section>

      <section className="home-section" aria-labelledby="dates-faq">
        <h2 id="dates-faq">{T.faqH2[lang]}</h2>
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
        <Link className="button" href={withLang(lang, "/puja/kolkata")}>
          🥁 {lang === "bn" ? "কলকাতার প্যান্ডেল ২০২৬" : "Kolkata pandals 2026"}
        </Link>
        <Link className="button" href={withLang(lang, "/puja/dhaka")}>
          🛕 {lang === "bn" ? "ঢাকার মণ্ডপ ২০২৬" : "Dhaka mandaps 2026"}
        </Link>
        <Link className="button button-light" href={withLang(lang, "/local")}>
          {t.nav.local}
        </Link>
      </p>
    </article>
  );
}
