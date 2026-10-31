"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { daysUntil, nextUp, type Upcoming } from "@/data/festivals/upcoming";
import { fmtDate } from "@/lib/dates";
import { num, withLang, type L, type Lang } from "@/lib/i18n";
import { localDate } from "@/lib/puja-dates";
import { guessRegion } from "@/lib/region";

const T = {
  today: { bn: "আজ", en: "Today" },
  tomorrow: { bn: "কাল", en: "Tomorrow" },
  inDays: { bn: "{n} দিন পরে", en: "in {n} days" },
} satisfies Record<string, L>;

/**
 * The next few festivals, Ekadashis and Purnimas as links to their pages. The server passes the full sorted
 * list; "today" is read after mount, so the prerendered HTML shows the first entries of the list.
 */
export default function ComingUp({ lang, items, count = 6 }: { lang: Lang; items: Upcoming[]; count?: number }) {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(localDate(new Date(), guessRegion())), []);
  const list = today ? nextUp(items, today, count) : items.slice(0, count);
  return (
    <ul className="coming-up">
      {list.map((u) => {
        const d = today ? daysUntil(today, u.date) : null;
        const when = d === null ? "" : d <= 0 ? T.today[lang] : d === 1 ? T.tomorrow[lang] : T.inDays[lang].replace("{n}", num(d, lang));
        return (
          <li key={`${u.date}-${u.href}-${u.name.en}`}>
            <Link href={withLang(lang, u.href)}>
              <span className="coming-icon" aria-hidden="true">
                {u.icon}
              </span>
              <span className="coming-name">{u.name[lang]}</span>
              <span className="coming-date">
                {fmtDate(u.date, lang, u.end)}
                {when ? ` · ${when}` : ""}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
