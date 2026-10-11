"use client";

import { useEffect, type CSSProperties } from "react";
import { fun } from "@/data/i18n/fun";
import { cast } from "@/data/play/cast";
import { ICON_SVG } from "@/lib/brand";
import { fmt } from "@/lib/format";
import type { CardData } from "@/lib/share";
import { useHost } from "@/lib/use-host";
import Bubble from "./Bubble";
import Character from "./art/Character";
import type { PlayStrings } from "./strings";
import { useReactions } from "./useReactions";

interface Props {
  card: CardData;
  s: PlayStrings;
  /** Called when the drawing changes (expression), so image exports can be refreshed. */
  onArtChange?: () => void;
}

/**
 * The shareable character card: a collectible-style portrait. Tap the character to change its
 * expression and read an extra line. Every character has its own colours and pattern.
 */
export default function ResultCard({ card, s, onArtChange }: Props) {
  const c = cast[card.char];
  const lang = card.lang;
  const host = useHost();
  const extra = [c.catchphrase[lang], `${s.play.strength} ${c.strength[lang]}`, `${s.play.weakness} ${c.weakness[lang]}`];
  const { mood, line, taps, tap } = useReactions(card.mood, extra);

  useEffect(() => {
    onArtChange?.();
  }, [mood]);

  const style = { "--c1": c.c1, "--c2": c.c2, "--c3": c.c3 } as CSSProperties;
  const Title = card.titleIsText ? "p" : "h2";
  return (
    <div className="cx-card" data-pattern={c.pattern} style={style} role="group" aria-label={s.card.aria}>
      <div className="cx-card-art">
        <span className="cx-kicker">{card.kicker}</span>
        <button type="button" className="cx-char-btn" onClick={tap} aria-label={fmt(s.card.tapChar, { name: c.name[lang] }, lang)}>
          <span key={taps} className={`cx-pop${taps > 0 ? " is-popping" : ""}`}>
            <Character id={card.char} mood={mood} />
          </span>
        </button>
        <p className="cx-react" role="status" aria-live="polite" aria-label={s.card.reactionLabel}>
          {line ?? ""}
        </p>
      </div>
      <div className="cx-card-body">
        {card.owner ? <p className="cx-ribbon">{card.owner}</p> : null}
        <Title className={card.titleIsText ? "cx-card-text" : "cx-card-title"}>{card.title}</Title>
        {card.punchline ? <Bubble tail="up">{card.punchline}</Bubble> : null}
        {card.list?.length ? (
          <ol className="cx-list">
            {card.list.map((row) => (
              <li key={row}>{row}</li>
            ))}
          </ol>
        ) : null}
        {card.traits?.length ? (
          <ul className="cx-traits" aria-label={fun.card.traits[lang]}>
            {card.traits.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        ) : null}
        {card.verdict ? <p className="cx-verdict">{card.verdict}</p> : null}
        {card.blurb ? <p className="cx-card-blurb">{card.blurb}</p> : null}
        {card.stat ? (
          <div className="cx-stat">
            <span>{card.stat.label}</span>
            <b>{fmt(s.card.stat, { n: card.stat.value }, lang)}</b>
            <span className="cx-stat-bar" aria-hidden="true">
              <i style={{ width: `${Math.max(0, Math.min(100, card.stat.value))}%` }} />
            </span>
          </div>
        ) : null}
      </div>
      <div className="cx-foot">
        <span className="cx-foot-logo" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICON_SVG }} />
        <span className="cx-foot-name">{s.card.brand}</span>
        {host ? <span className="cx-foot-host">{host}</span> : null}
      </div>
    </div>
  );
}

