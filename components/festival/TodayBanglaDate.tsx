"use client";

import { useEffect, useState } from "react";
import { banglaDateLabel, bdBanglaDate } from "@/data/festivals/bengali-calendar-1433";
import type { L, Lang } from "@/lib/i18n";
import { localDate } from "@/lib/puja-dates";

const T = {
  h: { bn: "আজ বাংলা কত তারিখ?", en: "Today's Bangla date" },
  bd: { bn: "বাংলাদেশ (সংশোধিত ক্যালেন্ডার)", en: "Bangladesh (revised calendar)" },
  wb: {
    bn: "পশ্চিমবঙ্গে তারিখটা এক-আধ দিন আলাদা হতে পারে; পঞ্জিকা মিলিয়ে নিও।",
    en: "In West Bengal the date can differ by a day or so; check your panjika.",
  },
} satisfies Record<string, L>;

/** Today's date in Bangladesh's revised Bangla calendar, read from the fixed month starts (after mount, Dhaka date). */
export default function TodayBanglaDate({ lang }: { lang: Lang }) {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => setLabel(banglaDateLabel(bdBanglaDate(localDate(new Date(), "bd")), lang)), [lang]);
  return (
    <section className="today-bangla" aria-labelledby="today-bangla-h">
      <h2 id="today-bangla-h">{T.h[lang]}</h2>
      <p className="today-bangla-date">{label ?? "…"}</p>
      <p className="fineprint">
        {T.bd[lang]}. {T.wb[lang]}
      </p>
    </section>
  );
}
