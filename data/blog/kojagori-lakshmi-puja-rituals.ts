// Blog: Kojagari Lakshmi Puja. Facts from Wikipedia "Kojagari Lakshmi Puja", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Kojagari Lakshmi Puja", url: "https://en.wikipedia.org/wiki/Kojagari_Lakshmi_Puja" };

export const KOJAGORI_LAKSHMI_PUJA: Article = {
  slug: "kojagori-lakshmi-puja-rituals",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("কোজাগরী লক্ষ্মীপুজো: জেগে থাকা আর ভোগ", "Kojagori Lakshmi Puja: Staying Awake and Bhog"),
  description: l(
    "কোজাগরী পূর্ণিমার রাতে কেন জেগে থাকতে হয়, লক্ষ্মীর আশীর্বাদের বিশ্বাস, ক্ষীরের ভোগ আর কোন দেবতাদের পুজো হয়।",
    "Why Bengal stays awake on Kojagari Purnima, the belief about Lakshmi's blessing, the kheer offering and who else is worshipped.",
  ),
  h1: l("কোজাগরী লক্ষ্মীপুজো: যে জেগে থাকে", "Kojagori Lakshmi Puja: for those who stay awake"),
  lead: l(
    "দুর্গাপুজোর পর আশ্বিনের পূর্ণিমার রাতে ঘরে ঘরে লক্ষ্মীর আরাধনা। নামটার মধ্যেই আছে পুজোর মূল কথা।",
    "On the full moon night of Ashvin, homes worship Lakshmi. The name itself holds the heart of the puja.",
  ),
  icon: "🪷",
  body: [
    { kind: "h2", text: l("কোজাগরী মানে কী", "What Kojagari means") },
    {
      kind: "p",
      text: l(
        "উৎসবটি আশ্বিন মাসের পূর্ণিমায়, বর্ষার শেষে। বাংলা, ত্রিপুরা, অসম আর মিথিলায় এই রাতকে বলে কোজাগরী পূর্ণিমা; বাংলায় কোজাগরী মানে ‘যে জেগে আছে’।",
        "The festival falls on the full moon of Ashvin, at the end of the monsoon. In Bengal, Tripura, Assam and Mithila the night is called Kojagari Purnima; in Bengali, Kojagari means 'one who is awake'.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কেন জেগে থাকা", "Why stay awake") },
    {
      kind: "p",
      text: l(
        "বিশ্বাস, লক্ষ্মী এই রাতে ঘরে ঘরে এসে দেখেন কারা জেগে আছে, আর শুধু জেগে থাকাদেরই আশীর্বাদ করেন। নেপালেও হিন্দুরা সারা রাত জেগে লক্ষ্মীর আরাধনা করেন।",
        "The belief is that Lakshmi visits homes, checks who is awake, and blesses only those who are. In Nepal too, Hindus stay up all night to honour her.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ভোগ আর উপবাস", "Bhog and fasting") },
    {
      kind: "p",
      text: l(
        "দেবতাদের ক্ষীর নিবেদন করা হয়। উত্তর আর মধ্য ভারতে ক্ষীর খোলা ছাদে জ্যোৎস্নায় সারা রাত রেখে পরদিন প্রসাদ হিসেবে খাওয়া হয়; বিশ্বাস, তাতে অমৃত জমে। অনেকে সারা দিন উপবাস করেন।",
        "Kheer is offered to the deities. In northern and central India it is left overnight under the moonlight in an open space and eaten as prasad the next day, in the belief that it gathers amrita. Many people fast for the whole day.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("আর কাদের পুজো হয়", "Who else is worshipped") },
    {
      kind: "p",
      text: l(
        "লক্ষ্মী সমৃদ্ধির দেবী হিসেবে প্রধান। সঙ্গে রাধাকৃষ্ণ, শিব-পার্বতী, লক্ষ্মীনারায়ণ আর চন্দ্রদেবের পুজোও হয়; কোথাও ইন্দ্র আর তাঁর হাতি ঐরাবতেরও। মন্দিরে দেবতাদের সাধারণত সাদা পোশাক পরানো হয়।",
        "Lakshmi, goddess of prosperity, is the main deity. Radha Krishna, Shiva Parvati, Lakshmi Narayana and the moon god are also worshipped, and in places Indra and his elephant Airavata. Temple deities are usually dressed in white.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "তারিখ আর পুজোর সময় পাঁজি দেখে ঠিক করে নিও। জেগে থাকতে চাইলে বাড়ির সবাই মিলে গল্প বা গান নিয়ে বসলে রাত সহজে কাটে।",
        "Confirm the date and puja time in your panjika. If you plan to stay up, a family session of stories or songs makes the night pass easily.",
      ),
    },
  ],
  faq: [
    {
      q: l("কোজাগরী লক্ষ্মীপুজো কী?", "What is Kojagori Lakshmi Puja?"),
      a: l("আশ্বিনের পূর্ণিমার রাতে লক্ষ্মীর পুজো। কোজাগরী মানে ‘যে জেগে আছে’।", "Lakshmi worship on the full moon night of Ashvin. Kojagari means 'one who is awake'."),
    },
    {
      q: l("কোজাগরী পূর্ণিমায় কেন জেগে থাকতে হয়?", "Why stay awake on Kojagari Purnima?"),
      a: l("বিশ্বাস, লক্ষ্মী দেখেন কে জেগে আছে, আর শুধু তাদেরই আশীর্বাদ করেন।", "It is believed Lakshmi checks who is awake and blesses only them."),
    },
    {
      q: l("কোজাগরী লক্ষ্মীপুজোয় কী ভোগ দেওয়া হয়?", "What is offered in Kojagori Lakshmi Puja?"),
      a: l("ক্ষীর নিবেদন করা হয়; অনেক অঞ্চলে তা জ্যোৎস্নায় রেখে পরদিন প্রসাদ হিসেবে খাওয়া হয়।", "Kheer is offered; in many regions it is left in the moonlight and eaten as prasad next day."),
    },
    {
      q: l("লক্ষ্মীপুজো ২০২৭ কবে?", "When is Lakshmi Puja 2027?"),
      a: l("তারিখ আর সময় আমাদের লক্ষ্মীপুজো ২০২৭ পাতায় সূত্রসহ দেওয়া আছে।", "The date and timings are on our Lakshmi Puja 2027 page, with sources."),
    },
  ],
  related: [
    { href: "/lakshmi-puja-2027", label: l("লক্ষ্মীপুজো ২০২৭", "Lakshmi Puja 2027") },
    { href: "/purnima-2027", label: l("পূর্ণিমা ২০২৭", "Purnima 2027") },
    { href: "/blog/kali-puja-and-diwali", label: l("কালীপুজো আর দীপাবলি", "Kali Puja and Diwali") },
    { href: "/blog/sindoor-khela-bijoya-dashami", label: l("সিঁদুর খেলা", "Sindoor Khela") },
  ],
  sources: [WIKI],
};
