// Blog: Upanayana (paite). Facts from Wikipedia "Upanayana", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Upanayana", url: "https://en.wikipedia.org/wiki/Upanayana" };

export const UPANAYAN: Article = {
  slug: "upanayan-paite-sacred-thread",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("উপনয়ন বা পৈতে: পবিত্র সুতোর অনুষ্ঠান", "Upanayan (Paite): the Sacred Thread Rite"),
  description: l(
    "উপনয়ন বা পৈতে কী, নামের অর্থ, বয়স, পবিত্র সুতো, গায়ত্রী মন্ত্র আর ব্রহ্মচর্যের সূচনা।",
    "What Upanayana (paite) is, the meaning of the name, the age, the sacred thread, the Gayatri Mantra and the start of brahmacharya.",
  ),
  h1: l("উপনয়ন: বাংলায় যাকে পৈতে বলি", "Upanayana: what Bengal calls paite"),
  lead: l(
    "পৈতে বা উপনয়ন হিন্দু সংস্কারগুলোর একটি, বিদ্যার্জনের পথে ছেলের দীক্ষা।",
    "Paite, or Upanayana, is a Hindu rite of initiation that leads a child towards learning.",
  ),
  icon: "🧵",
  body: [
    { kind: "h2", text: l("উপনয়ন মানে কী", "What Upanayana means") },
    {
      kind: "p",
      text: l(
        "উপনয়নকে প্রায়ই দীক্ষা বলে অনুবাদ করা হয়। শব্দটি এসেছে নী ধাতু (নিয়ে যাওয়া) আর উপ উপসর্গ (কাছে) থেকে, অর্থাৎ কাছে নিয়ে যাওয়া। এতে বোঝানো হয় শিশুকে বিদ্যালয় আর শিক্ষার দিকে টেনে আনা। বাংলায় এই অনুষ্ঠানকে পৈতে বলে।",
        "Upanayana is often translated as initiation. It comes from the root ni (to lead) with the prefix upa (near), so roughly leading near. It symbolises a child being drawn toward school and education. In Bangla the rite is called poite (পৈতে).",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("বয়স", "Age") },
    {
      kind: "p",
      text: l(
        "মধ্যযুগের গ্রন্থে সাধারণত ব্রাহ্মণের জন্য ৮, ক্ষত্রিয়ের জন্য ১১ আর বৈশ্যের জন্য ১২ বছর ধরা হয়েছে। একটি গ্রন্থে সর্বোচ্চ ২৪ বছর বলা আছে, অন্যগুলোতে বয়সের সীমা নেই। আধুনিক কালে যে কেউ, যে কোনো বয়সে এটি করতে পারে।",
        "Medieval texts typically set the age at 8 for Brahmanas, 11 for Kshatriyas and 12 for Vaishyas. One text sets a maximum of 24, while others impose no age limit. In the modern era it is open to anyone at any age.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("পবিত্র সুতো আর গায়ত্রী মন্ত্র", "The sacred thread and the Gayatri Mantra") },
    {
      kind: "p",
      text: l(
        "যজ্ঞোপবীত বা পৈতেতে তিনটি সুতির ধাপ থাকে, প্রতিটিতে নয়টি করে তন্তু। এটি বাঁ কাঁধ থেকে ডান বাহুর নিচ দিয়ে পরা হয়। পণ্ডিতরা বলেন, সময়ের সঙ্গে সুতো অনুষ্ঠানের মূল অংশ হয়ে উঠেছে; আগে উত্তরীয় ব্যবহার হতো, আর গ্রন্থে সবসময় সুতো পরার নির্দেশ নেই। প্রকৃত দীক্ষা হতো গায়ত্রী মন্ত্র পাঠের সময়।",
        "The thread has three cotton strands of nine strands each and is worn from the left shoulder to under the right arm. Scholars note that the thread became a key feature of the ceremony over time. Earlier an upper garment was used, and the texts do not require the thread to be worn at all times. The actual initiation occurred during the recitation of the Gayatri Mantra.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ব্রহ্মচর্য আর ভিক্ষা", "Brahmacharya and alms") },
    {
      kind: "p",
      text: l(
        "এই অনুষ্ঠান ব্রহ্মচারী হিসেবে নিয়মবদ্ধ নতুন জীবনের শুরু। অনুষ্ঠানের গুরুত্বপূর্ণ অংশ হয়ে দাঁড়িয়েছে ভিক্ষা। নেপালে ছেলে গুরুর আশ্রমে যাওয়ার আগে আত্মীয়দের কাছে প্রথম ভিক্ষা করে।",
        "The rite marks the start of a new, disciplined life as a brahmachari. Ceremonial alms-begging became an important part of it. In Nepal the boy makes a first alms round to relatives before leaving for the guru's ashram.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "পরিবারের প্রথা আর শুভ দিন পুরোহিতের কাছ থেকে জেনে নাও। আমাদের বিবাহ আর গৃহপ্রবেশের তালিকার মতো উপনয়নের তারিখ-তালিকা এখানে নেই।",
        "Learn your family's custom and the auspicious day from the priest. We do not have a date list for Upanayana like our wedding and griha pravesh lists.",
      ),
    },
  ],
  faq: [
    {
      q: l("পৈতে মানে কী", "What is paite"),
      a: l("উপনয়ন অনুষ্ঠানের বাংলা নাম, যেখানে ছেলে পবিত্র সুতো পরে বিদ্যার পথে দীক্ষা নেয়।", "The Bangla name for the Upanayana rite, an initiation toward learning with the sacred thread."),
    },
    {
      q: l("উপনয়নের বয়স কত", "Upanayana age"),
      a: l("মধ্যযুগের গ্রন্থে ব্রাহ্মণের ৮, ক্ষত্রিয়ের ১১, বৈশ্যের ১২ বছর; আধুনিক কালে যে কোনো বয়সে।", "Medieval texts say 8 for Brahmanas, 11 for Kshatriyas, 12 for Vaishyas; in the modern era any age."),
    },
    {
      q: l("পৈতের সুতোয় কয়টি তন্তু", "How many strands in the sacred thread"),
      a: l("তিনটি সুতির ধাপ, প্রতিটিতে নয়টি তন্তু।", "Three cotton strands of nine strands each."),
    },
    {
      q: l("গায়ত্রী মন্ত্রের ভূমিকা কী", "Role of the Gayatri Mantra in Upanayana"),
      a: l("প্রকৃত দীক্ষা হতো গায়ত্রী মন্ত্র পাঠের সময়।", "The actual initiation occurred during its recitation."),
    },
  ],
  related: [
    { href: "/blog/annaprashan-mukhe-bhaat", label: l("অন্নপ্রাশন", "Annaprashan") },
    { href: "/blog/bengali-hindu-wedding-rituals", label: l("বাঙালি বিয়ের রীতি", "Bengali wedding rituals") },
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027") },
  ],
  sources: [WIKI],
};
