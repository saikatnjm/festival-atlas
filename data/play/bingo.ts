import type { L } from "@/lib/i18n";
import type { ActivityMeta, PlayResult } from "./types";

export const meta: ActivityMeta = {
  slug: "puja-bingo",
  kind: "bingo",
  title: { bn: "পুজো বিঙ্গো", en: "Puja Bingo" },
  tagline: {
    bn: "পুজোয় যা যা ঘটে, মিলিয়ে নাও। একটা লাইন মিললেই পাবে চরিত্র!",
    en: "Tick off what happens at Puja. Complete one line and get your character!",
  },
  kicker: { bn: "পুজো বিঙ্গো", en: "Puja Bingo" },
  description: {
    bn: "পুজোর চেনা মুহূর্ত দিয়ে সাজানো বিঙ্গো কার্ড: ঢাকের বোল, ভোগের লাইন, ফোনে ১% চার্জ। ঘর ভরাও, লাইন মেলাও, নিজের চরিত্র পাও, আর কার্ডটা বন্ধুকে পাঠাও।",
    en: "A bingo card of familiar Puja moments: dhak beats, bhog queues, 1% phone battery. Fill the squares, complete lines, get your character and share it.",
  },
  chars: ["bhog", "sleepy", "broke"],
};

export const SIZE = 4;

export interface BingoItem {
  icon: string;
  text: L;
}

/** More than SIZE*SIZE, so every card is a different mix. */
export const items: BingoItem[] = [
  { icon: "🥁", text: { bn: "ঢাক শুনে পা নেচে ওঠা", en: "Feet dancing at the sound of dhak" } },
  { icon: "🍛", text: { bn: "ভোগের লাইনে দাঁড়ানো", en: "Standing in the bhog queue" } },
  { icon: "🤳", text: { bn: "প্রতিমার সামনে সেলফি", en: "A selfie in front of the idol" } },
  { icon: "👟", text: { bn: "পায়ে ফোসকা", en: "Blisters on your feet" } },
  { icon: "🍬", text: { bn: "“শুধু একটু চেখে দেখা”", en: "“Just a little taste”" } },
  { icon: "☔", text: { bn: "ছাতা ভাগাভাগি", en: "Sharing an umbrella" } },
  { icon: "🔋", text: { bn: "ফোনে ১% চার্জ", en: "Phone at 1%" } },
  { icon: "👗", text: { bn: "নতুন জামায় প্রথম ঘাম", en: "First sweat on the new outfit" } },
  { icon: "🧭", text: { bn: "গলিতে হারিয়ে যাওয়া", en: "Getting lost in the lanes" } },
  { icon: "🎡", text: { bn: "নাগরদোলায় চড়া", en: "A ride on the giant wheel" } },
  { icon: "👵", text: { bn: "“কত বড় হয়ে গেছিস!”", en: "“You've grown so big!”" } },
  { icon: "😴", text: { bn: "ঠাকুর দেখতে দেখতে হাই", en: "Yawning mid-darshan" } },
  { icon: "🥟", text: { bn: "ফুচকা: “আর একটা!”", en: "Fuchka: “One more!”" } },
  { icon: "🔔", text: { bn: "আরতির ঘণ্টায় থমকে যাওয়া", en: "Freezing at the aarti bell" } },
  { icon: "🪔", text: { bn: "ধুনুচি নাচ দেখা", en: "Watching the dhunuchi dance" } },
  { icon: "🚕", text: { bn: "ক্যাবের ডাবল ভাড়া", en: "Double cab fare" } },
  { icon: "👯", text: { bn: "“আর একটা মণ্ডপ!”", en: "“One more pandal!”" } },
  { icon: "🎈", text: { bn: "বেলুনের বায়না", en: "Begging for a balloon" } },
  { icon: "🙋", text: { bn: "হঠাৎ চেনা মুখ", en: "Running into a familiar face" } },
  { icon: "📷", text: { bn: "“একটা ছবি তুলে দেবেন?”", en: "“Could you take a photo for us?”" } },
];

/** Shown after each tap, cycling through. */
export const reactions: L[] = [
  { bn: "আরে, এটা তো আমারও হয়েছে!", en: "Hey, this happened to me too!" },
  { bn: "সিল পড়ে গেল!", en: "Stamp stuck!" },
  { bn: "পুজোর একদম খাঁটি মুহূর্ত।", en: "A truly authentic Puja moment." },
  { bn: "বন্ধুদের ট্যাগ করার সময়!", en: "Time to tag your friends!" },
  { bn: "কার্ডে আরেকটা ঝকঝকে সিল।", en: "Another shiny stamp on the card." },
  { bn: "সবাই বলবে, “আরে হ্যাঁ!”", en: "Everyone will say, “Oh yes!”" },
  { bn: "আজ রাতের জন্য এটুকুই যথেষ্ট!", en: "That's enough for tonight!" },
  { bn: "এই না হলে পুজো!", en: "This is what Puja is all about!" },
];

export const results: PlayResult[] = [
  {
    id: "one-line",
    char: "sleepy",
    mood: "happy",
    title: { bn: "এক-লাইন বাবাই", en: "One-Line Babai" },
    punchline: { bn: "“একটা লাইনেই আমার ঘুম পেয়ে গেল!”", en: "“One line and I'm already sleepy!”" },
    blurb: {
      bn: "একটা লাইন মিলতেই আপনি বেঞ্চ খুঁজতে বসলেন। পুজোর অর্ধেকটাই তো বসে বসে দেখা।",
      en: "One line matched and you went looking for a bench. Half of Puja is sitting and watching, after all.",
    },
    stat: { label: { bn: "বিঙ্গো-লাইন", en: "Bingo lines" }, value: 10 },
  },
  {
    id: "few-lines",
    char: "selfie",
    mood: "proud",
    title: { bn: "বিঙ্গো-রিনি", en: "Bingo Rini" },
    punchline: { bn: "“সব মিলিয়ে নিলাম, ফ্রেমে সব আছে!”", en: "“Matched it all, it's all in the frame!”" },
    blurb: {
      bn: "একসঙ্গে কয়েকটা লাইন মিলিয়ে ফেললেন! চোখ আপনার ফোনের মতোই দ্রুত, শুধু ব্যাটারিটা একটু কম।",
      en: "You matched several lines at once! Your eyes are as quick as your phone, just with a little less battery.",
    },
    stat: { label: { bn: "বিঙ্গো-লাইন", en: "Bingo lines" }, value: 30 },
  },
  {
    id: "bingo-boss",
    char: "bhog",
    mood: "proud",
    title: { bn: "বিঙ্গো-সম্রাট বুম্বা", en: "Bingo Emperor Bumba" },
    punchline: { bn: "“সব ঘর ভরে গেছে, পেটও!”", en: "“Every square is full, so is my tummy!”" },
    blurb: {
      bn: "চার-চারটে লাইন! আপনি পুজো দেখেননি, পুজোই আপনাকে দেখেছে। আজকের মুকুট আপনার।",
      en: "Four whole lines! You didn't watch Puja, Puja watched you. Today's crown is yours.",
    },
    stat: { label: { bn: "বিঙ্গো-লাইন", en: "Bingo lines" }, value: 70 },
  },
];
