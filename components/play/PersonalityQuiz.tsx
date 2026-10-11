"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cast } from "@/data/play/cast";
import { quizData } from "@/data/play/quizzes";
import { fmt } from "@/lib/format";
import type { Lang } from "@/lib/i18n";
import { clearState, isIntArray, loadState, saveState } from "@/lib/persist";
import { rankWeighted } from "@/lib/play-logic";
import { dominantChar } from "@/data/play/personal";
import type { CharId } from "@/data/play/types";
import { hashString } from "@/lib/profile";
import { useProfile } from "@/lib/use-profile";
import { withName } from "./withName";
import Bubble from "./Bubble";
import ResultPanel from "./ResultPanel";
import Character from "./art/Character";
import Scene from "./art/Scene";
import type { PlayStrings } from "./strings";

interface Saved {
  started: boolean;
  scene: number;
  picks: number[];
  rank: number;
}

function validator(sceneCount: number, optionCounts: number[]) {
  return (v: unknown): Saved | null => {
  if (!v || typeof v !== "object") return null;
  const o = v as Partial<Saved>;
  if (typeof o.started !== "boolean" || !Number.isInteger(o.scene) || !Number.isInteger(o.rank)) return null;
  const picks = o.picks;
  if (!isIntArray(picks, 4, sceneCount)) return null;
  if (!picks.every((p, i) => p < optionCounts[i])) return null;
  const scene = o.scene as number;
  if (scene < 0 || scene > sceneCount || scene < picks.length - 1 || scene > picks.length) return null;
  const rank = o.rank as number;
  if (rank < 0 || rank > 1) return null;
  return { started: o.started, scene, picks, rank };
  };
}

export default function PersonalityQuiz({ lang, s, slug }: { lang: Lang; s: PlayStrings; slug: string }) {
  const { meta, scenes, results, order } = quizData[slug];
  const KEY = `fa:${meta.slug}`;
  const q = s.game.quiz;
  const [started, setStarted] = useState(false);
  const [scene, setScene] = useState(0); // scene being shown
  const [picks, setPicks] = useState<number[]>([]); // chosen option index per scene
  const [rank, setRank] = useState(0); // 0 = top match, 1 = runner-up
  const [restored, setRestored] = useState(false);
  const { profile } = useProfile();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Switching language is a full page load: pick up where the player was.
  useEffect(() => {
    const saved = loadState(KEY, validator(scenes.length, scenes.map((x) => x.options.length)));
    if (saved) {
      setStarted(saved.started);
      setScene(saved.scene);
      setPicks(saved.picks);
      setRank(saved.rank);
    }
    setRestored(true);
  }, []);
  useEffect(() => {
    if (restored) saveState(KEY, { started, scene, picks, rank } satisfies Saved);
  }, [restored, started, scene, picks, rank]);

  const finished = scene >= scenes.length;
  const answered = picks.length > scene;

  // Keyboard and screen-reader users follow the story: focus the new scene, then the "next" button.
  useEffect(() => {
    if (started && !finished) headingRef.current?.focus();
  }, [started, scene, finished]);
  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);

  const restart = () => {
    clearState(KEY);
    setPicks([]);
    setScene(0);
    setRank(0);
    setStarted(false);
  };

  if (!started) {
    return (
      <div className="cx-stage">
        <ul className="cx-cast">
          {order.map((id, i) => (
            <li key={id} style={{ "--tilt": `${i % 2 ? 2 : -2}deg` } as CSSProperties}>
              <Character id={id} mood={i % 2 ? "smug" : "happy"} />
              <span>{cast[id].name[lang]}</span>
            </li>
          ))}
        </ul>
        <Bubble>{withName(meta.intro ? meta.intro[lang] : q.intro, profile.name)}</Bubble>
        <button type="button" className="cx-btn cx-btn-big" onClick={() => setStarted(true)}>
          {s.game.start}
        </button>
      </div>
    );
  }

  if (finished) {
    const ranking = rankWeighted(
      picks.map((oi, si) => scenes[si].options[oi].score),
      order,
    );
    const pick = ranking[rank] ?? ranking[0];
    const result = results.find((r) => r.char === pick) ?? results[0];
    return (
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
        shareText={fmt(meta.share ? meta.share[lang] : q.shareText, { title: result.title[lang] }, lang)}
        onAgain={restart}
        note={meta.note?.[lang]}
        personal={{
          chars: picks.map((oi, si) => dominantChar(scenes[si].options[oi].score)).filter((c): c is CharId => c !== null),
          seed: hashString(`${meta.slug}:${picks.join("")}:${rank}`),
        }}
        extra={{ label: rank === 0 ? q.runnerUp : q.backTop, onClick: () => setRank((r) => (r === 0 ? 1 : 0)) }}
      />
    );
  }

  const sc = scenes[scene];
  const chosen = answered ? picks[scene] : -1;
  const last = scene === scenes.length - 1;

  return (
    <div className="cx-stage">
      <p className="cx-steps" role="img" aria-label={fmt(q.scene, { n: scene + 1, total: scenes.length }, lang)}>
        {scenes.map((_, i) => (
          <span key={i} className={`cx-dot${i < scene ? " is-done" : i === scene ? " is-now" : ""}`} />
        ))}
      </p>
      <Scene kind={sc.scene} />
      <h2 ref={headingRef} tabIndex={-1} className="cx-prompt">
        {sc.prompt[lang]}
      </h2>
      <ul className="cx-tiles">
        {sc.options.map((o, i) => (
          <li key={o.label.en}>
            <button
              type="button"
              className={`cx-tile${chosen === i ? " is-picked" : ""}${answered && chosen !== i ? " is-dim" : ""}`}
              disabled={answered}
              onClick={() => setPicks((p) => (p.length > scene ? p : [...p, i]))}
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
            <Bubble tail="up">{sc.options[chosen].react[lang]}</Bubble>
            <button ref={nextRef} type="button" className="cx-btn" onClick={() => setScene((n) => n + 1)}>
              {last ? q.last : q.next}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
