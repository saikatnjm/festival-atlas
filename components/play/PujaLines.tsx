"use client";

import { useEffect, useState } from "react";
import { captionPunchlines, captionScenes, excuseOpeners, excuseReasons, meta } from "@/data/play/lines";
import type { CharId, Mood } from "@/data/play/types";
import { fmt } from "@/lib/format";
import type { L, Lang } from "@/lib/i18n";
import Bubble from "./Bubble";
import ResultPanel from "./ResultPanel";
import Character from "./art/Character";
import type { PlayStrings } from "./strings";

type Mode = "caption" | "excuse";
interface Pick {
  a: number;
  b: number;
}

const PARTS: Record<Mode, [L[], L[]]> = {
  caption: [captionScenes, captionPunchlines],
  excuse: [excuseOpeners, excuseReasons],
};
const WHO: Record<Mode, { who: CharId; idle: Mood; done: Mood }> = {
  caption: { who: "selfie", idle: "happy", done: "proud" },
  excuse: { who: "excuse", idle: "smug", done: "wow" },
};

const randomIndex = (n: number) => Math.floor(Math.random() * n);
const inRange = (n: number, len: number) => Number.isInteger(n) && n >= 0 && n < len;

export default function PujaLines({ lang, s }: { lang: Lang; s: PlayStrings }) {
  const l = s.game.lines;
  const [mode, setMode] = useState<Mode>("caption");
  const [pick, setPick] = useState<Pick | null>(null);

  // Reproduce a shared line from ?m=caption&a=1&b=4. The pair of numbers is language-independent, so
  // the language switch (which keeps the query string) shows the same line in the other language.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const m = p.get("m");
    if (m !== "caption" && m !== "excuse") return;
    const a = Number(p.get("a"));
    const b = Number(p.get("b"));
    if (inRange(a, PARTS[m][0].length) && inRange(b, PARTS[m][1].length)) {
      setMode(m);
      setPick({ a, b });
    }
  }, []);

  const writeUrl = (m: Mode, next: Pick | null) => {
    window.history.replaceState(null, "", next ? `?m=${m}&a=${next.a}&b=${next.b}` : window.location.pathname);
  };

  const generate = () => {
    const [first, second] = PARTS[mode];
    let next: Pick;
    do {
      next = { a: randomIndex(first.length), b: randomIndex(second.length) };
    } while (pick && next.a === pick.a && next.b === pick.b);
    setPick(next);
    writeUrl(mode, next);
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setPick(null);
    writeUrl(m, null);
  };

  const [first, second] = PARTS[mode];
  const who = WHO[mode];
  const text = pick ? `${first[pick.a][lang]} ${second[pick.b][lang]}` : "";
  const label = mode === "caption" ? { prompt: l.captionPrompt, kicker: l.captionKicker, again: l.captionAgain } : { prompt: l.excusePrompt, kicker: l.excuseKicker, again: l.excuseAgain };

  return (
    <div className="cx-stage">
      <div className="cx-share-row" role="group" aria-label={l.whatToMake}>
        {(Object.keys(PARTS) as Mode[]).map((m) => (
          <button key={m} type="button" className="cx-chip" aria-pressed={mode === m} onClick={() => switchMode(m)}>
            {m === "caption" ? l.caption : l.excuse}
          </button>
        ))}
      </div>
      {pick ? (
        <>
          <p className="visually-hidden" role="status">
            {fmt(l.madeStatus, { text }, lang)}
          </p>
          <ResultPanel
            s={s}
            slug={meta.slug}
            card={{ lang, char: who.who, mood: who.done, kicker: label.kicker, title: text, titleIsText: true }}
            sharePath={`/play/${meta.slug}?m=${mode}&a=${pick.a}&b=${pick.b}`}
            shareText={text}
            onAgain={generate}
            againLabel={label.again}
            copyLabel={l.copyText}
            copyValue={text}
            personal={{ seed: pick.a * 31 + pick.b, traits: false }}
          />
        </>
      ) : (
        <>
          <Character id={who.who} mood={who.idle} className="cx-char-big" />
          <Bubble tail="up">{label.prompt}</Bubble>
          <button type="button" className="cx-btn cx-btn-big" onClick={generate}>
            {l.make}
          </button>
        </>
      )}
    </div>
  );
}
