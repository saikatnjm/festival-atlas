// Blog: Dhamrai Rath Yatra. Facts from Wikipedia and Dhaka Tribune fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Dhamrai Rathayatra", url: "https://en.wikipedia.org/wiki/Dhamrai_Rathayatra" };
const WIKI_UPAZILA = { title: "Wikipedia, Dhamrai Upazila", url: "https://en.wikipedia.org/wiki/Dhamrai_Upazila" };
const TRIBUNE_2025 = { title: "Dhaka Tribune, Hindus celebrate Ratha Yatra amid religious fervor (28 June 2025)", url: "https://www.dhakatribune.com/bangladesh/dhaka/385017/hindus-celebrate-ratha-yatra-amid-religious-fervor" };

export const DHAMRAI_RATH_YATRA: Article = {
  slug: "dhamrai-rath-yatra-bangladesh",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("ধামরাইয়ের রথযাত্রা: বাংলাদেশের পুরোনো রথের মেলা", "Dhamrai Rath Yatra: Bangladesh's Old Chariot Fair"),
  description: l(
    "ধামরাইয়ের জগন্নাথ রথ কত পুরোনো, ১৯৭১ সালে রথের কী হয়েছিল, মাধববাড়ি থেকে গোপনগর যাত্রা, উল্টো রথ আর মাসব্যাপী মেলা।",
    "Dhamrai's Jagannath chariot: its history, what happened to the Rath in 1971, the route from Madhabbari, the Ulto Rath and the month-long fair.",
  ),
  h1: l("ধামরাইয়ের রথযাত্রা", "The Dhamrai Rath Yatra"),
  lead: l(
    "ঢাকা জেলার ধামরাই বাংলাদেশের সবচেয়ে পুরোনো ও ঐতিহ্যবাহী রথযাত্রার জন্য পরিচিত।",
    "Dhamrai in Dhaka district is known for the country's oldest and most traditional Rath Yatra.",
  ),
  icon: "🛕",
  body: [
    { kind: "h2", text: l("ধামরাইয়ে রথ", "The Rath at Dhamrai") },
    {
      kind: "p",
      text: l(
        "ঢাকা ট্রিবিউনের ২০২৫ সালের প্রতিবেদন অনুযায়ী দেশের সবচেয়ে পুরোনো ও ঐতিহ্যবাহী রথযাত্রা হয় ঢাকা জেলার ধামরাইয়ে।",
        "Dhaka Tribune's 2025 report says the country's oldest and most traditional Ratha Yatra is held in Dhamrai in Dhaka district.",
      ),
      source: TRIBUNE_2025,
    },
    {
      kind: "p",
      text: l(
        "রথ টানা হয় মাধববাড়ি (মাধব মন্দির) থেকে প্রায় আধ কিলোমিটার দূরের গোপনগর মন্দির পর্যন্ত। গোপনগরকে শ্বশুরবাড়ি বলা হয়। এক সপ্তাহ পরে রথ মাধব মন্দিরে ফেরে, এটাই উল্টো রথ।",
        "The chariot is pulled from Madhabbari (Madhab Mandir) to the Gope Nagar temple about half a kilometre away, described as the in-laws' house. After a week it returns to Madhab Mandir, which is the Ulto Rath.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("রথের ইতিহাস", "History of the Rath") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া ১৬৭২ সালকে রথের সূচনা ধরে, আর বলে রথ নাকি প্রায় ৪০০ বছরের পুরোনো। এই দাবিতে কিছু জায়গায় সূত্র চাওয়া হয়েছে, তাই সূচনার সাল নিশ্চিত নয়। আগে বাঁশের রথ ছিল, ১৬৯৭ সালে (বাংলা ১২০৪) সেটাই শেষ বলে নথিতে আছে।",
        "Wikipedia gives 1672 as the start and says the Rath is said to be about 400 years old, but some claims carry citation-needed tags, so the start year is not settled. A bamboo Rath existed earlier, and records mention it up to 1697 (Bangla year 1204).",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "১৯৩৩ সালে (বাংলা ১৩৪০) শেষ কাঠের রথ তৈরি শেষ হয়। উচ্চতা ৬০ ফুট, প্রস্থ ৪৫ ফুট, তিন তলা, ৩২টি বড় কাঠের চাকা। ধামরাই, কালিয়াকৈর, সাটুরিয়া ও সিঙ্গাইরের কাঠমিস্ত্রিরা এক বছর ধরে এটি বানান। টানার দড়িতে লেগেছিল প্রায় ১০০০ কেজি পাট।",
        "In 1933 (Bangla 1340) the last wooden Rath was finished: 60 ft high, 45 ft wide, three storeys, with 32 large wooden wheels. Carpenters from Dhamrai, Kaliakoir, Saturia and Singair worked on it for about a year, and its ropes took about 1,000 kg of jute.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "১৯৭১ সালে মুক্তিযুদ্ধের সময় পাকিস্তান সেনাবাহিনী রথটি পুড়িয়ে দেয়। প্রধান পৃষ্ঠপোষক আর পি সাহাকে তারা অপহরণ করে হত্যা করে। এরপর উৎসব চালু রাখতে বাঁশের একটি অস্থায়ী রথ বানানো হয়।",
        "During the 1971 Liberation War the Pakistan Army burned the Rath and abducted and killed its chief patron R.P. Saha. A makeshift bamboo Rath was built afterwards to keep the festival going.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "২০১০ সালে নতুন তিন তলা রথ তৈরি হয়, ১৫টি চাকা, দেব-দেবীর মূর্তিতে সাজানো। ২০০৬ সালে তৎকালীন ভারতীয় হাইকমিশনার নতুন রথের জন্য অর্থসাহায্যের প্রতিশ্রুতি দিয়েছিলেন।",
        "A new three-storey Rath with 15 wheels, decorated with statues of gods and goddesses, was built in 2010. In 2006 the then Indian High Commissioner had pledged funds for a new Rath.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("মেলা আর ভিড়", "The fair and the crowd") },
    {
      kind: "p",
      text: l(
        "রথের মেলা বসে আষাঢ় মাসে, সাধারণত জুনে, কখনও জুলাইয়ে, আর চলে প্রায় এক মাস। হাজারো ভক্তের সঙ্গে অনেক বাঙালি মুসলমানও এতে যোগ দেন। ভক্তরা দড়ি ধরে রথ টানেন, এটাকে পবিত্র কাজ মনে করা হয়।",
        "The Roth Mela is held in the month of Ashadh, usually in June and sometimes July, and lasts about a month. Thousands of devotees come, and many Bengali Muslims take part too. Devotees pull the chariot by rope, which they consider sacred.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ধামরাই উপজেলা", "Dhamrai Upazila") },
    {
      kind: "p",
      text: l(
        "ধামরাই ১৯১৪ সালে থানা হয়, আর ১৯৮৪ সালের ১৫ ডিসেম্বর পূর্ণ উপজেলা।",
        "Dhamrai became a thana in 1914 and a full upazila on 15 December 1984.",
      ),
      source: WIKI_UPAZILA,
    },
    {
      kind: "tip",
      text: l(
        "রথ টানার সময় ভিড় থাকে। দড়ি ধরার আগে চারপাশ দেখে নাও, আর বাচ্চাদের কাছে কাছে রাখো।",
        "It gets crowded while the chariot is pulled. Look around before taking the rope, and keep children close.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "রথ ও উল্টো রথের সঠিক দিন আমাদের রথযাত্রা পাতায় দেখে নাও, তারপর যাওয়ার পরিকল্পনা করো।",
        "Check the exact Rath Yatra and Ulto Rath days on our Rath Yatra page before planning the trip.",
      ),
    },
  ],
  faq: [
    {
      q: l("ধামরাইয়ের রথযাত্রা কবে হয়", "When is the Dhamrai Rath Yatra?"),
      a: l(
        "আষাঢ় মাসে, সাধারণত জুনে, কখনও জুলাইয়ে। মেলা চলে প্রায় এক মাস। সঠিক দিন আমাদের রথযাত্রা পাতায় আছে।",
        "In the month of Ashadh, usually June and sometimes July, with a fair of about a month. The exact day is on our Rath Yatra page.",
      ),
    },
    {
      q: l("ধামরাইয়ের রথ কোথা থেকে কোথায় যায়", "Where does the Dhamrai Rath go?"),
      a: l(
        "মাধববাড়ি থেকে প্রায় আধ কিলোমিটার দূরের গোপনগর মন্দিরে। এক সপ্তাহ পরে উল্টো রথে ফেরে।",
        "From Madhabbari to the Gope Nagar temple about half a kilometre away, returning a week later on the Ulto Rath.",
      ),
    },
    {
      q: l("ধামরাইয়ের রথ কত পুরোনো", "How old is the Dhamrai Rath?"),
      a: l(
        "উইকিপিডিয়া ১৬৭২ সালকে সূচনা ধরে, তবে এ নিয়ে সূত্র চাওয়া আছে। বর্তমান রথ ২০১০ সালের।",
        "Wikipedia gives 1672 as the start, though that claim needs a citation. The present Rath dates from 2010.",
      ),
    },
    {
      q: l("১৯৭১ সালে ধামরাইয়ের রথের কী হয়েছিল", "What happened to the Dhamrai Rath in 1971?"),
      a: l(
        "পাকিস্তান সেনাবাহিনী রথটি পুড়িয়ে দেয়। পরে বাঁশের অস্থায়ী রথ দিয়ে উৎসব চলে।",
        "The Pakistan Army burned it, and the festival continued with a makeshift bamboo Rath.",
      ),
    },
  ],
  related: [
    { href: "/rath-yatra-2027", label: l("রথযাত্রা ২০২৭", "Rath Yatra 2027") },
    { href: "/blog/mahesh-rath-yatra-serampore", label: l("মাহেশের রথযাত্রা", "Mahesh Rath Yatra") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI, WIKI_UPAZILA, TRIBUNE_2025],
};
