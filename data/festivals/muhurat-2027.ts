// Auspicious-date lists for 2027 (/vivah-dates-2027, /griha-pravesh-dates-2027). Every date, nakshatra and tithi is
// copied from Drik Panchang's shubh-dates pages for Kolkata (geoname-id 1275004), fetched 1 Nov 2026. Time windows
// are not copied (the Drik pages print them per day). The Annaprashan page (/annaprashan-dates-2027) is NOT built:
// Drik's Annaprashana page shows one day at a time and printed no 2027 list. Drik's Dhaka page showed only a
// verification prompt when fetched, so no Dhaka dates are given. No separate Bengali-vivah page was found on Drik.

import type { L, Lang } from "@/lib/i18n";
import type { FestivalPage, FestivalTable } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const VIVAH_SRC = { title: "Drik Panchang, 2027 Hindu marriage dates for Kolkata", url: "https://www.drikpanchang.com/shubh-dates/shubh-marriage-dates-with-muhurat.html?geoname-id=1275004&year=2027" };
const GRIHA_SRC = { title: "Drik Panchang, 2027 Griha Pravesh dates for Kolkata", url: "https://www.drikpanchang.com/shubh-dates/griha-pravesh-dates-with-muhurat.html?geoname-id=1275004&year=2027" };

const NAK: Record<string, string> = {
  Krittika: "কৃত্তিকা", Rohini: "রোহিণী", Mrigashira: "মৃগশিরা", Magha: "মঘা", "Uttara Phalguni": "উত্তরফাল্গুনী", Hasta: "হস্তা", Chitra: "চিত্রা",
  Swati: "স্বাতী", Anuradha: "অনুরাধা", Mula: "মূলা", "Uttara Ashadha": "উত্তরাষাঢ়া", "Uttara Bhadrapada": "উত্তরভাদ্রপদ", Revati: "রেবতী",
};
const TITHI: Record<string, string> = {
  Pratipada: "প্রতিপদ", Dwitiya: "দ্বিতীয়া", Tritiya: "তৃতীয়া", Chaturthi: "চতুর্থী", Panchami: "পঞ্চমী", Shashthi: "ষষ্ঠী", Saptami: "সপ্তমী",
  Ashtami: "অষ্টমী", Navami: "নবমী", Dashami: "দশমী", Ekadashi: "একাদশী", Dwadashi: "দ্বাদশী", Trayodashi: "ত্রয়োদশী", Chaturdashi: "চতুর্দশী",
  Purnima: "পূর্ণিমা",
};
const tr = (s: string, map: Record<string, string>): L => ({ bn: s.split(", ").map((x) => map[x]).join(", "), en: s });

const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};
const DAYS: Record<Lang, string[]> = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], bn: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"] };
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const bnNum = (s: string) => s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
function dayLabel(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  const s = `${DAYS[lang][wd]} ${d} ${MONTHS[lang][m - 1]}`;
  return lang === "bn" ? bnNum(s) : s;
}
const day = (iso: string): L => ({ bn: dayLabel(iso, "bn"), en: dayLabel(iso, "en") });

/** [date, nakshatra, tithi] exactly as Drik prints them (a day with two entries lists both). */
type Row = [string, string, string];

/** Marriage dates, Kolkata. Where Drik prints two windows for one day, the nakshatras and tithis are merged. */
export const VIVAH_ROWS: Row[] = [
  ["2027-01-15", "Revati", "Saptami"],
  ["2027-01-18", "Krittika, Rohini", "Ekadashi"],
  ["2027-01-19", "Rohini, Mrigashira", "Dwadashi, Trayodashi"],
  ["2027-01-20", "Mrigashira", "Trayodashi"],
  ["2027-01-24", "Magha", "Tritiya"],
  ["2027-01-26", "Uttara Phalguni, Hasta", "Panchami, Shashthi"],
  ["2027-01-27", "Hasta", "Shashthi"],
  ["2027-01-30", "Anuradha", "Navami"],
  ["2027-01-31", "Anuradha", "Dashami"],
  ["2027-02-02", "Mula", "Dwadashi"],
  ["2027-02-03", "Mula", "Dwadashi"],
  ["2027-02-09", "Uttara Bhadrapada", "Chaturthi"],
  ["2027-02-10", "Uttara Bhadrapada, Revati", "Chaturthi, Panchami"],
  ["2027-02-11", "Revati", "Panchami"],
  ["2027-02-14", "Rohini", "Navami"],
  ["2027-02-15", "Rohini", "Navami"],
  ["2027-02-21", "Magha", "Pratipada"],
  ["2027-02-22", "Uttara Phalguni", "Dwitiya, Tritiya"],
  ["2027-02-25", "Swati", "Panchami, Shashthi"],
  ["2027-02-26", "Swati", "Shashthi"],
  ["2027-02-27", "Anuradha", "Ashtami"],
  ["2027-02-28", "Anuradha", "Ashtami"],
  ["2027-03-01", "Mula", "Navami, Dashami"],
  ["2027-03-02", "Mula", "Dashami"],
  ["2027-03-03", "Uttara Ashadha", "Ekadashi"],
  ["2027-03-04", "Uttara Ashadha", "Ekadashi, Dwadashi"],
  ["2027-03-09", "Uttara Bhadrapada", "Pratipada, Dwitiya"],
  ["2027-03-10", "Uttara Bhadrapada, Revati", "Dwitiya, Tritiya"],
  ["2027-03-14", "Rohini", "Saptami"],
  ["2027-04-18", "Uttara Phalguni", "Dwadashi, Trayodashi"],
  ["2027-04-19", "Hasta", "Chaturdashi"],
  ["2027-04-21", "Swati", "Pratipada, Dwitiya"],
  ["2027-04-23", "Anuradha", "Tritiya, Chaturthi"],
  ["2027-04-24", "Anuradha", "Chaturthi"],
  ["2027-04-25", "Mula", "Panchami"],
  ["2027-04-26", "Mula", "Panchami, Shashthi"],
  ["2027-04-27", "Uttara Ashadha", "Saptami"],
  ["2027-04-28", "Uttara Ashadha", "Saptami, Ashtami"],
  ["2027-05-04", "Revati", "Trayodashi"],
  ["2027-05-07", "Rohini", "Dwitiya"],
  ["2027-05-09", "Mrigashira", "Tritiya, Chaturthi"],
  ["2027-05-13", "Magha", "Ashtami, Navami"],
  ["2027-05-14", "Magha", "Navami"],
  ["2027-05-15", "Uttara Phalguni", "Dashami, Ekadashi"],
  ["2027-05-16", "Hasta", "Dwadashi"],
  ["2027-05-17", "Hasta", "Dwadashi"],
  ["2027-05-18", "Swati", "Chaturdashi"],
  ["2027-05-19", "Swati", "Chaturdashi"],
  ["2027-05-20", "Anuradha", "Pratipada"],
  ["2027-05-21", "Anuradha", "Pratipada"],
  ["2027-05-22", "Mula", "Tritiya"],
  ["2027-05-23", "Mula", "Tritiya"],
  ["2027-05-24", "Uttara Ashadha", "Panchami"],
  ["2027-05-25", "Uttara Ashadha", "Panchami"],
  ["2027-05-30", "Uttara Bhadrapada", "Dashami"],
  ["2027-05-31", "Uttara Bhadrapada, Revati", "Ekadashi"],
  ["2027-06-01", "Revati", "Ekadashi"],
  ["2027-06-05", "Mrigashira", "Pratipada"],
  ["2027-06-09", "Magha", "Shashthi"],
  ["2027-06-10", "Magha", "Shashthi, Saptami"],
  ["2027-06-11", "Uttara Phalguni", "Ashtami, Navami"],
  ["2027-06-12", "Uttara Phalguni", "Navami"],
  ["2027-06-13", "Hasta", "Dashami"],
  ["2027-06-15", "Swati", "Dwadashi"],
  ["2027-06-16", "Anuradha", "Trayodashi, Chaturdashi"],
  ["2027-06-17", "Anuradha", "Chaturdashi"],
  ["2027-06-19", "Mula", "Pratipada"],
  ["2027-06-21", "Uttara Ashadha", "Dwitiya, Tritiya"],
  ["2027-06-26", "Uttara Bhadrapada", "Saptami, Ashtami"],
  ["2027-06-27", "Uttara Bhadrapada, Revati", "Ashtami, Navami"],
  ["2027-06-28", "Revati", "Navami"],
  ["2027-07-01", "Rohini", "Trayodashi"],
  ["2027-07-07", "Magha", "Panchami"],
  ["2027-07-08", "Uttara Phalguni", "Shashthi"],
  ["2027-07-09", "Uttara Phalguni", "Shashthi, Saptami"],
  ["2027-07-11", "Swati", "Navami"],
  ["2027-07-12", "Swati", "Navami, Dashami"],
  ["2027-11-10", "Uttara Bhadrapada", "Dwadashi"],
  ["2027-11-11", "Revati", "Trayodashi"],
  ["2027-11-15", "Rohini", "Dwitiya"],
  ["2027-11-16", "Mrigashira", "Tritiya, Chaturthi"],
  ["2027-11-20", "Magha", "Ashtami"],
  ["2027-11-21", "Magha", "Ashtami, Navami"],
  ["2027-11-23", "Uttara Phalguni, Hasta", "Ekadashi"],
  ["2027-11-24", "Hasta", "Ekadashi, Dwadashi"],
  ["2027-11-25", "Swati", "Trayodashi"],
  ["2027-11-26", "Swati", "Trayodashi"],
  ["2027-11-29", "Mula", "Dwitiya"],
  ["2027-12-02", "Uttara Ashadha", "Panchami"],
  ["2027-12-07", "Uttara Bhadrapada", "Navami, Dashami"],
  ["2027-12-08", "Uttara Bhadrapada", "Dashami"],
  ["2027-12-09", "Revati", "Ekadashi"],
  ["2027-12-12", "Rohini", "Chaturdashi"],
  ["2027-12-13", "Rohini, Mrigashira", "Purnima, Pratipada"],
  ["2027-12-14", "Mrigashira", "Pratipada"],
];

/** Griha Pravesh dates, Kolkata (45 as Drik counts them). */
export const GRIHA_ROWS: Row[] = [
  ["2027-01-01", "Chitra", "Dashami"],
  ["2027-02-10", "Uttara Bhadrapada, Revati", "Panchami"],
  ["2027-02-11", "Revati", "Panchami"],
  ["2027-02-15", "Rohini, Mrigashira", "Dashami"],
  ["2027-02-22", "Uttara Phalguni", "Dwitiya, Tritiya"],
  ["2027-02-24", "Chitra", "Panchami"],
  ["2027-02-25", "Chitra", "Panchami"],
  ["2027-02-27", "Anuradha", "Saptami"],
  ["2027-03-03", "Uttara Ashadha", "Ekadashi"],
  ["2027-03-04", "Uttara Ashadha", "Ekadashi"],
  ["2027-03-10", "Uttara Bhadrapada, Revati", "Dwitiya, Tritiya"],
  ["2027-03-11", "Revati", "Tritiya"],
  ["2027-03-15", "Rohini, Mrigashira", "Saptami"],
  ["2027-03-22", "Uttara Phalguni", "Pratipada"],
  ["2027-03-24", "Chitra", "Dwitiya, Tritiya"],
  ["2027-03-26", "Anuradha", "Panchami"],
  ["2027-03-27", "Anuradha", "Panchami"],
  ["2027-03-31", "Uttara Ashadha", "Dashami"],
  ["2027-04-01", "Uttara Ashadha", "Dashami"],
  ["2027-05-07", "Rohini", "Dwitiya"],
  ["2027-05-08", "Rohini, Mrigashira", "Dwitiya, Tritiya"],
  ["2027-05-15", "Uttara Phalguni", "Dashami, Ekadashi"],
  ["2027-05-17", "Chitra", "Trayodashi"],
  ["2027-05-20", "Anuradha", "Pratipada"],
  ["2027-05-21", "Anuradha", "Pratipada"],
  ["2027-05-24", "Uttara Ashadha", "Panchami"],
  ["2027-05-31", "Uttara Bhadrapada, Revati", "Dashami, Ekadashi"],
  ["2027-06-05", "Mrigashira", "Dwitiya"],
  ["2027-06-14", "Chitra", "Ekadashi"],
  ["2027-06-16", "Anuradha", "Trayodashi"],
  ["2027-06-21", "Uttara Ashadha", "Dwitiya, Tritiya"],
  ["2027-06-26", "Uttara Bhadrapada", "Saptami"],
  ["2027-11-01", "Anuradha", "Tritiya"],
  ["2027-11-04", "Uttara Ashadha", "Saptami"],
  ["2027-11-05", "Uttara Ashadha", "Saptami"],
  ["2027-11-10", "Uttara Bhadrapada", "Ekadashi"],
  ["2027-11-11", "Revati", "Trayodashi"],
  ["2027-11-12", "Revati", "Trayodashi"],
  ["2027-11-15", "Rohini", "Dwitiya"],
  ["2027-11-22", "Uttara Phalguni", "Dashami"],
  ["2027-12-02", "Uttara Ashadha", "Panchami"],
  ["2027-12-08", "Uttara Bhadrapada, Revati", "Dashami, Ekadashi"],
  ["2027-12-09", "Revati", "Ekadashi"],
  ["2027-12-13", "Mrigashira", "Pratipada"],
  ["2027-12-22", "Chitra", "Dashami"],
];

const table = (rows: Row[], from: string, to: string, id: string, h2: L, caption: L, src: { title: string; url: string }): FestivalTable => {
  const rs = rows.filter((r) => r[0] >= from && r[0] <= to);
  return {
    id,
    h2,
    caption,
    columns: [l("তারিখ", "Date"), l("নক্ষত্র", "Nakshatra"), l("তিথি", "Tithi")],
    rows: rs.map(([d, n, t]) => ({ cells: [day(d), tr(n, NAK), tr(t, TITHI)], source: src })),
  };
};

export const VIVAH_2027: FestivalPage = {
  path: "/vivah-dates-2027",
  title: l("বিয়ের শুভ দিন ২০২৭: সব তারিখ, কলকাতা", "Marriage Dates 2027: Hindu Vivah Shubh Dates, Kolkata"),
  description: l(
    "২০২৭-এ বিয়ের শুভ দিন, কলকাতা অনুযায়ী: জানুয়ারি থেকে জুলাই আর নভেম্বর-ডিসেম্বরের প্রতিটা তারিখ, নক্ষত্র আর তিথিসহ। দ্রিক পঞ্চাঙ্গ থেকে।",
    "Hindu marriage dates for 2027 by Kolkata: every date from January to July and November to December, with nakshatra and tithi. From Drik Panchang.",
  ),
  h1: l("বিয়ের শুভ দিন ২০২৭: কবে কবে", "Marriage dates 2027: when are the shubh days"),
  lead: l(
    "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৭-এ বিয়ের শুভ দিন আছে জানুয়ারি থেকে মার্চের মাঝামাঝি, এপ্রিলের মাঝামাঝি থেকে জুলাই, আর নভেম্বর-ডিসেম্বরে; আগস্ট, সেপ্টেম্বর আর অক্টোবরে কোনো দিন নেই। প্রতিটা তারিখ নক্ষত্র আর তিথিসহ নিচে।",
    "Drik Panchang's Kolkata list has marriage dates in 2027 from January to mid-March, mid-April to July, and November to December. It prints no date for August, September or October. Each date is below with its nakshatra and tithi.",
  ),
  tables: [
    { ...table(VIVAH_ROWS, "2027-01-01", "2027-07-31", "vivah-jan-jul", l("জানুয়ারি-জুলাই ২০২৭", "January to July 2027"), l("বিয়ের শুভ দিন ২০২৭, কলকাতা: জানুয়ারি-জুলাই", "Marriage dates 2027, Kolkata: January to July"), VIVAH_SRC), note: l("মার্চের ১৫ থেকে এপ্রিলের ১৭ তারিখের মধ্যে তালিকায় কোনো দিন নেই। দ্রিক সেই দিনগুলোয় ‘নিষিদ্ধ সৌর মাস’ লিখেছে। একই দিনে দুটো নক্ষত্র বা তিথি থাকলে দুটোই দেখানো হয়েছে। বিয়ের লগ্নের সময় দ্রিকের পাতায় দেখো।", "Drik prints no date between 15 March and 17 April. For many such days it gives 'Prohibited Solar month' as the reason. Where a day has two nakshatras or tithis, both are shown. For the lagna time windows, see Drik's page.") },
    table(VIVAH_ROWS, "2027-11-01", "2027-12-31", "vivah-nov-dec", l("নভেম্বর-ডিসেম্বর ২০২৭", "November to December 2027"), l("বিয়ের শুভ দিন ২০২৭, কলকাতা: নভেম্বর-ডিসেম্বর", "Marriage dates 2027, Kolkata: November to December"), VIVAH_SRC),
  ],
  sections: [
    {
      id: "gaps",
      h2: l("আগস্ট থেকে অক্টোবর কেন ফাঁকা", "Why August to October are empty"),
      paras: [
        {
          text: l(
            "দ্রিকের পাতায় আগস্ট, সেপ্টেম্বর আর অক্টোবরের জন্য লেখা আছে ‘বিয়ের শুভ দিন নেই’। কারণ হিসেবে পাতায় দেখানো হয়েছে চাতুর্মাস্য (জুলাইয়ের মাঝামাঝি থেকে নভেম্বরের শুরু) আর শুক্র তারা অস্ত (২১ জুলাই থেকে ৯ সেপ্টেম্বর)।",
            "Drik's page prints 'no shubh day for marriage' for August, September and October. The reasons it labels are Chaturmas (mid-July to early November) and Shukra Tara Asta (21 July to 9 September).",
          ),
          source: VIVAH_SRC,
        },
      ],
    },
    {
      id: "panjika",
      h2: l("বাড়ির পঞ্জিকা আর পুরোহিতের সঙ্গে মিলিয়ে নাও", "Check your panjika and purohit"),
      paras: [
        {
          text: l(
            "এই তালিকা দ্রিক পঞ্চাঙ্গের হিসেবে। বাংলার পঞ্জিকা (গুপ্তপ্রেস, বিশুদ্ধ সিদ্ধান্ত) আর বাড়ির পুরোহিত আলাদা নিয়মে দিন বাছতে পারেন, তাই কিছু তারিখ মিলবে না। আমরা কোনো বাংলা পঞ্জিকার তারিখ যাচাই করিনি। পাকা করার আগে অবশ্যই পুরোহিতের সঙ্গে কথা বলো।",
            "This list follows Drik Panchang. Bengali panjikas (Gupta Press, Bisuddha Siddhanta) and your family purohit may use different rules, so some dates will not match. We have not checked any Bengali panjika's dates. Confirm with your purohit before fixing a date.",
          ),
        },
        {
          text: l(
            "ঢাকার জন্য দ্রিকের আলাদা পাতা আছে, কিন্তু আমরা সেটা পড়তে পারিনি (যাচাই-পাতায় আটকে গিয়েছিল), তাই ঢাকার কোনো তারিখ এখানে নেই। ঢাকার পাতা নিজে খুলে দেখো।",
            "Drik has a separate Dhaka page, but we could not read it (it stopped at a verification prompt), so no Dhaka dates are given here. Open the Dhaka page yourself.",
          ),
        },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [{ text: l("২০২৭, কলকাতা, ১ নভেম্বর ২০২৬-এ দেখা।", "2027, Kolkata, read on 1 Nov 2026."), source: VIVAH_SRC }],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ বিয়ের শুভ দিন কবে কবে?", "When are the marriage dates in 2027?"),
      a: l("কলকাতার দ্রিক তালিকায় প্রথম দিন শুক্রবার ১৫ জানুয়ারি, শেষ দিন মঙ্গলবার ১৪ ডিসেম্বর। বছরে মোট কয়েকটা মাস ফাঁকা; উপরের তালিকা দেখো।", "In Drik's Kolkata list the first date is Friday 15 January and the last is Tuesday 14 December. Several months are empty; see the tables above."),
    },
    {
      q: l("২০২৭-এ মে মাসে বিয়ের দিন কটা?", "How many marriage dates are there in May 2027?"),
      a: l("দ্রিকের কলকাতা তালিকায় মে মাসে আঠারোটা দিন, ৪ মে থেকে ৩১ মে পর্যন্ত। এটাই বছরের সবচেয়ে ভরা মাস।", "Drik's Kolkata list has 18 dates in May, from 4 to 31 May. It is the fullest month of the year."),
    },
    {
      q: l("২০২৭-এ আগস্ট-সেপ্টেম্বরে বিয়ের দিন আছে?", "Are there marriage dates in August or September 2027?"),
      a: l("না। দ্রিক আগস্ট, সেপ্টেম্বর আর অক্টোবরে কোনো শুভ দিন দেখায়নি।", "No. Drik shows no shubh day for August, September or October."),
    },
    {
      q: l("বাংলার পঞ্জিকা মতে বিয়ের দিন কি একই?", "Are the dates the same in a Bengali panjika?"),
      a: l("সবসময় নয়। গুপ্তপ্রেস বা বিশুদ্ধ সিদ্ধান্ত আলাদা নিয়মে দিন বাছে। আমরা বাংলা পঞ্জিকা যাচাই করিনি; পুরোহিতের সঙ্গে মিলিয়ে নাও।", "Not always. Gupta Press and Bisuddha Siddhanta apply their own rules. We have not checked a Bengali panjika; confirm with your purohit."),
    },
  ],
  events: [],
  links: [
    { href: "/griha-pravesh-dates-2027", label: l("🏠 গৃহপ্রবেশ ২০২৭", "🏠 Griha Pravesh 2027"), primary: true },
    { href: "/bengali-calendar-1433", label: l("বাংলা ক্যালেন্ডার ১৪৩৩", "Bengali calendar 1433") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-11-01",
};

export const GRIHA_PRAVESH_2027: FestivalPage = {
  path: "/griha-pravesh-dates-2027",
  title: l("গৃহপ্রবেশ শুভ দিন ২০২৭: সব তারিখ, কলকাতা", "Griha Pravesh Dates 2027: Shubh Days for Kolkata"),
  description: l(
    "২০২৭-এ গৃহপ্রবেশের শুভ দিন, কলকাতা অনুযায়ী: ৪৫টা তারিখ, নক্ষত্র আর তিথিসহ। জুলাই থেকে অক্টোবর কোনো দিন নেই। দ্রিক পঞ্চাঙ্গ থেকে।",
    "Griha Pravesh (housewarming) dates for 2027 by Kolkata: 45 dates with nakshatra and tithi. None from July to October. From Drik Panchang.",
  ),
  h1: l("গৃহপ্রবেশ শুভ দিন ২০২৭: কবে কবে", "Griha Pravesh dates 2027: when are the shubh days"),
  lead: l(
    "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৭-এ গৃহপ্রবেশের শুভ দিন মোট ৪৫টা: প্রথমটা ১ জানুয়ারি, শেষটা ২২ ডিসেম্বর। জুলাই থেকে অক্টোবর কোনো দিন নেই।",
    "Drik Panchang's Kolkata list has 45 Griha Pravesh dates in 2027, from 1 January to 22 December. There are none from July to October.",
  ),
  tables: [
    { ...table(GRIHA_ROWS, "2027-01-01", "2027-06-30", "griha-jan-jun", l("জানুয়ারি-জুন ২০২৭", "January to June 2027"), l("গৃহপ্রবেশের শুভ দিন ২০২৭, কলকাতা: জানুয়ারি-জুন", "Griha Pravesh dates 2027, Kolkata: January to June"), GRIHA_SRC), note: l("একই দিনে দুটো নক্ষত্র বা তিথি থাকলে দুটোই দেখানো হয়েছে। গৃহপ্রবেশের সময়ের জন্য দ্রিকের পাতা দেখো।", "Where a day has two nakshatras or tithis, both are shown. For Griha Pravesh timings, see Drik's page.") },
    table(GRIHA_ROWS, "2027-11-01", "2027-12-31", "griha-nov-dec", l("নভেম্বর-ডিসেম্বর ২০২৭", "November to December 2027"), l("গৃহপ্রবেশের শুভ দিন ২০২৭, কলকাতা: নভেম্বর-ডিসেম্বর", "Griha Pravesh dates 2027, Kolkata: November to December"), GRIHA_SRC),
  ],
  sections: [
    {
      id: "how",
      h2: l("কোন দিনগুলো বাদ", "Which days are left out"),
      paras: [
        {
          text: l(
            "দ্রিক বলছে ‘পঞ্চাঙ্গ শুদ্ধি’ করে তালিকা বানানো: শুক্র বা গুরু তারা অস্ত গেলে সেই দিন বাদ, আর অধিক মাসের সব দিনও বাদ। পাতায় বাদ-পড়া দিনের কারণ হিসেবে ‘নিষিদ্ধ বার’, ‘নিষিদ্ধ তিথি’ আর ‘শুক্র তারা অস্ত’ও লেখা আছে। শুক্র তারা অস্ত দেখানো হয়েছে প্রায় ২১ জুলাই থেকে ৬ সেপ্টেম্বর।",
            "Drik says the list is made after 'Panchang Shuddhi': days when Shukra Tara or Guru Tara is set are removed, and so are all days of a leap lunar month. Reasons it prints for removed days include 'Prohibited Weekday', 'Prohibited Tithi' and 'Shukra Tara Asta'. It shows Shukra Tara Asta from about 21 July to 6 September.",
          ),
          source: GRIHA_SRC,
        },
      ],
    },
    {
      id: "panjika",
      h2: l("বাড়ির পঞ্জিকা আর পুরোহিতের সঙ্গে মিলিয়ে নাও", "Check your panjika and purohit"),
      paras: [
        {
          text: l(
            "দ্রিক নিজেই বলেছে দিন ঠিক করার আগে জ্ঞানী জ্যোতিষীর পরামর্শ নিতে। বাংলার পঞ্জিকা (গুপ্তপ্রেস, বিশুদ্ধ সিদ্ধান্ত) আর পুরোহিত আলাদা দিন দিতে পারেন; আমরা কোনো বাংলা পঞ্জিকা যাচাই করিনি। ঢাকার দ্রিক পাতা আমরা পড়তে পারিনি, তাই ঢাকার তারিখ নেই।",
            "Drik itself advises consulting a learned astrologer before fixing a date. Bengali panjikas (Gupta Press, Bisuddha Siddhanta) and your purohit may give different days; we have not checked any Bengali panjika. We could not read Drik's Dhaka page, so no Dhaka dates are given.",
          ),
          source: GRIHA_SRC,
        },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [{ text: l("২০২৭, কলকাতা, ১ নভেম্বর ২০২৬-এ দেখা।", "2027, Kolkata, read on 1 Nov 2026."), source: GRIHA_SRC }],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ গৃহপ্রবেশের শুভ দিন কবে?", "When are the Griha Pravesh dates in 2027?"),
      a: l("কলকাতার দ্রিক তালিকায় ৪৫টা দিন: শুক্রবার ১ জানুয়ারি থেকে বুধবার ২২ ডিসেম্বর। পুরো তালিকা উপরে।", "Drik's Kolkata list has 45 dates, from Friday 1 January to Wednesday 22 December. The full list is above."),
    },
    {
      q: l("২০২৭-এ বর্ষায় গৃহপ্রবেশের দিন আছে?", "Are there Griha Pravesh dates from July to October 2027?"),
      a: l("না। দ্রিক জুলাই, আগস্ট, সেপ্টেম্বর আর অক্টোবরে কোনো দিন দেখায়নি।", "No. Drik lists none for July, August, September or October."),
    },
    {
      q: l("নভেম্বর ২০২৭-এ গৃহপ্রবেশ কবে?", "When is Griha Pravesh in November 2027?"),
      a: l("আটটা দিন: ১, ৪, ৫, ১০, ১১, ১২, ১৫ আর ২২ নভেম্বর।", "Eight dates: 1, 4, 5, 10, 11, 12, 15 and 22 November."),
    },
  ],
  events: [],
  links: [
    { href: "/vivah-dates-2027", label: l("💍 বিয়ের শুভ দিন ২০২৭", "💍 Marriage dates 2027"), primary: true },
    { href: "/bengali-calendar-1433", label: l("বাংলা ক্যালেন্ডার ১৪৩৩", "Bengali calendar 1433") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-11-01",
};
