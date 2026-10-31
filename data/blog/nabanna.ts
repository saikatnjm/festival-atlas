// Blog: Nabanna, the Bengali new-rice harvest festival. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_NABANNA = { title: "Wikipedia, Nabanna", url: "https://en.wikipedia.org/wiki/Nabanna" };
const WIKI_PITHA = { title: "Wikipedia, Pitha", url: "https://en.wikipedia.org/wiki/Pitha" };

export const NABANNA: Article = {
  slug: "nabanna-festival",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("নবান্ন উৎসব: নতুন চালের পায়েস আর পিঠে", "Nabanna: The Bengali New-Rice Harvest Festival"),
  description: l(
    "নবান্ন কী, কোথায় উদযাপিত হয়, মেলা, পিঠে-পায়েসের খাবার আর ঢাকার জাতীয় নবান্ন উৎসব, সরল ভাষায়।",
    "What Nabanna is, where it is celebrated, the fairs, pitha and payesh, and Dhaka's National Harvest Festival, explained simply.",
  ),
  h1: l("নবান্ন: নতুন ধানের উৎসব", "Nabanna: the festival of new rice"),
  lead: l(
    "অগ্রহায়ণে নতুন ধান উঠলে বাংলায় শুরু হয় নবান্ন। খাবার, মেলা আর গানে ভরা এই উৎসবের কথা এখানে।",
    "When the new rice arrives in Agrahayan, Bengal celebrates Nabanna. Here is a look at this festival of food, fairs and songs.",
  ),
  icon: "🌾",
  body: [
    { kind: "h2", text: l("নবান্ন কী", "What is Nabanna") },
    {
      kind: "p",
      text: l(
        "নবান্ন মানে নতুন অন্ন, নতুন ফসলের খাওয়া। এটি বাঙালির ফসল তোলার উৎসব, যাকে উইকিপিডিয়া খাওয়াদাওয়ার উৎসব বলেছে, কারণ এই সময়ে বাঙালি রান্নার নানা স্থানীয় পদ, যেমন পিঠে, তৈরি হয়।",
        "Nabanna means new rice, the first meal from a new harvest. It is a Bengali harvest festival that Wikipedia calls a festival of food, when many local Bengali dishes such as pitha are cooked.",
      ),
      source: WIKI_NABANNA,
    },
    {
      kind: "p",
      text: l(
        "ঢাকায় এটি পালিত হয় বাংলা মাস অগ্রহায়ণের প্রথম দিনে। উৎসবটি বাংলাদেশ ছাড়াও পশ্চিমবঙ্গ, ত্রিপুরা, আসামের বরাক উপত্যকা আর ঝাড়খণ্ডের পূর্বাংশে পালিত হয়।",
        "In Dhaka it is held on the first day of the Bengali month of Agrahayan. Beyond Bangladesh, it is celebrated in West Bengal, Tripura, Assam's Barak Valley and eastern parts of Jharkhand.",
      ),
      source: WIKI_NABANNA,
    },
    {
      kind: "tip",
      text: l(
        "২০২৬ সালের নবান্নের ইংরেজি তারিখ আমরা কোনও পড়া সূত্রে পাইনি, তাই কোনও তারিখ লিখছি না। অগ্রহায়ণ শুরুর দিনটি নিজের পঞ্জিকায় মিলিয়ে নিও।",
        "We did not find a fetched source printing a 2026 Gregorian date for Nabanna, so we give none. Check the first day of Agrahayan in your own almanac.",
      ),
    },
    { kind: "h2", text: l("মেলা আর অনুষ্ঠান", "Fairs and festivities") },
    {
      kind: "list",
      items: [
        l("নবান্ন মেলা, যেখানে গ্রামের মানুষ আর দুই প্রধান ধর্মের স্থানীয়রা যোগ দেন", "Nabanna fairs, where villagers and locals from both major religions take part"),
        l("পিঠে বানানোর প্রতিযোগিতা, বসে-আঁকো খেলা, প্রবীণদের হাঁটা প্রতিযোগিতা", "Pitha-making contests, a seat-and-draw game and a walking competition for senior citizens"),
        l("বাউল গান, ছৌ নাচ, যাত্রা, তর্জা আর কবিগানের পরিবেশনা", "Performances of Baul songs, Chhau dance, Jatra, Tarja and Kobi-gaan"),
        l("ঢেঁকি আর নানা ধানের জাতের মতো গ্রামীণ জিনিসের প্রদর্শনী, হস্তশিল্পের দোকান", "Exhibitions of rural items like the dhenki and paddy varieties, and handicraft stalls"),
      ],
      source: WIKI_NABANNA,
    },
    { kind: "h2", text: l("খাবারদাবার", "The food") },
    {
      kind: "p",
      text: l(
        "নবান্নের খাবারের তালিকায় আছে পিঠে, পাটিসাপটা আর পায়েস (এখন সবজির পায়েসও)। পিঠে সাধারণত চালের গুঁড়োয় তৈরি, তবে কোনওটা গমের আটারও হয়।",
        "Nabanna foods listed include pitha, patishapta and payesh (now even a vegetable version). Pitha is typically made of rice flour, though some are made of wheat flour.",
      ),
      source: WIKI_NABANNA,
    },
    {
      kind: "p",
      text: l(
        "পিঠে প্যানকেক, পুর-ভরা গোলা বা ভাজার মতো এক ধরনের খাবার, মিষ্টি বা নোনতা দুই-ই হতে পারে। পাটিসাপটা গুড় আর নারকেল বা ক্ষীর দিয়ে ভরা পাতলা ক্রেপ, আর পুলি নারকেল বা ক্ষীরের পুরের ডাম্পলিং, ভাজা বা ভাপানো। পিঠে অনেক সময় খেজুরের গুড় দিয়ে খাওয়া হয়।",
        "Pitha is a food akin to pancakes, dumplings or fritters, sweet or savoury. Patishapta is a thin crepe stuffed with jaggery and coconut or kheer, and puli is a dumpling with a coconut or kheer filling, fried or steamed. Pitha is often served with date palm molasses.",
      ),
      source: WIKI_PITHA,
    },
    {
      kind: "p",
      text: l(
        "নবান্ন আর পৌষ পার্বণ বা মকর সংক্রান্তির সঙ্গে বিশেষ পিঠে জড়িয়ে আছে। শরৎ-শীতে বাংলাদেশের নানা জায়গায় পিঠা মেলা বা পিঠা উৎসব হয়।",
        "Special pitha is linked with harvest festivals such as Nabanna and the Poush parbon, or Makar Sankranti. In autumn and winter, pitha melas and pitha utshobs are held all over Bangladesh.",
      ),
      source: WIKI_PITHA,
    },
    { kind: "h2", text: l("ঢাকার জাতীয় নবান্ন উৎসব", "Dhaka's National Nabanna Festival") },
    {
      kind: "p",
      text: l(
        "ঢাকায় প্রতি বছর নবান্ন উৎসব হয়, ১৯৯৮ সাল থেকে আয়োজন করছে জাতীয় নবান্ন উৎসব উদযাপন পরিষদ। এটি এক দিনের উৎসব। উইকিপিডিয়ায় শাহরিয়ার সালামকে প্রতিষ্ঠাতা ও প্রধান পরিকল্পনাকারী বলা হয়েছে।",
        "A Nabanna festival is held in Dhaka every year, organised since 1998 by the Jatiya Nabanna Utshab Udjapan Parshad (National Harvest Festival Committee). It is a day-long festival, and Wikipedia names Shahriar Salam as founder and main planner.",
      ),
      source: WIKI_NABANNA,
    },
    {
      kind: "tip",
      text: l(
        "বাড়িতে উদযাপন করতে চাইলে নতুন চালের পায়েস আর একটা-দুটো পিঠে বানিয়ে প্রতিবেশীদের সঙ্গে ভাগ করে নাও। পিঠে মেলা বা নবান্ন মেলা কাছে হলে সময়সূচি আয়োজকদের কাছে জেনে নিও।",
        "To celebrate at home, make payesh from new rice and a pitha or two, and share them with neighbours. If a pitha mela or Nabanna fair is nearby, check the schedule with the organisers.",
      ),
    },
  ],
  faq: [
    {
      q: l("নবান্ন কী?", "What is Nabanna?"),
      a: l("বাঙালির নতুন ফসল তোলার উৎসব, যার মূল কথা নতুন ধানের খাওয়া।", "A Bengali harvest festival centred on eating food from the new crop."),
    },
    {
      q: l("নবান্ন কোন মাসে হয়?", "In which month is Nabanna celebrated?"),
      a: l("ঢাকায় এটি বাংলা মাস অগ্রহায়ণের প্রথম দিনে পালিত হয়।", "In Dhaka it is held on the first day of the Bengali month of Agrahayan."),
    },
    {
      q: l("নবান্নে কী কী খাবার তৈরি হয়?", "What foods are made for Nabanna?"),
      a: l("পিঠে, পাটিসাপটা আর পায়েস।", "Pitha, patishapta and payesh."),
    },
    {
      q: l("নবান্ন কোথায় কোথায় পালিত হয়?", "Where is Nabanna celebrated?"),
      a: l("বাংলাদেশ, পশ্চিমবঙ্গ, ত্রিপুরা, আসামের বরাক উপত্যকা আর ঝাড়খণ্ডের পূর্বাংশে।", "In Bangladesh, West Bengal, Tripura, Assam's Barak Valley and eastern Jharkhand."),
    },
    {
      q: l("২০২৬ সালে নবান্ন কবে?", "When is Nabanna in 2026?"),
      a: l("আমরা ২০২৬-এর কোনও ইংরেজি তারিখ পড়া সূত্রে পাইনি; এটি অগ্রহায়ণের প্রথম দিনে, তারিখ নিজের পঞ্জিকায় দেখে নাও।", "We found no 2026 Gregorian date in a fetched source; it falls on the first day of Agrahayan, so check your almanac."),
    },
  ],
  related: [
    { href: "/poush-sankranti-2027", label: l("পৌষ সংক্রান্তি ২০২৭", "Poush Sankranti 2027") },
    { href: "/greetings/poush", label: l("পৌষের শুভেচ্ছা কার্ড", "Poush greeting cards") },
    { href: "/calendar-2027", label: l("২০২৭-এর ক্যালেন্ডার", "2027 calendar") },
    { href: "/rash-purnima-2026", label: l("রাশ পূর্ণিমা ২০২৬", "Rash Purnima 2026") },
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
  ],
  sources: [WIKI_NABANNA, WIKI_PITHA],
};
