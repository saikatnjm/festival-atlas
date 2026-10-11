import type { ActivityMeta } from "./types";

/** Group card: friends' names in, funny squad roles out. Content lives in personal.ts. */
export const meta: ActivityMeta = {
  slug: "puja-squad",
  kind: "group",
  title: { bn: "পুজো-দলের রোল কার্ড", en: "Puja Squad Role Card" },
  tagline: {
    bn: "কে আসল নেতা, কে রাত ৩টের ফুচকা বাহিনী, আর কে হারিয়ে যাওয়া GPS? দলের কার্ড বানাও!",
    en: "Who’s the real leader, who’s on the 3 a.m. phuchka squad and who’s the lost GPS? Make your squad card!",
  },
  kicker: { bn: "আমাদের পুজো-দল", en: "Our Puja squad" },
  description: {
    bn: "বন্ধুদের নাম লিখে পুজো-দলের মজার রোল কার্ড বানাও: আসল নেতা, আড্ডা কমিটি সভাপতি, ভোগ-লাইনের ক্যাপ্টেন। কোনো অ্যাকাউন্ট লাগে না।",
    en: "Type your friends’ names and get a funny Puja squad card: the real leader, the adda committee president, the bhog queue captain. No account needed.",
  },
  chars: ["bagha", "bhog"],
};
