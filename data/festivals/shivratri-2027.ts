// Maha Shivratri 2027 (/shivratri-2027). Dates and times copied from fetched Drik Panchang pages
// (Kolkata and Dhaka, captured 31 Oct 2026).

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK = (geo: string) => `https://www.drikpanchang.com/festivals/maha-shivaratri/maha-shivaratri-date-time.html?geoname-id=${geo}&year=2027`;
const DRIK_KOL = { title: "Drik Panchang, Maha Shivaratri 2027 (Kolkata)", url: DRIK("1275004") };
const DRIK_DHAKA = { title: "Drik Panchang, Maha Shivaratri 2027 (Dhaka)", url: DRIK("1185241") };
const WIKI = { title: "Wikipedia, Maha Shivaratri", url: "https://en.wikipedia.org/wiki/Maha_Shivaratri" };

const prahar = (day: L, n: string, nEn: string, bnT: string, enT: string, source: { title: string; url: string }) => ({
  day,
  what: l(`${n} প্রহরের পুজো`, `${nEn} prahar puja`),
  when: l(bnT, enT),
  source,
});

export const SHIVRATRI_2027: FestivalPage = {
  path: "/shivratri-2027",
  title: l("শিবরাত্রি ২০২৭: তারিখ, নিশীথ কাল ও চার প্রহরের সময়", "Maha Shivratri 2027: Date, Nishita Time & 4 Prahar"),
  description: l(
    "শিবরাত্রি ২০২৭ শনিবার ৬ মার্চ। কলকাতায় চতুর্দশী ৬ মার্চ দুপুর ১২:০৩ থেকে ৭ মার্চ দুপুর ১:৪৬, নিশীথ কাল রাত ১১:২৩–১২:১২। চার প্রহর, পারণ, ঢাকার সময়, সূত্রসহ।",
    "Maha Shivratri 2027 is Sat 6 Mar. Kolkata Nishita kaal 11:23 pm to 12:12 am; Chaturdashi from 12:03 pm. Four prahar times, parana and Dhaka times, sourced.",
  ),
  h1: l("শিবরাত্রি ২০২৭: কবে, কখন", "Maha Shivratri 2027: when and what time"),
  lead: l(
    "ফাল্গুনের কৃষ্ণা চতুর্দশীর রাতে শিবরাত্রি; ২০২৭-এ শনিবার ৬ মার্চ, কলকাতা আর ঢাকা দু’জায়গাতেই। রাতজাগা, উপোস, চার প্রহরে শিবের মাথায় জল: সব সময় নিচে।",
    "Maha Shivratri is kept on the night of Krishna Chaturdashi; in 2027 that is Saturday 6 March, in both Kolkata and Dhaka. The night vigil, the fast and the four prahar pujas: all the times are below.",
  ),
  timings: {
    h2: l("চতুর্দশী, নিশীথ কাল আর চার প্রহর", "Chaturdashi, Nishita kaal and the four prahars"),
    lead: l(
      "কলকাতার সময় IST, ঢাকার সময় BST। রাত বারোটা পেরোলেও পুজো ৬ মার্চের রাতেরই; পারণ, মানে উপোস ভাঙা, ৭ মার্চ।",
      "Kolkata times are IST, Dhaka times BST. Times past midnight still belong to the night of 6 March; parana, breaking the fast, is on 7 March.",
    ),
    rows: {
      wb: [
        { day: l("৬–৭ মার্চ", "6–7 Mar"), what: l("চতুর্দশী তিথি", "Chaturdashi tithi"), when: l("৬ মার্চ দুপুর ১২:০৩ থেকে ৭ মার্চ দুপুর ১:৪৬", "6 Mar 12:03 pm to 7 Mar 1:46 pm"), source: DRIK_KOL },
        { day: l("শনি ৬ মার্চ রাত", "Sat 6 Mar night"), what: l("নিশীথ কাল", "Nishita kaal"), when: l("রাত ১১:২৩ থেকে ১২:১২", "11:23 pm to 12:12 am"), source: DRIK_KOL },
        prahar(l("শনি ৬ মার্চ সন্ধে", "Sat 6 Mar evening"), "প্রথম", "First", "সন্ধে ৫:৪২ থেকে রাত ৮:৪৫", "5:42 pm to 8:45 pm", DRIK_KOL),
        prahar(l("শনি ৬ মার্চ রাত", "Sat 6 Mar night"), "দ্বিতীয়", "Second", "রাত ৮:৪৫ থেকে ১১:৪৮", "8:45 pm to 11:48 pm", DRIK_KOL),
        prahar(l("শনি ৬ মার্চ রাত", "Sat 6 Mar night"), "তৃতীয়", "Third", "রাত ১১:৪৮ থেকে ২:৫০", "11:48 pm to 2:50 am", DRIK_KOL),
        prahar(l("রবি ৭ মার্চ রাত", "Sun 7 Mar, small hours"), "চতুর্থ", "Fourth", "রাত ২:৫০ থেকে ভোর ৫:৫৩", "2:50 am to 5:53 am", DRIK_KOL),
        { day: l("রবি ৭ মার্চ", "Sun 7 Mar"), what: l("পারণ (উপোস ভাঙা)", "Parana (breaking the fast)"), when: l("ভোর ৫:৫৩ থেকে দুপুর ১:৪৬", "5:53 am to 1:46 pm"), source: DRIK_KOL },
      ],
      bd: [
        { day: l("৬–৭ মার্চ", "6–7 Mar"), what: l("চতুর্দশী তিথি", "Chaturdashi tithi"), when: l("৬ মার্চ দুপুর ১২:৩৩ থেকে ৭ মার্চ দুপুর ২:১৬", "6 Mar 12:33 pm to 7 Mar 2:16 pm"), source: DRIK_DHAKA },
        { day: l("শনি ৬ মার্চ রাত", "Sat 6 Mar night"), what: l("নিশীথ কাল", "Nishita kaal"), when: l("রাত ১১:৪৫ থেকে ১২:৩৪", "11:45 pm to 12:34 am"), source: DRIK_DHAKA },
        prahar(l("শনি ৬ মার্চ সন্ধে", "Sat 6 Mar evening"), "প্রথম", "First", "সন্ধে ৬:০৩ থেকে রাত ৯:০৬", "6:03 pm to 9:06 pm", DRIK_DHAKA),
        prahar(l("শনি ৬ মার্চ রাত", "Sat 6 Mar night"), "দ্বিতীয়", "Second", "রাত ৯:০৬ থেকে ১২:০৯", "9:06 pm to 12:09 am", DRIK_DHAKA),
        prahar(l("শনি ৬ মার্চ রাত", "Sat 6 Mar night"), "তৃতীয়", "Third", "রাত ১২:০৯ থেকে ৩:১২", "12:09 am to 3:12 am", DRIK_DHAKA),
        prahar(l("রবি ৭ মার্চ রাত", "Sun 7 Mar, small hours"), "চতুর্থ", "Fourth", "রাত ৩:১২ থেকে ভোর ৬:১৫", "3:12 am to 6:15 am", DRIK_DHAKA),
        { day: l("রবি ৭ মার্চ", "Sun 7 Mar"), what: l("পারণ (উপোস ভাঙা)", "Parana (breaking the fast)"), when: l("ভোর ৬:১৫ থেকে দুপুর ২:১৬", "6:15 am to 2:16 pm"), source: DRIK_DHAKA },
      ],
    },
  },
  sections: [
    {
      id: "about",
      h2: l("শিবরাত্রি কীভাবে পালন হয়", "How the night is kept"),
      paras: [
        {
          text: l(
            "বেশির ভাগ উৎসব দিনে, শিবরাত্রি রাতে: সারারাত জেগে থাকা (জাগরণ)। মন্দিরে রাতটা চার প্রহরে ভাগ করে প্রতি প্রহরে আলাদা পুজো হয়; শিবলিঙ্গে দুধ, জল, মধু ঢেলে অভিষেক, সঙ্গে বেলপাতা। পুজো না হওয়া পর্যন্ত উপোস।",
            "Unlike most festivals, Shivratri is kept at night, with an all-night vigil (jagaran). Temples divide the night into four prahars with a puja in each; the lingam is bathed with milk, water and honey and offered bel leaves, and devotees fast until they have worshipped.",
          ),
          source: WIKI,
        },
      ],
      tips: [
        l("উপোস করলে দিনের বেলা জল আর বিশ্রাম নিয়ে নাও; রাতজাগার আগে একটু ঘুমিয়ে নিলে সুবিধা।", "If you're fasting, rest and keep hydrated in the day; a nap before the vigil helps."),
        l("বড় মন্দিরে রাতের দিকে লম্বা লাইন হয়; বয়স্কদের নিয়ে গেলে প্রথম প্রহরে যাও।", "Big temples get long queues late at night; with elders, go in the first prahar."),
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ শিবরাত্রি কবে?", "When is Maha Shivratri in 2027?"),
      a: l("শনিবার ৬ মার্চ ২০২৭, কলকাতা আর ঢাকা দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গ)।", "Saturday 6 March 2027, in both Kolkata and Dhaka (Drik Panchang)."),
    },
    {
      q: l("শিবরাত্রির নিশীথ কাল কখন?", "What is the Nishita kaal time for Shivratri 2027?"),
      a: l("কলকাতায় রাত ১১:২৩ থেকে ১২:১২; ঢাকায় রাত ১১:৪৫ থেকে ১২:৩৪।", "Kolkata 11:23 pm to 12:12 am; Dhaka 11:45 pm to 12:34 am."),
    },
    {
      q: l("শিবরাত্রির উপোস কখন ভাঙব?", "When do I break the Shivratri fast?"),
      a: l("পারণ ৭ মার্চ: কলকাতায় ভোর ৫:৫৩ থেকে দুপুর ১:৪৬, ঢাকায় ভোর ৬:১৫ থেকে দুপুর ২:১৬।", "Parana is on 7 March: Kolkata 5:53 am to 1:46 pm, Dhaka 6:15 am to 2:16 pm."),
    },
    {
      q: l("চার প্রহরের পুজো কখন কখন?", "What are the four prahar timings?"),
      a: l(
        "কলকাতায় সন্ধে ৫:৪২, রাত ৮:৪৫, রাত ১১:৪৮ আর রাত ২:৫০ থেকে, শেষ ভোর ৫:৫৩। ঢাকার সময় ওপরের সারণিতে।",
        "Kolkata: from 5:42 pm, 8:45 pm, 11:48 pm and 2:50 am, ending 5:53 am. Dhaka times are in the table above.",
      ),
    },
  ],
  events: [
    { name: l("শিবরাত্রি ২০২৭, কলকাতা", "Maha Shivratri 2027, Kolkata"), start: "2027-03-06", end: "2027-03-07", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("শিবরাত্রি ২০২৭, বাংলাদেশ", "Maha Shivratri 2027, Bangladesh"), start: "2027-03-06", end: "2027-03-07", place: { name: "Dhaka", locality: "Dhaka", country: "BD" } },
  ],
  links: [
    { href: "/greetings?d=shivratri", label: l("🔱 শিবরাত্রির শুভেচ্ছা কার্ড", "🔱 Shivratri greeting card"), primary: true },
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027") },
    { href: "/poila-boishakh-2027", label: l("পয়লা বৈশাখ ১৪৩৪", "Poila Boishakh 1434") },
    { href: "/dol-purnima-2027", label: l("দোলযাত্রা ২০২৭", "Dol Purnima 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};
