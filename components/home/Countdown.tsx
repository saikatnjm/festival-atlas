"use client";

import { useEffect, useState } from "react";
import type { Region } from "@/data/events/events";
import { fill } from "@/data/play/personal";
import { num, type Lang } from "@/lib/i18n";
import { pujaPhase, type PujaPhase } from "@/lib/puja-dates";

const T = {
  before: { bn: "{day} আসতে আর", en: "{day} is in" },
  days: { bn: "{n} দিন", en: "{n} days" },
  tomorrow: { bn: "কালই {day}!", en: "{day} is tomorrow!" },
  today: { bn: "আজ {day}!", en: "It’s {day} today!" },
  after: { bn: "শুভ বিজয়া! আবার দেখা হবে আসছে বছর।", en: "Shubho Bijoya! See you next year." },
  fallback: { bn: "দুর্গাপুজো ২০২৬ · ১৭–২১ অক্টোবর", en: "Durga Puja 2026 · 17–21 Oct" },
  region: { wb: { bn: "কলকাতা", en: "Kolkata" }, bd: { bn: "বাংলাদেশ", en: "Bangladesh" } },
};

const isRegion = (v: unknown): v is Region => v === "wb" || v === "bd";

/** Live countdown pill: days to Shashthi, today's Puja day, or Bijoya. Region follows the Local page choice. */
export default function Countdown({ lang }: { lang: Lang }) {
  const [state, setState] = useState<{ phase: PujaPhase; region: Region } | null>(null);

  useEffect(() => {
    let region: Region = "wb";
    try {
      const saved = localStorage.getItem("fa:region");
      if (isRegion(saved)) region = saved;
    } catch {
      // ignore
    }
    const tick = () => setState({ phase: pujaPhase(new Date(), region), region });
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
        <b>{fill(T.today[lang], { day: phase.day[lang] })}</b>
        {tag}
      </p>
    );
  }
  return <p className="countdown">{T.after[lang]}</p>;
}
