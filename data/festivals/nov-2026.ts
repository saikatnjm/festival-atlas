// Dhanteras, Kartik Puja and Tulsi Vivah 2026. Dates and times copied from Drik Panchang pages for Kolkata and
// Dhaka (fetched 1 Nov 2026); Kartik Puja day rule from MyAstrology's Kartik Puja page, Katwa facts from The
// Statesman (via bengalinfo.com), background from Wikipedia. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2026`;
const KOL = "1275004";
const DHAKA = "1185241";

const DHAN = (g: string, city: string) => ({ title: `Drik Panchang, Dhanteras 2026 (${city})`, url: drik("festivals/dhanteras/festivals-dhanteras-puja-timings.html", g) });
const TULSI = (g: string, city: string) => ({ title: `Drik Panchang, Tulasi Vivah 2026 (${city})`, url: drik("festivals/tulasi-vivah/tulasi-vivah-date-time.html", g) });
const EKADASHI = (g: string, city: string) => ({ title: `Drik Panchang, Ekadashi dates 2026 (${city})`, url: drik("vrats/ekadashidates.html", g) });
const SANKRANTI = (g: string, city: string) => ({ title: `Drik Panchang, Sankranti 2026 (${city})`, url: drik("sankranti/sankranti.html", g) });
const BENGALI_CAL = { title: "Drik Panchang, Bengali calendar 2026 (Kolkata)", url: drik("bengali/calendar/bengali-calendar.html", KOL) };
const MYASTRO = { title: "MyAstrology, Kartik Puja 2026", url: "https://myastrology.in/en/utsab/kartik-puja" };
const STATESMAN = { title: "The Statesman, Excitement of Kartik duel grips Burdwan (copy on bengalinfo.com)", url: "https://bengalinfo.com/newsdetail.php?newsid=342351" };
const WIKI_DHAN = { title: "Wikipedia, Dhanteras", url: "https://en.wikipedia.org/wiki/Dhanteras" };
const WIKI_KARTIKEYA = { title: "Wikipedia, Kartikeya", url: "https://en.wikipedia.org/wiki/Kartikeya" };
const WIKI_TULSI = { title: "Wikipedia, Tulasi Vivaha", url: "https://en.wikipedia.org/wiki/Tulsi_Vivah" };
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };

export const DHANTERAS_2026: FestivalPage = {
  path: "/dhanteras-2026",
  title: l("ধনতেরাস ২০২৬: তারিখ, পুজোর শুভ সময়", "Dhanteras 2026: Date, Puja Muhurat & Time"),
  description: l(
    "ধনতেরাস ২০২৬ শুক্রবার ৬ নভেম্বর। কলকাতায় পুজোর শুভ সময় বিকেল ৫:২৮ থেকে সন্ধে ৭:২৬, প্রদোষ কাল আর ত্রয়োদশী তিথি, ঢাকার সময়ও, সূত্রসহ।",
    "Dhanteras 2026 is Friday 6 November. Kolkata puja muhurat 5:28 to 7:26 pm, Pradosh Kaal and Trayodashi tithi, plus Dhaka times, all sourced.",
  ),
  h1: l("ধনতেরাস ২০২৬: কবে, কখন", "Dhanteras 2026: when and what time"),
  lead: l(
    "দীপাবলির প্রথম দিন ধনতেরাস (ধনত্রয়োদশী); ২০২৬-এ শুক্রবার ৬ নভেম্বর, কলকাতা আর ঢাকা দু’জায়গাতেই। কালীপুজো রবিবার ৮ নভেম্বর।",
    "Dhanteras (Dhantrayodashi) opens Diwali; in 2026 it is Friday 6 November, in both Kolkata and Dhaka. Kali Puja follows on Sunday 8 November.",
  ),
  timings: {
    h2: l("ধনতেরাসের পুজোর শুভ সময়, প্রদোষ কাল আর ত্রয়োদশী", "Puja muhurat, Pradosh Kaal and Trayodashi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শুক্র ৬ নভেম্বর", "Fri 6 Nov"), what: l("ধনতেরাস পুজোর শুভ সময়", "Dhanteras puja muhurat"), when: l("বিকেল ৫:২৮ থেকে সন্ধে ৭:২৬", "5:28 pm to 7:26 pm"), source: DHAN(KOL, "Kolkata") },
        { day: l("শুক্র ৬ নভেম্বর", "Fri 6 Nov"), what: l("প্রদোষ কাল", "Pradosh Kaal"), when: l("বিকেল ৪:৫৬ থেকে সন্ধে ৭:৩০", "4:56 pm to 7:30 pm"), source: DHAN(KOL, "Kolkata") },
        { day: l("৬–৭ নভেম্বর", "6–7 Nov"), what: l("ত্রয়োদশী তিথি", "Trayodashi tithi"), when: l("৬ নভেম্বর সকাল ১০:৩০ থেকে ৭ নভেম্বর সকাল ১০:৪৭", "6 Nov 10:30 am to 7 Nov 10:47 am"), source: DHAN(KOL, "Kolkata") },
        { day: l("শুক্র ৬ নভেম্বর", "Fri 6 Nov"), what: l("যম দীপম", "Yama Deepam"), when: l("৬ নভেম্বর (আলাদা সময় দেওয়া নেই)", "6 Nov (no separate time given)"), source: DHAN(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("শুক্র ৬ নভেম্বর", "Fri 6 Nov"), what: l("ধনতেরাস পুজোর শুভ সময়", "Dhanteras puja muhurat"), when: l("বিকেল ৫:৪৮ থেকে সন্ধে ৭:৪৫", "5:48 pm to 7:45 pm"), source: DHAN(DHAKA, "Dhaka") },
        { day: l("শুক্র ৬ নভেম্বর", "Fri 6 Nov"), what: l("প্রদোষ কাল", "Pradosh Kaal"), when: l("বিকেল ৫:১৭ থেকে সন্ধে ৭:৫১", "5:17 pm to 7:51 pm"), source: DHAN(DHAKA, "Dhaka") },
        { day: l("৬–৭ নভেম্বর", "6–7 Nov"), what: l("ত্রয়োদশী তিথি", "Trayodashi tithi"), when: l("৬ নভেম্বর সকাল ১১:০০ থেকে ৭ নভেম্বর সকাল ১১:১৭", "6 Nov 11:00 am to 7 Nov 11:17 am"), source: DHAN(DHAKA, "Dhaka") },
        { day: l("শুক্র ৬ নভেম্বর", "Fri 6 Nov"), what: l("যম দীপম", "Yama Deepam"), when: l("৬ নভেম্বর (আলাদা সময় দেওয়া নেই)", "6 Nov (no separate time given)"), source: DHAN(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "দ্রিক পঞ্চাঙ্গ যম দীপমের আলাদা কোনো সময় দেয়নি, শুধু দিনটা। বৃষভ কালও পুজোর শুভ সময়ের সঙ্গে একই।",
      "Drik Panchang gives only the day for Yama Deepam, not a separate time. Its Vrishabha Kaal is the same as the puja muhurat.",
    ),
  },
  sections: [
    {
      id: "about",
      h2: l("ধনতেরাস কী", "What is Dhanteras"),
      paras: [
        {
          text: l(
            "ধনতেরাস, ধনত্রয়োদশীও বলা হয়, কৃষ্ণপক্ষের ত্রয়োদশীতে পড়ে আর দীপাবলির প্রথম দিন। এদিন আয়ুর্বেদের দেবতা ধন্বন্তরির পুজো হয়; সমুদ্রমন্থনের সময় তিনি অমৃতের কলস আর আয়ুর্বেদের গ্রন্থ হাতে উঠে এসেছিলেন বলে ঐতিহ্য বলে।",
            "Dhanteras, also called Dhanatrayodashi, falls on the 13th lunar day of the dark fortnight and is the first day of Diwali. Dhanvantari, god of Ayurveda, is worshipped; tradition says he rose from the churning of the ocean holding a pot of amrita and a text on Ayurveda.",
          ),
          source: WIKI_DHAN,
        },
      ],
    },
    {
      id: "customs",
      h2: l("এদিন লোকে কী করে", "What people do"),
      paras: [
        {
          text: l(
            "নতুন জিনিস কেনা, বিশেষ করে সোনা-রুপোর গয়না আর নতুন বাসনপত্র, শুভ ধরা হয়; এখন ধনতেরাস সোনা, রুপো আর ধাতুর রান্নার সরঞ্জাম কেনার সবচেয়ে জনপ্রিয় দিন। যমের উদ্দেশে প্রদীপ জ্বালানোর রীতিও আছে: গমের আটার তেরোটা প্রদীপ দক্ষিণ মুখে রাখা হয়।",
            "Buying new things, especially gold or silver and new utensils, is considered auspicious, and today Dhanteras is the most popular occasion for buying gold, silver and metal kitchenware. Lamps are also lit for Yama: thirteen wheat-flour diyas are placed facing south.",
          ),
          source: WIKI_DHAN,
        },
      ],
      tips: [
        l("গয়না কেনার আগে হলমার্ক আর বিল দেখে নিও।", "Check the hallmark and the bill before buying jewellery."),
        l("প্রদীপ জ্বালালে পর্দা, কাগজ আর বাচ্চাদের থেকে দূরে রেখো।", "Keep lit lamps away from curtains, paper and children."),
      ],
    },
    {
      id: "kali",
      h2: l("ধনতেরাসের পরে কালীপুজো", "After Dhanteras comes Kali Puja"),
      paras: [
        {
          text: l(
            "দ্রিকের বাংলা ক্যালেন্ডারে ২০২৬-এ ধনতেরাস শুক্রবার ৬ নভেম্বর, কালীপুজো আর দীপাবলি রবিবার ৮ নভেম্বর, ভাইফোঁটা বুধবার ১১ নভেম্বর।",
            "Drik Panchang's Bengali calendar lists Dhanteras on Friday 6 November 2026, Kali Puja and Dipabali on Sunday 8 November, and Bhai Phonta on Wednesday 11 November.",
          ),
          source: BENGALI_CAL,
        },
      ],
    },
  ],
  faq: [
    { q: l("ধনতেরাস কবে ২০২৬?", "When is Dhanteras in 2026?"), a: l("শুক্রবার ৬ নভেম্বর ২০২৬, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Friday 6 November 2026, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("ধনতেরাসের শুভ সময় কলকাতায় কখন?", "What is the Dhanteras 2026 shubh muhurat in Kolkata?"), a: l("বিকেল ৫:২৮ থেকে সন্ধে ৭:২৬; প্রদোষ কাল বিকেল ৪:৫৬ থেকে সন্ধে ৭:৩০।", "5:28 pm to 7:26 pm; Pradosh Kaal is 4:56 pm to 7:30 pm.") },
    { q: l("ঢাকায় ধনতেরাসের পুজোর সময় কখন?", "What is the Dhanteras 2026 puja time in Dhaka?"), a: l("বিকেল ৫:৪৮ থেকে সন্ধে ৭:৪৫; প্রদোষ কাল বিকেল ৫:১৭ থেকে সন্ধে ৭:৫১।", "5:48 pm to 7:45 pm; Pradosh Kaal is 5:17 pm to 7:51 pm.") },
    { q: l("ত্রয়োদশী তিথি কখন শুরু?", "When does the Trayodashi tithi start for Dhanteras 2026?"), a: l("কলকাতায় ৬ নভেম্বর সকাল ১০:৩০, শেষ ৭ নভেম্বর সকাল ১০:৪৭; ঢাকায় সকাল ১১:০০ থেকে পরদিন সকাল ১১:১৭।", "Kolkata: 10:30 am on 6 Nov to 10:47 am on 7 Nov. Dhaka: 11:00 am to 11:17 am the next day.") },
    { q: l("ধনতেরাসে কী কেনা হয়?", "What do people buy on Dhanteras?"), a: l("সোনা, রুপো আর নতুন বাসনপত্র কেনা শুভ ধরা হয় (উইকিপিডিয়া)।", "Gold, silver and new utensils are considered auspicious (Wikipedia).") },
  ],
  events: [{ name: l("ধনতেরাস ২০২৬", "Dhanteras 2026"), start: "2026-11-06", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
  links: [
    { href: "/kali-puja-2026", label: l("🪔 কালীপুজো ২০২৬", "🪔 Kali Puja 2026"), primary: true },
    CAL,
    { href: "/kartik-puja-2026", label: l("কার্তিক পুজো ২০২৬", "Kartik Puja 2026") },
    { href: "/tulsi-vivah-2026", label: l("তুলসী বিবাহ ২০২৬", "Tulsi Vivah 2026") },
  ],
  lastChecked: "2026-11-01",
};

export const KARTIK_PUJA_2026: FestivalPage = {
  path: "/kartik-puja-2026",
  title: l("কার্তিক পুজো ২০২৬: তারিখ, কার্তিক সংক্রান্তি", "Kartik Puja 2026: Date, Kartik Sankranti & Katwa"),
  description: l(
    "কার্তিক পুজো ২০২৬ কার্তিক সংক্রান্তিতে, ১৬ নভেম্বর (দ্রিক) বা ১৭ নভেম্বর (সূর্যসিদ্ধান্ত)। সংক্রান্তির সময় কলকাতা আর ঢাকায়, কাটোয়ার কার্তিক লড়াই, সূত্রসহ।",
    "Kartik Puja 2026 falls on Kartik Sankranti: 16 Nov (Drik) or 17 Nov (Surya Siddhanta). Sankranti time for Kolkata and Dhaka, Katwa's Kartik Larai, sourced.",
  ),
  h1: l("কার্তিক পুজো ২০২৬: কবে, কখন", "Kartik Puja 2026: when and what time"),
  lead: l(
    "বাংলায় কার্তিক পুজো হয় কার্তিক মাসের শেষ দিনে, সূর্যের বৃশ্চিক রাশিতে ঢোকার দিনে। দ্রিক সিদ্ধান্তে সংক্রান্তি সোমবার ১৬ নভেম্বর ২০২৬; সূর্যসিদ্ধান্তে ১৭ নভেম্বর।",
    "In Bengal, Kartik Puja is held on the last day of the month of Kartik, when the Sun enters Vrishchika. By Drik Siddhanta the Sankranti is Monday 16 November 2026; by Surya Siddhanta, 17 November.",
  ),
  timings: {
    h2: l("বৃশ্চিক সংক্রান্তির সময়", "Vrishchika Sankranti time"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("সোম ১৬ নভেম্বর", "Mon 16 Nov"), what: l("বৃশ্চিক সংক্রান্তি", "Vrishchika Sankranti"), when: l("সন্ধে ৭:৪৮", "7:48 pm"), source: SANKRANTI(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("সোম ১৬ নভেম্বর", "Mon 16 Nov"), what: l("বৃশ্চিক সংক্রান্তি", "Vrishchika Sankranti"), when: l("রাত ৮:১৮", "8:18 pm"), source: SANKRANTI(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "কার্তিক পুজো চান্দ্র তিথিতে নয়, সংক্রান্তিতে; দ্রিক সিদ্ধান্তে ১৬ নভেম্বর আর পশ্চিমবঙ্গে প্রচলিত সূর্যসিদ্ধান্তে ১৭ নভেম্বর (মাইঅ্যাস্ট্রোলজি)। কোন দিন মানবে তা পরিবার আর স্থানীয় রীতির ব্যাপার; নিজের পঞ্জিকা মিলিয়ে নিও। দ্রিকের পাতায় কার্তিক পুজোর আলাদা কোনো সময় নেই।",
      "Kartik Puja follows the Sankranti, not a lunar tithi: 16 Nov by Drik Siddhanta, 17 Nov by Surya Siddhanta, which is common in West Bengal (MyAstrology). Which day you keep depends on family and local custom; check your panjika. Drik's page gives no separate Kartik Puja time.",
    ),
  },
  sections: [
    {
      id: "day",
      h2: l("কোন দিন কার্তিক পুজো", "Which day is Kartik Puja"),
      paras: [
        {
          text: l(
            "সৌর মাস কার্তিকের শেষ দিনে, অর্থাৎ কার্তিক সংক্রান্তির সন্ধে-রাতে কার্তিক পুজো; সূর্য রাশি বদলায় বলে দিনটা ঠিক হয়, চাঁদের তিথিতে নয়। দ্রিক সিদ্ধান্তে ২০২৬-এ এটা ৩০ কার্তিক ১৪৩৩, সোমবার ১৬ নভেম্বর; সূর্যসিদ্ধান্তে ১৭ নভেম্বর, মঙ্গলবার।",
            "Kartik Puja is held on the last day of the solar month of Kartik, in the evening and night of Kartik Sankranti; the day depends on the Sun changing sign, not on the Moon's tithi. By Drik Siddhanta in 2026 it is 30 Kartik 1433, Monday 16 November; by Surya Siddhanta, Tuesday 17 November.",
          ),
          source: MYASTRO,
        },
        {
          text: l(
            "দ্রিকের বাংলা ক্যালেন্ডারেও বৃশ্চিক সংক্রান্তি সোমবার ১৬ নভেম্বর ২০২৬।",
            "Drik Panchang's Bengali calendar also lists Vrishchika Sankranti on Monday 16 November 2026.",
          ),
          source: BENGALI_CAL,
        },
      ],
    },
    {
      id: "kartikeya",
      h2: l("বাংলায় কার্তিক ঠাকুর", "Kartikeya in Bengal"),
      paras: [
        {
          text: l(
            "পূর্ব ভারতে কার্তিকের মাটির মূর্তি কার্তিক মাসের শেষ দিনে সদ্য বিয়ে হওয়া দম্পতির বাড়ির দরজায় বন্ধুরা রেখে আসে বলে লেখা আছে; পরদিন সন্ধেয় পুজো হয় আর খেলনা নিবেদন করা হয়। পশ্চিমবঙ্গে কার্তিককে সন্তানলাভের সঙ্গেও জড়ানো হয়।",
            "In East India, a clay model of the deity is placed before the door of a newlywed couple's house, usually by their friends, on the last day of Kartik; it is worshipped the next evening and offered toys. In West Bengal Kartikeya is also associated with childbirth.",
          ),
          source: WIKI_KARTIKEYA,
        },
      ],
    },
    {
      id: "katwa",
      h2: l("কাটোয়ার কার্তিক লড়াই", "Katwa's Kartik Larai"),
      paras: [
        {
          text: l(
            "কাটোয়ার কার্তিক পুজো কার্তিক লড়াই নামে বিখ্যাত। ইতিহাসবিদ স্বপন কুমার ঠাকুরের মতে অষ্টাদশ শতকে কাটোয়ার তাঁতিরা ছোট কার্তিক মূর্তি আর তিনকোনা বাঁশের ‘থাক’ চালু করেন; একেকটা থাকে ৩১টি পর্যন্ত মূর্তি থাকে। প্রায় ৩০০ বছর ধরে এই ধারা চলছে।",
            "Katwa's Kartik Puja is famous as Kartik Larai. Historian Swapan Kumar Thakur says weavers of 18th-century Katwa introduced small Kartik idols and triangular bamboo galleries called Thaka, each holding up to 31 idols; the tradition has run for nearly 300 years.",
          ),
          source: STATESMAN,
        },
      ],
      tips: [l("শোভাযাত্রার রাতে কাটোয়ায় ভিড় প্রচুর; ফেরার ট্রেন-বাসের সময় আগে দেখে নিও।", "Katwa is very crowded on procession nights; check your return train or bus beforehand.")],
    },
  ],
  faq: [
    { q: l("২০২৬-এ কার্তিক পুজো কবে?", "When is Kartik Puja in 2026?"), a: l("কার্তিক সংক্রান্তিতে: দ্রিক সিদ্ধান্তে সোমবার ১৬ নভেম্বর, সূর্যসিদ্ধান্তে মঙ্গলবার ১৭ নভেম্বর (মাইঅ্যাস্ট্রোলজি)।", "On Kartik Sankranti: Monday 16 November by Drik Siddhanta, Tuesday 17 November by Surya Siddhanta (MyAstrology).") },
    { q: l("কার্তিক সংক্রান্তি কখন, কলকাতায়?", "What time is Kartik Sankranti in Kolkata in 2026?"), a: l("১৬ নভেম্বর সন্ধে ৭:৪৮ (দ্রিক পঞ্চাঙ্গ)।", "7:48 pm on 16 November (Drik Panchang).") },
    { q: l("ঢাকায় বৃশ্চিক সংক্রান্তি কখন?", "What time is Vrishchika Sankranti in Dhaka in 2026?"), a: l("১৬ নভেম্বর রাত ৮:১৮ (দ্রিক পঞ্চাঙ্গ)।", "8:18 pm on 16 November (Drik Panchang).") },
    { q: l("কাটোয়ার কার্তিক লড়াই কী?", "What is Katwa's Kartik Larai?"), a: l("কাটোয়ার বিখ্যাত কার্তিক পুজোর শোভাযাত্রা, যেখানে তাঁতিদের চালু করা ‘থাক’-এ সাজানো কার্তিক মূর্তি নিয়ে যাওয়া হয়; প্রায় ৩০০ বছরের ধারা (দ্য স্টেটসম্যান)।", "Katwa's famous Kartik Puja procession, with Kartik idols arranged on Thaka galleries introduced by weavers; a tradition of nearly 300 years (The Statesman).") },
  ],
  events: [{ name: l("কার্তিক পুজো ২০২৬", "Kartik Puja 2026"), start: "2026-11-16", end: "2026-11-17", place: { name: "Katwa", locality: "Katwa", region: "West Bengal", country: "IN" } }],
  links: [
    { href: "/bengali-calendar-1433", label: l("📅 বাংলা ক্যালেন্ডার ১৪৩৩", "📅 Bengali calendar 1433"), primary: true },
    { href: "/dhanteras-2026", label: l("ধনতেরাস ২০২৬", "Dhanteras 2026") },
    { href: "/tulsi-vivah-2026", label: l("তুলসী বিবাহ ২০২৬", "Tulsi Vivah 2026") },
  ],
  lastChecked: "2026-11-01",
};

export const TULSI_VIVAH_2026: FestivalPage = {
  path: "/tulsi-vivah-2026",
  title: l("তুলসী বিবাহ ২০২৬: তারিখ, দ্বাদশী আর দেব উত্থানী একাদশী", "Tulsi Vivah 2026: Date, Dwadashi & Dev Uthani Ekadashi"),
  description: l(
    "তুলসী বিবাহ ২০২৬ শনিবার ২১ নভেম্বর। কলকাতা আর ঢাকার দ্বাদশী তিথির সময়, প্রবোধিনী (দেব উত্থানী) একাদশী শুক্রবার ২০ নভেম্বর, সূত্রসহ।",
    "Tulsi Vivah 2026 is Saturday 21 November. Dwadashi tithi times for Kolkata and Dhaka, plus Prabodhini (Dev Uthani) Ekadashi on Friday 20 November, sourced.",
  ),
  h1: l("তুলসী বিবাহ ২০২৬: কবে, কখন", "Tulsi Vivah 2026: when and what time"),
  lead: l(
    "তুলসী বিবাহ ২০২৬-এ শনিবার ২১ নভেম্বর, কলকাতা আর ঢাকায়। আগের দিন শুক্রবার ২০ নভেম্বর প্রবোধিনী (দেব উত্থানী) একাদশী, স্মার্ত মতে।",
    "Tulsi Vivah in 2026 is Saturday 21 November, in Kolkata and Dhaka. The day before, Friday 20 November, is Prabodhini (Dev Uthani) Ekadashi by the Smarta reckoning.",
  ),
  timings: {
    h2: l("তুলসী বিবাহ, দ্বাদশী আর প্রবোধিনী একাদশী", "Tulsi Vivah, Dwadashi and Prabodhini Ekadashi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শনি ২১ নভেম্বর", "Sat 21 Nov"), what: l("তুলসী বিবাহ: দ্বাদশী তিথি", "Tulsi Vivah: Dwadashi tithi"), when: l("২১ নভেম্বর সকাল ৬:৩১ থেকে ২২ নভেম্বর ভোর ৪:৫৬", "21 Nov 6:31 am to 22 Nov 4:56 am"), source: TULSI(KOL, "Kolkata") },
        { day: l("শুক্র ২০ নভেম্বর", "Fri 20 Nov"), what: l("প্রবোধিনী (দেব উত্থানী) একাদশী, স্মার্ত", "Prabodhini (Dev Uthani) Ekadashi, Smarta"), when: l("২০ নভেম্বর সকাল ৭:১৫ থেকে ২১ নভেম্বর সকাল ৬:৩১", "20 Nov 7:15 am to 21 Nov 6:31 am"), source: EKADASHI(KOL, "Kolkata") },
        { day: l("শনি ২১ নভেম্বর", "Sat 21 Nov"), what: l("বৈষ্ণব একাদশী", "Vaishnava Ekadashi"), when: l("২১ নভেম্বর (সময় দেওয়া নেই)", "21 Nov (no time given)"), source: EKADASHI(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("শনি ২১ নভেম্বর", "Sat 21 Nov"), what: l("তুলসী বিবাহ: দ্বাদশী তিথি", "Tulsi Vivah: Dwadashi tithi"), when: l("২১ নভেম্বর সকাল ৭:০১ থেকে ২২ নভেম্বর ভোর ৫:২৬", "21 Nov 7:01 am to 22 Nov 5:26 am"), source: TULSI(DHAKA, "Dhaka") },
        { day: l("শুক্র ২০ নভেম্বর", "Fri 20 Nov"), what: l("প্রবোধিনী (দেব উত্থানী) একাদশী, স্মার্ত", "Prabodhini (Dev Uthani) Ekadashi, Smarta"), when: l("২০ নভেম্বর সকাল ৭:৪৫ থেকে ২১ নভেম্বর সকাল ৭:০১", "20 Nov 7:45 am to 21 Nov 7:01 am"), source: EKADASHI(DHAKA, "Dhaka") },
        { day: l("শনি ২১ নভেম্বর", "Sat 21 Nov"), what: l("বৈষ্ণব একাদশী", "Vaishnava Ekadashi"), when: l("২১ নভেম্বর (সময় দেওয়া নেই)", "21 Nov (no time given)"), source: EKADASHI(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "দ্রিকের এই পাতায় পারণের নির্দিষ্ট সময় নেই; সেখানে লেখা, একাদশীর পরদিন সূর্যোদয়ের পর উপোস ভাঙতে হয়। বৈষ্ণবদের একাদশী ২১ নভেম্বর; ইসকনের তালিকা মিলিয়ে নিও।",
      "Drik's page gives no exact parana time; it says to break the fast on the next day after sunrise. Vaishnava Ekadashi is on 21 November; check ISKCON's list.",
    ),
  },
  sections: [
    {
      id: "about",
      h2: l("তুলসী বিবাহ কী", "What is Tulsi Vivah"),
      paras: [
        {
          text: l(
            "তুলসী বিবাহ হল তুলসী গাছ (লক্ষ্মীর রূপ) আর শালগ্রাম শিলা বা আমলকী ডালের (বিষ্ণুর রূপ) প্রতীকী বিয়ে। বর্ষার শেষ আর বিয়ের মরসুমের শুরু এতে বোঝানো হয়। কার্তিকের শুক্লপক্ষের প্রবোধিনী একাদশী থেকে কার্তিক পূর্ণিমার মধ্যে যে কোনো দিন এটা করা যায়; ঠিক দিনটা অঞ্চলভেদে আলাদা।",
            "Tulsi Vivah is a symbolic wedding between a tulasi plant (personifying Lakshmi) and a shaligrama stone or an amla branch (personifying Vishnu). It marks the end of the monsoon and the start of the wedding season. It can be held between Prabodhini Ekadashi and Kartika Purnima; the exact day varies by region.",
          ),
          source: WIKI_TULSI,
        },
      ],
      tips: [l("ঘরে করলে তুলসীতলা পরিষ্কার রেখে প্রদীপ আর ফুল সাজিয়ো; রীতি বড়দের কাছে জেনে নিও।", "At home, keep the tulsi spot clean with a lamp and flowers; ask the elders about your family's custom.")],
    },
  ],
  faq: [
    { q: l("তুলসী বিবাহ কবে ২০২৬?", "When is Tulsi Vivah in 2026?"), a: l("শনিবার ২১ নভেম্বর ২০২৬, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Saturday 21 November 2026, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("তুলসী বিবাহের দ্বাদশী তিথি কখন?", "When is the Dwadashi tithi for Tulsi Vivah 2026?"), a: l("কলকাতায় ২১ নভেম্বর সকাল ৬:৩১ থেকে ২২ নভেম্বর ভোর ৪:৫৬; ঢাকায় সকাল ৭:০১ থেকে ভোর ৫:২৬।", "Kolkata: 21 Nov 6:31 am to 22 Nov 4:56 am. Dhaka: 7:01 am to 5:26 am.") },
    { q: l("দেব উত্থানী একাদশী কবে ২০২৬?", "When is Dev Uthani Ekadashi in 2026?"), a: l("স্মার্ত মতে শুক্রবার ২০ নভেম্বর; বৈষ্ণব মতে শনিবার ২১ নভেম্বর (দ্রিক পঞ্চাঙ্গ)।", "Friday 20 November by the Smarta reckoning; Saturday 21 November for Vaishnavas (Drik Panchang).") },
    { q: l("প্রবোধিনী একাদশীর তিথি কখন?", "What is the Prabodhini Ekadashi 2026 tithi time in Kolkata?"), a: l("২০ নভেম্বর সকাল ৭:১৫ থেকে ২১ নভেম্বর সকাল ৬:৩১।", "20 Nov 7:15 am to 21 Nov 6:31 am.") },
  ],
  events: [
    { name: l("প্রবোধিনী একাদশী ২০২৬", "Prabodhini Ekadashi 2026"), start: "2026-11-20", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("তুলসী বিবাহ ২০২৬", "Tulsi Vivah 2026"), start: "2026-11-21", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
  ],
  links: [
    { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027"), primary: true },
    CAL,
    { href: "/dhanteras-2026", label: l("ধনতেরাস ২০২৬", "Dhanteras 2026") },
    { href: "/kartik-puja-2026", label: l("কার্তিক পুজো ২০২৬", "Kartik Puja 2026") },
  ],
  lastChecked: "2026-11-01",
};
