// Saraswati Puja 2027 (/saraswati-puja-2027). Dates and times copied from fetched Drik Panchang pages
// (Kolkata and Dhaka, captured 31 Oct 2026). No Bengali panjika (Bishuddha Siddhanta / Gupta Press)
// reading for 2027 had been reported yet.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK = (geo: string) => `https://www.drikpanchang.com/festivals/vasant-panchami/vasant-panchami-puja-date-time.html?geoname-id=${geo}&year=2027`;
const DRIK_KOL = { title: "Drik Panchang, Vasant Panchami / Saraswati Puja 2027 (Kolkata)", url: DRIK("1275004") };
const DRIK_DHAKA = { title: "Drik Panchang, Vasant Panchami / Saraswati Puja 2027 (Dhaka)", url: DRIK("1185241") };
const WIKI = { title: "Wikipedia, Saraswati Puja", url: "https://en.wikipedia.org/wiki/Saraswati_Puja" };

export const SARASWATI_2027: FestivalPage = {
  path: "/saraswati-puja-2027",
  title: l("সরস্বতী পুজো ২০২৭: তারিখ, পঞ্চমী তিথি ও পুজোর সময়", "Saraswati Puja 2027: Date, Panchami Time & Muhurat"),
  description: l(
    "সরস্বতী পুজো ২০২৭ বৃহস্পতিবার ১১ ফেব্রুয়ারি। কলকাতায় পঞ্চমী তিথি ১১ ফেব্রুয়ারি রাত ৩:০৪ থেকে ১২ ফেব্রুয়ারি রাত ৩:১৮, পুজোর সময় সকাল ৬:১১–১১:৫১। ঢাকার সময়ও, সূত্রসহ।",
    "Saraswati Puja 2027 is Thu 11 Feb. Kolkata: Panchami 11 Feb 3:04 am to 12 Feb 3:18 am, puja muhurat 6:11 to 11:51 am. Dhaka times too, sourced.",
  ),
  h1: l("সরস্বতী পুজো ২০২৭: কবে, কখন", "Saraswati Puja 2027: when and what time"),
  lead: l(
    "মাঘ মাসের শুক্লা পঞ্চমীতে সরস্বতী পুজো; ২০২৭-এ বৃহস্পতিবার ১১ ফেব্রুয়ারি, কলকাতা আর ঢাকা দু’জায়গাতেই। স্কুল-কলেজের পুজো, হাতেখড়ি, হলুদ শাড়ি-পাঞ্জাবি: সব এই একদিনে।",
    "Saraswati Puja falls on the bright Panchami of Magh; in 2027 that is Thursday 11 February, in both Kolkata and Dhaka. School and college pujas, a child's first letters, yellow saris and panjabis: all on one day.",
  ),
  timings: {
    h2: l("তারিখ, পঞ্চমী তিথি আর পুজোর সময়", "Date, Panchami tithi and puja time"),
    lead: l(
      "কলকাতার সময় IST, ঢাকার সময় BST। তোমার স্কুল বা পাড়ার পুজোর সময় কমিটি আর পুরোহিতের সঙ্গে মিলিয়ে নাও।",
      "Kolkata times are IST, Dhaka times BST. Check your school's or para's puja time with the committee and the priest.",
    ),
    rows: {
      wb: [
        { day: l("বৃহস্পতি ১১ ফেব্রুয়ারি", "Thu 11 Feb"), what: l("পঞ্চমী তিথি", "Panchami tithi"), when: l("১১ ফেব্রুয়ারি রাত ৩:০৪ থেকে ১২ ফেব্রুয়ারি রাত ৩:১৮", "11 Feb 3:04 am to 12 Feb 3:18 am"), source: DRIK_KOL },
        { day: l("বৃহস্পতি ১১ ফেব্রুয়ারি", "Thu 11 Feb"), what: l("পুজোর মুহূর্ত", "Puja muhurat"), when: l("সকাল ৬:১১ থেকে ১১:৫১", "6:11 am to 11:51 am"), source: DRIK_KOL },
      ],
      bd: [
        { day: l("বৃহস্পতি ১১ ফেব্রুয়ারি", "Thu 11 Feb"), what: l("পঞ্চমী তিথি", "Panchami tithi"), when: l("১১ ফেব্রুয়ারি রাত ৩:৩৪ থেকে ১২ ফেব্রুয়ারি রাত ৩:৪৮", "11 Feb 3:34 am to 12 Feb 3:48 am"), source: DRIK_DHAKA },
        { day: l("বৃহস্পতি ১১ ফেব্রুয়ারি", "Thu 11 Feb"), what: l("পুজোর মুহূর্ত", "Puja muhurat"), when: l("সকাল ৬:৩৪ থেকে দুপুর ১২:১৩", "6:34 am to 12:13 pm"), source: DRIK_DHAKA },
      ],
    },
    note: l(
      "বাংলাদেশে ২০২৭-এ সরস্বতী পুজোয় সরকারি ছুটি থাকবে কি না, ৩১ অক্টোবর ২০২৬ পর্যন্ত ছুটির তালিকা বেরোয়নি, তাই এখনও জানা নেই।",
      "Whether Saraswati Puja is a government holiday in Bangladesh in 2027 isn't known yet: the 2027 holiday list had not been published as of 31 October 2026.",
    ),
  },
  sections: [
    {
      id: "about",
      h2: l("সরস্বতী পুজো কেন, কীভাবে", "What the day is about"),
      paras: [
        {
          text: l(
            "বিদ্যা আর শিল্পের দেবী সরস্বতীর পুজো। বাঙালি বাড়িতে এদিন ছোটদের হাতেখড়ি, মানে প্রথম অক্ষর লেখা, হয়; রং হলুদ, সর্ষেফুলের রং; কলকাতায় দিনটাকে মজা করে ‘বাঙালির ভ্যালেন্টাইনস ডে’ বলা হয়।",
            "The worship of Saraswati, goddess of learning and the arts. In Bengali homes it's the day of hathe khori, a small child's first letters; the colour is yellow, like mustard flowers; and in Kolkata the day is jokingly called 'the Bengali Valentine's Day'.",
          ),
          source: WIKI,
        },
        {
          text: l(
            "স্কুল-কলেজে নিজেরাই পুজো সাজায় ছাত্রছাত্রীরা; সকালে অঞ্জলি, দুপুরে খিচুড়ি ভোগ, বিকেলে বন্ধুদের সঙ্গে এক স্কুল থেকে আরেক স্কুলে ঘোরা।",
            "Students set up the puja in their own schools and colleges: anjali in the morning, khichuri bhog at noon, and an afternoon of hopping from school to school with friends.",
          ),
        },
      ],
      tips: [
        l("অঞ্জলি দিতে চাইলে পুজোর মুহূর্তের মধ্যে পৌঁছে যাও; অনেক জায়গায় দুপুরের আগেই শেষ হয়ে যায়।", "If you want to give anjali, arrive within the muhurat; in many places it is over before noon."),
        l("বই-খাতা মায়ের পায়ে রাখার প্রথা থাকলে আগের রাতেই গুছিয়ে রাখো।", "If your family places books before the goddess, pack them the night before."),
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ সরস্বতী পুজো কবে?", "When is Saraswati Puja in 2027?"),
      a: l("বৃহস্পতিবার ১১ ফেব্রুয়ারি ২০২৭, কলকাতা আর ঢাকা দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গ)।", "Thursday 11 February 2027, in both Kolkata and Dhaka (Drik Panchang)."),
    },
    {
      q: l("পঞ্চমী তিথি কখন শুরু, কখন শেষ?", "When does the Panchami tithi begin and end?"),
      a: l(
        "কলকাতায় ১১ ফেব্রুয়ারি রাত ৩:০৪ থেকে ১২ ফেব্রুয়ারি রাত ৩:১৮; ঢাকায় ১১ ফেব্রুয়ারি রাত ৩:৩৪ থেকে ১২ ফেব্রুয়ারি রাত ৩:৪৮।",
        "Kolkata: 11 Feb 3:04 am to 12 Feb 3:18 am. Dhaka: 11 Feb 3:34 am to 12 Feb 3:48 am.",
      ),
    },
    {
      q: l("সরস্বতী পুজোর শুভ সময় কখন?", "What is the Saraswati Puja muhurat in 2027?"),
      a: l("কলকাতায় সকাল ৬:১১ থেকে ১১:৫১; ঢাকায় সকাল ৬:৩৪ থেকে দুপুর ১২:১৩ (দ্রিক পঞ্চাঙ্গ)।", "Kolkata 6:11 am to 11:51 am; Dhaka 6:34 am to 12:13 pm (Drik Panchang)."),
    },
    {
      q: l("বসন্ত পঞ্চমী আর সরস্বতী পুজো কি একই দিন?", "Are Vasant Panchami and Saraswati Puja the same day?"),
      a: l("হ্যাঁ, মাঘের শুক্লা পঞ্চমী বসন্ত পঞ্চমী; বাংলায় এদিনই সরস্বতী পুজো।", "Yes. The bright Panchami of Magh is Vasant Panchami, and in Bengal it is the day of Saraswati Puja."),
    },
  ],
  events: [
    { name: l("সরস্বতী পুজো ২০২৭, কলকাতা", "Saraswati Puja 2027, Kolkata"), start: "2027-02-11", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("সরস্বতী পুজো ২০২৭, বাংলাদেশ", "Saraswati Puja 2027, Bangladesh"), start: "2027-02-11", place: { name: "Dhaka", locality: "Dhaka", country: "BD" } },
  ],
  links: [
    { href: "/greetings/saraswati", label: l("📚 সরস্বতী পুজোর শুভেচ্ছা কার্ড", "📚 Saraswati Puja greeting card"), primary: true },
    { href: "/blog/saraswati-puja-rituals", label: l("📖 সরস্বতী পুজোর রীতি", "📖 Saraswati Puja rituals") },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/poila-boishakh-2027", label: l("পয়লা বৈশাখ ১৪৩৪", "Poila Boishakh 1434") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};
