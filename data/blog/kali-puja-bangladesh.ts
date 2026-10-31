// Blog: Kali (Shyama) Puja in Bangladesh. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_DHAKESHWARI = { title: "Wikipedia, Dhakeshwari National Temple", url: "https://en.wikipedia.org/wiki/Dhakeshwari_National_Temple" };
const WIKI_RAMNA = { title: "Wikipedia, Ramna Kali Mandir", url: "https://en.wikipedia.org/wiki/Ramna_Kali_Mandir" };
const TRIBUNE = { title: "Dhaka Tribune, Kali Puja being celebrated (12 Nov 2023)", url: "https://www.dhakatribune.com/bangladesh/330874/kali-puja-being-celebrated" };
const DRIK = { title: "Drik Panchang, Kali Puja 2026 date and time (Dhaka)", url: "https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=1185241&year=2026" };

export const KALI_PUJA_BANGLADESH: Article = {
  slug: "shyama-puja-bangladesh",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("বাংলাদেশে শ্যামা পুজো: ঢাকার মন্দির ও সময়", "Shyama Puja in Bangladesh: Dhaka Temples, Timings"),
  description: l(
    "বাংলাদেশে কালী (শ্যামা) পুজো ২০২৬: ঢাকেশ্বরী, রমনা কালী মন্দির, সিদ্ধেশ্বরী, ঢাকার নিশীথ সময় আর ছুটির খবর।",
    "Kali (Shyama) Puja in Bangladesh 2026: Dhakeshwari, Ramna Kali Mandir, Siddheshwari, Dhaka Nishita timings, and what we could confirm on holidays.",
  ),
  h1: l("বাংলাদেশে শ্যামা পুজো: কোথায়, কখন", "Shyama Puja in Bangladesh: where and when"),
  lead: l(
    "ঢাকার মন্দিরে মন্দিরে কালীপুজোর রাতে প্রদীপ জ্বলে। কোন মন্দিরে যাবে আর ২০২৬-এ সময় কী, এখানে।",
    "On Kali Puja night, temples across Dhaka light up with lamps. Here is where to go and the 2026 timings.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("২০২৬-এ ঢাকার সময়", "Dhaka timings for 2026") },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের ঢাকার হিসেবে কালীপুজো রবিবার ৮ নভেম্বর ২০২৬। নিশীথ কাল রাত ১১টা ১৬ থেকে ১২টা ০৮ (৮–৯ নভেম্বরের রাত)। অমাবস্যা শুরু ৮ নভেম্বর সকাল ১১টা ৫৭, শেষ ৯ নভেম্বর দুপুর ১টা ০১।",
        "Drik Panchang's Dhaka listing puts Kali Puja on Sunday 8 November 2026. Nishita time is 11:16 pm to 12:08 am, on the night of 8-9 November. Amavasya begins at 11:57 am on 8 November and ends at 1:01 pm on 9 November.",
      ),
      source: DRIK,
    },
    { kind: "h2", text: l("ঢাকার প্রধান মন্দির", "Main temples in Dhaka") },
    {
      kind: "p",
      text: l(
        "ঢাকা ট্রিবিউনের একটি পুরনো প্রতিবেদনে (নভেম্বর ২০২৩) রাজধানীর শ্যামা পুজোর স্থান হিসেবে ঢাকেশ্বরী জাতীয় মন্দির, সিদ্ধেশ্বরী কালী মন্দির আর রমনা কালী মন্দিরের নাম আছে। আরও নাম আছে সবুজবাগের শ্রী শ্রী বড়দেশ্বরী কালীমাতা মন্দির, সূত্রাপুরের বিহারীলাল জিউর মন্দির আর শাঁখারীবাজারের শিবমন্দিরের। শাঁখারীবাজার আর তাঁতীবাজারকে পুরান ঢাকার বড় উদযাপনের এলাকা বলা হয়েছে।",
        "An older Dhaka Tribune report (November 2023) names Dhakeshwari National Temple, Siddheshwari Kali Temple and Ramna Kali Mandir as Shyama Puja venues in the capital. It also names Sri Sri Baradeshwari Kalimata Temple in Sabujbagh, Biharilal Jeo's Temple in Sutrapur and Shibmandir in Shankharibazar, and calls Shakhari Bazar and Tanti Bazar in Old Dhaka major celebration areas.",
      ),
      source: TRIBUNE,
    },
    {
      kind: "p",
      text: l(
        "প্রতিবেদন অনুযায়ী রাত প্রায় ১০টায় পুজো শুরু হয়ে মাঝরাত পর্যন্ত চলে। মন্দির, বাড়ি আর শ্মশানে প্রদীপ আর মোমবাতি জ্বালানো হয় প্রয়াত গুরুজনদের স্মরণে, থাকে অঞ্জলি আর প্রসাদ বিতরণ, ভক্তিগীতি, আর রামকৃষ্ণ মিশনে হোম-যজ্ঞ। আতশবাজিও ফোটে।",
        "The report says the puja begins around 10 pm and continues to midnight. Earthen lamps and candles are lit at temples, homes and crematoriums in memory of departed elders, with anjali, prasad distribution, devotional songs, and a hom-joggo at Ramkrishna Mission. Firecrackers are also set off.",
      ),
      source: TRIBUNE,
    },
    { kind: "h2", text: l("ঢাকেশ্বরী আর রমনা কালী মন্দির", "Dhakeshwari and Ramna Kali Mandir") },
    {
      kind: "p",
      text: l(
        "ঢাকেশ্বরী মন্দির পুরান ঢাকার বকশীবাজারে, ঢাকেশ্বরী রোডে। দেবী ঢাকেশ্বরী দুর্গার এক রূপ। পাতায় লেখা, মন্দির দ্বাদশ শতকে বল্লাল সেন বানিয়েছিলেন, যদিও বারবার মেরামতের কারণে এখনকার স্থাপত্যকে সেই যুগের বলা যায় না। ১৯৯৬ সালে নাম হয় ঢাকেশ্বরী জাতীয় মন্দির। এটি বাংলাদেশের সবচেয়ে বড় হিন্দু মন্দির।",
        "Dhakeshwari temple is on Dhakeshwari Road in Bakshi Bazar, Old Dhaka. The goddess Dhakeshwari is a form of Durga. The page says Ballal Sen built it in the 12th century, though repeated repairs mean the present architecture cannot be dated to then. It was renamed Dhakeshwari Jatiya Mandir (National Temple) in 1996, and is described as the largest Hindu temple in Bangladesh.",
      ),
      source: WIKI_DHAKESHWARI,
    },
    {
      kind: "p",
      text: l(
        "রমনা কালী মন্দির দেবী কালীর মন্দির, আগের রেসকোর্স, এখনকার সোহরাওয়ার্দী উদ্যানের পাশে, রমনা পার্কের দক্ষিণে। মুঘল আমলে তৈরি বলা হয়, আর বিশ শতকের গোড়ায় রানি বিলাসমণি দেবীর পৃষ্ঠপোষকতায় বড় হয়। ১৯৭১ সালের ২৭ মার্চ পাকিস্তানি সেনাবাহিনী মূল মন্দির ধ্বংস করে। পুনর্নির্মিত মন্দিরের উদ্বোধন হয় ১৭ ডিসেম্বর ২০২১।",
        "Ramna Kali Mandir is dedicated to Kali and stands beside the former racecourse, now Suhrawardy Udyan, on the south side of Ramna Park. It is described as originally built in the Mughal era and largely developed in the early 20th century under the patronage of Rani Bilashmoni Debi. The original temple was destroyed by the Pakistani Army on 27 March 1971. The reconstructed temple was inaugurated on 17 December 2021.",
      ),
      source: WIKI_RAMNA,
    },
    {
      kind: "tip",
      text: l(
        "পুজোর রাতে ঢাকায় রাস্তা আর মন্দির চত্বরে ভিড় হয়। রাতে বেরোলে ফেরার যানবাহনের কথা আগে ভেবে নাও, দলের সঙ্গে থাকো, আর মন্দির কর্তৃপক্ষের নির্দেশ মেনে চলো।",
        "Roads and temple grounds get crowded on puja night in Dhaka. If you go out at night, plan your ride back in advance, stay with your group, and follow the temple authorities' instructions.",
      ),
    },
    { kind: "h2", text: l("ছুটি আছে কি?", "Is it a public holiday?") },
    {
      kind: "p",
      text: l(
        "২০২৬ সালে শ্যামা পুজোর দিন সরকারি ছুটি কি না, তা আমরা কোনও সরকারি বা সংবাদমাধ্যমের সূত্রে নিশ্চিত করতে পারিনি। ছুটির তালিকা বা গেজেট নিজে দেখে নাও।",
        "We could not confirm from an official or news source whether Shyama Puja day is a public holiday in Bangladesh in 2026. Check the government's holiday notification yourself.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "অফিস বা স্কুল নিয়ে পরিকল্পনা করার আগে সরকারি ছুটির তালিকা বা নিজের প্রতিষ্ঠান থেকে জেনে নাও। অনলাইনের তালিকা একে অপরের সঙ্গে মেলে না।",
        "Before planning around work or school, check the government list or your own institution. Online holiday lists disagree with each other.",
      ),
    },
  ],
  faq: [
    {
      q: l("২০২৬ সালে বাংলাদেশে কালীপুজো কবে?", "When is Kali Puja in Bangladesh in 2026?"),
      a: l("রবিবার ৮ নভেম্বর ২০২৬। ঢাকায় নিশীথ কাল রাত ১১টা ১৬ থেকে ১২টা ০৮।", "Sunday 8 November 2026. In Dhaka, Nishita time is 11:16 pm to 12:08 am."),
    },
    {
      q: l("ঢাকায় শ্যামা পুজো কোথায় হয়?", "Where is Shyama Puja held in Dhaka?"),
      a: l("ঢাকেশ্বরী জাতীয় মন্দির, সিদ্ধেশ্বরী কালী মন্দির আর রমনা কালী মন্দিরে, ঢাকা ট্রিবিউনের প্রতিবেদন অনুযায়ী।", "At Dhakeshwari National Temple, Siddheshwari Kali Temple and Ramna Kali Mandir, according to a Dhaka Tribune report."),
    },
    {
      q: l("রমনা কালী মন্দির কবে ধ্বংস হয়েছিল?", "When was Ramna Kali Mandir destroyed?"),
      a: l("১৯৭১ সালের ২৭ মার্চ; পুনর্নির্মিত মন্দির উদ্বোধন হয় ১৭ ডিসেম্বর ২০২১।", "On 27 March 1971; the rebuilt temple was inaugurated on 17 December 2021."),
    },
    {
      q: l("কালীপুজোর দিন কি বাংলাদেশে সরকারি ছুটি?", "Is Kali Puja a public holiday in Bangladesh?"),
      a: l("২০২৬ সালের জন্য আমরা সরকারি সূত্রে নিশ্চিত হতে পারিনি; সরকারি ছুটির তালিকা দেখে নাও।", "We could not confirm this for 2026 from an official source; check the government holiday list."),
    },
    {
      q: l("ঢাকেশ্বরী মন্দির কত পুরনো?", "How old is Dhakeshwari temple?"),
      a: l("পাতা অনুযায়ী দ্বাদশ শতকে বল্লাল সেন বানিয়েছিলেন, যদিও বর্তমান স্থাপত্য সেই যুগের নয়।", "The page says Ballal Sen built it in the 12th century, though the present architecture is not from that era."),
    },
  ],
  related: [
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/puja/dhaka", label: l("ঢাকার পুজো", "Puja in Dhaka") },
    { href: "/greetings/kali", label: l("কালীপুজোর শুভেচ্ছা কার্ড", "Kali Puja greeting cards") },
    { href: "/blog/kali-puja-and-diwali", label: l("কালীপুজো আর দীপাবলি", "Kali Puja and Diwali") },
    { href: "/blog/bhoot-chaturdashi-2026", label: l("ভূত চতুর্দশী ২০২৬", "Bhoot Chaturdashi 2026") },
  ],
  sources: [DRIK, TRIBUNE, WIKI_DHAKESHWARI, WIKI_RAMNA],
};
