"use client";

import { useEffect, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { num, type Lang } from "@/lib/i18n";
import { own, type ActivityRow } from "@/lib/community-shared";
import { useCommunity } from "./useCommunity";

interface Props {
  lang: Lang;
  /** pandal id → name */
  names: Record<string, { name: string }>;
  /** game slug → result id → title, built on the server so the quiz text isn't shipped to the client. */
  titles: Record<string, Record<string, string>>;
  limit?: number;
}

/** "Just now": the last few plays, check-ins and loves across the site. Names only where players opted in. */
export default function ActivityTicker({ lang, names, titles, limit = 8 }: Props) {
  const C = fun.community;
  const { data, enabled, loaded } = useCommunity();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  if (!loaded || !enabled) return null;

  const line = (a: ActivityRow): string | null => {
    const who = a.nickname || C.someone[lang];
    if (a.kind === "play") {
      // Passport joins carry no result; the score isn't in the feed, so use the plain join line.
      if (a.game === "passport") return a.nickname ? fill(C.tickerJoinPlain[lang], { who }) : null;
      const title = a.game && a.result ? own(own(titles, a.game) ?? {}, a.result) : undefined;
      return title ? fill(C.tickerPlay[lang], { who, title }) : null;
    }
    const place = a.pandal_id ? own(names, a.pandal_id)?.name : undefined;
    if (!place) return null;
    return fill(a.kind === "here" ? C.tickerHere[lang] : C.tickerLove[lang], { who, place });
  };
  const items = data.activity
    .map((a) => ({ a, text: line(a) }))
    .filter((x): x is { a: ActivityRow; text: string } => Boolean(x.text))
    .slice(0, limit);
  if (!items.length) return null;

  return (
    <section className="ticker" aria-labelledby="ticker-h2">
      <h2 id="ticker-h2">{C.tickerH2[lang]}</h2>
      <ul className="ticker-list">
        {items.map(({ a, text }) => {
          const mins = Math.max(0, Math.round((now - Date.parse(a.at)) / 60_000));
          return (
            <li key={`${a.kind}-${a.at}-${a.pandal_id ?? a.result}`}>
              <span>{text}</span>
              <span className="ticker-when">{mins < 1 ? C.justNow[lang] : fill(C.ago[lang], { n: num(mins, lang) })}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
