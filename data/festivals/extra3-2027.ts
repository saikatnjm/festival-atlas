// Annapurna Jayanti, Dattatreya Jayanti, Akshaya Navami, Shani Jayanti, Hariyali Teej and Parshuram Jayanti 2027.
// Dates and times copied from Drik Panchang's festival pages for Kolkata (fetched 2 Nov 2026); the Dhaka pages were
// blocked by Drik's bot check on two attempts, so Kolkata only. Shani Jayanti's date and tithi are from Drik's June
// 2027 festival list and its Amavasya times from Drik's 2027 Amavasya list. Background from Wikipedia. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const D = "https://www.drikpanchang.com/";
const KOL = "?geoname-id=1275004&year=2027";
const src = (title: string, path: string) => ({ title: `Drik Panchang, ${title} (Kolkata)`, url: `${D}${path}${KOL}` });

const ANNA = src("Annapurna Jayanti 2027", "hindu-goddesses/annapurna/annapurna-jayanti-date-time.html");
const DATTA = src("Dattatreya Jayanti 2027", "festivals/dattatreya/dattatreya-jayanti-date-time.html");
const NAVAMI = src("Akshaya Navami 2027", "festivals/akshaya-navami/akshaya-navami-date-time.html");
const SHANI_LIST = { title: "Drik Panchang, June 2027 festivals (Kolkata)", url: `${D}festivals/month/festivals-june.html?year=2027&geoname-id=1275004` };
const SHANI_AMAV = { title: "Drik Panchang, 2027 Amavasya dates for Kolkata", url: `${D}vrats/amavasyadates.html?year=2027&geoname-id=1275004` };
const TEEJ = src("Hariyali Teej 2027", "festivals/teej/hariyali-teej-date-time.html");
const PARSHU = src("Parashurama Jayanti 2027", "dashavatara/parashurama/parashurama-jayanti-date-time.html");
const WIKI = (t: string, p: string) => ({ title: `Wikipedia, ${t}`, url: `https://en.wikipedia.org/wiki/${p}` });

const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const PURNIMA = { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") };
const AMAVASYA = { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") };
const sib = (href: string, bn: string, en: string) => ({ href, label: l(bn, en) });

export const ANNAPURNA_JAYANTI_2027: FestivalPage = {
  path: "/annapurna-jayanti-2027",
  title: l("অন্নপূর্ণা জয়ন্তী ২০২৭: তারিখ আর পূর্ণিমা তিথির সময়", "Annapurna Jayanti 2027: Date and Purnima Tithi Time"),
  description: l(
    "অন্নপূর্ণা জয়ন্তী ২০২৭ সোমবার ১৩ ডিসেম্বর, অগ্রহায়ণ পূর্ণিমায়। কলকাতায় পূর্ণিমা তিথি শুরু আর শেষের সময়, দেবী অন্নপূর্ণার পরিচয়, সূত্রসহ।",
    "Annapurna Jayanti 2027 is Monday 13 December, on Margashirsha Purnima. Kolkata Purnima tithi start and end times and who Annapurna is, sourced.",
  ),
  h1: l("অন্নপূর্ণা জয়ন্তী ২০২৭: কবে, কখন", "Annapurna Jayanti 2027: when and what time"),
  lead: l(
    "অন্নপূর্ণা জয়ন্তী ২০২৭-এ সোমবার ১৩ ডিসেম্বর, অগ্রহায়ণ (মার্গশীর্ষ) মাসের পূর্ণিমায়। কলকাতায় পূর্ণিমা তিথি ১২ ডিসেম্বর রাত ১১:৫৪ থেকে ১৩ ডিসেম্বর রাত ৯:৩৮।",
    "Annapurna Jayanti falls on Monday 13 December 2027, on the Margashirsha full moon. In Kolkata the Purnima tithi runs from 11:54 pm on 12 December to 9:38 pm on 13 December.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST।", "Kolkata times are IST."),
    rows: {
      wb: [{ day: l("সোম ১৩ ডিসেম্বর", "Mon 13 Dec"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১২ ডিসেম্বর রাত ১১:৫৪ থেকে ১৩ ডিসেম্বর রাত ৯:৩৮", "12 Dec 11:54 pm to 13 Dec 9:38 pm"), source: ANNA }],
    },
    note: l("ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে এখনও পাওয়া যায়নি। পঞ্জিকা মিলিয়ে নিও।", "Dhaka times aren't available yet, as Drik's Dhaka page could not be read. Check your panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("দেবী অন্নপূর্ণা", "Goddess Annapurna"),
      paras: [
        {
          text: l(
            "অন্নপূর্ণা অন্ন আর পুষ্টির দেবী, পার্বতীর এক রূপ। কাশীর (বারাণসী) দেবী হিসেবে তিনি বিশ্বেশ্বর শিবের পাশে পূজিত। বাংলায় ব্যারাকপুরে ১৮৭৫ সালে রানি রাসমণির মেয়ে জগদম্বা দেবীর গড়া অন্নপূর্ণা মন্দির আছে।",
            "Annapurna is the goddess of food and nourishment, a form of Parvati. As the goddess of Kashi (Varanasi) she is worshipped beside Shiva as Vishweshwar. In Bengal, the Annapurna temple in Barrackpore was built in 1875 by Jagadamba Devi, daughter of Rani Rashmoni.",
          ),
          source: WIKI("Annapurna (goddess)", "Annapurna_(goddess)"),
        },
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ অন্নপূর্ণা জয়ন্তীকে অগ্রহায়ণ মাসে রাখে আর বারাণসীর অন্নপূর্ণা মন্দিরের উৎসবের কথা লেখে।",
            "Drik Panchang places Annapurna Jayanti in the Margashirsha month and describes the celebrations at the Annapurna temple in Varanasi.",
          ),
          source: ANNA,
        },
      ],
      tips: [l("পঞ্জিকা অনুযায়ী পুজোর সময় ঠিক করে নিও।", "Fix your puja time from your own panjika.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ অন্নপূর্ণা জয়ন্তী কবে?", "When is Annapurna Jayanti in 2027?"), a: l("সোমবার ১৩ ডিসেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Monday 13 December 2027 (Drik Panchang, Kolkata).") },
    { q: l("অন্নপূর্ণা জয়ন্তীর পূর্ণিমা তিথি কখন?", "What time is the Purnima tithi for Annapurna Jayanti 2027 in Kolkata?"), a: l("১২ ডিসেম্বর রাত ১১:৫৪ থেকে ১৩ ডিসেম্বর রাত ৯:৩৮।", "From 11:54 pm on 12 December to 9:38 pm on 13 December.") },
    { q: l("অন্নপূর্ণা কে?", "Who is Goddess Annapurna?"), a: l("অন্ন আর পুষ্টির দেবী, পার্বতীর এক রূপ; কাশীর অধিষ্ঠাত্রী দেবী।", "The goddess of food and nourishment, a form of Parvati, and the goddess of Kashi.") },
  ],
  events: [{ name: l("অন্নপূর্ণা জয়ন্তী ২০২৭", "Annapurna Jayanti 2027"), start: "2027-12-13", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const } }],
  links: [CAL, PURNIMA, sib("/dattatreya-jayanti-2027", "দত্তাত্রেয় জয়ন্তী ২০২৭", "Dattatreya Jayanti 2027")],
  lastChecked: "2026-11-02",
};

export const DATTATREYA_JAYANTI_2027: FestivalPage = {
  path: "/dattatreya-jayanti-2027",
  title: l("দত্তাত্রেয় জয়ন্তী ২০২৭: তারিখ আর পূর্ণিমা তিথির সময়", "Dattatreya Jayanti 2027: Date and Purnima Tithi Time"),
  description: l(
    "দত্তাত্রেয় জয়ন্তী ২০২৭ সোমবার ১৩ ডিসেম্বর। কলকাতায় পূর্ণিমা তিথি শুরু আর শেষের সময়, দত্তাত্রেয় কে, সূত্রসহ।",
    "Dattatreya Jayanti 2027 is Monday 13 December. Kolkata Purnima tithi start and end times and who Dattatreya is, sourced.",
  ),
  h1: l("দত্তাত্রেয় জয়ন্তী ২০২৭: কবে, কখন", "Dattatreya Jayanti 2027: when and what time"),
  lead: l(
    "দত্তাত্রেয় জয়ন্তী ২০২৭-এ সোমবার ১৩ ডিসেম্বর। কলকাতায় পূর্ণিমা তিথি ১২ ডিসেম্বর রাত ১১:৫৪ থেকে ১৩ ডিসেম্বর রাত ৯:৩৮।",
    "Dattatreya Jayanti falls on Monday 13 December 2027. In Kolkata the Purnima tithi runs from 11:54 pm on 12 December to 9:38 pm on 13 December.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST।", "Kolkata times are IST."),
    rows: {
      wb: [{ day: l("সোম ১৩ ডিসেম্বর", "Mon 13 Dec"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১২ ডিসেম্বর রাত ১১:৫৪ থেকে ১৩ ডিসেম্বর রাত ৯:৩৮", "12 Dec 11:54 pm to 13 Dec 9:38 pm"), source: DATTA }],
    },
    note: l("ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে এখনও পাওয়া যায়নি। পঞ্জিকা মিলিয়ে নিও।", "Dhaka times aren't available yet, as Drik's Dhaka page could not be read. Check your panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("দত্তাত্রেয় কে", "Who is Dattatreya"),
      paras: [
        {
          text: l(
            "দত্তাত্রেয় আদর্শ সন্ন্যাসী, যোগের এক অধীশ্বর হিসেবে পূজিত। তাঁকে ব্রহ্মা, বিষ্ণু আর শিবের মিলিত রূপ বা অবতার বলা হয়। পুরাণ মতে বাবা ঋষি অত্রি, মা অনসূয়া; তাঁর জন্মের বিবরণ নানা রকম। দত্ত জয়ন্তী মার্গশীর্ষ মাসে পালিত হয়।",
            "Dattatreya is a model renunciant, venerated as one of the lords of yoga. He is regarded as an avatar and combined form of Brahma, Vishnu and Shiva. The Puranas usually name the sage Atri as his father and Anasuya as his mother, though accounts of his birth vary. Datta Jayanti is observed in the month of Margashirsha.",
          ),
          source: WIKI("Dattatreya", "Dattatreya"),
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ দত্তাত্রেয় জয়ন্তী কবে?", "When is Dattatreya Jayanti in 2027?"), a: l("সোমবার ১৩ ডিসেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Monday 13 December 2027 (Drik Panchang, Kolkata).") },
    { q: l("দত্তাত্রেয় জয়ন্তীর পূর্ণিমা তিথি কখন?", "What time is the Purnima tithi for Dattatreya Jayanti 2027?"), a: l("কলকাতায় ১২ ডিসেম্বর রাত ১১:৫৪ থেকে ১৩ ডিসেম্বর রাত ৯:৩৮।", "Kolkata: 11:54 pm on 12 December to 9:38 pm on 13 December.") },
    { q: l("দত্তাত্রেয়ের বাবা-মা কে?", "Who are Dattatreya's parents?"), a: l("পুরাণ মতে ঋষি অত্রি আর অনসূয়া।", "The Puranas usually name the sage Atri and Anasuya.") },
  ],
  events: [{ name: l("দত্তাত্রেয় জয়ন্তী ২০২৭", "Dattatreya Jayanti 2027"), start: "2027-12-13", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const } }],
  links: [CAL, PURNIMA, sib("/annapurna-jayanti-2027", "অন্নপূর্ণা জয়ন্তী ২০২৭", "Annapurna Jayanti 2027")],
  lastChecked: "2026-11-02",
};

export const AKSHAYA_NAVAMI_2027: FestivalPage = {
  path: "/akshaya-navami-2027",
  title: l("অক্ষয় নবমী ২০২৭: তারিখ, পূর্বাহ্ণ মুহূর্ত, নবমী তিথি", "Akshaya Navami 2027: Date, Purvahna Muhurat, Tithi"),
  description: l(
    "অক্ষয় নবমী ২০২৭ রবিবার ৭ নভেম্বর। কলকাতায় পূর্বাহ্ণ মুহূর্ত সকাল ৫:৪৪ থেকে ১১:২০, কার্তিক শুক্লা নবমী তিথির সময়, সূত্রসহ।",
    "Akshaya Navami 2027 is Sunday 7 November. Kolkata Purvahna muhurat 5:44 am to 11:20 am and Kartika Shukla Navami tithi times, sourced.",
  ),
  h1: l("অক্ষয় নবমী ২০২৭: কবে, কখন", "Akshaya Navami 2027: when and what time"),
  lead: l(
    "অক্ষয় নবমী ২০২৭-এ রবিবার ৭ নভেম্বর, কার্তিক শুক্লা নবমীতে। কলকাতায় পূর্বাহ্ণ মুহূর্ত সকাল ৫:৪৪ থেকে ১১:২০।",
    "Akshaya Navami falls on Sunday 7 November 2027, on Kartika Shukla Navami. In Kolkata the Purvahna muhurat is 5:44 am to 11:20 am.",
  ),
  timings: {
    h2: l("পূর্বাহ্ণ মুহূর্ত আর নবমী তিথি", "Purvahna muhurat and Navami tithi"),
    lead: l("কলকাতার সময় IST।", "Kolkata times are IST."),
    rows: {
      wb: [
        { day: l("রবি ৭ নভেম্বর", "Sun 7 Nov"), what: l("অক্ষয় নবমী পূর্বাহ্ণ মুহূর্ত", "Akshaya Navami Purvahna muhurat"), when: l("সকাল ৫:৪৪ থেকে ১১:২০ (৫ ঘণ্টা ৩৬ মিনিট)", "5:44 am to 11:20 am (5 hours 36 mins)"), source: NAVAMI },
        { day: l("৭–৮ নভেম্বর", "7–8 Nov"), what: l("নবমী তিথি", "Navami tithi"), when: l("৭ নভেম্বর রাত ২:৪৯ থেকে ৮ নভেম্বর ভোর ৫:২৩", "7 Nov 2:49 am to 8 Nov 5:23 am"), source: NAVAMI },
      ],
    },
    note: l("ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে এখনও পাওয়া যায়নি। পঞ্জিকা মিলিয়ে নিও।", "Dhaka times aren't available yet, as Drik's Dhaka page could not be read. Check your panjika."),
  },
  sections: [
    {
      id: "date",
      h2: l("দ্রিক পঞ্চাঙ্গ কী লেখে", "What Drik Panchang prints"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ ২০২৭-এর অক্ষয় নবমী রাখে রবিবার ৭ নভেম্বর, তিথি কার্তিক শুক্লা নবমী। পুজোর সময় হিসেবে দেয় পূর্বাহ্ণ মুহূর্ত।",
            "Drik Panchang lists Akshaya Navami 2027 on Sunday 7 November, tithi Kartika Shukla Navami, and gives the Purvahna muhurat as the puja time.",
          ),
          source: NAVAMI,
        },
      ],
      tips: [l("পঞ্জিকা অনুযায়ী পুজোর সময় ঠিক করে নিও।", "Fix your puja time from your own panjika.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ অক্ষয় নবমী কবে?", "When is Akshaya Navami in 2027?"), a: l("রবিবার ৭ নভেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Sunday 7 November 2027 (Drik Panchang, Kolkata).") },
    { q: l("অক্ষয় নবমীর পূর্বাহ্ণ মুহূর্ত কখন?", "What is the Akshaya Navami 2027 puja muhurat in Kolkata?"), a: l("সকাল ৫:৪৪ থেকে ১১:২০, মোট ৫ ঘণ্টা ৩৬ মিনিট।", "5:44 am to 11:20 am, a duration of 5 hours 36 minutes.") },
    { q: l("অক্ষয় নবমীর নবমী তিথি কখন?", "When does the Navami tithi start and end for Akshaya Navami 2027?"), a: l("৭ নভেম্বর রাত ২:৪৯ থেকে ৮ নভেম্বর ভোর ৫:২৩।", "From 2:49 am on 7 November to 5:23 am on 8 November.") },
  ],
  events: [{ name: l("অক্ষয় নবমী ২০২৭", "Akshaya Navami 2027"), start: "2027-11-07", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const } }],
  links: [CAL, sib("/akshaya-tritiya-2027", "অক্ষয় তৃতীয়া ২০২৭", "Akshaya Tritiya 2027"), sib("/shani-jayanti-2027", "শনি জয়ন্তী ২০২৭", "Shani Jayanti 2027")],
  lastChecked: "2026-11-02",
};

export const SHANI_JAYANTI_2027: FestivalPage = {
  path: "/shani-jayanti-2027",
  title: l("শনি জয়ন্তী ২০২৭: তারিখ আর অমাবস্যা তিথির সময়", "Shani Jayanti 2027: Date and Amavasya Tithi Time"),
  description: l(
    "শনি জয়ন্তী ২০২৭ শুক্রবার ৪ জুন, জ্যৈষ্ঠ কৃষ্ণা অমাবস্যায়। কলকাতায় অমাবস্যা তিথি শুরু আর শেষের সময়, শনিদেব কে, সূত্রসহ।",
    "Shani Jayanti 2027 is Friday 4 June, on Jyeshtha Krishna Amavasya. Kolkata Amavasya tithi start and end times and who Shani is, sourced.",
  ),
  h1: l("শনি জয়ন্তী ২০২৭: কবে, কখন", "Shani Jayanti 2027: when and what time"),
  lead: l(
    "শনি জয়ন্তী ২০২৭-এ শুক্রবার ৪ জুন, জ্যৈষ্ঠ কৃষ্ণা অমাবস্যায়। কলকাতায় অমাবস্যা তিথি ৪ জুন ভোর ৪:০৫ থেকে ৫ জুন রাত ১:০৯।",
    "Shani Jayanti falls on Friday 4 June 2027, on Jyeshtha Krishna Amavasya. In Kolkata the Amavasya tithi runs from 4:05 am on 4 June to 1:09 am on 5 June.",
  ),
  timings: {
    h2: l("তারিখ আর অমাবস্যা তিথি", "Date and Amavasya tithi"),
    lead: l("কলকাতার সময় IST।", "Kolkata times are IST."),
    rows: {
      wb: [
        { day: l("শুক্র ৪ জুন", "Fri 4 Jun"), what: l("শনি জয়ন্তী, জ্যৈষ্ঠ কৃষ্ণা অমাবস্যা", "Shani Jayanti, Jyeshtha Krishna Amavasya"), when: l("৪ জুন ২০২৭", "4 Jun 2027"), source: SHANI_LIST },
        { day: l("৪–৫ জুন", "4–5 Jun"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("৪ জুন ভোর ৪:০৫ থেকে ৫ জুন রাত ১:০৯", "4 Jun 4:05 am to 5 Jun 1:09 am"), source: SHANI_AMAV },
      ],
    },
    note: l("ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে এখনও পাওয়া যায়নি। পঞ্জিকা মিলিয়ে নিও।", "Dhaka times aren't available yet, as Drik's Dhaka page could not be read. Check your panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("শনিদেব", "Who is Shani"),
      paras: [
        {
          text: l(
            "শনি শনিগ্রহের দেবতা, নবগ্রহের একজন, কর্ম আর সময়ের দেবতা হিসেবে পরিচিত। তিনি সূর্য আর ছায়ার পুত্র; কোনো কোনো বিবরণে বলরাম আর রেবতীর পুত্র।",
            "Shani is the deity of the planet Saturn, one of the nine Navagraha, regarded as the god of karma and time. He is the son of Surya and Chhaya; in some accounts, of Balarama and Revati.",
          ),
          source: WIKI("Shani", "Shani"),
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ শনি জয়ন্তী কবে?", "When is Shani Jayanti in 2027?"), a: l("শুক্রবার ৪ জুন ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Friday 4 June 2027 (Drik Panchang, Kolkata).") },
    { q: l("শনি জয়ন্তীর অমাবস্যা তিথি কখন?", "What time is the Amavasya tithi for Shani Jayanti 2027?"), a: l("কলকাতায় ৪ জুন ভোর ৪:০৫ থেকে ৫ জুন রাত ১:০৯।", "Kolkata: 4:05 am on 4 June to 1:09 am on 5 June.") },
    { q: l("শনিদেবের বাবা-মা কে?", "Who are Shani's parents?"), a: l("সূর্য আর ছায়া।", "Surya and Chhaya.") },
  ],
  events: [{ name: l("শনি জয়ন্তী ২০২৭", "Shani Jayanti 2027"), start: "2027-06-04", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const } }],
  links: [CAL, AMAVASYA, sib("/hariyali-teej-2027", "হরিয়ালি তিজ ২০২৭", "Hariyali Teej 2027")],
  lastChecked: "2026-11-02",
};

export const HARIYALI_TEEJ_2027: FestivalPage = {
  path: "/hariyali-teej-2027",
  title: l("হরিয়ালি তিজ ২০২৭: তারিখ আর তৃতীয়া তিথির সময়", "Hariyali Teej 2027: Date and Tritiya Tithi Time"),
  description: l(
    "হরিয়ালি তিজ ২০২৭ বুধবার ৪ আগস্ট, শ্রাবণ শুক্লা তৃতীয়ায়। কলকাতায় তৃতীয়া তিথি শুরু আর শেষের সময়, উৎসবের পরিচয়, সূত্রসহ।",
    "Hariyali Teej 2027 is Wednesday 4 August, on Shravana Shukla Tritiya. Kolkata Tritiya tithi start and end times and what the festival is, sourced.",
  ),
  h1: l("হরিয়ালি তিজ ২০২৭: কবে, কখন", "Hariyali Teej 2027: when and what time"),
  lead: l(
    "হরিয়ালি তিজ ২০২৭-এ বুধবার ৪ আগস্ট, শ্রাবণ শুক্লা তৃতীয়ায়। কলকাতায় তৃতীয়া তিথি ৪ আগস্ট সকাল ৮:১৯ থেকে ৫ আগস্ট ভোর ৫:০৮।",
    "Hariyali Teej falls on Wednesday 4 August 2027, on Shravana Shukla Tritiya. In Kolkata the Tritiya tithi runs from 8:19 am on 4 August to 5:08 am on 5 August.",
  ),
  timings: {
    h2: l("তারিখ আর তৃতীয়া তিথি", "Date and Tritiya tithi"),
    lead: l("কলকাতার সময় IST।", "Kolkata times are IST."),
    rows: {
      wb: [{ day: l("বুধ ৪ আগস্ট", "Wed 4 Aug"), what: l("তৃতীয়া তিথি", "Tritiya tithi"), when: l("৪ আগস্ট সকাল ৮:১৯ থেকে ৫ আগস্ট ভোর ৫:০৮", "4 Aug 8:19 am to 5 Aug 5:08 am"), source: TEEJ }],
    },
    note: l("ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে এখনও পাওয়া যায়নি। পঞ্জিকা মিলিয়ে নিও।", "Dhaka times aren't available yet, as Drik's Dhaka page could not be read. Check your panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("হরিয়ালি তিজ কী", "What is Hariyali Teej"),
      paras: [
        {
          text: l(
            "হরিয়ালি তিজ বর্ষায়, শ্রাবণ মাসে অমাবস্যার তৃতীয় দিনে পালিত হয়; ‘হরিয়ালি’ মানে সবুজ। দিনটা শিব-পার্বতীর বিয়ের স্মরণে। গাছের ডালে দোলনা, লোকগান-নাচ, হাতে-পায়ে মেহেন্দি আর বিবাহিত মেয়েকে মায়ের উপহার (সিন্ধারা) এর অঙ্গ। মূলত মেয়েরা পালন করেন; পাঞ্জাব, হরিয়ানা, পশ্চিম উত্তরপ্রদেশ আর রাজস্থানে।",
            "Hariyali Teej is observed in the monsoon month of Shravana, on the third day after the new moon; 'hariyali' means green. It marks the day Shiva accepted Parvati as his wife. Swings under trees, folk songs and dances, henna, and gifts from mothers to married daughters (Sindhara) are part of it. Mainly women and girls observe it, in Punjab, Haryana, western Uttar Pradesh and Rajasthan.",
          ),
          source: WIKI("Teej", "Teej"),
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ হরিয়ালি তিজ কবে?", "When is Hariyali Teej in 2027?"), a: l("বুধবার ৪ আগস্ট ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Wednesday 4 August 2027 (Drik Panchang, Kolkata).") },
    { q: l("হরিয়ালি তিজের তৃতীয়া তিথি কখন?", "What time is the Tritiya tithi for Hariyali Teej 2027 in Kolkata?"), a: l("৪ আগস্ট সকাল ৮:১৯ থেকে ৫ আগস্ট ভোর ৫:০৮।", "From 8:19 am on 4 August to 5:08 am on 5 August.") },
    { q: l("হরিয়ালি তিজ কেন পালিত হয়?", "Why is Hariyali Teej celebrated?"), a: l("বর্ষাকে স্বাগত জানাতে, আর যে দিন শিব পার্বতীকে স্ত্রী হিসেবে গ্রহণ করেছিলেন তার স্মরণে।", "It welcomes the monsoon and marks the day Shiva accepted Parvati as his wife.") },
  ],
  events: [{ name: l("হরিয়ালি তিজ ২০২৭", "Hariyali Teej 2027"), start: "2027-08-04", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const } }],
  links: [CAL, sib("/shani-jayanti-2027", "শনি জয়ন্তী ২০২৭", "Shani Jayanti 2027"), sib("/akshaya-navami-2027", "অক্ষয় নবমী ২০২৭", "Akshaya Navami 2027")],
  lastChecked: "2026-11-02",
};

export const PARSHURAM_JAYANTI_2027: FestivalPage = {
  path: "/parshuram-jayanti-2027",
  title: l("পরশুরাম জয়ন্তী ২০২৭: তারিখ আর তৃতীয়া তিথির সময়", "Parshuram Jayanti 2027: Date and Tritiya Tithi Time"),
  description: l(
    "পরশুরাম জয়ন্তী ২০২৭ শনিবার ৮ মে, অক্ষয় তৃতীয়ার আগের দিন। কলকাতায় তৃতীয়া তিথি শুরু আর শেষের সময়, পরশুরাম কে, সূত্রসহ।",
    "Parshuram Jayanti 2027 is Saturday 8 May, a day before Akshaya Tritiya. Kolkata Tritiya tithi start and end times and who Parashurama is, sourced.",
  ),
  h1: l("পরশুরাম জয়ন্তী ২০২৭: কবে, কখন", "Parshuram Jayanti 2027: when and what time"),
  lead: l(
    "দ্রিক পঞ্চাঙ্গে পরশুরাম জয়ন্তী ২০২৭-এ শনিবার ৮ মে; অক্ষয় তৃতীয়া পরদিন রবিবার ৯ মে। কলকাতায় তৃতীয়া তিথি ৮ মে সকাল ১১:৪২ থেকে ৯ মে সকাল ৯:০৩।",
    "Drik Panchang lists Parshuram Jayanti on Saturday 8 May 2027, with Akshaya Tritiya the next day, Sunday 9 May. In Kolkata the Tritiya tithi runs from 11:42 am on 8 May to 9:03 am on 9 May.",
  ),
  timings: {
    h2: l("তারিখ আর তৃতীয়া তিথি", "Date and Tritiya tithi"),
    lead: l("কলকাতার সময় IST।", "Kolkata times are IST."),
    rows: {
      wb: [{ day: l("শনি ৮ মে", "Sat 8 May"), what: l("তৃতীয়া তিথি", "Tritiya tithi"), when: l("৮ মে সকাল ১১:৪২ থেকে ৯ মে সকাল ৯:০৩", "8 May 11:42 am to 9 May 9:03 am"), source: PARSHU }],
    },
    note: l("ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে এখনও পাওয়া যায়নি। পঞ্জিকা মিলিয়ে নিও।", "Dhaka times aren't available yet, as Drik's Dhaka page could not be read. Check your panjika."),
  },
  sections: [
    {
      id: "date",
      h2: l("দ্রিক পঞ্চাঙ্গ কী লেখে", "What Drik Panchang prints"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ লেখে পরশুরামের জন্ম প্রদোষ কালে, আর যেদিন প্রদোষ কালে তৃতীয়া থাকে সেদিন জয়ন্তী পালিত হয়। একই পাতায় অক্ষয় তৃতীয়া রবিবার ৯ মে।",
            "Drik Panchang says Parashurama was born during Pradosh Kala, and the jayanti is observed on the day Tritiya prevails during Pradosh Kala. The same page lists Akshaya Tritiya on Sunday 9 May.",
          ),
          source: PARSHU,
        },
      ],
    },
    {
      id: "about",
      h2: l("পরশুরাম কে", "Who is Parashurama"),
      paras: [
        {
          text: l(
            "পরশুরাম বিষ্ণুর ষষ্ঠ অবতার বলে বর্ণিত এক ঋষি, চিরঞ্জীবীদের একজন। বাবা জমদগ্নি, মা রেণুকা।",
            "Parashurama is a sage often described as the sixth avatar of Vishnu, and one of the Chiranjivi (immortals). His father is Jamadagni and his mother Renuka.",
          ),
          source: WIKI("Parashurama", "Parashurama"),
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ পরশুরাম জয়ন্তী কবে?", "When is Parshuram Jayanti in 2027?"), a: l("শনিবার ৮ মে ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Saturday 8 May 2027 (Drik Panchang, Kolkata).") },
    { q: l("পরশুরাম জয়ন্তীর তৃতীয়া তিথি কখন?", "What time is the Tritiya tithi for Parshuram Jayanti 2027?"), a: l("কলকাতায় ৮ মে সকাল ১১:৪২ থেকে ৯ মে সকাল ৯:০৩।", "Kolkata: 11:42 am on 8 May to 9:03 am on 9 May.") },
    { q: l("পরশুরাম জয়ন্তী আর অক্ষয় তৃতীয়া কি একই দিন?", "Is Parshuram Jayanti the same day as Akshaya Tritiya in 2027?"), a: l("দ্রিক পঞ্চাঙ্গে না: পরশুরাম জয়ন্তী শনিবার ৮ মে, অক্ষয় তৃতীয়া রবিবার ৯ মে।", "Not on Drik Panchang: Parshuram Jayanti is Saturday 8 May and Akshaya Tritiya is Sunday 9 May.") },
  ],
  events: [{ name: l("পরশুরাম জয়ন্তী ২০২৭", "Parshuram Jayanti 2027"), start: "2027-05-08", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const } }],
  links: [CAL, sib("/akshaya-tritiya-2027", "অক্ষয় তৃতীয়া ২০২৭", "Akshaya Tritiya 2027"), AMAVASYA],
  lastChecked: "2026-11-02",
};
