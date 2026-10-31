// Poila Boishakh 1434 / 2027 (/poila-boishakh-2027). West Bengal date from the fetched Drik Panchang
// Kolkata page (captured 31 Oct 2026); Bangladesh's fixed 14 April from Wikipedia (no 2027 government
// list yet).

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK_KOL = {
  title: "Drik Panchang, Pohela Boishakh 2027 (Kolkata)",
  url: "https://www.drikpanchang.com/festivals/pohela-boishakh/pohela-boishakh-date-time.html?geoname-id=1275004&year=2027",
};
const WIKI = { title: "Wikipedia, Pohela Boishakh", url: "https://en.wikipedia.org/wiki/Pohela_Boishakh" };

export const POILA_BOISHAKH_2027: FestivalPage = {
  path: "/poila-boishakh-2027",
  title: l("পয়লা বৈশাখ ১৪৩৪: পশ্চিমবঙ্গ আর বাংলাদেশে কবে", "Poila Boishakh 2027 (1434): Date in Bengal & Bangladesh"),
  description: l(
    "বাংলা নববর্ষ ১৪৩৪: পশ্চিমবঙ্গে বৃহস্পতিবার ১৫ এপ্রিল ২০২৭, বাংলাদেশে বুধবার ১৪ এপ্রিল। দুই দেশে দিন আলাদা কেন, সংক্রান্তির সময়, হালখাতা আর মঙ্গল শোভাযাত্রা, সূত্রসহ।",
    "Bengali New Year 1434: Thu 15 April 2027 in West Bengal, Wed 14 April in Bangladesh. Why the days differ, the Sankranti time and the customs, sourced.",
  ),
  h1: l("পয়লা বৈশাখ ১৪৩৪: কবে, কোথায় কোন দিন", "Poila Boishakh 1434: which day, where"),
  lead: l(
    "বাংলা ১৪৩৪ সাল শুরু হচ্ছে এপ্রিল ২০২৭-এ, কিন্তু দুই বাংলায় দুই দিনে: পশ্চিমবঙ্গে ১৫ এপ্রিল, বাংলাদেশে ১৪ এপ্রিল।",
    "The Bengali year 1434 begins in April 2027, but on two different days: 15 April in West Bengal and 14 April in Bangladesh.",
  ),
  timings: {
    h2: l("তারিখ", "Dates"),
    lead: l(
      "পশ্চিমবঙ্গের দিন পঞ্জিকার মেষ সংক্রান্তি থেকে আসে; বাংলাদেশের সংশোধিত বাংলা ক্যালেন্ডারে পয়লা বৈশাখ প্রতি বছর ১৪ এপ্রিল।",
      "West Bengal's day follows the panjika's Mesha Sankranti; Bangladesh's revised Bangla calendar fixes Pohela Boishakh on 14 April every year.",
    ),
    rows: {
      wb: [
        { day: l("বুধ ১৪ এপ্রিল", "Wed 14 Apr"), what: l("সংক্রান্তির মুহূর্ত", "Sankranti moment"), when: l("বিকেল ৩:৩৩", "3:33 pm"), source: DRIK_KOL },
        { day: l("বৃহস্পতি ১৫ এপ্রিল", "Thu 15 Apr"), what: l("পয়লা বৈশাখ ১৪৩৪", "Poila Boishakh 1434"), when: l("সারাদিন", "All day"), source: DRIK_KOL },
      ],
      bd: [{ day: l("বুধ ১৪ এপ্রিল", "Wed 14 Apr"), what: l("পহেলা বৈশাখ ১৪৩৪", "Pohela Boishakh 1434"), when: l("সারাদিন (প্রতি বছর ১৪ এপ্রিল)", "All day (fixed on 14 April)"), source: WIKI }],
    },
    note: l(
      "বাংলাদেশের ২০২৭-এর সরকারি ছুটির তালিকা ৩১ অক্টোবর ২০২৬ পর্যন্ত বেরোয়নি; ১৪ এপ্রিলের নিয়মটা সংশোধিত ক্যালেন্ডারের।",
      "Bangladesh's 2027 government holiday list had not been published as of 31 October 2026; the 14 April date comes from the revised calendar's rule.",
    ),
  },
  sections: [
    {
      id: "why",
      h2: l("দুই বাংলায় দিন আলাদা কেন", "Why the two Bengals differ"),
      paras: [
        {
          text: l(
            "১৯৬৬ সালে মুহম্মদ শহীদুল্লাহর নেতৃত্বে একটা কমিটি বাংলা ক্যালেন্ডার সংশোধন করে; বাংলাদেশ সেটা ১৯৮৭ সালে সরকারিভাবে নেয়, তাই সেখানে পহেলা বৈশাখ প্রতি বছর ১৪ এপ্রিল। পশ্চিমবঙ্গ আর ত্রিপুরা পুরোনো পঞ্জিকা মানে, তাই দিনটা ১৪ বা ১৫ এপ্রিল হয়।",
            "In 1966 a committee led by Muhammad Shahidullah revised the Bengali calendar, and Bangladesh adopted it officially in 1987, so Pohela Boishakh there is always 14 April. West Bengal and Tripura follow the traditional panjika, so the day falls on 14 or 15 April.",
          ),
          source: WIKI,
        },
      ],
    },
    {
      id: "customs",
      h2: l("নববর্ষের রীতি", "New Year customs"),
      paras: [
        {
          text: l(
            "দোকানে হালখাতা, মানে নতুন হিসেবের খাতা খোলা; ঢাকায় রমনার বটমূলে ছায়ানটের ভোরের গান আর মঙ্গল শোভাযাত্রা, যেটা ২০১৬ সালে ইউনেস্কোর অধরা সাংস্কৃতিক ঐতিহ্যের তালিকায় ওঠে; পশ্চিমবঙ্গে ভোরে প্রভাতফেরি।",
            "Shops open Haal Khata, the new ledgers; in Dhaka there is Chhayanaut's dawn concert at Ramna and the Mangal Shobhajatra, inscribed by UNESCO as Intangible Cultural Heritage in 2016; in West Bengal, Prabhat Pheri processions at dawn.",
          ),
          source: WIKI,
        },
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ পয়লা বৈশাখ কবে?", "When is Poila Boishakh in 2027?"),
      a: l("পশ্চিমবঙ্গে বৃহস্পতিবার ১৫ এপ্রিল (দ্রিক পঞ্চাঙ্গ, কলকাতা); বাংলাদেশে বুধবার ১৪ এপ্রিল।", "In West Bengal, Thursday 15 April (Drik Panchang, Kolkata); in Bangladesh, Wednesday 14 April."),
    },
    {
      q: l("২০২৭-এ কোন বাংলা সাল শুরু হচ্ছে?", "Which Bengali year begins in April 2027?"),
      a: l("১৪৩৪ বঙ্গাব্দ।", "Bangabda 1434."),
    },
    {
      q: l("পশ্চিমবঙ্গ আর বাংলাদেশে নববর্ষ আলাদা দিনে কেন?", "Why is the New Year on different days in West Bengal and Bangladesh?"),
      a: l(
        "বাংলাদেশ ১৯৮৭ থেকে সংশোধিত ক্যালেন্ডার মানে, যাতে পহেলা বৈশাখ সবসময় ১৪ এপ্রিল; পশ্চিমবঙ্গ পঞ্জিকার সংক্রান্তি ধরে দিন ঠিক করে।",
        "Bangladesh has followed a revised calendar since 1987 that fixes the day on 14 April; West Bengal sets it from the panjika's Sankranti.",
      ),
    },
  ],
  events: [
    { name: l("পয়লা বৈশাখ ১৪৩৪, কলকাতা", "Poila Boishakh 1434, Kolkata"), start: "2027-04-15", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("পহেলা বৈশাখ ১৪৩৪, বাংলাদেশ", "Pohela Boishakh 1434, Bangladesh"), start: "2027-04-14", place: { name: "Dhaka", locality: "Dhaka", country: "BD" } },
  ],
  links: [
    { href: "/greetings/noboborsho", label: l("🎉 শুভ নববর্ষ কার্ড", "🎉 Shubho Noboborsho card"), primary: true },
    { href: "/blog/poila-boishakh-traditions", label: l("📖 নববর্ষের রীতি", "📖 New Year traditions") },
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027") },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/dol-purnima-2027", label: l("দোলযাত্রা ২০২৭", "Dol Purnima 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};
