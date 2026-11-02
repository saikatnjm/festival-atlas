// Blog: Puthia Temple Complex, Rajshahi. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Puthia Temple Complex", url: "https://en.wikipedia.org/wiki/Puthia_Temple_Complex" };

export const PUTHIA_TEMPLES: Article = {
  slug: "puthia-temple-complex-rajshahi",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("পুঠিয়া মন্দির চত্বর, রাজশাহী: মন্দিরের তালিকা", "Puthia Temple Complex, Rajshahi: The Temples"),
  description: l(
    "রাজশাহীর পুঠিয়া মন্দির চত্বর: কোথায়, কারা গড়েছিলেন, গোবিন্দ ও শিব মন্দির, টেরাকোটার কাজ আর অন্য মন্দিরগুলো।",
    "Puthia Temple Complex in Rajshahi: where it is, who built it, the Govinda and Shiva temples, terracotta work and the other shrines.",
  ),
  h1: l("পুঠিয়া মন্দির চত্বর, রাজশাহী", "Puthia Temple Complex, Rajshahi"),
  lead: l(
    "পুঠিয়া রাজ পরিবারের গড়া এই চত্বরে বাংলাদেশের সবচেয়ে বেশি প্রাচীন মন্দির, টেরাকোটার কাজে ভরা।",
    "Built by the Puthia Raj family, this complex has the largest number of historic temples in Bangladesh, rich in terracotta.",
  ),
  icon: "🏛️",
  body: [
    { kind: "h2", text: l("কোথায়, কারা গড়েছিলেন", "Where, and who built it") },
    {
      kind: "p",
      text: l(
        "চত্বরটি রাজশাহী জেলার পুঠিয়া উপজেলায়, রাজশাহী শহরের প্রায় ২৩ কিলোমিটার পূর্বে। উইকিপিডিয়া অনুযায়ী বাংলাদেশে ঐতিহাসিক মন্দিরের সংখ্যা এখানে সবচেয়ে বেশি। মন্দিরগুলো গড়েছিলেন পুঠিয়া রাজ পরিবারের হিন্দু জমিদার রাজারা।",
        "The complex is in Puthia Upazila, Rajshahi District, about 23 km east of Rajshahi city. Wikipedia says it has the largest number of historic temples in Bangladesh. They were built by the Hindu zamindar rajas of the Puthia Raj family.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "মন্দিরগুলো শ্যাম সাগর নামের পুকুরের চারপাশে, পুরো চত্বর ঘিরে শিব সাগর নামে একটি পরিখা। টেরাকোটায় গড়া, জোড়বাংলা রীতির সঙ্গে অন্য প্রভাব মেশানো। রাজবাড়ি আর দোলমঞ্চও চত্বরের অংশ।",
        "The temples surround the Shyam Sagar lake, and a moat called Shiv Sagar encloses the complex. They are built in terracotta, mixing the Jor-bangla style with other influences. The Rajbari palace and Dol Mancha are part of it.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("বড় শিবমন্দির ও জগন্নাথ মন্দির", "The big Shiva temple and Jagannath temple") },
    {
      kind: "p",
      text: l(
        "ভুবনেশ্বর শিবমন্দির (বড় শিবমন্দির) ১৮২৩ সালে রানি ভুবনময়ী দেবী গড়েন, রাজা জগৎ নারায়ণ রায়ের বিধবা স্ত্রী। বাংলাদেশের সবচেয়ে বড় শিবমন্দির বলা হয়, ভিতরে বিশাল কালো ব্যাসল্টের শিবলিঙ্গ। পাঁচ চূড়ার পঞ্চরত্ন গড়ন, মাঝের চূড়ায় ১০৮টি উপচূড়া। ১৯৭১ সালে খোদাই ক্ষতিগ্রস্ত হয়, এখন সংরক্ষিত স্মৃতিসৌধ।",
        "The Bhubaneshwar Shiva Temple (Boro Shiv Mandir) was built in 1823 by Rani Bhubonmoyee Devi, widow of Raja Jagat Narayan Roy. It is described as the largest Shiva temple in Bangladesh, with a very large black basalt Shiva linga. Its five-spire Pancha Ratna design has 108 sub-pinnacles on the central spire. The carvings were damaged in 1971, and it is now a protected monument.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "জগন্নাথ মন্দির (রথ মন্দির) শিবমন্দিরের পাশে, দোতলা আর অষ্টভুজ আকারের।",
        "The Jagannath Temple (Rath Mandir) stands next to the Shiva temple and is two-storied and octagonal.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("গোবিন্দ মন্দির ও অন্য মন্দির", "Govinda temple and the others") },
    {
      kind: "p",
      text: l(
        "পঞ্চরত্ন গোবিন্দ মন্দির (বড় গোবিন্দ মন্দির) কৃষ্ণের, উনিশ শতকের মাঝামাঝি পুঠিয়ার রানির গড়া। কৃষ্ণ-রাধার টেরাকোটা চিত্রের জন্য পরিচিত। উইকিপিডিয়ায় নির্মাণকাল নিয়ে ১৮২৩ থেকে ১৮৯৫ এর একটি বিভ্রান্তিকর পরিসর আছে। কাছের কলেজ ও সংরক্ষণের অভাবে মন্দিরটি ঝুঁকিতে বলে লেখা আছে।",
        "The Pancha Ratna Govinda Temple (Boro Govindo Mandir) is dedicated to Krishna, built in the mid-19th century by the queen of Puthia, and known for terracotta of Krishna and Radha. Wikipedia also gives a conflicting range of 1823 to 1895 for its construction. It notes that a nearby college and lack of conservation threaten the temple.",
      ),
      source: WIKI,
    },
    {
      kind: "list",
      items: [
        l("ছোট গোবিন্দ মন্দির: চারচালা, মনে করা হয় ১৭৯০ থেকে ১৮০০ এর দশকের। দক্ষিণ দেয়ালে বিষ্ণুর অবতার, রামায়ণের একটি দৃশ্য আর রাধাকৃষ্ণের টেরাকোটা ফলক।", "Choto Govinda Mandir: Char Chala style, believed to date from the 1790s to 1800s. Its southern facade has terracotta panels of Vishnu's avatars, a Ramayana episode and Radha-Krishna scenes."),
        l("বড় আনিক মন্দির: মাঝে দোচালা, দুপাশে দুটি চারচালা, মুখ পূর্বে। ফরিদপুরের রাজারাম মন্দির ছাড়া বাংলাদেশে এর মতো আর নেই বলে লেখা আছে।", "Bara Anhik Mandir: a central do chala flanked by two char chala structures, facing east. Wikipedia says the only similar temple in Bangladesh is the Rajaram Mandir in Faridpur."),
        l("ছোট আনিক মন্দির: গোবিন্দ মন্দিরের কাছে ছোট দোচালা মন্দির।", "Chota Anhik Mandir: a small do chala temple near the Govinda temple."),
        l("ছোট শিবমন্দির: পুঠিয়া রাজবাড়ির পিছনে ছোট চারচালা, সামনের দিকে সূক্ষ্ম টেরাকোটা।", "Choto Shiv Mandir: a small Char Chala temple behind the Puthia Rajbari with intricate terracotta on its front."),
      ],
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "পুরো চত্বর হেঁটে দেখতে সময় লাগে, তাই আরামদায়ক জুতো পরো। টেরাকোটা ফলক হাত দিয়ে ছুঁয়ো না।",
        "The complex takes time to walk around, so wear comfortable shoes. Do not touch the terracotta panels.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "খোলার সময় বা টিকিটের তথ্য আমরা কোনও সরকারি সূত্রে পাইনি, তাই যাওয়ার আগে জেনে নাও।",
        "We found no official source for opening hours or tickets, so check before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("পুঠিয়া মন্দির কোথায়", "Where is Puthia temple complex?"),
      a: l("রাজশাহী জেলার পুঠিয়া উপজেলায়, রাজশাহী শহরের প্রায় ২৩ কিলোমিটার পূর্বে।", "In Puthia Upazila, Rajshahi District, about 23 km east of Rajshahi city."),
    },
    {
      q: l("পুঠিয়ার সবচেয়ে বড় মন্দির কোনটা", "Which is the biggest temple in Puthia?"),
      a: l("ভুবনেশ্বর শিবমন্দির, ১৮২৩ সালে রানি ভুবনময়ী দেবীর গড়া, বাংলাদেশের সবচেয়ে বড় শিবমন্দির বলা হয়।", "The Bhubaneshwar Shiva Temple, built in 1823 by Rani Bhubonmoyee Devi, described as the largest Shiva temple in Bangladesh."),
    },
    {
      q: l("পুঠিয়া গোবিন্দ মন্দিরের বিশেষত্ব কী", "What is special about Puthia Govinda temple?"),
      a: l("কৃষ্ণ ও রাধার টেরাকোটা চিত্র। এটি পঞ্চরত্ন রীতির মন্দির।", "Its terracotta of Krishna and Radha. It is a Pancha Ratna style temple."),
    },
  ],
  related: [
    { href: "/blog/kantajew-temple-dinajpur", label: l("কান্তজিউ মন্দির", "Kantajew Temple") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI],
};
