// Blog: Langalbandh Ashtami Snan, Narayanganj. Facts from Wikipedia, Banglapedia and The Daily Star fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Langalbandh", url: "https://en.wikipedia.org/wiki/Langalbandh" };
const BANGLAPEDIA = { title: "Banglapedia, Langalband", url: "https://en.banglapedia.org/index.php/Langalband" };
const STAR_2018 = { title: "The Daily Star, Holy Ashtami Snan starts tomorrow (22 March 2018)", url: "https://www.thedailystar.net/city/holy-astami-snan-starts-tomorrow-1552150" };

export const LANGALBANDH_ASHTAMI_SNAN: Article = {
  slug: "langalbandh-ashtami-snan-narayanganj",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("লাঙ্গলবন্দের অষ্টমী স্নান: ইতিহাস ও কিংবদন্তি", "Langalbandh Ashtami Snan: Story and Legend"),
  description: l(
    "লাঙ্গলবন্দে পুরোনো ব্রহ্মপুত্রে অষ্টমী স্নান কবে হয়, পরশুরামের কিংবদন্তি কী, ঘাট ও মেলার কথা, আর ২০১৫ সালের দুর্ঘটনা।",
    "The Ashtami Snan at Langalbandh on the Old Brahmaputra: when it is held, the Parashurama legend, the ghats, the fair and the 2015 stampede.",
  ),
  h1: l("লাঙ্গলবন্দের অষ্টমী স্নান, নারায়ণগঞ্জ", "Ashtami Snan at Langalbandh, Narayanganj"),
  lead: l(
    "প্রতি বছর চৈত্র মাসের শুক্লা অষ্টমীতে এখানে হাজার হাজার মানুষ পুরোনো ব্রহ্মপুত্রে পুণ্যস্নান করেন।",
    "Every year on the bright eighth day of Chaitra, thousands of devotees take a holy bath in the Old Brahmaputra here.",
  ),
  icon: "🌊",
  body: [
    { kind: "h2", text: l("লাঙ্গলবন্দ কোথায়", "Where is Langalbandh") },
    {
      kind: "p",
      text: l(
        "লাঙ্গলবন্দ নারায়ণগঞ্জ জেলায় পুরোনো ব্রহ্মপুত্র নদের তীরে। ঢাকা-চট্টগ্রাম মহাসড়কের কাছে, ঢাকা শহর থেকে প্রায় ২০ কিলোমিটার দক্ষিণ-পূর্বে। পুণ্যস্থানটি প্রায় ২ কিলোমিটার লম্বা।",
        "Langalbandh is on the bank of the Old Brahmaputra in Narayanganj district, near the Dhaka-Chattogram highway and about 20 km south-east of Dhaka city. The holy site is about 2 km long.",
      ),
      source: BANGLAPEDIA,
    },
    {
      kind: "p",
      text: l(
        "বাংলাপিডিয়ার তথ্য অনুযায়ী এখানে ১৩টি স্নানঘাট আর ১০টি মন্দির আছে, সঙ্গে বেশ কয়েকটি আশ্রম। ঘাটের মধ্যে আছে প্রেমতলা, অন্নপূর্ণা, বারদেশ্বরী, গান্ধী, জয়কালী, কালীদহ, শংকর ও শিখরী।",
        "Banglapedia lists 13 bathing ghats and 10 temples, plus several ashrams. The ghats include Premtala, Annapurna, Baradeswari, Gandhi, Joykali, Kalidah, Shankar and Shikhri.",
      ),
      source: BANGLAPEDIA,
    },
    { kind: "h2", text: l("কবে হয় অষ্টমী স্নান", "When the Ashtami Snan is held") },
    {
      kind: "p",
      text: l(
        "স্নান হয় প্রতি বছর চৈত্র মাসের শুক্লা অষ্টমী তিথিতে। বছর বছর ইংরেজি তারিখ বদলায়, তাই পঞ্জিকা দেখে নিও। উইকিপিডিয়া অনুযায়ী ২০১৫ সালে অষ্টমী স্নান পড়েছিল ২৭ মার্চ।",
        "The bath is held every year on the bright eighth day (Shukla Ashtami) of Chaitra. The English date changes each year, so check a panjika. According to Wikipedia, the 2015 Ashtami Snan fell on 27 March.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "ডেইলি স্টার ২০১৮ সালে লিখেছিল, অষ্টমী স্নান দুই দিনের অনুষ্ঠান। সেবার ২৩ মার্চ সকাল ১০টা ১৪ মিনিটে শুরু হয়ে রবিবার সকাল ৭টা ৫২ মিনিট পর্যন্ত চলার কথা ছিল। ওই বছর ১২০০-র বেশি পুলিশ মোতায়েন হয়েছিল।",
        "In 2018 The Daily Star reported that the Ashtami Snan is a two-day event. That year it was due to start at 10:14 am on 23 March and run until 7:52 am on Sunday. More than 1,200 police were deployed.",
      ),
      source: STAR_2018,
    },
    { kind: "h2", text: l("পরশুরামের কিংবদন্তি", "The Parashurama legend") },
    {
      kind: "p",
      text: l(
        "কিংবদন্তি অনুযায়ী জমদগ্নির আদেশে পরশুরাম মা রেণুকাকে হত্যা করেন, আর তাঁর কুঠার হাতে আটকে যায়। পাপমুক্তির জন্য তিনি ব্রহ্মপুত্রের জলে স্নান করেন, তখন কুঠার খসে পড়ে। এরপর লাঙ্গলে কুঠার বেঁধে তিনি নদীর জল সমভূমিতে নিয়ে আসেন, আর যেখানে থামেন সেই জায়গার নাম হয় লাঙ্গলবন্দ।",
        "In the legend, Parashurama killed his mother Renuka on his father Jamadagni's order, and his axe stuck to his hand. He bathed in the Brahmaputra to be freed, and the axe fell away. He then tied the axe to a plough and led the river's water to the plains, stopping at the place that became Langalbandh.",
      ),
      source: BANGLAPEDIA,
    },
    {
      kind: "p",
      text: l(
        "বাংলাপিডিয়ার বর্ণনায়, পরে ব্রহ্মপুত্র সারা বছর পাপ ধুয়ে দেওয়ার ক্ষমতা হারালেও চৈত্রের অষ্টমী তিথিতে তা ধরে রাখে। তাই এই দিনের স্নানের এত গুরুত্ব।",
        "Banglapedia's account says the river lost its power to wash away sins all year but kept it on the eighth lunar day of Chaitra, which is why the bath on this day matters most.",
      ),
      source: BANGLAPEDIA,
    },
    { kind: "h2", text: l("মেলা আর ভিড়", "The fair and the crowds") },
    {
      kind: "p",
      text: l(
        "অষ্টমী স্নানের সময় ৩-৪ দিনের মেলা বসে, সেখানে হাতের কাজ ও নানা জিনিস কেনা যায়।",
        "A fair of three to four days is held during the festival, where visitors buy handicrafts and other goods.",
      ),
      source: BANGLAPEDIA,
    },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া অনুযায়ী বাংলাদেশ, ভারত ও নেপাল থেকে লাখ লাখ ভক্ত আসেন। বিডিনিউজ২৪-এর সূত্রে ধরে ২০১৫ সালে ১৫ লাখের বেশি ভক্ত স্নান করেছিলেন।",
        "Wikipedia says devotees come from Bangladesh, India and Nepal in the hundreds of thousands. Citing bdnews24, it puts the 2015 bathing at over 1.5 million devotees.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "২০১৫ সালে অষ্টমী স্নানের সময় ভিড়ের চাপে ১০ জন ভক্ত মারা যান, আহত হন ৩০ জন। উইকিপিডিয়া বলছে, অপ্রত্যাশিত ভিড় আর প্রশাসনের প্রস্তুতির ঘাটতি এর কারণ।",
        "During the 2015 Ashtami Snan, 10 devotees were killed and 30 injured. Wikipedia says the unexpectedly large crowd and a lack of preparedness by the authorities contributed.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "২০১৮ সালে ডেইলি স্টারের প্রতিবেদক দেখেছিলেন, নারী ভক্তদের জন্য ব্যবস্থা অপর্যাপ্ত, কয়েকটি ঘর ছিল অপরিচ্ছন্ন।",
        "In 2018 The Daily Star's reporter found the arrangements for women devotees inadequate, with a few unclean rooms.",
      ),
      source: STAR_2018,
    },
    {
      kind: "tip",
      text: l(
        "স্নানের দিন ভিড় খুব বেশি হয়। ছোট বাচ্চা ও বয়স্কদের হাত ধরে রেখো, দলের সবাই একটা মিলনস্থান ঠিক করে নাও।",
        "The crowd is huge on bathing day. Hold small children and elders by the hand, and agree a meeting point with your group.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "স্নানের সময় ঘাটে পিচ্ছিল জায়গায় সাবধানে পা ফেলো, আর পরার জন্য বাড়তি শুকনো কাপড় সঙ্গে রাখো।",
        "Watch your step on slippery ghats while bathing, and bring a spare set of dry clothes.",
      ),
    },
  ],
  faq: [
    {
      q: l("লাঙ্গলবন্দ কোথায়", "Where is Langalbandh?"),
      a: l(
        "নারায়ণগঞ্জ জেলায় পুরোনো ব্রহ্মপুত্র নদের তীরে, ঢাকা থেকে প্রায় ২০ কিলোমিটার দক্ষিণ-পূর্বে।",
        "On the bank of the Old Brahmaputra in Narayanganj district, about 20 km south-east of Dhaka.",
      ),
    },
    {
      q: l("অষ্টমী স্নান কবে হয়", "When is the Ashtami Snan?"),
      a: l(
        "প্রতি বছর চৈত্র মাসের শুক্লা অষ্টমী তিথিতে। ইংরেজি তারিখ বছরভেদে বদলায়।",
        "Every year on the bright eighth day of Chaitra. The English date changes from year to year.",
      ),
    },
    {
      q: l("লাঙ্গলবন্দ নাম কেন", "Why is it called Langalbandh?"),
      a: l(
        "কিংবদন্তি অনুযায়ী পরশুরাম লাঙ্গলে কুঠার বেঁধে ব্রহ্মপুত্রের জল এনে এখানে থেমেছিলেন, তাই এই নাম।",
        "In the legend Parashurama led the Brahmaputra's water with an axe fixed to a plough and stopped here, so the place took the name.",
      ),
    },
    {
      q: l("অষ্টমী স্নানে কত মানুষ আসেন", "How many people come for the Ashtami Snan?"),
      a: l(
        "উইকিপিডিয়া বিডিনিউজ২৪-এর সূত্রে বলছে, ২০১৫ সালে ১৫ লাখের বেশি ভক্ত এসেছিলেন।",
        "Wikipedia, citing bdnews24, says over 1.5 million devotees came in 2015.",
      ),
    },
  ],
  related: [
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/blog/lokenath-brahmachari-barodi-ashram", label: l("লোকনাথ ব্রহ্মচারী ও বারদী আশ্রম", "Lokenath Brahmachari and Barodi") },
    { href: "/purnima-2027", label: l("পূর্ণিমা ২০২৭", "Purnima 2027") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI, BANGLAPEDIA, STAR_2018],
};
