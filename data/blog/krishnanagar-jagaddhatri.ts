// Blog: Krishnanagar Jagaddhatri Puja. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_JP = { title: "Wikipedia, Jagaddhatri Puja", url: "https://en.wikipedia.org/wiki/Jagaddhatri_Puja" };
const WIKI_KNR = { title: "Wikipedia, Krishnanagar, Nadia", url: "https://en.wikipedia.org/wiki/Krishnanagar,_Nadia" };
const WIKI_STATION = { title: "Wikipedia, Krishnanagar City Junction railway station", url: "https://en.wikipedia.org/wiki/Krishnanagar_City_Junction_railway_station" };
const DRIK = { title: "Drik Panchang, Jagaddhatri Puja 2026 date and time (Kolkata)", url: "https://www.drikpanchang.com/festivals/jagaddhatri-puja/jagaddhatri-puja-date-time.html?geoname-id=1275004&year=2026" };

export const KRISHNANAGAR_JAGADDHATRI: Article = {
  slug: "krishnanagar-jagaddhatri-puja",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("কৃষ্ণনগরের জগদ্ধাত্রী পুজো: ইতিহাস আর যাওয়ার পথ", "Krishnanagar Jagaddhatri Puja: History and How to Go"),
  description: l(
    "কৃষ্ণনগরের জগদ্ধাত্রী পুজো: মহারাজা কৃষ্ণচন্দ্র, চাষাপাড়া বুড়িমা, ছোট মা, মেজো মা, জলেশ্বরী, ট্রেনে যাওয়া আর ২০২৬-এর তারিখ।",
    "Krishnanagar Jagaddhatri Puja: Maharaja Krishnachandra, Chashapara Burima, Choto Maa, Mejo Maa, Jaleswari, getting there by train, and the 2026 date.",
  ),
  h1: l("কৃষ্ণনগরের জগদ্ধাত্রী: বুড়িমা থেকে বিসর্জন", "Krishnanagar's Jagaddhatri: from Burima to immersion"),
  lead: l(
    "নদিয়ার কৃষ্ণনগরে জগদ্ধাত্রী পুজো মানে শহরজোড়া আলো আর ভিড়। কে শুরু করেছিলেন, কোন মায়েরা বিখ্যাত, আর কীভাবে যাবে।",
    "In Krishnanagar, Nadia, Jagaddhatri Puja means a city full of lights and crowds. Who began it, which idols are famous, and how to get there.",
  ),
  icon: "🦁",
  body: [
    { kind: "h2", text: l("মহারাজা কৃষ্ণচন্দ্র আর পুজোর শুরু", "Maharaja Krishnachandra and the beginning") },
    {
      kind: "p",
      text: l(
        "প্রচলিত কাহিনি অনুযায়ী কৃষ্ণনগরের মহারাজা কৃষ্ণচন্দ্র এই পুজো শুরু করেন। লোককথায় আছে, বন্দি থাকায় তিনি দুর্গাপুজো করতে পারেননি, তারপর দৈব দর্শনে এই পুজো শুরু করেন।",
        "The popular narrative says the worship was begun by Maharaja Krishnachandra of Krishnanagar, Nadia. Local lore adds that he began it after a divine vision, having missed Durga Puja while imprisoned.",
      ),
      source: WIKI_JP,
    },
    {
      kind: "p",
      text: l(
        "কৃষ্ণনগর শহরের উইকিপিডিয়া পাতায় বলা আছে, কৃষ্ণ চন্দ্র রায় (১৭২৮ থেকে ১৭৮২) ১৭৬২ সালে জগদ্ধাত্রী পুজো শুরু করেছিলেন বলে মানা হয়। পাতাটিতে আরও তথ্যসূত্র দরকার বলে চিহ্ন দেওয়া আছে, তাই এটাকে লোকমতই ধরো।",
        "The Krishnanagar page says Krishna Chandra Roy (1728 to 1782) is credited with starting the puja in 1762. That page is tagged as needing more citations, so treat it as tradition rather than settled fact.",
      ),
      source: WIKI_KNR,
    },
    { kind: "h2", text: l("বিখ্যাত মায়েরা", "The famous idols") },
    {
      kind: "p",
      text: l(
        "সবচেয়ে জনপ্রিয় পুজো চাষাপাড়ার বুড়িমার, যা ১৭৭২ সালে শুরু হয়েছিল বলে বলা হয়। ঠাকুরকে আদর করে বলা হয় কৃষ্ণনগরের তিরুপতি।",
        "The most popular puja is the Burima of Chasa Para, said to have started in 1772. The deity is nicknamed the Tirupathi of Krishnanagar.",
      ),
      source: WIKI_JP,
    },
    {
      kind: "p",
      text: l(
        "ছোট মা কাঠালপোতা বারোয়ারির দেবী, আর মেজো মা কলেজ স্ট্রিট বারোয়ারির। মালোপাড়া বারোয়ারির জলেশ্বরী মাও খুব বিখ্যাত।",
        "Choto Maa is the deity of Kathalpota Barowari, and Mejo Maa is the deity of College Street Barowari. Maa Jaleswari of Malo para Barowari is also very famous.",
      ),
      source: WIKI_JP,
    },
    {
      kind: "p",
      text: l(
        "কৃষ্ণনগরের পাতা অনুযায়ী চাষাপাড়া বারোয়ারি একশো বছরের বেশি ধরে চলছে। সেখানে চক্ষুদান, ঢাকের শোভাযাত্রা আর প্রতিমায় সোনার গয়না থাকে। শহরের আলোর কাজ বেশিরভাগ স্থানীয় শিল্পীদের, মাঝে মাঝে চন্দননগরের আলোও ব্যবহার হয়।",
        "The Krishnanagar page says the Chasapara Barowari puja has run for over 100 years, with a chokkhudaan ritual, a dhak procession and gold jewellery on the idol. The city's lighting is mostly by local artisans, with occasional Chandannagar lights.",
      ),
      source: WIKI_KNR,
    },
    { kind: "h2", text: l("কবে আর বিসর্জন", "When, and the immersion") },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৬ সালে জগদ্ধাত্রী পুজো বৃহস্পতিবার, ১৯ নভেম্বর। নবমী তিথি শুরু ১৮ নভেম্বর সকাল ৬:০৪, শেষ ১৯ নভেম্বর সকাল ৭:০৫।",
        "Drik Panchang's Kolkata listing puts Jagaddhatri Puja 2026 on Thursday, 19 November. Navami tithi begins 06:04 AM on 18 November and ends 07:05 AM on 19 November.",
      ),
      source: DRIK,
    },
    {
      kind: "p",
      text: l(
        "পুজো কার্তিকের শুক্লপক্ষে হয়, নবমী বিশেষ শুভ। জায়গাভেদে পাঁচ দিন বা শুধু নবমীতে পুজো হয়। বিসর্জনের সময় একটি রীতিকে কৃষ্ণনগরের বাসিন্দারা বলেন সাং।",
        "The puja is held in the bright fortnight of Kartika, with Navami especially auspicious, and is observed for five days or on Navami only, depending on the place. During immersion there is a ritual that Krishnanagar residents call Sang.",
      ),
      source: WIKI_JP,
    },
    { kind: "h2", text: l("কীভাবে যাবে", "Getting there") },
    {
      kind: "p",
      text: l(
        "কৃষ্ণনগর সিটি জংশন কলকাতা শহরতলি রেলের রানাঘাট–কৃষ্ণনগর লাইনে। শিয়ালদা থেকে দূরত্ব ১০০.২ কিমি, স্টেশন কোড KNJ, শিয়ালদা বিভাগ, পূর্ব রেলওয়ে।",
        "Krishnanagar City Junction is on the Ranaghat–Krishnanagar line of the Kolkata Suburban Railway. It is 100.2 km from Sealdah, station code KNJ, Sealdah division, Eastern Railway.",
      ),
      source: WIKI_STATION,
    },
    {
      kind: "p",
      text: l(
        "শহর কলকাতা থেকে প্রায় ১০০ কিমি উত্তরে, জলঙ্গী নদীর দক্ষিণ পাড়ে।",
        "The city lies about 100 km north of Kolkata, on the southern bank of the Jalangi River.",
      ),
      source: WIKI_KNR,
    },
    {
      kind: "tip",
      text: l(
        "পুজোর দিনগুলোয় স্টেশন আর রাস্তায় প্রচণ্ড ভিড় হয়। ফেরার ট্রেনের সময় আগে দেখে রাখো, দলের সবাই মিলে দেখা করার জায়গা ঠিক করো, আর বাচ্চা-বয়স্কদের সঙ্গে নিলে হাত ছেড়ো না।",
        "Stations and roads get very crowded on puja days. Check your return train beforehand, agree a meeting point, and keep hold of children and elders.",
      ),
    },
  ],
  faq: [
    {
      q: l("কৃষ্ণনগরের জগদ্ধাত্রী পুজো কে শুরু করেন?", "Who started Krishnanagar Jagaddhatri Puja?"),
      a: l("প্রচলিত কাহিনি অনুযায়ী মহারাজা কৃষ্ণচন্দ্র।", "According to the popular narrative, Maharaja Krishnachandra."),
    },
    {
      q: l("২০২৬-এ জগদ্ধাত্রী পুজো কবে?", "When is Jagaddhatri Puja in 2026?"),
      a: l("দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় বৃহস্পতিবার, ১৯ নভেম্বর ২০২৬।", "Thursday, 19 November 2026 in Drik Panchang's Kolkata listing."),
    },
    {
      q: l("চাষাপাড়ার বুড়িমা কী?", "What is Chashapara Burima?"),
      a: l("কৃষ্ণনগরের সবচেয়ে জনপ্রিয় জগদ্ধাত্রী পুজো, ১৭৭২ সালে শুরু বলে কথিত, ডাকনাম কৃষ্ণনগরের তিরুপতি।", "Krishnanagar's most popular Jagaddhatri puja, said to have started in 1772 and nicknamed the Tirupathi of Krishnanagar."),
    },
    {
      q: l("কলকাতা থেকে কৃষ্ণনগর কীভাবে যাব?", "How do I get to Krishnanagar from Kolkata?"),
      a: l("শিয়ালদা থেকে রানাঘাট–কৃষ্ণনগর লাইনে কৃষ্ণনগর সিটি জংশন (KNJ), দূরত্ব ১০০.২ কিমি।", "Take the Ranaghat–Krishnanagar line from Sealdah to Krishnanagar City Junction (KNJ), 100.2 km."),
    },
    {
      q: l("কৃষ্ণনগরে ছোট মা আর মেজো মা কারা?", "Who are Choto Maa and Mejo Maa in Krishnanagar?"),
      a: l("ছোট মা কাঠালপোতা বারোয়ারির, মেজো মা কলেজ স্ট্রিট বারোয়ারির জগদ্ধাত্রী প্রতিমা।", "They are the Jagaddhatri idols of Kathalpota Barowari (Choto Maa) and College Street Barowari (Mejo Maa)."),
    },
  ],
  related: [
    { href: "/jagaddhatri-puja-2026", label: l("জগদ্ধাত্রী পুজো ২০২৬", "Jagaddhatri Puja 2026") },
    { href: "/puja/chashapara-burima-krishnanagar", label: l("চাষাপাড়া বুড়িমা, পুজো পাতা", "Chashapara Burima puja page") },
    { href: "/blog/chandannagar-jagaddhatri-lights", label: l("চন্দননগরের জগদ্ধাত্রী আলো", "Chandannagar Jagaddhatri lights") },
    { href: "/greetings/jagaddhatri", label: l("জগদ্ধাত্রী শুভেচ্ছা কার্ড", "Jagaddhatri greeting cards") },
  ],
  sources: [WIKI_JP, WIKI_KNR, WIKI_STATION, DRIK],
};
