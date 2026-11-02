// Sankashti Chaturthi, Pradosh Vrat and Masik Shivaratri lists for 2027 (/sankashti-chaturthi-2027, /pradosh-vrat-2027,
// /masik-shivratri-2027). Every date and time is copied from Drik Panchang's yearly vrat pages for Kolkata and Dhaka,
// fetched 1 Nov 2026 (Sankashti: vrats/sankashti-chaturthi-dates.html, Pradosh: vrats/pradoshdates.html, Masik Shivaratri:
// vrats/masik-shivaratri-dates.html); background from Wikipedia. Times are written as "YYYY-MM-DD HH:MM" (24 h, local)
// and only formatted here, never computed. Drik's Sankashti list prints one unlabelled evening time per date; it is not
// labelled "moonrise", so it is left out.

import type { L, Lang } from "@/lib/i18n";
import type { FestivalPage, FestivalTable } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};
const DAYS: Record<Lang, string[]> = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], bn: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"] };
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const bnNum = (s: string) => s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

const dayLabel = (iso: string, lang: Lang): string => {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  const s = `${DAYS[lang][wd]} ${d} ${MONTHS[lang][m - 1]}`;
  return lang === "bn" ? bnNum(s) : s;
};
const day = (iso: string): L => ({ bn: dayLabel(iso, "bn"), en: dayLabel(iso, "en") });

function bnPeriod(h: number): string {
  if (h < 4) return "রাত";
  if (h < 6) return "ভোর";
  if (h < 12) return "সকাল";
  if (h < 15) return "দুপুর";
  if (h < 17) return "বিকেল";
  if (h < 19) return h < 18 ? "বিকেল" : "সন্ধে";
  return "রাত";
}
const clockOf = (h: number, min: number, lang: Lang): string => {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const c = `${h12}:${String(min).padStart(2, "0")}`;
  return lang === "bn" ? bnNum(`${bnPeriod(h)} ${c}`) : `${c} ${h < 12 ? "am" : "pm"}`;
};

/** "2027-01-02 14:24" → "2 Jan 2:24 pm" / "২ জানুয়ারি দুপুর ২:২৪". */
function timeLabel(stamp: string, lang: Lang): string {
  const [date, time] = stamp.split(" ");
  const [, m, d] = date.split("-").map(Number);
  const [h, min] = time.split(":").map(Number);
  const s = `${d} ${MONTHS[lang][m - 1]} ${clockOf(h, min, lang)}`;
  return lang === "bn" ? bnNum(`${d} ${MONTHS.bn[m - 1]}`) + ` ${clockOf(h, min, "bn")}` : s;
}
const range = (a: string, b: string): L => ({ bn: `${timeLabel(a, "bn")} – ${timeLabel(b, "bn")}`, en: `${timeLabel(a, "en")} – ${timeLabel(b, "en")}` });

/** "17:06-19:44" → "5:06 pm – 7:44 pm" (clock times only, same evening or night). */
const window_ = (w: string): L => {
  const [a, b] = w.split("-").map((t) => t.split(":").map(Number));
  return { bn: `${clockOf(a[0], a[1], "bn")} – ${clockOf(b[0], b[1], "bn")}`, en: `${clockOf(a[0], a[1], "en")} – ${clockOf(b[0], b[1], "en")}` };
};

const KOL = "1275004";
const DHAKA = "1185241";
const src = (title: string, path: string, geo: string, year = 2027) => ({ title, url: `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=${year}` });
export const SANKASHTI_KOL = src("Drik Panchang, 2027 Sankashti Chaturthi dates for Kolkata", "vrats/sankashti-chaturthi-dates.html", KOL);
const SANKASHTI_DHAKA = src("Drik Panchang, 2027 Sankashti Chaturthi dates for Dhaka", "vrats/sankashti-chaturthi-dates.html", DHAKA);
export const PRADOSH_KOL = src("Drik Panchang, 2027 Pradosh dates for Kolkata", "vrats/pradoshdates.html", KOL);
const PRADOSH_DHAKA = src("Drik Panchang, 2027 Pradosh dates for Dhaka", "vrats/pradoshdates.html", DHAKA);
export const MASIK_KOL = src("Drik Panchang, 2027 Masik Shivaratri dates for Kolkata", "vrats/masik-shivaratri-dates.html", KOL);
const MASIK_DHAKA = src("Drik Panchang, 2027 Masik Shivaratri dates for Dhaka", "vrats/masik-shivaratri-dates.html", DHAKA);
const WIKI_SANKASHTI = { title: "Wikipedia, Sankashti Chaturthi", url: "https://en.wikipedia.org/wiki/Sankashti_Chaturthi" };
const WIKI_PRADOSHA = { title: "Wikipedia, Pradosha", url: "https://en.wikipedia.org/wiki/Pradosha" };
const WIKI_SHIVARATRI = { title: "Wikipedia, Maha Shivaratri", url: "https://en.wikipedia.org/wiki/Maha_Shivaratri" };

const DHAKA_NOTE = l(
  "ঢাকার তিথি আর সময় দ্রিক পঞ্চাঙ্গের ঢাকা পাতা থেকে; দুই শহরে তারিখ একই।",
  "Dhaka times are from Drik Panchang's Dhaka page; the dates match in both cities.",
);
const PANJIKA_NOTE = l("বাড়ির পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত বা গুপ্তপ্রেস) মানলে মিলিয়ে নিও; কোনো কোনো দিন আলাদা হতে পারে।", "If you go by a printed panjika (Bishuddha Siddhanta or Gupta Press), check it: some days may differ.");

// ---- Sankashti Chaturthi (/sankashti-chaturthi-2027) ----

export const SANKASHTI_NAMES: Record<string, L> = {
  lambodara: l("লম্বোদর সংকষ্টী", "Lambodara Sankashti"),
  dwijapriya: l("দ্বিজপ্রিয় সংকষ্টী", "Dwijapriya Sankashti"),
  bhalachandra: l("ভালচন্দ্র সংকষ্টী", "Bhalachandra Sankashti"),
  vikata: l("বিকট সংকষ্টী", "Vikata Sankashti"),
  ekadanta: l("একদন্ত সংকষ্টী", "Ekadanta Sankashti"),
  krishnapingala: l("কৃষ্ণপিঙ্গল সংকষ্টী", "Krishnapingala Sankashti"),
  gajanana: l("গজানন সংকষ্টী", "Gajanana Sankashti"),
  heramba: l("হেরম্ব সংকষ্টী", "Heramba Sankashti"),
  vighnaraja: l("বিঘ্নরাজ সংকষ্টী", "Vighnaraja Sankashti"),
  vakratunda: l("বক্রতুণ্ড সংকষ্টী", "Vakratunda Sankashti"),
  ganadhipa: l("গণাধিপ সংকষ্টী", "Ganadhipa Sankashti"),
  akhuratha: l("অখুরথ সংকষ্টী", "Akhuratha Sankashti"),
};

/** [name, date, Kolkata Chaturthi start, end, Dhaka start, end]. */
type SankashtiRow = [keyof typeof SANKASHTI_NAMES, string, string, string, string, string];
export const SANKASHTI_ROWS: SankashtiRow[] = [
  ["lambodara", "2027-01-25", "2027-01-25 08:10", "2027-01-26 06:00", "2027-01-25 08:40", "2027-01-26 06:30"],
  ["dwijapriya", "2027-02-24", "2027-02-23 21:48", "2027-02-24 20:39", "2027-02-23 22:18", "2027-02-24 21:09"],
  ["bhalachandra", "2027-03-25", "2027-03-25 12:37", "2027-03-26 12:43", "2027-03-25 13:07", "2027-03-26 13:13"],
  ["vikata", "2027-04-24", "2027-04-24 04:20", "2027-04-25 05:41", "2027-04-24 04:50", "2027-04-25 06:11"],
  ["ekadanta", "2027-05-23", "2027-05-23 20:41", "2027-05-24 22:58", "2027-05-23 21:11", "2027-05-24 23:28"],
  ["krishnapingala", "2027-06-22", "2027-06-22 13:07", "2027-06-23 15:42", "2027-06-22 13:37", "2027-06-23 16:12"],
  ["gajanana", "2027-07-22", "2027-07-22 04:46", "2027-07-23 06:56", "2027-07-22 05:16", "2027-07-23 07:26"],
  ["heramba", "2027-08-20", "2027-08-20 18:53", "2027-08-21 20:04", "2027-08-20 19:23", "2027-08-21 20:34"],
  ["vighnaraja", "2027-09-19", "2027-09-19 07:08", "2027-09-20 07:08", "2027-09-19 07:38", "2027-09-20 07:38"],
  ["vakratunda", "2027-10-18", "2027-10-18 17:51", "2027-10-19 16:42", "2027-10-18 18:21", "2027-10-19 17:12"],
  ["ganadhipa", "2027-11-17", "2027-11-17 03:41", "2027-11-18 01:35", "2027-11-17 04:11", "2027-11-18 02:05"],
  ["akhuratha", "2027-12-16", "2027-12-16 13:21", "2027-12-17 10:34", "2027-12-16 13:51", "2027-12-17 11:04"],
];
const SANKASHTI_EXTRA: Record<string, L> = {
  "2027-01-25": l("সকট চৌথ", "Sakat Chauth"),
  "2027-08-20": l("বহুলা চতুর্থী", "Bahula Chaturthi"),
  "2027-10-18": l("করওয়া চৌথ", "Karwa Chauth"),
};

const sankashtiTable: FestivalTable = {
  id: "sankashti-2027",
  h2: l("সংকষ্টী চতুর্থী ২০২৭: পুরো তালিকা", "Sankashti Chaturthi 2027: the full list"),
  caption: l("সংকষ্টী চতুর্থী ২০২৭: কলকাতা (IST) আর ঢাকা (BST)", "Sankashti Chaturthi 2027: Kolkata (IST) and Dhaka (BST)"),
  columns: [l("সংকষ্টী", "Sankashti"), l("তারিখ", "Date"), l("চতুর্থী, কলকাতা", "Chaturthi, Kolkata"), l("চতুর্থী, ঢাকা", "Chaturthi, Dhaka"), l("অন্য নাম", "Also listed as")],
  rows: SANKASHTI_ROWS.map(([name, date, ks, ke, ds, de]) => ({
    cells: [SANKASHTI_NAMES[name], day(date), range(ks, ke), range(ds, de), SANKASHTI_EXTRA[date] ?? l("—", "—")],
    source: SANKASHTI_KOL,
  })),
  note: l(
    "দ্রিক পঞ্চাঙ্গ প্রতিটা তারিখের পাশে সন্ধ্যার একটা সময় দেয়, কিন্তু সেটাকে ‘চন্দ্রোদয়’ লেখে না, তাই এখানে বসানো হয়নি। উপবাস ভাঙার সময় আপনার শহরের চন্দ্রোদয় দেখে নিন। ঢাকার তিথি দ্রিকের ঢাকা পাতা থেকে।",
    "Drik Panchang prints one evening time beside each date but does not label it moonrise, so it is left out here. Check moonrise for your own city before breaking the fast. Dhaka times are from Drik's Dhaka page.",
  ),
};

export const SANKASHTI_2027: FestivalPage = {
  path: "/sankashti-chaturthi-2027",
  title: l("সংকষ্টী চতুর্থী ২০২৭: সব তারিখ ও তিথির সময়", "Sankashti Chaturthi 2027: All Dates, Kolkata & Dhaka"),
  description: l(
    "২০২৭-এর বারোটা সংকষ্টী চতুর্থী: প্রথমটা সোমবার ২৫ জানুয়ারি। তারিখ, বার, নাম, কলকাতা আর ঢাকার চতুর্থী তিথির শুরু-শেষ। দ্রিক পঞ্চাঙ্গ থেকে, সূত্রসহ।",
    "All twelve Sankashti Chaturthis of 2027, the first on Monday 25 January: date, weekday, name, and Chaturthi tithi start and end in Kolkata and Dhaka. Sourced.",
  ),
  h1: l("সংকষ্টী চতুর্থী ২০২৭: কবে, কোন দিন", "Sankashti Chaturthi 2027: when and which day"),
  lead: l(
    "২০২৭-এর প্রথম সংকষ্টী চতুর্থী সোমবার ২৫ জানুয়ারি, শেষটা বৃহস্পতিবার ১৬ ডিসেম্বর (অখুরথ সংকষ্টী)। মাসে একটা, বছরে বারোটা। নিচে প্রতিটার তারিখ, নাম আর কলকাতা-ঢাকার চতুর্থী তিথির সময়।",
    "The first Sankashti Chaturthi of 2027 is Monday 25 January and the last is Thursday 16 December (Akhuratha Sankashti). One a month, twelve a year. Below is each date, its name and the Chaturthi tithi times for Kolkata and Dhaka.",
  ),
  tables: [sankashtiTable],
  sections: [
    {
      id: "what",
      h2: l("সংকষ্টী চতুর্থী কী", "What is Sankashti Chaturthi"),
      paras: [
        {
          text: l(
            "সংকষ্টী চতুর্থী গণেশের মাসিক ব্রত, কৃষ্ণপক্ষের চতুর্থীতে। সারা দিন উপবাস করে রাতে চাঁদ দেখে, গণেশের পুজো সেরে উপবাস ভাঙা হয়। মঙ্গলবার পড়লে তাকে অঙ্গারকী সংকষ্টী বলে, যেটা বিশেষ পবিত্র ধরা হয়।",
            "Sankashti Chaturthi is a monthly Ganesha vrat on the fourth day of the dark fortnight (Krishna Paksha). Devotees fast through the day and break the fast at night after seeing the moon and praying to Ganesha. When it falls on a Tuesday it is called Angaraki Sankashti and is considered especially sacred.",
          ),
          source: WIKI_SANKASHTI,
        },
        { text: l("২০২৭-এ মঙ্গলবার পড়ছে একটাই: ২২ জুন, কৃষ্ণপিঙ্গল সংকষ্টী, অর্থাৎ অঙ্গারকী সংকষ্টী। তিথি দুই দিনে ছড়ালে ব্রতের দিন কোনটা, বাড়ির পঞ্জিকায় মিলিয়ে নিন।", "Only one falls on a Tuesday in 2027: 22 June, Krishnapingala Sankashti, so an Angaraki Sankashti. If the tithi spans two days, check your panjika for the vrat day."), source: SANKASHTI_KOL },
        { text: PANJIKA_NOTE },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: SANKASHTI_KOL },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: SANKASHTI_DHAKA },
      ],
    },
  ],
  faq: [
    {
      q: l("সংকষ্টী চতুর্থী কবে ২০২৭?", "When is Sankashti Chaturthi in 2027?"),
      a: l(
        "প্রথমটা সোমবার ২৫ জানুয়ারি ২০২৭ (লম্বোদর সংকষ্টী), তারপর প্রতি মাসে একটা। পুরো তালিকা উপরে।",
        "The first is Monday 25 January 2027 (Lambodara Sankashti), then one every month. The full list is above.",
      ),
    },
    {
      q: l("অঙ্গারকী সংকষ্টী ২০২৭-এ কবে?", "When is Angaraki Sankashti in 2027?"),
      a: l("মঙ্গলবার ২২ জুন ২০২৭ (কৃষ্ণপিঙ্গল সংকষ্টী); কলকাতায় চতুর্থী ২২ জুন দুপুর ১:০৭ থেকে ২৩ জুন বিকেল ৩:৪২।", "Tuesday 22 June 2027 (Krishnapingala Sankashti); in Kolkata Chaturthi runs from 22 Jun 1:07 pm to 23 Jun 3:42 pm."),
    },
    {
      q: l("২০২৭-এ করওয়া চৌথ আর সংকষ্টী কি একই দিনে?", "Do Karwa Chauth and Sankashti fall on the same day in 2027?"),
      a: l("দ্রিকের তালিকায় সোমবার ১৮ অক্টোবর বক্রতুণ্ড সংকষ্টীর পাশে করওয়া চৌথও লেখা আছে।", "Drik's list marks Karwa Chauth alongside Vakratunda Sankashti on Monday 18 October."),
    },
    {
      q: l("ঢাকায় সংকষ্টীর তারিখ কি কলকাতার মতোই?", "Are Sankashti dates in Dhaka the same as in Kolkata?"),
      a: l("২০২৭-এর বারোটা তারিখই দুই শহরে একই; চতুর্থী তিথির সময় ঢাকায় আধ ঘণ্টা পরে।", "All twelve 2027 dates are the same in both cities; Dhaka's Chaturthi times run half an hour later."),
    },
  ],
  events: [],
  links: [
    { href: "/pradosh-vrat-2027", label: l("প্রদোষ ব্রত ২০২৭", "Pradosh Vrat 2027"), primary: true },
    { href: "/masik-shivratri-2027", label: l("মাসিক শিবরাত্রি ২০২৭", "Masik Shivratri 2027") },
    { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") },
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") },
    { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-11-01",
};

// ---- Pradosh Vrat (/pradosh-vrat-2027) ----

export const PRADOSH_NAMES: Record<string, L> = {
  ravi: l("রবি প্রদোষ", "Ravi Pradosh"),
  soma: l("সোম প্রদোষ", "Soma Pradosh"),
  bhauma: l("ভৌম প্রদোষ", "Bhauma Pradosh"),
  budha: l("বুধ প্রদোষ", "Budha Pradosh"),
  guru: l("গুরু প্রদোষ", "Guru Pradosh"),
  shukra: l("শুক্র প্রদোষ", "Shukra Pradosh"),
  shani: l("শনি প্রদোষ", "Shani Pradosh"),
};
export const PAKSHA: Record<string, L> = { K: l("কৃষ্ণ", "Krishna"), S: l("শুক্ল", "Shukla") };

/** [date, weekday name, paksha, Kolkata Trayodashi start, end, Kolkata Pradosh window, Dhaka start, end, Dhaka window]. */
type PradoshRow = [string, keyof typeof PRADOSH_NAMES, "K" | "S", string, string, string, string, string, string];
export const PRADOSH_ROWS: PradoshRow[] = [
  ["2027-01-05", "bhauma", "K", "2027-01-04 18:15", "2027-01-05 20:39", "17:06-19:44", "2027-01-04 18:45", "2027-01-05 21:09", "17:26-20:05"],
  ["2027-01-20", "budha", "S", "2027-01-20 04:41", "2027-01-21 01:11", "17:16-19:53", "2027-01-20 05:11", "2027-01-21 01:41", "17:36-20:14"],
  ["2027-02-03", "budha", "K", "2027-02-03 13:50", "2027-02-04 16:31", "17:26-20:00", "2027-02-03 14:20", "2027-02-04 17:01", "17:46-20:20"],
  ["2027-02-18", "guru", "S", "2027-02-18 14:27", "2027-02-19 11:14", "17:35-20:05", "2027-02-18 14:57", "2027-02-19 11:44", "17:55-20:26"],
  ["2027-03-05", "shukra", "K", "2027-03-05 09:53", "2027-03-06 12:03", "17:42-20:08", "2027-03-05 10:23", "2027-03-06 12:33", "18:03-20:30"],
  ["2027-03-20", "shani", "S", "2027-03-19 23:17", "2027-03-20 20:45", "17:47-20:10", "2027-03-19 23:47", "2027-03-20 21:15", "18:09-20:32"],
  ["2027-04-04", "ravi", "K", "2027-04-04 04:26", "2027-04-05 05:23", "17:53-20:11", "2027-04-04 04:56", "2027-04-05 05:53", "18:15-20:33"],
  ["2027-04-18", "ravi", "S", "2027-04-18 07:42", "2027-04-19 06:08", "17:58-20:13", "2027-04-18 08:12", "2027-04-19 06:38", "18:21-20:35"],
  ["2027-05-04", "bhauma", "K", "2027-05-03 20:03", "2027-05-04 19:30", "18:04-19:30", "2027-05-03 20:33", "2027-05-04 20:00", "18:28-20:00"],
  ["2027-05-17", "soma", "S", "2027-05-17 16:28", "2027-05-18 16:03", "18:10-20:19", "2027-05-17 16:58", "2027-05-18 16:33", "18:34-20:42"],
  ["2027-06-02", "budha", "K", "2027-06-02 08:28", "2027-06-03 06:34", "18:18-20:24", "2027-06-02 08:58", "2027-06-03 07:04", "18:42-20:48"],
  ["2027-06-16", "budha", "S", "2027-06-16 02:30", "2027-06-17 03:20", "18:23-20:29", "2027-06-16 03:00", "2027-06-17 03:50", "18:47-20:52"],
  ["2027-07-01", "guru", "K", "2027-07-01 18:14", "2027-07-02 15:23", "18:25-20:31", "2027-07-01 18:44", "2027-07-02 15:53", "18:50-20:55"],
  ["2027-07-15", "guru", "S", "2027-07-15 14:40", "2027-07-16 16:34", "18:24-20:32", "2027-07-15 15:10", "2027-07-16 17:04", "18:48-20:55"],
  ["2027-07-31", "shani", "K", "2027-07-31 02:18", "2027-07-31 22:57", "18:18-20:28", "2027-07-31 02:48", "2027-07-31 23:27", "18:42-20:51"],
  ["2027-08-14", "shani", "S", "2027-08-14 05:21", "2027-08-15 07:53", "18:09-20:22", "2027-08-14 05:51", "2027-08-15 08:23", "18:33-20:45"],
  ["2027-08-29", "ravi", "K", "2027-08-29 09:35", "2027-08-30 06:12", "17:57-20:13", "2027-08-29 10:05", "2027-08-30 06:42", "18:20-20:35"],
  ["2027-09-13", "soma", "S", "2027-09-12 22:12", "2027-09-14 00:39", "17:42-20:02", "2027-09-12 22:42", "2027-09-14 01:09", "18:05-20:25"],
  ["2027-09-27", "soma", "K", "2027-09-27 16:55", "2027-09-28 13:54", "17:28-19:52", "2027-09-27 17:25", "2027-09-28 14:24", "17:50-20:14"],
  ["2027-10-12", "bhauma", "S", "2027-10-12 16:13", "2027-10-13 17:48", "17:14-19:42", "2027-10-12 16:43", "2027-10-13 18:18", "17:35-20:03"],
  ["2027-10-27", "budha", "K", "2027-10-27 01:03", "2027-10-27 22:49", "17:02-19:34", "2027-10-27 01:33", "2027-10-27 23:19", "17:23-19:55"],
  ["2027-11-11", "guru", "S", "2027-11-11 10:07", "2027-11-12 10:20", "16:54-19:29", "2027-11-11 10:37", "2027-11-12 10:50", "17:15-19:50"],
  ["2027-11-25", "guru", "K", "2027-11-25 10:50", "2027-11-26 09:47", "16:51-19:28", "2027-11-25 11:20", "2027-11-26 10:17", "17:11-19:49"],
  ["2027-12-11", "shani", "S", "2027-12-11 02:53", "2027-12-12 01:42", "16:53-19:32", "2027-12-11 03:23", "2027-12-12 02:12", "17:13-19:52"],
  ["2027-12-25", "shani", "K", "2027-12-24 23:08", "2027-12-25 23:31", "16:59-19:38", "2027-12-24 23:38", "2027-12-26 00:01", "17:19-19:59"],
];
const pradoshTable: FestivalTable = {
  id: "pradosh-2027",
  h2: l("প্রদোষ ব্রত ২০২৭: পুরো তালিকা", "Pradosh Vrat 2027: the full list"),
  caption: l("প্রদোষ ব্রত ২০২৭: কলকাতা (IST) আর ঢাকা (BST)", "Pradosh Vrat 2027: Kolkata (IST) and Dhaka (BST)"),
  columns: [l("প্রদোষ", "Pradosh"), l("তারিখ", "Date"), l("পক্ষ", "Paksha"), l("ত্রয়োদশী, কলকাতা", "Trayodashi, Kolkata"), l("প্রদোষ পুজোর সময়, কলকাতা", "Pradosh puja time, Kolkata"), l("ত্রয়োদশী, ঢাকা", "Trayodashi, Dhaka"), l("প্রদোষ পুজোর সময়, ঢাকা", "Pradosh puja time, Dhaka")],
  rows: PRADOSH_ROWS.map(([date, name, paksha, ks, ke, kw, ds, de, dw]) => ({
    cells: [PRADOSH_NAMES[name], day(date), PAKSHA[paksha], range(ks, ke), window_(kw), range(ds, de), window_(dw)],
    source: PRADOSH_KOL,
  })),
  note: l(
    "ঢাকার সময় দ্রিক পঞ্চাঙ্গের ঢাকা পাতা থেকে; পঁচিশটা তারিখই দুই শহরে একই। ‘প্রদোষ পুজোর সময়’ দ্রিকের ছাপা জানলা, সূর্যাস্তের আশপাশে।",
    "Dhaka times are from Drik Panchang's Dhaka page; all twenty-five dates match in both cities. 'Pradosh puja time' is the window Drik prints, around sunset.",
  ),
};

export const PRADOSH_2027: FestivalPage = {
  path: "/pradosh-vrat-2027",
  title: l("প্রদোষ ব্রত ২০২৭: সব তারিখ ও পুজোর সময়", "Pradosh Vrat 2027: All Dates & Puja Time, Kolkata"),
  description: l(
    "২০২৭-এর পঁচিশটা প্রদোষ ব্রত: প্রথমটা মঙ্গলবার ৫ জানুয়ারি। তারিখ, শুক্ল-কৃষ্ণ পক্ষ, কলকাতা আর ঢাকার প্রদোষ পুজোর সময়। দ্রিক পঞ্চাঙ্গ থেকে।",
    "All 25 Pradosh Vrats of 2027, the first on Tuesday 5 January: date, Shukla or Krishna paksha, and Pradosh puja time for Kolkata and Dhaka. Sourced.",
  ),
  h1: l("প্রদোষ ব্রত ২০২৭: কবে আর কোন সময়", "Pradosh Vrat 2027: when and what time"),
  lead: l(
    "২০২৭-এ প্রদোষ ব্রত পঁচিশটা: প্রথমটা ভৌম প্রদোষ, মঙ্গলবার ৫ জানুয়ারি, শেষটা শনি প্রদোষ, শনিবার ২৫ ডিসেম্বর। প্রতিটার তারিখ, পক্ষ আর কলকাতা-ঢাকার প্রদোষ পুজোর সময় নিচে।",
    "There are 25 Pradosh Vrats in 2027. The first is Bhauma Pradosh on Tuesday 5 January and the last is Shani Pradosh on Saturday 25 December. Below is each date, its paksha and the Pradosh puja time for Kolkata and Dhaka.",
  ),
  tables: [pradoshTable],
  sections: [
    {
      id: "what",
      h2: l("প্রদোষ ব্রত কী", "What is Pradosh Vrat"),
      paras: [
        {
          text: l(
            "প্রদোষ পড়ে প্রতি পক্ষের ত্রয়োদশীতে, শিবের পুজোর সঙ্গে জড়িয়ে। সূর্যাস্তের দেড় ঘণ্টা আগে থেকে দেড় ঘণ্টা পর, মোট তিন ঘণ্টার এই জানলায় উপবাস আর সন্ধ্যার জাগরণ। পার্বতী, গণেশ, কার্তিক আর নন্দীরও পুজো হয়; অভিষেক, বেলপাতা, প্রদীপ আর ভোগ দিয়ে।",
            "Pradosh falls on the Trayodashi, the 13th day of each fortnight, and is closely tied to the worship of Shiva. The vrat is a fast kept in a three-hour window around sunset, from an hour and a half before to an hour and a half after, with an evening vigil. Parvati, Ganesha, Kartikeya and Nandi are also worshipped, with abhisheka, bael leaves, lamps and food offerings.",
          ),
          source: WIKI_PRADOSHA,
        },
        { text: l("ব্রতের নাম বারের নামে: সোমবার হলে সোম প্রদোষ, শনিবার হলে শনি প্রদোষ, এমন।", "The vrat takes its name from the weekday: Soma Pradosh on a Monday, Shani Pradosh on a Saturday, and so on."), source: PRADOSH_KOL },
        { text: PANJIKA_NOTE },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: PRADOSH_KOL },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: PRADOSH_DHAKA },
      ],
    },
  ],
  faq: [
    {
      q: l("প্রদোষ ব্রত কবে ২০২৭?", "When is the next Pradosh vrat in 2027?"),
      a: l(
        "২০২৭-এর প্রথম প্রদোষ মঙ্গলবার ৫ জানুয়ারি (ভৌম প্রদোষ, কৃষ্ণ পক্ষ), তারপর বুধবার ২০ জানুয়ারি। কলকাতায় ৫ জানুয়ারি প্রদোষ পুজোর সময় বিকেল ৫:০৬ থেকে সন্ধে ৭:৪৪।",
        "The first Pradosh of 2027 is Tuesday 5 January (Bhauma Pradosh, Krishna paksha), then Wednesday 20 January. In Kolkata on 5 January the Pradosh puja time is 5:06 pm to 7:44 pm.",
      ),
    },
    {
      q: l("২০২৭-এ শনি প্রদোষ কবে কবে?", "Which dates are Shani Pradosh in 2027?"),
      a: l("পাঁচটা: ২০ মার্চ, ৩১ জুলাই, ১৪ আগস্ট, ১১ ডিসেম্বর আর ২৫ ডিসেম্বর।", "Five: 20 March, 31 July, 14 August, 11 December and 25 December."),
    },
    {
      q: l("২০২৭-এ কটা প্রদোষ ব্রত?", "How many Pradosh vrats are there in 2027?"),
      a: l("পঁচিশটা: পক্ষে একটা করে, বছরে পঁচিশটা। দ্রিকের কলকাতা তালিকায় ভৌম প্রদোষ ৫ জানুয়ারি, ৪ মে আর ১২ অক্টোবর।", "Twenty-five on Drik's list, about one a fortnight. Bhauma Pradosh falls on 5 January, 4 May and 12 October."),
    },
    {
      q: l("ঢাকায় প্রদোষ ব্রতের সময় কখন?", "What is the Pradosh puja time in Dhaka?"),
      a: l("৫ জানুয়ারি ২০২৭ ঢাকায় প্রদোষ পুজোর সময় বিকেল ৫:২৬ থেকে রাত ৮:০৫। অন্য দিনের সময় উপরের তালিকায়; পঁচিশটা তারিখই কলকাতার মতো।", "On 5 January 2027 the Pradosh puja time in Dhaka is 5:26 pm to 8:05 pm. Other days are in the list above; all 25 dates match Kolkata."),
    },
  ],
  events: [],
  links: [
    { href: "/masik-shivratri-2027", label: l("মাসিক শিবরাত্রি ২০২৭", "Masik Shivratri 2027"), primary: true },
    { href: "/shivratri-2027", label: l("মহাশিবরাত্রি ২০২৭", "Maha Shivratri 2027") },
    { href: "/sankashti-chaturthi-2027", label: l("সংকষ্টী চতুর্থী ২০২৭", "Sankashti Chaturthi 2027") },
    { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") },
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") },
    { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-11-01",
};

// ---- Masik Shivaratri (/masik-shivratri-2027) ----
// Drik prints a midnight puja window per date without the word "Nishita" on the list; its text ties the midnight
// window to Nishita Kaal. Two Pausha entries (Jan and Dec) are separate lunar months of Pausha as Drik prints them.

export const MASIK_NAMES: Record<string, L> = {
  pausha: l("পৌষ", "Pausha"),
  pausha2: l("পৌষ", "Pausha"),
  magha: l("মাঘ", "Magha"),
  phalguna: l("ফাল্গুন", "Phalguna"),
  chaitra: l("চৈত্র", "Chaitra"),
  vaishakha: l("বৈশাখ", "Vaishakha"),
  jyeshtha: l("জ্যৈষ্ঠ", "Jyeshtha"),
  ashadha: l("আষাঢ়", "Ashadha"),
  shravana: l("শ্রাবণ", "Shravana"),
  bhadrapada: l("ভাদ্র", "Bhadrapada"),
  ashwina: l("আশ্বিন", "Ashwina"),
  kartika: l("কার্তিক", "Kartika"),
  margashirsha: l("অগ্রহায়ণ", "Margashirsha"),
};
const MASIK_EXTRA: Record<string, L> = {
  "2027-03-06": l("মহাশিবরাত্রি", "Maha Shivaratri"),
  "2027-07-31": l("শ্রাবণ শিবরাত্রি", "Sawan Shivaratri"),
};

/** [date, month, Kolkata Chaturdashi start, end, Kolkata midnight (Nishita) window, Dhaka start, end, Dhaka window]. */
type MasikRow = [string, keyof typeof MASIK_NAMES, string, string, string, string, string, string];
export const MASIK_ROWS: MasikRow[] = [
  ["2027-01-05", "pausha", "2027-01-05 20:39", "2027-01-06 23:13", "23:16-00:08", "2027-01-05 21:09", "2027-01-06 23:43", "23:37-00:30"],
  ["2027-02-04", "magha", "2027-02-04 16:31", "2027-02-05 19:05", "23:25-00:16", "2027-02-04 17:01", "2027-02-05 19:35", "23:46-00:38"],
  ["2027-03-06", "phalguna", "2027-03-06 12:03", "2027-03-07 13:46", "23:23-00:12", "2027-03-06 12:33", "2027-03-07 14:16", "23:45-00:34"],
  ["2027-04-05", "chaitra", "2027-04-05 05:23", "2027-04-06 05:40", "23:16-00:02", "2027-04-05 05:53", "2027-04-06 06:10", "23:38-00:24"],
  ["2027-05-04", "vaishakha", "2027-05-04 19:30", "2027-05-05 18:16", "23:11-23:55", "2027-05-04 20:00", "2027-05-05 18:46", "23:33-00:17"],
  ["2027-06-03", "jyeshtha", "2027-06-03 06:34", "2027-06-04 04:05", "23:14-23:56", "2027-06-03 07:04", "2027-06-04 04:35", "23:36-00:18"],
  ["2027-07-02", "ashadha", "2027-07-02 15:23", "2027-07-03 12:05", "23:20-00:02", "2027-07-02 15:53", "2027-07-03 12:35", "23:42-00:23"],
  ["2027-07-31", "shravana", "2027-07-31 22:57", "2027-08-01 19:19", "23:21-00:05", "2027-07-31 23:27", "2027-08-01 19:49", "23:43-00:26"],
  ["2027-08-30", "bhadrapada", "2027-08-30 06:12", "2027-08-31 02:40", "23:15-00:00", "2027-08-30 06:42", "2027-08-31 03:10", "23:36-00:22"],
  ["2027-09-28", "ashwina", "2027-09-28 13:54", "2027-09-29 10:54", "23:03-23:51", "2027-09-28 14:24", "2027-09-29 11:24", "23:25-00:13"],
  ["2027-10-27", "kartika", "2027-10-27 22:49", "2027-10-28 20:47", "22:55-23:46", "2027-10-27 23:19", "2027-10-28 21:17", "23:19-00:08"],
  ["2027-11-26", "margashirsha", "2027-11-26 09:47", "2027-11-27 09:07", "22:58-23:50", "2027-11-26 10:17", "2027-11-27 09:37", "23:20-00:12"],
  ["2027-12-26", "pausha2", "2027-12-25 23:31", "2027-12-27 00:22", "23:11-00:04", "2027-12-26 00:01", "2027-12-27 00:52", "23:32-00:26"],
];
const masikTable: FestivalTable = {
  id: "masik-2027",
  h2: l("মাসিক শিবরাত্রি ২০২৭: পুরো তালিকা", "Masik Shivaratri 2027: the full list"),
  caption: l("মাসিক শিবরাত্রি ২০২৭: কলকাতা (IST) আর ঢাকা (BST)", "Masik Shivaratri 2027: Kolkata (IST) and Dhaka (BST)"),
  columns: [l("মাস", "Month"), l("তারিখ", "Date"), l("চতুর্দশী, কলকাতা", "Chaturdashi, Kolkata"), l("নিশীথ পুজো, কলকাতা", "Nishita puja, Kolkata"), l("চতুর্দশী, ঢাকা", "Chaturdashi, Dhaka"), l("নিশীথ পুজো, ঢাকা", "Nishita puja, Dhaka"), l("বিশেষ", "Note")],
  rows: MASIK_ROWS.map(([date, month, ks, ke, kw, ds, de, dw]) => ({
    cells: [MASIK_NAMES[month], day(date), range(ks, ke), window_(kw), range(ds, de), window_(dw), MASIK_EXTRA[date] ?? l("—", "—")],
    source: MASIK_KOL,
    ...(date === "2027-03-06" ? { href: "/shivratri-2027" } : {}),
  })),
  note: l(
    "রাতের জানলা মধ্যরাত পেরোলে পরের দিনের তারিখে শেষ হয়। ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে; তেরোটা তারিখই দুই শহরে একই।",
    "A midnight window that runs past 12 am ends on the next calendar day. Dhaka times are from Drik's Dhaka page; all thirteen dates match in both cities.",
  ),
};

export const MASIK_SHIVRATRI_2027: FestivalPage = {
  path: "/masik-shivratri-2027",
  title: l("মাসিক শিবরাত্রি ২০২৭: সব তারিখ ও নিশীথ পুজোর সময়", "Masik Shivratri 2027: All Dates & Nishita Time"),
  description: l(
    "২০২৭-এর তেরোটা মাসিক শিবরাত্রি: প্রথমটা মঙ্গলবার ৫ জানুয়ারি। তারিখ, চতুর্দশী তিথি আর কলকাতা-ঢাকার নিশীথ পুজোর সময়, মহাশিবরাত্রিসহ।",
    "All 13 Masik Shivaratri dates of 2027, the first on Tuesday 5 January: date, Chaturdashi tithi and midnight Nishita puja time for Kolkata and Dhaka.",
  ),
  h1: l("মাসিক শিবরাত্রি ২০২৭: কবে আর কখন", "Masik Shivratri 2027: when and what time"),
  lead: l(
    "২০২৭-এ মাসিক শিবরাত্রি তেরোটা। প্রথমটা মঙ্গলবার ৫ জানুয়ারি; মহাশিবরাত্রি শনিবার ৬ মার্চ (ফাল্গুন)। প্রতিটার তারিখ, চতুর্দশী তিথি আর কলকাতা-ঢাকার নিশীথ পুজোর সময় নিচে।",
    "There are 13 Masik Shivaratri dates in 2027. The first is Tuesday 5 January and Maha Shivaratri is Saturday 6 March (Phalguna). Below is each date with its Chaturdashi tithi and the midnight Nishita puja time for Kolkata and Dhaka.",
  ),
  tables: [masikTable],
  sections: [
    {
      id: "what",
      h2: l("মাসিক শিবরাত্রি কী", "What is Masik Shivaratri"),
      paras: [
        {
          text: l(
            "শিবরাত্রি প্রতি চান্দ্রমাসে একবার, কৃষ্ণপক্ষের চতুর্দশীর রাতে। বছরে একটা, ফাল্গুনের (অমান্ত মতে মাঘের) শিবরাত্রিই মহাশিবরাত্রি। বাকিগুলো মাসিক শিবরাত্রি।",
            "Shivaratri is observed once in every lunar month, on the night of the Krishna Paksha Chaturdashi. Maha Shivaratri falls on the same tithi; the page names its month as Magha in the Amanta system or Phalguna in the Purnimanta system. The other months' observances are the monthly Shivaratris.",
          ),
          source: WIKI_SHIVARATRI,
        },
        { text: l("২০২৭-এর মহাশিবরাত্রির পুরো তথ্য আলাদা পাতায়।", "The full details for Maha Shivratri 2027 are on its own page."), source: MASIK_KOL },
        { text: PANJIKA_NOTE },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: MASIK_KOL },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: MASIK_DHAKA },
      ],
    },
  ],
  faq: [
    {
      q: l("মাসিক শিবরাত্রি কবে ২০২৭?", "When is Masik Shivratri in 2027?"),
      a: l(
        "প্রথমটা মঙ্গলবার ৫ জানুয়ারি, তারপর ৪ ফেব্রুয়ারি; মার্চে ৬ তারিখ শনিবার মহাশিবরাত্রি। শেষটা রবিবার ২৬ ডিসেম্বর।",
        "The first is Tuesday 5 January, then 4 February; on Saturday 6 March it is Maha Shivaratri. The last is Sunday 26 December.",
      ),
    },
    {
      q: l("মাসিক শিবরাত্রির নিশীথ পুজো কখন, কলকাতা?", "What is the Nishita puja time for Masik Shivratri in Kolkata?"),
      a: l("৫ জানুয়ারি ২০২৭ কলকাতায় রাত ১১:১৬ থেকে ১২:০৮। প্রতি মাসের সময় উপরের তালিকায়।", "On 5 January 2027 in Kolkata it is 11:16 pm to 12:08 am. Each month's time is in the list above."),
    },
    {
      q: l("২০২৭-এ কটা মাসিক শিবরাত্রি?", "How many Masik Shivaratri dates are there in 2027?"),
      a: l("তেরোটা: জানুয়ারি আর ডিসেম্বর, দুই মাসেই পৌষের শিবরাত্রি পড়ছে। শ্রাবণ শিবরাত্রি শনিবার ৩১ জুলাই।", "Thirteen: January and December both carry a Pausha Shivaratri. Sawan Shivaratri is Saturday 31 July."),
    },
    {
      q: l("ঢাকায় মাসিক শিবরাত্রির নিশীথ পুজোর সময় কখন?", "What is the Nishita puja time in Dhaka?"),
      a: l("৫ জানুয়ারি ২০২৭ ঢাকায় রাত ১১:৩৭ থেকে ১২:৩০। তেরোটা তারিখই কলকাতার মতো।", "On 5 January 2027 in Dhaka it is 11:37 pm to 12:30 am. All thirteen dates match Kolkata."),
    },
  ],
  events: [],
  links: [
    { href: "/shivratri-2027", label: l("মহাশিবরাত্রি ২০২৭", "Maha Shivratri 2027"), primary: true },
    { href: "/pradosh-vrat-2027", label: l("প্রদোষ ব্রত ২০২৭", "Pradosh Vrat 2027") },
    { href: "/sankashti-chaturthi-2027", label: l("সংকষ্টী চতুর্থী ২০২৭", "Sankashti Chaturthi 2027") },
    { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") },
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") },
    { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-11-01",
};
