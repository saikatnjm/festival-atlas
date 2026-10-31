// Blog: Kumartuli, Kolkata's potters' quarter. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_KUMORTULI = { title: "Wikipedia, Kumortuli", url: "https://en.wikipedia.org/wiki/Kumortuli" };
const WIKI_METRO = { title: "Wikipedia, Sovabazar Sutanuti metro station", url: "https://en.wikipedia.org/wiki/Sovabazar_Sutanuti_metro_station" };

export const KUMARTULI: Article = {
  slug: "kumartuli-idol-makers-kolkata",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("কুমোরটুলি: কলকাতার প্রতিমা শিল্পীপাড়া", "Kumartuli: Kolkata's Idol-Makers' Quarter"),
  description: l(
    "কুমোরটুলির ইতিহাস, প্রতিমা বিদেশে পাঠানো, কীভাবে যাবে (শোভাবাজার সুতানুটি মেট্রো), আর শিল্পীদের কাজের সময় ঘুরতে যাওয়ার টিপস।",
    "Kumartuli's history, idols exported abroad, how to reach it (Sovabazar Sutanuti metro), and tips for visiting the potters' lanes respectfully.",
  ),
  h1: l("কুমোরটুলি: যেখানে মাটি থেকে ঠাকুর হয়", "Kumartuli: where clay becomes a goddess"),
  lead: l(
    "উত্তর কলকাতার এই পাড়ায় পুজোর আগে সারি সারি প্রতিমা তৈরি হয়। কীভাবে গড়ে উঠল, আর কীভাবে ঘুরে দেখবে।",
    "In this North Kolkata neighbourhood rows of idols take shape before the pujas. How it grew, and how to visit.",
  ),
  icon: "🏺",
  body: [
    { kind: "h2", text: l("কুমোরটুলির ইতিহাস", "History of Kumartuli") },
    {
      kind: "p",
      text: l(
        "ব্রিটিশরা ক্ষমতা নেওয়ার পর কোম্পানির কারিগরদের জন্য আলাদা আলাদা এলাকা বরাদ্দ হয়, আর কুমোরদের পাড়ার নাম হয় কুমোরটুলি। কুমোররা বাড়ির পাশের নদীর মাটি দিয়ে হাঁড়িকুড়ি গড়ে সুতানুটি বাজারে বেচতেন।",
        "After the British took over, separate districts were allotted to the Company's workmen, and the potters' quarter came to be called Coomartolly. The potters shaped clay from the river beside their homes into pots sold at Sutanuti Bazar.",
      ),
      source: WIKI_KUMORTULI,
    },
    {
      kind: "p",
      text: l(
        "ক্রমে তাঁরা দেবদেবীর মূর্তিও গড়তে শুরু করেন। উনিশ শতকের শেষে উত্তর কলকাতায় অনেক শিল্পী কমে গেলেও কুমোরটুলির কুমোররা টিকে গিয়েছিলেন।",
        "Over time they began making images of gods and goddesses. Artisans in North Kolkata dwindled in the late 19th century, but the potters of Kumartuli survived.",
      ),
      source: WIKI_KUMORTULI,
    },
    { kind: "h2", text: l("কী তৈরি হয়, কোথায় যায়", "What is made and where it goes") },
    {
      kind: "p",
      text: l(
        "কুমোরটুলি নানা উৎসবের জন্য মাটির প্রতিমা গড়ে, আর নিয়মিত সেগুলি রপ্তানিও করে। কোন কোন দেশে যায়, উৎসটি তা বলেনি।",
        "Kumartuli makes clay idols for various festivals and regularly exports them as well. The source does not name the destination countries.",
      ),
      source: WIKI_KUMORTULI,
    },
    {
      kind: "p",
      text: l(
        "পাড়াটি রবীন্দ্র সরণি (আগের চিৎপুর রোড) আর হুগলি নদীর মাঝামাঝি। কাছেই হুগলির পূর্ব পাড়ে ঢাকেশ্বরী মাতা মন্দির।",
        "The quarter lies mostly between Rabindra Sarani (formerly Chitpur Road) and the Hooghly River. The Dhakeswari Mata Temple stands on the river's eastern bank near Kumartuli.",
      ),
      source: WIKI_KUMORTULI,
    },
    { kind: "h2", text: l("কীভাবে যাবে", "How to reach") },
    {
      kind: "p",
      text: l(
        "সবচেয়ে কাছের মেট্রো স্টেশন শোভাবাজার সুতানুটি। এটি কলকাতা মেট্রোর নীল লাইনের উত্তর–দক্ষিণ করিডরের ভূগর্ভস্থ স্টেশন, ঠিকানা যতীন্দ্র মোহন অ্যাভিনিউ, শোভাবাজার।",
        "The nearest metro station is Sovabazar Sutanuti, an underground station on the North-South corridor of Kolkata Metro's Blue Line, at Jatindra Mohan Avenue, Sovabazar.",
      ),
      source: WIKI_METRO,
    },
    {
      kind: "p",
      text: l(
        "কলকাতা সার্কুলার রেলের শোভাবাজার আহিরিটোলা আর বাগবাজার স্টেশনও কাছে, আর এসপ্ল্যানেড থেকে দক্ষিণেশ্বরগামী ৪৩ নম্বর বাস রুটের উল্লেখ আছে।",
        "Sovabazar Ahiritola and Bagbazar stations on the Kolkata Circular Railway are also nearby, and bus route 43, Esplanade to Dakshineswar, is listed.",
      ),
      source: WIKI_KUMORTULI,
    },
    { kind: "h2", text: l("ঘুরতে যাওয়ার টিপস", "Visiting tips") },
    {
      kind: "tip",
      text: l(
        "দিনের আলো থাকতে যাও, তখন ছবি ভালো ওঠে আর গলিতে হাঁটাও সহজ। পুজোর কয়েক সপ্তাহ আগে কাজ সবচেয়ে ব্যস্ত থাকে, তাই ভিড়ও বেশি; শান্তভাবে দেখতে চাইলে সপ্তাহের কোনও দিন বেছে নিও।",
        "Go in daylight: photos come out better and the lanes are easier to walk. Work is busiest in the weeks before the pujas, which also means crowds, so pick a weekday if you want a calmer look.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "ছবি তোলার আগে শিল্পীকে জিজ্ঞেস করো, কাজ করা হাতের ওপর ঝুঁকে পড়ো না, আর অর্ধেক তৈরি প্রতিমা ছুঁয়ো না। গলি সরু, তাই পথ আটকে দাঁড়িও না। ভালো লাগলে কিছু কিনে শিল্পীদের পাশে থেকো।",
        "Ask the artist before taking photos, do not crowd over someone working, and never touch a half-finished idol. The lanes are narrow, so do not block the way. If you like what you see, buy something to support the artisans.",
      ),
    },
  ],
  faq: [
    {
      q: l("কুমোরটুলি কোথায়?", "Where is Kumartuli?"),
      a: l("উত্তর কলকাতায়, রবীন্দ্র সরণি আর হুগলি নদীর মাঝামাঝি।", "In North Kolkata, mostly between Rabindra Sarani and the Hooghly River."),
    },
    {
      q: l("কুমোরটুলি যেতে কোন মেট্রো স্টেশনে নামব?", "Which metro station is nearest to Kumartuli?"),
      a: l("শোভাবাজার সুতানুটি, কলকাতা মেট্রোর নীল লাইনে।", "Sovabazar Sutanuti, on Kolkata Metro's Blue Line."),
    },
    {
      q: l("কুমোরটুলির নাম কীভাবে হল?", "How did Kumartuli get its name?"),
      a: l("ব্রিটিশ আমলে কুমোরদের পাড়া হিসেবে চিহ্নিত হয়, নাম হয় কুমোরটুলি (কুমোরপাড়া)।", "In the British period it was marked out as the potters' quarter and named Coomartolly, meaning potters' quarter."),
    },
    {
      q: l("কুমোরটুলির প্রতিমা কি বিদেশে যায়?", "Are Kumartuli idols exported abroad?"),
      a: l("হ্যাঁ, কুমোরটুলি নিয়মিত প্রতিমা রপ্তানি করে বলে উল্লেখ আছে।", "Yes, Kumartuli is reported to export idols regularly."),
    },
    {
      q: l("কুমোরটুলিতে ঘুরতে যাওয়ার সেরা সময় কখন?", "What is the best time to visit Kumartuli?"),
      a: l("পুজোর আগের সপ্তাহগুলোয় কাজ জমজমাট থাকে, তবে ভিড়ও বেশি; দিনের আলোয় আর সম্ভব হলে সপ্তাহের কোনও দিন যাওয়া ভালো।", "Work is liveliest in the weeks before the pujas, but so are the crowds; daylight and a weekday are a good choice."),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
    { href: "/greetings/mahalaya", label: l("মহালয়ার শুভেচ্ছা কার্ড", "Mahalaya greeting cards") },
    { href: "/puja/kolkata", label: l("কলকাতার পুজো", "Kolkata pujas") },
    { href: "/blog/belur-math-guide", label: l("বেলুড় মঠ গাইড", "Belur Math guide") },
    { href: "/amavasya-2027", label: l("অমাবস্যা ২০২৭", "Amavasya 2027") },
  ],
  sources: [WIKI_KUMORTULI, WIKI_METRO],
};
