"use client";

import Link from "next/link";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { fmtDate } from "@/lib/dates";
import { withLang, type Lang } from "@/lib/i18n";
import { useVisits } from "@/lib/use-visits";

/** "✓ ঘুরেছি" toggle for one pandal, with a link to the passport once ticked. */
export default function VisitButton({ id, lang }: { id: string; lang: Lang }) {
  const { visits, toggle } = useVisits();
  const p = fun.passport;
  // Rendered on the server as "not visited" (no ticks there) and updated after hydration.
  const visit = visits.find((v) => v.id === id);
  return (
    <div className="visit">
      <button type="button" className={`button${visit ? "" : " button-light"}`} aria-pressed={Boolean(visit)} onClick={() => toggle(id)}>
        {visit ? p.visited[lang] : p.markVisited[lang]}
      </button>
      {visit ? (
        <span className="visit-meta">
          {fill(p.visitedOn[lang], { date: fmtDate(visit.on, lang) })} · <Link href={withLang(lang, "/passport")}>{p.see[lang]}</Link>
        </span>
      ) : null}
    </div>
  );
}
