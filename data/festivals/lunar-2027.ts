// Ekadashi and Purnima dates, November 2026 to December 2027 (/ekadashi-2027, /purnima-2027). Every date and tithi time is copied from
// Drik Panchang's yearly Ekadashi pages for Kolkata and Dhaka (Smarta) and its ISKCON lists for the same
// cities (Vaishnava), fetched 31 Oct 2026; muhuratam.in's Kolkata 2027 list matches every Smarta date.
// Times are written as "YYYY-MM-DD HH:MM" (24 h, local) and only formatted here, never computed.

import type { L, Lang } from "@/lib/i18n";
import type { FestivalPage, FestivalTable } from "./types";
import type { Upcoming } from "./upcoming";

const l = (bn: string, en: string): L => ({ bn, en });

const drik = (kind: "vrats/ekadashidates" | "iskcon/iskcon-ekadashi-list", geo: string, year: number) =>
  `https://www.drikpanchang.com/${kind}.html?geoname-id=${geo}&year=${year}`;
const SMARTA_KOL = (y: number) => ({ title: `Drik Panchang, ${y} Ekadashi dates for Kolkata`, url: drik("vrats/ekadashidates", "1275004", y) });
const SMARTA_DHAKA = (y: number) => ({ title: `Drik Panchang, ${y} Ekadashi dates for Dhaka`, url: drik("vrats/ekadashidates", "1185241", y) });
const ISKCON_KOL = (y: number) => ({ title: `Drik Panchang, ${y} ISKCON Ekadasi list for Kolkata`, url: drik("iskcon/iskcon-ekadashi-list", "1275004", y) });
const ISKCON_DHAKA = (y: number) => ({ title: `Drik Panchang, ${y} ISKCON Ekadasi list for Dhaka`, url: drik("iskcon/iskcon-ekadashi-list", "1185241", y) });
const MUHURATAM = { title: "muhuratam.in, Ekadashi 2027 Kolkata", url: "https://muhuratam.in/vrat-upvas/ekadashi/kolkata/2027" };

const NAMES: Record<string, L> = {
  rama: l("রমা একাদশী", "Rama Ekadashi"),
  devutthana: l("দেবোত্থান (প্রবোধিনী) একাদশী", "Devutthana (Prabodhini) Ekadashi"),
  utpanna: l("উৎপন্না একাদশী", "Utpanna Ekadashi"),
  mokshada: l("মোক্ষদা একাদশী", "Mokshada Ekadashi"),
  saphala: l("সফলা একাদশী", "Saphala Ekadashi"),
  paushaPutrada: l("পৌষ পুত্রদা একাদশী", "Pausha Putrada Ekadashi"),
  shattila: l("ষটতিলা একাদশী", "Shattila Ekadashi"),
  jaya: l("জয়া একাদশী", "Jaya Ekadashi"),
  vijaya: l("বিজয়া একাদশী", "Vijaya Ekadashi"),
  amalaki: l("আমলকী একাদশী", "Amalaki Ekadashi"),
  papmochani: l("পাপমোচনী একাদশী", "Papmochani Ekadashi"),
  kamada: l("কামদা একাদশী", "Kamada Ekadashi"),
  varuthini: l("বরুথিনী একাদশী", "Varuthini Ekadashi"),
  mohini: l("মোহিনী একাদশী", "Mohini Ekadashi"),
  apara: l("অপরা একাদশী", "Apara Ekadashi"),
  nirjala: l("নির্জলা একাদশী", "Nirjala Ekadashi"),
  yogini: l("যোগিনী একাদশী", "Yogini Ekadashi"),
  devshayani: l("দেবশয়নী (শয়ন) একাদশী", "Devshayani Ekadashi"),
  kamika: l("কামিকা একাদশী", "Kamika Ekadashi"),
  shravanaPutrada: l("শ্রাবণ পুত্রদা একাদশী", "Shravana Putrada Ekadashi"),
  aja: l("অজা একাদশী", "Aja Ekadashi"),
  parsva: l("পার্শ্ব (পরিবর্তিনী) একাদশী", "Parsva (Parivartini) Ekadashi"),
  indira: l("ইন্দিরা একাদশী", "Indira Ekadashi"),
  papankusha: l("পাপাঙ্কুশা একাদশী", "Papankusha Ekadashi"),
};

/**
 * [name, Smarta date (Kolkata and Dhaka agree), Kolkata tithi start, end, Dhaka tithi start, end,
 *  ISKCON date when it differs ("" = same day, "?" = Kolkata/Dhaka ISKCON list not checked)].
 */
type Row = [keyof typeof NAMES, string, string, string, string, string, string];
export const EKADASHI_ROWS: Row[] = [
  ["rama", "2026-11-05", "2026-11-04 11:03", "2026-11-05 10:35", "2026-11-04 11:33", "2026-11-05 11:05", ""],
  ["devutthana", "2026-11-20", "2026-11-20 07:15", "2026-11-21 06:31", "2026-11-20 07:45", "2026-11-21 07:01", "2026-11-21"],
  ["utpanna", "2026-12-04", "2026-12-03 23:03", "2026-12-04 23:44", "2026-12-03 23:33", "2026-12-05 00:14", "?"],
  ["mokshada", "2026-12-20", "2026-12-19 22:09", "2026-12-20 20:14", "2026-12-19 22:39", "2026-12-20 20:44", "?"],
  ["saphala", "2027-01-03", "2027-01-02 14:24", "2027-01-03 16:08", "2027-01-02 14:54", "2027-01-03 16:38", ""],
  ["paushaPutrada", "2027-01-18", "2027-01-18 10:26", "2027-01-19 07:49", "2027-01-18 10:56", "2027-01-19 08:19", "2027-01-19"],
  ["shattila", "2027-02-02", "2027-02-01 08:41", "2027-02-02 11:10", "2027-02-01 09:11", "2027-02-02 11:40", ""],
  ["jaya", "2027-02-17", "2027-02-16 20:19", "2027-02-17 17:31", "2027-02-16 20:49", "2027-02-17 18:01", ""],
  ["vijaya", "2027-03-04", "2027-03-03 04:44", "2027-03-04 07:24", "2027-03-03 05:14", "2027-03-04 07:54", ""],
  ["amalaki", "2027-03-18", "2027-03-18 04:21", "2027-03-19 01:51", "2027-03-18 04:51", "2027-03-19 02:21", "2027-03-19"],
  ["papmochani", "2027-04-02", "2027-04-02 00:45", "2027-04-03 02:51", "2027-04-02 01:15", "2027-04-03 03:21", ""],
  ["kamada", "2027-04-17", "2027-04-16 11:21", "2027-04-17 09:27", "2027-04-16 11:51", "2027-04-17 09:57", ""],
  ["varuthini", "2027-05-02", "2027-05-01 18:53", "2027-05-02 19:51", "2027-05-01 19:23", "2027-05-02 20:21", ""],
  ["mohini", "2027-05-16", "2027-05-15 18:17", "2027-05-16 17:13", "2027-05-15 18:47", "2027-05-16 17:43", ""],
  ["apara", "2027-06-01", "2027-05-31 10:02", "2027-06-01 09:39", "2027-05-31 10:32", "2027-06-01 10:09", ""],
  ["nirjala", "2027-06-14", "2027-06-14 02:11", "2027-06-15 02:07", "2027-06-14 02:41", "2027-06-15 02:37", "2027-06-15"],
  ["yogini", "2027-06-30", "2027-06-29 22:03", "2027-06-30 20:30", "2027-06-29 22:33", "2027-06-30 21:00", ""],
  ["devshayani", "2027-07-14", "2027-07-13 12:08", "2027-07-14 13:10", "2027-07-13 12:38", "2027-07-14 13:40", ""],
  ["kamika", "2027-07-29", "2027-07-29 07:33", "2027-07-30 05:12", "2027-07-29 08:03", "2027-07-30 05:42", "2027-07-30"],
  ["shravanaPutrada", "2027-08-12", "2027-08-12 00:58", "2027-08-13 02:59", "2027-08-12 01:28", "2027-08-13 03:29", "2027-08-13"],
  ["aja", "2027-08-28", "2027-08-27 15:25", "2027-08-28 12:42", "2027-08-27 15:55", "2027-08-28 13:12", ""],
  ["parsva", "2027-09-11", "2027-09-10 17:00", "2027-09-11 19:35", "2027-09-10 17:30", "2027-09-11 20:05", "2027-09-12"],
  ["indira", "2027-09-26", "2027-09-25 22:30", "2027-09-26 19:49", "2027-09-25 23:00", "2027-09-26 20:19", ""],
  ["papankusha", "2027-10-11", "2027-10-10 11:40", "2027-10-11 14:08", "2027-10-10 12:10", "2027-10-11 14:38", ""],
  ["rama", "2027-10-25", "2027-10-25 05:40", "2027-10-26 03:22", "2027-10-25 06:10", "2027-10-26 03:52", "2027-10-26"],
  ["devutthana", "2027-11-10", "2027-11-09 07:34", "2027-11-10 09:11", "2027-11-09 08:04", "2027-11-10 09:41", ""],
  ["utpanna", "2027-11-24", "2027-11-23 13:44", "2027-11-24 12:11", "2027-11-23 14:14", "2027-11-24 12:41", ""],
  ["mokshada", "2027-12-09", "2027-12-09 02:58", "2027-12-10 03:19", "2027-12-09 03:28", "2027-12-10 03:49", ""],
  ["saphala", "2027-12-23", "2027-12-22 23:40", "2027-12-23 23:11", "2027-12-23 00:10", "2027-12-23 23:41", ""],
];

const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};
const DAYS: Record<Lang, string[]> = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], bn: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"] };
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const bnNum = (s: string) => s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

/** "2027-01-03" → "Sun 3 Jan 2027" / "রবি ৩ জানুয়ারি ২০২৭" (weekday from the calendar date itself). */
export function dayLabel(iso: string, lang: Lang, withYear = true): string {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  const s = `${DAYS[lang][wd]} ${d} ${MONTHS[lang][m - 1]}${withYear ? ` ${y}` : ""}`;
  return lang === "bn" ? bnNum(s) : s;
}

/** Bangla time-of-day word for a 24 h hour, the way clock times are said ("ভোর ৫:৫৩", "রাত ১১:২৩"). */
function bnPeriod(h: number): string {
  if (h < 4) return "রাত";
  if (h < 6) return "ভোর";
  if (h < 12) return "সকাল";
  if (h < 15) return "দুপুর";
  if (h < 17) return "বিকেল";
  if (h < 19) return h < 18 ? "বিকেল" : "সন্ধে";
  return "রাত";
}

/** "2027-01-02 14:24" → "2 Jan 2:24 pm" / "২ জানুয়ারি দুপুর ২:২৪". */
export function timeLabel(stamp: string, lang: Lang): string {
  const [date, time] = stamp.split(" ");
  const [, m, d] = date.split("-").map(Number);
  const [h, min] = time.split(":").map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const clock = `${h12}:${String(min).padStart(2, "0")}`;
  if (lang === "bn") return bnNum(`${d} ${MONTHS.bn[m - 1]} ${bnPeriod(h)} ${clock}`);
  return `${d} ${MONTHS.en[m - 1]} ${clock} ${h < 12 ? "am" : "pm"}`;
}

const range = (a: string, b: string): L => ({ bn: `${timeLabel(a, "bn")} – ${timeLabel(b, "bn")}`, en: `${timeLabel(a, "en")} – ${timeLabel(b, "en")}` });
const day = (iso: string): L => ({ bn: dayLabel(iso, "bn", false), en: dayLabel(iso, "en", false) });

const iskconCell = (v: string): L =>
  v === "" ? l("একই দিন", "Same day") : v === "?" ? l("যাচাই হয়নি", "Not checked") : { bn: dayLabel(v, "bn", false), en: dayLabel(v, "en", false) };

const table = (year: number, id: string, h2: L): FestivalTable => ({
  id,
  h2,
  caption: l(`একাদশী ${bnNum(String(year))}: কলকাতা (IST) আর ঢাকা (BST)`, `Ekadashi ${year}: Kolkata (IST) and Dhaka (BST)`),
  columns: [l("একাদশী", "Ekadashi"), l("তারিখ", "Date"), l("তিথি, কলকাতা", "Tithi, Kolkata"), l("তিথি, ঢাকা", "Tithi, Dhaka"), l("বৈষ্ণব (ইসকন)", "Vaishnava (ISKCON)")],
  rows: EKADASHI_ROWS.filter((r) => r[1].startsWith(String(year))).map(([name, date, ks, ke, ds, de, isk]) => ({
    cells: [NAMES[name], day(date), range(ks, ke), range(ds, de), iskconCell(isk)],
    source: SMARTA_KOL(year),
  })),
});

export const EKADASHI_2027: FestivalPage = {
  path: "/ekadashi-2027",
  title: l("একাদশী ২০২৭: সব তারিখ ও তিথির সময়, কলকাতা ও ঢাকা", "Ekadashi 2027 Dates: Full List for Kolkata & Dhaka"),
  description: l(
    "২০২৭-এর সব একাদশী (আর নভেম্বর-ডিসেম্বর ২০২৬-এর): তারিখ, বার, কলকাতা আর ঢাকার তিথি শুরু-শেষ, যেদিন বৈষ্ণব (ইসকন) মতে দিন আলাদা সেটাও। দ্রিক পঞ্চাঙ্গ থেকে, সূত্রসহ।",
    "Every Ekadashi of 2027 (and Nov–Dec 2026): date, weekday and tithi times for Kolkata and Dhaka, plus Vaishnava (ISKCON) dates where they differ. Sourced.",
  ),
  h1: l("একাদশী ২০২৭: সব তারিখ, কলকাতা আর ঢাকা", "Ekadashi 2027: every date for Kolkata and Dhaka"),
  lead: l(
    "মাসে দুটো একাদশী, বছরে চব্বিশ-পঁচিশটা। নিচে নভেম্বর ২০২৬ থেকে ডিসেম্বর ২০২৭ পর্যন্ত প্রতিটা: স্মার্ত মতে তারিখ (কলকাতা আর ঢাকায় একই), দুই শহরের তিথির সময়, আর বৈষ্ণব মতে যেদিন আলাদা।",
    "Two Ekadashis a month, twenty-four or twenty-five a year. Below is every one from November 2026 to December 2027: the Smarta date (the same in Kolkata and Dhaka), the tithi times in both cities, and the Vaishnava date where it differs.",
  ),
  timings: {
    h2: l("নভেম্বর ২০২৬-এর একাদশী", "Ekadashi in November 2026"),
    lead: l("নভেম্বর ২০২৬-এর দুটো একাদশী। বৈষ্ণব (ইসকন) মতে দেবোত্থান একাদশী এক দিন পরে, ২১ নভেম্বর।", "The two Ekadashis of November 2026. By the Vaishnava (ISKCON) reckoning, Devutthana Ekadashi falls a day later, on 21 November."),
    rows: {
      wb: [
        { day: l("বৃহস্পতি ৫ নভেম্বর", "Thu 5 Nov"), what: NAMES.rama, when: range("2026-11-04 11:03", "2026-11-05 10:35"), source: SMARTA_KOL(2026) },
        { day: l("শুক্র ২০ নভেম্বর", "Fri 20 Nov"), what: NAMES.devutthana, when: range("2026-11-20 07:15", "2026-11-21 06:31"), source: SMARTA_KOL(2026) },
      ],
      bd: [
        { day: l("বৃহস্পতি ৫ নভেম্বর", "Thu 5 Nov"), what: NAMES.rama, when: range("2026-11-04 11:33", "2026-11-05 11:05"), source: SMARTA_DHAKA(2026) },
        { day: l("শুক্র ২০ নভেম্বর", "Fri 20 Nov"), what: NAMES.devutthana, when: range("2026-11-20 07:45", "2026-11-21 07:01"), source: SMARTA_DHAKA(2026) },
      ],
    },
  },
  tables: [
    { ...table(2027, "list-2027", l("একাদশী ২০২৭: পুরো তালিকা", "Ekadashi 2027: the full list")), note: l("ঢাকার তিথি দ্রিক পঞ্চাঙ্গের ঢাকা পাতা থেকে। ‘বৈষ্ণব (ইসকন)’ কলামে দ্রিকের কলকাতা-ঢাকার ইসকন তালিকা; দুই শহরে তারিখ একই।", "Dhaka tithi times are from Drik Panchang's Dhaka page. The 'Vaishnava (ISKCON)' column is from Drik's ISKCON lists for Kolkata and Dhaka; the dates match in both cities.") },
    table(2026, "list-2026", l("নভেম্বর-ডিসেম্বর ২০২৬", "November–December 2026")),
  ],
  sections: [
    {
      id: "smarta-vaishnava",
      h2: l("স্মার্ত আর বৈষ্ণব একাদশী আলাদা কেন", "Why Smarta and Vaishnava dates differ"),
      paras: [
        {
          text: l(
            "একই একাদশী দুই মতে কখনো কখনো এক দিন আগে-পরে পড়ে: সূর্যোদয়ের সময় কোন তিথি চলছে, সেটা দুই মত আলাদা নিয়মে দেখে। ২০২৭-এ এমন সাতটা দিন (পৌষ পুত্রদা, আমলকী, নির্জলা, কামিকা, শ্রাবণ পুত্রদা, পার্শ্ব, রমা), আর ২০২৬-এর দেবোত্থান। ইসকন বা গৌড়ীয় মঠ মানলে ‘বৈষ্ণব’ কলাম দেখো।",
            "The same Ekadashi sometimes falls a day apart between the two traditions, because they apply different rules about which tithi prevails at sunrise. In 2027 that happens seven times (Pausha Putrada, Amalaki, Nirjala, Kamika, Shravana Putrada, Parsva, Rama), plus Devutthana in 2026. If you follow ISKCON or a Gaudiya math, use the 'Vaishnava' column.",
          ),
          source: ISKCON_KOL(2027),
        },
        {
          text: l(
            "বাড়ির পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত বা গুপ্তপ্রেস) মানলে মিলিয়ে নিও; কোনো কোনো একাদশীতে পঞ্জিকা আলাদা দিন দিতে পারে।",
            "If you go by a printed panjika (Bishuddha Siddhanta or Gupta Press), check it: for some Ekadashis a panjika may give a different day.",
          ),
        },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, স্মার্ত, ঢাকা।", "2027, Smarta, Dhaka."), source: SMARTA_DHAKA(2027) },
        { text: l("২০২৬, স্মার্ত, কলকাতা।", "2026, Smarta, Kolkata."), source: SMARTA_KOL(2026) },
        { text: l("২০২৭, বৈষ্ণব (ইসকন), ঢাকা।", "2027, Vaishnava (ISKCON), Dhaka."), source: ISKCON_DHAKA(2027) },
        { text: l("২০২৬, বৈষ্ণব (ইসকন), কলকাতা।", "2026, Vaishnava (ISKCON), Kolkata."), source: ISKCON_KOL(2026) },
        { text: l("আলাদা সূত্রে মিলিয়ে দেখা: ২০২৭-এর প্রতিটা স্মার্ত তারিখ এখানেও এক।", "Cross-check: every 2027 Smarta date matches here too."), source: MUHURATAM },
      ],
    },
  ],
  faq: [
    {
      q: l("নভেম্বর ২০২৬-এ একাদশী কবে?", "When is Ekadashi in November 2026?"),
      a: l(
        "রমা একাদশী বৃহস্পতিবার ৫ নভেম্বর ২০২৬; তারপর দেবোত্থান একাদশী শুক্রবার ২০ নভেম্বর (বৈষ্ণব মতে শনিবার ২১ নভেম্বর)।",
        "Rama Ekadashi on Thursday 5 November 2026; then Devutthana Ekadashi on Friday 20 November (Saturday 21 November by the Vaishnava reckoning).",
      ),
    },
    {
      q: l("২০২৭-এ নির্জলা একাদশী কবে?", "When is Nirjala Ekadashi in 2027?"),
      a: l("স্মার্ত মতে সোমবার ১৪ জুন; বৈষ্ণব (ইসকন) মতে মঙ্গলবার ১৫ জুন। কলকাতা আর ঢাকায় একই।", "Monday 14 June by the Smarta reckoning; Tuesday 15 June by the Vaishnava (ISKCON) one. The same in Kolkata and Dhaka."),
    },
    {
      q: l("২০২৭-এ কটা একাদশী?", "How many Ekadashis are there in 2027?"),
      a: l("পঁচিশটা: সফলা দিয়ে শুরু (৩ জানুয়ারি), সফলা দিয়েই শেষ (২৩ ডিসেম্বর)।", "Twenty-five: it starts with Saphala (3 January) and ends with Saphala again (23 December)."),
    },
    {
      q: l("ঢাকায় একাদশীর তারিখ কি কলকাতার মতোই?", "Are Ekadashi dates in Dhaka the same as in Kolkata?"),
      a: l("২০২৬-২৭-এ প্রতিটা একাদশীর তারিখ দুই শহরে একই; তিথির সময় ঢাকায় আধ ঘণ্টা পরে।", "In 2026–27 every Ekadashi falls on the same date in both cities; Dhaka's tithi times run about half an hour later."),
    },
  ],
  events: [],
  links: [
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027"), primary: true },
    { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") },
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027") },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/jagaddhatri-puja-2026", label: l("জগদ্ধাত্রী পুজো ২০২৬", "Jagaddhatri Puja 2026") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};

// ---- Purnima (/purnima-2027) ----
// Drik Panchang's yearly Purnima pages for Kolkata and Dhaka (fetched 31 Oct 2026) print two headings a
// month, "<Month> Purnima Vrat" and "<Month> Purnima"; they share one tithi window and usually one date.
// Where the vrat (fasting) day is a day earlier, both are shown.

const PURNIMA_KOL = (y: number) => ({ title: `Drik Panchang, ${y} Purnima dates for Kolkata`, url: `https://www.drikpanchang.com/vrats/purnimasidates.html?year=${y}&geoname-id=1275004` });
const PURNIMA_DHAKA = (y: number) => ({ title: `Drik Panchang, ${y} Purnima dates for Dhaka`, url: `https://www.drikpanchang.com/vrats/purnimasidates.html?year=${y}&geoname-id=1185241` });
const BENGALI_2027 = { title: "Drik Panchang, Bengali calendar 2027 (Kolkata)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1275004&year=2027" };

const PURNIMA_NAMES: Record<string, L> = {
  kartika: l("কার্তিক পূর্ণিমা", "Kartika Purnima"),
  margashirsha: l("অগ্রহায়ণ (মার্গশীর্ষ) পূর্ণিমা", "Margashirsha Purnima"),
  pausha: l("পৌষ পূর্ণিমা", "Pausha Purnima"),
  magha: l("মাঘী পূর্ণিমা", "Magha Purnima"),
  phalguna: l("ফাল্গুনী পূর্ণিমা", "Phalguna Purnima"),
  chaitra: l("চৈত্র পূর্ণিমা", "Chaitra Purnima"),
  vaishakha: l("বৈশাখী পূর্ণিমা", "Vaishakha Purnima"),
  jyeshtha: l("জ্যৈষ্ঠ পূর্ণিমা", "Jyeshtha Purnima"),
  ashadha: l("আষাঢ় পূর্ণিমা", "Ashadha Purnima"),
  shravana: l("শ্রাবণ পূর্ণিমা", "Shravana Purnima"),
  bhadrapada: l("ভাদ্র পূর্ণিমা", "Bhadrapada Purnima"),
  ashwina: l("আশ্বিন পূর্ণিমা", "Ashwina Purnima"),
};

/** Festivals that fall on a Purnima, from Drik's Bengali calendar 2027 (Kolkata), with our page when there is one. */
const PURNIMA_FESTIVAL: Record<string, { text: L; href?: string }> = {
  "2026-11-24": { text: l("রাস পূর্ণিমা", "Rash Purnima"), href: "/rash-purnima-2026" },
  "2027-03-22": { text: l("দোলপূর্ণিমা", "Dol Purnima"), href: "/dol-purnima-2027" },
  "2027-08-17": { text: l("রাখিবন্ধন (১৭ আগস্ট)", "Raksha Bandhan (17 Aug)") },
  "2027-10-15": { text: l("কোজাগরী লক্ষ্মীপুজো বৃহস্পতি ১৪ অক্টোবর", "Kojagori Lakshmi Puja on Thu 14 Oct") },
};

/** [name, main date, vrat date ("" = same day), Kolkata start, end, Dhaka start, end]. */
type PurnimaRow = [keyof typeof PURNIMA_NAMES, string, string, string, string, string, string];
export const PURNIMA_ROWS: PurnimaRow[] = [
  ["kartika", "2026-11-24", "", "2026-11-23 23:42", "2026-11-24 20:23", "2026-11-24 00:12", "2026-11-24 20:53"],
  ["margashirsha", "2026-12-24", "2026-12-23", "2026-12-23 10:47", "2026-12-24 06:57", "2026-12-23 11:17", "2026-12-24 07:27"],
  ["pausha", "2027-01-22", "", "2027-01-21 21:29", "2027-01-22 17:46", "2027-01-21 21:59", "2027-01-22 18:16"],
  ["magha", "2027-02-20", "", "2027-02-20 07:59", "2027-02-21 04:52", "2027-02-20 08:29", "2027-02-21 05:22"],
  ["phalguna", "2027-03-22", "", "2027-03-21 18:21", "2027-03-22 16:13", "2027-03-21 18:51", "2027-03-22 16:43"],
  ["chaitra", "2027-04-20", "", "2027-04-20 04:51", "2027-04-21 03:56", "2027-04-20 05:21", "2027-04-21 04:26"],
  ["vaishakha", "2027-05-20", "", "2027-05-19 16:02", "2027-05-20 16:28", "2027-05-19 16:32", "2027-05-20 16:58"],
  ["jyeshtha", "2027-06-18", "", "2027-06-18 04:34", "2027-06-19 06:13", "2027-06-18 05:04", "2027-06-19 06:43"],
  ["ashadha", "2027-07-18", "", "2027-07-17 18:48", "2027-07-18 21:14", "2027-07-17 19:18", "2027-07-18 21:44"],
  ["shravana", "2027-08-17", "2027-08-16", "2027-08-16 10:28", "2027-08-17 12:58", "2027-08-16 10:58", "2027-08-17 13:28"],
  ["bhadrapada", "2027-09-15", "", "2027-09-15 02:48", "2027-09-16 04:32", "2027-09-15 03:18", "2027-09-16 05:02"],
  ["ashwina", "2027-10-15", "", "2027-10-14 18:49", "2027-10-15 19:16", "2027-10-14 19:19", "2027-10-15 19:46"],
  ["kartika", "2027-11-14", "2027-11-13", "2027-11-13 09:55", "2027-11-14 08:55", "2027-11-13 10:25", "2027-11-14 09:25"],
  ["margashirsha", "2027-12-13", "", "2027-12-12 23:54", "2027-12-13 21:38", "2027-12-13 00:24", "2027-12-13 22:08"],
];

const purnimaTable = (from: string, to: string, id: string, h2: L, year: number): FestivalTable => ({
  id,
  h2,
  caption: l(`পূর্ণিমা ${bnNum(String(year))}: কলকাতা (IST) আর ঢাকা (BST)`, `Purnima ${year}: Kolkata (IST) and Dhaka (BST)`),
  columns: [l("পূর্ণিমা", "Purnima"), l("তারিখ", "Date"), l("তিথি, কলকাতা", "Tithi, Kolkata"), l("তিথি, ঢাকা", "Tithi, Dhaka"), l("ব্রত / উৎসব", "Vrat / festival")],
  rows: PURNIMA_ROWS.filter((r) => r[1] >= from && r[1] <= to).map(([name, date, vrat, ks, ke, ds, de]) => {
    const fest = PURNIMA_FESTIVAL[date];
    const notes: L[] = [];
    if (vrat) notes.push({ bn: `ব্রত ${dayLabel(vrat, "bn", false)}`, en: `Vrat ${dayLabel(vrat, "en", false)}` });
    if (fest) notes.push(fest.text);
    return {
      cells: [PURNIMA_NAMES[name], day(date), range(ks, ke), range(ds, de), notes.length ? { bn: notes.map((n) => n.bn).join(" · "), en: notes.map((n) => n.en).join(" · ") } : l("—", "—")],
      source: PURNIMA_KOL(year),
      ...(fest?.href ? { href: fest.href } : {}),
    };
  }),
});

export const PURNIMA_2027: FestivalPage = {
  path: "/purnima-2027",
  title: l("পূর্ণিমা ২০২৭: সব তারিখ ও তিথির সময়, কলকাতা ও ঢাকা", "Purnima 2027 Dates: Full Moon List for Kolkata & Dhaka"),
  description: l(
    "২০২৭-এর প্রতিটা পূর্ণিমা (আর নভেম্বর-ডিসেম্বর ২০২৬-এর): তারিখ, বার, কলকাতা আর ঢাকার তিথি শুরু-শেষ, ব্রতের দিন আর দোল, কোজাগরী। সূত্রসহ।",
    "Every Purnima of 2027 (and Nov–Dec 2026): date, weekday, tithi times for Kolkata and Dhaka, vrat days, plus Dol and Kojagori Lakshmi Puja. Sourced.",
  ),
  h1: l("পূর্ণিমা ২০২৭: সব তারিখ, কলকাতা আর ঢাকা", "Purnima 2027: every full moon for Kolkata and Dhaka"),
  lead: l(
    "মাসে একটা পূর্ণিমা: সত্যনারায়ণ পুজো, ব্রত আর দোল-কোজাগরীর মতো বড় উৎসব। নভেম্বর ২০২৬ থেকে ডিসেম্বর ২০২৭ পর্যন্ত প্রতিটা, দুই শহরের তিথির সময়সহ।",
    "One full moon a month: for Satyanarayan puja, vrats and big festivals like Dol and Kojagori. Every one from November 2026 to December 2027, with tithi times for both cities.",
  ),
  tables: [
    { ...purnimaTable("2027-01-01", "2027-12-31", "purnima-2027", l("পূর্ণিমা ২০২৭: পুরো তালিকা", "Purnima 2027: the full list"), 2027), note: l("‘ব্রত’: দ্রিক পঞ্চাঙ্গ যেদিন পূর্ণিমার ব্রত (উপবাস) দেখায়, সেটা মূল দিনের আগে হলে আলাদা লেখা। ঢাকার তিথি দ্রিকের ঢাকা পাতা থেকে; দুই শহরে তারিখ একই।", "'Vrat': when Drik Panchang puts the Purnima vrat (fast) a day before the main day, it is shown separately. Dhaka times are from Drik's Dhaka page; the dates match in both cities.") },
    purnimaTable("2026-11-01", "2026-12-31", "purnima-2026", l("নভেম্বর-ডিসেম্বর ২০২৬", "November–December 2026"), 2026),
  ],
  sections: [
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: PURNIMA_DHAKA(2027) },
        { text: l("২০২৬, ঢাকা।", "2026, Dhaka."), source: PURNIMA_DHAKA(2026) },
        { text: l("দোল, রাখি আর কোজাগরী লক্ষ্মীপুজোর দিন।", "The days of Dol, Raksha Bandhan and Kojagori Lakshmi Puja."), source: BENGALI_2027 },
        {
          text: l(
            "বাড়ির পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত বা গুপ্তপ্রেস) মানলে মিলিয়ে নিও; কোনো কোনো পূর্ণিমায় দিন আলাদা হতে পারে।",
            "If you go by a printed panjika (Bishuddha Siddhanta or Gupta Press), check it: some Purnimas may fall on a different day.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ কোজাগরী লক্ষ্মীপুজো কবে?", "When is Kojagori Lakshmi Puja in 2027?"),
      a: l(
        "বৃহস্পতিবার ১৪ অক্টোবর ২০২৭ (দ্রিকের বাংলা ক্যালেন্ডার)। আশ্বিন পূর্ণিমা তিথি কলকাতায় ১৪ অক্টোবর সন্ধে ৬:৪৯ থেকে ১৫ অক্টোবর সন্ধে ৭:১৬।",
        "Thursday 14 October 2027 (Drik's Bengali calendar). The Ashwina Purnima tithi in Kolkata runs from 14 Oct 6:49 pm to 15 Oct 7:16 pm.",
      ),
    },
    {
      q: l("২০২৭-এ কটা পূর্ণিমা?", "How many full moons are there in 2027?"),
      a: l("বারোটা: পৌষ পূর্ণিমা (২২ জানুয়ারি) থেকে অগ্রহায়ণ পূর্ণিমা (১৩ ডিসেম্বর)।", "Twelve: from Pausha Purnima (22 January) to Margashirsha Purnima (13 December)."),
    },
    {
      q: l("ঢাকায় পূর্ণিমার তারিখ কি কলকাতার মতোই?", "Are Purnima dates in Dhaka the same as in Kolkata?"),
      a: l("২০২৬-২৭-এ প্রতিটা পূর্ণিমার তারিখ দুই শহরে একই; তিথির সময় ঢাকায় আধ ঘণ্টা পরে।", "In 2026–27 every Purnima falls on the same date in both cities; Dhaka's tithi times run half an hour later."),
    },
    {
      q: l("পূর্ণিমার ব্রত কি পূর্ণিমার দিনেই?", "Is the Purnima vrat on the Purnima day itself?"),
      a: l(
        "বেশির ভাগ মাসে হ্যাঁ। দ্রিক পঞ্চাঙ্গে ব্রত এক দিন আগে পড়ছে অগ্রহায়ণ ২০২৬ (২৩ ডিসেম্বর), শ্রাবণ (১৬ আগস্ট) আর কার্তিক ২০২৭-এ (১৩ নভেম্বর)।",
        "In most months, yes. On Drik Panchang the vrat comes a day earlier for Margashirsha 2026 (23 December), Shravana (16 August) and Kartika 2027 (13 November).",
      ),
    },
  ],
  events: [],
  links: [
    { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027"), primary: true },
    { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") },
    { href: "/dol-purnima-2027", label: l("দোলযাত্রা ২০২৭", "Dol Purnima 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};

// ---- Amavasya (/amavasya-2027) ----
// Drik Panchang's yearly Amavasya pages for Kolkata and Dhaka (fetched 31 Oct 2026, re-checked twice). Where
// Drik prints a "Darsha Amavasya" a day before the named-month Amavasya, both days are shown.

const AMAVASYA_KOL = (y: number) => ({ title: `Drik Panchang, ${y} Amavasya dates for Kolkata`, url: `https://www.drikpanchang.com/vrats/amavasyadates.html?year=${y}&geoname-id=1275004` });
const AMAVASYA_DHAKA = (y: number) => ({ title: `Drik Panchang, ${y} Amavasya dates for Dhaka`, url: `https://www.drikpanchang.com/vrats/amavasyadates.html?year=${y}&geoname-id=1185241` });

const AMAVASYA_NAMES: Record<string, L> = {
  kartika: l("কার্তিক অমাবস্যা", "Kartika Amavasya"),
  margashirsha: l("অগ্রহায়ণ (মার্গশীর্ষ) অমাবস্যা", "Margashirsha Amavasya"),
  pausha: l("পৌষ অমাবস্যা", "Pausha Amavasya"),
  magha: l("মাঘ অমাবস্যা", "Magha Amavasya"),
  phalguna: l("ফাল্গুন অমাবস্যা", "Phalguna Amavasya"),
  chaitra: l("চৈত্র অমাবস্যা", "Chaitra Amavasya"),
  vaishakha: l("বৈশাখ অমাবস্যা", "Vaishakha Amavasya"),
  jyeshtha: l("জ্যৈষ্ঠ অমাবস্যা", "Jyeshtha Amavasya"),
  ashadha: l("আষাঢ় অমাবস্যা", "Ashadha Amavasya"),
  shravana: l("শ্রাবণ অমাবস্যা", "Shravana Amavasya"),
  bhadrapada: l("ভাদ্র অমাবস্যা", "Bhadrapada Amavasya"),
  ashwina: l("আশ্বিন অমাবস্যা", "Ashwina Amavasya"),
};

/** Festivals on or around an Amavasya (from our sourced festival pages and the 2027 Bengali calendar). */
const AMAVASYA_NOTE: Record<string, { text: L; href?: string }> = {
  "2026-11-09": { text: l("কালীপুজো রবি ৮ নভেম্বর", "Kali Puja Sun 8 Nov"), href: "/kali-puja-2026" },
  "2027-04-06": { text: l("ঢাকার পাতায় চৈত্র অমাবস্যা বুধ ৭ এপ্রিল", "Dhaka's page lists Chaitra Amavasya on Wed 7 Apr") },
  "2027-09-30": { text: l("মহালয়া বুধ ২৯ সেপ্টেম্বর", "Mahalaya Wed 29 Sep"), href: "/durga-puja-2027" },
  "2027-10-29": { text: l("কালীপুজো বৃহস্পতি ২৮ অক্টোবর", "Kali Puja Thu 28 Oct"), href: "/calendar-2027" },
};

/** [name, main date, Darsha date ("" = none printed), Kolkata start, end, Dhaka start, end]. */
type AmavasyaRow = [keyof typeof AMAVASYA_NAMES, string, string, string, string, string, string];
export const AMAVASYA_ROWS: AmavasyaRow[] = [
  ["kartika", "2026-11-09", "2026-11-08", "2026-11-08 11:27", "2026-11-09 12:31", "2026-11-08 11:57", "2026-11-09 13:01"],
  ["margashirsha", "2026-12-08", "", "2026-12-08 04:12", "2026-12-09 06:21", "2026-12-08 04:42", "2026-12-09 06:51"],
  ["pausha", "2027-01-07", "", "2027-01-06 23:13", "2027-01-08 01:53", "2027-01-06 23:43", "2027-01-08 02:23"],
  ["magha", "2027-02-06", "", "2027-02-05 19:05", "2027-02-06 21:25", "2027-02-05 19:35", "2027-02-06 21:55"],
  ["phalguna", "2027-03-08", "", "2027-03-07 13:46", "2027-03-08 14:58", "2027-03-07 14:16", "2027-03-08 15:28"],
  ["chaitra", "2027-04-06", "", "2027-04-06 05:40", "2027-04-07 05:20", "2027-04-06 06:10", "2027-04-07 05:50"],
  ["vaishakha", "2027-05-06", "", "2027-05-05 18:16", "2027-05-06 16:27", "2027-05-05 18:46", "2027-05-06 16:57"],
  ["jyeshtha", "2027-06-04", "", "2027-06-04 04:05", "2027-06-05 01:09", "2027-06-04 04:35", "2027-06-05 01:39"],
  ["ashadha", "2027-07-04", "2027-07-03", "2027-07-03 12:05", "2027-07-04 08:31", "2027-07-03 12:35", "2027-07-04 09:01"],
  ["shravana", "2027-08-02", "", "2027-08-01 19:19", "2027-08-02 15:34", "2027-08-01 19:49", "2027-08-02 16:04"],
  ["bhadrapada", "2027-08-31", "", "2027-08-31 02:40", "2027-08-31 23:10", "2027-08-31 03:10", "2027-08-31 23:40"],
  ["ashwina", "2027-09-30", "2027-09-29", "2027-09-29 10:54", "2027-09-30 08:05", "2027-09-29 11:24", "2027-09-30 08:35"],
  ["kartika", "2027-10-29", "", "2027-10-28 20:47", "2027-10-29 19:05", "2027-10-28 21:17", "2027-10-29 19:35"],
  ["margashirsha", "2027-11-28", "2027-11-27", "2027-11-27 09:07", "2027-11-28 08:53", "2027-11-27 09:37", "2027-11-28 09:23"],
  ["pausha", "2027-12-27", "", "2027-12-27 00:22", "2027-12-28 01:41", "2027-12-27 00:52", "2027-12-28 02:11"],
];

const amavasyaTable = (from: string, to: string, id: string, h2: L, year: number): FestivalTable => ({
  id,
  h2,
  caption: l(`অমাবস্যা ${bnNum(String(year))}: কলকাতা (IST) আর ঢাকা (BST)`, `Amavasya ${year}: Kolkata (IST) and Dhaka (BST)`),
  columns: [l("অমাবস্যা", "Amavasya"), l("তারিখ", "Date"), l("তিথি, কলকাতা", "Tithi, Kolkata"), l("তিথি, ঢাকা", "Tithi, Dhaka"), l("দর্শ / উৎসব", "Darsha / festival")],
  rows: AMAVASYA_ROWS.filter((r) => r[1] >= from && r[1] <= to).map(([name, date, darsha, ks, ke, ds, de]) => {
    const note = AMAVASYA_NOTE[date];
    const notes: L[] = [];
    if (darsha) notes.push({ bn: `দর্শ অমাবস্যা ${dayLabel(darsha, "bn", false)}`, en: `Darsha Amavasya ${dayLabel(darsha, "en", false)}` });
    if (note) notes.push(note.text);
    return {
      cells: [AMAVASYA_NAMES[name], day(date), range(ks, ke), range(ds, de), notes.length ? { bn: notes.map((n) => n.bn).join(" · "), en: notes.map((n) => n.en).join(" · ") } : l("—", "—")],
      source: AMAVASYA_KOL(year),
      ...(note?.href ? { href: note.href } : {}),
    };
  }),
});

export const AMAVASYA_2027: FestivalPage = {
  path: "/amavasya-2027",
  title: l("অমাবস্যা ২০২৭: সব তারিখ ও তিথির সময়, কলকাতা ও ঢাকা", "Amavasya 2027 Dates: New Moon List for Kolkata & Dhaka"),
  description: l(
    "২০২৭-এর প্রতিটা অমাবস্যা (আর নভেম্বর-ডিসেম্বর ২০২৬-এর): তারিখ, বার, কলকাতা আর ঢাকার তিথি শুরু-শেষ, দর্শ অমাবস্যা, মহালয়া আর কালীপুজো। সূত্রসহ।",
    "Every Amavasya of 2027 (and Nov–Dec 2026): date, weekday, tithi times for Kolkata and Dhaka, Darsha days, Mahalaya and Kali Puja. Sourced.",
  ),
  h1: l("অমাবস্যা ২০২৭: সব তারিখ, কলকাতা আর ঢাকা", "Amavasya 2027: every new moon for Kolkata and Dhaka"),
  lead: l(
    "মাসে একটা অমাবস্যা: পিতৃতর্পণ, ব্রত আর মহালয়া, কালীপুজোর মতো বড় দিন। নভেম্বর ২০২৬ থেকে ডিসেম্বর ২০২৭ পর্যন্ত প্রতিটা, দুই শহরের তিথির সময়সহ।",
    "One new moon a month: for tarpan, vrats and big days like Mahalaya and Kali Puja. Every one from November 2026 to December 2027, with tithi times for both cities.",
  ),
  tables: [
    { ...amavasyaTable("2027-01-01", "2027-12-31", "amavasya-2027", l("অমাবস্যা ২০২৭: পুরো তালিকা", "Amavasya 2027: the full list"), 2027), note: l("‘দর্শ অমাবস্যা’: দ্রিক পঞ্চাঙ্গ যেখানে মূল দিনের আগের দিনটাকে দর্শ অমাবস্যা লেখে, সেটা আলাদা দেখানো হয়েছে। ঢাকার তিথি দ্রিকের ঢাকা পাতা থেকে।", "'Darsha Amavasya': where Drik Panchang marks the day before the main day as Darsha Amavasya, it is shown separately. Dhaka times are from Drik's Dhaka page.") },
    amavasyaTable("2026-11-01", "2026-12-31", "amavasya-2026", l("নভেম্বর-ডিসেম্বর ২০২৬", "November–December 2026"), 2026),
  ],
  sections: [
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: AMAVASYA_DHAKA(2027) },
        { text: l("২০২৬, ঢাকা।", "2026, Dhaka."), source: AMAVASYA_DHAKA(2026) },
        { text: l("মহালয়া আর কালীপুজোর দিন।", "The days of Mahalaya and Kali Puja."), source: BENGALI_2027 },
        { text: l("বাড়ির পঞ্জিকা মানলে মিলিয়ে নিও; কোনো কোনো অমাবস্যায় দিন আলাদা হতে পারে।", "If you go by a printed panjika, check it: some Amavasyas may fall on a different day.") },
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ মহালয়া অমাবস্যা কবে?", "When is Mahalaya Amavasya in 2027?"),
      a: l("মহালয়া বুধবার ২৯ সেপ্টেম্বর ২০২৭; কলকাতায় অমাবস্যা তিথি ২৯ সেপ্টেম্বর সকাল ১০:৫৪ থেকে ৩০ সেপ্টেম্বর সকাল ৮:০৫।", "Mahalaya is Wednesday 29 September 2027; in Kolkata the Amavasya tithi runs from 29 Sep 10:54 am to 30 Sep 8:05 am."),
    },
    {
      q: l("২০২৭-এ কালীপুজোর অমাবস্যা কখন?", "When is the Kali Puja Amavasya in 2027?"),
      a: l("কালীপুজো বৃহস্পতিবার ২৮ অক্টোবর; কলকাতায় অমাবস্যা তিথি ২৮ অক্টোবর রাত ৮:৪৭ থেকে ২৯ অক্টোবর সন্ধে ৭:০৫।", "Kali Puja is Thursday 28 October; in Kolkata the Amavasya tithi runs from 28 Oct 8:47 pm to 29 Oct 7:05 pm."),
    },
    {
      q: l("দর্শ অমাবস্যা কী?", "What is Darsha Amavasya?"),
      a: l("দ্রিক পঞ্চাঙ্গের তালিকায় কিছু মাসে মূল অমাবস্যার আগের দিনটাকে ‘দর্শ অমাবস্যা’ লেখা থাকে; আমরা দুটো দিনই দেখাই।", "In some months Drik Panchang's list marks the day before the main Amavasya as 'Darsha Amavasya'; we show both days."),
    },
    {
      q: l("ঢাকায় অমাবস্যার তারিখ কি কলকাতার মতোই?", "Are Amavasya dates in Dhaka the same as in Kolkata?"),
      a: l("প্রায় সবসময়; তিথির সময় ঢাকায় আধ ঘণ্টা পরে। এপ্রিল ২০২৭-এ দ্রিকের ঢাকা পাতা চৈত্র অমাবস্যা ৭ এপ্রিল দেখায়, কলকাতার পাতা শুধু ৬ এপ্রিল।", "Almost always; Dhaka's tithi times run half an hour later. In April 2027 Drik's Dhaka page lists Chaitra Amavasya on 7 April, while the Kolkata page shows only 6 April."),
    },
  ],
  events: [],
  links: [
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027"), primary: true },
    { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};

/** Every Ekadashi and Purnima as "Coming up" entries for the home page (main dates). */
export const LUNAR_UPCOMING: Upcoming[] = [
  ...EKADASHI_ROWS.map(([name, date]) => ({ date, icon: "🪔", name: NAMES[name], href: "/ekadashi-2027" })),
  ...PURNIMA_ROWS.map(([name, date]) => ({ date, icon: "🌕", name: PURNIMA_NAMES[name], href: "/purnima-2027" })),
];
