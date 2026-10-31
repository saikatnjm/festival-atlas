// Ekadashi dates, November 2026 to December 2027 (/ekadashi-2027). Every date and tithi time is copied from
// Drik Panchang's yearly Ekadashi pages for Kolkata and Dhaka (Smarta) and its ISKCON lists for the same
// cities (Vaishnava), fetched 31 Oct 2026; muhuratam.in's Kolkata 2027 list matches every Smarta date.
// Times are written as "YYYY-MM-DD HH:MM" (24 h, local) and only formatted here, never computed.

import type { L, Lang } from "@/lib/i18n";
import type { FestivalPage, FestivalTable } from "./types";

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
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027"), primary: true },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/jagaddhatri-puja-2026", label: l("জগদ্ধাত্রী পুজো ২০২৬", "Jagaddhatri Puja 2026") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};
