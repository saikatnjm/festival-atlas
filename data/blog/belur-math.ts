// Blog: Belur Math visitor guide. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_MATH = { title: "Wikipedia, Belur Math", url: "https://en.wikipedia.org/wiki/Belur_Math" };
const WIKI_STATION = { title: "Wikipedia, Belur Math railway station", url: "https://en.wikipedia.org/wiki/Belur_Math_railway_station" };
const OFFICIAL = { title: "Belur Math official site, Our location (opening hours as published by Belur Math)", url: "https://belurmath.org/our-location/" };

export const BELUR_MATH: Article = {
  slug: "belur-math-guide",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("বেলুড় মঠ: ইতিহাস, স্থাপত্য, খোলার সময়, যাওয়ার পথ", "Belur Math: History, Architecture, Timings, How to Go"),
  description: l(
    "বেলুড় মঠের ইতিহাস, স্থাপত্য, কুমারী পুজো, মঠের নিজের ওয়েবসাইট থেকে দর্শনের সময়, আর বেলুড় মঠ স্টেশন দিয়ে যাওয়ার পথ।",
    "Belur Math guide: history, architecture, Kumari Puja, visiting hours as published by Belur Math, and how to reach it by train.",
  ),
  h1: l("বেলুড় মঠ: ইতিহাস, স্থাপত্য, দর্শনের সময়, কীভাবে যাবে", "Belur Math: history, architecture, visiting hours and how to reach"),
  lead: l(
    "রামকৃষ্ণ মঠ ও রামকৃষ্ণ মিশনের সদর দপ্তর হুগলি নদীর পশ্চিম পাড়ে। কীভাবে গড়ে উঠল, কেমন দেখতে, কখন খোলা, আর কীভাবে যাবে।",
    "The headquarters of the Ramakrishna Math and Mission sits on the west bank of the Hooghly. How it came about, what it looks like, when it is open and how to get there.",
  ),
  icon: "🛕",
  body: [
    { kind: "h2", text: l("বেলুড় মঠের ইতিহাস", "History of Belur Math") },
    {
      kind: "p",
      text: l(
        "রামকৃষ্ণ পরমহংসের প্রধান শিষ্য স্বামী বিবেকানন্দ ১৮৯৭ সালের জানুয়ারিতে বেলুড় মঠ প্রতিষ্ঠা করেন। এটা রামকৃষ্ণ মঠ ও রামকৃষ্ণ মিশনের সদর দপ্তর।",
        "Swami Vivekananda, chief disciple of Ramakrishna Paramahamsa, established Belur Math in January 1897. It is the headquarters of the Ramakrishna Math and Ramakrishna Mission.",
      ),
      source: WIKI_MATH,
    },
    {
      kind: "p",
      text: l(
        "মঠ হুগলি নদীর পশ্চিম পাড়ে, হাওড়া জেলার বেলুড়ে। চত্বরটা ১৬ হেক্টর বা ৪০ একর জুড়ে।",
        "The Math is in Belur, Howrah district, on the west bank of the Hooghly River. The campus covers 16 hectares (40 acres).",
      ),
      source: WIKI_MATH,
    },
    { kind: "h2", text: l("স্থাপত্য আর রামকৃষ্ণ মন্দির", "Architecture and the Ramakrishna Temple") },
    {
      kind: "p",
      text: l(
        "মন্দিরের নকশায় হিন্দু, বৌদ্ধ আর খ্রিস্টান ঐতিহ্যের ছোঁয়া মিলিয়ে ধর্মের ঐক্যের প্রতীক গড়া হয়েছে। দেখার কোণ বদলালে মন্দির, মসজিদ বা গির্জার মতো লাগে, আর ভূমি-নকশা খ্রিস্টীয় ক্রুশের আকারের। উচ্চতা প্রায় ৩৪.৩ মিটার, প্রধানত চুনার পাথরে তৈরি।",
        "The design blends Hindu, Buddhist and Christian elements to symbolise the unity of religions. Depending on the angle it can look like a temple, mosque or church, and its ground plan is in the shape of a Christian cross. It is about 34.3 m tall, built mainly of chunar stone.",
      ),
      source: WIKI_MATH,
    },
    {
      kind: "p",
      text: l(
        "নকশার কল্পনা বিবেকানন্দের, স্থপতি স্বামী বিজ্ঞানানন্দ। মন্দিরের প্রতিষ্ঠা হয় ১৯৩৮ সালের ১৪ জানুয়ারি, মকর সংক্রান্তিতে। রামকৃষ্ণের মূর্তি একশো পাপড়ির পদ্মের ওপর, ডমরুর আকারের মার্বেলের বেদির ওপরে, সেখানে তাঁর পবিত্র স্মৃতিচিহ্ন রাখা।",
        "Vivekananda envisioned the design and Swami Vijnanananda was the architect. The temple was consecrated on 14 January 1938, Makar Sankranti. Ramakrishna's statue sits on a hundred-petalled lotus above a damaru-shaped marble pedestal that holds his sacred relics.",
      ),
      source: WIKI_MATH,
    },
    { kind: "h2", text: l("দুর্গাপুজো আর কুমারী পুজো", "Durga Puja and Kumari Puja") },
    {
      kind: "p",
      text: l(
        "বেলুড় মঠের প্রধান আকর্ষণগুলোর মধ্যে বার্ষিক দুর্গাপুজো আর কুমারী পুজো আছে। কুমারী পুজোর ঐতিহ্য স্বামী বিবেকানন্দ শুরু করেন ১৯০১ সালে। এর বেশি কিছু আমাদের সূত্রে লেখা নেই।",
        "The annual Durga Puja and Kumari Puja are among the Math's main attractions. The Kumari Puja tradition was started by Vivekananda in 1901. Our source gives no further detail.",
      ),
      source: WIKI_MATH,
    },
    {
      kind: "tip",
      text: l(
        "পুজোর দিনগুলোয় যেতে চাইলে মঠের নিজের উৎসব-ক্যালেন্ডার দেখে নাও (belurmath.org), ওখানেই সঠিক কর্মসূচি পাবে।",
        "If you plan to visit during the Puja days, check the Math's own festival calendar (belurmath.org) for the actual programme.",
      ),
    },
    { kind: "h2", text: l("দর্শনের সময়", "Visiting hours") },
    {
      kind: "list",
      items: [
        l("সকাল: ৬:৩০ থেকে ১১:৩০", "Morning: 6:30 to 11:30 a.m."),
        l("বিকেল: ৪:০০ থেকে ৯:০০ (এপ্রিল থেকে সেপ্টেম্বর)", "Evening: 4:00 to 9:00 p.m. (April to September)"),
        l("বিকেল: ৩:৩০ থেকে ৮:৩০ (অক্টোবর থেকে মার্চ)", "Evening: 3:30 to 8:30 p.m. (October to March)"),
        l("মন্দির বন্ধ হয় সকাল ১১:৩০-এ", "The temples close at 11:30 a.m."),
        l(
          "সন্ধ্যা আরতির ঘণ্টার পর ভক্তরা শুধু শ্রীরামকৃষ্ণ মন্দিরে বসতে পারেন",
          "After the evening aratrikam bell, devotees are allowed to sit in the Sri Ramakrishna temple only",
        ),
      ],
      source: OFFICIAL,
    },
    {
      kind: "tip",
      text: l(
        "এই সময়গুলো বেলুড় মঠের নিজের ওয়েবসাইট থেকে, বদলাতে পারে, তাই যাওয়ার আগে belurmath.org দেখে নাও। আরতির সময় আলাদা একটা পাতায় আছে।",
        "These hours are as published by Belur Math and can change, so check belurmath.org before you go. Arati timings are on a separate page of the site.",
      ),
    },
    { kind: "h2", text: l("কীভাবে যাবে", "How to reach") },
    {
      kind: "p",
      text: l(
        "বেলুড় মঠ স্টেশন পূর্ব রেলের হাওড়া বিভাগে, কলকাতা সাবার্বান রেলের ইস্টার্ন লাইনে, স্টেশন কোড BRMH। এটা শাখা লাইনের শেষ স্টেশন, হাওড়ার সঙ্গে বেলুড় মঠকে জোড়ে। নিবন্ধ অনুযায়ী স্টেশন থেকে মন্দির প্রায় ১.৫ কিলোমিটার।",
        "Belur Math railway station is in Eastern Railway's Howrah division, on the Eastern line of the Kolkata Suburban Railway, station code BRMH. It is the terminal of the branch and connects Howrah with Belur Math. The article puts the station about 1.5 km from the temple.",
      ),
      source: WIKI_STATION,
    },
    {
      kind: "p",
      text: l(
        "মঠের ঠিকানা: পোঃ বেলুড় মঠ, জেলা হাওড়া, পশ্চিমবঙ্গ, পিন ৭১১২০২। মঠের পাতায় ট্রেন বা বাসের রুট লেখা নেই, শুধু গুগল ম্যাপের লিংক আছে।",
        "Address: PO Belur Math, Dist Howrah, West Bengal, PIN 711202. The Math's page gives no train or bus routes, only a Google Maps directions link.",
      ),
      source: OFFICIAL,
    },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়ার মঠের নিবন্ধ বলছে বেলুড় মঠ স্টেশন, হাওড়া থেকে সরাসরি ইএমইউ ট্রেন, ফেরি আর সড়কপথে মঠে যাওয়া যায়।",
        "The Wikipedia article on the Math says it can be reached by Belur Math railway station, direct EMU trains from Howrah, by ferry and by road.",
      ),
      source: WIKI_MATH,
    },
    {
      kind: "tip",
      text: l(
        "ফেরির ঘাট, সময় আর ভাড়া আমাদের সূত্রে নেই, তাই সেগুলো আলাদা করে জেনে নাও। ফেরার ট্রেন বা গাড়ি আগে থেকে ভেবে রেখো।",
        "Ferry ghats, timings and fares are not in our sources, so look those up separately, and think about your return train or ride in advance.",
      ),
    },
  ],
  faq: [
    {
      q: l("বেলুড় মঠ খোলার সময়", "Belur Math visiting hours"),
      a: l(
        "মঠের ওয়েবসাইট অনুযায়ী সকাল ৬:৩০ থেকে ১১:৩০, বিকেল অক্টোবর থেকে মার্চ ৩:৩০ থেকে ৮:৩০ আর এপ্রিল থেকে সেপ্টেম্বর ৪:০০ থেকে ৯:০০। যাওয়ার আগে মিলিয়ে নাও।",
        "Per the Math's website: 6:30 to 11:30 a.m., and in the evening 3:30 to 8:30 p.m. (October to March) or 4:00 to 9:00 p.m. (April to September). Check before you go.",
      ),
    },
    {
      q: l("বেলুড় মঠ কে প্রতিষ্ঠা করেন?", "Who founded Belur Math?"),
      a: l(
        "স্বামী বিবেকানন্দ, ১৮৯৭ সালের জানুয়ারিতে।",
        "Swami Vivekananda, in January 1897.",
      ),
    },
    {
      q: l("বেলুড় মঠে ট্রেনে কীভাবে যাব?", "How to reach Belur Math by train?"),
      a: l(
        "হাওড়া থেকে ইস্টার্ন লাইনের ট্রেনে বেলুড় মঠ স্টেশন, কোড BRMH। স্টেশন থেকে মঠ প্রায় ১.৫ কিলোমিটার।",
        "Take an Eastern line train from Howrah to Belur Math station, code BRMH. The Math is about 1.5 km from the station.",
      ),
    },
    {
      q: l("বেলুড় মঠে কুমারী পুজো কবে শুরু হয়?", "When did Kumari Puja at Belur Math start?"),
      a: l(
        "উইকিপিডিয়া অনুযায়ী ১৯০১ সালে স্বামী বিবেকানন্দ এই ঐতিহ্য শুরু করেন।",
        "Per Wikipedia, Vivekananda started the tradition in 1901.",
      ),
    },
    {
      q: l("বেলুড় মঠের ঠিকানা কী?", "What is the address of Belur Math?"),
      a: l(
        "পোঃ বেলুড় মঠ, জেলা হাওড়া, পশ্চিমবঙ্গ ৭১১২০২।",
        "PO Belur Math, Dist Howrah, West Bengal 711202.",
      ),
    },
  ],
  related: [
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/blog/kali-puja-and-diwali", label: l("কালীপুজো আর দীপাবলি", "Kali Puja and Diwali") },
    { href: "/blog/naihati-boro-maa-kali-puja", label: l("নৈহাটির বড়মা", "Naihati Boro Maa") },
    { href: "/blog/tarapith-kali-puja", label: l("তারাপীঠে কালীপুজো", "Kali Puja at Tarapith") },
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
    { href: "/puja/kolkata", label: l("কলকাতার পুজো", "Kolkata pujas") },
  ],
  sources: [WIKI_MATH, WIKI_STATION, OFFICIAL],
};
