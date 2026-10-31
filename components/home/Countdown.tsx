"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Region } from "@/data/events/events";
import { fill } from "@/data/play/personal";
import { UPCOMING, daysUntil, nextUp } from "@/data/festivals/upcoming";
import { num, withLang, type Lang } from "@/lib/i18n";
import { cleanName } from "@/lib/profile";
import { localDate, pujaPhase, type PujaPhase } from "@/lib/puja-dates";
import { guessRegion } from "@/lib/region";
import { useProfile } from "@/lib/use-profile";

const T = {
  before: { bn: "{day} আসতে আর", en: "{day} is in" },
  days: { bn: "{n} দিন", en: "{n} days" },
  tomorrow: { bn: "কালই {day}!", en: "{day} is tomorrow!" },
  today: { bn: "আজ {day}!", en: "It’s {day} today!" },
  todayName: { bn: "শুভ {day}, {name}!", en: "Shubho {day}, {name}!" },
  after: { bn: "শুভ বিজয়া! আবার দেখা হবে আসছে বছর।", en: "Shubho Bijoya! See you next year." },
  nextToday: { bn: "আজ {day}!", en: "It’s {day} today!" },
  nextTomorrow: { bn: "কালই {day}!", en: "{day} is tomorrow!" },
  fallback: { bn: "📅 পুজো-পার্বণের ক্যালেন্ডার", en: "📅 Festival calendar" },
  region: { wb: { bn: "কলকাতা", en: "Kolkata" }, bd: { bn: "বাংলাদেশ", en: "Bangladesh" } },
};

/**
 * Live countdown pill: days to Shashthi, today's Puja day, Bijoya; once Bijoya week is over, days to the next
 * festival (data/festivals/upcoming.ts) with a link to its page. Region: the Local page choice, else the phone's time zone.
 */
export default function Countdown({ lang }: { lang: Lang }) {
  const [state, setState] = useState<{ phase: PujaPhase; region: Region; today: string } | null>(null);
  const { profile } = useProfile();
  const name = cleanName(profile.name);

  useEffect(() => {
    const region: Region = guessRegion();
    const tick = () => {
      const now = new Date();
      setState({ phase: pujaPhase(now, region), region, today: localDate(now, region) });
    };
    tick();
    const id = window.setInterval(tick, 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!state) return <p className="countdown">{T.fallback[lang]}</p>;
  const { phase, region } = state;
  const tag = <span className="fineprint">· {T.region[region][lang]}</span>;
  if (phase.kind === "before") {
    return (
      <p className="countdown" aria-live="polite">
        {phase.days === 1 ? (
          <b>{fill(T.tomorrow[lang], { day: phase.day[lang] })}</b>
        ) : (
          <>
            <span>{fill(T.before[lang], { day: phase.day[lang] })}</span>
            <b>{fill(T.days[lang], { n: num(phase.days, lang) })}</b>
          </>
        )}
        {tag}
      </p>
    );
  }
  if (phase.kind === "during") {
    return (
      <p className="countdown" aria-live="polite">
        <b>{name ? fill(T.todayName[lang], { day: phase.day[lang], name }) : fill(T.today[lang], { day: phase.day[lang] })}</b>
        {tag}
      </p>
    );
  }
  const next = phase.days > 7 ? nextUp(UPCOMING, state.today, 1)[0] : undefined;
  if (!next) return <p className="countdown">{T.after[lang]}</p>;
  const d = daysUntil(state.today, next.date);
  const label = `${next.icon} ${next.name[lang]}`;
  return (
    <p className="countdown" aria-live="polite">
      <Link href={withLang(lang, next.href)}>
        {d <= 0 ? (
          <b>{fill(T.nextToday[lang], { day: label })}</b>
        ) : d === 1 ? (
          <b>{fill(T.nextTomorrow[lang], { day: label })}</b>
        ) : (
          <>
            <span>{fill(T.before[lang], { day: label })}</span> <b>{fill(T.days[lang], { n: num(d, lang) })}</b>
          </>
        )}
      </Link>
    </p>
  );
}
