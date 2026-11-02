// Blog: Thanthania Kalibari, Kolkata. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Thanthania Kalibari", url: "https://en.wikipedia.org/wiki/Thanthania_Kalibari" };

export const THANTHANIA_KALIBARI: Article = {
  slug: "thanthania-kalibari-kolkata",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("ঠনঠনিয়া কালীবাড়ি, কলকাতা: ইতিহাস", "Thanthania Kalibari, Kolkata: History"),
  description: l(
    "বিধান সরণির ঠনঠনিয়া কালীবাড়ি কবে গড়া, সিদ্ধেশ্বরী মায়ের কথা, প্রতিষ্ঠাতা উদয় নারায়ণ ব্রহ্মচারী আর অমাবস্যার পুজো।",
    "Thanthania Kalibari on Bidhan Sarani, Kolkata: founded 1703, Maa Siddheswari, its founder and the Amavasya pujas.",
  ),
  h1: l("ঠনঠনিয়া কালীবাড়ি, কলকাতা", "Thanthania Kalibari, Kolkata"),
  lead: l(
    "বিধান সরণির এই কালীবাড়িতে মা সিদ্ধেশ্বরী নামে পূজিত হন। মন্দির প্রায় তিনশো বছরের পুরোনো।",
    "On Bidhan Sarani, the goddess is worshipped here as Maa Siddheswari. The temple is about three centuries old.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("কোথায়, কোন দেবী", "Where and which goddess") },
    {
      kind: "p",
      text: l(
        "ঠনঠনিয়া কালীবাড়ি কলকাতার বিধান সরণিতে। দেবী কালী, স্থানীয়ভাবে মা সিদ্ধেশ্বরী নামে পূজিত।",
        "Thanthania Kalibari is on Bidhan Sarani, Kolkata. The deity is Kali, worshipped locally as Maa Siddheswari.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ইতিহাস", "History") },
    {
      kind: "p",
      text: l(
        "১৭০৩ সালে তান্ত্রিক উদয় নারায়ণ ব্রহ্মচারী শ্মশানভূমিতে মন্দির গড়েন, প্রথমে নিজের হাতে মাটির মূর্তি গড়েছিলেন।",
        "In 1703 the Tantrik Uday Narayan Brahmachari built the temple on a cremation ground, initially moulding the clay image himself.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "১৮০৬ সালে ব্যবসায়ী শঙ্কর ঘোষ মন্দিরটি নতুন করে প্রতিষ্ঠা করেন। তাঁর বংশধররা এখনও সেবায়েত।",
        "In 1806 the businessman Shankar Ghosh re-established it, and his descendants still serve as sevayets (caretakers).",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("উৎসব", "Festivals") },
    {
      kind: "p",
      text: l(
        "কালীপুজো, কৌশিকী অমাবস্যা ও ফলহারিণী অমাবস্যা এখানকার উৎসব। অন্য অমাবস্যায় আদিকালী, রতন্তী কালী ও সিদ্ধেশ্বরী রূপেও পুজো হয়।",
        "Kali Puja, Kaushiki Amavasya and Phalaharini Amavasya are celebrated, with other amavasya worship in forms such as Aadikali, Ratanti Kali and Siddheswari.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("রামকৃষ্ণের যোগ", "The Ramakrishna link") },
    {
      kind: "p",
      text: l(
        "বলা হয় শ্রীরামকৃষ্ণ এখানে এসে স্তবগান করেছিলেন। নিবন্ধ অনুযায়ী মন্দিরে আমিষ নিবেদনের শুরুও তাঁর নামে চলে।",
        "Ramakrishna is said to have visited and sung hymns here, and the article credits him with starting the temple's non-vegetarian offerings.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "অমাবস্যা আর কালীপুজোর দিনে ভিড় বেশি হয়। অমাবস্যার তারিখ আমাদের পাতায় দেখে নাও।",
        "Amavasya and Kali Puja days are busier. Check the Amavasya dates on our page.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "খোলার সময় আমরা কোনও সরকারি সূত্রে পাইনি, তাই যাওয়ার আগে মন্দিরে জেনে নাও।",
        "We found no official source for opening hours, so ask the temple before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("ঠনঠনিয়া কালীবাড়ি কোথায়", "Where is Thanthania Kalibari?"),
      a: l("কলকাতার বিধান সরণিতে।", "On Bidhan Sarani, Kolkata."),
    },
    {
      q: l("ঠনঠনিয়া কালীবাড়ির ইতিহাস", "Thanthania Kalibari history"),
      a: l("১৭০৩ সালে উদয় নারায়ণ ব্রহ্মচারী গড়েন, ১৮০৬ সালে শঙ্কর ঘোষ নতুন করে প্রতিষ্ঠা করেন।", "Built in 1703 by Uday Narayan Brahmachari and re-established in 1806 by Shankar Ghosh."),
    },
    {
      q: l("ঠনঠনিয়া কালীবাড়িতে কোন দেবী", "Which goddess is at Thanthania Kalibari?"),
      a: l("কালী, স্থানীয়ভাবে মা সিদ্ধেশ্বরী।", "Kali, known locally as Maa Siddheswari."),
    },
  ],
  related: [
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") },
    { href: "/amavasya-2027", label: l("অমাবস্যা ২০২৭", "Amavasya 2027") },
    { href: "/blog/kalighat-kali-temple-guide", label: l("কালীঘাট মন্দির", "Kalighat Temple") },
    { href: "/blog/dakshineswar-kali-temple-guide", label: l("দক্ষিণেশ্বর মন্দির", "Dakshineswar Temple") },
    { href: "/blog/hangseshwari-temple-bansberia", label: l("হংসেশ্বরী মন্দির", "Hangseshwari Temple") },
  ],
  sources: [WIKI],
};
