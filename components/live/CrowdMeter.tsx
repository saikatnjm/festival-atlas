"use client";

import { useState } from "react";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { logActivity } from "@/lib/activity";
import { track } from "@/lib/analytics";
import { num, type Lang } from "@/lib/i18n";
import { TIMING_KINDS, crowdLevel, fmtClock, waitLabel, type SignalKind, type TimingKind } from "@/lib/live-shared";
import { useLive } from "./useLive";

const ICON = { 1: "🟢", 2: "🟠", 3: "🔴" } as const;

/**
 * Pandal page: live crowd level + report buttons, queue wait, "I'm here", "love it", and today's
 * anjali/bhog times as reported by visitors. Hidden when no database is configured.
 */
export default function CrowdMeter({ id, lang }: { id: string; lang: Lang }) {
  const L = fun.live;
  const { board, timings, enabled, loaded, send, sendTiming } = useLive();
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [times, setTimes] = useState<Record<TimingKind, string>>({ anjali: "", bhog: "" });
  if (!loaded || !enabled) return null;
  const s = board[id];
  const level = crowdLevel(s?.crowd_avg);
  const wait = waitLabel(s?.wait_med);
  const t = timings[id] ?? {};

  const report = async (kind: SignalKind, value = 1) => {
    if (busy) return;
    setBusy(true);
    const outcome = await send(id, kind, value);
    setMsg(outcome === "ok" ? L.thanks[lang] : outcome === "already" ? (kind === "love" ? L.alreadyLove : L.already)[lang] : L.failed[lang]);
    if (outcome === "ok") {
      track("live_report", { kind, pandal: id, value });
      logActivity({ kind: "report", id, label: kind });
    }
    setBusy(false);
  };

  const reportTiming = async (kind: TimingKind) => {
    const v = times[kind];
    const m = /^(\d{1,2}):(\d{2})$/.exec(v);
    if (!m || busy) return;
    const minutes = Number(m[1]) * 60 + Number(m[2]);
    if (minutes < 0 || minutes > 1439) return;
    setBusy(true);
    const outcome = await sendTiming(id, kind, minutes);
    setMsg(outcome === "ok" ? L.thanks[lang] : outcome === "already" ? L.timingAlready[lang] : L.failed[lang]);
    if (outcome === "ok") {
      track("live_timing", { kind, pandal: id });
      logActivity({ kind: "report", id, label: kind });
    }
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
        ) : null}
        {/* Queue wait stands on its own: it lasts 90 min while crowd reports last 60, and may be the only report. */}
        {wait ? (
          <span className="crowd-wait">
            {level && s ? " · " : ""}⏳ {fill(L.waitNow[lang], { m: lang === "bn" ? wait.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]) : wait })}
          </span>
        ) : null}
        {!level && !wait ? <span className="fineprint">{L.noReports[lang]}</span> : null}
      </p>
      <div className="crowd-btns" role="group" aria-label={L.h2[lang]}>
        {L.levels.map((lv, i) => (
          <button key={lv.en} type="button" className="chip" disabled={busy} onClick={() => report("crowd", i + 1)}>
            {ICON[(i + 1) as 1 | 2 | 3]} {lv[lang]}
          </button>
        ))}
      </div>
      <h3 className="crowd-h3">{L.waitH3[lang]}</h3>
      <div className="crowd-btns" role="group" aria-label={L.waitH3[lang]}>
        {L.waitOpts.map((o, i) => (
          <button key={o.en} type="button" className="chip" disabled={busy} onClick={() => report("wait", i + 1)}>
            ⏳ {o[lang]}
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

      <h3 className="crowd-h3">{L.timingsH3[lang]}</h3>
      <p className="fineprint">{L.timingsP[lang]}</p>
      <ul className="timings">
        {TIMING_KINDS.map((k) => {
          const stat = t[k];
          const label = L[k][lang];
          return (
            <li key={k}>
              <span className="timing-now">
                {stat ? fill(L.timingNow[lang], { kind: label, time: fmtClock(stat.minutes, lang), n: num(stat.n, lang) }) : fill(L.timingNone[lang], { kind: label })}
              </span>
              <span className="timing-form">
                <input
                  type="time"
                  className="timing-input"
                  aria-label={`${label}: ${L.timingSend[lang]}`}
                  value={times[k]}
                  onChange={(e) => setTimes((x) => ({ ...x, [k]: e.target.value }))}
                />
                <button type="button" className="chip" disabled={busy || !times[k]} onClick={() => reportTiming(k)}>
                  {L.timingSend[lang]}
                </button>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="fineprint" role="status" aria-live="polite">
        {msg || L.privacy[lang]}
      </p>
    </section>
  );
}
