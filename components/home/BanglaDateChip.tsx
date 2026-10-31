"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { banglaDateLabel, bdBanglaDate } from "@/data/festivals/bengali-calendar-1433";
import { withLang, type Lang } from "@/lib/i18n";
import { localDate } from "@/lib/puja-dates";

/** "আজ ১৫ কার্তিক ১৪৩৩" under the home countdown (Bangladesh's revised calendar), linking to the calendar page. */
export default function BanglaDateChip({ lang }: { lang: Lang }) {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => setLabel(banglaDateLabel(bdBanglaDate(localDate(new Date(), "bd")), lang)), [lang]);
  if (!label) return null;
  return (
    <p className="fineprint bangla-date-chip">
      <Link href={withLang(lang, "/bengali-calendar-1433")}>🗓️ {lang === "bn" ? `আজ ${label}` : `Today: ${label}`}</Link>
    </p>
  );
}
