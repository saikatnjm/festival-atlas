// Blog: Lokenath Brahmachari and Barodi ashram. Facts from The Assam Tribune and Wikipedia (Rakher Upobash) fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const TRIBUNE = { title: "The Assam Tribune, Baba Lokenath remembered", url: "https://assamtribune.com/baba-lokenath-remembered" };
const WIKI_RAKHER = { title: "Wikipedia, Rakher Upobash", url: "https://en.wikipedia.org/wiki/Rakher_Upobash" };

export const LOKENATH_BABA_BARODI: Article = {
  slug: "lokenath-brahmachari-barodi-ashram",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("লোকনাথ ব্রহ্মচারী ও বারদী আশ্রম, নারায়ণগঞ্জ", "Lokenath Brahmachari and Barodi Ashram"),
  description: l(
    "যোগী লোকনাথ ব্রহ্মচারী কে ছিলেন, নারায়ণগঞ্জের বারদীতে তাঁর আশ্রম, আর কার্তিক মাসের রাখের উপবাসের কথা।",
    "Who Lokenath Brahmachari was, his ashram at Barodi in Narayanganj, and the Rakher Upobash fast held there in Kartik.",
  ),
  h1: l("লোকনাথ ব্রহ্মচারী ও বারদী আশ্রম", "Lokenath Brahmachari and the Barodi Ashram"),
  lead: l(
    "বারদী, নারায়ণগঞ্জের লোকনাথ ব্রহ্মচারী আশ্রমে কার্তিক মাসে রাখের উপবাসে হাজার হাজার ভক্ত জড়ো হন।",
    "At the Lokenath Brahmachari Ashram in Barodi, Narayanganj, thousands of devotees gather in Kartik for the Rakher Upobash.",
  ),
  icon: "🙏",
  body: [
    { kind: "h2", text: l("কে ছিলেন লোকনাথ ব্রহ্মচারী", "Who was Lokenath Brahmachari") },
    {
      kind: "p",
      text: l(
        "লোকনাথ ব্রহ্মচারী ছিলেন একজন হিন্দু যোগী ও সাধক, যিনি আঠারো ও উনিশ শতকের বাংলায় বাস করতেন। অসম ট্রিবিউনের লেখা অনুযায়ী তাঁর জন্ম ১৭৩০ সালের ৩১ আগস্ট পশ্চিমবঙ্গের বসিরহাটে।",
        "Lokenath Brahmachari was a Hindu yogi and mystic who lived in 18th and 19th century Bengal. The Assam Tribune says he was born on 31 August 1730 at Basirhat, West Bengal.",
      ),
      source: TRIBUNE,
    },
    {
      kind: "p",
      text: l(
        "একই প্রতিবেদন অনুযায়ী তিনি বাংলাদেশে ১৮৯০ সালের ২ জুন প্রয়াত হন। জন্ম ও মৃত্যুর তারিখ নিয়ে অন্য সূত্রে কিছু অমিল থাকতে পারে, তাই এখানে শুধু এই একটি সূত্রের কথা বলা হল।",
        "The same report says he died in Bangladesh on 2 June 1890. Other sources may differ on his birth and death dates, so only this one source is quoted here.",
      ),
      source: TRIBUNE,
    },
    { kind: "h2", text: l("বারদীতে ২৬ বছর", "Twenty-six years at Barodi") },
    {
      kind: "p",
      text: l(
        "অসম ট্রিবিউন লিখেছে, তিনি নারায়ণগঞ্জ জেলার বোরদী গ্রামে ২৬ বছর ছিলেন।",
        "The Assam Tribune says he lived for 26 years in the village of Boradi in Narayanganj district, Bangladesh.",
      ),
      source: TRIBUNE,
    },
    { kind: "h2", text: l("রাখের উপবাস", "Rakher Upobash") },
    {
      kind: "p",
      text: l(
        "রাখের উপবাস বাংলাদেশের একটি বার্ষিক হিন্দু ধর্মীয় উৎসব। বারদীর শ্রী শ্রী লোকনাথ ব্রহ্মচারী আশ্রমে কার্তিকের সন্ধ্যায় বিশেষ করে বড় জমায়েত হয়।",
        "Rakher Upobash is an annual Bengali Hindu observance in Bangladesh. Large gatherings form on Kartik evenings especially at the Shri Shri Lokenath Brahmachari Ashram in Barodi.",
      ),
      source: WIKI_RAKHER,
    },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া অনুযায়ী এটি পালিত হয় বাংলা কার্তিক মাসের শেষ পনেরো দিনের শনি ও মঙ্গলবারে। অংশগ্রহণকারীরা সকাল থেকে সন্ধ্যা পর্যন্ত উপবাস করেন, স্বাস্থ্য, সুরক্ষা বা পরিবারের মঙ্গলের মানত নিয়ে।",
        "Wikipedia says it is held on Saturdays and Tuesdays in the last fifteen days of the Bengali month of Kartik. Participants fast from morning until dusk as a vow for health, protection or family well-being.",
      ),
      source: WIKI_RAKHER,
    },
    { kind: "h2", text: l("প্রদীপ জ্বালানো", "Lighting the lamps") },
    {
      kind: "p",
      text: l(
        "সূর্যাস্তে ভক্তরা মন্দির চত্বরে সারি সারি ছোট প্রদীপ জ্বালান, ধূপ জ্বালান, প্রদীপের দিকে মুখ করে বসে জপ বা ধ্যান করেন।",
        "At sunset devotees light rows of small oil lamps in the temple grounds, burn incense and sit facing the lamps, chanting or meditating.",
      ),
      source: WIKI_RAKHER,
    },
    {
      kind: "tip",
      text: l(
        "উপবাসের দিন ভিড় থাকে। শিশু ও বয়স্কদের সঙ্গে নিয়ে গেলে আগেভাগে পৌঁছে নিরাপদ জায়গা বেছে নিও।",
        "It gets crowded on fast days. If you bring children or elders, arrive early and pick a safe spot.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "কার্তিক মাসের নির্দিষ্ট শনি-মঙ্গলবারগুলো প্রতি বছর বদলায়, তাই পঞ্জিকা বা আশ্রম কর্তৃপক্ষের কাছে দিন জেনে নাও।",
        "The exact Saturdays and Tuesdays change each year, so confirm the days with a panjika or the ashram authorities.",
      ),
    },
  ],
  faq: [
    {
      q: l("লোকনাথ বাবার আশ্রম কোথায়", "Where is Lokenath Baba's ashram?"),
      a: l(
        "নারায়ণগঞ্জ জেলার বারদীতে, শ্রী শ্রী লোকনাথ ব্রহ্মচারী আশ্রম।",
        "At Barodi in Narayanganj district: the Shri Shri Lokenath Brahmachari Ashram.",
      ),
    },
    {
      q: l("রাখের উপবাস কী", "What is Rakher Upobash?"),
      a: l(
        "কার্তিকের শেষ পনেরো দিনের শনি-মঙ্গলবারে সকাল থেকে সন্ধ্যা উপবাস, আর সন্ধ্যায় প্রদীপ জ্বালানো।",
        "A fast from morning to dusk on Saturdays and Tuesdays in the last fifteen days of Kartik, with lamps lit at sunset.",
      ),
    },
    {
      q: l("লোকনাথ ব্রহ্মচারী কবে জন্মেছিলেন ও মারা যান", "When was Lokenath Brahmachari born and when did he die?"),
      a: l(
        "অসম ট্রিবিউনের মতে জন্ম ১৭৩০ সালের ৩১ আগস্ট, মৃত্যু ১৮৯০ সালের ২ জুন।",
        "According to The Assam Tribune, he was born on 31 August 1730 and died on 2 June 1890.",
      ),
    },
    {
      q: l("লোকনাথ ব্রহ্মচারী বারদীতে কত বছর ছিলেন", "How long did Lokenath Brahmachari live at Barodi?"),
      a: l("অসম ট্রিবিউন অনুযায়ী ২৬ বছর।", "Twenty-six years, according to The Assam Tribune."),
    },
  ],
  related: [
    { href: "/blog/langalbandh-ashtami-snan-narayanganj", label: l("লাঙ্গলবন্দের অষ্টমী স্নান", "Langalbandh Ashtami Snan") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/rash-purnima-2027", label: l("রাস পূর্ণিমা ২০২৭", "Rash Purnima 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [TRIBUNE, WIKI_RAKHER],
};
