"use client";

import { useEffect, useMemo, useState } from "react";
import { SIZE, items, meta, reactions, results } from "@/data/play/bingo";
import { fmt } from "@/lib/format";
import type { Lang } from "@/lib/i18n";
import { loadState, saveState } from "@/lib/persist";
import { bingoTier, countLines, shuffleSeeded } from "@/lib/play-logic";
import Bubble from "./Bubble";
import ResultPanel from "./ResultPanel";
import type { PlayStrings } from "./strings";

const CELLS = SIZE * SIZE;
const emptyCard = () => Array<boolean>(CELLS).fill(false);
const randomSeed = () => Math.floor(Math.random() * 999999) + 1;
const validSeed = (n: number) => Number.isInteger(n) && n >= 1 && n <= 999999;
const keyOf = (seed: number) => `fa:${meta.slug}:${seed}`;

interface Saved {
  marked: boolean[];
  taps: number;
}

function validate(v: unknown): Saved | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Partial<Saved>;
  if (!Array.isArray(o.marked) || o.marked.length !== CELLS || !o.marked.every((m) => typeof m === "boolean")) return null;
  if (!Number.isInteger(o.taps)) return null;
  return { marked: o.marked, taps: o.taps as number };
}

export default function PujaBingo({ lang, s }: { lang: Lang; s: PlayStrings }) {
  const b = s.game.bingo;
  // The card depends on a seed, chosen on the client so server and browser HTML always match.
  const [seed, setSeed] = useState<number | null>(null);
  const [marked, setMarked] = useState<boolean[]>(emptyCard);
  const [taps, setTaps] = useState(0);

  useEffect(() => {
    const fromUrl = Number(new URLSearchParams(window.location.search).get("seed"));
    if (validSeed(fromUrl)) {
      setSeed(fromUrl);
      const saved = loadState(keyOf(fromUrl), validate); // same card after a language switch
      if (saved) {
        setMarked(saved.marked);
        setTaps(saved.taps);
      }
    } else {
      const sd = randomSeed();
      setSeed(sd);
      window.history.replaceState(null, "", `?seed=${sd}`);
    }
  }, []);

  useEffect(() => {
    if (seed !== null) saveState(keyOf(seed), { marked, taps } satisfies Saved);
  }, [seed, marked, taps]);

  const squares = useMemo(() => (seed === null ? [] : shuffleSeeded(items, seed).slice(0, CELLS)), [seed]);
  const count = marked.filter(Boolean).length;
  const lines = countLines(marked, SIZE);
  const tierId = bingoTier(lines);
  const result = tierId ? results.find((r) => r.id === tierId) : undefined;

  const newCard = () => {
    const sd = randomSeed();
    setSeed(sd);
    setMarked(emptyCard());
    setTaps(0);
    window.history.replaceState(null, "", `?seed=${sd}`);
  };

  const toggle = (i: number) => {
    if (!marked[i]) setTaps((t) => t + 1);
    setMarked((prev) => prev.map((m, j) => (j === i ? !m : m)));
  };

  if (seed === null) return <p className="cx-note">{b.dealing}</p>;

  const reaction = count === 0 ? b.firstHint : reactions[(taps - 1 + reactions.length) % reactions.length][lang];

  return (
    <div className="cx-stage">
      <p className="cx-bingo-meta">
        <span>{fmt(b.card, { n: seed }, lang)}</span>
        <span>{fmt(b.progress, { lines, count, cells: CELLS }, lang)}</span>
      </p>
      <div className="cx-bingo" role="group" aria-label={b.aria}>
        {squares.map((item, i) => (
          <button key={item.text.en} type="button" className="cx-cell" aria-pressed={marked[i]} onClick={() => toggle(i)}>
            <span className="cx-cell-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="cx-cell-text">{item.text[lang]}</span>
          </button>
        ))}
      </div>
      <div aria-live="polite">
        <Bubble tail="up">{reaction}</Bubble>
      </div>
      <p className="cx-note">{b.note}</p>
      <div className="cx-share-row">
        <button type="button" className="cx-btn cx-btn-light" onClick={() => setMarked(emptyCard())}>
          {b.clear}
        </button>
        <button type="button" className="cx-btn cx-btn-light" onClick={newCard}>
          {b.newCard}
        </button>
      </div>
      {result && (
        <ResultPanel
          s={s}
          slug={meta.slug}
          card={{
            lang,
            char: result.char,
            mood: result.mood,
            kicker: fmt(b.kicker, { lines, n: seed }, lang),
            title: result.title[lang],
            punchline: result.punchline[lang],
            blurb: result.blurb[lang],
            stat: { label: result.stat.label[lang], value: result.stat.value },
          }}
          sharePath={`/play/${meta.slug}/r/${result.id}`}
          shareText={fmt(b.shareText, { title: result.title[lang] }, lang)}
          onAgain={newCard}
          againLabel={b.newCard}
          personal={{ seed: seed + count }}
        />
      )}
    </div>
  );
}

