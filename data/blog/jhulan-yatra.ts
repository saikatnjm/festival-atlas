// Blog: Jhulan Yatra. Facts from Wikipedia "Jhulan Yatra", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Jhulan Yatra", url: "https://en.wikipedia.org/wiki/Jhulan_Yatra" };

export const JHULAN_YATRA: Article = {
  slug: "jhulan-yatra-radha-krishna",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("ঝুলন যাত্রা: রাধাকৃষ্ণের দোলনা উৎসব", "Jhulan Yatra: Radha Krishna's Swing Festival"),
  description: l(
    "ঝুলন যাত্রা কবে শুরু ও শেষ, রাধাকৃষ্ণের দোলনা, মায়াপুরের উৎসব আর হিন্দোল রাগ।",
    "When Jhulan Yatra starts and ends, the Radha Krishna swing, the Mayapur celebration and the hindola raga.",
  ),
  h1: l("ঝুলন যাত্রা", "Jhulan Yatra"),
  lead: l(
    "শ্রাবণের পূর্ণিমায় শেষ হয় রাধাকৃষ্ণের দোলনায় দোলানোর এই বৈষ্ণব উৎসব।",
    "A Vaishnava festival of swinging Radha and Krishna, ending on the full moon of Shravan.",
  ),
  icon: "🎠",
  body: [
    { kind: "h2", text: l("ঝুলন কী", "What is Jhulan") },
    {
      kind: "p",
      text: l(
        "ঝুলন পূর্ণিমা বা ঝুলন যাত্রা (হিন্দোল) কৃষ্ণ আর রাধার সম্মানে বৈষ্ণব উৎসব, শ্রাবণ পূর্ণিমায়। হিন্দোল সংস্কৃত শব্দ, অর্থ দোলনা।",
        "Jhulan Purnima, also Jhulan Yatra or Hindola, is a Vaishnava festival honouring Krishna and Radha, held on the full moon of Shravana. Hindola is a Sanskrit word meaning a swing.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কত দিন চলে", "How long it lasts") },
    {
      kind: "p",
      text: l(
        "মথুরা, বৃন্দাবন আর মায়াপুরে শ্রাবণের শুক্লপক্ষের তৃতীয়া থেকে পূর্ণিমার রাত পর্যন্ত, মোট তেরো দিন। ইসকন পালন করে পাঁচ দিন, ওড়িশায় প্রায় এক সপ্তাহ, আর পুষ্টিমার্গ সম্প্রদায়ে পনেরো দিন।",
        "Mathura, Vrindavan and Mayapur observe thirteen days, from the third day of the bright fortnight of Shravan to the full moon night. ISKCON observes five days, Odisha about a week, and the Pushtimarg sect fifteen days.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("সাজানো দোলনা", "The decorated swing") },
    {
      kind: "p",
      text: l(
        "বিগ্রহ সাজানো দোলনায় বসানো হয়, দোলনা কখনও সোনা-রুপোর হয়। মায়াপুরের ইসকনে ভক্তরা ফুলের দড়ি দিয়ে সাজানো দোলনায় বিগ্রহকে দোলান। ওড়িশায় জগন্নাথকে দোলানো হয়।",
        "Idols are placed on decorated swings, sometimes of gold and silver. At ISKCON Mayapur devotees swing the deities on an ornate swing with a flowery rope. In Odisha, Jagannath is swung.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("গান আর আচার", "Music and rituals") },
    {
      kind: "p",
      text: l(
        "ইসকনে রোজ বিগ্রহের পোশাক বদলানো, প্রসাদ বিতরণ, সংকীর্তন, ভোগ নিবেদন আর আরতি হয়। গান গাওয়া হয় হিন্দোল নামে বিশেষ রাগে।",
        "ISKCON practice includes changing the deities' clothes daily, distributing prasad, sankirtan, bhog offerings and aarti. Songs are sung in a special raga called hindola.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "মায়াপুর যেতে চাইলে ভিড় আর থাকার ব্যবস্থা আগে দেখে নিও; উৎসবের দিনক্ষণ পাঁজিতে মিলিয়ে নিও।",
        "If you plan to visit Mayapur, check crowds and stay in advance, and confirm festival dates in the panjika.",
      ),
    },
  ],
  faq: [
    {
      q: l("ঝুলন যাত্রা কবে শেষ হয়?", "When does Jhulan Yatra end?"),
      a: l("শ্রাবণ পূর্ণিমায়।", "On Shravana Purnima."),
    },
    {
      q: l("ঝুলন যাত্রা কত দিনের?", "How many days is Jhulan Yatra?"),
      a: l("মায়াপুরে তেরো দিন; ইসকনে পাঁচ দিন, পুষ্টিমার্গে পনেরো দিন।", "Thirteen days at Mayapur; five days in ISKCON, fifteen in Pushtimarg."),
    },
    {
      q: l("ঝুলন যাত্রায় কার পুজো হয়?", "Who is worshipped in Jhulan Yatra?"),
      a: l("রাধা আর কৃষ্ণের; ওড়িশায় জগন্নাথকে দোলানো হয়।", "Radha and Krishna; in Odisha Jagannath is swung."),
    },
    {
      q: l("রাখি পূর্ণিমা ২০২৭ কবে?", "When is Raksha Bandhan 2027?"),
      a: l("তারিখ আমাদের রাখীবন্ধন ২০২৭ পাতায় সূত্রসহ আছে।", "The date is on our Raksha Bandhan 2027 page, with sources."),
    },
  ],
  related: [
    { href: "/raksha-bandhan-2027", label: l("রাখীবন্ধন ২০২৭", "Raksha Bandhan 2027") },
    { href: "/janmashtami-2027", label: l("জন্মাষ্টমী ২০২৭", "Janmashtami 2027") },
    { href: "/blog/mayapur-iskcon-chandrodaya-temple", label: l("মায়াপুর ইসকন", "Mayapur ISKCON") },
    { href: "/blog/mahesh-rath-yatra-serampore", label: l("মাহেশের রথযাত্রা", "Mahesh Rath Yatra") },
  ],
  sources: [WIKI],
};
