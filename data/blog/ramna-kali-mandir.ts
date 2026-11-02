// Blog: Ramna Kali Mandir, Dhaka. Facts from Wikipedia, Banglapedia and Dhaka Tribune fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Ramna Kali Mandir", url: "https://en.wikipedia.org/wiki/Ramna_Kali_Mandir" };
const BANGLAPEDIA = { title: "Banglapedia, Ramna Kali Mandir", url: "https://en.banglapedia.org/index.php/Ramna_Kali_Mandir" };
const TRIBUNE_2021 = { title: "Dhaka Tribune, Indian President Kovind inaugurates renovated Ramna Kali temple (17 December 2021)", url: "https://www.dhakatribune.com/bangladesh/317303/indian-president-kovind-inaugurates-renovated" };

export const RAMNA_KALI_MANDIR: Article = {
  slug: "ramna-kali-mandir-dhaka",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("রমনা কালীমন্দির, ঢাকা: ইতিহাস ও ১৯৭১", "Ramna Kali Mandir, Dhaka: History and 1971"),
  description: l(
    "রমনা কালীমন্দিরের ইতিহাস, মা আনন্দময়ীর আশ্রম, ১৯৭১ সালের ২৭ মার্চের ধ্বংস আর ২০২১ সালে নতুন করে উদ্বোধন।",
    "Ramna Kali Mandir in Dhaka: its history, the Ma Anandamoyee ashram, the destruction on 27 March 1971 and the 2021 reopening.",
  ),
  h1: l("রমনা কালীমন্দির, ঢাকা", "Ramna Kali Mandir, Dhaka"),
  lead: l(
    "রমনা এলাকার এই কালীমন্দির ১৯৭১ সালের ২৭ মার্চ ধ্বংস হয়। ২০২১ সালে নতুন করে গড়া মন্দির উদ্বোধন হয়েছে।",
    "This Kali temple in Ramna, Dhaka was destroyed on 27 March 1971. A rebuilt temple was inaugurated in 2021.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("মন্দির ও আশ্রম", "The temple and the ashram") },
    {
      kind: "p",
      text: l(
        "ঢাকার রমনায় ছিল কালীমন্দির আর তার সঙ্গে মা আনন্দময়ী আশ্রম। মন্দিরের সামনে ছিল বড় দিঘি, আর উঁচু শিখর। ১৮৩৩ সালের একটি জলরঙ ছবিতে মন্দিরটি দেখা যায়।",
        "Ramna in Dhaka had a Kali temple with the Ma Anandamoyee Ashram beside it. There was a large pond (dighi) in front and a tall shikhara tower. A watercolour from 1833 shows the temple.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "বাংলাপিডিয়া অনুযায়ী মা আনন্দময়ী, রমণীমোহন চক্রবর্তীর স্ত্রী, মন্দিরের উত্তর দিকে আশ্রম গড়েন, আর তাঁর ভক্তরা পরে দুটি মঠ বানান।",
        "Banglapedia says Ma Anandamoyee, wife of Ramani Mohan Chakrabarty, had an ashram on the north side of the temple, and her devotees later built two monasteries.",
      ),
      source: BANGLAPEDIA,
    },
    { kind: "h2", text: l("কে গড়েছিলেন", "Who built it") },
    {
      kind: "p",
      text: l(
        "সূত্রগুলোর মধ্যে মিল নেই। উইকিপিডিয়া মন্দিরের প্রতিষ্ঠা ষোড়শ শতকে ধরে, মুঘল আমলে।",
        "The sources do not agree. Wikipedia dates the temple to the 16th century, in the Mughal period.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "বাংলাপিডিয়া বলে প্রধান মন্দির সম্ভবত সতেরো শতকের গোড়ায় হরিচরণ গিরি বানিয়েছিলেন।",
        "Banglapedia says the main temple was probably built by Haricharan Giri in the early 17th century.",
      ),
      source: BANGLAPEDIA,
    },
    {
      kind: "p",
      text: l(
        "দিঘিটি খোঁড়ার কৃতিত্ব দেওয়া হয় ভাওয়ালের রানি বিলাসমণিকে। তবে ব্রিটিশ আমলের নথিতে এক ইংরেজ ম্যাজিস্ট্রেটের নাম আছে, আর রানি হয়তো পরে আবার খুঁড়েছিলেন, বলছে বাংলাপিডিয়া।",
        "The pond's excavation is credited to Rani Bilasmani of Bhawal. Banglapedia adds that British-era documents name an English magistrate, and the Rani may have re-excavated it.",
      ),
      source: BANGLAPEDIA,
    },
    { kind: "h2", text: l("১৯৭১ সালের ২৭ মার্চ", "27 March 1971") },
    {
      kind: "p",
      text: l(
        "২৫ মার্চ ১৯৭১ পাকিস্তান সেনাবাহিনী অপারেশন সার্চলাইট শুরু করে। ২৭ মার্চ তারা মন্দির চত্বরে ঢুকে এক ঘণ্টার মধ্যে একশোর বেশি মানুষকে হত্যা করে, সেখানে আশ্রয় নেওয়া কয়েকজন মুসলমানও ছিলেন। সেদিনই মন্দির ধ্বংস হয়।",
        "Pakistan Army began Operation Searchlight on 25 March 1971. On 27 March it entered the complex and killed more than 100 people within an hour, including several Muslims who had taken refuge there. The temple was destroyed that day.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "বাংলাপিডিয়াও বলছে, ২৭ মার্চ ১৯৭১ মন্দির ও আশ্রম পুড়িয়ে দেওয়া হয়। দিঘিটিই ছিল পুরোনো মন্দিরের একমাত্র টিকে থাকা চিহ্ন।",
        "Banglapedia also says the temple and ashram were burned on 27 March 1971, and the pond is the only surviving remnant of the old temple.",
      ),
      source: BANGLAPEDIA,
    },
    { kind: "h2", text: l("নতুন করে গড়া", "Rebuilding") },
    {
      kind: "p",
      text: l(
        "১৯৭১ সালের পর জায়গাটিতে প্রার্থনার জন্য একটি ছোট মন্দির ছিল। ২০১৭ সালে পুনর্নির্মাণের ঘোষণা হয়, আর ২০২১ সালের ১৭ ডিসেম্বর ভারতের রাষ্ট্রপতি রাম নাথ কোবিন্দ নতুন ভবন উদ্বোধন করেন।",
        "After 1971 a small temple was set up on the site for prayers. Reconstruction was announced in 2017, and on 17 December 2021 Indian President Ram Nath Kovind inaugurated the new building.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "ঢাকা ট্রিবিউনের ২০২১ সালের প্রতিবেদনে মন্দির কমিটির সভাপতি উৎপল সাহা বলেন, সংস্কারের খরচ দিয়েছে ভারত সরকার, বাংলাদেশ সরকারের সহায়তায়। তিনি আরও জানান, মন্দির চত্বরে একটি ফলকে ১৯৭১ সালে নিহতদের নাম লেখা আছে।",
        "In Dhaka Tribune's 2021 report, temple committee president Utpal Saha said the Indian government funded the renovation with help from the Bangladesh government. He also said a plaque on the site lists people killed there in 1971.",
      ),
      source: TRIBUNE_2021,
    },
    {
      kind: "tip",
      text: l(
        "কালীপুজোর রাতে যেতে চাইলে আগে আমাদের কালীপুজো ২০২৭ পাতায় তিথি ও সময় দেখে নাও।",
        "If you plan to visit on Kali Puja night, check the tithi and timings on our Kali Puja 2027 page first.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "শহীদদের স্মরণের জায়গা, তাই চত্বরে শান্ত থেকো আর মন্দিরের নিয়ম মেনে চলো।",
        "This is a place of remembrance, so stay quiet in the grounds and follow the temple's customs.",
      ),
    },
  ],
  faq: [
    {
      q: l("রমনা কালীমন্দির কোথায়", "Where is Ramna Kali Mandir?"),
      a: l(
        "ঢাকার রমনা এলাকায়।",
        "In the Ramna area of Dhaka.",
      ),
    },
    {
      q: l("রমনা কালীমন্দির কবে ধ্বংস হয়", "When was Ramna Kali Mandir destroyed?"),
      a: l(
        "১৯৭১ সালের ২৭ মার্চ, পাকিস্তান সেনাবাহিনীর হাতে।",
        "On 27 March 1971, by the Pakistan Army.",
      ),
    },
    {
      q: l("রমনা কালীমন্দির কবে আবার উদ্বোধন হয়", "When was Ramna Kali Mandir reopened?"),
      a: l(
        "২০২১ সালের ১৭ ডিসেম্বর ভারতের রাষ্ট্রপতি রাম নাথ কোবিন্দ নতুন ভবন উদ্বোধন করেন।",
        "On 17 December 2021 Indian President Ram Nath Kovind inaugurated the new building.",
      ),
    },
    {
      q: l("রমনা কালীমন্দির কত পুরোনো", "How old is Ramna Kali Mandir?"),
      a: l(
        "উইকিপিডিয়া ষোড়শ শতক বলে, বাংলাপিডিয়া সম্ভাব্য সতেরো শতকের গোড়ার কথা বলে। সূত্রগুলো একমত নয়।",
        "Wikipedia says the 16th century and Banglapedia the likely early 17th century. The sources do not agree.",
      ),
    },
  ],
  related: [
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") },
    { href: "/blog/shyama-puja-bangladesh", label: l("বাংলাদেশে শ্যামা পুজো", "Shyama Puja in Bangladesh") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/blog/jessoreshwari-kali-temple-satkhira", label: l("যশোরেশ্বরী কালীমন্দির", "Jessoreshwari Kali Temple") },
  ],
  sources: [WIKI, BANGLAPEDIA, TRIBUNE_2021],
};
