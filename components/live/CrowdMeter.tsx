"use client";

import { useState } from "react";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { track } from "@/lib/analytics";
import { num, type Lang } from "@/lib/i18n";
import { crowdLevel, type SignalKind } from "@/lib/live-shared";
import { useLive } from "./useLive";

const ICON = { 1: "🟢", 2: "🟠", 3: "🔴" } as const;

/** Pandal page: the live crowd level with three report buttons, "I'm here" and "love it". Hidden when no database is configured. */
export default function CrowdMeter({ id, lang }: { id: string; lang: Lang }) {
  const L = fun.live;
  const { board, enabled, loaded, send } = useLive();
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  if (!loaded || !enabled) return null;
  const s = board[id];
  const level = crowdLevel(s?.crowd_avg);

  const report = async (kind: SignalKind, value = 1) => {
    if (busy) return;
    setBusy(true);
    const outcome = await send(id, kind, value);
    setMsg(outcome === "ok" ? L.thanks[lang] : outcome === "already" ? (kind === "love" ? L.alreadyLove : L.already)[lang] : L.failed[lang]);
    if (outcome === "ok") track("live_report", { kind, pandal: id, value });
    setBusy(false);
  };

  return (
    <section className="crowd" aria-labelledby="crowd-h">
      <h2 id="crowd-h">{L.h2[lang]}</h2>
      <p className="crowd-now">
        {level && s ? (
          <>
            <b className={`crowd-level crowd-${level}`}>
              {ICON[level]} {L.levels[level - 1][lang]}
            </b>{" "}
            <span className="fineprint">{fill(L.reports[lang], { n: num(s.crowd_n, lang) })}</span>
          </>
        ) : (
          <span className="fineprint">{L.noReports[lang]}</span>
        )}
      </p>
      <div className="crowd-btns" role="group" aria-label={L.h2[lang]}>
        {L.levels.map((lv, i) => (
          <button key={lv.en} type="button" className="chip" disabled={busy} onClick={() => report("crowd", i + 1)}>
            {ICON[(i + 1) as 1 | 2 | 3]} {lv[lang]}
          </button>
        ))}
      </div>
      <p className="cta-row">
        <button type="button" className="button button-light" disabled={busy} onClick={() => report("here")}>
          {L.here[lang]}
          {s?.here_n ? ` · ${num(s.here_n, lang)}` : ""}
        </button>
        <button type="button" className="button button-light" disabled={busy} onClick={() => report("love")}>
          {L.love[lang]}
          {s?.love_today ? ` · ${num(s.love_today, lang)}` : ""}
        </button>
      </p>
      <p className="fineprint" role="status" aria-live="polite">
        {msg || L.privacy[lang]}
      </p>
    </section>
  );
}
