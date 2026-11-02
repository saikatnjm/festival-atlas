// Blog: Tarakeswar Temple, Hooghly. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Tarakeswar", url: "https://en.wikipedia.org/wiki/Tarakeswar" };

export const TARAKESWAR_TEMPLE: Article = {
  slug: "tarakeswar-temple-shiva",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("তারকেশ্বর মন্দির: শ্রাবণ মাসের তীর্থ", "Tarakeswar Temple: Shravan Pilgrimage"),
  description: l(
    "হুগলির তারকেশ্বর শিবমন্দির কোথায়, কবে গড়া বলে ধরা হয়, শ্রাবণ মাসের তারকেশ্বর যাত্রা আর শিবরাত্রির সঙ্গে যোগ।",
    "Tarakeswar Shiva temple in Hooghly: where it is, when it was built, the Shravan Tarakeswar Yatra and how to plan around Shivratri.",
  ),
  h1: l("তারকেশ্বর মন্দির, হুগলি", "Tarakeswar Temple, Hooghly"),
  lead: l(
    "হুগলির তারকেশ্বরে স্বয়ম্ভু শিবলিঙ্গের মন্দির। শ্রাবণ মাসে লক্ষ লক্ষ ভক্ত জল ঢালতে আসেন।",
    "Tarakeswar in Hooghly has a temple of a self-manifested Shiva linga. In Shravan, huge crowds of devotees come to offer water.",
  ),
  icon: "🔱",
  body: [
    { kind: "h2", text: l("কোথায়, কী", "Where and what") },
    {
      kind: "p",
      text: l(
        "তারকেশ্বর পশ্চিমবঙ্গের হুগলি জেলার শহর, কলকাতা থেকে প্রায় ৫৮ কিলোমিটার দূরে। মন্দিরে শিবের তারকেশ্বর রূপ, স্বয়ম্ভু লিঙ্গ। কেউ কেউ এটিকে জ্যোতির্লিঙ্গ বলে দাবি করেন।",
        "Tarakeswar is a town in Hooghly district, West Bengal, about 58 km from Kolkata. The temple houses a self-manifested (swayambhu) linga of Shiva in his Tarakeswara form. It is claimed by some to be a Jyotirlinga shrine.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("মন্দিরের ইতিহাস", "History of the temple") },
    {
      kind: "p",
      text: l(
        "বিশ্বাস, ১৭২৯ সালে রাজা ভারামল্ল রাও মন্দিরটি গড়েন। উইকিপিডিয়া এটাও বলে যে বিষ্ণুপুরের মল্ল রাজা মন্দির তৈরি করান, তবে সেখানে সাল দেওয়া নেই।",
        "The temple is believed to have been built in 1729 by Raja Bharamalla Rao. The article also says the Malla Raja of Bishnupur built it, without giving a date.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("শ্রাবণ মাসের তারকেশ্বর যাত্রা", "The Shravan Tarakeswar Yatra") },
    {
      kind: "p",
      text: l(
        "প্রতি বছর জুলাই-আগস্টে, শ্রাবণ মাসের আগে, তারকেশ্বর যাত্রা হয়। প্রায় এক কোটি ভক্ত আসেন বলে লেখা আছে। তাঁরা বৈদ্যবাটীর নিমাই তীর্থ ঘাট থেকে, প্রায় ৩৯ কিলোমিটার দূর, গঙ্গাজল বয়ে আনেন।",
        "Each year in July and August, around the eve of Shravan, the Tarakeswar Yatra draws nearly 10 million devotees according to the article. They carry Ganga water from Nimai Tirtha Ghat in Baidyabati, about 39 km away.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "সারা বছরই ভক্তরা আসেন, বিশেষ করে সোমবার।",
        "Pilgrims visit throughout the year, especially on Mondays.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("শিবরাত্রিতে তারকেশ্বর", "Tarakeswar and Shivratri") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়ার নিবন্ধে শিবরাত্রির কথা নেই, তাই মন্দিরের শিবরাত্রির অনুষ্ঠান নিয়ে আমরা কিছু লিখছি না। শিবরাত্রির তারিখ আমাদের আলাদা পাতায় দেখো।",
        "The Wikipedia article does not mention Shivratri, so we say nothing about the temple's Shivratri programme. Check our own page for the Shivratri date.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "শ্রাবণের সোমবারে প্রচণ্ড ভিড় হয়। হাতে অনেকটা সময় আর জল নিয়ে যাও, আর ভিড়ে ছোটদের হাত ধরে রেখো।",
        "Shravan Mondays are very crowded. Carry water, allow plenty of time and keep children close.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "দর্শনের সময়, ট্রেন বা বাসের সময় আমরা কোনও সরকারি সূত্রে পাইনি। যাওয়ার আগে রেল বা মন্দির কর্তৃপক্ষের থেকে জেনে নাও।",
        "We found no official source for visiting hours or train and bus times. Check with the railways or the temple before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("তারকেশ্বর মন্দির কীভাবে যাব", "How to reach Tarakeswar temple?"),
      a: l(
        "তারকেশ্বর হুগলি জেলায়, কলকাতা থেকে প্রায় ৫৮ কিলোমিটার। সময়সূচির জন্য রেল বা মন্দিরের অফিসিয়াল তথ্য দেখে নাও, আমরা নির্দিষ্ট সময় দিইনি।",
        "Tarakeswar is in Hooghly district, about 58 km from Kolkata. We list no timetable, so check the railways or the temple's official information.",
      ),
    },
    {
      q: l("তারকেশ্বর মন্দিরের ইতিহাস", "Tarakeswar temple history"),
      a: l("বিশ্বাস, ১৭২৯ সালে রাজা ভারামল্ল রাও এটি গড়েন। দেবতা স্বয়ম্ভু তারকেশ্বর শিব।", "It is believed to have been built in 1729 by Raja Bharamalla Rao. The deity is the swayambhu Tarakeswara Shiva."),
    },
    {
      q: l("তারকেশ্বর যাত্রা কবে হয়", "When is the Tarakeswar Yatra?"),
      a: l("প্রতি বছর জুলাই-আগস্টে শ্রাবণ মাসের আগে। ভক্তরা বৈদ্যবাটী থেকে গঙ্গাজল আনেন।", "Each year in July-August around the eve of Shravan. Devotees carry Ganga water from Baidyabati."),
    },
  ],
  related: [
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/masik-shivratri-2027", label: l("মাসিক শিবরাত্রি ২০২৭", "Masik Shivratri 2027") },
    { href: "/blog/bishnupur-terracotta-temples", label: l("বিষ্ণুপুরের মন্দির", "Bishnupur temples") },
    { href: "/blog/hangseshwari-temple-bansberia", label: l("হংসেশ্বরী মন্দির", "Hangseshwari Temple") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI],
};
