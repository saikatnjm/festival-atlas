import type { L } from "@/lib/i18n";
import type { ActivityMeta } from "./types";

export const meta: ActivityMeta = {
  slug: "puja-lines",
  kind: "generator",
  title: { bn: "পুজোর ক্যাপশন আর অজুহাত", en: "Puja Captions and Excuses" },
  tagline: {
    bn: "এক ট্যাপেই ফাটাফাটি ক্যাপশন বা পাকা অজুহাত!",
    en: "One tap for a killer caption or a rock-solid excuse!",
  },
  kicker: { bn: "পুজোর কথা", en: "Puja talk" },
  description: {
    bn: "এক ট্যাপেই পুজোর ছবির মজার ক্যাপশন, কিংবা প্যান্ডেল-হপিংয়ে দেরির জন্য পাকা অজুহাত বানিয়ে ফেলো। তারপর কপি করো বা বন্ধুদের গ্রুপে পাঠিয়ে দাও।",
    en: "Generate a funny caption for your Puja photos, or a rock-solid excuse for being late while pandal-hopping, in one tap. Copy it or send it to your group.",
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
