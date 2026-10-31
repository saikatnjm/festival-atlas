// Blog: UNESCO heritage listing of Durga Puja in Kolkata. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const UNESCO_NEWS = { title: "UNESCO, Durga Puja inscribed on the Representative List (15 Dec 2021)", url: "https://www.unesco.org/en/articles/durga-puja-inscribed-unesco-representative-list-intangible-cultural-heritage-humanity" };
const UNESCO_DECISION = { title: "UNESCO ICH, Decision 16.COM 8.B.15", url: "https://ich.unesco.org/en/Decisions/16.com/8.b.15" };
const WIKI_DP = { title: "Wikipedia, Durga Puja", url: "https://en.wikipedia.org/wiki/Durga_Puja" };
const DRIK = { title: "Drik Panchang, Durga Puja calendar 2027 (Kolkata)", url: "https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=1275004" };

export const DURGA_PUJA_UNESCO: Article = {
  slug: "durga-puja-unesco-heritage",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("দুর্গাপুজো আর ইউনেস্কো: কলকাতার হেরিটেজ স্বীকৃতি", "Durga Puja and UNESCO: Kolkata's Heritage Listing"),
  description: l(
    "২০২১-এ ইউনেস্কো কলকাতার দুর্গাপুজোকে মানবজাতির অধরা সাংস্কৃতিক ঐতিহ্যের তালিকায় রাখে। কী স্বীকৃতি, কোন অধিবেশনে, আর ২০২৭-এর তারিখ।",
    "In 2021 UNESCO inscribed Durga Puja in Kolkata on its Intangible Cultural Heritage list. What it recognises, which session, and the 2027 dates.",
  ),
  h1: l("ইউনেস্কোর তালিকায় কলকাতার দুর্গাপুজো", "Durga Puja in Kolkata on UNESCO's list"),
  lead: l(
    "২০২১ সালে কলকাতার দুর্গাপুজো ইউনেস্কোর তালিকায় ঠাঁই পায়। স্বীকৃতিটা ঠিক কী, আর ২০২৭-এর পুজো কবে।",
    "In 2021 Durga Puja in Kolkata entered UNESCO's list. What the recognition means, and when the 2027 puja falls.",
  ),
  icon: "🏆",
  body: [
    { kind: "h2", text: l("স্বীকৃতি কবে, কোথায়", "When and how it was inscribed") },
    {
      kind: "p",
      text: l(
        "ইউনেস্কোর ১৫ ডিসেম্বর ২০২১-এর বিবৃতি অনুযায়ী, কমিটি তার ষোড়শ অধিবেশনে (১৩ থেকে ১৮ ডিসেম্বর, অনলাইনে) \"কলকাতার দুর্গাপুজো\"কে মানবজাতির অধরা সাংস্কৃতিক ঐতিহ্যের প্রতিনিধিত্বমূলক তালিকায় অন্তর্ভুক্ত করে।",
        "According to UNESCO's 15 December 2021 release, the Committee inscribed \"Durga Puja in Kolkata\" on the Representative List of the Intangible Cultural Heritage of Humanity during its 16th session, held virtually from 13 to 18 December.",
      ),
      source: UNESCO_NEWS,
    },
    {
      kind: "p",
      text: l(
        "কমিটির সিদ্ধান্ত নম্বর ১৬.COM ৮.B.১৫। ভারতের জমা দেওয়া এই আবেদনের নম্বর ০০৭০৩, আর সিদ্ধান্তে স্পষ্ট লেখা, কলকাতার দুর্গাপুজো প্রতিনিধিত্বমূলক তালিকায় অন্তর্ভুক্ত করা হল।",
        "The decision is numbered 16.COM 8.B.15. The nomination, submitted by India, carries number 00703, and the decision text says the Committee decides to inscribe Durga Puja in Kolkata on the Representative List.",
      ),
      source: UNESCO_DECISION,
    },
    { kind: "h2", text: l("স্বীকৃতিতে কী ধরা হয়েছে", "What the listing recognises") },
    {
      kind: "p",
      text: l(
        "ইউনেস্কো দুর্গাপুজোকে দশ দিনের উৎসব বলেছে, যেখানে হিন্দু দেবী দুর্গার সমবেত আরাধনা হয়। সঙ্গে আছে মণ্ডপে সাজানো মাটির প্রতিমা, লোকসংগীত, খাবার, হস্তশিল্প আর নানা পরিবেশনা শিল্প।",
        "UNESCO describes Durga Puja as a ten-day celebration of the collective worship of the Hindu goddess Durga. It involves sculpted clay images displayed in community pavilions, along with folk music, cuisine, crafts and performing arts.",
      ),
      source: UNESCO_NEWS,
    },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া অনুযায়ী উৎসব শুরু হয় মহালয়ায়, যেদিন পূর্বপুরুষদের তর্পণ হয় আর দেবীর আগমনও ধরা হয়। ষষ্ঠীতে দেবীকে বরণ করা হয়, আর শেষ দিন বিজয়া দশমীতে সিঁদুরখেলা ও শোভাযাত্রার পর মাটির প্রতিমা বিসর্জন হয়।",
        "Wikipedia says the festival begins with Mahalaya, when ancestors are honoured and the goddess's arrival is marked. Shashthi is when devotees welcome the goddess, and on the last day, Vijaya Dashami, sindoor khela and a procession end with the immersion of clay idols.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("২০২৭-এর পুজো কবে", "When is Durga Puja 2027") },
    {
      kind: "p",
      text: l(
        "কলকাতার জন্য দ্রিক পঞ্চাঙ্গ অনুযায়ী ২০২৭ সালে ষষ্ঠী মঙ্গলবার ৫ অক্টোবর, সপ্তমী বুধবার ৬ অক্টোবর, দুর্গাষ্টমী বৃহস্পতিবার ৭ অক্টোবর, মহানবমী শনিবার ৯ অক্টোবর। বাংলার তালিকায় বিজয়া দশমী রবিবার ১০ অক্টোবর, দুর্গা বিসর্জনের সঙ্গে।",
        "For Kolkata, Drik Panchang lists Shashthi on Tuesday 5 October 2027, Saptami on Wednesday 6 October, Durga Ashtami on Thursday 7 October and Maha Navami on Saturday 9 October. The Bengal listing puts Vijaya Dashami on Sunday 10 October, paired with Durga Visarjan.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "অষ্টমীর তিথি পঞ্জিকায় দুই দিনে ছড়ানো থাকে, তাই সন্ধিপুজোর সঠিক দিন আর সময় তোমার পাড়ার পুজো কমিটি বা দ্রিক পঞ্চাঙ্গ দেখে মিলিয়ে নিও।",
        "Ashtami tithi can spread across two dates, so confirm the exact day and time of Sandhi Puja with your local puja committee or Drik Panchang.",
      ),
    },
  ],
  faq: [
    {
      q: l("দুর্গাপুজো কবে ইউনেস্কোর হেরিটেজ তালিকায় ঢোকে?", "When was Durga Puja added to the UNESCO heritage list?"),
      a: l("২০২১ সালের ডিসেম্বরে, কমিটির ষোড়শ অধিবেশনে (১৩-১৮ ডিসেম্বর)।", "In December 2021, at the Committee's 16th session (13 to 18 December)."),
    },
    {
      q: l("ইউনেস্কো দুর্গাপুজোকে কোন তালিকায় রেখেছে?", "Which UNESCO list is Durga Puja on?"),
      a: l("মানবজাতির অধরা সাংস্কৃতিক ঐতিহ্যের প্রতিনিধিত্বমূলক তালিকায়, নাম \"কলকাতার দুর্গাপুজো\"।", "The Representative List of the Intangible Cultural Heritage of Humanity, as \"Durga Puja in Kolkata\"."),
    },
    {
      q: l("ইউনেস্কো দুর্গাপুজো সম্পর্কে কী বলেছে?", "What does UNESCO say about Durga Puja?"),
      a: l("দশ দিনের উৎসব, দেবী দুর্গার সমবেত আরাধনা; সঙ্গে মাটির প্রতিমা, মণ্ডপ, লোকসংগীত, খাবার, হস্তশিল্প আর পরিবেশনা শিল্প।", "A ten-day celebration of the collective worship of Goddess Durga, with clay images, community pavilions, folk music, cuisine, crafts and performing arts."),
    },
    {
      q: l("২০২৭ সালে দুর্গাপুজো কবে?", "When is Durga Puja in 2027?"),
      a: l("দ্রিক পঞ্চাঙ্গ অনুযায়ী ষষ্ঠী ৫ অক্টোবর, মঙ্গলবার; বাংলার তালিকায় বিজয়া দশমী ১০ অক্টোবর, রবিবার।", "Per Drik Panchang, Shashthi is Tuesday 5 October; the Bengal listing has Vijaya Dashami on Sunday 10 October."),
    },
    {
      q: l("ইউনেস্কো কি বাংলার সব দুর্গাপুজোকে স্বীকৃতি দিয়েছে?", "Does the UNESCO listing cover all Durga Pujas in Bengal?"),
      a: l("তালিকার নাম \"কলকাতার দুর্গাপুজো\"। আমরা যে উৎসগুলো দেখেছি তাতে এর বাইরের সীমানা নিয়ে আলাদা কিছু পাইনি, তাই নামটাই ধরা ভালো।", "The listing is titled \"Durga Puja in Kolkata\". The sources we checked give no wider boundary, so go by that title."),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
    { href: "/greetings/mahalaya", label: l("মহালয়ার শুভেচ্ছা কার্ড", "Mahalaya greeting cards") },
    { href: "/puja/kolkata", label: l("কলকাতার পুজো", "Kolkata pujas") },
    { href: "/blog/belur-math-guide", label: l("বেলুড় মঠ গাইড", "Belur Math guide") },
    { href: "/amavasya-2027", label: l("অমাবস্যা ২০২৭", "Amavasya 2027") },
  ],
  sources: [UNESCO_NEWS, UNESCO_DECISION, WIKI_DP, DRIK],
};
