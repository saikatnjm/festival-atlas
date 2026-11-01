// Vishwakarma Puja, Akshaya Tritiya, Hanuman Jayanti and Guru Purnima 2027. Dates and times copied from Drik
// Panchang's pages for Kolkata and Dhaka (fetched 1 Nov 2026); background from Wikipedia, ETV Bharat and
// HinduPad where named. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2027`;
const KOL = "1275004";
const DHAKA = "1185241";

const VISH = (g: string, city: string) => ({ title: `Drik Panchang, Vishwakarma Puja 2027 (${city})`, url: drik("sankranti/vishwakarma-puja-date-time.html", g) });
const AKSH = (g: string, city: string) => ({ title: `Drik Panchang, Akshaya Tritiya 2027 (${city})`, url: drik("festivals/akshaya-tritiya/akshaya-tritiya-date-time.html", g) });
const HANU = (g: string, city: string) => ({ title: `Drik Panchang, Hanuman Jayanti 2027 (${city})`, url: drik("festivals/hanuman-jayanti/hanuman-jayanti-date-time.html", g) });
const GURU = (g: string, city: string) => ({ title: `Drik Panchang, Guru Purnima 2027 (${city})`, url: drik("festivals/guru-purnima/guru-purnima-date-time.html", g) });
const WIKI_VISH = { title: "Wikipedia, Vishvakarma Puja", url: "https://en.wikipedia.org/wiki/Vishvakarma_Puja" };
const ETV_KITE = { title: "ETV Bharat, Kolkata is set to reclaim the sky with kites on Viswakarma Puja", url: "https://etvbharat.com/en/!state/kolkata-is-set-to-reclaim-the-sky-with-kites-on-viswakarma-puja-enn24091605774" };
const WIKI_AKSH = { title: "Wikipedia, Akshaya Tritiya", url: "https://en.wikipedia.org/wiki/Akshaya_Tritiya" };
const HINDUPAD = { title: "HinduPad, Akshaya Tritiya celebrations in Bengal", url: "https://hindupad.com/akshaya-tritiya-celebrations-in-bengal-and-jat-farming-community/" };
const WIKI_HANU = { title: "Wikipedia, Hanuman Jayanti", url: "https://en.wikipedia.org/wiki/Hanuman_Jayanti" };
const WIKI_GURU = { title: "Wikipedia, Guru Purnima", url: "https://en.wikipedia.org/wiki/Guru_Purnima" };
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const place = { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const };

export const VISHWAKARMA_2027: FestivalPage = {
  path: "/vishwakarma-puja-2027",
  title: l("বিশ্বকর্মা পুজো ২০২৭: তারিখ আর কন্যা সংক্রান্তির সময়", "Vishwakarma Puja 2027: Date and Kanya Sankranti Time"),
  description: l(
    "বিশ্বকর্মা পুজো ২০২৭ শুক্রবার ১৭ সেপ্টেম্বর। কলকাতায় কন্যা সংক্রান্তির ক্ষণ দুপুর ২:১৪, ঢাকায় ২:৪৪; কারখানার পুজো আর ঘুড়ি ওড়ানোর কথা, সূত্রসহ।",
    "Vishwakarma Puja 2027 is Friday 17 September. Kanya Sankranti moment 2:14 pm in Kolkata, 2:44 pm in Dhaka; factory pujas and kite flying, sourced.",
  ),
  h1: l("বিশ্বকর্মা পুজো ২০২৭: কবে, কখন", "Vishwakarma Puja 2027: when and what time"),
  lead: l(
    "বিশ্বকর্মা পুজো ২০২৭-এ শুক্রবার ১৭ সেপ্টেম্বর, কলকাতা আর ঢাকা দু’জায়গাতেই; এটি কন্যা সংক্রান্তির দিন।",
    "Vishwakarma Puja in 2027 is on Friday 17 September, in both Kolkata and Dhaka. It is the day of Kanya Sankranti.",
  ),
  timings: {
    h2: l("তারিখ আর সংক্রান্তির ক্ষণ", "Date and Sankranti moment"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [{ day: l("শুক্র ১৭ সেপ্টেম্বর", "Fri 17 Sep"), what: l("কন্যা সংক্রান্তির ক্ষণ", "Kanya Sankranti moment"), when: l("দুপুর ২:১৪", "2:14 pm"), source: VISH(KOL, "Kolkata") }],
      bd: [{ day: l("শুক্র ১৭ সেপ্টেম্বর", "Fri 17 Sep"), what: l("কন্যা সংক্রান্তির ক্ষণ", "Kanya Sankranti moment"), when: l("দুপুর ২:৪৪", "2:44 pm"), source: VISH(DHAKA, "Dhaka") }],
    },
    note: l(
      "দ্রিকের পাতায় পুজোর আলাদা মুহূর্ত ছাপা নেই। বাংলার পঞ্জিকায় সংক্রান্তির দিন আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।",
      "Drik's page prints no separate puja muhurat. Bengali panjikas may differ on the Sankranti day, so check your panjika.",
    ),
  },
  sections: [
    {
      id: "workplace",
      h2: l("কারখানা আর কর্মশালার পুজো", "Pujas in factories and workshops"),
      paras: [
        {
          text: l(
            "উৎসবটা মূলত কারখানা আর শিল্পাঞ্চলে হয়, অনেক সময় কাজের জায়গাতেই। শ্রমিকেরা যন্ত্রপাতির নির্বিঘ্ন চলার জন্য প্রার্থনা করেন, আর পুজোর পরে প্রসাদ বিলি হয়।",
            "The festival is observed mainly in factories and industrial areas, often on the shop floor. Workers pray for their machines to run smoothly, and prasada is often handed out after the worship.",
          ),
          source: WIKI_VISH,
        },
      ],
    },
    {
      id: "kites",
      h2: l("কলকাতার আকাশে ঘুড়ি", "Kites over Kolkata"),
      paras: [
        {
          text: l(
            "২০২৪-এর একটি প্রতিবেদন বলছে, বিশ্বকর্মা পুজোর দিন কলকাতার আকাশ ঘুড়িতে ভরে যাওয়ার কথা; ঘুড়ি ওড়ানো কলকাতায় এই দিনের চেনা রীতি।",
            "A 2024 report says Kolkata's sky was expected to fill with kites on the day of Viswakarma Puja; flying kites is a familiar custom of the day in the city.",
          ),
          source: ETV_KITE,
        },
      ],
      tips: [l("ছাদে ঘুড়ি ওড়ালে কিনারা থেকে দূরে থেকো, আর বিদ্যুতের তার থেকেও।", "If you fly kites from a roof, stay away from the edge and from electric wires.")],
    },
  ],
  faq: [
    { q: l("বিশ্বকর্মা পুজো ২০২৭ কবে?", "When is Vishwakarma Puja in 2027?"), a: l("শুক্রবার ১৭ সেপ্টেম্বর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Friday 17 September 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("২০২৭-এ কন্যা সংক্রান্তি কখন?", "What time is Kanya Sankranti 2027 in Kolkata?"), a: l("কলকাতায় দুপুর ২:১৪, ঢাকায় দুপুর ২:৪৪, ১৭ সেপ্টেম্বর।", "2:14 pm in Kolkata and 2:44 pm in Dhaka, on 17 September.") },
    { q: l("বিশ্বকর্মা পুজোয় ঘুড়ি ওড়ায় কেন?", "Why do people fly kites on Vishwakarma Puja?"), a: l("কলকাতায় এটি দিনটির চেনা রীতি; আমাদের সূত্রে কারণ লেখা নেই, তাই কারণ নিয়ে কিছু বলছি না।", "It is a familiar custom of the day in Kolkata; our source gives no reason, so we don't state one.") },
  ],
  events: [{ name: l("বিশ্বকর্মা পুজো ২০২৭", "Vishwakarma Puja 2027"), start: "2027-09-17", place }],
  links: [CAL, { href: "/guru-purnima-2027", label: l("গুরু পূর্ণিমা ২০২৭", "Guru Purnima 2027") }, { href: "/durga-puja-2027", label: l("🥁 দুর্গাপুজো ২০২৭", "🥁 Durga Puja 2027") }],
  lastChecked: "2026-11-01",
};

export const AKSHAYA_2027: FestivalPage = {
  path: "/akshaya-tritiya-2027",
  title: l("অক্ষয় তৃতীয়া ২০২৭: তারিখ, পুজোর সময়, সোনা কেনার সময়", "Akshaya Tritiya 2027: Date, Puja Muhurat & Gold Buying Time"),
  description: l(
    "অক্ষয় তৃতীয়া ২০২৭ রবিবার ৯ মে। কলকাতায় পুজোর সময় ভোর ৫:০০ থেকে সকাল ৯:০৩, তৃতীয়া তিথি আর সোনা কেনার সময়; ঢাকার সময়ও, সূত্রসহ।",
    "Akshaya Tritiya 2027 is Sunday 9 May. Kolkata puja muhurat 5:00 am to 9:03 am, Tritiya tithi and gold buying time, plus Dhaka times, sourced.",
  ),
  h1: l("অক্ষয় তৃতীয়া ২০২৭: কবে, কখন", "Akshaya Tritiya 2027: when and what time"),
  lead: l(
    "অক্ষয় তৃতীয়া ২০২৭-এ রবিবার ৯ মে, কলকাতা আর ঢাকায়; তৃতীয়া তিথি শুরু শনিবার ৮ মে।",
    "Akshaya Tritiya in 2027 is on Sunday 9 May, in Kolkata and Dhaka; the Tritiya tithi begins on Saturday 8 May.",
  ),
  timings: {
    h2: l("পুজোর সময়, তৃতীয়া তিথি আর সোনা কেনার সময়", "Puja muhurat, Tritiya tithi and gold buying time"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("রবি ৯ মে", "Sun 9 May"), what: l("অক্ষয় তৃতীয়ার পুজোর মুহূর্ত", "Akshaya Tritiya puja muhurat"), when: l("ভোর ৫:০০ থেকে সকাল ৯:০৩", "5:00 am to 9:03 am"), source: AKSH(KOL, "Kolkata") },
        { day: l("৮–৯ মে", "8–9 May"), what: l("তৃতীয়া তিথি", "Tritiya tithi"), when: l("৮ মে সকাল ১১:৪২ থেকে ৯ মে সকাল ৯:০৩", "8 May 11:42 am to 9 May 9:03 am"), source: AKSH(KOL, "Kolkata") },
        { day: l("শনি ৮ মে", "Sat 8 May"), what: l("সোনা কেনার সময়", "Gold purchase timing"), when: l("সকাল ১১:৪২ থেকে ৯ মে ভোর ৫:০০", "11:42 am to 5:00 am on 9 May"), source: AKSH(KOL, "Kolkata") },
        { day: l("রবি ৯ মে", "Sun 9 May"), what: l("সোনা কেনার সময়", "Gold purchase timing"), when: l("ভোর ৫:০০ থেকে সকাল ৯:০৩", "5:00 am to 9:03 am"), source: AKSH(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("রবি ৯ মে", "Sun 9 May"), what: l("অক্ষয় তৃতীয়ার পুজোর মুহূর্ত", "Akshaya Tritiya puja muhurat"), when: l("ভোর ৫:২০ থেকে সকাল ৯:৩৩", "5:20 am to 9:33 am"), source: AKSH(DHAKA, "Dhaka") },
        { day: l("৮–৯ মে", "8–9 May"), what: l("তৃতীয়া তিথি", "Tritiya tithi"), when: l("৮ মে দুপুর ১২:১২ থেকে ৯ মে সকাল ৯:৩৩", "8 May 12:12 pm to 9 May 9:33 am"), source: AKSH(DHAKA, "Dhaka") },
        { day: l("শনি ৮ মে", "Sat 8 May"), what: l("সোনা কেনার সময়", "Gold purchase timing"), when: l("দুপুর ১২:১২ থেকে ৯ মে ভোর ৫:২০", "12:12 pm to 5:20 am on 9 May"), source: AKSH(DHAKA, "Dhaka") },
        { day: l("রবি ৯ মে", "Sun 9 May"), what: l("সোনা কেনার সময়", "Gold purchase timing"), when: l("ভোর ৫:২০ থেকে সকাল ৯:৩৩", "5:20 am to 9:33 am"), source: AKSH(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকায় সময় আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas may differ; check your panjika."),
  },
  sections: [
    {
      id: "bengal",
      h2: l("বাংলায় হালখাতা আর তীর্থের দরজা", "Halkhata and the temple openings"),
      paras: [
        {
          text: l(
            "এই সূত্র অনুযায়ী অক্ষয় তৃতীয়ায় বাংলার মানুষ হালখাতা পালন করেন: নতুন হিসেবের খাতা শুরু, সঙ্গে গণেশ আর লক্ষ্মীপুজো। পয়লা বৈশাখের হালখাতার জন্য আলাদা পাতা আছে।",
            "According to this source, people in Bengal observe Halkhata on Akshaya Tritiya: starting a new account book, with worship of Ganesha and Lakshmi. Poila Boishakh has its own page.",
          ),
          source: HINDUPAD,
        },
        {
          text: l(
            "উইকিপিডিয়া লিখেছে, অক্ষয় তৃতীয়ার শুভ দিনে যমুনোত্রী আর গঙ্গোত্রী মন্দির খোলে। কেদার-বদরীর দরজা খোলার তারিখ সূত্রগুলোতে মেলে না, তাই এখানে দিলাম না।",
            "Wikipedia says the Yamunotri and Gangotri temples open on the auspicious occasion of Akshaya Tritiya. Sources disagree on the Kedarnath and Badrinath opening dates, so we don't give them here.",
          ),
          source: WIKI_AKSH,
        },
      ],
    },
  ],
  faq: [
    { q: l("অক্ষয় তৃতীয়া ২০২৭ কবে?", "When is Akshaya Tritiya in 2027?"), a: l("রবিবার ৯ মে ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Sunday 9 May 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("অক্ষয় তৃতীয়ায় সোনা কেনার সময় কখন?", "Akshaya Tritiya 2027 gold buying time Kolkata"), a: l("কলকাতায় ৮ মে সকাল ১১:৪২ থেকে ৯ মে ভোর ৫:০০, আর ৯ মে ভোর ৫:০০ থেকে সকাল ৯:০৩ (দ্রিক পঞ্চাঙ্গ)।", "Kolkata: 11:42 am on 8 May to 5:00 am on 9 May, and 5:00 am to 9:03 am on 9 May (Drik Panchang).") },
    { q: l("অক্ষয় তৃতীয়ার পুজোর সময় কখন?", "What is the Akshaya Tritiya 2027 puja muhurat?"), a: l("কলকাতায় ভোর ৫:০০ থেকে সকাল ৯:০৩; ঢাকায় ভোর ৫:২০ থেকে সকাল ৯:৩৩।", "Kolkata 5:00 am to 9:03 am; Dhaka 5:20 am to 9:33 am.") },
    { q: l("তৃতীয়া তিথি কখন শুরু আর শেষ?", "When does the Tritiya tithi begin and end?"), a: l("কলকাতায় ৮ মে সকাল ১১:৪২ থেকে ৯ মে সকাল ৯:০৩।", "In Kolkata, 8 May 11:42 am to 9 May 9:03 am.") },
  ],
  events: [{ name: l("অক্ষয় তৃতীয়া ২০২৭", "Akshaya Tritiya 2027"), start: "2027-05-09", place }],
  links: [{ href: "/poila-boishakh-2027", label: l("🎉 পয়লা বৈশাখ ১৪৩৪", "🎉 Poila Boishakh 1434"), primary: true }, CAL, { href: "/hanuman-jayanti-2027", label: l("হনুমান জয়ন্তী ২০২৭", "Hanuman Jayanti 2027") }],
  lastChecked: "2026-11-01",
};

export const HANUMAN_2027: FestivalPage = {
  path: "/hanuman-jayanti-2027",
  title: l("হনুমান জয়ন্তী ২০২৭: তারিখ আর চৈত্র পূর্ণিমা তিথির সময়", "Hanuman Jayanti 2027: Date and Purnima Tithi Time"),
  description: l(
    "হনুমান জয়ন্তী ২০২৭ মঙ্গলবার ২০ এপ্রিল। কলকাতা আর ঢাকায় চৈত্র পূর্ণিমা তিথি শুরু আর শেষের সময়, সূত্রসহ; অন্য রাজ্যের রীতি নিয়ে সংক্ষেপে।",
    "Hanuman Jayanti 2027 is Tuesday 20 April. Chaitra Purnima tithi start and end times for Kolkata and Dhaka, sourced, with a note on other regions.",
  ),
  h1: l("হনুমান জয়ন্তী ২০২৭: কবে, কখন", "Hanuman Jayanti 2027: when and what time"),
  lead: l(
    "হনুমান জয়ন্তী ২০২৭-এ মঙ্গলবার ২০ এপ্রিল, কলকাতা আর ঢাকায়; চৈত্র পূর্ণিমার দিন। দ্রিক পঞ্চাঙ্গ অনুযায়ী পূর্ণিমা তিথি ওই সকালেই শুরু।",
    "Hanuman Jayanti in 2027 is on Tuesday 20 April, in Kolkata and Dhaka, on Chaitra Purnima. Per Drik Panchang the Purnima tithi begins that morning.",
  ),
  timings: {
    h2: l("পূর্ণিমা তিথি", "Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [{ day: l("২০–২১ এপ্রিল", "20–21 Apr"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২০ এপ্রিল ভোর ৪:৫১ থেকে ২১ এপ্রিল ভোর ৩:৫৬", "20 Apr 4:51 am to 21 Apr 3:56 am"), source: HANU(KOL, "Kolkata") }],
      bd: [{ day: l("২০–২১ এপ্রিল", "20–21 Apr"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২০ এপ্রিল ভোর ৫:২১ থেকে ২১ এপ্রিল ভোর ৪:২৬", "20 Apr 5:21 am to 21 Apr 4:26 am"), source: HANU(DHAKA, "Dhaka") }],
    },
    note: l(
      "দ্রিক অন্য রাজ্যের রীতির কথা লিখেছে (তামিলনাড়ুতে মার্গশীর্ষ অমাবস্যা, কর্নাটকে মার্গশীর্ষ শুক্লা ত্রয়োদশী), কিন্তু ২০২৭-এর কোনও তারিখ ছাপেনি।",
      "Drik describes other regional observances (Tamil Nadu on Margashirsha Amavasya, Karnataka on Margashirsha Shukla Trayodashi) but prints no 2027 dates for them.",
    ),
  },
  sections: [
    {
      id: "about",
      h2: l("কোন দিনে হনুমান জয়ন্তী", "Which day is Hanuman Jayanti"),
      paras: [
        {
          text: l(
            "উত্তর ভারতের বেশিরভাগ রাজ্যে উৎসবটা চৈত্র মাসের পূর্ণিমায়। তেলুগু রাজ্যে আর কর্নাটকে তারিখ আলাদা, আর তামিলনাড়ু ও কেরলে ধনু (মার্গাঝি) মাসে।",
            "Most northern Indian states observe it on the full moon of Chaitra. The dates differ in the Telugu states and Karnataka, and in Tamil Nadu and Kerala it falls in the Dhanu (Margazhi) month.",
          ),
          source: WIKI_HANU,
        },
      ],
    },
  ],
  faq: [
    { q: l("হনুমান জয়ন্তী ২০২৭ কবে?", "When is Hanuman Jayanti in 2027?"), a: l("মঙ্গলবার ২০ এপ্রিল ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Tuesday 20 April 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("হনুমান জয়ন্তীর পূর্ণিমা তিথি কখন?", "When is the Purnima tithi for Hanuman Jayanti 2027?"), a: l("কলকাতায় ২০ এপ্রিল ভোর ৪:৫১ থেকে ২১ এপ্রিল ভোর ৩:৫৬; ঢাকায় ভোর ৫:২১ থেকে ভোর ৪:২৬।", "Kolkata: 20 Apr 4:51 am to 21 Apr 3:56 am. Dhaka: 5:21 am to 4:26 am.") },
    { q: l("হনুমান জয়ন্তী কি চৈত্র পূর্ণিমাতেই?", "Is Hanuman Jayanti always on Chaitra Purnima?"), a: l("উত্তর ভারতে হ্যাঁ; অন্য রাজ্যে তারিখ আলাদা, তবে ২০২৭-এর তারিখ দ্রিক ছাপেনি।", "In northern India, yes; other regions differ, but Drik prints no 2027 dates for them.") },
  ],
  events: [{ name: l("হনুমান জয়ন্তী ২০২৭", "Hanuman Jayanti 2027"), start: "2027-04-20", place }],
  links: [{ href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027"), primary: true }, CAL, { href: "/akshaya-tritiya-2027", label: l("অক্ষয় তৃতীয়া ২০২৭", "Akshaya Tritiya 2027") }, { href: "/ram-navami-2027", label: l("রামনবমী ২০২৭", "Ram Navami 2027") }],
  lastChecked: "2026-11-01",
};

export const GURU_PURNIMA_2027: FestivalPage = {
  path: "/guru-purnima-2027",
  title: l("গুরু পূর্ণিমা ২০২৭: তারিখ আর পূর্ণিমা তিথির সময়", "Guru Purnima 2027: Date and Purnima Tithi Time"),
  description: l(
    "গুরু পূর্ণিমা ২০২৭ রবিবার ১৮ জুলাই। কলকাতা আর ঢাকার পূর্ণিমা তিথি শুরু ও শেষের সময়, ব্যাস পূর্ণিমার পটভূমি, সূত্রসহ।",
    "Guru Purnima 2027 is Sunday 18 July. Purnima tithi start and end times for Kolkata and Dhaka, and the Vyasa Purnima background, sourced.",
  ),
  h1: l("গুরু পূর্ণিমা ২০২৭: কবে, কখন", "Guru Purnima 2027: when and what time"),
  lead: l(
    "গুরু পূর্ণিমা ২০২৭-এ রবিবার ১৮ জুলাই, কলকাতা আর ঢাকায়। আষাঢ় মাসের পূর্ণিমায় উৎসব, যার আর এক নাম ব্যাস পূর্ণিমা।",
    "Guru Purnima in 2027 is on Sunday 18 July, in Kolkata and Dhaka. It is held on the Ashadha full moon and is also called Vyasa Purnima.",
  ),
  timings: {
    h2: l("পূর্ণিমা তিথি", "Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [{ day: l("১৭–১৮ জুলাই", "17–18 Jul"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১৭ জুলাই সন্ধে ৬:৪৮ থেকে ১৮ জুলাই রাত ৯:১৪", "17 Jul 6:48 pm to 18 Jul 9:14 pm"), source: GURU(KOL, "Kolkata") }],
      bd: [{ day: l("১৭–১৮ জুলাই", "17–18 Jul"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১৭ জুলাই সন্ধে ৭:১৮ থেকে ১৮ জুলাই রাত ৯:৪৪", "17 Jul 7:18 pm to 18 Jul 9:44 pm"), source: GURU(DHAKA, "Dhaka") }],
    },
    note: l("বাংলার পঞ্জিকায় তিথির সময় আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas may differ on tithi times; check your panjika."),
  },
  sections: [
    {
      id: "vyasa",
      h2: l("ব্যাস পূর্ণিমা", "Vyasa Purnima"),
      paras: [
        {
          text: l(
            "আষাঢ় মাসের পূর্ণিমায় (জুন–জুলাই) গুরু পূর্ণিমা পালিত হয়। দিনটি বেদব্যাসের জন্মদিন বলে এর নাম ব্যাস পূর্ণিমা; তিনি মহাভারত লিখেছেন আর বেদকে চার ভাগে ভাগ করেছেন বলে বলা হয়।",
            "Guru Purnima is observed on the full moon of Ashadha (June–July). It marks the birthday of Veda Vyasa, hence the name Vyasa Purnima; he is credited with writing the Mahabharata and dividing the Vedas into four parts.",
          ),
          source: WIKI_GURU,
        },
      ],
    },
  ],
  faq: [
    { q: l("গুরু পূর্ণিমা ২০২৭ কবে?", "When is Guru Purnima in 2027?"), a: l("রবিবার ১৮ জুলাই ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Sunday 18 July 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("গুরু পূর্ণিমার পূর্ণিমা তিথি কখন?", "What time is the Purnima tithi for Guru Purnima 2027 in Kolkata?"), a: l("কলকাতায় ১৭ জুলাই সন্ধে ৬:৪৮ থেকে ১৮ জুলাই রাত ৯:১৪; ঢাকায় সন্ধে ৭:১৮ থেকে রাত ৯:৪৪।", "Kolkata: 17 Jul 6:48 pm to 18 Jul 9:14 pm. Dhaka: 7:18 pm to 9:44 pm.") },
    { q: l("ব্যাস পূর্ণিমা কী?", "What is Vyasa Purnima?"), a: l("গুরু পূর্ণিমারই আর এক নাম; দিনটি বেদব্যাসের জন্মদিন হিসেবে পালিত হয়।", "Another name for Guru Purnima; the day marks the birthday of Veda Vyasa.") },
  ],
  events: [{ name: l("গুরু পূর্ণিমা ২০২৭", "Guru Purnima 2027"), start: "2027-07-18", place }],
  links: [{ href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027"), primary: true }, CAL, { href: "/vishwakarma-puja-2027", label: l("বিশ্বকর্মা পুজো ২০২৭", "Vishwakarma Puja 2027") }, { href: "/hanuman-jayanti-2027", label: l("হনুমান জয়ন্তী ২০২৭", "Hanuman Jayanti 2027") }],
  lastChecked: "2026-11-01",
};
