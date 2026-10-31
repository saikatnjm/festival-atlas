// Blog: Saraswati Puja rituals. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_PUJA = { title: "Wikipedia, Saraswati Puja", url: "https://en.wikipedia.org/wiki/Saraswati_Puja" };
const WIKI_VP = { title: "Wikipedia, Vasant Panchami", url: "https://en.wikipedia.org/wiki/Vasant_Panchami" };
const DRIK = { title: "Drik Panchang, Vasant Panchami 2027 (Kolkata)", url: "https://www.drikpanchang.com/festivals/vasant-panchami/vasant-panchami-puja-date-time.html?geoname-id=1275004&year=2027" };

export const SARASWATI_RITUALS: Article = {
  slug: "saraswati-puja-rituals",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("সরস্বতী পুজোর নিয়ম আর রীতি, ২০২৭", "Saraswati Puja Rituals and 2027 Date in Bengal"),
  description: l(
    "সরস্বতী পুজো ২০২৭ কবে, হাতেখড়ি, হলুদ পোশাক আর স্কুলের পুজো: বাঙালি ঘরের রীতিগুলো সহজ করে, কলকাতার মুহূর্তসহ।",
    "Saraswati Puja rituals in Bengal: hathe khori, yellow clothes, school pujas, and the 2027 date with the Kolkata puja muhurat.",
  ),
  h1: l("সরস্বতী পুজোয় বাঙালি ঘরে আর স্কুলে কী হয়", "What Bengali homes and schools do on Saraswati Puja"),
  lead: l(
    "বসন্ত পঞ্চমীর সকালে হলুদ পোশাক, হাতেখড়ি আর স্কুলের পুজো। রীতিগুলো আর ২০২৭-এর দিনক্ষণ এক জায়গায়।",
    "Yellow clothes, hathe khori and school pujas on the morning of Vasant Panchami. The rituals and the 2027 timings in one place.",
  ),
  icon: "📚",
  body: [
    { kind: "h2", text: l("দিনটা কী", "What the day is") },
    {
      kind: "p",
      text: l(
        "সরস্বতী পুজো হয় হিন্দু চান্দ্র-সৌর পঞ্জিকার মাঘ মাসের শুক্লপক্ষের পঞ্চমী তিথিতে। উইকিপিডিয়া দেবীকে জ্ঞান, ভাষা, সংগীত আর সব কলার দেবী বলেছে।",
        "Saraswati Puja falls on the fifth day of the bright half of the Hindu lunisolar month of Magha. Wikipedia describes the goddess as the deity of knowledge, language, music and all arts.",
      ),
      source: WIKI_VP,
    },
    {
      kind: "p",
      text: l(
        "পশ্চিমবঙ্গে উৎসবটা বাঙালি হিন্দুরা ব্যাপকভাবে পালন করে। বাংলাদেশেও বড় শিক্ষাপ্রতিষ্ঠান আর বিশ্ববিদ্যালয়গুলো ছুটি আর বিশেষ পুজোর মাধ্যমে দিনটা পালন করে।",
        "In West Bengal the festival is widely celebrated by Bengali Hindus. In Bangladesh too, major educational institutes and universities mark it with a holiday and a special puja.",
      ),
      source: WIKI_PUJA,
    },
    { kind: "h2", text: l("ঘরে আর স্কুলে", "At home and at school") },
    {
      kind: "p",
      text: l(
        "দিনটায় লোকে হলুদ পোশাক পরে, মিষ্টি খায় আর ঘরে হলুদ ফুল সাজায়।",
        "People mark the day by wearing yellow, eating sweet dishes and displaying yellow flowers at home.",
      ),
      source: WIKI_PUJA,
    },
    {
      kind: "p",
      text: l(
        "বাঙালি হিন্দুদের মধ্যে এর আরেক নাম হাতেখড়ি। সাধারণত চার-পাঁচ বছরের বাচ্চারা এই দিনে আনুষ্ঠানিক পড়াশোনা শুরু করে, যাকে বিদ্যারম্ভও বলে।",
        "Among Bengali Hindus this is also known as hathe khori. Usually children aged four or five begin their formal education on this day, called Vidya-Arambha.",
      ),
      source: WIKI_PUJA,
    },
    {
      kind: "p",
      text: l(
        "অনেক স্কুল-কলেজ সকালে দেবীর আশীর্বাদ চেয়ে বিশেষ প্রার্থনা বা পুজোর আয়োজন করে।",
        "Many educational institutions arrange special prayers or pujas in the morning to seek her blessings.",
      ),
      source: WIKI_PUJA,
    },
    {
      kind: "tip",
      text: l(
        "অনেক পরিবারে পুজোর আগের রাতে বই-খাতা-কলম দেবীর পায়ের কাছে রাখা হয়, ওই দিন পড়াশোনা থাকে না। সকালে অঞ্জলি দেওয়ার পর খিচুড়ি-ভোগ খাওয়া হয়, আর কুল বা বরই পুজোর আগে মুখে না তোলার চল আছে। এগুলো পাড়া আর পরিবারভেদে আলাদা হয়, তাই বাড়ির বড়দের কাছে জেনে নিও।",
        "Many families place books, notebooks and pens at the goddess's feet and keep the day free from study. After anjali in the morning there is often a khichuri bhog, and many families do not eat kul (jujube berries) before the puja. These customs vary by family and neighbourhood, so ask the elders at home.",
      ),
    },
    { kind: "h2", text: l("২০২৭-এর দিনক্ষণ", "The 2027 timings") },
    {
      kind: "p",
      text: l(
        "দৃক পঞ্চাঙ্গ অনুযায়ী বসন্ত পঞ্চমী বৃহস্পতিবার, ১১ ফেব্রুয়ারি ২০২৭। কলকাতার জন্য পুজোর মুহূর্ত সকাল ৬টা ১১ থেকে ১১টা ৫১, মোট ৫ ঘণ্টা ৪০ মিনিট।",
        "Drik Panchang lists Vasant Panchami on Thursday, 11 February 2027. For Kolkata the puja muhurat is 6:11 am to 11:51 am, a duration of 5 hours 40 minutes.",
      ),
      source: DRIK,
    },
    {
      kind: "p",
      text: l(
        "একই পাতায় পঞ্চমী তিথি শুরু ১১ ফেব্রুয়ারি রাত ৩টে ০৪ আর শেষ ১২ ফেব্রুয়ারি রাত ৩টে ১৮। সময়গুলো কলকাতার স্থানীয় সময়ে।",
        "The same page gives the Panchami tithi as beginning at 3:04 am on 11 February and ending at 3:18 am on 12 February. All times are Kolkata local time.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "পাড়ার পুজো বা স্কুলের অঞ্জলির সময় আলাদা হতে পারে। তাই সংশ্লিষ্ট কমিটি বা স্কুলের কাছ থেকে সময়টা জেনে নাও, আর বাচ্চার হাতেখড়ি হলে পুরোহিতের সঙ্গে আগে কথা বলে রাখো।",
        "Neighbourhood and school anjali timings can differ. Check with the committee or school, and if a child's hathe khori is planned, talk to the priest beforehand.",
      ),
    },
  ],
  faq: [
    {
      q: l("সরস্বতী পুজো ২০২৭ কবে?", "When is Saraswati Puja in 2027?"),
      a: l("দৃক পঞ্চাঙ্গ অনুযায়ী বৃহস্পতিবার, ১১ ফেব্রুয়ারি ২০২৭।", "Thursday, 11 February 2027, per Drik Panchang."),
    },
    {
      q: l("সরস্বতী পুজোর সময় কলকাতায় কখন?", "What is the Saraswati Puja time in Kolkata in 2027?"),
      a: l("কলকাতার মুহূর্ত সকাল ৬টা ১১ থেকে ১১টা ৫১।", "The Kolkata puja muhurat is 6:11 am to 11:51 am."),
    },
    {
      q: l("হাতেখড়ি কী?", "What is hathe khori?"),
      a: l("বাঙালি হিন্দুদের মধ্যে সরস্বতী পুজোর আরেক নাম, যখন সাধারণত চার-পাঁচ বছরের বাচ্চারা আনুষ্ঠানিক পড়াশোনা শুরু করে।", "It is what Bengali Hindus also call the day, when children aged around four or five usually begin formal education."),
    },
    {
      q: l("সরস্বতী পুজোয় হলুদ পোশাক কেন?", "Why do people wear yellow on Saraswati Puja?"),
      a: l("উইকিপিডিয়া অনুযায়ী লোকে হলুদ পোশাক পরে, মিষ্টি খায় আর ঘরে হলুদ ফুল সাজায়; হলুদকে সরস্বতীর প্রিয় রঙও বলা হয়েছে।", "Per Wikipedia, people wear yellow, eat sweets and display yellow flowers; yellow is also described as Saraswati's favourite colour."),
    },
    {
      q: l("বাংলাদেশে কি সরস্বতী পুজোর ছুটি আছে?", "Is Saraswati Puja a holiday in Bangladesh?"),
      a: l("উইকিপিডিয়া বলছে বড় শিক্ষাপ্রতিষ্ঠান আর বিশ্ববিদ্যালয়গুলো ছুটি আর বিশেষ পুজো দিয়ে দিনটা পালন করে।", "Wikipedia says major educational institutes and universities observe it with a holiday and a special puja."),
    },
  ],
  related: [
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027") },
    { href: "/greetings/saraswati", label: l("সরস্বতী পুজোর শুভেচ্ছা কার্ড", "Saraswati greeting cards") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI_PUJA, WIKI_VP, DRIK],
};
