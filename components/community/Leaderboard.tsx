"use client";

import { useEffect, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { track } from "@/lib/analytics";
import { cleanNick, NICK_MAX } from "@/lib/community-shared";
import { num, type Lang } from "@/lib/i18n";
import { useProfile } from "@/lib/use-profile";
import { useCommunity } from "./useCommunity";

/** Passport leaderboard: opt-in with a nickname; score = pandals ticked. Hidden without a database. */
export default function Leaderboard({ lang, score }: { lang: Lang; score: number }) {
  const C = fun.community;
  const { profile } = useProfile();
  const { data, enabled, loaded, record, refresh } = useCommunity();
  const [nick, setNick] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [joined, setJoined] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("fa:nick");
      setNick((n) => n || saved || "");
      const s = window.localStorage.getItem("fa:board:passport");
      if (s) setJoined(Number(s));
    } catch {
      // ignore
    }
  }, []);
  useEffect(() => {
    setNick((n) => n || profile.name || "");
  }, [profile.name]);

  if (!loaded || !enabled) return null;
  const rows = data.leaderboard.passport ?? [];
  const nickname = cleanNick(nick);

  const join = async () => {
    if (!score) return setMsg(C.needTick[lang]);
    if (!nickname) return;
    setBusy(true);
    const ok = await record({ game: "passport", score, nickname });
    setBusy(false);
    setMsg(ok ? C.joined[lang] : C.joinFailed[lang]);
    if (ok) {
      track("leaderboard_join", { score });
      setJoined(score);
      try {
        window.localStorage.setItem("fa:nick", nickname);
        window.localStorage.setItem("fa:board:passport", String(score));
      } catch {
        // ignore
      }
      refresh();
    }
  };

  return (
    <section className="board" aria-labelledby="board-h2">
      <h2 id="board-h2">{C.boardH2[lang]}</h2>
      <p className="section-lead">{C.boardP[lang]}</p>
      <form
        className="board-join"
        onSubmit={(e) => {
          e.preventDefault();
          join();
        }}
      >
        <label className="cx-field">
          <span>{C.nickLabel[lang]}</span>
          <input className="cx-input" type="text" maxLength={NICK_MAX * 2} placeholder={C.nickPh[lang]} value={nick} onChange={(e) => setNick(e.target.value)} />
        </label>
        <button type="submit" className="button" disabled={busy || !nickname}>
          {joined !== null && joined !== score ? fill(C.update[lang], { n: num(score, lang) }) : C.join[lang]}
        </button>
        <p className="fineprint" role="status">
          {msg || C.joinNote[lang]}
        </p>
      </form>
      {rows.length ? (
        <ol className="board-list">
          {rows.map((r, i) => (
            <li key={`${r.nickname}-${r.at}`} className={nickname && r.nickname === nickname ? "is-me" : undefined}>
              <span className="board-rank" aria-hidden="true">
                {i < 3 ? ["🥇", "🥈", "🥉"][i] : num(i + 1, lang)}
              </span>
              <span className="board-name">{r.nickname}</span>
              <b className="board-score">{num(r.score, lang)}</b>
            </li>
          ))}
        </ol>
      ) : (
        <p className="notice">{C.boardEmpty[lang]}</p>
      )}
    </section>
  );
}
