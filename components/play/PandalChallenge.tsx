"use client";

import { useEffect, useRef, useState } from "react";
import { meta, meterInfo, notice, results, rounds } from "@/data/play/challenge";
import { fmt } from "@/lib/format";
import { num, type Lang } from "@/lib/i18n";
import { clearState, isIntArray, loadState, saveState } from "@/lib/persist";
import { METER_MAX, METER_START, applyMeters, pathOutcome, type Meters } from "@/lib/play-logic";
import type { CharId } from "@/data/play/types";
import { hashString } from "@/lib/profile";
import { useProfile } from "@/lib/use-profile";
import { withName } from "./withName";
import Bubble from "./Bubble";
import ResultPanel from "./ResultPanel";
import Scene from "./art/Scene";
import type { PlayStrings } from "./strings";

const START: Meters = { legs: METER_START, mood: METER_START, battery: METER_START };

/** Which cast trait a choice earns: the meter it boosts most (walker, foodie mood, phone battery), or the sleepy one. */
function leanOf(d: Partial<Meters>): CharId {
  const lean: Record<keyof Meters, CharId> = { legs: "detective", mood: "bhog", battery: "selfie" };
  let best: keyof Meters | null = null;
  for (const k of Object.keys(lean) as (keyof Meters)[]) if ((d[k] ?? 0) > 0 && (best === null || (d[k] ?? 0) > (d[best] ?? 0))) best = k;
  return best ? lean[best] : "sleepy";
}
const KEY = `fa:${meta.slug}`;

interface Saved {
  started: boolean;
  round: number;
  picks: number[];
}

function validate(v: unknown): Saved | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Partial<Saved>;
  if (typeof o.started !== "boolean" || !Number.isInteger(o.round)) return null;
  const picks = o.picks;
  if (!isIntArray(picks, 3, rounds.length)) return null;
  if (!picks.every((p, i) => p < rounds[i].options.length)) return null;
  const round = o.round as number;
  if (round < 0 || round > rounds.length || round < picks.length - 1 || round > picks.length) return null;
  return { started: o.started, round, picks };
}

function MeterBar({ meters, lang, label }: { meters: Meters; lang: Lang; label: string }) {
  return (
    <ul className="cx-meters" aria-label={label}>
      {meterInfo.map((m) => (
        <li key={m.key} className="cx-meter">
          <span aria-hidden="true">{m.icon}</span>
          <span className="cx-meter-label">{m.label[lang]}</span>
          <span className="cx-pips" role="img" aria-label={`${num(meters[m.key], lang)}/${num(METER_MAX, lang)}`}>
            {Array.from({ length: METER_MAX }, (_, i) => (
              <i key={i} className={i < meters[m.key] ? "on" : ""} />
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function PandalChallenge({ lang, s }: { lang: Lang; s: PlayStrings }) {
  const c = s.game.challenge;
  const [started, setStarted] = useState(false);
  const [round, setRound] = useState(0);
  const [picks, setPicks] = useState<number[]>([]); // chosen option index per round
  const [restored, setRestored] = useState(false);
  const { profile } = useProfile();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = loadState(KEY, validate);
    if (saved) {
      setStarted(saved.started);
      setRound(saved.round);
      setPicks(saved.picks);
    }
    setRestored(true);
  }, []);
  useEffect(() => {
    if (restored) saveState(KEY, { started, round, picks } satisfies Saved);
  }, [restored, started, round, picks]);

  const finished = round >= rounds.length;
  const answered = picks.length > round;
  // Meters are derived from the picks, so rapid taps can never leave them out of step.
  const meters = picks.reduce((m, oi, ri) => applyMeters(m, rounds[ri].options[oi].d), START);

  useEffect(() => {
    if (started && !finished) headingRef.current?.focus();
  }, [started, round, finished]);
  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);

  const restart = () => {
    clearState(KEY);
    setPicks([]);
    setRound(0);
    setStarted(false);
  };

  if (!started) {
    return (
      <div className="cx-stage">
        <Scene kind="queue" />
        <Bubble>{withName(notice[lang], profile.name)}</Bubble>
        <MeterBar meters={START} lang={lang} label={c.status} />
        <button type="button" className="cx-btn cx-btn-big" onClick={() => setStarted(true)}>
          {c.start}
        </button>
      </div>
    );
  }

  if (finished) {
    const result = results.find((r) => r.id === pathOutcome(meters)) ?? results[0];
    return (
      <div className="cx-stage">
        <MeterBar meters={meters} lang={lang} label={c.status} />
        <ResultPanel
          s={s}
          slug={meta.slug}
          card={{
            lang,
            char: result.char,
            mood: result.mood,
            kicker: meta.kicker[lang],
            title: result.title[lang],
            punchline: result.punchline[lang],
            blurb: result.blurb[lang],
            stat: { label: result.stat.label[lang], value: result.stat.value },
          }}
          sharePath={`/play/${meta.slug}/r/${result.id}`}
          shareText={fmt(c.shareText, { title: result.title[lang] }, lang)}
          onAgain={restart}
          note={notice[lang]}
          personal={{ chars: picks.map((oi, ri) => leanOf(rounds[ri].options[oi].d)), seed: hashString(`${meta.slug}:${picks.join("")}`) }}
        />
      </div>
    );
  }

  const r = rounds[round];
  const chosen = answered ? picks[round] : -1;
  const last = round === rounds.length - 1;
  const deltas = chosen >= 0 ? meterInfo.filter((m) => r.options[chosen].d[m.key]) : [];

  return (
    <div className="cx-stage">
      <MeterBar meters={meters} lang={lang} label={c.status} />
      <p className="cx-steps" role="img" aria-label={fmt(c.turn, { n: round + 1, total: rounds.length }, lang)}>
        {rounds.map((_, i) => (
          <span key={i} className={`cx-dot${i < round ? " is-done" : i === round ? " is-now" : ""}`} />
        ))}
      </p>
      <Scene kind={r.scene} />
      <h2 ref={headingRef} tabIndex={-1} className="cx-prompt">
        {r.prompt[lang]}
      </h2>
      <ul className="cx-tiles cx-tiles-wide">
        {r.options.map((o, i) => (
          <li key={o.label.en}>
            <button
              type="button"
              className={`cx-tile${chosen === i ? " is-picked" : ""}${answered && chosen !== i ? " is-dim" : ""}`}
              disabled={answered}
              onClick={() => setPicks((p) => (p.length > round ? p : [...p, i]))}
            >
              <span className="cx-tile-icon" aria-hidden="true">
                {o.icon}
              </span>
              <span>{o.label[lang]}</span>
            </button>
          </li>
        ))}
      </ul>
      <div aria-live="polite">
        {answered ? (
          <>
            <Bubble tail="up">{r.options[chosen].react[lang]}</Bubble>
            <p className="cx-deltas">
              {deltas.map((m) => {
                const v = r.options[chosen].d[m.key] ?? 0;
                return (
                  <span key={m.key} className={v > 0 ? "up" : "down"}>
                    {m.icon} {m.label[lang]} {v > 0 ? "+" : "−"}
                    {num(Math.abs(v), lang)}
                  </span>
                );
              })}
            </p>
            <button ref={nextRef} type="button" className="cx-btn" onClick={() => setRound((n) => n + 1)}>
              {last ? c.last : c.next}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
