// Blog: Ekadashi fasting rules. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Ekadashi", url: "https://en.wikipedia.org/wiki/Ekadashi" };
const DRIK = { title: "Drik Panchang, Ekadashi dates for Smarthas (2027, Kolkata)", url: "https://www.drikpanchang.com/vrats/ekadashidates.html?year=2027&geoname-id=1275004" };

export const EKADASHI_FASTING: Article = {
  slug: "ekadashi-fasting-rules",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("একাদশীর উপবাসের নিয়ম: পারণ আর স্মার্ত-বৈষ্ণব ফারাক", "Ekadashi Fasting Rules: Parana, Smarta and Vaishnava"),
  description: l(
    "একাদশী কী, কেন উপবাস করা হয়, কী এড়ানো হয়, পারণ কখন, আর স্মার্ত ও বৈষ্ণব একাদশীর তারিখ কেন কখনও আলাদা হয়, সহজ ভাষায়।",
    "What Ekadashi is, why people fast, what is commonly avoided, when parana is, and why Smarta and Vaishnava dates sometimes differ.",
  ),
  h1: l("একাদশীর উপবাস: নিয়ম, পারণ আর দুই তারিখের কথা", "Ekadashi fasting: the rules, parana and two dates"),
  lead: l(
    "মাসে দুবার একাদশী। উপবাস কেন, সাধারণত কী এড়ানো হয়, কখন ভাঙে, আর কেন কখনও দুটো আলাদা দিন দেখা যায়।",
    "Ekadashi comes twice a month. Why people fast, what is usually avoided, when the fast is broken, and why you sometimes see two different days.",
  ),
  icon: "🌙",
  body: [
    { kind: "h2", text: l("একাদশী কী", "What is Ekadashi") },
    {
      kind: "p",
      text: l(
        "একাদশী মানে প্রতি চান্দ্র পক্ষের এগারো নম্বর তিথি। বৈষ্ণব পরম্পরায় এটি মাসে দুবার পালন করা হয়।",
        "Ekadashi is the eleventh lunar day (tithi) of each lunar fortnight, and it is observed twice a month in the Vaishnava tradition.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কেন উপবাস", "Why people fast") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া অনুযায়ী উপবাসের মূল উদ্দেশ্য মন আর ইন্দ্রিয়ের ওপর নিয়ন্ত্রণ পাওয়া। ভক্তরা একে বিষ্ণুর আরাধনার উপায়ও মনে করেন, পুরো উপবাস করে বা প্রতীকীভাবে।",
        "Wikipedia says the primary purpose of fasting on Ekadashi is to gain control over the mind and bodily senses. Devotees also see it as a way to honour Vishnu, by fasting fully or just symbolically.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("সাধারণত কী এড়ানো হয়", "What is commonly avoided") },
    {
      kind: "p",
      text: l(
        "নক্তভোজী ধরনের উপবাসে খাবারে চাল, গম, বাজরার মতো শস্য, আর ডাল-বিনের মতো দানাশস্য থাকা উচিত নয় বলা হয়। কড়া উপবাসে খাবার আর জল দুটোই বাদ যায়।",
        "In the naktabhoji form, the meal should not have grains such as rice, wheat or millets, or legumes such as dals and beans. Strict fasts go further and exclude all food and water.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গও লিখেছে, একাদশীর উপবাসে সব ধরনের শস্য খাওয়া নিষিদ্ধ।",
        "Drik Panchang likewise states that eating all types of grains and cereals is prohibited during Ekadashi fasting.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "ডায়াবেটিস, প্রেশার, গর্ভাবস্থা বা অন্য কোনও শারীরিক সমস্যা থাকলে, বা ওষুধ খেলে, উপবাসের আগে ডাক্তারের পরামর্শ নাও। বাচ্চা আর বয়স্কদের জন্য কড়া উপবাস ঠিক নয়। শরীর খারাপ লাগলে থেমে যাও।",
        "If you have a health condition, are pregnant or take medicines, check with a doctor before fasting. Strict fasts are not meant for children or the elderly. If you feel unwell, stop.",
      ),
    },
    { kind: "h2", text: l("পারণ: উপবাস ভাঙা", "Parana: breaking the fast") },
    {
      kind: "p",
      text: l(
        "উপবাস শেষ হয় পরের দিন, দ্বাদশীতে, সূর্যোদয়ের পরে। একে পারণ বলে।",
        "The fast ends the next day, Dwadashi, and devotees break it only after sunrise. This is called parana.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গ বলছে, পারণ পরের দিন সূর্যোদয়ের পরেই করতে হয়। প্রদোষ পরের দিনে পড়লে শুধু জল দিয়ে প্রতীকী পারণের পরামর্শও আছে।",
        "Drik Panchang says to break the fast on the next day only after sunrise, and where Pradosh falls on the next day it suggests a symbolic parana with only water.",
      ),
      source: DRIK,
    },
    { kind: "h2", text: l("স্মার্ত আর বৈষ্ণবের তারিখ", "Smarta and Vaishnava dates") },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের এই পাতা স্মার্তদের জন্য একাদশীর তালিকা। বৈষ্ণবদের জন্য আলাদা তালিকা আছে, আর তাদের উপবাসের দিন স্মার্তদের একদিন পরে পড়তে পারে। কারণ হিসেবে পাতাটি শুধু এটুকু বলে যে পঞ্চাঙ্গে দিন শুরু আর শেষ হয় সূর্যোদয়ে, বিস্তারিত ব্যাখ্যা দেয়নি।",
        "This Drik Panchang page lists Ekadashi days for Smarthas. Vaishnavas have a separate list, and their fasting day might fall one day after the Smartha day. On why, the page only says that in Panchang a day starts and ends with sunrise; it gives no fuller explanation.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "তুমি কোন পরম্পরা মানো, স্মার্ত না বৈষ্ণব, তা পরিবার বা গুরুজনের কাছে জেনে নাও, আর সেই অনুযায়ী তারিখ বেছো। আমাদের একাদশী ২০২৭ পাতায় সব তারিখ আছে।",
        "Ask your family or guru whether you follow the Smarta or Vaishnava tradition and pick the date accordingly. Our Ekadashi 2027 page lists every date.",
      ),
    },
  ],
  faq: [
    {
      q: l("একাদশী কী?", "What is Ekadashi?"),
      a: l("প্রতি চান্দ্র পক্ষের এগারো নম্বর তিথি, মাসে দুবার।", "The eleventh lunar day of each lunar fortnight, twice a month."),
    },
    {
      q: l("একাদশীতে কেন উপবাস করা হয়?", "Why do people fast on Ekadashi?"),
      a: l("মন আর ইন্দ্রিয়ের ওপর নিয়ন্ত্রণ পেতে, আর বিষ্ণুর আরাধনা হিসেবে।", "To gain control over the mind and senses, and as a way to honour Vishnu."),
    },
    {
      q: l("একাদশীতে কী খাওয়া যায় না?", "What can't you eat on Ekadashi?"),
      a: l("সূত্র অনুযায়ী চাল, গমসহ সব শস্য, আর কোনও ধরনে ডাল-বিনও বাদ। নিজের পরম্পরার নিয়ম জেনে নিও।", "Sources say all grains such as rice and wheat are avoided, and in some forms legumes like dals and beans too. Check your own tradition's rules."),
    },
    {
      q: l("একাদশীর পারণ কখন করতে হয়?", "When do you break the Ekadashi fast?"),
      a: l("পরের দিন দ্বাদশীতে সূর্যোদয়ের পরে।", "On the next day, Dwadashi, after sunrise."),
    },
    {
      q: l("স্মার্ত আর বৈষ্ণব একাদশী কি আলাদা দিনে পড়ে?", "Are Smarta and Vaishnava Ekadashi on different days?"),
      a: l("কখনও কখনও। বৈষ্ণবদের উপবাসের দিন স্মার্তদের একদিন পরে হতে পারে।", "Sometimes. The Vaishnava fasting day might be one day after the Smartha day."),
    },
  ],
  related: [
    { href: "/ekadashi-2027", label: l("একাদশী ২০২৭, সব তারিখ", "Ekadashi 2027, every date") },
    { href: "/purnima-2027", label: l("পূর্ণিমা ২০২৭", "Purnima 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI, DRIK],
};
