// Blog: Naihati Boro Maa Kali Puja. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_TEMPLE = { title: "Wikipedia, Boro Maa Kali Temple, Naihati", url: "https://en.wikipedia.org/wiki/Boro_Maa_Kali_Temple,_Naihati" };
const WIKI_STATION = { title: "Wikipedia, Naihati Junction railway station", url: "https://en.wikipedia.org/wiki/Naihati_Junction_railway_station" };
const UNI = { title: "UNI, no VIP gate at Boro Maa Kali Puja in Naihati (25 Oct 2026)", url: "https://www.uniindia.com/east-india/security-wb-boro-maa-vip-gate/225195" };

export const NAIHATI_BORO_MAA: Article = {
  slug: "naihati-boro-maa-kali-puja",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("নৈহাটির বড়মা কালীপুজো: ইতিহাস আর যাওয়ার পথ", "Naihati Boro Maa Kali Puja: History and How to Go"),
  description: l(
    "নৈহাটির বড়মা কালীপুজো ১৯২৩ থেকে: ইতিহাস, ২২ ফুটের প্রতিমা, স্থায়ী মন্দির, ট্রেনে যাওয়া আর ২০২৬-এ ভিআইপি গেট না থাকার খবর।",
    "Naihati Boro Maa Kali Puja since 1923: history, the 22 ft idol, the permanent temple, getting there by train, and the 2026 no-VIP-gate rule.",
  ),
  h1: l("নৈহাটির বড়মা: ইতিহাস, প্রতিমা, ভিড়ের টিপস", "Naihati's Boro Maa: history, the idol and crowd tips"),
  lead: l(
    "কালীপুজোর রাতে লাখো মানুষ নৈহাটিতে বড়মাকে দেখতে আসে। কীভাবে শুরু, কেমন প্রতিমা, আর কীভাবে যাবে।",
    "On Kali Puja night lakhs of people head to Naihati to see Boro Maa. How it began, what the idol is like, and how to get there.",
  ),
  icon: "🛕",
  body: [
    { kind: "h2", text: l("বড়মার ইতিহাস", "The history of Boro Maa") },
    {
      kind: "p",
      text: l(
        "পুজোর শুরু ১৯২৩ সালে। পাটকলের কর্মী আর সমাজসেবী ভবেশ চক্রবর্তী নবদ্বীপ ঘুরে আসার পর স্বপ্ন দেখেন, মা তাঁকে বিশাল প্রতিমা গড়তে বলছেন, উচ্চতা প্রায় ২২ ফুট। প্রথমে নাম ছিল বড় কালী বা ভবেশ কালী; পরে হয় বড়মা।",
        "The puja began in 1923. Bhavesh Chakraborty, a jute-mill worker and social worker, had a dream after a visit to Nabadwip in which the goddess asked him to make a gigantic idol of about 22 feet. It was first called Boro Kali or Bhavesh Kali, and later Boro Maa.",
      ),
      source: WIKI_TEMPLE,
    },
    {
      kind: "p",
      text: l(
        "প্রতি বছর নতুন ২২ ফুটের প্রতিমা গড়া হয়। কাজ শুরু হয় লক্ষ্মীপুজোর দিন খুঁটিপুজো দিয়ে, লাগে প্রায় ১৫ দিন। প্রতিমাকে সাজানো হয় প্রায় ১২ কেজি সোনা আর ২০০ কেজি রুপোর গয়নায়।",
        "A new 22-foot idol is made every year. Work starts on Lakshmi Puja with a khuti puja and takes about 15 days. The idol is adorned with roughly 12 kg of gold and 200 kg of silver ornaments.",
      ),
      source: WIKI_TEMPLE,
    },
    {
      kind: "p",
      text: l(
        "কালীপুজোয় পাঁচ দিন ধরে পুজো চলে। কমিটি স্থানীয়দের কাছ থেকে চাঁদা নেয় না, ভক্তদের দানেই চলে। অনেকে দণ্ডি কেটে মানত করেন। বিসর্জন গঙ্গায়; ১৯৭০ পর্যন্ত প্রতিমা কাঁধে বওয়া হত, তার পর থেকে চাকার ট্রলিতে টানা হয়।",
        "The puja runs for five days during Kali Puja. The committee does not collect chanda from locals and relies on devotees' donations. Many devotees perform dandi kata as a vow. Immersion is in the Ganga; until 1970 the idol was carried on shoulders, and since then it is pulled on a wheeled trolley.",
      ),
      source: WIKI_TEMPLE,
    },
    { kind: "h2", text: l("স্থায়ী মন্দির", "The permanent temple") },
    {
      kind: "p",
      text: l(
        "পুজোর একশো বছরে, ২০২৩ সালে, স্থায়ী মন্দির খোলে। তার পাথরের মূর্তি গড়েছেন ভাস্কর ধর্মেন্দ্র সাউ, প্রায় তিন মাসে, সঙ্গে ৩৫ কেজি রুপোর পেছনপট। প্রতিবেদন অনুযায়ী খরচ ৮ কোটি টাকা। বছরের বারো অমাবস্যাতেও বিশেষ পুজো হয়।",
        "In the puja's 100th year, 2023, a permanent temple opened. Its stone idol was made by sculptor Dharmendra Sau over about three months, with a 35 kg silver backdrop; the reported budget was Rs 8 crore. Special pujas are also held on each of the twelve amavasyas.",
      ),
      source: WIKI_TEMPLE,
    },
    { kind: "h2", text: l("কীভাবে যাবে", "Getting there") },
    {
      kind: "p",
      text: l(
        "নৈহাটি জংশন শিয়ালদা বিভাগের শিয়ালদা–নৈহাটি–রানাঘাট মেইন লাইনে, স্টেশন কোড NH। স্টেশনের ঠিকানা ঋষি বঙ্কিমচন্দ্র রোড, নৈহাটি।",
        "Naihati Junction is on the Sealdah–Naihati–Ranaghat main line in the Sealdah division, station code NH. The station address is Rishi Bankimchandra Road, Naihati.",
      ),
      source: WIKI_STATION,
    },
    {
      kind: "tip",
      text: l(
        "কালীপুজোর রাতে ট্রেন আর স্টেশন দুটোই ঠাসা থাকে। ভিড় কম পেতে সন্ধের আগে পৌঁছে যাও, ফেরার জন্য আগে থেকে ট্রেনের সময় দেখে রাখো, আর দলের সবাই এক জায়গায় দেখা করার জায়গা ঠিক করে নাও। বাচ্চা আর বয়স্কদের সঙ্গে নিলে আরও সতর্ক থেকো, ফোনের চার্জ ভরে রেখো।",
        "Trains and the station are packed on Kali Puja night. To beat the worst crowds, arrive before dusk, check your return train in advance, and agree a meeting spot with your group. Take extra care with children and elders, and keep your phone charged.",
      ),
    },
    { kind: "h2", text: l("২০২৬-এর খবর", "2026 update") },
    {
      kind: "p",
      text: l(
        "২৫ অক্টোবর ২০২৬-এর খবর অনুযায়ী, ভক্তদের নিরাপত্তার কথা ভেবে রাজ্য সরকার এ বছর বড়মার পুজোয় কোনও ভিআইপি গেট না রাখার সিদ্ধান্ত নিয়েছে। লাখো ভক্ত আসবেন বলে ধরা হচ্ছে।",
        "According to a report dated 25 October 2026, the West Bengal government has decided against any VIP gate at Boro Maa's puja this year, to protect the devotees expected in large numbers. The shrine is preparing for lakhs of visitors.",
      ),
      source: UNI,
    },
    {
      kind: "tip",
      text: l(
        "এর মানে সবার জন্য এক লাইন। ধৈর্য ধরে সারিতে দাঁড়াও, পুলিশ আর স্বেচ্ছাসেবকদের কথা শোনো, ঠেলাঠেলি কোরো না।",
        "That means one queue for everyone. Be patient in line, follow the police and volunteers, and do not push.",
      ),
    },
  ],
  faq: [
    {
      q: l("নৈহাটির বড়মা কালীপুজো কবে শুরু হয়?", "When did Naihati Boro Maa Kali Puja start?"),
      a: l("১৯২৩ সালে, ভবেশ চক্রবর্তীর হাতে।", "In 1923, started by Bhavesh Chakraborty."),
    },
    {
      q: l("নৈহাটির বড়মার প্রতিমা কত বড়?", "How tall is the Naihati Boro Maa idol?"),
      a: l("প্রতি বছর প্রায় ২২ ফুটের নতুন প্রতিমা গড়া হয়।", "A new idol of about 22 feet is made each year."),
    },
    {
      q: l("কলকাতা থেকে নৈহাটি কীভাবে যাব?", "How do I get to Naihati from Kolkata?"),
      a: l("শিয়ালদা–নৈহাটি–রানাঘাট মেইন লাইনের লোকাল ট্রেনে নৈহাটি জংশন, স্টেশন কোড NH।", "Take a local train on the Sealdah–Naihati–Ranaghat main line to Naihati Junction, station code NH."),
    },
    {
      q: l("নৈহাটির বড়মার পুজোয় এ বছর ভিআইপি গেট থাকবে?", "Will there be a VIP gate at Naihati Boro Maa in 2026?"),
      a: l("না, ২৫ অক্টোবর ২০২৬-এর খবর অনুযায়ী রাজ্য সরকার ভিআইপি গেট না রাখার সিদ্ধান্ত নিয়েছে।", "No. A 25 October 2026 report says the state government decided against a VIP gate."),
    },
    {
      q: l("নৈহাটির বড়মার মন্দির কি সারা বছর খোলা?", "Is the Naihati Boro Maa temple open all year?"),
      a: l("২০২৩ সালে স্থায়ী মন্দির খুলেছে, আর প্রতি অমাবস্যায় বিশেষ পুজো হয়; দর্শনের সময় মন্দির কমিটির কাছে জেনে নাও।", "A permanent temple opened in 2023 and special pujas are held on every amavasya; check visiting hours with the temple committee."),
    },
  ],
  related: [
    { href: "/puja/naihati-boro-maa", label: l("নৈহাটি বড়মা, পুজো পাতা", "Naihati Boro Maa puja page") },
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/greetings/kali", label: l("কালীপুজোর শুভেচ্ছা কার্ড", "Kali Puja greeting cards") },
  ],
  sources: [WIKI_TEMPLE, WIKI_STATION, UNI],
};
