// One page per Ekadashi of 2027 (/ekadashi-2027/<name>). Dates and tithi times come from EKADASHI_ROWS (the
// sourced list behind /ekadashi-2027); parana windows and the "what it is" lines from EKADASHI_EXTRA, each
// with its own source. Nothing is computed: times are only reformatted.

import type { L } from "@/lib/i18n";
import { DRIK_EKADASHI_PAGE, EKADASHI_EXTRA, PARANA_BY_DATE } from "./ekadashi-extra-2027";
import { EKADASHI_ROWS, EKADASHI_SLUG, ISKCON_KOL, NAMES, SMARTA_DHAKA, SMARTA_KOL, dayLabel, timeLabel } from "./lunar-2027";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const paranaSource = (key: string, city: "Kolkata" | "Dhaka") => ({
  title: `Drik Panchang, ${NAMES[key].en} 2027 parana (${city})`,
  url: `https://www.drikpanchang.com/ekadashis/${DRIK_EKADASHI_PAGE[key]}-ekadashi-date-time.html?geoname-id=${city === "Kolkata" ? "1275004" : "1185241"}&year=2027`,
});

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const day = (iso: string): L => ({ bn: dayLabel(iso, "bn", false), en: dayLabel(iso, "en", false) });
const range = (a: string, b: string): L => ({ bn: `${timeLabel(a, "bn")} থেকে ${timeLabel(b, "bn")}`, en: `${timeLabel(a, "en")} to ${timeLabel(b, "en")}` });
/** "07:12" → "7:12 am" / "সকাল ৭:১২" (a printed time, only reformatted). */
const clock = (date: string, hm: string): L => {
  const strip = (t: string) => t.replace(/^\S+ \S+ /, "");
  return { bn: strip(timeLabel(`${date} ${hm}`, "bn")), en: strip(timeLabel(`${date} ${hm}`, "en")) };
};
/** "2027-01-04 07:12-09:15" → day + "7:12 am to 9:15 am". */
function parana(v: string): { day: L; when: L } {
  const [date, win] = v.split(" ");
  const [a, b] = win.split("-").map((t) => clock(date, t));
  return { day: day(date), when: { bn: `${a.bn} থেকে ${b.bn}`, en: `${a.en} to ${b.en}` } };
}

const ROWS = EKADASHI_ROWS.filter((r) => r[1].startsWith("2027"));
const SLUGS = ROWS.map((r) => EKADASHI_SLUG[r[1]]);

/** Parana for a row: the date-specific one, else the Ekadashi's own entry when it is for the next day. */
function paranaFor(key: string, date: string): { kol?: string; dhaka?: string } {
  if (PARANA_BY_DATE[date]) return PARANA_BY_DATE[date];
  const p = EKADASHI_EXTRA[key]?.parana ?? {};
  const nextDay = new Date(Date.parse(`${date}T00:00:00Z`) + 86_400_000).toISOString().slice(0, 10);
  return p.kol?.startsWith(nextDay) ? p : {};
}

function title(n: L): L {
  const en = [`${n.en} 2027: Date, Parana Time & Tithi`, `${n.en} 2027: Date & Parana Time`, `${n.en} 2027 Date`].find((t) => t.length <= 60) ?? `${n.en} 2027`;
  return { bn: `${n.bn} ২০২৭: তারিখ, পারণের সময়`, en };
}

function page(i: number): FestivalPage {
  const [key, date, ks, ke, ds, de, isk] = ROWS[i];
  const n = NAMES[key];
  const x = EKADASHI_EXTRA[key];
  const pr = paranaFor(key, date);
  const pk = pr.kol ? parana(pr.kol) : undefined;
  const pd = pr.dhaka ? parana(pr.dhaka) : undefined;
  const vaishnava = isk && isk !== "?" ? isk : "";
  const prev = ROWS[i - 1];
  const next = ROWS[i + 1];
  const d = day(date);
  const descEn = `${n.en} 2027 is ${d.en}. Kolkata tithi ${timeLabel(ks, "en")} to ${timeLabel(ke, "en")}${pk ? `, parana ${pk.day.en} ${pk.when.en}` : ""}; Dhaka times too, sourced.`;
  const descBn = `${n.bn} ২০২৭ ${d.bn}। কলকাতায় তিথি ${timeLabel(ks, "bn")} থেকে ${timeLabel(ke, "bn")}${pk ? `, পারণ ${pk.day.bn} ${pk.when.bn}` : ""}; ঢাকার সময়ও, সূত্রসহ।`;
  return {
    path: `/ekadashi-2027/${SLUGS[i]}`,
    title: title(n),
    description: {
      bn: [descBn, pk ? `${n.bn} ২০২৭ ${d.bn}। কলকাতায় পারণ ${pk.day.bn} ${pk.when.bn}; তিথি আর ঢাকার সময়ও, সূত্রসহ।` : "", `${n.bn} ২০২৭ ${d.bn}। কলকাতা আর ঢাকার তিথি আর পারণের সময়, সূত্রসহ।`].find((t) => t && t.length <= 170)!,
      en: [descEn, pk ? `${n.en} 2027 is ${d.en}. Kolkata parana ${pk.day.en}, ${pk.when.en}; tithi times and Dhaka too, sourced.` : "", `${n.en} 2027 is ${d.en}. Tithi and parana times for Kolkata and Dhaka, sourced.`].find((t) => t && t.length <= 160)!,
    },
    h1: l(`${n.bn} ২০২৭: কবে, পারণ কখন`, `${n.en} 2027: date and parana time`),
    lead: {
      bn: `${n.bn} ২০২৭-এ ${d.bn}, স্মার্ত মতে, কলকাতা আর ঢাকায়।${vaishnava ? ` বৈষ্ণব (ইসকন) মতে ${dayLabel(vaishnava, "bn", false)}।` : ""}${pk ? ` উপোস ভাঙার (পারণ) সময় কলকাতায় ${pk.day.bn} ${pk.when.bn}।` : ""}`,
      en: `${n.en} falls on ${d.en} 2027 by the Smarta reckoning, in Kolkata and Dhaka.${vaishnava ? ` Vaishnavas (ISKCON) keep it on ${dayLabel(vaishnava, "en", false)}.` : ""}${pk ? ` The fast is broken (parana) in Kolkata on ${pk.day.en}, ${pk.when.en}.` : ""}`,
    },
    timings: {
      h2: l("একাদশী তিথি আর পারণের সময়", "Ekadashi tithi and parana time"),
      lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
      rows: {
        wb: [
          { day: d, what: l("একাদশী তিথি", "Ekadashi tithi"), when: range(ks, ke), source: SMARTA_KOL(2027) },
          ...(pk ? [{ day: pk.day, what: l("পারণ (উপোস ভাঙা)", "Parana (breaking the fast)"), when: pk.when, source: paranaSource(key, "Kolkata") }] : []),
          ...(vaishnava ? [{ day: day(vaishnava), what: l("বৈষ্ণব (ইসকন) একাদশী", "Vaishnava (ISKCON) Ekadashi"), when: l("দিন", "day"), source: ISKCON_KOL(2027) }] : []),
        ],
        bd: [
          { day: d, what: l("একাদশী তিথি", "Ekadashi tithi"), when: range(ds, de), source: SMARTA_DHAKA(2027) },
          ...(pd ? [{ day: pd.day, what: l("পারণ (উপোস ভাঙা)", "Parana (breaking the fast)"), when: pd.when, source: paranaSource(key, "Dhaka") }] : []),
        ],
      },
      note: l(
        "বাড়ির পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত বা গুপ্তপ্রেস) বা গুরুর নির্দেশ মানলে মিলিয়ে নিও; বৈষ্ণব আর স্মার্ত মতে দিন আলাদা হতে পারে।",
        "If you follow a printed panjika (Bishuddha Siddhanta or Gupta Press) or your guru's calendar, check it: Smarta and Vaishnava days can differ.",
      ),
    },
    sections: x
      ? [{ id: "about", h2: l(`${n.bn} কী`, `What is ${n.en}`), paras: [{ text: x.about, source: x.aboutSource }], tips: [l("উপোস করলে জল খেও আর শরীর খারাপ লাগলে উপোস ভেঙো; ওষুধ চললে ডাক্তারকে জিজ্ঞেস করে নিও।", "If you fast, drink water and break the fast if you feel unwell; ask your doctor if you take regular medicine.")] }]
      : [],
    faq: [
      { q: l(`${n.bn} ২০২৭ কবে?`, `When is ${n.en} in 2027?`), a: { bn: `${d.bn} ২০২৭, স্মার্ত মতে (দ্রিক পঞ্চাঙ্গ, কলকাতা আর ঢাকা)।`, en: `${d.en} 2027 by the Smarta reckoning (Drik Panchang, Kolkata and Dhaka).` } },
      { q: l(`${n.bn}র তিথি কখন শুরু আর শেষ?`, `When does the ${n.en} tithi start and end?`), a: { bn: `কলকাতায় ${range(ks, ke).bn}; ঢাকায় ${range(ds, de).bn}।`, en: `Kolkata: ${range(ks, ke).en}. Dhaka: ${range(ds, de).en}.` } },
      pk
        ? { q: l(`${n.bn}র পারণ কখন?`, `What is the ${n.en} 2027 parana time?`), a: { bn: `কলকাতায় ${pk.day.bn} ${pk.when.bn}${pd ? `; ঢাকায় ${pd.when.bn}` : ""}।`, en: `Kolkata: ${pk.day.en}, ${pk.when.en}${pd ? `. Dhaka: ${pd.when.en}` : ""}.` } }
        : { q: l("ইসকনের একাদশী কি একই দিনে?", "Is the ISKCON date the same?"), a: vaishnava ? { bn: `না, বৈষ্ণব মতে ${dayLabel(vaishnava, "bn", false)}।`, en: `No, Vaishnavas keep it on ${dayLabel(vaishnava, "en", false)}.` } : isk === "?" ? l("ইসকনের তালিকা এই একাদশীর জন্য আমরা যাচাই করিনি; ইসকনের পঞ্জিকা দেখো।", "We have not checked ISKCON's list for this one; see ISKCON's calendar.") : l("হ্যাঁ, দ্রিকের ইসকন তালিকায় একই দিন।", "Yes, Drik's ISKCON list gives the same day.") },
    ],
    events: [{ name: { bn: `${n.bn} ২০২৭`, en: `${n.en} 2027` }, start: date, place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
    links: [
      { href: "/ekadashi-2027", label: l("🪔 সব একাদশী ২০২৭", "🪔 All Ekadashis 2027"), primary: true },
      ...(prev ? [{ href: `/ekadashi-2027/${SLUGS[i - 1]}`, label: { bn: `← ${NAMES[prev[0]].bn}`, en: `← ${NAMES[prev[0]].en}` } }] : []),
      ...(next ? [{ href: `/ekadashi-2027/${SLUGS[i + 1]}`, label: { bn: `${NAMES[next[0]].bn} →`, en: `${NAMES[next[0]].en} →` } }] : []),
      { href: "/blog/ekadashi-fasting-rules", label: l("একাদশীর উপোসের নিয়ম", "Ekadashi fasting rules") },
      { href: `/calendar-2027/${MONTHS[Number(date.slice(5, 7)) - 1]}`, label: l("এই মাসের ক্যালেন্ডার", "This month's calendar") },
    ],
    lastChecked: "2026-11-02",
  };
}

export const EKADASHI_PAGES: FestivalPage[] = ROWS.map((_, i) => page(i));
export const EKADASHI_SLUGS = SLUGS;
