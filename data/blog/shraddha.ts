// Blog: Shraddha. Facts from Wikipedia "Pitru Paksha" and "Shraddha", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Pitru Paksha", url: "https://en.wikipedia.org/wiki/Pitru_Paksha" };
const WIKI_S = { title: "Wikipedia, Shraddha", url: "https://en.wikipedia.org/wiki/Shraddha" };

export const SHRADDHA: Article = {
  slug: "shraddha-rituals-bengali",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("শ্রাদ্ধ, পিতৃপক্ষ আর মহালয়ার তর্পণ", "Shraddha, Pitru Paksha and Mahalaya Tarpan"),
  description: l(
    "শ্রাদ্ধ কী, পিতৃপক্ষ কখন, মহালয়ায় তর্পণ আর পিণ্ডদান কেন, কে করেন আর কী নিবেদন করা হয়।",
    "What Shraddha is, when Pitru Paksha falls, why tarpan and pinda are offered on Mahalaya, who performs it and what is offered.",
  ),
  h1: l("শ্রাদ্ধ আর পিতৃপক্ষ: পূর্বপুরুষদের স্মরণ", "Shraddha and Pitru Paksha: remembering ancestors"),
  lead: l(
    "শ্রাদ্ধ পূর্বপুরুষদের উদ্দেশে করা হিন্দু রীতি। মহালয়া এই পক্ষের সবচেয়ে গুরুত্বপূর্ণ দিন।",
    "Shraddha is a Hindu ritual for deceased ancestors. Mahalaya is the most important day of the fortnight.",
  ),
  icon: "🙏",
  body: [
    { kind: "h2", text: l("শ্রাদ্ধ কী", "What is Shraddha") },
    {
      kind: "p",
      text: l(
        "শ্রাদ্ধ মৃত পূর্বপুরুষদের উদ্দেশে পালিত একটি হিন্দু রীতি।",
        "Shraddha is a Hindu ritual performed for one's deceased ancestors.",
      ),
      source: WIKI_S,
    },
    { kind: "h2", text: l("পিতৃপক্ষ কখন", "When is Pitru Paksha") },
    {
      kind: "p",
      text: l(
        "পিতৃপক্ষ হিন্দু পঞ্জিকায় ১৬ চান্দ্র দিনের সময়কাল। দক্ষিণ ও পশ্চিম ভারতে এটি ভাদ্রপদের দ্বিতীয় পক্ষে, গণেশ উৎসবের ঠিক পরে। উত্তর ভারত ও নেপালে এটি আশ্বিনের কৃষ্ণপক্ষেও পড়তে পারে। শ্রাদ্ধের পাশাপাশি তর্পণ, অর্থাৎ পূর্বপুরুষদের উদ্দেশে পবিত্র জল নিবেদন, এই সময়ের একটি মৃত্যু-সংক্রান্ত রীতি।",
        "Pitru Paksha is a 16-lunar-day span in the Hindu calendar. In southern and western India it falls in the second fortnight of Bhadrapada, right after Ganesh Utsav; in North India and Nepal it may instead fall in the waning fortnight of Ashvina. Tarpana, an offering of holy water to ancestors, is one of the death rites performed in this period, alongside Shraddha.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("মহালয়া", "Mahalaya") },
    {
      kind: "p",
      text: l(
        "মহালয়া অমাবস্যা এই পক্ষের শেষ অমাবস্যা দিন, আর একে পিতৃপক্ষের সবচেয়ে গুরুত্বপূর্ণ দিন বলা হয়। এটি সব পূর্বপুরুষের জন্য, তাঁরা যখনই মারা যান না কেন, আর যাঁরা শ্রাদ্ধ করতে পারেননি তাঁদের জন্যও এই দিন। বাংলায় মহালয়া সাধারণত দুর্গাপুজোর সূচনা। বাঙালিরা ভোরে উঠে দেবীমাহাত্ম্যের স্তোত্র শোনেন, আর বাড়ি ও পুজো মণ্ডপে পূর্বপুরুষদের উদ্দেশে নিবেদন করা হয়।",
        "Mahalaya Amavasya is the no-moon day that closes the period, called the most important day of Pitri Paksha. It is intended for all ancestors regardless of when they died, and is the day for anyone who missed a Shraddha to perform it. In Bengal, Mahalaya usually marks the start of Durga Puja. Bengalis traditionally rise early to hear hymns from the Devi Mahatmya, and ancestral offerings are made at homes and puja pandals.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("পিণ্ড, খাবার আর কে করেন", "Pinda, food and who performs it") },
    {
      kind: "p",
      text: l(
        "পিণ্ডদানে ঘি আর কালো তিল মেশানো চাল ও যবের আটার গোলা, সঙ্গে জল নিবেদন করা হয়। খাবার রান্না হয় রুপো বা তামার পাত্রে আর পরিবেশন হয় কলাপাতা বা পাতার বাটিতে; প্রয়োজনীয় পদের মধ্যে ক্ষীর, লাপসি, ভাত, ডাল, গুয়ার শিম ও হলুদ লাউ। সাধারণত বড় ছেলে বা পিতৃকুলের অন্য কোনো পুরুষ আত্মীয় এটি করেন, আগের তিন প্রজন্ম পর্যন্ত।",
        "Pinda dana offers balls of rice and barley flour mixed with ghee and black sesame, along with water. Offerings are cooked in silver or copper vessels and served on banana leaves or leaf cups, and required items include kheer, lapsi, rice, dal, guar beans and yellow gourd. It is usually performed by the eldest son or another male relative on the paternal side, covering up to three preceding generations.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "সর্বপিতৃ অমাবস্যায় করা শ্রাদ্ধ গয়ায় করা শ্রাদ্ধের মতোই ফলদায়ী বলে ধরা হয়। গয়ায় ফল্গু নদীর তীরে প্রতি বছর পিতৃপক্ষ মেলা বসে, যেখানে তীর্থযাত্রীরা পিণ্ড দেন।",
        "A Shraddha on Sarvapitri Amavasya is considered as fruitful as one done in Gaya. Gaya hosts an annual Pitri Paksha Mela on the Falgu River, where pilgrims offer pinda.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "তর্পণ আর শ্রাদ্ধের নিয়ম পরিবার ভেদে আলাদা, তাই পুরোহিত বা বাড়ির বড়দের কাছে জেনে নাও। মহালয়া ২০২৭ আর পিতৃপক্ষ ২০২৭ পাতায় তারিখ দেখো।",
        "Tarpan and Shraddha customs vary by family, so ask a priest or elders. See dates on our Mahalaya 2027 and Pitru Paksha 2027 pages.",
      ),
    },
  ],
  faq: [
    {
      q: l("শ্রাদ্ধ কী", "What is Shraddha"),
      a: l("মৃত পূর্বপুরুষদের উদ্দেশে পালিত হিন্দু রীতি।", "A Hindu ritual performed for deceased ancestors."),
    },
    {
      q: l("পিতৃপক্ষ কত দিন", "How long is Pitru Paksha"),
      a: l("১৬ চান্দ্র দিন।", "16 lunar days."),
    },
    {
      q: l("মহালয়ায় তর্পণ কেন", "Why tarpan on Mahalaya"),
      a: l("মহালয়া সব পূর্বপুরুষের দিন, আর যাঁরা শ্রাদ্ধ করতে পারেননি তাঁদের জন্যও। তর্পণ মানে পূর্বপুরুষদের উদ্দেশে জল নিবেদন।", "Mahalaya is meant for all ancestors, and for anyone who missed a Shraddha. Tarpan is an offering of water to ancestors."),
    },
    {
      q: l("শ্রাদ্ধ কে করেন", "Who performs Shraddha"),
      a: l("সাধারণত বড় ছেলে বা পিতৃকুলের অন্য পুরুষ আত্মীয়।", "Usually the eldest son or another male relative on the paternal side."),
    },
  ],
  related: [
    { href: "/mahalaya-2027", label: l("মহালয়া ২০২৭", "Mahalaya 2027") },
    { href: "/pitru-paksha-2027", label: l("পিতৃপক্ষ ২০২৭", "Pitru Paksha 2027") },
    { href: "/amavasya-2027", label: l("অমাবস্যা ২০২৭", "Amavasya 2027") },
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
  ],
  sources: [WIKI, WIKI_S],
};
