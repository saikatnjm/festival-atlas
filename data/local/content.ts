// Local discovery (Kolkata/West Bengal and Bangladesh): interface text, traditions and plan presets.
// Traditions are general, non-dated notes; anything dated lives in data/events/events.ts with sources.

import type { L } from "@/lib/i18n";
import type { Region } from "@/data/events/events";

const l = (bn: string, en: string): L => ({ bn, en });

export const REGIONS: Region[] = ["wb", "bd"];

export const regionInfo: Record<Region, { icon: string; name: L; short: L; country: string }> = {
  wb: { icon: "🥁", name: l("কলকাতা ও পশ্চিমবঙ্গ", "Kolkata & West Bengal"), short: l("কলকাতা", "Kolkata"), country: "IN" },
  bd: { icon: "🛕", name: l("বাংলাদেশ", "Bangladesh"), short: l("বাংলাদেশ", "Bangladesh"), country: "BD" },
};

export const ui = {
  metaTitle: l("আমার পুজো: কলকাতা ও বাংলাদেশের পুজো-গাইড", "Local Puja Guide: Kolkata & Bangladesh"),
  metaDesc: l(
    "কলকাতা ও বাংলাদেশের দুর্গাপুজো ২০২৬: সূত্রসহ খবর, তারিখ, থিম-হাইলাইট, প্যান্ডেল-হপিং প্ল্যান আর তোমার নিজের ‘আমার পুজো প্ল্যান’ কার্ড।",
    "Durga Puja 2026 in Kolkata and Bangladesh: sourced news, dates, theme highlights, pandal-hopping plans and your own Puja plan card.",
  ),
  h1: l("আমার পুজো", "My Puja, locally"),
  lead: l("কলকাতা না বাংলাদেশ? জায়গা বেছে নাও, নইলে দুটোই দেখো। সব খবরের সঙ্গে সূত্র আর যাচাইয়ের তারিখ আছে।", "Kolkata or Bangladesh? Pick one or browse both. Every item shows its source and when we last checked it."),
  pick: l("কোথাকার পুজো দেখবে?", "Which Puja shall we show?"),
  both: l("দুটোই দেখাও", "Show both"),
  trendH2: l("এখন কোথায় পুজোর হইচই?", "What’s happening now?"),
  trendNote: l(
    "প্রকাশিত খবর থেকে হাতে বাছাই করা, লাইভ সোশ্যাল-মিডিয়া ট্রেন্ড নয়। আসছে / চলছে / শেষ: তোমার ডিভাইসের তারিখ অনুযায়ী।",
    "Hand-picked from published reports, not live social-media trends. Upcoming / on now / over is worked out from your device’s date.",
  ),
  seeAll: l("সব খবর আর প্ল্যান →", "All news and plans →"),
  status: {
    upcoming: l("আসছে", "Upcoming"),
    live: l("চলছে", "On now"),
    past: l("শেষ", "Over"),
    unconfirmed: l("নিশ্চিত নয়", "Unconfirmed"),
  },
  reported: l("খবর অনুযায়ী", "As reported"),
  daysLeft: l("আর {n} দিন", "in {n} days"),
  tomorrow: l("কাল", "tomorrow"),
  source: l("সূত্র", "Source"),
  verified: l("শেষ যাচাই {date}", "Last checked {date}"),
  inDirectory: l("ডিরেক্টরিতে দেখো", "See in directory"),
  allEvents: l("তারিখ, খবর ও থিম-হাইলাইট", "Dates, news and theme highlights"),
  pandalsH3: l("থিম-হাইলাইট ২০২৬", "Theme highlights 2026"),
  newsH3: l("তারিখ ও খবর", "Dates and news"),
  traditionsH2: l("পুজোর পাড়া-কথা", "Local Puja ways"),
  routeH2: l("২০ সেকেন্ডে প্যান্ডেল-হপিং রুট", "Your pandal-hopping route in 20 seconds"),
  routeP: l("কোথা থেকে বেরোচ্ছ, মুড কী, আর কখন? বাকিটা আমরা সাজিয়ে দিচ্ছি।", "Where are you starting, what’s the mood, and when? We’ll line up the rest."),
  routeStart: l("কোথা থেকে বেরোচ্ছ?", "Starting from?"),
  routeVibe: l("আজকের মুড?", "Today’s vibe?"),
  routeTime: l("কখন বেরোবে?", "When are you heading out?"),
  routePick: l("শুরুর জায়গা আর মুড বাছলেই রুট রেডি!", "Pick a starting point and a vibe and your route appears!"),
  routeFrom: l("শুরু: {place}", "Start: {place}"),
  routeAgain: l("🎲 অন্য রুট", "🎲 Another route"),
  routeUse: l("এই রুটটা আমার প্ল্যানে নাও →", "Use this route for my plan →"),
  routeFact: l("কাজের খবর", "Handy fact"),
  routeNote: l("রসিকতাগুলো আমাদের, তথ্য নয়। এলাকা-ভাগ মোটামুটি; সময় আর ভিড় আয়োজকদের ঘোষণা দেখে মিলিয়ে নিন।", "The jokes are ours, not data. Areas are rough; check timings and crowds with organisers."),
  builderH2: l("আমার পুজো প্ল্যান বানাও", "Build my Puja plan"),
  builderP: l("প্যান্ডেল বেছে নাও, সাজিয়ে নাও, তারপর কার্ড বানিয়ে বন্ধুদের পাঠাও।", "Pick pandals, put them in order, then make a card for your friends."),
  add: l("যোগ করো", "Add"),
  added: l("যোগ হয়েছে", "Added"),
  remove: l("সরাও", "Remove"),
  up: l("উপরে", "Move up"),
  down: l("নিচে", "Move down"),
  day: l("কোন দিন?", "Which day?"),
  anyDay: l("যেকোনো দিন", "Any day"),
  empty: l("এখনও কিছু বাছা হয়নি। উপরের রুট নাও বা তালিকা থেকে যোগ করো।", "Nothing picked yet. Use a route above or add from the list."),
  myPlan: l("তোমার প্ল্যান", "Your plan"),
  make: l("‘আমার পুজো প্ল্যান’ কার্ড বানাও", "Make my Puja plan card"),
  edit: l("প্ল্যান বদলাও", "Edit plan"),
  cardKicker: l("আমার পুজো প্ল্যান", "My Puja plan"),
  cardTitle: l("{of} পুজো প্ল্যান", "{of} Puja Plan"),
  planNote: l(
    "প্ল্যানটা লিঙ্কের মধ্যেই থাকে (নাম দিলে নামটাও), তাই লিঙ্ক যে খুলবে সে একই প্ল্যান দেখবে। খোলার সময় আর ভিড়ের খবর আয়োজকদের থেকে মিলিয়ে নিন।",
    "The plan travels inside the link (with your name, if you gave one), so whoever opens it sees the same plan. Check opening times and crowds with the organisers.",
  ),
  shareText: l("এই আমার পুজো প্ল্যান! কে কে আসছ?", "Here’s my Puja plan! Who’s in?"),
  directoryNote: l("ডিরেক্টরির বেশিরভাগ তথ্য ২০২৫ সংস্করণের; সাল সবসময় দেখানো আছে।", "Most directory details are from the 2025 edition; the year is always shown."),
  listH3: l("প্যান্ডেল বেছে নাও", "Pick pandals"),
  stat: l("হাঁটার উৎসাহ", "Walking spirit"),
} as const;

export const DAYS: { id: string; label: L }[] = [
  { id: "shashthi", label: l("ষষ্ঠী", "Shashthi") },
  { id: "saptami", label: l("সপ্তমী", "Saptami") },
  { id: "ashtami", label: l("অষ্টমী", "Ashtami") },
  { id: "navami", label: l("নবমী", "Navami") },
  { id: "dashami", label: l("দশমী", "Dashami") },
];

/** Card punchline by plan length. */
export function planPunchline(stops: number): L {
  if (stops <= 3) return l("আরামের প্ল্যান। পা দুটো আশীর্বাদ করবে!", "A comfy plan. Your feet will bless you!");
  if (stops <= 6) return l("জুতোটা আরামদায়ক তো? চার্জার নিতে ভুলো না!", "Comfy shoes? Don’t forget the charger!");
  return l("এই প্ল্যান শেষ করলে ম্যারাথনের মেডেল তোমার!", "Finish this plan and the marathon medal is yours!");
}

export interface Tradition {
  icon: string;
  title: L;
  text: L;
  source?: { title: string; url: string };
}

export const traditions: Record<Region, Tradition[]> = {
  wb: [
    { icon: "🥁", title: l("ঢাক আর ধুনুচি", "Dhak and dhunuchi"), text: l("সন্ধ্যারতিতে ঢাকের বোল আর ধুনুচি নাচ: এটাই পুজোর আসল সাউন্ডট্র্যাক।", "Evening aarti, dhak beats and the dhunuchi dance: the real Puja soundtrack.") },
    { icon: "🌼", title: l("অষ্টমীর অঞ্জলি", "Ashtami anjali"), text: l("সকালে অঞ্জলি, তারপর লুচি-আলুর দম। ‘কটার অঞ্জলি?’ — পাড়ার সবচেয়ে জরুরি প্রশ্ন।", "Morning anjali, then luchi and aloo dum. ‘What time is anjali?’ is the neighbourhood’s most urgent question.") },
    { icon: "🍛", title: l("ভোগ", "Bhog"), text: l("খিচুড়ি, লাবড়া, চাটনি, পায়েস। পাড়ার পুজোর ভোগের লাইনেই সেরা আড্ডা জমে।", "Khichuri, labra, chutney, payesh. The best adda happens in the neighbourhood bhog queue.") },
    { icon: "🚶", title: l("লাইন আর ভিড়", "Queues and crowds"), text: l("নামী থিম-পুজোয় লাইন লম্বা হয়। লাইনে দাঁড়িয়েই অনেকে তিনটে প্যান্ডেলের প্ল্যান বদলে ফেলেন।", "Big theme pujas mean long queues. Many people change their plan three times while still in one.") },
    { icon: "☕", title: l("আড্ডা", "Adda"), text: l("প্যান্ডেলের পাশে ভাঁড়ের চা আর আড্ডা ছাড়া পুজো অসম্পূর্ণ।", "No Puja is complete without clay-cup tea and adda by the pandal.") },
    { icon: "🏛️", title: l("বনেদি বাড়ির পুজো", "Old family pujas"), text: l("পুরনো বাড়ির পুজোয় পুরনো রীতির ছোঁয়া। ঢোকার নিয়ম বাড়িভেদে আলাদা, সম্মান রেখে যান।", "Old family pujas keep older rituals. Entry rules differ by house; visit respectfully.") },
    {
      icon: "🌍",
      title: l("ইউনেস্কোর স্বীকৃতি", "UNESCO recognition"),
      text: l("২০২১ সালে ‘কলকাতার দুর্গাপুজো’ ইউনেস্কোর মানবতার অধরা সাংস্কৃতিক ঐতিহ্যের তালিকায় উঠেছে।", "In 2021, ‘Durga Puja in Kolkata’ was inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity."),
      source: { title: "UNESCO: Durga Puja in Kolkata", url: "https://ich.unesco.org/en/RL/durga-puja-in-kolkata-00703" },
    },
  ],
  bd: [
    { icon: "🛕", title: l("ঢাকেশ্বরী জাতীয় মন্দির", "Dhakeshwari National Temple"), text: l("ঢাকার পুজোর কেন্দ্র। মহালয়া থেকেই প্রার্থনা আর ভিড় শুরু।", "The heart of Dhaka’s Puja; prayers and crowds begin from Mahalaya.") },
    { icon: "🐚", title: l("শাঁখারীবাজার", "Shankhari Bazar"), text: l("পুরান ঢাকার সরু গলিতে পরপর মণ্ডপ। ভিড়ে হাঁটতে হাঁটতেই মণ্ডপ-দর্শন।", "Old Dhaka’s narrow lanes with mandap after mandap; you see them on foot, in the crowd.") },
    { icon: "🍬", title: l("পুজোর খাবার", "Puja food"), text: l("নাড়ু, মোয়া, লুচি, খিচুড়ি। মণ্ডপ ঘোরার মাঝে মিষ্টির দোকানে একটা ‘ছোট্ট’ বিরতি।", "Naru, moa, luchi, khichuri, and a ‘short’ break at the sweet shop between mandaps.") },
    { icon: "🤝", title: l("সবার উৎসব", "Everyone’s festival"), text: l("অনেক মণ্ডপেই নানা ধর্ম আর বয়সের মানুষ ঘুরতে আসেন। আড্ডাটা সবার।", "Many mandaps welcome visitors of every faith and age. The adda belongs to everyone.") },
    { icon: "🧭", title: l("মণ্ডপ-ঘোরার টিপস", "Mandap-hopping tip"), text: l("ভিড়ে দল ছুটে যায়। আগেই একটা মিটিং-পয়েন্ট ঠিক করে রাখুন, ‘হারিয়ে যাওয়া GPS’ বন্ধুর জন্য।", "Groups split in crowds. Fix a meeting point in advance, for the friend who is the ‘lost GPS’.") },
  ],
};

