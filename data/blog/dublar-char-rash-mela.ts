// Blog: Rash Mela at Dublar Char, Sundarbans. Facts from Wikipedia and Dhaka Tribune fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Dublar Char", url: "https://en.wikipedia.org/wiki/Dublar_Char" };
const TRIBUNE_2025 = { title: "Dhaka Tribune, 3-day Ras Mela ends at Dublar Char (5 November 2025)", url: "https://www.dhakatribune.com/bangladesh/nation/395677/3-day-ras-mela-ends-at-dublar-char" };

export const DUBLAR_CHAR_RASH_MELA: Article = {
  slug: "dublar-char-rash-mela-sundarbans",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("দুবলার চরের রাস মেলা: সুন্দরবনের পুণ্যস্নান", "Dublar Char Rash Mela in the Sundarbans"),
  description: l(
    "সুন্দরবনের দুবলার চরে তিন দিনের রাস মেলা কবে হয়, কীভাবে শুরু হয়েছিল, পুণ্যস্নান ও ২০২৫ সালের আয়োজনের খবর।",
    "The three-day Rash Mela at Dublar Char in the Sundarbans: when it is held, how it began, the holy bath and what happened in 2025.",
  ),
  h1: l("দুবলার চরের রাস মেলা, সুন্দরবন", "Rash Mela at Dublar Char, Sundarbans"),
  lead: l(
    "বঙ্গোপসাগরের কাছে সুন্দরবনের এক দ্বীপে রাস পূর্ণিমায় তিন দিন ধরে পুজো, মেলা আর সাগরস্নান হয়।",
    "On an island of the Sundarbans near the Bay of Bengal, Rash Purnima brings three days of puja, a fair and a sea bath.",
  ),
  icon: "🌕",
  body: [
    { kind: "h2", text: l("দুবলার চর কোথায়", "Where is Dublar Char") },
    {
      kind: "p",
      text: l(
        "দুবলার চর বাগেরহাট জেলায়, সুন্দরবনের দক্ষিণ প্রান্তে বঙ্গোপসাগরের কাছের একটি দ্বীপ। আয়তন প্রায় ৬৬.৫ বর্গকিলোমিটার।",
        "Dublar Char is an island in Bagerhat district on the southern edge of the Sundarbans near the Bay of Bengal. It covers about 66.5 square km.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("রাস মেলা কবে", "When the Rash Mela is held") },
    {
      kind: "p",
      text: l(
        "মেলা বসে প্রতি বছর কার্তিক মাসে, রাস পূর্ণিমা উপলক্ষে। চলে তিন দিন।",
        "The fair is held every year in the month of Kartik, around Rash Purnima, and lasts three days.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "ঢাকা ট্রিবিউনের ২০২৫ সালের প্রতিবেদন অনুযায়ী উৎসব হয় বাংলা কার্তিকের শেষ বা অগ্রহায়ণের শুরুর পূর্ণিমায়। সেবার মেলা শেষ হয় ৫ নভেম্বর ২০২৫, বুধবার সকালে।",
        "Dhaka Tribune's 2025 report says the festival falls on the full moon at the end of Kartik or the start of Agrahayan. In 2025 it ended on the morning of Wednesday 5 November.",
      ),
      source: TRIBUNE_2025,
    },
    { kind: "h2", text: l("কীভাবে শুরু হয়েছিল", "How it began") },
    {
      kind: "p",
      text: l(
        "অনেকে বলেন মেলা ২০০ বছরের পুরোনো, তবে ঐতিহাসিক বিবরণে ধরা হয় ১৯২৩ সালে শুরু। হরিচাঁদ ঠাকুরের এক ভক্ত, বনবাসী হরিভজন (১৮২৯-১৯২৩) এর সূচনা করেন বলে উইকিপিডিয়ায় লেখা আছে।",
        "The festival is often said to be 200 years old, but historical accounts suggest it began in 1923. Wikipedia says it was started by Haribhajan (1829-1923), a forest-dwelling devotee of Harichand Thakur.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("মেলায় কী হয়", "What happens at the mela") },
    {
      kind: "p",
      text: l(
        "ভক্তরা সাগরে পুণ্যস্নান করেন, সূর্যোদয়ের সময় সাগরের জলে ফল ভাসান, আর অনেকে বাদ্য বাজিয়ে ভজন-কীর্তন গান।",
        "Devotees take a holy dip in the sea, float fruits on the water at sunrise, and some play instruments and sing bhajans and kirtans.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "২০২৫ সালে ঢাকা ট্রিবিউন লিখেছিল, মেলায় লাখো ভক্ত এসেছিলেন, জাপান ও কানাডাসহ প্রায় ১৫টি দেশের ভক্ত ও পর্যটক ছিলেন। ভক্তরা প্রায় পাঁচ কিলোমিটার সৈকত ধরে সারি বেঁধে বসে প্রার্থনা করেন।",
        "In 2025 Dhaka Tribune reported lakhs of devotees, with devotees and tourists from about 15 countries including Japan and Canada. Devotees sat in rows along roughly five km of seashore to pray.",
      ),
      source: TRIBUNE_2025,
    },
    {
      kind: "p",
      text: l(
        "ওই বছর ৩ নভেম্বর সোমবার সকাল থেকে ট্রলার ও লঞ্চে তীর্থযাত্রীরা পৌঁছাতে শুরু করেন, বন ও কোস্ট গার্ডের নিরাপত্তায়। ৪ নভেম্বর সকালে বাংলা একাডেমির উপপরিচালক উৎসবের উদ্বোধন করেন। পূর্ব সুন্দরবন বিভাগের বন কর্মকর্তা জানান, কোনও অপ্রীতিকর ঘটনা ঘটেনি।",
        "That year pilgrims began arriving by trawler and launch from the morning of Monday 3 November under forest and coast guard security. A Bangla Academy deputy director opened the festival on the morning of 4 November. The East Sundarbans forest officer said no untoward incident took place.",
      ),
      source: TRIBUNE_2025,
    },
    {
      kind: "tip",
      text: l(
        "সুন্দরবনের পরিবেশ বাঁচাতে প্লাস্টিক সঙ্গে নিও না, আর যাওয়া-আসার নৌকা বা লঞ্চের বুকিং আগেভাগে নিশ্চিত করো।",
        "Skip plastic to protect the Sundarbans, and confirm your boat or launch booking well ahead.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "প্রবেশের নিয়ম বা অনুমতি লাগে কি না, তা বছরভেদে বদলাতে পারে। যাওয়ার আগে বন বিভাগ বা আয়োজকদের কাছে জেনে নাও।",
        "Entry rules and permits can change from year to year. Check with the Forest Department or organisers before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("দুবলার চরের রাস মেলা কবে হয়", "When is the Dublar Char Rash Mela?"),
      a: l(
        "প্রতি বছর কার্তিক মাসে রাস পূর্ণিমায়, তিন দিন ধরে। ২০২৫ সালে তা শেষ হয় ৫ নভেম্বর।",
        "Every year in Kartik around Rash Purnima, for three days. In 2025 it ended on 5 November.",
      ),
    },
    {
      q: l("দুবলার চর কোথায়", "Where is Dublar Char?"),
      a: l(
        "বাগেরহাট জেলার সুন্দরবনের দক্ষিণ প্রান্তে, বঙ্গোপসাগরের কাছে।",
        "In Bagerhat district on the southern edge of the Sundarbans, near the Bay of Bengal.",
      ),
    },
    {
      q: l("দুবলার চরের রাস মেলা কবে শুরু হয়", "When did the Dublar Char Rash Mela start?"),
      a: l(
        "ঐতিহাসিক বিবরণে ধরা হয় ১৯২৩ সালে, হরিভজন নামে এক ভক্তের হাতে।",
        "Historical accounts suggest 1923, started by a devotee named Haribhajan.",
      ),
    },
    {
      q: l("রাস মেলায় কী কী হয়", "What happens at the Rash Mela?"),
      a: l(
        "পুজো, সাগরে পুণ্যস্নান, সূর্যোদয়ে ফল ভাসানো, আর ভজন-কীর্তন।",
        "Puja, a holy dip in the sea, floating fruits at sunrise, and bhajans and kirtans.",
      ),
    },
  ],
  related: [
    { href: "/rash-purnima-2027", label: l("রাস পূর্ণিমা ২০২৭", "Rash Purnima 2027") },
    { href: "/rash-purnima-2026", label: l("রাস পূর্ণিমা ২০২৬", "Rash Purnima 2026") },
    { href: "/blog/langalbandh-ashtami-snan-narayanganj", label: l("লাঙ্গলবন্দের অষ্টমী স্নান", "Langalbandh Ashtami Snan") },
    { href: "/blog/kali-puja-bangladesh", label: l("বাংলাদেশে কালীপুজো", "Kali Puja in Bangladesh") },
  ],
  sources: [WIKI, TRIBUNE_2025],
};
