"use client";

import { fun } from "@/data/i18n/fun";
import { GREETINGS, GREETING_SEASONS, seasonOf, type GreetingDay } from "@/data/play/greetings";
import type { Lang } from "@/lib/i18n";

/** Day chips for greeting cards and postcards, grouped by festival season. */
export default function GreetingDayChips({ lang, value, onPick }: { lang: Lang; value: GreetingDay; onPick: (day: GreetingDay) => void }) {
  return (
    <div className="greet-seasons">
      {GREETING_SEASONS.map((s) => (
        <div key={s.id} className="cx-chips" role="group" aria-label={`${fun.greet.pickDay[lang]} ${s.name[lang]}`}>
          <span className="greet-season">{s.name[lang]}</span>
          {GREETINGS.filter((g) => seasonOf(g) === s.id).map((x) => (
            <button key={x.id} type="button" className="cx-chip" aria-pressed={value === x.id} onClick={() => onPick(x.id)}>
              {x.icon} {x.name[lang]}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
