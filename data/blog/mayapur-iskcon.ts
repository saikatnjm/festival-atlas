// Blog: Mayapur and ISKCON. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Mayapur", url: "https://en.wikipedia.org/wiki/Mayapur" };

const DRIK_MARCH = { title: "Drik Panchang, March 2027 festivals (Kolkata)", url: "https://www.drikpanchang.com/festivals/month/festivals-march.html?year=2027&geoname-id=1275004" };

export const MAYAPUR_ISKCON: Article = {
  slug: "mayapur-iskcon-chandrodaya-temple",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("মায়াপুর ইসকন ও চন্দ্রোদয় মন্দির: গৌর পূর্ণিমা", "Mayapur ISKCON and Gaura Purnima"),
  description: l(
    "নদিয়ার মায়াপুর কোথায়, চৈতন্য মহাপ্রভুর জন্মস্থান, ইসকনের সদর দপ্তর, চন্দ্রোদয় মন্দির আর গৌর পূর্ণিমা ও নবদ্বীপ পরিক্রমা।",
    "Mayapur in Nadia: Chaitanya Mahaprabhu's birthplace, ISKCON headquarters, the Chandrodaya Mandir and Gaura Purnima with the Navadwip parikrama.",
  ),
  h1: l("মায়াপুর: ইসকনের সদর দপ্তর, নদিয়া", "Mayapur: ISKCON Headquarters, Nadia"),
  lead: l(
    "জলঙ্গি আর ভাগীরথীর সঙ্গমে নদিয়ার তীর্থশহর মায়াপুর। গৌড়ীয় বৈষ্ণবরা এটিকে চৈতন্য মহাপ্রভুর জন্মস্থান মানেন।",
    "Mayapur is a pilgrimage town in Nadia where the Jalangi meets the Bhagirathi. Gaudiya Vaishnavas regard it as Chaitanya Mahaprabhu's birthplace.",
  ),
  icon: "🪷",
  body: [
    { kind: "h2", text: l("মায়াপুর কোথায়", "Where Mayapur is") },
    {
      kind: "p",
      text: l(
        "মায়াপুর পশ্চিমবঙ্গের নদিয়া জেলার তীর্থশহর। এটি জলঙ্গি নদী ও গঙ্গার শাখা ভাগীরথীর সঙ্গমস্থলে।",
        "Mayapur is a pilgrimage town in Nadia district, West Bengal, at the confluence of the Jalangi River and the Bhagirathi, a distributary of the Ganges.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("চৈতন্য মহাপ্রভুর জন্মস্থান", "Chaitanya Mahaprabhu's birthplace") },
    {
      kind: "p",
      text: l(
        "গৌড়ীয় বৈষ্ণবরা এই এলাকাকে চৈতন্য মহাপ্রভুর জন্মস্থান বলে মানেন। ১৮৮০-র দশকে ভক্তিবিনোদ ঠাকুর জন্মস্থানে যোগপীঠ মন্দির স্থাপন করেন।",
        "Followers of Gaudiya Vaishnavism regard the area as the birthplace of Chaitanya Mahaprabhu. In the 1880s Bhaktivinoda Thakur established the Yogapith temple at the birth site.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ইসকনের সদর দপ্তর", "ISKCON headquarters") },
    {
      kind: "p",
      text: l(
        "ইন্টারন্যাশনাল সোসাইটি ফর কৃষ্ণ কনশাসনেস (ইসকন)-এর সদর দপ্তর মায়াপুরে। উইকিপিডিয়ার এই পাতায় প্রতিষ্ঠার সাল নেই।",
        "The International Society for Krishna Consciousness (ISKCON) has its headquarters in Mayapur. This Wikipedia page gives no founding year.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "পাতায় চন্দ্রোদয় মন্দিরের একটি ছবি আছে, আর বৈদিক তারামণ্ডল মন্দিরের একটি লিঙ্ক। তৈরির সাল, উচ্চতা বা কাজ কতদূর, এই পাতায় নেই, তাই আমরা তা লিখছি না।",
        "The page shows a photo of the Chandrodaya Mandir and links to the Temple of the Vedic Planetarium. It gives no construction date, height or current status, so we do not state any.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("গৌর পূর্ণিমা ও নবদ্বীপ পরিক্রমা", "Gaura Purnima and the Navadwip parikrama") },
    {
      kind: "p",
      text: l(
        "গৌর পূর্ণিমা চৈতন্য মহাপ্রভুর আবির্ভাব তিথির বার্ষিক উৎসব। এর সঙ্গে প্রায় সাত দিনের নবদ্বীপ পরিক্রমা হয়।",
        "Gaura Purnima is the annual festival of Chaitanya Mahaprabhu's appearance day, held alongside a roughly seven-day Navadwip parikrama (circumambulation).",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের ২০২৭-এর মার্চের তালিকায় চৈতন্য মহাপ্রভুর জন্মতিথি সোমবার ২২ মার্চ, দোলপূর্ণিমার দিনেই।",
        "Drik Panchang's March 2027 list puts Chaitanya Mahaprabhu's birth anniversary on Monday 22 March, the same day as Dol Purnima.",
      ),
      source: DRIK_MARCH,
    },
    {
      kind: "tip",
      text: l(
        "উৎসবের সময় নদিয়ায় বিরাট ভিড় হয়। থাকার জায়গা আগে থেকে ঠিক করে নাও।",
        "Nadia gets very crowded at festival time. Arrange your stay well in advance.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "মন্দিরের সময় বা প্রবেশের নিয়ম নিয়ে সরকারি সূত্র পাইনি, ইসকন মায়াপুরের নিজস্ব তথ্য দেখে নাও।",
        "We found no official source for temple hours or entry rules, so check ISKCON Mayapur's own information.",
      ),
    },
  ],
  faq: [
    {
      q: l("মায়াপুর কোথায় অবস্থিত", "Where is Mayapur?"),
      a: l("পশ্চিমবঙ্গের নদিয়া জেলায়, জলঙ্গি ও ভাগীরথীর সঙ্গমে।", "In Nadia district, West Bengal, where the Jalangi meets the Bhagirathi."),
    },
    {
      q: l("মায়াপুর ইসকন মন্দির সম্পর্কে", "ISKCON Mayapur temple information"),
      a: l("ইসকনের সদর দপ্তর মায়াপুরে। চন্দ্রোদয় মন্দিরের বিস্তারিত তথ্য আমরা সরকারি সূত্রে পাইনি।", "ISKCON has its headquarters in Mayapur. We found no sourced details on the Chandrodaya Mandir beyond its being there."),
    },
    {
      q: l("গৌর পূর্ণিমা কী", "What is Gaura Purnima?"),
      a: l("চৈতন্য মহাপ্রভুর আবির্ভাব তিথির উৎসব, সঙ্গে প্রায় সাত দিনের নবদ্বীপ পরিক্রমা।", "The festival of Chaitanya Mahaprabhu's appearance day, with a roughly seven-day Navadwip parikrama."),
    },
  ],
  related: [
    { href: "/dol-purnima-2027", label: l("দোল পূর্ণিমা ২০২৭", "Dol Purnima 2027") },
    { href: "/holi-2027", label: l("হোলি ২০২৭", "Holi 2027") },
    { href: "/rash-purnima-2027", label: l("রাস পূর্ণিমা ২০২৭", "Rash Purnima 2027") },
    { href: "/purnima-2027", label: l("পূর্ণিমা ২০২৭", "Purnima 2027") },
    { href: "/blog/bishnupur-terracotta-temples", label: l("বিষ্ণুপুরের মন্দির", "Bishnupur temples") },
  ],
  sources: [DRIK_MARCH, WIKI],
};
