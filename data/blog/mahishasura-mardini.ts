// Blog: Mahishasura Mardini, the Mahalaya dawn radio programme. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_RADIO = { title: "Wikipedia, Mahisasuramardini (radio programme)", url: "https://en.wikipedia.org/wiki/Mahisasuramardini_(radio_programme)" };
const WIKI_BHADRA = { title: "Wikipedia, Birendra Krishna Bhadra", url: "https://en.wikipedia.org/wiki/Birendra_Krishna_Bhadra" };
const DRIK = { title: "Drik Panchang, Bengali calendar 2027 (Kolkata)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1275004&year=2027" };

export const MAHISHASURA_MARDINI: Article = {
  slug: "mahishasura-mardini-radio",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("মহিষাসুরমর্দিনী: মহালয়ার ভোরের বেতার অনুষ্ঠান", "Mahishasura Mardini: The Mahalaya Dawn Radio Show"),
  description: l(
    "মহালয়ার ভোরের মহিষাসুরমর্দিনী: ১৯৩১ থেকে আকাশবাণীতে, বীরেন্দ্রকৃষ্ণ ভদ্রের কণ্ঠ, পঙ্কজ মল্লিকের সুর, ১৯৭৬-এর ঘটনা আর ২০২৭-এর মহালয়া।",
    "Mahishasura Mardini on Mahalaya dawn: on All India Radio since 1931, Birendra Krishna Bhadra's voice, Pankaj Mullick's music, the 1976 episode, Mahalaya 2027.",
  ),
  h1: l("মহিষাসুরমর্দিনী: যে অনুষ্ঠান ছাড়া মহালয়া অসম্পূর্ণ", "Mahishasura Mardini: the programme that makes Mahalaya complete"),
  lead: l(
    "মহালয়ার ভোরে বাংলার ঘরে ঘরে রেডিওতে বেজে ওঠে এই অনুষ্ঠান। কবে শুরু, কারা গড়েছেন, আর ১৯৭৬-এ কী হয়েছিল, জেনে নাও।",
    "Every Mahalaya dawn this programme plays on radios in Bengali homes. Here is when it began, who made it, and what happened in 1976.",
  ),
  icon: "📻",
  body: [
    { kind: "h2", text: l("অনুষ্ঠানের শুরু", "How it began") },
    {
      kind: "p",
      text: l(
        "অনুষ্ঠানটি প্রথম সম্প্রচারিত হয় ১৯৩১ সালের মহালয়ায়, কলকাতার আকাশবাণী থেকে। এখন আকাশবাণীর আরও অনেক কেন্দ্রও এটি শোনায়।",
        "The programme was first broadcast on Mahalaya in 1931 from Akashvani, Calcutta, which is All India Radio. Many other AIR stations across India now carry it too.",
      ),
      source: WIKI_RADIO,
    },
    {
      kind: "p",
      text: l(
        "প্রতি বছর মহালয়ার ভোরে অনুষ্ঠানটি বাজে, আর অনেক শ্রোতা ভোর চারটে নাগাদ রেডিও চালান।",
        "It airs every year at dawn on Mahalaya, and many listeners tune in around 4 am.",
      ),
      source: WIKI_RADIO,
    },
    { kind: "h2", text: l("কারা গড়েছেন", "The people behind it") },
    {
      kind: "p",
      text: l(
        "বীরেন্দ্রকৃষ্ণ ভদ্র এই অনুষ্ঠানের কণ্ঠ। তিনি শ্লোক আবৃত্তি করেন আর দুর্গার মর্ত্যে আসার কাহিনি বলে যান। চিত্রনাট্য বাণী কুমারের, সুর পঙ্কজ মল্লিকের।",
        "Birendra Krishna Bhadra is the voice behind the programme: he recites the verses and narrates the story of Durga's descent to earth. The script is by Bani Kumar and the music by Pankaj Mullick.",
      ),
      source: WIKI_RADIO,
    },
    {
      kind: "p",
      text: l(
        "ভদ্রের জন্ম ১৯০৫ সালের ৪ আগস্ট, মৃত্যু ১৯৯১ সালের ৩ নভেম্বর, কলকাতায়। তিনি আকাশবাণীতে কাজ করতেন; ত্রিশের দশকের শুরুতে নাটক প্রযোজনা আর রূপান্তরও করেছেন।",
        "Bhadra was born on 4 August 1905 and died in Calcutta on 3 November 1991. He worked for All India Radio and, from the early 1930s, produced and adapted several plays.",
      ),
      source: WIKI_BHADRA,
    },
    {
      kind: "p",
      text: l(
        "অনুষ্ঠানটি শ্লোক আর গানের সংকলন। এখানে সেই শ্লোক বা গানের কথা তুলে দিচ্ছি না, নিজের কানে শুনে নাও।",
        "The programme is a collection of shlokas and songs. We do not reproduce the verses or lyrics here, so do listen to it yourself.",
      ),
      source: WIKI_BHADRA,
    },
    { kind: "h2", text: l("১৯৭৬-এর ঘটনা", "What happened in 1976") },
    {
      kind: "p",
      text: l(
        "১৯৭৬ সালে অনুষ্ঠানে অভিনেতা উত্তমকুমারের কণ্ঠ ব্যবহার করা হয়, নাম ছিল দুর্গা দুর্গতিহারিণী। শ্রোতারা তা ভালোভাবে নেননি, তাই ভদ্রের মূল অনুষ্ঠানেই ফিরে যাওয়া হয়।",
        "In 1976 the actor Uttam Kumar's voice was used, under the title Durga Durgatiharini. Listeners did not respond favourably, and the broadcast went back to Bhadra's original version.",
      ),
      source: WIKI_RADIO,
    },
    {
      kind: "p",
      text: l(
        "এই ঘটনা থেকে বোঝা যায় বহু শ্রোতার কাছে এই অনুষ্ঠান আর ভদ্রের কণ্ঠ কতটা আলাদা করে মিশে আছে।",
        "The episode shows how closely many listeners tie the programme to Bhadra's voice.",
      ),
    },
    { kind: "h2", text: l("২০২৭-এর মহালয়া", "Mahalaya in 2027") },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের তালিকা অনুযায়ী ২০২৭ সালের মহালয়া বুধবার, ২৯ সেপ্টেম্বর, ভাদ্র মাসের কৃষ্ণ অমাবস্যা।",
        "Drik Panchang's list shows Mahalaya 2027 on Wednesday, 29 September, Bhadro Krishna Amavasya.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "ভোরে উঠতে চাইলে আগের রাতে রেডিও বা ফোনে অ্যালার্ম দিয়ে রাখো। সম্প্রচারের সঠিক সময় আর কোন চ্যানেলে শোনা যাবে, আকাশবাণী কলকাতার ঘোষণা দেখে নিও।",
        "To catch it live, set an alarm the night before and keep a radio or phone ready. Check Akashvani Kolkata's announcement for the exact broadcast time and channel.",
      ),
    },
  ],
  faq: [
    {
      q: l("মহিষাসুরমর্দিনী প্রথম কবে সম্প্রচারিত হয়?", "When was Mahishasura Mardini first broadcast?"),
      a: l("১৯৩১ সালের মহালয়ায়, কলকাতার আকাশবাণী থেকে।", "On Mahalaya in 1931, from Akashvani, Calcutta."),
    },
    {
      q: l("মহালয়ার চণ্ডীপাঠ কে করেছেন?", "Who recited the Mahalaya Chandi Path on radio?"),
      a: l("বীরেন্দ্রকৃষ্ণ ভদ্র; সুর পঙ্কজ মল্লিকের, চিত্রনাট্য বাণী কুমারের।", "Birendra Krishna Bhadra; the music is by Pankaj Mullick and the script by Bani Kumar."),
    },
    {
      q: l("উত্তমকুমার কি মহালয়ায় বীরেন্দ্রকৃষ্ণ ভদ্রের জায়গা নিয়েছিলেন?", "Did Uttam Kumar replace Birendra Krishna Bhadra on Mahalaya?"),
      a: l("১৯৭৬ সালে উত্তমকুমারের কণ্ঠে দুর্গা দুর্গতিহারিণী হয়েছিল, কিন্তু শ্রোতাদের সাড়া ভালো না হওয়ায় ভদ্রের মূল অনুষ্ঠানে ফেরা হয়।", "In 1976 an Uttam Kumar version, Durga Durgatiharini, was aired, but audience response was poor and Bhadra's original version was restored."),
    },
    {
      q: l("২০২৭ সালে মহালয়া কবে?", "When is Mahalaya in 2027?"),
      a: l("বুধবার, ২৯ সেপ্টেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ)।", "Wednesday, 29 September 2027, per Drik Panchang."),
    },
    {
      q: l("মহালয়ার ভোরে মহিষাসুরমর্দিনী কখন শুরু হয়?", "What time does Mahishasura Mardini start on Mahalaya morning?"),
      a: l("ভোরে শোনানো হয়, অনেকে চারটে নাগাদ শোনেন; সঠিক সময়ের জন্য আকাশবাণীর ঘোষণা দেখো।", "It airs at dawn and many listeners tune in around 4 am; check All India Radio's announcement for the exact time."),
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
  sources: [WIKI_RADIO, WIKI_BHADRA, DRIK],
};
