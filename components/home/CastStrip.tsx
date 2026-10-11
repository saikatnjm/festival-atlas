"use client";

import { cast, castAll } from "@/data/play/cast";
import type { CharId } from "@/data/play/types";
import Character from "@/components/play/art/Character";
import { useReactions } from "@/components/play/useReactions";
import { fmt } from "@/lib/format";
import type { Lang } from "@/lib/i18n";

interface Labels {
  tap: string;
  strength: string;
  weakness: string;
}

function Tile({ id, lang, labels, i }: { id: CharId; lang: Lang; labels: Labels; i: number }) {
  const c = cast[id];
  const base = i % 2 ? "smug" : "happy";
  const { mood, line, taps, tap } = useReactions(base, [
    c.catchphrase[lang],
    `${labels.strength} ${c.strength[lang]}`,
    `${labels.weakness} ${c.weakness[lang]}`,
  ]);
  return (
    <li className="cast-tile" style={{ "--c1": c.c1, "--c2": c.c2 } as React.CSSProperties}>
      <button type="button" className="cast-btn" onClick={tap} aria-label={fmt(labels.tap, { name: c.name[lang] }, lang)}>
        <span key={taps} className={`cx-pop${taps > 0 ? " is-popping" : ""}`}>
          <Character id={id} mood={mood} />
        </span>
      </button>
      <p className="cast-name">{c.name[lang]}</p>
      <p className="cast-role">{c.role[lang]}</p>
      <p className="cast-react" role="status" aria-live="polite">
        {line ?? " "}
      </p>
    </li>
  );
}

export default function CastStrip({ lang, labels }: { lang: Lang; labels: Labels }) {
  return (
    <ul className="cast-strip">
      {castAll.map((id, i) => (
        <Tile key={id} id={id} lang={lang} labels={labels} i={i} />
      ))}
    </ul>
  );
}
