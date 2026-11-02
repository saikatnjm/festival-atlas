// Blog: Annaprashan / Mukhe Bhaat. Facts from Wikipedia "Annaprashana", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Annaprashana", url: "https://en.wikipedia.org/wiki/Annaprashana" };

export const ANNAPRASHAN: Article = {
  slug: "annaprashan-mukhe-bhaat",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("অন্নপ্রাশন বা মুখেভাত: বয়স, নিয়ম, রীতি", "Annaprashan (Mukhe Bhaat): Age and Customs"),
  description: l(
    "অন্নপ্রাশন কী, শিশুর কত মাসে হয়, মুখেভাতে কী খাওয়ানো হয়, কে খাওয়ায়, আর পাতা থেকে জিনিস বেছে নেওয়ার রীতি।",
    "What Annaprashan is, the usual age, what the baby eats, who feeds the child, and the custom of picking objects from a leaf.",
  ),
  h1: l("অন্নপ্রাশন: শিশুর প্রথম ভাত", "Annaprashan: a baby's first rice"),
  lead: l(
    "বাংলায় একে মুখেভাত বলে। দুধ ছাড়া শিশুর প্রথম খাবার এই অনুষ্ঠানেই মুখে ওঠে।",
    "In Bengal it is called Mukhe Bhaat. It marks the baby's first food other than milk.",
  ),
  icon: "🍚",
  body: [
    { kind: "h2", text: l("অন্নপ্রাশন কী", "What is Annaprashan") },
    {
      kind: "p",
      text: l(
        "অন্নপ্রাশন হিন্দু সংস্কারগুলোর একটি, যা শিশুর দুধ ছাড়া প্রথম খাবারের সূচনা করে। নামটির অর্থ রান্না করা ভাত খাওয়া।",
        "Annaprashana is a Hindu rite of passage (samskara) that marks an infant's first food other than milk. The name means eating cooked rice.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কত মাসে হয়", "At what age") },
    {
      kind: "p",
      text: l(
        "সাধারণত পুরোহিত শুভ দিন বেছে দেন, যখন শিশুর বয়স প্রায় ৫ থেকে ৮ মাস। বাঙালি আর তেলুগু বিশ্বাসে মেয়েদের জন্য বিজোড় মাস আর ছেলেদের জন্য জোড় মাস পছন্দ করা হয়।",
        "A priest usually picks an auspicious date when the child is about 5 to 8 months old. Bengali and Telugu belief favours odd months for girls and even months for boys.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কী খাওয়ানো হয়, কে খাওয়ায়", "What is served, and who feeds") },
    {
      kind: "p",
      text: l(
        "ভাতই মূল খাবার, প্রায়ই পায়েস হিসেবে, যাকে পবিত্র মনে করা হয়। বাঙালি পাতে আরও থাকে পাঁচ রকম ভাজা আর একটি মাছের পদ। মুখেভাতকে মামাভাতও বলে; সাধারণত মামা বা দাদু শিশুকে খাওয়ান।",
        "Rice is central, often served as kheer, a sweet rice pudding considered holy. Bengali menus add five kinds of fried food and a fish dish. Mukhebhat, also called mamabhat, means rice in the mouth, and the maternal uncle or maternal grandfather usually feeds the child.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("বাঙালি রীতি", "Bengali customs") },
    {
      kind: "p",
      text: l(
        "শিশু কলাপাতা বা রুপোর থালা থেকে একটি জিনিস বেছে নেয়: মাটি (সম্পত্তি), বই (বিদ্যা), কলম (জ্ঞান) বা মুদ্রা (ধন)। বিশ্বাস, এই পছন্দ শিশুর ভবিষ্যতের ইঙ্গিত দেয়। শাঁখ বাজে আর মহিলারা উলুধ্বনি দেন। বড়রা শিশুর মাথায় ধান ও দূর্বা দিয়ে আশীর্বাদ করেন।",
        "The child picks an object from a banana leaf or silver plate: soil (property), a book (learning), a pen (wisdom) or coins (wealth). The choice is believed to hint at the child's future. Conch shells are blown and women ululate. Elders place rice seeds (dhaan) and grass stalks (dubba) on the child's head.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "দিন ঠিক করতে পরিবারের পুরোহিতের পরামর্শ নাও। আমাদের কাছে ২০২৭ সালের অন্নপ্রাশনের কোনো দিনক্ষণের তালিকা নেই।",
        "Ask your family priest to fix the day. We do not have a 2027 Annaprashan date list.",
      ),
    },
  ],
  faq: [
    {
      q: l("অন্নপ্রাশন কত মাসে", "Annaprashan age in months"),
      a: l("প্রায় ৫ থেকে ৮ মাসে; বাঙালি বিশ্বাসে মেয়েদের বিজোড় আর ছেলেদের জোড় মাস।", "Around 5 to 8 months; Bengali belief favours odd months for girls and even months for boys."),
    },
    {
      q: l("মুখেভাত মানে কী", "What does Mukhe Bhaat mean"),
      a: l("মুখে ভাত, অর্থাৎ শিশুর মুখে প্রথম ভাত তুলে দেওয়া।", "Rice in the mouth: the baby's first rice."),
    },
    {
      q: l("অন্নপ্রাশনে কে খাওয়ায়", "Who feeds the baby at Annaprashan"),
      a: l("সাধারণত মামা বা দাদু।", "Usually the maternal uncle or maternal grandfather."),
    },
    {
      q: l("অন্নপ্রাশনে শিশু কী বেছে নেয়", "What does the baby pick at Annaprashan"),
      a: l("মাটি, বই, কলম বা মুদ্রা; এটি ভবিষ্যতের ইঙ্গিত বলে বিশ্বাস।", "Soil, a book, a pen or coins; believed to hint at the future."),
    },
  ],
  related: [
    { href: "/blog/bengali-hindu-wedding-rituals", label: l("বাঙালি বিয়ের রীতি", "Bengali wedding rituals") },
    { href: "/blog/upanayan-paite-sacred-thread", label: l("উপনয়ন", "Upanayan") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI],
};
