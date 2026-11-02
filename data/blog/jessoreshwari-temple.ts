// Blog: Jeshoreshwari Kali Temple, Satkhira. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Jeshoreshwari Kali Temple", url: "https://en.wikipedia.org/wiki/Jeshoreshwari_Kali_Temple" };

export const JESSORESHWARI_TEMPLE: Article = {
  slug: "jessoreshwari-kali-temple-satkhira",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("যশোরেশ্বরী কালী মন্দির, সাতক্ষীরা: শক্তিপীঠ", "Jeshoreshwari Kali Temple, Satkhira: Shakti Peetha"),
  description: l(
    "সাতক্ষীরার শ্যামনগরের যশোরেশ্বরী কালী মন্দির: কোথায়, শক্তিপীঠের কাহিনি, ইতিহাস, ১৯৭১ ও মোদীর ২০২১ সালের সফর।",
    "Jeshoreshwari Kali Temple in Shyamnagar, Satkhira: where it is, the Shakti Peetha tradition, history, 1971 and Modi's 2021 visit.",
  ),
  h1: l("যশোরেশ্বরী কালী মন্দির, সাতক্ষীরা", "Jeshoreshwari Kali Temple, Satkhira"),
  lead: l(
    "সাতক্ষীরার ঈশ্বরীপুর গ্রামের এই কালীমন্দির ৫১ শক্তিপীঠের একটি।",
    "This Kali temple in Ishwaripur village, Satkhira, is one of the 51 Shakta pithas.",
  ),
  icon: "🔱",
  body: [
    { kind: "h2", text: l("কোথায়", "Where it is") },
    {
      kind: "p",
      text: l(
        "মন্দিরটি সাতক্ষীরা জেলার শ্যামনগর উপজেলার ঈশ্বরীপুর গ্রামে। দেবী কালী, 'যশোরেশ্বরী' মানে যশোরের দেবী। পরিচালনা বাংলাদেশ সরকারের হাতে।",
        "The temple is in Ishwaripur village, Shyamnagar upazila, Satkhira district. The deity is Kali, and Jeshoreshwari means goddess of Jeshore. It is under the Government of Bangladesh.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("শক্তিপীঠ", "The Shakti Peetha") },
    {
      kind: "p",
      text: l(
        "এটি ৫১ শক্তিপীঠের একটি। কাহিনি অনুযায়ী এখানে সতীর হাতের তালু আর পায়ের তলা পড়েছিল।",
        "It is one of the 51 Shakta pithas. According to legend, Sati's palms and soles fell here.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ইতিহাস", "History") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া অনুযায়ী মন্দির ত্রয়োদশ শতকে প্রতিষ্ঠিত, ২০২১ সালে সংস্কার হয়। ১৯৭১ সালে আংশিক ভেঙে ফেলা হয়েছিল। স্থাপত্য রত্ন রীতির, তথ্যছকে স্রষ্টা হিসেবে অনারী নাম লেখা।",
        "Wikipedia says the temple was established in the 13th century and renovated in 2021. It was partially demolished in 1971. The architecture is Ratna style, and the infobox names Anaree as creator.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("মোদীর ২০২১ সালের সফর", "Modi's 2021 visit") },
    {
      kind: "p",
      text: l(
        "ভারতের প্রধানমন্ত্রী নরেন্দ্র মোদী ২০২১ সালের ২৭ মার্চ মন্দিরে পুজো দেন। তিনি একটি মুকুট দান করেন, যা ২০২৪ সালের অক্টোবরে চুরি যায়।",
        "Indian Prime Minister Narendra Modi prayed at the temple on 27 March 2021. He donated a crown, which was stolen in October 2024.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("উৎসব", "Festivals") },
    {
      kind: "p",
      text: l(
        "প্রধান উৎসব হিসেবে কালীপুজো আর দুর্গাপুজোর নাম আছে।",
        "Kali Puja and Durga Puja are listed as the main festivals.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "যাওয়ার আগে স্থানীয়ভাবে পথের খবর আর পুজোর দিনের ব্যবস্থা জেনে নাও।",
        "Before you go, check the route and the puja-day arrangements locally.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "দর্শনের সময় আর নিয়ম নিয়ে আমরা কোনও সরকারি সূত্র পাইনি।",
        "We found no official source for visiting hours or rules.",
      ),
    },
  ],
  faq: [
    {
      q: l("যশোরেশ্বরী কালী মন্দির কোথায়", "Where is Jeshoreshwari Kali temple?"),
      a: l("সাতক্ষীরা জেলার শ্যামনগর উপজেলার ঈশ্বরীপুর গ্রামে।", "In Ishwaripur village, Shyamnagar upazila, Satkhira district, Bangladesh."),
    },
    {
      q: l("যশোরেশ্বরী মন্দিরে সতীর কোন অঙ্গ পড়েছিল", "Which body part of Sati fell at Jeshoreshwari?"),
      a: l("কাহিনি অনুযায়ী হাতের তালু আর পায়ের তলা।", "By legend, the palms of the hands and soles of the feet."),
    },
    {
      q: l("মোদী কবে যশোরেশ্বরী মন্দিরে গিয়েছিলেন", "When did Modi visit Jeshoreshwari temple?"),
      a: l("২০২১ সালের ২৭ মার্চ। তিনি একটি মুকুট দান করেন, যা ২০২৪ সালের অক্টোবরে চুরি যায়।", "On 27 March 2021. He donated a crown that was stolen in October 2024."),
    },
  ],
  related: [
    { href: "/blog/shakti-peethas-west-bengal-bangladesh", label: l("শক্তিপীঠ: পশ্চিমবঙ্গ ও বাংলাদেশ", "Shakti Peethas in WB and Bangladesh") },
    { href: "/blog/shyama-puja-bangladesh", label: l("বাংলাদেশে শ্যামাপুজো", "Shyama Puja in Bangladesh") },
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") },
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/blog/chandranath-temple-sitakunda", label: l("চন্দ্রনাথ মন্দির", "Chandranath Temple") },
  ],
  sources: [WIKI],
};
