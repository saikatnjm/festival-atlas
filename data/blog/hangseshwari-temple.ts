// Blog: Hangseshwari Temple, Bansberia. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Hangseshwari Temple", url: "https://en.wikipedia.org/wiki/Hangseshwari_Temple" };

export const HANGSESHWARI_TEMPLE: Article = {
  slug: "hangseshwari-temple-bansberia",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("হংসেশ্বরী মন্দির, বাঁশবেড়িয়া: তেরো চূড়ার কালী", "Hangseshwari Temple, Bansberia: History"),
  description: l(
    "বাঁশবেড়িয়ার হংসেশ্বরী মন্দির কে গড়েছিলেন, কবে শেষ হয়, তেরো রত্নের স্থাপত্য আর কালীপুজো নিয়ে সহজ পরিচয়।",
    "Hangseshwari Temple in Bansberia: who began it, when it was finished, its 13 lotus-bud towers and Kali Puja.",
  ),
  h1: l("হংসেশ্বরী মন্দির, বাঁশবেড়িয়া", "Hangseshwari Temple, Bansberia"),
  lead: l(
    "হুগলির বাঁশবেড়িয়ায় তেরোটি পদ্মকোরকের মতো চূড়ার এই মন্দির দক্ষিণা কালীর এক রূপের।",
    "In Bansberia, Hooghly, this temple with thirteen lotus-bud towers is dedicated to a form of Dakshina Kali.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("মন্দির ও দেবী", "The temple and the goddess") },
    {
      kind: "p",
      text: l(
        "হংসেশ্বরী মন্দির পশ্চিমবঙ্গের হুগলি জেলার বাঁশবেড়িয়ায়, বাংলার রত্ন-রীতির মন্দির। দেবী হংসেশ্বরী, আদ্যাশক্তি জগজ্জননী দক্ষিণা কালীর এক রূপ। মন্দিরের নাম রাজা নৃসিংহদেব রায়ের মা রানি হংসেশ্বরীর নামে।",
        "The Hangseshwari Temple is in Bansberia, Hooghly district, a ratna-style temple in Bengal temple architecture. The deity is Hangseshwari, a form of Adi Parashakti Jagatjanani Dakshina Kali. It is named after Rani Hanseswari, mother of Raja Nrisingha Deb Roy.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কে গড়লেন, কবে", "Who built it and when") },
    {
      kind: "p",
      text: l(
        "রাজা নৃসিংহদেব রায় মহাশয় ১৭৯৯ সালের ডিসেম্বরে ভিত্তিপ্রস্তর বসান। ১৮০২ সালে দোতলা শেষ হলে তিনি মারা যান। তাঁর বিধবা রানি শঙ্করী ১৮১৪ সালে মন্দির সম্পূর্ণ করেন।",
        "Raja Nrisinhadeb Roy Mahasay laid the foundation stone in December 1799 but died after the second storey was completed in 1802. His widow Rani Sankari finished the temple in 1814.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("স্থাপত্য", "Architecture") },
    {
      kind: "p",
      text: l(
        "মন্দিরে তেরোটি মিনার বা রত্ন আছে, প্রতিটি ফোটা পদ্মকুঁড়ির মতো গড়া। সর্বোচ্চ উচ্চতা প্রায় ৭০ মিটার (২৩০ ফুট) বলে লেখা আছে।",
        "The temple has 13 minars or ratnas, each built like a blooming lotus bud. Its maximum height is given as 70 m (230 ft).",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "নকশাকে তান্ত্রিক ষট্চক্রভেদের প্রতিরূপ বলা হয়, পাঁচতলা কাঠামোর সঙ্গে মানবদেহের বিভিন্ন অংশের যোগ ধরা হয়।",
        "The design is described as a representation of the Tantric Satchakrabhed, with the five-storey structure linked to parts of the human body.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("আশপাশে ও উৎসব", "Nearby and festival") },
    {
      kind: "p",
      text: l(
        "চত্বরে অনন্ত বাসুদেব মন্দির আছে, আর কাছেই ১৭৮৮ সালে গড়া স্বনভাব কালী মন্দির। প্রধান উৎসব কালীপুজো।",
        "The Ananta Basudeba temple is in the complex, and the Swanbhaba Kali temple, built in 1788, is close by. The main festival is Kali Puja.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "কালীপুজোর সময় ভিড় হয়, তাই হাতে সময় নিয়ে যাও।",
        "It gets crowded around Kali Puja, so allow extra time.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "দর্শনের সময় আর যাতায়াতের তথ্য আমরা কোনও সরকারি সূত্রে পাইনি, আগে জেনে নাও।",
        "We found no official source for visiting hours or transport, so check before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("হংসেশ্বরী মন্দির কোথায়", "Where is Hangseshwari temple?"),
      a: l("হুগলি জেলার বাঁশবেড়িয়ায়।", "In Bansberia, Hooghly district, West Bengal."),
    },
    {
      q: l("হংসেশ্বরী মন্দির কে তৈরি করেন", "Who built Hangseshwari temple?"),
      a: l("রাজা নৃসিংহদেব রায় ১৭৯৯ সালে শুরু করেন, রানি শঙ্করী ১৮১৪ সালে শেষ করেন।", "Raja Nrisinhadeb Roy began it in 1799 and Rani Sankari finished it in 1814."),
    },
    {
      q: l("হংসেশ্বরী মন্দিরের স্থাপত্য", "Hangseshwari temple architecture"),
      a: l("তেরোটি পদ্মকুঁড়ির মতো রত্ন বা মিনার, পাঁচতলা কাঠামো, উচ্চতা প্রায় ৭০ মিটার।", "Thirteen lotus-bud ratnas on a five-storey structure, about 70 m tall."),
    },
  ],
  related: [
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") },
    { href: "/blog/tarapith-kali-puja", label: l("তারাপীঠ", "Tarapith") },
    { href: "/blog/thanthania-kalibari-kolkata", label: l("ঠনঠনিয়া কালীবাড়ি", "Thanthania Kalibari") },
    { href: "/blog/tarakeswar-temple-shiva", label: l("তারকেশ্বর মন্দির", "Tarakeswar Temple") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI],
};
