// Blog: Dhunuchi naach and the dhak. Facts from Wikipedia "Durga Puja" and "Dhak (instrument)", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_DP = { title: "Wikipedia, Durga Puja", url: "https://en.wikipedia.org/wiki/Durga_Puja" };
const WIKI_DHAK = { title: "Wikipedia, Dhak (instrument)", url: "https://en.wikipedia.org/wiki/Dhak_(instrument)" };

export const DHUNUCHI_NAACH: Article = {
  slug: "dhunuchi-naach-dhak",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("ধুনুচি নাচ আর ঢাক: দুর্গাপুজোর ছন্দ", "Dhunuchi Naach and the Dhak: Durga Puja's Rhythm"),
  description: l(
    "ধুনুচি নাচ কী, ধুনুচিতে কী থাকে, ঢাক কী বাদ্য, ঢাকিরা কারা, আর ধুনো পোড়ানো আচার।",
    "What dhunuchi naach is, what goes in a dhunuchi, what the dhak is, who the dhakis are, and the dhuno pora ritual.",
  ),
  h1: l("ধুনুচি নাচ আর ঢাক: আরতির ছন্দ", "Dhunuchi naach and the dhak: the rhythm of the aarti"),
  lead: l(
    "ঢাকের বোল আর ধুনোর ধোঁয়া ছাড়া পুজো যেন জমে না। এই দুটো নিয়ে সহজ কথায় জেনে নাও।",
    "A Durga Puja feels incomplete without dhak beats and incense smoke. Here is a plain guide to both.",
  ),
  icon: "🥁",
  body: [
    { kind: "h2", text: l("ধুনুচি নাচ কী", "What is dhunuchi naach") },
    {
      kind: "p",
      text: l(
        "ধুনুচি নাচ হল ধুনুচি, অর্থাৎ ধূপদানি, হাতে নিয়ে নাচ, যা হয় ঢাক, ঢোল আর অন্য ঐতিহ্যবাহী বাদ্যের তালে।",
        "Dhunuchi naach is a dance performed with a dhunuchi, an incense burner, to the beat of dhak drums, dhols and other traditional drums.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("ধুনো পোড়ানো", "Dhuno pora") },
    {
      kind: "p",
      text: l(
        "কিছু বাড়ির পুজোয় ধুনো পোড়ানো নামে একটি আচার হয়: বিবাহিত মহিলারা মাথায় আর হাতে জ্বলন্ত ধুনুচি নেন। ধুনুচিতে থাকে ধূপ আর শুকনো নারকেল।",
        "At some home pujas there is a ritual called dhuno pora, in which married women carry burning dhunuchis on their heads and hands. The dhunuchis hold incense and dried coconuts.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("ঢাক কী", "What is the dhak") },
    {
      kind: "p",
      text: l(
        "ঢাক বাংলা ও অসমের একটি বড় চর্মবাদ্য, যার উৎপত্তি মধ্যযুগে। আকার প্রায় নলাকার থেকে পিপের মতো পর্যন্ত হয়।",
        "The dhak is a large drum from Bengal and Assam, of medieval origin. Its shape ranges from nearly cylindrical to barrel-like.",
      ),
      source: WIKI_DHAK,
    },
    {
      kind: "p",
      text: l(
        "এটি গলায় ঝুলিয়ে বা কোমরে বেঁধে বাজানো হয়, কখনও কোলে বা মাটিতে রেখেও। বাজানো হয় কাঠের কাঠি দিয়ে। যাঁরা বাজান, তাঁদের বলে ঢাকি।",
        "It is slung from the neck or tied at the waist, and sometimes set on the lap or ground. It is struck with wooden sticks. Those who play it are called dhakis.",
      ),
      source: WIKI_DHAK,
    },
    { kind: "h2", text: l("পুজোয় ঢাকের ভূমিকা", "The dhak in Durga Puja") },
    {
      kind: "p",
      text: l(
        "দুর্গাপুজো, কালীপুজো আর চড়কপুজোর মতো শাক্ত ও শৈব উৎসবে ঢাক বাজে। বাংলায় দুর্গাপুজোয় আরতির সঙ্গে ঢাকের বাজনা উৎসবের কেন্দ্রে, আর ধুনুচি নৃত্য এর ছন্দেই হয়।",
        "The dhak is used in Shakta and Shaiva festivals including Durga Puja, Kali Puja and Charak Puja. In Bengal its drumming, alongside the arati, is central to Durga Puja, and Dhunuchi Nritya is performed to its rhythms.",
      ),
      source: WIKI_DHAK,
    },
    {
      kind: "p",
      text: l(
        "ঢাকিরা সেই পেশাগুলোর একটি, যাদের বছরের বেশির ভাগ আয় দুর্গাপুজো থেকে আসে।",
        "Dhakis are among the professions that earn most of their annual income from Durga Puja.",
      ),
      source: WIKI_DP,
    },
    {
      kind: "tip",
      text: l(
        "ধুনুচি নাচে জ্বলন্ত কয়লা থাকে। হাতে নেওয়ার আগে সুতির কাপড় দিয়ে ধরো, আশপাশে ভিড় থাকলে সাবধান।",
        "A dhunuchi holds burning embers. Hold it with a cotton cloth and take care in a crowd.",
      ),
    },
  ],
  faq: [
    {
      q: l("ধুনুচি নাচ কী?", "What is dhunuchi naach?"),
      a: l("ধুনুচি হাতে নিয়ে ঢাকের তালে নাচ।", "A dance with an incense burner to the beat of the dhak."),
    },
    {
      q: l("ধুনুচিতে কী থাকে?", "What goes in a dhunuchi?"),
      a: l("উইকিপিডিয়া অনুযায়ী ধূপ আর শুকনো নারকেল।", "Per Wikipedia, incense and dried coconuts."),
    },
    {
      q: l("ঢাকি কাদের বলে?", "Who are dhakis?"),
      a: l("যাঁরা ঢাক বাজান। এঁদের বেশির ভাগই বাঙালি হিন্দু।", "Those who play the dhak, mostly Bengali Hindus."),
    },
    {
      q: l("ঢাক কী দিয়ে বাজানো হয়?", "What is the dhak played with?"),
      a: l("কাঠের কাঠি দিয়ে।", "With wooden sticks."),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
    { href: "/blog/sindoor-khela-bijoya-dashami", label: l("সিঁদুর খেলা", "Sindoor Khela") },
    { href: "/blog/kumartuli-idol-makers-kolkata", label: l("কুমোরটুলি", "Kumartuli") },
    { href: "/mahalaya-2027", label: l("মহালয়া ২০২৭", "Mahalaya 2027") },
  ],
  sources: [WIKI_DP, WIKI_DHAK],
};
