// Bengali calendar 1433 (/bengali-calendar-1433). Bangladesh: the revised calendar's fixed month start dates
// (Wikipedia, "Bengali calendars", 2019– column). West Bengal: Sankranti dates and times as printed by Drik
// Panchang for Kolkata (2026 and 2027 lists); Drik prints no day-1 dates except Pohela Boishakh, so none are
// derived here. Fetched 31 Oct 2026. Type imports only (tested).

import type { L, Lang } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Bengali calendars (revised calendar, 2019–)", url: "https://en.wikipedia.org/wiki/Bengali_calendars" };
const SANK = (y: number) => ({ title: `Drik Panchang, Sankranti ${y} (Kolkata)`, url: `https://www.drikpanchang.com/sankranti/sankranti.html?geoname-id=1275004&year=${y}` });
const BENGALI_2026 = { title: "Drik Panchang, Bengali calendar 2026 (Kolkata)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1275004&year=2026" };

/** Bangladesh's revised calendar: [Bangla name, English name, days, start month (1–12), start day]. Falgun has 30 days in leap years. */
export const BD_MONTHS: [string, string, string, number, number][] = [
  ["বৈশাখ", "Boishakh", "31", 4, 14],
  ["জ্যৈষ্ঠ", "Joishtho", "31", 5, 15],
  ["আষাঢ়", "Asharh", "31", 6, 15],
  ["শ্রাবণ", "Srabon", "31", 7, 16],
  ["ভাদ্র", "Bhadro", "31", 8, 16],
  ["আশ্বিন", "Ashwin", "31", 9, 16],
  ["কার্তিক", "Kartik", "30", 10, 17],
  ["অগ্রহায়ণ", "Agrahayan", "30", 11, 16],
  ["পৌষ", "Poush", "30", 12, 16],
  ["মাঘ", "Magh", "30", 1, 15],
  ["ফাল্গুন", "Falgun", "29/30", 2, 14],
  ["চৈত্র", "Chaitra", "30", 3, 15],
];

/**
 * Today's date in Bangladesh's revised Bangla calendar, read off the fixed month start dates above
 * (`today` is a Dhaka date, YYYY-MM-DD). The year turns on 14 April: 14 April 2026 is 1 Boishakh 1433.
 */
export function bdBanglaDate(today: string): { day: number; month: number; year: number } {
  const [y, m, d] = today.split("-").map(Number);
  const startYear = m > 4 || (m === 4 && d >= 14) ? y : y - 1;
  const t = Date.UTC(y, m - 1, d);
  let idx = 0;
  let start = Date.UTC(startYear, 3, 14);
  BD_MONTHS.forEach(([, , , sm, sd], i) => {
    const s = Date.UTC(sm >= 4 ? startYear : startYear + 1, sm - 1, sd);
    if (s <= t) {
      idx = i;
      start = s;
    }
  });
  return { day: Math.round((t - start) / 86_400_000) + 1, month: idx, year: startYear - 593 };
}

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const bnNum = (s: string | number) => String(s).replace(/\d/g, (x) => BN_DIGITS[Number(x)]);
const EN_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BN_MONTHS = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];

export function banglaDateLabel(x: { day: number; month: number; year: number }, lang: Lang): string {
  const [bn, en] = BD_MONTHS[x.month];
  return lang === "bn" ? `${bnNum(x.day)} ${bn} ${bnNum(x.year)}` : `${x.day} ${en} ${x.year}`;
}

/** West Bengal: the Sun's entry into each sign before a Bengali month, as Drik prints it for Kolkata. [next month, date, time]. */
const WB_SANKRANTI: [number, string, string, string, number][] = [
  [0, "2026-04-14", "সকাল ৯:৩৮", "9:38 am", 2026],
  [1, "2026-05-15", "সকাল ৬:২৮", "6:28 am", 2026],
  [2, "2026-06-15", "দুপুর ১২:৫৯", "12:59 pm", 2026],
  [3, "2026-07-16", "রাত ১১:৪৫", "11:45 pm", 2026],
  [4, "2026-08-17", "সকাল ৮:০৪", "8:04 am", 2026],
  [5, "2026-09-17", "সকাল ৭:৫৮", "7:58 am", 2026],
  [6, "2026-10-17", "রাত ৭:৫৭", "7:57 pm", 2026],
  [7, "2026-11-16", "রাত ৭:৪৮", "7:48 pm", 2026],
  [8, "2026-12-16", "সকাল ১০:২৯", "10:29 am", 2026],
  [9, "2027-01-14", "রাত ৯:১৪", "9:14 pm", 2027],
  [10, "2027-02-13", "সকাল ১০:১৩", "10:13 am", 2027],
  [11, "2027-03-15", "সকাল ৭:০৪", "7:04 am", 2027],
];

const dateL = (iso: string): L => {
  const [, m, d] = iso.split("-").map(Number);
  return { bn: `${bnNum(d)} ${BN_MONTHS[m - 1]}`, en: `${d} ${EN_MONTHS[m - 1]}` };
};

export const BENGALI_CALENDAR_1433: FestivalPage = {
  path: "/bengali-calendar-1433",
  title: l("বাংলা ক্যালেন্ডার ১৪৩৩: আজ বাংলা কত তারিখ, মাস শুরুর দিন", "Bengali Calendar 1433: Today's Bangla Date & Month Dates"),
  description: l(
    "বাংলা সন ১৪৩৩: আজ বাংলা কত তারিখ, বাংলাদেশের প্রতিটা মাস শুরুর তারিখ আর পশ্চিমবঙ্গের সংক্রান্তির দিন-সময়, সূত্রসহ।",
    "Bengali year 1433: today's Bangla date, the start date of every month in Bangladesh and the Sankranti dates and times for West Bengal, with sources.",
  ),
  h1: l("বাংলা ক্যালেন্ডার ১৪৩৩", "Bengali calendar 1433"),
  lead: l(
    "বঙ্গাব্দ ১৪৩৩ শুরু হয়েছে এপ্রিল ২০২৬-এ: বাংলাদেশে ১৪ এপ্রিল, পশ্চিমবঙ্গে ১৫ এপ্রিল। বাংলাদেশের সংশোধিত ক্যালেন্ডারে প্রতিটা মাস নির্দিষ্ট তারিখে শুরু হয়; পশ্চিমবঙ্গে মাস বদলায় সংক্রান্তি ধরে, পঞ্জিকা অনুযায়ী।",
    "Bangabda 1433 began in April 2026: on 14 April in Bangladesh and 15 April in West Bengal. Bangladesh's revised calendar starts every month on a fixed date; in West Bengal the month turns with the Sankranti, as the panjika sets it.",
  ),
  tables: [
    {
      id: "bangladesh",
      h2: l("বাংলাদেশ: মাস শুরুর তারিখ", "Bangladesh: when each month starts"),
      caption: l("সংশোধিত বাংলা ক্যালেন্ডার (প্রতি বছর একই)", "Revised Bangla calendar (the same every year)"),
      columns: [l("মাস", "Month"), l("শুরু", "Starts"), l("দিন", "Days")],
      rows: BD_MONTHS.map(([bn, en, days, sm, sd]) => ({
        cells: [l(bn, en), { bn: `${bnNum(sd)} ${BN_MONTHS[sm - 1]}`, en: `${sd} ${EN_MONTHS[sm - 1]}` }, l(bnNum(days), days === "29/30" ? "29 (30 in leap years)" : days)],
        source: WIKI,
      })),
      note: l("ফাল্গুন অধিবর্ষে ৩০ দিনের।", "Falgun has 30 days in a leap year."),
    },
    {
      id: "west-bengal",
      h2: l("পশ্চিমবঙ্গ: সংক্রান্তি, ১৪৩৩", "West Bengal: the Sankrantis of 1433"),
      lead: l(
        "সূর্য পরের রাশিতে ঢোকার মুহূর্ত (কলকাতার সময়)। পশ্চিমবঙ্গের পঞ্জিকায় নতুন মাস শুরু হয় এর পর; প্রথম দিনটা তোমার পঞ্জিকা মিলিয়ে নিও। দ্রিক পঞ্চাঙ্গে পয়লা বৈশাখ ১৪৩৩ ছিল ১৫ এপ্রিল ২০২৬।",
        "The moment the Sun enters the next sign (Kolkata time). West Bengal panjikas start the new month after it; check your panjika for the exact first day. Drik Panchang gives Pohela Boishakh 1433 as 15 April 2026.",
      ),
      caption: l("কলকাতা (IST)", "Kolkata (IST)"),
      columns: [l("পরের মাস", "Month that follows"), l("সংক্রান্তির দিন", "Sankranti date"), l("সময়", "Time")],
      rows: WB_SANKRANTI.map(([idx, date, bnT, enT, y]) => ({
        cells: [l(BD_MONTHS[idx][0], BD_MONTHS[idx][1]), { bn: `${dateL(date).bn} ${bnNum(y)}`, en: `${dateL(date).en} ${y}` }, l(bnT, enT)],
        source: SANK(y),
      })),
    },
  ],
  sections: [
    {
      id: "why",
      h2: l("দুই বাংলায় তারিখ আলাদা কেন", "Why the two Bengals differ"),
      paras: [
        {
          text: l(
            "বাংলাদেশ সংশোধিত বাংলা ক্যালেন্ডার মেনে চলে, যেখানে বৈশাখ থেকে আশ্বিন ৩১ দিনের, কার্তিক থেকে চৈত্র ৩০ দিনের (ফাল্গুন ২৯, অধিবর্ষে ৩০), তাই প্রতি বছর একই তারিখে মাস শুরু। পশ্চিমবঙ্গের পঞ্জিকা সূর্যের রাশি বদল ধরে চলে, তাই মাসের প্রথম দিন বছর বছর এক-আধ দিন সরে যেতে পারে।",
            "Bangladesh follows the revised Bangla calendar: Boishakh to Ashwin have 31 days and Kartik to Chaitra 30 (Falgun 29, or 30 in a leap year), so each month starts on the same date every year. West Bengal's panjikas follow the Sun's entry into each sign, so the first day of a month can move by a day from year to year.",
          ),
          source: WIKI,
        },
        { text: l("দ্রিক পঞ্চাঙ্গে পয়লা বৈশাখ ১৪৩৩: ১৫ এপ্রিল ২০২৬।", "Drik Panchang: Pohela Boishakh 1433 was 15 April 2026."), source: BENGALI_2026 },
      ],
    },
  ],
  faq: [
    {
      q: l("এখন কোন বাংলা সন চলছে?", "Which Bengali year is it now?"),
      a: l("১৪৩৩ বঙ্গাব্দ, এপ্রিল ২০২৬ থেকে এপ্রিল ২০২৭। ১৪৩৪ শুরু হবে বাংলাদেশে ১৪ এপ্রিল আর পশ্চিমবঙ্গে ১৫ এপ্রিল ২০২৭।", "Bangabda 1433, from April 2026 to April 2027. 1434 begins on 14 April 2027 in Bangladesh and 15 April 2027 in West Bengal."),
    },
    {
      q: l("বাংলাদেশে অগ্রহায়ণ মাস কবে শুরু?", "When does Agrahayan start in Bangladesh?"),
      a: l("১৬ নভেম্বর, প্রতি বছর (সংশোধিত ক্যালেন্ডার)।", "16 November, every year (revised calendar)."),
    },
    {
      q: l("পৌষ মাস কবে শুরু?", "When does Poush start?"),
      a: l("বাংলাদেশে ১৬ ডিসেম্বর। পশ্চিমবঙ্গে ধনু সংক্রান্তি ১৬ ডিসেম্বর ২০২৬ সকাল ১০:২৯-এ; পৌষের প্রথম দিন পঞ্জিকা মিলিয়ে নিও।", "16 December in Bangladesh. In West Bengal the Dhanu Sankranti is at 10:29 am on 16 December 2026; check your panjika for the first day of Poush."),
    },
    {
      q: l("বাংলা মাসগুলোর নাম কী কী?", "What are the Bengali month names?"),
      a: l("বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ, ভাদ্র, আশ্বিন, কার্তিক, অগ্রহায়ণ, পৌষ, মাঘ, ফাল্গুন, চৈত্র।", "Boishakh, Joishtho, Asharh, Srabon, Bhadro, Ashwin, Kartik, Agrahayan, Poush, Magh, Falgun, Chaitra."),
    },
  ],
  events: [],
  links: [
    { href: "/poila-boishakh-2027", label: l("🎉 পয়লা বৈশাখ ১৪৩৪", "🎉 Poila Boishakh 1434"), primary: true },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
    { href: "/poush-sankranti-2027", label: l("পৌষ সংক্রান্তি ২০২৭", "Poush Sankranti 2027") },
  ],
  lastChecked: "2026-10-31",
};
