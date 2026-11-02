// Blog: Bishnupur terracotta temples. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Bishnupur, Bankura", url: "https://en.wikipedia.org/wiki/Bishnupur,_Bankura" };

export const BISHNUPUR_TEMPLES: Article = {
  slug: "bishnupur-terracotta-temples",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("বিষ্ণুপুরের টেরাকোটা মন্দির: ইতিহাস ও গাইড", "Bishnupur Terracotta Temples: History Guide"),
  description: l(
    "বিষ্ণুপুরের মল্ল রাজারা, রাসমঞ্চ, জোড়বাংলা, মদনমোহন ও শ্যামরায় মন্দির, টেরাকোটার কাজ আর বালুচরি শাড়ি নিয়ে সহজ পরিচয়।",
    "Bishnupur's Malla kings, the Rasmancha, Jor Bangla, Madan Mohan and Shyam Ray temples, terracotta work and Baluchari saris.",
  ),
  h1: l("বিষ্ণুপুরের টেরাকোটা মন্দির, বাঁকুড়া", "The Terracotta Temples of Bishnupur, Bankura"),
  lead: l(
    "বাঁকুড়ার বিষ্ণুপুর প্রায় হাজার বছর মল্ল রাজাদের রাজধানী ছিল। শহরের ইটের মন্দিরগুলোর গায়ে পোড়ামাটির নকশা।",
    "Bishnupur in Bankura was the capital of the Malla kings for nearly a thousand years. Its brick temples are covered in terracotta panels.",
  ),
  icon: "🧱",
  body: [
    { kind: "h2", text: l("মল্ল রাজাদের বিষ্ণুপুর", "Bishnupur of the Malla kings") },
    {
      kind: "p",
      text: l(
        "ধরা হয় শহরটি প্রায় ৯৯৭ সালে জগৎ মল্ল গড়েছিলেন, নাম বিষ্ণু দেবতার নামে। প্রায় হাজার বছর এটি মল্লভূমের মল্ল রাজাদের রাজধানী ছিল।",
        "The town was founded around 997 CE by Jagat Malla and is named after the god Vishnu. For nearly a thousand years it was the capital of the Malla kings of Mallabhum.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "মল্ল রাজারা বৈষ্ণব ছিলেন এবং শহরের বেশিরভাগ টেরাকোটা মন্দির তাঁরাই করান। বীর হাম্বির এবং তাঁর উত্তরসূরি রঘুনাথ সিংহ দেব ও বীর সিংহ দেব বিষ্ণুপুরকে বাংলার বড় সাংস্কৃতিক কেন্দ্র করে তোলেন।",
        "The Malla rulers were Vaishnavites and commissioned most of the terracotta temples. Veer Hambir and his successors Raghunath Singha Dev and Bir Singha Dev made Bishnupur a major cultural centre of Bengal.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("টেরাকোটার মন্দির", "The terracotta temples") },
    {
      kind: "p",
      text: l(
        "মন্দিরগুলো ল্যাটারাইট আর ইটে গড়া, গায়ে মহাভারতের দৃশ্য আঁকা পোড়ামাটির ফলক।",
        "The temples are built of laterite and brick and covered with terracotta tiles showing scenes from the Mahabharata.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "রাসমঞ্চকে সবচেয়ে পুরোনো ইটের মন্দির বলা হয়, তবে সাল দেওয়া নেই। শ্যামরায় মন্দির প্রায় ১৬৪৩, জোড়বাংলা (কেষ্ট রায়) প্রায় ১৬৫৫, কালাচাঁদ প্রায় ১৬৫৬, মদনমোহন প্রায় ১৬৯৪, রাধা-গোবিন্দ প্রায় ১৭২৯ ও রাধামাধব প্রায় ১৭৩৭ সালের। জোড়মন্দির চত্বর প্রায় ১৭২৬ সালের।",
        "The Rasmancha is described as the oldest brick temple, with no date given. The listed dates are: Shyam Ray about 1643, Jor Bangla (Keshta Roy) about 1655, Kalachand about 1656, Madan Mohan about 1694, Jor Mandir complex about 1726, Radha-Gobinda about 1729 and Radhamadhab about 1737.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "একটি ছবির ক্যাপশনে জোড়বাংলাকে ষোড়শ শতকের বলা আছে, আরেকটিতে প্রায় ১৬৫৫। উইকিপিডিয়ার মধ্যেই তারিখ মেলে না, তাই সাল নিয়ে নিশ্চিত হতে চাইলে প্রত্নতাত্ত্বিক সূত্র দেখো।",
        "One caption calls Jor Bangla a 16th-century temple and another says about 1655. The dates conflict even within Wikipedia, so check an archaeological source if you need a firm year.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("হস্তশিল্প: টেরাকোটা ও বালুচরি", "Crafts: terracotta and Baluchari") },
    {
      kind: "p",
      text: l(
        "বিষ্ণুপুরে এখনও পোড়ামাটির কাজ হয়: ঘোড়া, হাতি, গণেশ, নটরাজ আর নানা মাটির বাসন। কারিগররা দলমাদল কামানের ছোট প্রতিরূপও গড়েন।",
        "Terracotta work continues today: horses, elephants, Ganesha and Nataraj figures and other pottery. Potters also make miniature replicas of the Dalmadal cannon.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "বিষ্ণুপুর বালুচরি শাড়ির জন্যও বিখ্যাত। জ্যাকোয়ার্ড পাঞ্চ-কার্ডের তাঁতে বোনা এই শাড়ির পাড় ও আঁচলে রামায়ণ-মহাভারতের নকশা থাকে।",
        "Bishnupur is also known for Baluchari saris, woven on Jacquard punch-card looms, with Ramayana and Mahabharata motifs on the border and pallu.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("বিশ্ব ঐতিহ্যের পথে", "Towards World Heritage") },
    {
      kind: "p",
      text: l(
        "১৯৯৭ সালে বিষ্ণুপুরের মন্দিরগুলো ইউনেস্কোর সাময়িক তালিকায় ওঠে। এটি বিশ্ব ঐতিহ্যের মনোনয়নের আগের ধাপ মাত্র।",
        "In 1997 the temples of Bishnupur were placed on UNESCO's Tentative List, a preliminary step before a World Heritage nomination.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "টেরাকোটার নকশা ভালো দেখতে হলে দিনের আলোয় ঘুরো, আর মন্দিরের গা ছুঁয়ে নষ্ট কোরো না।",
        "Visit in daylight to see the terracotta panels well, and do not touch the carvings.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "টিকিট, খোলার সময় বা যাতায়াতের তথ্য আমরা কোনও সরকারি সূত্রে পাইনি, যাওয়ার আগে নিজে মিলিয়ে নাও।",
        "We found no official source for tickets, hours or transport, so confirm them before you go.",
      ),
    },
  ],
  faq: [
    {
      q: l("বিষ্ণুপুরের মন্দিরের ইতিহাস", "Bishnupur temples history"),
      a: l(
        "শহরটি মল্ল রাজাদের রাজধানী ছিল। বৈষ্ণব মল্ল রাজারা বেশিরভাগ টেরাকোটা মন্দির করান, যার অনেকগুলো সপ্তদশ-অষ্টাদশ শতকের।",
        "The town was the Malla kings' capital. The Vaishnava Malla rulers commissioned most of the terracotta temples, many dated to the 17th and 18th centuries.",
      ),
    },
    {
      q: l("বিষ্ণুপুরে কী কী মন্দির দেখার আছে", "Which temples to see in Bishnupur?"),
      a: l(
        "রাসমঞ্চ, জোড়বাংলা, শ্যামরায়, মদনমোহন, কালাচাঁদ, রাধা-গোবিন্দ ও রাধামাধব মন্দির।",
        "Rasmancha, Jor Bangla, Shyam Ray, Madan Mohan, Kalachand, Radha-Gobinda and Radhamadhab.",
      ),
    },
    {
      q: l("বিষ্ণুপুর কীসের জন্য বিখ্যাত", "What is Bishnupur famous for?"),
      a: l("পোড়ামাটির মন্দির, টেরাকোটার হস্তশিল্প, বালুচরি শাড়ি আর দলমাদল কামান।", "Terracotta temples, terracotta crafts, Baluchari saris and the Dalmadal cannon."),
    },
  ],
  related: [
    { href: "/blog/tarakeswar-temple-shiva", label: l("তারকেশ্বর মন্দির", "Tarakeswar Temple") },
    { href: "/blog/hangseshwari-temple-bansberia", label: l("হংসেশ্বরী মন্দির", "Hangseshwari Temple") },
    { href: "/blog/poush-mela-shantiniketan", label: l("পৌষ মেলা", "Poush Mela") },
    { href: "/rash-purnima-2027", label: l("রাস পূর্ণিমা ২০২৭", "Rash Purnima 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI],
};
