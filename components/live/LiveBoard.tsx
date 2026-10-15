"use client";

import Link from "next/link";
import { fun } from "@/data/i18n/fun";
import type { Lang } from "@/lib/i18n";
import { rankBoard } from "@/lib/live-shared";
import LiveBadge from "./LiveBadge";
import { useLive } from "./useLive";

export interface BoardName {
  name: string;
  place: string;
  href: string;
}

/** "Buzzing right now": top pandals by check-ins, loves and crowd reports. Hidden when no database is configured. */
export default function LiveBoard({ lang, names, limit = 5 }: { lang: Lang; names: Record<string, BoardName>; limit?: number }) {
  const L = fun.live;
  const { board, enabled, loaded } = useLive();
  if (!loaded || !enabled) return null;
  const top = rankBoard(board, limit).filter((x) => names[x.id]);
  return (
    <section className="home-section live-board" aria-labelledby="live-h2">
      <h2 id="live-h2">
        <span className="live-dot" aria-hidden="true" /> {L.boardH2[lang]}
      </h2>
      <p className="section-lead">{L.boardP[lang]}</p>
      {top.length ? (
        <ol className="live-list">
          {top.map(({ id, stats }) => (
            <li key={id}>
              <Link href={names[id].href}>{names[id].name}</Link>
              <span className="plan-place">{names[id].place}</span>
              <LiveBadge stats={stats} lang={lang} />
            </li>
          ))}
        </ol>
      ) : (
        <p className="notice">{L.boardEmpty[lang]}</p>
      )}
    </section>
  );
}
