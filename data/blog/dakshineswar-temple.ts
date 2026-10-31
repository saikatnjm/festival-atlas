// Blog: Dakshineswar Kali Temple visitor guide. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_TEMPLE = { title: "Wikipedia, Dakshineswar Kali Temple", url: "https://en.wikipedia.org/wiki/Dakshineswar_Kali_Temple" };
const OFFICIAL = { title: "Dakshineswar Kali Temple official site (timings as published by the temple)", url: "https://www.dakshineswarkalitemple.org" };
const WIKI_RAIL = { title: "Wikipedia, Dakshineswar railway station", url: "https://en.wikipedia.org/wiki/Dakshineswar_railway_station" };
const WIKI_METRO = { title: "Wikipedia, Dakshineswar metro station", url: "https://en.wikipedia.org/wiki/Dakshineswar_metro_station" };
const DRIK = {
  title: "Drik Panchang, Kali Puja 2026 date and time (Kolkata)",
  url: "https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=1275004&year=2026",
};

export const DAKSHINESWAR_TEMPLE: Article = {
  slug: "dakshineswar-kali-temple-guide",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("দক্ষিণেশ্বর কালী মন্দির: সময়, ইতিহাস, যাওয়ার পথ", "Dakshineswar Kali Temple: Timings, History, How to Go"),
  description: l(
    "দক্ষিণেশ্বর কালী মন্দিরের ইতিহাস, মন্দিরের দর্শনের সময় (মন্দির কর্তৃপক্ষের ওয়েবসাইট থেকে), ট্রেন ও মেট্রোয় যাওয়া আর কালীপুজোর রাতের কথা।",
    "Dakshineswar Kali Temple guide: history, darshan timings as published by the temple, getting there by train and metro, and Kali Puja night.",
  ),
  h1: l("দক্ষিণেশ্বর কালী মন্দির: ইতিহাস, দর্শনের সময়, কীভাবে যাবে", "Dakshineswar Kali Temple: history, darshan timings and how to reach"),
  lead: l(
    "রানি রাসমণির গড়া ভবতারিণী মন্দির কলকাতার সবচেয়ে চেনা কালীমন্দিরগুলোর একটা। কীভাবে শুরু, মন্দিরে কী কী আছে, কখন খোলা, আর কীভাবে পৌঁছবে।",
    "Rani Rashmoni's Bhavatarini temple is one of Kolkata's best-known Kali shrines. How it began, what is in the complex, when it is open and how to get there.",
  ),
  icon: "🛕",
  body: [
    { kind: "h2", text: l("মন্দিরের ইতিহাস", "History of the temple") },
    {
      kind: "p",
      text: l(
        "মন্দিরটি গড়েছিলেন রানি রাসমণি, জমিদার আর কালীভক্ত। 'স্নানযাত্রা'র দিন, ১৮৫৫ সালের ৩১ মে, এখানে কালীমূর্তি প্রতিষ্ঠা হয়। প্রধান দেবী ভবতারিণী, মহাদেবীর কালীরূপ। মন্দিরের আগের নাম ছিল শ্রীশ্রী জগদীশ্বরী মহাকালী।",
        "The temple was built by Rani Rashmoni, a zamindar and devotee of Kali. The image of the goddess was installed on the Snana Yatra day, 31 May 1855. The presiding deity is Bhavatarini, a form of Mahadevi in her Kali aspect. The temple was originally known as Sri Sri Jagadishwari Mahakali.",
      ),
      source: WIKI_TEMPLE,
    },
    {
      kind: "p",
      text: l(
        "রামকৃষ্ণ ১৮৫৫ সালে দাদা রামকুমারের সহকারী হয়ে এই মন্দিরে আসেন। ১৮৫৬ সালে রামকুমারের মৃত্যুর পর তিনি প্রধান পুরোহিত হন। তাঁর স্ত্রী সারদা দেবীর নামও এই মন্দিরের সঙ্গে জড়িয়ে আছে।",
        "Ramakrishna came to the temple in 1855 as an assistant to his elder brother Ramkumar, and became head priest after Ramkumar died in 1856. His wife, Sarada Devi, is also associated with the temple.",
      ),
      source: WIKI_TEMPLE,
    },
    { kind: "h2", text: l("মন্দির চত্বরে কী আছে", "What is in the complex") },
    {
      kind: "list",
      items: [
        l(
          "মূল মন্দির বাংলার নবরত্ন বা নটি চূড়ার স্থাপত্যে গড়া, তিনতলা, মুখ দক্ষিণে।",
          "The main temple is built in Bengal's navaratna (nine-spire) style, three storeys, facing south.",
        ),
        l(
          "দেবী কালী শায়িত শিবের বুকে দাঁড়িয়ে, রুপোর পদ্মের সিংহাসনে।",
          "The goddess stands on the chest of a supine Shiva, on a silver lotus throne.",
        ),
        l("নদীর ধার ধরে সার দিয়ে বারোটা একই রকম শিবমন্দির।", "A row of twelve identical Shiva temples runs along the riverfront."),
        l("চত্বরের উত্তর-পূর্ব দিকে রাধাকান্তের মন্দির।", "A Radha Kanta temple lies to the northeast of the complex."),
        l(
          "নহবত বা সংগীত-মিনারে সারদা দেবী জীবনের অনেকটা সময় কাটিয়েছিলেন।",
          "The Nahabat, or music tower, is where Sarada Devi spent a considerable part of her life.",
        ),
      ],
      source: WIKI_TEMPLE,
    },
    { kind: "h2", text: l("দর্শনের সময়", "Darshan timings") },
    {
      kind: "p",
      text: l(
        "মন্দিরের নিজের ওয়েবসাইটে এই সময় লেখা আছে (মন্দির কর্তৃপক্ষের প্রকাশিত, যাওয়ার আগে মিলিয়ে নাও): সকালে ৬:৩০ থেকে ১২:৩০, বিকেলে ৩:৩০ থেকে ৭:৩০। সঙ্গে লেখা, ট্রাস্টি বোর্ড দরকার হলে সময় বদলাতে পারে।",
        "The temple's own website lists these hours (as published by the temple; check before you go): morning 6:30 AM to 12:30 PM, evening 3:30 PM to 7:30 PM. It adds that the Board of Trustees can change the timings if required.",
      ),
      source: OFFICIAL,
    },
    {
      kind: "list",
      items: [
        l("মঙ্গল আরতি: ভোর ৪:০০", "Mangal Aarti: 4:00 AM"),
        l("দুপুরের বিরতি (গর্ভগৃহ বন্ধ): ১২:৩০", "Midday rest (sanctum closed): 12:30 PM"),
        l("বিকেলে আবার খোলা: ৩:৩০", "Evening re-opening: 3:30 PM"),
        l("সন্ধ্যা আরতি: সন্ধে ৬:৩০", "Sandhya Aarti: 6:30 PM"),
        l("শীতল ভোগ ও শয়ন: রাত ৮:০০", "Shital Bhog and Shayan: 8:00 PM"),
      ],
      source: OFFICIAL,
    },
    {
      kind: "tip",
      text: l(
        "সময় বদলাতে পারে বলে মন্দিরের সাইটে একবার দেখে বেরোও। দুপুরে গর্ভগৃহ বন্ধ থাকে, তাই ঢোকার সময় হিসেব করে পৌঁছও, আর ছুটির দিনে বা উৎসবে বাড়তি সময় হাতে রাখো।",
        "Timings can change, so look at the temple's site before you leave. The sanctum is closed at midday, so plan your arrival around that, and keep extra time on holidays and festival days.",
      ),
    },
    { kind: "h2", text: l("কীভাবে যাবে", "How to reach") },
    {
      kind: "p",
      text: l(
        "দক্ষিণেশ্বর রেলস্টেশন পূর্ব রেলের শিয়ালদা বিভাগে, শিয়ালদা–ডানকুনি লাইনে (কলকাতা চর্ড লিংক লাইন নামেও পরিচিত), স্টেশন কোড DAKE। স্টেশনের ভবনটা দক্ষিণেশ্বর মন্দিরের আদলে গড়া, আর পাশেই দক্ষিণেশ্বর মেট্রো স্টেশন।",
        "Dakshineswar railway station is in Eastern Railway's Sealdah division on the Sealdah-Dankuni line (also called the Calcutta Chord link line), station code DAKE. The station building is a replica of the Dakshineswar temple, and the Dakshineswar metro station is next to it.",
      ),
      source: WIKI_RAIL,
    },
    {
      kind: "p",
      text: l(
        "মেট্রোয় গেলে ব্লু লাইন (উত্তর-দক্ষিণ করিডর), দক্ষিণেশ্বর এই লাইনের উত্তর প্রান্তের উঁচু স্টেশন, ২০২১ সালের ২২ ফেব্রুয়ারি উদ্বোধন হয়। স্টেশন ভবতারিণী মন্দিরের প্রায় ৩০০ মিটার পূর্বে।",
        "By metro, take the Blue Line (North-South corridor). Dakshineswar is the elevated northern terminal of the line and was inaugurated on 22 February 2021. The station is about 300 metres east of the Bhabatarini Kali Temple.",
      ),
      source: WIKI_METRO,
    },
    {
      kind: "p",
      text: l(
        "২০২৬ সালে কলকাতায় কালীপুজো রবিবার ৮ নভেম্বর। দ্রিক পঞ্চাঙ্গ অনুযায়ী নিশীথ কাল পুজোর সময় রাত ১০:৫৫ থেকে ১১:৪৬। অমাবস্যা তিথি ৮ নভেম্বর সকাল ১১:২৭ থেকে ৯ নভেম্বর দুপুর ১২:৩১ পর্যন্ত।",
        "In 2026 Kali Puja in Kolkata falls on Sunday 8 November. Per Drik Panchang, the Nishita Kaal puja time is 10:55 PM to 11:46 PM, and the amavasya tithi runs from 11:27 AM on 8 November to 12:31 PM on 9 November.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "কালীপুজোর রাতে মন্দিরের সময় আলাদা হতে পারে, সেটা আমরা কোনও সূত্রে পাইনি। তাই ওই রাতে যাওয়ার আগে মন্দির কর্তৃপক্ষের ঘোষণা দেখে নাও। ভিড় এড়াতে মেট্রোয় যাওয়ার কথা ভাবতে পারো, আর ফেরার সময় আগে থেকে ঠিক করে রাখো।",
        "Temple hours on Kali Puja night may differ, and we found no source for them, so check the temple's announcements before going that night. To dodge road crowds you could consider the metro, and plan your way back in advance.",
      ),
    },
  ],
  faq: [
    {
      q: l("দক্ষিণেশ্বর মন্দির খোলার সময়", "Dakshineswar temple timings"),
      a: l(
        "মন্দিরের ওয়েবসাইট অনুযায়ী সকাল ৬:৩০ থেকে ১২:৩০ আর বিকেল ৩:৩০ থেকে ৭:৩০। ট্রাস্টি বোর্ড সময় বদলাতে পারে, তাই যাওয়ার আগে মিলিয়ে নাও।",
        "Per the temple's website: 6:30 AM to 12:30 PM and 3:30 PM to 7:30 PM. The trustees can change the hours, so check before you go.",
      ),
    },
    {
      q: l("দক্ষিণেশ্বর কালী মন্দির কে তৈরি করেছিলেন?", "Who built the Dakshineswar Kali Temple?"),
      a: l(
        "রানি রাসমণি। ১৮৫৫ সালের ৩১ মে স্নানযাত্রার দিন মূর্তি প্রতিষ্ঠা হয়।",
        "Rani Rashmoni. The image was installed on Snana Yatra day, 31 May 1855.",
      ),
    },
    {
      q: l("মেট্রোয় দক্ষিণেশ্বর কীভাবে যাব?", "How to reach Dakshineswar temple by metro?"),
      a: l(
        "কলকাতা মেট্রোর ব্লু লাইনে দক্ষিণেশ্বর স্টেশনে নামো, এটা লাইনের উত্তর প্রান্তের স্টেশন। সেখান থেকে মন্দির প্রায় ৩০০ মিটার পশ্চিমে।",
        "Take the Kolkata Metro Blue Line to Dakshineswar, the northern terminal. The temple is about 300 metres west of the station.",
      ),
    },
    {
      q: l("দক্ষিণেশ্বরে ট্রেনে কীভাবে যাব?", "How to go to Dakshineswar by train?"),
      a: l(
        "শিয়ালদা–ডানকুনি লাইনে দক্ষিণেশ্বর স্টেশন, কোড DAKE।",
        "Use Dakshineswar station on the Sealdah-Dankuni line, station code DAKE.",
      ),
    },
    {
      q: l("২০২৬ সালে কালীপুজো কবে?", "When is Kali Puja in 2026?"),
      a: l(
        "দ্রিক পঞ্চাঙ্গ অনুযায়ী কলকাতায় রবিবার ৮ নভেম্বর ২০২৬, নিশীথ কাল পুজো রাত ১০:৫৫ থেকে ১১:৪৬।",
        "Per Drik Panchang, Sunday 8 November 2026 in Kolkata, with the Nishita Kaal puja from 10:55 PM to 11:46 PM.",
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
  sources: [WIKI_TEMPLE, OFFICIAL, WIKI_RAIL, WIKI_METRO, DRIK],
};
