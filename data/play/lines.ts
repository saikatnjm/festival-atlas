import type { L } from "@/lib/i18n";
import type { ActivityMeta } from "./types";

export const meta: ActivityMeta = {
  slug: "puja-lines",
  kind: "generator",
  title: { bn: "ক্যাপশন, অজুহাত আর রিলের আইডিয়া", en: "Captions, Excuses & Reel Ideas" },
  tagline: {
    bn: "এক ট্যাপেই ফাটাফাটি ক্যাপশন, পাকা অজুহাত, বা আজকের রিলের আইডিয়া!",
    en: "One tap for a killer caption, a rock-solid excuse, or today’s reel idea!",
  },
  kicker: { bn: "পুজোর কথা", en: "Puja talk" },
  description: {
    bn: "এক ট্যাপেই পুজোর ছবির মজার ক্যাপশন, দেরির পাকা অজুহাত, কিংবা আজ কী রিল বানাবে তার আইডিয়া। কপি করো বা বন্ধুদের গ্রুপে পাঠিয়ে দাও।",
    en: "One tap for a funny Puja photo caption, a rock-solid excuse for being late, or an idea for today's reel. Copy it or send it to your group.",
  },
  chars: ["selfie", "excuse"],
};

// Index-based on purpose: the same pair of numbers gives the same line in both languages.
export const captionScenes: L[] = [
  { bn: "সপ্তমীর সন্ধ্যা, একটা মণ্ডপ, দশটা ছবি।", en: "Saptami evening, one pandal, ten photos." },
  { bn: "ঢাকের বোল, ধুনুচির ধোঁয়া, আর আমি ঠিক মাঝখানে।", en: "Beats of the dhak, smoke of the dhunuchi, and me right in the middle." },
  { bn: "নতুন জামা, পুরনো বন্ধু, সেই একই লাইন।", en: "New outfit, old friends, the same old lines." },
  { bn: "বারোটা মণ্ডপ ঘুরেছি, মনে আছে তিনটে।", en: "Visited twelve pandals, remember three." },
  { bn: "আগে ভোগ, পরে দর্শন।", en: "Bhog first, darshan later." },
  { bn: "সোনালি আলো, সোনালি প্রতিমা, সোনালি মেজাজ।", en: "Golden light, golden idol, golden mood." },
  { bn: "চোখ প্রতিমায়, মন খিচুড়িতে।", en: "Eyes on the idol, mind on the khichuri." },
  { bn: "অষ্টমীর অঞ্জলি দিয়ে এলাম, এবার ফুচকার অঞ্জলি।", en: "Done with the Ashtami anjali, now it's the fuchka anjali." },
];

export const captionPunchlines: L[] = [
  { bn: "আমার পা মামলা করবে।", en: "My feet will sue me." },
  { bn: "লাইনের গল্প পরে বলব।", en: "I'll tell the queue story later." },
  { bn: "আফসোস নেই, শুধু ফোসকা।", en: "No regrets, only blisters." },
  { bn: "ছবির ক্রেডিট: যিনি ফোনটা ধরেছিলেন।", en: "Photo credit: whoever held the phone." },
  { bn: "কাল আবার আসছি।", en: "Coming back tomorrow." },
  { bn: "মণ্ডপ ছিল অজুহাত, আড্ডাটাই আসল প্ল্যান।", en: "The pandal was the excuse; the adda is the real plan." },
  { bn: "ঠাকুরও হাসছেন, ফিল্টার ছাড়াই।", en: "Even the goddess is smiling, no filter needed." },
  { bn: "ভিড় নেই কারণ আমি ক্রপ করেছি।", en: "No crowd here because I cropped it out." },
];

export const excuseOpeners: L[] = [
  { bn: "দেরির জন্য দুঃখিত, কিন্তু", en: "Sorry I'm late, but" },
  { bn: "শোন, আগে পুরোটা শোন:", en: "Listen, hear the whole thing first:" },
  { bn: "সত্যি বলছি:", en: "Honestly:" },
  { bn: "সরকারি বিবৃতি:", en: "Official statement:" },
  { bn: "আমার পক্ষে বলার আছে:", en: "In my defence:" },
  { bn: "দোষ ঢাকের:", en: "Blame the dhak:" },
  { bn: "ঘটনাটা এই রকম:", en: "Here's what happened:" },
  { bn: "বিশ্বাস কর,", en: "Believe me," },
];

export const excuseReasons: L[] = [
  { bn: "লাইন এক ঘণ্টায় এক ধাপ এগোল।", en: "the queue moved one step in an hour." },
  { bn: "আমি শুধু এক প্লেট ভোগ খেতে গিয়েছিলাম।", en: "I only went to have one plate of bhog." },
  { bn: "ম্যাপে তিনটে মণ্ডপ কাছে মনে হয়েছিল।", en: "three pandals looked close on the map." },
  { bn: "গ্রুপ ছবির জন্য চৌদ্দবার রিটেক লাগল।", en: "the group photo needed fourteen retakes." },
  { bn: "ঢাকের শব্দ ধরে ধরে হারিয়ে গেলাম।", en: "I followed the sound of the dhak and got lost." },
  { bn: "ফোন বলল পাঁচ মিনিট, পা বলল পঞ্চাশ।", en: "the phone said five minutes, my feet said fifty." },
  { bn: "কেউ মিষ্টি দিল, আমি তো অভদ্র নই।", en: "someone offered sweets and I'm not rude." },
  { bn: "আমার চটি অন্য কেউ পরে চলে গিয়েছিল।", en: "someone else walked off wearing my slippers." },
];

// Reel ideas: a shot to film + a twist for the last second. Evergreen formats people actually film at
// Puja (transitions, POVs, queue humour), not claims about what is trending on any platform.
export const reelShots: L[] = [
  { bn: "ঢাকের বিটে ট্রানজিশন: ঘরের জামা → পুজোর শাড়ি/পাঞ্জাবি।", en: "Transition on the dhak beat: home clothes → Puja saree or panjabi." },
  { bn: "POV: অষ্টমীর অঞ্জলি, হাতে ফুল, পেছনে ঢাক।", en: "POV: Ashtami anjali, flowers in hand, dhak behind you." },
  { bn: "ধুনুচি নাচের স্লো-মো, ধোঁয়ার মধ্যে দিয়ে ক্যামেরা।", en: "Dhunuchi dance in slow motion, camera moving through the smoke." },
  { bn: "প্যান্ডেল-হপিং টাইমল্যাপস: এক রাতে পাঁচ মণ্ডপ, এক মিনিটে।", en: "Pandal-hopping timelapse: five pandals in one night, in one minute." },
  { bn: "লাইনের ‘আগে/পরে’: ঢোকার আগে ফ্রেশ, বেরিয়ে এসে…", en: "Queue ‘before/after’: fresh going in, and coming out…" },
  { bn: "ভোগের প্লেট টপ-শট, খিচুড়ি থেকে পায়েস পর্যন্ত প্যান।", en: "Top shot of the bhog plate, panning from khichuri to payesh." },
  { bn: "মহালয়ার ভোর ৪টে: ঘুমন্ত মুখ, রেডিও, এক কাপ চা।", en: "Mahalaya 4 a.m.: sleepy face, the radio, one cup of tea." },
  { bn: "প্রবাসে পুজো: বিদেশের রাস্তা থেকে প্যান্ডেলের দরজায় এক কাট।", en: "Puja abroad: one cut from a foreign street into the pandal door." },
  { bn: "বন্ধুদের ‘কে কী’ রোল-কল: ক্যামেরা ঘুরবে, প্রত্যেকের একটা রোল।", en: "Friends’ ‘who’s who’ roll call: pan the camera, one role each." },
  { bn: "ফুচকা চ্যালেঞ্জ: কে কতগুলো, শেষে চোখে জল কার?", en: "Phuchka challenge: who eats how many, and whose eyes water first?" },
];

export const reelTwists: L[] = [
  { bn: "শেষ সেকেন্ডে: চটি ছিঁড়ে গেছে।", en: "Last second: the slipper snaps." },
  { bn: "শেষ সেকেন্ডে: ‘পরে দেব’ বন্ধু বিল দেখে পালাল।", en: "Last second: the ‘pay-you-later’ friend sees the bill and runs." },
  { bn: "শেষ সেকেন্ডে: মা ফোন করে ‘কখন ফিরবি?’", en: "Last second: Ma calls, ‘When are you coming home?’" },
  { bn: "শেষ সেকেন্ডে: ঠাকুরের বদলে ক্যামেরায় শুধু কারও মাথা।", en: "Last second: instead of the idol, the camera gets someone’s head." },
  { bn: "শেষ সেকেন্ডে: বৃষ্টি। সবাই এক ছাতার নিচে।", en: "Last second: rain. Everyone under one umbrella." },
  { bn: "শেষ সেকেন্ডে: ফোনের ব্যাটারি ১%।", en: "Last second: phone battery at 1%." },
  { bn: "শেষ সেকেন্ডে: লাইনে দাঁড়িয়েই ঘুমিয়ে পড়া বন্ধু।", en: "Last second: the friend who fell asleep standing in the queue." },
  { bn: "শেষ সেকেন্ডে: ক্যাপশন ‘রিপিট নেক্সট ইয়ার’।", en: "Last second: caption ‘repeat next year’." },
];
