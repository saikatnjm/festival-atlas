// Blog: Bakreshwar and Kankalitala, Birbhum. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const BAK = { title: "Wikipedia, Bakreshwar", url: "https://en.wikipedia.org/wiki/Bakreshwar" };
const KAN = { title: "Wikipedia, Kankalitala", url: "https://en.wikipedia.org/wiki/Kankalitala" };

export const BAKRESHWAR_KANKALITALA: Article = {
  slug: "bakreshwar-kankalitala-birbhum",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("বক্রেশ্বর ও কঙ্কালীতলা: বীরভূমের শক্তিপীঠ", "Bakreshwar and Kankalitala, Birbhum"),
  description: l(
    "বীরভূমের বক্রেশ্বরের উষ্ণ প্রস্রবণ, শিবমন্দির ও শক্তিপীঠ, আর বোলপুরের কাছে কঙ্কালীতলা শক্তিপীঠ নিয়ে সহজ পরিচয়।",
    "Birbhum's Bakreshwar with its hot springs, Shiva temple and Shakti Peetha, and Kankalitala Shakti Peetha near Bolpur.",
  ),
  h1: l("বক্রেশ্বর ও কঙ্কালীতলা, বীরভূম", "Bakreshwar and Kankalitala, Birbhum"),
  lead: l(
    "বীরভূমে দুটি পরিচিত তীর্থ: উষ্ণ প্রস্রবণ আর শিবমন্দিরের বক্রেশ্বর, এবং সতীর কোমর পড়েছিল বলে ঐতিহ্যের কঙ্কালীতলা।",
    "Birbhum has two well-known pilgrim sites: Bakreshwar with hot springs and a Shiva temple, and Kankalitala, where tradition says Sati's waist fell.",
  ),
  icon: "♨️",
  body: [
    { kind: "h2", text: l("বক্রেশ্বর কোথায়", "Where Bakreshwar is") },
    {
      kind: "p",
      text: l(
        "বক্রেশ্বর বীরভূম জেলার সিউড়ি সদর মহকুমায় দুবরাজপুর ব্লকের একটি গ্রাম। কাছের রেলস্টেশন দুবরাজপুর (সিউড়ি)।",
        "Bakreshwar is a village in the Dubrajpur CD block, Suri Sadar subdivision, Birbhum district. The nearest railway station is Dubrajpur (Siuri).",
      ),
      source: BAK,
    },
    { kind: "h2", text: l("উষ্ণ প্রস্রবণ ও শিবমন্দির", "Hot springs and the Shiva temple") },
    {
      kind: "p",
      text: l(
        "বক্রেশ্বরে দশটি উষ্ণ প্রস্রবণ আছে। উইকিপিডিয়ায় তাপমাত্রা দেওয়া নেই, তাই আমরাও লিখছি না।",
        "Bakreshwar has ten hot springs. Wikipedia gives no temperatures, so we give none.",
      ),
      source: BAK,
    },
    {
      kind: "p",
      text: l(
        "শহরের নাম এসেছে এখানে পূজিত শিব বক্রেশ্বরের নাম থেকে। বক্রেশ্বর মন্দির চারটি মন্দিরের একটি।",
        "The name comes from the Shiva worshipped here. The Bakreswar Temple is one of four temples listed.",
      ),
      source: BAK,
    },
    {
      kind: "p",
      text: l(
        "কিংবদন্তি, ইন্দ্রের অপমানে মুনি সুব্রতর শরীরের আটটি অঙ্গ বেঁকে যায়, সেই থেকে তিনি অষ্টাবক্র। দীর্ঘ তপস্যার পর শিব এখানে তাঁকে আশীর্বাদ করেন।",
        "Legend says Indra insulted the sage Subrata Muni, leaving him with eight bent body parts. Shiva later blessed him here after long penance.",
      ),
      source: BAK,
    },
    { kind: "h2", text: l("বক্রেশ্বরের শক্তিপীঠ", "The Shakti Peetha at Bakreshwar") },
    {
      kind: "p",
      text: l(
        "বক্রেশ্বর ৫১ শাক্ত পীঠের একটি, এখানে আদ্যাশক্তির মন্দির আছে। কোন অঙ্গ পড়েছিল তা উইকিপিডিয়ার এই পাতায় বলা নেই। মন্দিরগুলোর তালিকায় মহিষাসুরমর্দিনী মন্দিরের নাম আছে, তবে পীঠের সঙ্গে তার যোগ বলা হয়নি।",
        "Bakreshwar is one of the 51 Shakta pithas, with a temple to Adi Shakti. The page does not name the body part. It lists a Mahisasur Mardini Temple but does not link it to the pitha.",
      ),
      source: BAK,
    },
    { kind: "h2", text: l("কঙ্কালীতলা", "Kankalitala") },
    {
      kind: "p",
      text: l(
        "কঙ্কালীতলা বীরভূমের বোলপুর শ্রীনিকেতন ব্লকের মন্দিরশহর, বোলপুর থেকে প্রায় ৯ কিলোমিটার দূরে, বোলপুর-লাভপুর রাস্তায়, কোপাই নদীর পাড়ে।",
        "Kankalitala is a temple town in the Bolpur Sriniketan block of Birbhum, about 9 km from Bolpur on the Bolpur-Labhpur road, on the bank of the Kopai River.",
      ),
      source: KAN,
    },
    {
      kind: "p",
      text: l(
        "কিংবদন্তি অনুযায়ী এখানে সতীর কোমর (বাংলায় কঙ্কাল) পড়েছিল। শক্তি দেবগর্ভা, ভৈরব রুরু। মন্দির চত্বরে কাঞ্চীশ্বর মন্দিরও আছে।",
        "By legend, Sati's waist (kankal in Bengali) fell here. The Shakti is Devgarbha and the Bhairava is Ruru. The complex also includes the Kanchishwar Temple.",
      ),
      source: KAN,
    },
    {
      kind: "tip",
      text: l(
        "দুটি জায়গা একই দিনে দেখতে চাইলে আগে থেকে যাতায়াতের সময় মিলিয়ে নাও।",
        "If you plan to see both in one day, check travel times beforehand.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "খোলার সময়, ভাড়া বা ট্রেনের সময় আমরা কোনও সরকারি সূত্রে পাইনি, আগে জেনে নাও।",
        "We found no official source for hours, fares or train times, so check before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("বক্রেশ্বর কোথায়", "Where is Bakreshwar?"),
      a: l("বীরভূমের দুবরাজপুর ব্লকে, কাছের স্টেশন দুবরাজপুর।", "In Dubrajpur block, Birbhum. The nearest station is Dubrajpur."),
    },
    {
      q: l("বক্রেশ্বরে কতগুলো উষ্ণ প্রস্রবণ আছে", "How many hot springs in Bakreshwar?"),
      a: l("দশটি।", "Ten."),
    },
    {
      q: l("কঙ্কালীতলা শক্তিপীঠ কোথায়", "Where is Kankalitala Shakti Peetha?"),
      a: l("বোলপুর থেকে প্রায় ৯ কিলোমিটার, কোপাই নদীর পাড়ে। শক্তি দেবগর্ভা, ভৈরব রুরু।", "About 9 km from Bolpur on the Kopai River. The Shakti is Devgarbha and the Bhairava is Ruru."),
    },
    {
      q: l("বক্রেশ্বর কঙ্কালীতলা ভ্রমণ", "Bakreshwar Kankalitala trip"),
      a: l("দুটিই বীরভূমে। তাপমাত্রা, সময়সূচি বা ভাড়ার সরকারি তথ্য আমাদের কাছে নেই, আগে মিলিয়ে নাও।", "Both are in Birbhum. We hold no official data on temperatures, timetables or fares, so confirm them first."),
    },
  ],
  related: [
    { href: "/blog/shakti-peethas-west-bengal-bangladesh", label: l("শক্তিপীঠ: পশ্চিমবঙ্গ ও বাংলাদেশ", "Shakti Peethas in WB and Bangladesh") },
    { href: "/blog/tarapith-kali-puja", label: l("তারাপীঠ", "Tarapith") },
    { href: "/blog/poush-mela-shantiniketan", label: l("পৌষ মেলা, শান্তিনিকেতন", "Poush Mela, Shantiniketan") },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/blog/bishnupur-terracotta-temples", label: l("বিষ্ণুপুরের মন্দির", "Bishnupur temples") },
  ],
  sources: [BAK, KAN],
};
