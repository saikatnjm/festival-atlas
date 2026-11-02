// Blog: Shakti Peethas in West Bengal and Bangladesh. Facts from Wikipedia's Shakti Peetha list fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Shakti Peetha (list of all Shakti Pith)", url: "https://en.wikipedia.org/wiki/Shakti_Peetha" };

export const SHAKTI_PEETHAS_BENGAL: Article = {
  slug: "shakti-peethas-west-bengal-bangladesh",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("শক্তিপীঠ: পশ্চিমবঙ্গ ও বাংলাদেশের তালিকা", "Shakti Peethas in West Bengal and Bangladesh"),
  description: l(
    "পশ্চিমবঙ্গ ও বাংলাদেশের শক্তিপীঠের তালিকা: কালীঘাট, তারাপীঠ, বক্রেশ্বর, বহুলা, অট্টহাস, যশোরেশ্বরী, ঢাকেশ্বরী সহ, ঐতিহ্য অনুযায়ী কোন অঙ্গ।",
    "List of Shakti Peethas in West Bengal and Bangladesh with the place and the body part per tradition: Kalighat, Tarapith, Bakreshwar and more.",
  ),
  h1: l("পশ্চিমবঙ্গ ও বাংলাদেশের শক্তিপীঠ", "Shakti Peethas of West Bengal and Bangladesh"),
  lead: l(
    "ঐতিহ্য অনুযায়ী সতীর দেহের অঙ্গ বা অলংকার যেখানে পড়েছিল, সেই জায়গাগুলো শক্তিপীঠ। বাংলার দুই পারের পীঠগুলো এক জায়গায়।",
    "By tradition, the places where Sati's body parts or ornaments fell are Shakti Peethas. Here are the ones on both sides of Bengal's border.",
  ),
  icon: "🔱",
  body: [
    { kind: "h2", text: l("শক্তিপীঠ কী", "What a Shakti Peetha is") },
    {
      kind: "p",
      text: l(
        "প্রতিটি শক্তিপীঠে দেবী শক্তি আর একজন ভৈরবের মন্দির থাকে। কোন পীঠে কোন অঙ্গ পড়েছিল, তা বিভিন্ন তালিকায় একটু আলাদা পাওয়া যায়। নিচে উইকিপিডিয়ার তালিকা অনুসরণ করা হয়েছে।",
        "Each pitha has shrines for the goddess Shakti and a Bhairava. Lists differ somewhat on which body part fell where. What follows follows Wikipedia's list.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("পশ্চিমবঙ্গ", "West Bengal") },
    {
      kind: "list",
      items: [
        l("কালীঘাট, কলকাতা: ডান পায়ের আঙুল। দেবী কালী, ভৈরব নকুলেশ্বর।", "Kalighat, Kolkata: right toes. Kali Devi, Bhairava Nakuleshwar."),
        l("তারাপীঠ, রামপুরহাট: তৃতীয় নয়ন। দেবী তারা, ভৈরব চন্দ্রচূড়।", "Tarapith, Rampurhat: third eye. Tara Devi, Bhairava Chandrachuda."),
        l("বক্রেশ্বর, বীরভূম: ভুরুর মাঝের অংশ। দেবী মহিষমর্দিনী, ভৈরব বক্রনাথেশ্বর।", "Bakreshwar, Birbhum: portion between the eyebrows. Mahishamardini Devi, Bhairava Vakranatheshwar."),
        l("অট্টহাস, বীরভূম: ঠোঁট। দেবী ফুল্লরা, ভৈরব বিশ্বেশ্বর।", "Attahas, Birbhum: lips. Phullara Devi, Bhairava Vishweshwar."),
        l("কঙ্কালীতলা, বীরভূম: কোমর। দেবী দেবগর্ভা, ভৈরব রুরুনাথেশ্বর।", "Kankalitala, Birbhum: waist. Devgarbha Devi, Bhairava Rurunatheshwar."),
        l("নলহাটেশ্বরী, নলহাটি: পেট বা নলি। দেবী কালিকা, ভৈরব যোগেশ্বর।", "Nalhateswari, Nalhati: stomach (nauli). Kalika Devi, Bhairava Jogeshwar."),
        l("নন্দিকেশ্বরী, সাঁইথিয়া: হার। দেবী নন্দিনী, ভৈরব নন্দিকেশ্বর।", "Nandikeshwari, Sainthia: necklace. Nandini Devi, Bhairava Nandikeshwar."),
        l("বহুলা, পূর্ব বর্ধমান: বাম হাত। দেবী বহুলা, ভৈরব ভীরুকেশ্বর।", "Bahula, Purba Bardhaman: left arm. Bahuladevi, Bhairava Bhirukeshwar."),
        l("উজানি, পূর্ব বর্ধমান: ডান কব্জি। দেবী মঙ্গল চণ্ডিকা, ভৈরব কপিলাম্বরেশ্বর।", "Ujaani, Purba Bardhaman: right wrist. Mangal Chandika, Bhairava Kapilambareshwar."),
        l("যোগাদ্যা, বর্ধমান জেলা: বুড়ো আঙুল। দেবী যোগাদ্যা, ভৈরব ক্ষীরকণ্টকেশ্বর।", "Jogadya, Burdwan district: big toe. Jogadya Devi, Bhairava Ksheerkantakeshwar."),
        l("কিরীটেশ্বরী, মুর্শিদাবাদ: মুকুট। দেবী কিরীটেশ্বরী, ভৈরব সংবর্তেশ্বর।", "Kiriteswari, Murshidabad: crown. Kiriteshwari Devi, Bhairava Sanvarteshwar."),
        l("রত্নাবলী, হুগলি (আনন্দময়ী তলা): ডান কাঁধ। দেবী কুমারী, ভৈরব ঘণ্টেশ্বর।", "Ratnavali, Hooghly (Anandamayee Tala): right shoulder. Kumari Devi, Bhairava Ghanteshwar."),
        l("ভ্রামরী, জলপাইগুড়ি: বাম পা। দেবী ভ্রামরী, ভৈরব অম্বরেশ্বর।", "Bhramari, Jalpaiguri: left leg. Bhramari Devi, Bhairava Ambareshwar."),
        l("বিভাস, পূর্ব মেদিনীপুর: বাম গোড়ালি। দেবী কপালিনী (ভীমরূপা, বর্গভীমা), ভৈরব সর্বানন্দেশ্বর।", "Vibhash, Purba Medinipur: left ankle. Kapalini Devi (Bhimarupa, Bargabhima), Bhairava Sarvanandeshwar."),
      ],
      source: WIKI,
    },
    { kind: "h2", text: l("বাংলাদেশ", "Bangladesh") },
    {
      kind: "list",
      items: [
        l("যশোরেশ্বরী কালী মন্দির, সাতক্ষীরা: হাতের তালু ও পায়ের তলা। দেবী যশোরেশ্বরী, ভৈরব চণ্ডেশ্বর।", "Jeshoreshwari Kali Temple, Satkhira: palms of hands and soles of feet. Jeshoreshwari Devi, Bhairava Chandeshwar."),
        l("ভবানীপুর, বগুড়া: বাম পায়ের নূপুর (অলংকার)। দেবী অপর্ণা, ভৈরব বামনেশ্বর।", "Bhabanipur, Bogura: left anklet (ornament). Aparna Devi, Bhairava Vamaneshwar."),
        l("সুগন্ধা, শিকারপুর, গৌরনদী: নাক। দেবী সুগন্ধা, ভৈরব ত্র্যম্বকেশ্বর।", "Sugandha, Shikarpur, Gournadi: nose. Sugandha Devi, Bhairava Trayambakeshwar."),
        l("মহালক্ষ্মী, শ্রীশৈল, সিলেট: গলা।", "Mahalakshmi, Shri Shail, Sylhet: neck."),
        l("ঢাকেশ্বরী, ঢাকা: সতীর মুকুটের মণি। দেবী ঢাকেশ্বরী, ভৈরব শিব। মূল বিগ্রহ এখন কলকাতায়, ঢাকায় প্রতিরূপ।", "Dhakeshwari, Dhaka: gem of Sati's crown. Dhakeshwari Devi, Bhairava Shiva. The main idol is now in Kolkata and a replica is in Dhaka."),
        l("চট্টল ভবানী (চন্দ্রনাথ মন্দিরের সঙ্গে যুক্ত), চট্টগ্রাম: উপরের দাঁত। দেবী চট্টল ভবানী, ভৈরব চন্দ্রশেখর।", "Chattal Bhavani (linked to Chandranath Temple), Chittagong: upper teeth. Chattal Bhawani Devi, Bhairava Chandrashekhar."),
      ],
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়ার আলাদা তালিকায় চার আদি শক্তিপীঠের একটি হিসেবে কালীঘাট আর ১৮ মহাশক্তিপীঠের একটি হিসেবে পাণ্ডুয়ার শ্রীঙ্খলা (পেট) আছে।",
        "Wikipedia's separate lists also show Kalighat among the 4 Adi Shakta Pithas and Shrinkhala at Pandua (stomach) among the 18 Maha Shakta Pithas.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "অঙ্গ আর পীঠের জায়গা নিয়ে বিভিন্ন তালিকায় মতভেদ আছে। কোথাও যাওয়ার আগে সেই মন্দিরের নিজস্ব তথ্য দেখে নাও।",
        "Lists differ on body parts and sites. Before visiting, check that temple's own information.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "একসঙ্গে কয়েকটা বীরভূমের পীঠ দেখতে চাইলে আগে পথ আর থাকার ব্যবস্থা ঠিক করে নাও।",
        "If you plan several Birbhum pithas in one trip, sort out the route and stay beforehand.",
      ),
    },
  ],
  faq: [
    {
      q: l("পশ্চিমবঙ্গে কয়টি শক্তিপীঠ আছে", "How many Shakti Peethas are in West Bengal?"),
      a: l(
        "উইকিপিডিয়ার তালিকায় এই লেখায় আমরা পশ্চিমবঙ্গের চোদ্দটি পীঠ দিয়েছি। অন্য তালিকায় সংখ্যা আলাদা হতে পারে।",
        "Our list from Wikipedia has fourteen sites in West Bengal. Other lists may differ.",
      ),
    },
    {
      q: l("কালীঘাটে সতীর কোন অঙ্গ পড়েছিল", "Which body part fell at Kalighat?"),
      a: l("ঐতিহ্য অনুযায়ী ডান পায়ের আঙুল। দেবী কালী, ভৈরব নকুলেশ্বর।", "By tradition, the right toes. Kali Devi, Bhairava Nakuleshwar."),
    },
    {
      q: l("বাংলাদেশের শক্তিপীঠ কোনগুলো", "Which Shakti Peethas are in Bangladesh?"),
      a: l(
        "এই তালিকায়: যশোরেশ্বরী (সাতক্ষীরা), ভবানীপুর (বগুড়া), সুগন্ধা (গৌরনদী), শ্রীশৈল (সিলেট), ঢাকেশ্বরী (ঢাকা) আর চট্টল ভবানী (চট্টগ্রাম)।",
        "In this list: Jeshoreshwari (Satkhira), Bhabanipur (Bogura), Sugandha (Gournadi), Shri Shail (Sylhet), Dhakeshwari (Dhaka) and Chattal Bhavani (Chittagong).",
      ),
    },
  ],
  related: [
    { href: "/blog/kalighat-kali-temple-guide", label: l("কালীঘাট মন্দির", "Kalighat Temple") },
    { href: "/blog/tarapith-kali-puja", label: l("তারাপীঠে কালীপুজো", "Kali Puja at Tarapith") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/blog/chandranath-temple-sitakunda", label: l("চন্দ্রনাথ মন্দির", "Chandranath Temple") },
    { href: "/blog/jessoreshwari-kali-temple-satkhira", label: l("যশোরেশ্বরী কালী মন্দির", "Jeshoreshwari Kali Temple") },
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") },
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
  ],
  sources: [WIKI],
};
