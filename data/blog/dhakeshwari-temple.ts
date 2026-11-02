// Blog: Dhakeshwari National Temple, Dhaka. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Dhakeshwari Temple", url: "https://en.wikipedia.org/wiki/Dhakeshwari_Temple" };

export const DHAKESHWARI_TEMPLE: Article = {
  slug: "dhakeshwari-temple-dhaka",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("ঢাকেশ্বরী জাতীয় মন্দির: ইতিহাস ও দুর্গাপুজো", "Dhakeshwari Temple, Dhaka: History and Durga Puja"),
  description: l(
    "ঢাকেশ্বরী জাতীয় মন্দির কোথায়, কত পুরোনো, ১৯৭১ সালে কী হয়েছিল, আর এখানকার দুর্গাপুজো ও জন্মাষ্টমীর শোভাযাত্রা।",
    "Dhakeshwari National Temple in Old Dhaka: where it is, its history, the 1971 damage, Durga Puja here and the Janmashtami procession.",
  ),
  h1: l("ঢাকেশ্বরী জাতীয় মন্দির, ঢাকা", "Dhakeshwari National Temple, Dhaka"),
  lead: l(
    "পুরান ঢাকার এই মন্দির বাংলাদেশের সবচেয়ে বড় হিন্দু মন্দির। দেবী ঢাকেশ্বরী, দুর্গার একরূপ।",
    "This Old Dhaka temple is the largest Hindu temple in Bangladesh. The goddess is Dhakeshwari, a form of Durga.",
  ),
  icon: "🛕",
  body: [
    { kind: "h2", text: l("মন্দিরটা কী, কোথায়", "What it is and where") },
    {
      kind: "p",
      text: l(
        "ঢাকেশ্বরী মন্দির পুরান ঢাকায়, রাষ্ট্রের মালিকানাধীন একটি হিন্দু মন্দির। এটি বাংলাদেশের 'জাতীয় মন্দির', ১৯৯৬ সালে নাম হয় ঢাকেশ্বরী জাতীয় মন্দির। বাংলাদেশের সবচেয়ে বড় হিন্দু মন্দিরও এটাই। ঢাকেশ্বরী নামের মানে 'ঢাকার দেবী', তিনি দুর্গার একরূপ।",
        "The Dhakeshwari temple is a state-owned Hindu temple in Old Dhaka, designated Bangladesh's National Temple and renamed Dhakeshwari Jatiya Mandir in 1996. It is the largest Hindu temple in Bangladesh. The name means Goddess of Dhaka, and she is a form of Durga.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ইতিহাস", "History") },
    {
      kind: "p",
      text: l(
        "মন্দিরটি দ্বাদশ শতকের বলে ধরা হয়, ঐতিহ্য অনুযায়ী ১১০০ সালে সেন বংশের রাজা বল্লাল সেন এটি গড়েছিলেন। বহুবার মেরামত ও নতুন করে গড়ায় এখনকার স্থাপত্যরীতি অত পুরোনো সময়ের বলা যায় না।",
        "The temple dates to the 12th century, traditionally to 1100 CE, built by King Ballal Sen of the Sena dynasty. Because of repeated repairs and rebuilding, its present architectural style cannot be dated to that period.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "দেশভাগের সময় মূল ধাতুর বিগ্রহ কলকাতার কুমোরটুলিতে নিয়ে যাওয়া হয়। ঢাকার মন্দিরে এখন তার প্রতিরূপের পুজো হয়। শক্তিপীঠের তালিকাতেও ঢাকেশ্বরীর নাম আছে, সতীর মুকুটের মণি এখানে পড়েছিল বলে ঐতিহ্য।",
        "During Partition the original metal idol was taken to Kumortuli in Kolkata, and a replica is worshipped at the Dhaka temple. It is also counted among the Shakta pithas, where, by tradition, a jewel from Sati's crown fell.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "১৯৭১ সালের মুক্তিযুদ্ধে মন্দির ভীষণ ক্ষতিগ্রস্ত হয়, অর্ধেকেরও বেশি ভবন ধ্বংস হয়। পাকিস্তান সেনা মূল পুজোর হল দখল করে গোলাবারুদ রাখত। রমনা কালীমন্দির ধ্বংস হওয়ার পর এটাই বাংলাদেশের সবচেয়ে গুরুত্বপূর্ণ হিন্দু উপাসনাস্থল হয়ে ওঠে।",
        "The temple was severely damaged in the 1971 Liberation War and over half its buildings were destroyed. The Pakistan Army took over the main worship hall as an ammunition store. After Ramna Kali Mandir was destroyed in 1971, this became Bangladesh's most important Hindu place of worship.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("দুর্গাপুজো আর জন্মাষ্টমী", "Durga Puja and Janmashtami") },
    {
      kind: "p",
      text: l(
        "ঢাকার সবচেয়ে বড় দুর্গাপুজোর আয়োজন এখানেই। বিশিষ্ট অতিথিরা এসে সম্প্রদায়কে শুভেচ্ছা জানান, পরে লাগোয়া প্যারেড মাঠে বিজয়া সম্মেলনী নামে সাংস্কৃতিক অনুষ্ঠান হয়।",
        "The largest Durga Puja celebration in Dhaka is held here. Dignitaries visit to greet the community, and a cultural programme called Bijaya Sammelani follows in the adjoining parade ground.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "জন্মাষ্টমীর শোভাযাত্রা মন্দির থেকে বেরিয়ে পুরান ঢাকা ঘুরে আসে। এটি ১৯০২ সালে শুরু, ১৯৪৮ সালে বন্ধ হয়, আবার চালু হয় ১৯৮৯ সালে।",
        "The Janmashtami procession starts from the temple and winds through Old Dhaka. It began in 1902, stopped in 1948 and resumed in 1989.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("মন্দির চত্বরে কী আছে", "In the complex") },
    {
      kind: "p",
      text: l(
        "চত্বরে আছে পঞ্চরত্ন রীতির মন্দির, চারটি শিবমন্দির, নাটমন্দির, সারি সারি ঘর, বড় পুকুর আর একটি পুরোনো ফটক। বাইরে শিবলিঙ্গসহ পাঁচ-ছটি মন্দির আছে।",
        "The complex has a Pancharatna-style temple, four Shiva temples, a Natamandir front hall, rows of rooms, a large pond and a historic gate. Outside are five or six pagodas with Shiva lingas.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "পুজোর সময় পুরান ঢাকায় ভিড় আর যানজট হয়। হাতে বাড়তি সময় রেখে বেরোও, আর মন্দিরের আচার মেনে চলো।",
        "Old Dhaka gets crowded around the pujas. Leave extra time and follow the temple's customs.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "দর্শনের সময় বা নিয়ম নিয়ে আমরা কোনও সরকারি সূত্র পাইনি, তাই যাওয়ার আগে মন্দির কর্তৃপক্ষের কাছে জেনে নাও।",
        "We found no official source for visiting hours or rules, so ask the temple authorities before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("ঢাকেশ্বরী মন্দির কোথায়", "Where is Dhakeshwari temple?"),
      a: l("বাংলাদেশের রাজধানী ঢাকার পুরান ঢাকায়। এটি দেশের জাতীয় মন্দির।", "In Old Dhaka, the capital of Bangladesh. It is the country's National Temple."),
    },
    {
      q: l("ঢাকেশ্বরী মন্দিরের ইতিহাস", "Dhakeshwari temple history"),
      a: l(
        "ঐতিহ্য অনুযায়ী ১১০০ সালে রাজা বল্লাল সেন এটি গড়েন। ১৯৭১ সালে মন্দিরের অর্ধেকের বেশি ভবন ধ্বংস হয়।",
        "By tradition King Ballal Sen built it in 1100 CE. Over half its buildings were destroyed in 1971.",
      ),
    },
    {
      q: l("ঢাকেশ্বরী মন্দিরে দুর্গাপুজো হয় কি", "Is Durga Puja held at Dhakeshwari temple?"),
      a: l("হ্যাঁ, ঢাকার সবচেয়ে বড় দুর্গাপুজোর আয়োজন এখানে, পরে বিজয়া সম্মেলনী হয়।", "Yes, Dhaka's largest Durga Puja is held here, followed by the Bijaya Sammelani."),
    },
    {
      q: l("ঢাকেশ্বরী মন্দিরের মূল বিগ্রহ কোথায়", "Where is the original Dhakeshwari idol?"),
      a: l(
        "দেশভাগের সময় মূল ধাতুর বিগ্রহ কলকাতার কুমোরটুলিতে নেওয়া হয়। ঢাকায় এখন প্রতিরূপের পুজো হয়।",
        "The original metal idol was taken to Kumortuli, Kolkata, during Partition. A replica is worshipped in Dhaka.",
      ),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/blog/shakti-peethas-west-bengal-bangladesh", label: l("শক্তিপীঠ: পশ্চিমবঙ্গ ও বাংলাদেশ", "Shakti Peethas in WB and Bangladesh") },
    { href: "/blog/shyama-puja-bangladesh", label: l("বাংলাদেশে শ্যামাপুজো", "Shyama Puja in Bangladesh") },
    { href: "/blog/kumartuli-idol-makers-kolkata", label: l("কুমোরটুলি", "Kumartuli") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI],
};
