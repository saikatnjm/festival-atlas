// Blog: Chandranath Temple, Sitakunda. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Chandranath Temple", url: "https://en.wikipedia.org/wiki/Chandranath_Temple" };
const WIKI_LIST = { title: "Wikipedia, Shakti Peetha", url: "https://en.wikipedia.org/wiki/Shakti_Peetha" };

export const CHANDRANATH_TEMPLE: Article = {
  slug: "chandranath-temple-sitakunda",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("চন্দ্রনাথ মন্দির, সীতাকুণ্ড: শক্তিপীঠ ও ইতিহাস", "Chandranath Temple, Sitakunda: Shakti Peetha and History"),
  description: l(
    "সীতাকুণ্ডের চন্দ্রনাথ পাহাড়ের মন্দির: কোথায়, শক্তিপীঠের কাহিনি, ইতিহাস আর পাহাড়ের উপর অবস্থান।",
    "Chandranath Temple on Chandranath Hill, Sitakunda: where it is, the Shakti Peetha tradition, its history and the hilltop setting.",
  ),
  h1: l("চন্দ্রনাথ মন্দির, সীতাকুণ্ড", "Chandranath Temple, Sitakunda"),
  lead: l(
    "চট্টগ্রামের কাছে চন্দ্রনাথ পাহাড়ের চূড়ায় এই মন্দির। শাস্ত্র মতে এখানে সতীর ডান হাত পড়েছিল।",
    "The temple stands on top of Chandranath Hill near Chittagong. Hindu texts say Sati's right arm fell here.",
  ),
  icon: "⛰️",
  body: [
    { kind: "h2", text: l("কোথায়", "Where it is") },
    {
      kind: "p",
      text: l(
        "চন্দ্রনাথ মন্দির চট্টগ্রামের কাছে সীতাকুণ্ডের চন্দ্রনাথ পাহাড়ের মাথায়। উইকিপিডিয়ায় পাহাড়ের উচ্চতা ৩১০ মিটার (প্রায় ১০১৭ ফুট) লেখা আছে, তবে লেখাটির মূল অংশে ১০২০ ফুট বলে গুগল ম্যাপসের কথা উল্লেখ আছে।",
        "Chandranath Temple is on top of Chandranath Hill at Sitakunda, near Chittagong. Wikipedia's infobox gives the elevation as 310 m (1,017 ft), while the text gives 1,020 ft citing Google Maps.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("শক্তিপীঠ", "The Shakti Peetha") },
    {
      kind: "p",
      text: l(
        "হিন্দু শাস্ত্র অনুযায়ী এই মন্দির সেই জায়গা, যেখানে সতীর ডান হাত পড়েছিল। এখানকার শক্তি ভবানী।",
        "Hindu texts say the temple marks where Sati's right arm fell. The Shakti here is called Bhavani.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়ার শক্তিপীঠের তালিকায় সীতাকুণ্ডের এই পীঠ 'চট্টল ভবানী' নামে আছে, শক্তি চট্টল ভবানী দেবী, ভৈরব চন্দ্রশেখর, অঙ্গ হিসেবে উপরের দাঁত লেখা। তালিকা আর মন্দিরের পাতায় অঙ্গ আলাদা লেখা, তাই ঐতিহ্যে মতভেদ আছে ধরে নাও।",
        "Wikipedia's Shakti Peetha list has the Sitakunda site as Chattal Bhavani, with Shakti Chattal Bhawani Devi, Bhairava Chandrashekhar and the body part given as upper teeth. This differs from the temple page (right arm), so the tradition is not uniform.",
      ),
      source: WIKI_LIST,
    },
    { kind: "h2", text: l("ইতিহাস", "History") },
    {
      kind: "p",
      text: l(
        "মনে করা হয় মন্দিরটি একাদশ শতকের। রাজমালা অনুযায়ী প্রায় ৮০০ বছর আগে রাজা বিশ্বম্ভর সুর সমুদ্রপথে চন্দ্রনাথে পৌঁছনোর চেষ্টা করেছিলেন। নিগমকল্পতরু বলে, কবি জয়দেব কিছুদিন সেখানে ছিলেন।",
        "The temple is believed to date to the 11th century. The Rajmala says that about 800 years ago Raja Biswambhar Sur tried to reach Chandranath by sea. The Nigamkalpataru says the poet Jayadev lived there for a time.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "ত্রিপুরার রাজা ধন্য মাণিক্যের আমলে মন্দির বহু দান পায়। তিনি শিবের বিগ্রহ নিজের রাজ্যে নিয়ে যেতে চেয়েছিলেন, পারেননি।",
        "Under Dhanya Manikya, ruler of Tripura, the temple received many endowments. He tried to take the Shiva idol to his kingdom but failed.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("পাহাড়ে কী আছে", "On the hill") },
    {
      kind: "p",
      text: l(
        "চন্দ্রনাথ মন্দিরের নিচে বিরূপাক্ষ মন্দির, ঢাকা–চট্টগ্রাম রেললাইন থেকেও দেখা যায়।",
        "Birupaksha Temple lies below the Chandranath Temple and can be seen from the Dhaka-Chittagong railway.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "পাহাড়ি পথে হাঁটতে হয়, তাই আরামদায়ক জুতো পরো, জল সঙ্গে রাখো আর দিনের আলো থাকতে ওঠো।",
        "You walk up a hill path, so wear comfortable shoes, carry water and go up while there is daylight.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "শিবরাত্রির মেলা বা সিঁড়ির সংখ্যা নিয়ে আমরা কোনও সূত্র পাইনি, তাই যাওয়ার আগে স্থানীয়ভাবে জেনে নাও।",
        "We found no source for a Shivratri fair or the number of steps, so check locally before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("চন্দ্রনাথ মন্দির কোথায়", "Where is Chandranath temple?"),
      a: l("চট্টগ্রামের কাছে সীতাকুণ্ডের চন্দ্রনাথ পাহাড়ের চূড়ায়।", "On top of Chandranath Hill at Sitakunda, near Chittagong."),
    },
    {
      q: l("চন্দ্রনাথ মন্দির কি শক্তিপীঠ", "Is Chandranath temple a Shakti Peetha?"),
      a: l(
        "হ্যাঁ, শাস্ত্র মতে এখানে সতীর ডান হাত পড়েছিল, শক্তি ভবানী। তালিকাভেদে অঙ্গের নাম আলাদা পাওয়া যায়।",
        "Yes. Hindu texts say Sati's right arm fell here and the Shakti is Bhavani. Lists differ on the body part.",
      ),
    },
    {
      q: l("চন্দ্রনাথ মন্দির কত পুরোনো", "How old is Chandranath temple?"),
      a: l("মনে করা হয় একাদশ শতকের।", "It is believed to date to the 11th century."),
    },
  ],
  related: [
    { href: "/blog/shakti-peethas-west-bengal-bangladesh", label: l("শক্তিপীঠ: পশ্চিমবঙ্গ ও বাংলাদেশ", "Shakti Peethas in WB and Bangladesh") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/blog/shyama-puja-bangladesh", label: l("বাংলাদেশে শ্যামাপুজো", "Shyama Puja in Bangladesh") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI, WIKI_LIST],
};
