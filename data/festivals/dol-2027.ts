// Dol Purnima 2027 (/dol-purnima-2027). Date from Drik Panchang's Bengali calendar (Kolkata and Dhaka print
// the same row); Purnima tithi from Drik's 2027 Purnima lists for Kolkata and Dhaka; Holi and Chaitanya
// Mahaprabhu Jayanti from Drik's March 2027 festivals page (Kolkata). All fetched and checked 31 Oct 2026.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const BENGALI_KOL = { title: "Drik Panchang, Bengali calendar 2027 (Kolkata)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1275004&year=2027" };
const BENGALI_DHAKA = { title: "Drik Panchang, Bengali calendar 2027 (Dhaka)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1185241&year=2027" };
const PURNIMA_KOL = { title: "Drik Panchang, Purnima dates 2027 (Kolkata)", url: "https://www.drikpanchang.com/vrats/purnimasidates.html?year=2027&geoname-id=1275004" };
const PURNIMA_DHAKA = { title: "Drik Panchang, Purnima dates 2027 (Dhaka)", url: "https://www.drikpanchang.com/vrats/purnimasidates.html?year=2027&geoname-id=1185241" };
const MARCH_KOL = { title: "Drik Panchang, March 2027 festivals (Kolkata)", url: "https://www.drikpanchang.com/festivals/month/festivals-march.html?year=2027&geoname-id=1275004" };
const WIKI = { title: "Wikipedia, Dol Purnima", url: "https://en.wikipedia.org/wiki/Dol_Purnima" };

export const DOL_2027: FestivalPage = {
  path: "/dol-purnima-2027",
  title: l("দোলযাত্রা ২০২৭: দোলপূর্ণিমা কবে, পূর্ণিমা তিথির সময়", "Dol Purnima 2027: Date, Purnima Time, Dol vs Holi"),
  description: l(
    "দোলপূর্ণিমা ২০২৭ সোমবার ২২ মার্চ, কলকাতা আর ঢাকায়। কলকাতায় পূর্ণিমা তিথি ২১ মার্চ সন্ধে ৬:২১ থেকে ২২ মার্চ বিকেল ৪:১৩। চৈতন্য মহাপ্রভুর জন্মতিথিও, সূত্রসহ।",
    "Dol Purnima 2027 is Mon 22 March in Kolkata and Dhaka. Kolkata Purnima tithi: 21 Mar 6:21 pm to 22 Mar 4:13 pm. Also Chaitanya Mahaprabhu's birth anniversary.",
  ),
  h1: l("দোলযাত্রা ২০২৭: কবে, কখন", "Dol Purnima 2027: when and what time"),
  lead: l(
    "ফাল্গুনী পূর্ণিমায় দোল: রাধাকৃষ্ণের দোলনা, আবির আর রঙ। ২০২৭-এ দোলপূর্ণিমা সোমবার ২২ মার্চ, কলকাতা আর ঢাকা দু’জায়গাতেই।",
    "Dol falls on the full moon of Falgun: Radha and Krishna on the swing, abir and colours. In 2027 Dol Purnima is Monday 22 March, in both Kolkata and Dhaka.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("দোলপূর্ণিমা", "Dol Purnima"), when: l("ফাল্গুন শুক্লা পূর্ণিমা", "Falgun, Shukla Purnima"), source: BENGALI_KOL },
        { day: l("২১–২২ মার্চ", "21–22 Mar"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২১ মার্চ সন্ধে ৬:২১ থেকে ২২ মার্চ বিকেল ৪:১৩", "21 Mar 6:21 pm to 22 Mar 4:13 pm"), source: PURNIMA_KOL },
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("হোলি আর চৈতন্য মহাপ্রভুর জন্মতিথি", "Holi and Chaitanya Mahaprabhu Jayanti"), when: l("একই দিন", "Same day"), source: MARCH_KOL },
      ],
      bd: [
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("দোলপূর্ণিমা", "Dol Purnima"), when: l("ফাল্গুন শুক্লা পূর্ণিমা", "Falgun, Shukla Purnima"), source: BENGALI_DHAKA },
        { day: l("২১–২২ মার্চ", "21–22 Mar"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২১ মার্চ সন্ধে ৬:৫১ থেকে ২২ মার্চ বিকেল ৪:৪৩", "21 Mar 6:51 pm to 22 Mar 4:43 pm"), source: PURNIMA_DHAKA },
      ],
    },
  },
  sections: [
    {
      id: "about",
      h2: l("দোল কেন, কীভাবে", "What Dol is about"),
      paras: [
        {
          text: l(
            "দোল হোলির সময়ের দোলনার উৎসব: সাজানো পালকিতে রাধাকৃষ্ণের মূর্তি নিয়ে শোভাযাত্রা, দোলনায় দোলানো, তারপর আবির আর রঙ খেলা। গৌড়ীয় বৈষ্ণবদের কাছে দিনটা আরও বিশেষ: এদিন চৈতন্য মহাপ্রভুর জন্ম।",
            "Dol is the swing festival of the Holi season: Radha and Krishna are carried in decorated palanquins and swung, then come abir and colours. For Gaudiya Vaishnavas the day is doubly special: it is the birth anniversary of Chaitanya Mahaprabhu.",
          ),
          source: WIKI,
        },
      ],
      tips: [
        l("ভেষজ আবির বা শুকনো রং বেছে নাও; চোখে-মুখে রং লাগলে পরিষ্কার জলে ধুয়ে ফেলো।", "Pick herbal abir or dry colours; if colour gets in the eyes, rinse with clean water."),
        l("যারা রং খেলতে চায় না, তাদের জোর কোরো না; পোষা প্রাণীদের গায়ে রং দিও না।", "Don't force colour on anyone who doesn't want it, and keep it off pets."),
        l("রং খেলার আগে গায়ে একটু তেল মেখে নিলে পরে তোলা সহজ হয়।", "A little oil on the skin before playing makes the colour easier to wash off."),
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ দোল কবে?", "When is Dol in 2027?"),
      a: l("দোলপূর্ণিমা সোমবার ২২ মার্চ ২০২৭, কলকাতা আর ঢাকা দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গ)।", "Dol Purnima is Monday 22 March 2027, in both Kolkata and Dhaka (Drik Panchang)."),
    },
    {
      q: l("দোলপূর্ণিমার তিথি কখন?", "When is the Purnima tithi for Dol 2027?"),
      a: l("কলকাতায় ২১ মার্চ সন্ধে ৬:২১ থেকে ২২ মার্চ বিকেল ৪:১৩; ঢাকায় ২১ মার্চ সন্ধে ৬:৫১ থেকে ২২ মার্চ বিকেল ৪:৪৩।", "Kolkata: 21 Mar 6:21 pm to 22 Mar 4:13 pm. Dhaka: 21 Mar 6:51 pm to 22 Mar 4:43 pm."),
    },
    {
      q: l("দোল আর হোলি কি একই দিন?", "Are Dol and Holi on the same day in 2027?"),
      a: l("কলকাতার হিসেবে ২০২৭-এ হ্যাঁ: দ্রিক পঞ্চাঙ্গ দোলপূর্ণিমা আর হোলি দুটোই সোমবার ২২ মার্চ দেখায়।", "By the Kolkata reckoning, yes in 2027: Drik Panchang lists both Dol Purnima and Holi on Monday 22 March."),
    },
    {
      q: l("চৈতন্য মহাপ্রভুর জন্মতিথি কবে?", "When is Chaitanya Mahaprabhu Jayanti in 2027?"),
      a: l("দোলপূর্ণিমার দিনই, সোমবার ২২ মার্চ ২০২৭।", "On Dol Purnima itself, Monday 22 March 2027."),
    },
  ],
  events: [
    { name: l("দোলযাত্রা ২০২৭, কলকাতা", "Dol Purnima 2027, Kolkata"), start: "2027-03-22", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("দোলযাত্রা ২০২৭, বাংলাদেশ", "Dol Purnima 2027, Bangladesh"), start: "2027-03-22", place: { name: "Dhaka", locality: "Dhaka", country: "BD" } },
  ],
  links: [
    { href: "/greetings/dol", label: l("🎨 দোলের শুভেচ্ছা কার্ড", "🎨 Dol greeting card"), primary: true },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/poila-boishakh-2027", label: l("পয়লা বৈশাখ ১৪৩৪", "Poila Boishakh 1434") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};
