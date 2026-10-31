// Blog: Kalighat Kali Temple visitor guide. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_TEMPLE = { title: "Wikipedia, Kalighat Kali Temple", url: "https://en.wikipedia.org/wiki/Kalighat_Kali_Temple" };
const WIKI_METRO = { title: "Wikipedia, Kalighat metro station", url: "https://en.wikipedia.org/wiki/Kalighat_metro_station" };

export const KALIGHAT_TEMPLE: Article = {
  slug: "kalighat-kali-temple-guide",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("কালীঘাট কালী মন্দির: ইতিহাস, শক্তিপীঠ, যাওয়ার পথ", "Kalighat Kali Temple: History, Shakti Peetha, Reach"),
  description: l(
    "কালীঘাট কালী মন্দিরের ইতিহাস, শক্তিপীঠের কথা, কালীঘাট মেট্রো স্টেশন দিয়ে যাওয়া, আর মন্দিরে যাওয়ার সময় মনে রাখার কিছু টিপস।",
    "Kalighat Kali Temple guide: history, its Shakti Peetha status, reaching it via Kalighat metro, and etiquette tips for your visit.",
  ),
  h1: l("কালীঘাট কালী মন্দির: ইতিহাস, শক্তিপীঠ আর কীভাবে যাবে", "Kalighat Kali Temple: history, Shakti Peetha and how to reach"),
  lead: l(
    "কলকাতার প্রাচীন কালীমন্দিরগুলোর একটা, একান্নটা শক্তিপীঠের একটা। এর ইতিহাস কী, মেট্রোয় কীভাবে পৌঁছবে, আর কী মনে রাখবে।",
    "One of Kolkata's best-known Kali shrines and counted among the 51 Shakti Pithas. Its history, how to reach it by metro, and what to keep in mind.",
  ),
  icon: "🛕",
  body: [
    { kind: "h2", text: l("কালীঘাটের ইতিহাস", "History of Kalighat") },
    {
      kind: "p",
      text: l(
        "বর্তমান মন্দিরের কাঠামো শেষ হয় ১৮০৯ সালে, সবর্ণ রায়চৌধুরী পরিবারের পৃষ্ঠপোষকতায়। সন্তোষ রায়চৌধুরী ১৭৯৮ সালে নির্মাণ শুরু করেন, শেষ হতে লাগে ১১ বছর।",
        "The present structure was completed in 1809 under the patronage of the Sabarna Roy Choudhury family. Santosh Roy Chowdhury began construction in 1798 and it took 11 years to finish.",
      ),
      source: WIKI_TEMPLE,
    },
    {
      kind: "p",
      text: l(
        "অন্য পৃষ্ঠপোষক ছিল বাওয়ালী রাজ আর সবর্ণ রায়চৌধুরী পরিবার। তবে রায়চৌধুরীদের চিরাচরিত পৃষ্ঠপোষকতা নিয়ে বিতর্ক আছে, এই কথাও ওই নিবন্ধে লেখা।",
        "Other patrons were the Bawali Raj and the Sabarna Roy Choudhury families. The source also notes that the Roy Chowdhurys' traditional patronage of the deity is disputed.",
      ),
      source: WIKI_TEMPLE,
    },
    { kind: "h2", text: l("শক্তিপীঠ", "A Shakti Peetha") },
    {
      kind: "p",
      text: l(
        "কালীঘাট ভারতের ৫১টা শক্তিপীঠের একটা। বলা হয় এখানে সতীর ডান পায়ের আঙুলগুলো পড়েছিল।",
        "Kalighat is one of the 51 Shakti Pithas in India. It is said that the toes of the right foot of Goddess Sati fell here.",
      ),
      source: WIKI_TEMPLE,
    },
    {
      kind: "p",
      text: l(
        "মন্দিরটা কলকাতার কালীঘাট এলাকায়। উইকিপিডিয়ার নিবন্ধে দর্শনের সময় বা নিয়মকানুনের কথা নেই।",
        "The temple is in the Kalighat area of Kolkata. The Wikipedia article gives no visiting hours or rules.",
      ),
      source: WIKI_TEMPLE,
    },
    { kind: "h2", text: l("কীভাবে যাবে", "How to reach") },
    {
      kind: "p",
      text: l(
        "কালীঘাট মেট্রো স্টেশন কলকাতা মেট্রোর ব্লু লাইনের (উত্তর-দক্ষিণ করিডর) একটা ভূগর্ভস্থ স্টেশন, রাসবিহারী অ্যাভিনিউতে, জতিন দাস পার্ক আর রবীন্দ্র সরোবরের মাঝে। স্টেশন খুলেছে ১৯৮৬ সালের ২৯ এপ্রিল।",
        "Kalighat is an underground station on the Blue Line (North-South corridor) of the Kolkata Metro, at Rashbehari Avenue, between Jatin Das Park and Rabindra Sarobar. The station opened on 29 April 1986.",
      ),
      source: WIKI_METRO,
    },
    {
      kind: "p",
      text: l(
        "স্টেশনের নিবন্ধে কালী মন্দিরকে ১ নম্বর প্রবেশ-প্রস্থানের কাছের জায়গা হিসেবে ধরা হয়েছে। স্টেশনে মা কালীর একটা ছোট মন্দিরও আছে। কোনও দূরত্ব সেখানে লেখা নেই।",
        "The station article lists the Kali Temple as a nearby landmark by Entry/Exit 1, and notes a shrine of Mother Kali at the station itself. No distances are printed.",
      ),
      source: WIKI_METRO,
    },
    { kind: "h2", text: l("দর্শনের সময় ও আদবকায়দা", "Timings and etiquette") },
    {
      kind: "tip",
      text: l(
        "মন্দিরের কোনও সরকারি বা অফিসিয়াল সময়সূচি আমরা পাইনি। তাই কোনও সংখ্যা দিচ্ছি না। সময় দিন আর উৎসবভেদে আলাদা হতে পারে, যাওয়ার আগে স্থানীয়ভাবে জেনে নাও।",
        "We found no official or government timetable for the temple, so we give no numbers. Hours can vary by day and festival; check locally before you go.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "মন্দিরে যাওয়ার সময় শালীন, আরামদায়ক পোশাক পরো, জুতো বাইরে রাখার ব্যবস্থা দেখে নাও, ফোন আর ব্যাগ সামলে রেখো, আর ঠেলাঠেলি না করে সারিতে দাঁড়াও। পুজোর জিনিস বা পুজো করানোর কথা যে-ই বলুক, দাম আগে জিজ্ঞেস করে নাও। এগুলো আমাদের সাধারণ পরামর্শ, মন্দিরের নিয়ম নয়।",
        "Dress modestly and comfortably, find out where to leave your footwear, keep your phone and bag secure, and queue without pushing. Ask the price first when anyone offers offerings or arranges a puja. These are our general tips, not temple rules.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "কালীপুজো আর অমাবস্যার মতো দিনে ভিড় বেশি হয়, ফেরার পথ আর দলের সঙ্গে দেখা করার জায়গা আগে থেকে ঠিক করে নাও।",
        "Days like Kali Puja and amavasya tend to be crowded, so fix your route back and a meeting spot with your group in advance.",
      ),
    },
  ],
  faq: [
    {
      q: l("কালীঘাট মন্দির খোলার সময়", "Kalighat temple timings"),
      a: l(
        "কোনও অফিসিয়াল সূত্রে সময় পাইনি, তাই সংখ্যা দিচ্ছি না। যাওয়ার আগে স্থানীয়ভাবে জেনে নাও।",
        "We found no official source for timings, so we give no numbers. Check locally before you go.",
      ),
    },
    {
      q: l("কালীঘাট মেট্রো থেকে মন্দির কত দূর?", "How far is Kalighat temple from Kalighat metro?"),
      a: l(
        "কোনও দূরত্ব আমাদের সূত্রে লেখা নেই। তবে স্টেশনের ১ নম্বর প্রবেশ-প্রস্থানের কাছের জায়গা হিসেবে মন্দিরের নাম আছে।",
        "No distance is printed in our sources, but the temple is listed as a landmark near the station's Entry/Exit 1.",
      ),
    },
    {
      q: l("কালীঘাট কি শক্তিপীঠ?", "Is Kalighat a Shakti Peetha?"),
      a: l(
        "হ্যাঁ, এটা ভারতের ৫১টা শক্তিপীঠের একটা, বলা হয় সতীর ডান পায়ের আঙুল এখানে পড়েছিল।",
        "Yes, it is one of the 51 Shakti Pithas in India; the toes of Sati's right foot are said to have fallen here.",
      ),
    },
    {
      q: l("কালীঘাট মন্দির কবে তৈরি হয়?", "When was Kalighat temple built?"),
      a: l(
        "বর্তমান কাঠামো ১৮০৯ সালে শেষ হয়, নির্মাণ শুরু হয়েছিল ১৭৯৮ সালে।",
        "The present structure was completed in 1809; construction began in 1798.",
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
  sources: [WIKI_TEMPLE, WIKI_METRO],
};
