// Blog: Poila Boishakh / Pohela Boishakh traditions. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_PB = { title: "Wikipedia, Pohela Boishakh", url: "https://en.wikipedia.org/wiki/Pohela_Boishakh" };
const WIKI_MS = { title: "Wikipedia, Mangal Shobhajatra", url: "https://en.wikipedia.org/wiki/Mangal_Shobhajatra" };
const DRIK = { title: "Drik Panchang, Pohela Boishakh 2027 (Kolkata)", url: "https://www.drikpanchang.com/festivals/pohela-boishakh/pohela-boishakh-date-time.html?geoname-id=1275004&year=2027" };

export const POILA_BOISHAKH_TRADITIONS: Article = {
  slug: "poila-boishakh-traditions",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("পয়লা বৈশাখের রীতি: দুই বাংলায়", "Poila Boishakh Traditions in West Bengal and Bangladesh"),
  description: l(
    "পয়লা বৈশাখের রীতি: হালখাতা, মঙ্গল শোভাযাত্রা, প্রভাতফেরি, দুই বাংলার তারিখের তফাত, আর ১৪৩৪ সালের দিন।",
    "Poila Boishakh traditions: Haal Khata, Mangal Shobhajatra, Prabhat Pheri, why the dates differ across the border, and the 1434 dates.",
  ),
  h1: l("পয়লা বৈশাখ: দুই বাংলার রীতি আর তারিখ", "Poila Boishakh: customs and dates on both sides of the border"),
  lead: l(
    "হালখাতা থেকে মঙ্গল শোভাযাত্রা, বাংলা নববর্ষ দুই দেশে একটু আলাদা ভাবে পালিত হয়। কেন, আর ১৪৩৪-এ কবে।",
    "From Haal Khata to Mangal Shobhajatra, the Bengali New Year is marked a little differently in the two countries. Why, and when it falls in 1434.",
  ),
  icon: "🎊",
  body: [
    { kind: "h2", text: l("দুই বাংলার নববর্ষের রীতি", "New Year customs") },
    {
      kind: "p",
      text: l(
        "হালখাতা হলো নববর্ষ উপলক্ষে গত বছরের সব হিসাব মিটিয়ে নতুন খাতা খোলার উৎসব।",
        "Haal Khata is the New Year custom of settling the previous year's accounts and opening a new ledger.",
      ),
      source: WIKI_PB,
    },
    {
      kind: "p",
      text: l(
        "পশ্চিমবঙ্গে খুব ভোরে সাংস্কৃতিক শোভাযাত্রা বের হয়, যার নাম প্রভাতফেরি।",
        "In West Bengal there are early-morning cultural processions called Prabhat Pheri.",
      ),
      source: WIKI_PB,
    },
    {
      kind: "p",
      text: l(
        "পান্তা ভাত হলো রাতে জলে ভিজিয়ে রাখা (সাধারণত বাসি) ভাত, যা বেশিরভাগ সময় ইলিশ আর অন্য তরকারির সঙ্গে খাওয়া হয়।",
        "Panta bhat is rice, generally leftovers, soaked in water overnight, usually eaten with hilsa and other curries.",
      ),
      source: WIKI_PB,
    },
    { kind: "h2", text: l("বাংলাদেশে: মঙ্গল শোভাযাত্রা", "Bangladesh and Mangal Shobhajatra") },
    {
      kind: "p",
      text: l(
        "বাংলাদেশে বর্ষবরণের অনুষ্ঠান শুরু হয় রমনা বটমূলে, মানে রমনা পার্কের বটগাছের তলায় নতুন বছরকে স্বাগত জানিয়ে।",
        "In Bangladesh the festivities begin with welcoming the year at Ramna Batamul, under the banyan tree in Ramna Park.",
      ),
      source: WIKI_PB,
    },
    {
      kind: "p",
      text: l(
        "মঙ্গল শোভাযাত্রা বাংলা নববর্ষের প্রথম দিন ভোরে বের হওয়া গণ-শোভাযাত্রা। আয়োজন করেন ঢাকা বিশ্ববিদ্যালয়ের চারুকলা অনুষদের শিক্ষক-শিক্ষার্থীরা। এতে পাখি, মাছ, পশু আর লোককথার বিশাল প্রতিকৃতি থাকে। ঢাকার এই শোভাযাত্রা শুরু ১৯৮৯ সালে, তবে ১৯৮৬ সালে যশোরে চারুপীঠ নামের এক সংস্থা প্রথম এমন উৎসব করেছিল বলে পাতাটিতে লেখা আছে।",
        "Mangal Shobhajatra is a mass procession at dawn on the first day of the Bengali New Year in Bangladesh, organised by teachers and students of the Faculty of Fine Arts of the University of Dhaka. It carries gigantic replicas of birds, fish, animals and folk-tale motifs. The Dhaka procession began in 1989, though the page says the festival was first observed in 1986 at Jessore, organised by an NGO called Charupit.",
      ),
      source: WIKI_MS,
    },
    {
      kind: "p",
      text: l(
        "২০১৬ সালের ৩০ নভেম্বর মঙ্গল শোভাযাত্রা ইউনেস্কোর মানবজাতির অধরা সাংস্কৃতিক ঐতিহ্যের প্রতিনিধিত্বমূলক তালিকায় জায়গা পায়।",
        "On 30 November 2016 Mangal Shobhajatra was selected for the UNESCO Representative List of the Intangible Cultural Heritage of Humanity.",
      ),
      source: WIKI_MS,
    },
    { kind: "h2", text: l("দুই দেশে তারিখ আলাদা কেন", "Why the dates differ") },
    {
      kind: "p",
      text: l(
        "পুরনো বাংলা পঞ্জিকা ১৯৬৬ সালে মুহম্মদ শহীদুল্লাহর নেতৃত্বাধীন কমিটি সংশোধন করে, আর বাংলাদেশ তা সরকারিভাবে নেয় ১৯৮৭ সালে। তার পর থেকে বাংলাদেশে নববর্ষ সব সময় ১৪ এপ্রিল পড়ে।",
        "The old calendar was modified in 1966 by a committee headed by Muhammad Shahidullah, and Bangladesh officially adopted the change in 1987. Since then the New Year always falls on 14 April in Bangladesh.",
      ),
      source: WIKI_PB,
    },
    {
      kind: "p",
      text: l(
        "পশ্চিমবঙ্গ ঐতিহ্যবাহী বাংলা পঞ্জিকা অনুসরণ করে, তাই উৎসব পড়ে ১৪ বা ১৫ এপ্রিল।",
        "West Bengal follows its traditional Bengali calendar, so the festival falls on 14 or 15 April.",
      ),
      source: WIKI_PB,
    },
    { kind: "h2", text: l("১৪৩৪ সালের দিন", "The dates for 1434") },
    {
      kind: "p",
      text: l(
        "দৃক পঞ্চাঙ্গ অনুযায়ী কলকাতার জন্য পয়লা বৈশাখ বৃহস্পতিবার, ১৫ এপ্রিল ২০২৭, আর বাংলা সন ১৪৩৪ শুরু। সংক্রান্তির মুহূর্ত ১৪ এপ্রিল বিকেল ৩টে ৩৩।",
        "Drik Panchang lists Pohela Boishakh for Kolkata on Thursday, 15 April 2027, with Bengali Era 1434 beginning. The sankranti moment is 3:33 pm on 14 April.",
      ),
      source: DRIK,
    },
    {
      kind: "p",
      text: l(
        "বাংলাদেশে নববর্ষ নির্দিষ্টভাবে ১৪ এপ্রিল, অর্থাৎ ২০২৭-এও ১৪ এপ্রিল।",
        "In Bangladesh the New Year is fixed on 14 April, so in 2027 as well it falls on 14 April.",
      ),
      source: WIKI_PB,
    },
    {
      kind: "tip",
      text: l(
        "সীমান্তের ওপারের আত্মীয় বা বন্ধুকে শুভেচ্ছা পাঠালে তারিখের তফাতটা মাথায় রেখো। দোকানে হালখাতার নেমন্তন্ন থাকলে সময় আগে জেনে নাও, কারণ ভিড় আর সময় জায়গাভেদে আলাদা।",
        "If you are greeting family or friends across the border, keep the one-day gap in mind. If a shop has invited you for Haal Khata, confirm the time first, since crowds and timings vary by place.",
      ),
    },
  ],
  faq: [
    {
      q: l("পয়লা বৈশাখ ২০২৭ কবে?", "When is Poila Boishakh in 2027?"),
      a: l("পশ্চিমবঙ্গে বৃহস্পতিবার, ১৫ এপ্রিল ২০২৭ (দৃক পঞ্চাঙ্গ); বাংলাদেশে ১৪ এপ্রিল।", "Thursday, 15 April 2027 in West Bengal (Drik Panchang); 14 April in Bangladesh."),
    },
    {
      q: l("বাংলাদেশ আর পশ্চিমবঙ্গে পয়লা (পহেলা) বৈশাখ আলাদা দিনে কেন?", "Why do West Bengal and Bangladesh celebrate Pohela Boishakh on different days?"),
      a: l("বাংলাদেশ ১৯৬৬-র সংশোধিত পঞ্জিকা ১৯৮৭ সালে নিয়ে ১৪ এপ্রিল স্থির করেছে; পশ্চিমবঙ্গ ঐতিহ্যবাহী পঞ্জিকা মানে, তাই ১৪ বা ১৫ এপ্রিল।", "Bangladesh adopted the 1966-modified calendar in 1987, fixing 14 April; West Bengal follows the traditional calendar, so it is 14 or 15 April."),
    },
    {
      q: l("হালখাতা কী?", "What is Haal Khata?"),
      a: l("নববর্ষে গত বছরের হিসাব মিটিয়ে নতুন খাতা খোলার উৎসব।", "A New Year custom of settling last year's accounts and opening a new ledger."),
    },
    {
      q: l("মঙ্গল শোভাযাত্রা কী, ইউনেস্কো কবে তালিকাভুক্ত করে?", "What is Mangal Shobhajatra and when did UNESCO list it?"),
      a: l("নববর্ষের ভোরে বের হওয়া গণ-শোভাযাত্রা, আয়োজক ঢাকা বিশ্ববিদ্যালয়ের চারুকলা অনুষদ; ৩০ নভেম্বর ২০১৬ ইউনেস্কোর তালিকায় ওঠে।", "A dawn procession on New Year's day organised by Dhaka University's Faculty of Fine Arts; it was selected for UNESCO's list on 30 November 2016."),
    },
    {
      q: l("প্রভাতফেরি কী?", "What is Prabhat Pheri?"),
      a: l("পশ্চিমবঙ্গে নববর্ষের খুব ভোরে বের হওয়া সাংস্কৃতিক শোভাযাত্রা।", "Early-morning cultural processions in West Bengal on New Year's day."),
    },
  ],
  related: [
    { href: "/poila-boishakh-2027", label: l("পয়লা বৈশাখ ২০২৭", "Poila Boishakh 2027") },
    { href: "/greetings/noboborsho", label: l("নববর্ষের শুভেচ্ছা কার্ড", "Noboborsho greeting cards") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI_PB, WIKI_MS, DRIK],
};
