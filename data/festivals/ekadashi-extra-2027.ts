/**
 * Extra per-Ekadashi detail for the 24 Ekadashis of 2027 (keys match NAMES in lunar-2027.ts):
 *  - parana: the fast-breaking window, printed as-is by Drik Panchang's individual Ekadashi pages
 *    ("YYYY-MM-DD HH:MM-HH:MM", 24 h local time; converted from Drik's 12 h AM/PM, nothing computed).
 *    Kolkata = geoname-id 1275004, Dhaka = 1185241. Parana is for the day after the Smarta date.
 *    Drik's yearly list page prints no parana, so each Ekadashi's own page was used.
 *    Saphala falls twice in 2027; the entry is for 3 Jan. Drik prints the 23 Dec one too:
 *    Kolkata 2027-12-24 06:13-08:22, Dhaka 2027-12-24 06:38-08:46.
 *  - about: our own short wording; month/paksha/legend only where the source says it. The page used is aboutSource.
 *    Sources: Wikipedia articles where one exists (Pausha Putrada, Amalaka, Kamada, Varuthini, Nirjala, Shayani,
 *    Shravana Putrada, Prabodhini, Mokshada), else the Drik Panchang page for that Ekadashi
 *    (https://www.drikpanchang.com/ekadashis/.../...-ekadashi-date-time.html?year=2027).
 * Fetched 2 Nov 2026.
 */
import type { L } from "@/lib/i18n";

export const EKADASHI_EXTRA: Record<string, { parana: { kol?: string; dhaka?: string }; about: L; aboutSource: { title: string; url: string } }> = {
  saphala: {
    parana: { kol: "2027-01-04 06:17-08:27", dhaka: "2027-01-04 06:42-08:50" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ একে ‘অত্যন্ত পবিত্র ও ফলদায়ক’ ব্রত বলেছে, বিষ্ণুর উদ্দেশে পালিত। কথায় রাজা মহিষ্মানের পুত্র লুম্পক না জেনেই এই ব্রত করে আর সুবুদ্ধি ফিরে পায়।", en: "Drik Panchang calls this the most sacred and fruitful fast, kept for Vishnu. In the legend, King Mahishmana's son Lumpaka keeps it without knowing and gets good sense." },
    aboutSource: { title: "Drik Panchang: Saphala Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/saphala/saphala-ekadashi-date-time.html?year=2027" },
  },
  paushaPutrada: {
    parana: { kol: "2027-01-19 13:02-15:04", dhaka: "2027-01-19 13:32-15:25" },
    about: { bn: "পৌষ মাসের শুক্লপক্ষের একাদশী। সন্তানলাভের আশায় দম্পতিরা বিষ্ণুর পুজো করে এই দিনে উপোস করেন।", en: "The Ekadashi of the waxing moon in the month of Pausha. Couples fast and worship Vishnu on this day hoping for a son." },
    aboutSource: { title: "Wikipedia: Pausha Putrada Ekadashi", url: "https://en.wikipedia.org/wiki/Pausha_Putrada_Ekadashi" },
  },
  shattila: {
    parana: { kol: "2027-02-03 06:15-08:29", dhaka: "2027-02-03 06:38-08:52" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী এই দিনে এক ব্রাহ্মণীর কাহিনি পড়া ও শোনা হয়, যিনি কখনও দান করতেন না।", en: "Per Drik Panchang, on this fast people recite and hear the story of a Brahmini who never gave charity." },
    aboutSource: { title: "Drik Panchang: Shattila Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/shattila/shattila-ekadashi-date-time.html?year=2027" },
  },
  jaya: {
    parana: { kol: "2027-02-18 06:07-08:24", dhaka: "2027-02-18 06:30-08:47" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী এর কথায় গন্ধর্ব মাল্যবান আর পুষ্পবতী পিশাচ-দশা থেকে মুক্তি পান। ব্রতের পূর্ণ ফলের জন্য এই কথা পাঠ করতে বলা হয়েছে।", en: "Per Drik Panchang, its legend tells how the gandharva Malyavana and Pushpavati were freed from a pishacha state. The page says to recite this story for the full benefit of the fast." },
    aboutSource: { title: "Drik Panchang: Jaya Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/jaya/jaya-ekadashi-date-time.html?year=2027" },
  },
  vijaya: {
    parana: { kol: "2027-03-05 05:55-08:16", dhaka: "2027-03-05 06:17-08:38" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী লঙ্কা আক্রমণের সময় সাগর পার হতে শ্রীরাম এই একাদশীর ব্রত করেছিলেন। এর ফলে সসৈন্যে সাগর পেরিয়ে তিনি রাবণকে জয় করেন।", en: "Per Drik Panchang, Rama kept this fast to cross the ocean while attacking Lanka. It says he then crossed with his army and defeated Ravana." },
    aboutSource: { title: "Drik Panchang: Vijaya Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/vijaya/vijaya-ekadashi-date-time.html?year=2027" },
  },
  amalaki: {
    parana: { kol: "2027-03-19 07:12-08:07", dhaka: "2027-03-19 07:42-08:29" },
    about: { bn: "ফাল্গুন মাসের শুক্লপক্ষের একাদশী। বিশ্বাস, আমলকী গাছে বিষ্ণু বাস করেন, তাই এদিন গাছটির পুজো হয়। এই দিন থেকে হোলির মূল উৎসব শুরু ধরা হয়।", en: "The Ekadashi of the waxing moon in Phalguna. Vishnu is believed to live in the amla (gooseberry) tree, so the tree is worshipped today. It marks the start of the main Holi celebrations." },
    aboutSource: { title: "Wikipedia: Amalaka Ekadashi", url: "https://en.wikipedia.org/wiki/Amalaka_Ekadashi" },
  },
  papmochani: {
    parana: { kol: "2027-04-03 12:54-15:23", dhaka: "2027-04-03 13:16-15:46" },
    about: { bn: "পূর্ণিমান্ত পঞ্জিকায় চৈত্রের কৃষ্ণপক্ষের একাদশী। পুরাণ মতে এটি পাপ নাশ করে শুদ্ধি দেয়, তাই নাম পাপমোচনী।", en: "In the Purnimanta calendar, the Ekadashi of the waning moon in Chaitra. By Puranic belief it destroys sins and gives purification, hence the name Papmochani." },
    aboutSource: { title: "Drik Panchang: Papamochani Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/papmochani/papmochani-ekadashi-date-time.html?year=2027" },
  },
  kamada: {
    parana: { kol: "2027-04-18 05:14-07:42", dhaka: "2027-04-18 05:35-08:08" },
    about: { bn: "চৈত্র মাসের শুক্লপক্ষের একাদশী, চৈত্র নবরাত্রির পরের প্রথম একাদশী। নাম অনুযায়ী বিশ্বাস, এদিন ভক্তের সব কামনা পূর্ণ হয়।", en: "The Ekadashi of the waxing moon in Chaitra, the first one after Chaitra Navaratri. As the name suggests, it is believed that a devotee's desires are granted." },
    aboutSource: { title: "Wikipedia: Kamada Ekadashi", url: "https://en.wikipedia.org/wiki/Kamada_Ekadashi" },
  },
  varuthini: {
    parana: { kol: "2027-05-03 05:03-07:39", dhaka: "2027-05-03 05:23-08:00" },
    about: { bn: "কৃষ্ণপক্ষের একাদশী, চৈত্র বা বৈশাখ মাসে (অমান্ত বা পূর্ণিমান্ত পঞ্জিকা ভেদে)। এদিন বিষ্ণুর পঞ্চম অবতার বামনের পুজো হয়।", en: "An Ekadashi of the waning moon, in Chaitra or Vaishakha depending on the calendar. Vamana, Vishnu's fifth avatar, is worshipped." },
    aboutSource: { title: "Wikipedia: Varuthini Ekadashi", url: "https://en.wikipedia.org/wiki/Varuthini_Ekadashi" },
  },
  mohini: {
    parana: { kol: "2027-05-17 04:56-07:35", dhaka: "2027-05-17 05:16-07:55" },
    about: { bn: "বৈশাখ মাসের শুক্লপক্ষের একাদশী। দ্রিক পঞ্চাঙ্গ বলছে, কূর্ম পুরাণ মতে এই ব্রতে মোহজাল ও পাপ থেকে মুক্তি মেলে; বহু মন্দিরে এদিন বিষ্ণুর মোহিনী অবতারের পুজো হয়।", en: "The Ekadashi of the waxing moon in Vaishakha. Drik Panchang says that per the Kurma Purana the fast frees one from delusion and sin, and many temples worship Vishnu's Mohini avatar today." },
    aboutSource: { title: "Drik Panchang: Mohini Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/mohini/mohini-ekadashi-date-time.html?year=2027" },
  },
  apara: {
    parana: { kol: "2027-06-02 04:52-07:33", dhaka: "2027-06-02 05:11-07:53" },
    about: { bn: "পূর্ণিমান্ত পঞ্জিকায় জ্যৈষ্ঠের কৃষ্ণপক্ষের একাদশী (অমান্ত পঞ্জিকায় বৈশাখের)। দ্রিক পঞ্চাঙ্গ অনুযায়ী এই ব্রতের প্রভাবে মানুষ পাপমুক্ত হয়ে বৈকুণ্ঠলোকে স্থান পায়।", en: "The Ekadashi of the waning moon in Jyeshtha in the Purnimanta calendar (Vaishakha in the Amanta one). Per Drik Panchang, the fast frees people from sin and they reach Vaikuntha." },
    aboutSource: { title: "Drik Panchang: Apara Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/apara/apara-ekadashi-date-time.html?year=2027" },
  },
  nirjala: {
    parana: { kol: "2027-06-15 12:58-15:40", dhaka: "2027-06-15 13:20-16:03" },
    about: { bn: "জ্যৈষ্ঠ মাসের শুক্লপক্ষের একাদশী। জল পর্যন্ত না খেয়ে উপোস করা হয় বলে নাম নির্জলা; সব একাদশীর মধ্যে সবচেয়ে কঠিন ও পবিত্র বলে ধরা হয়।", en: "The Ekadashi of the waxing moon in Jyeshtha. The fast is kept without even water, hence the name. It is seen as the most austere and most sacred of the Ekadashis." },
    aboutSource: { title: "Wikipedia: Nirjala Ekadashi", url: "https://en.wikipedia.org/wiki/Nirjala_Ekadashi" },
  },
  yogini: {
    parana: { kol: "2027-07-01 04:55-07:37", dhaka: "2027-07-01 05:15-07:58" },
    about: { bn: "উত্তর ভারতীয় পঞ্জিকায় আষাঢ়ের কৃষ্ণপক্ষের একাদশী। দ্রিক পঞ্চাঙ্গ অনুযায়ী এই উপোসে সব পাপ ধুয়ে যায়; এর কথায় কুবেরের যক্ষ হেমমালীর গল্প আছে।", en: "The Ekadashi of the waning moon in Ashadha in the North Indian calendar. Per Drik Panchang, the fast washes away sins; its story is about Hemamali, a yaksha of Kubera." },
    aboutSource: { title: "Drik Panchang: Yogini Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/yogini/yogini-ekadashi-date-time.html?year=2027" },
  },
  devshayani: {
    parana: { kol: "2027-07-15 05:01-07:41", dhaka: "2027-07-15 05:20-08:02" },
    about: { bn: "আষাঢ় মাসের শুক্লপক্ষের একাদশী। বৈষ্ণবদের বিশ্বাস, এদিন থেকে বিষ্ণুর যোগনিদ্রা শুরু হয়।", en: "The Ekadashi of the waxing moon in Ashadha. Vaishnavas believe Vishnu's sleep begins on this day." },
    aboutSource: { title: "Wikipedia: Shayani Ekadashi", url: "https://en.wikipedia.org/wiki/Shayani_Ekadashi" },
  },
  kamika: {
    parana: { kol: "2027-07-30 13:02-15:40", dhaka: "2027-07-30 13:24-16:03" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী দেবর্ষি নারদের অনুরোধে ভীষ্ম পিতামহ এই একাদশীর মাহাত্ম্য বর্ণনা করেছিলেন।", en: "Per Drik Panchang, Bhishma described the greatness of this Ekadashi at the request of the sage Narada." },
    aboutSource: { title: "Drik Panchang: Kamika Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/kamika/kamika-ekadashi-date-time.html?year=2027" },
  },
  shravanaPutrada: {
    parana: { kol: "2027-08-13 12:59-15:35", dhaka: "2027-08-13 13:21-15:57" },
    about: { bn: "শ্রাবণ মাসের শুক্লপক্ষের একাদশী, পবিত্রা একাদশী নামেও পরিচিত। বিষ্ণুর পুজো করে বহুদিন পুত্রহীন দম্পতিরা বিশেষ করে এদিন চব্বিশ ঘণ্টা উপোস করেন।", en: "The Ekadashi of the waxing moon in Shravana, also called Pavitra Ekadashi. A 24-hour fast and Vishnu worship are kept, especially by couples long without a son." },
    aboutSource: { title: "Wikipedia: Shravana Putrada Ekadashi", url: "https://en.wikipedia.org/wiki/Shravana_Putrada_Ekadashi" },
  },
  aja: {
    parana: { kol: "2027-08-29 05:18-07:50", dhaka: "2027-08-29 05:39-08:11" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী এর ব্রতকথায় রাজা হরিশ্চন্দ্র আর গৌতম ঋষির কাহিনি বলা হয়।", en: "Per Drik Panchang, its fast story is the tale of King Harishchandra and the sage Gautama." },
    aboutSource: { title: "Drik Panchang: Aja Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/aja/aja-ekadashi-date-time.html?year=2027" },
  },
  parsva: {
    parana: { kol: "2027-09-12 05:22-07:50", dhaka: "2027-09-12 05:44-08:12" },
    about: { bn: "ভাদ্র মাসের শুক্লপক্ষের একাদশী। দ্রিক পঞ্চাঙ্গ বলছে, চাতুর্মাস্যে এদিন বিষ্ণু শুয়ে শুয়েই পাশ ফেরেন, তাই নাম পরিবর্তিনী।", en: "The Ekadashi of the waxing moon in Bhadrapada. Drik Panchang says that during Chaturmasya Vishnu turns to the other side while resting today, hence the name Parivartini." },
    aboutSource: { title: "Drik Panchang: Parivartini Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/parivartini/parivartini-ekadashi-date-time.html?year=2027" },
  },
  indira: {
    parana: { kol: "2027-09-27 05:27-07:51", dhaka: "2027-09-27 05:48-08:13" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী রাজা ইন্দ্রসেন নারদের নির্দেশে এই ব্রত করে নিজের পিতাকে যমলোক থেকে মুক্ত করেন।", en: "Per Drik Panchang, King Indrasen kept this fast on Narada's advice and freed his father from Yamaloka." },
    aboutSource: { title: "Drik Panchang: Indira Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/indira/indira-ekadashi-date-time.html?year=2027" },
  },
  papankusha: {
    parana: { kol: "2027-10-12 05:32-07:52", dhaka: "2027-10-12 05:54-08:14" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী শ্রীকৃষ্ণ অর্জুনকে এই একাদশী ব্রতের মাহাত্ম্য বুঝিয়েছিলেন।", en: "Per Drik Panchang, Krishna explained the importance of this Ekadashi fast to Arjuna." },
    aboutSource: { title: "Drik Panchang: Papankusha Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/papankusha/papankusha-ekadashi-date-time.html?year=2027" },
  },
  rama: {
    parana: { kol: "2027-10-26 12:29-14:46", dhaka: "2027-10-26 12:50-15:07" },
    about: { bn: "দ্রিক পঞ্চাঙ্গ অনুযায়ী এর কথায় চন্দ্রভাগা এই ব্রত করেন আর তার ফলে শোভনকে মৃত্যুর মুখ থেকে ফিরিয়ে আনা হয়।", en: "Per Drik Panchang, in its story Chandrabhaga keeps this fast and Shobhana is brought back from the jaws of death." },
    aboutSource: { title: "Drik Panchang: Rama Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/rama/rama-ekadashi-date-time.html?year=2027" },
  },
  devutthana: {
    parana: { kol: "2027-11-11 05:46-08:00", dhaka: "2027-11-11 06:10-08:23" },
    about: { bn: "কার্তিক মাসের শুক্লপক্ষের একাদশী। বিশ্বাস, চার মাসের চাতুর্মাস্য শেষে এদিন বিষ্ণু ঘুম থেকে জাগেন; এর পর থেকে বিয়ের মরসুম শুরু ধরা হয়।", en: "The Ekadashi of the waxing moon in Kartika. Vishnu is believed to wake today, ending the four-month Chaturmasya, and the wedding season begins." },
    aboutSource: { title: "Wikipedia: Prabodhini Ekadashi", url: "https://en.wikipedia.org/wiki/Prabodhini_Ekadashi" },
  },
  utpanna: {
    parana: { kol: "2027-11-25 05:56-08:07", dhaka: "2027-11-25 06:19-08:30" },
    about: { bn: "কার্তিক পূর্ণিমার পরের কৃষ্ণপক্ষের একাদশী। একাদশী ব্রতের উৎপত্তির সঙ্গে জড়িত বলে গুরুত্বপূর্ণ; বছরভর একাদশী করতে চাইলে অনেকে এদিন থেকেই শুরু করেন।", en: "The Ekadashi of the waning moon after Kartik Purnima. It is linked to the origin of Ekadashi fasting, and those who pledge to fast all year begin here." },
    aboutSource: { title: "Drik Panchang: Utpanna Ekadashi 2027", url: "https://www.drikpanchang.com/ekadashis/utpanna/utpanna-ekadashi-date-time.html?year=2027" },
  },
  mokshada: {
    parana: { kol: "2027-12-10 12:34-14:43", dhaka: "2027-12-10 12:55-15:04" },
    about: { bn: "অগ্রহায়ণ (মার্গশীর্ষ) মাসের শুক্লপক্ষের একাদশী। পাপমুক্তি ও মৃত্যুর পর মোক্ষলাভের আশায় বিষ্ণুর পুজো হয়; এটি গীতা জয়ন্তীর দিনও।", en: "The Ekadashi of the waxing moon in Margashirsha (Agrahayana). Vishnu is worshipped for freedom from sin and moksha after death. It is also Gita Jayanti." },
    aboutSource: { title: "Wikipedia: Mokshada Ekadashi", url: "https://en.wikipedia.org/wiki/Mokshada_Ekadashi" },
  },
};

/** Drik's own page for each Ekadashi (where the parana windows were read), "<folder>/<file>" under /ekadashis/. */
export const DRIK_EKADASHI_PAGE: Record<string, string> = {
  saphala: "saphala/saphala", paushaPutrada: "putrada/pausha-putrada", shattila: "shattila/shattila", jaya: "jaya/jaya",
  vijaya: "vijaya/vijaya", amalaki: "amalaki/amalaki", papmochani: "papmochani/papmochani", kamada: "kamada/kamada",
  varuthini: "varuthini/varuthini", mohini: "mohini/mohini", apara: "apara/apara", nirjala: "nirjala/nirjala",
  yogini: "yogini/yogini", devshayani: "devshayani/devshayani", kamika: "kamika/kamika", shravanaPutrada: "putrada/shravana-putrada",
  aja: "aja/aja", parsva: "parivartini/parivartini", indira: "indira/indira", papankusha: "papankusha/papankusha",
  rama: "rama/rama", devutthana: "prabodhini/prabodhini", utpanna: "utpanna/utpanna", mokshada: "mokshada/mokshada",
};

/** Saphala falls twice in 2027; parana for the second one (23 Dec), from the same Drik page. */
export const PARANA_BY_DATE: Record<string, { kol: string; dhaka: string }> = {
  "2027-12-23": { kol: "2027-12-24 06:13-08:22", dhaka: "2027-12-24 06:38-08:46" },
};
