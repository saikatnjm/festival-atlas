"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ResultCard from "@/components/play/ResultCard";
import ShareBar from "@/components/play/ShareBar";
import type { PlayStrings } from "@/components/play/strings";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { ACTIVITY_KEY, loadActivity, type ActivityEvent } from "@/lib/activity";
import { fmtDateWithDay } from "@/lib/dates";
import { distanceM } from "@/lib/geo";
import { num, withLang, type Lang } from "@/lib/i18n";
import { cleanName } from "@/lib/profile";
import { PUJA_2026, PUJA_DAYS } from "@/lib/puja-dates";
import { copyText, type CardData } from "@/lib/share";
import { useProfile } from "@/lib/use-profile";
import { useVisits } from "@/lib/use-visits";
import { todayLocal, visitsToQuery } from "@/lib/visits";

/** Slim pandal row for lookups (built server-side). */
export interface MePandal {
  id: string;
  name: string;
  area?: string;
  lat?: number;
  lng?: number;
}

type Region = "wb" | "bd";
const isRegion = (v: unknown): v is Region => v === "wb" || v === "bd";
const WHAT = fun.my.what;
const isWhat = (v: unknown): v is keyof typeof WHAT => typeof v === "string" && Object.prototype.hasOwnProperty.call(WHAT, v);
/** Legs longer than this are a train ride, not a hop, and don't count towards the walked distance. */
const MAX_LEG_M = 30_000;

/** "My Puja": stats, a day-by-day log and a shareable summary card, all from this browser's storage. */
export default function MyPuja({ lang, items, s }: { lang: Lang; items: MePandal[]; s: PlayStrings }) {
  const M = fun.my;
  const { profile, ready } = useProfile();
  const { visits } = useVisits();
  const [log, setLog] = useState<ActivityEvent[]>([]);
  const [region, setRegion] = useState<Region>("wb");
  const [nick, setNick] = useState("");
  const [msg, setMsg] = useState("");
  const [artKey, setArtKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const getArt = useCallback(() => ref.current?.querySelector(".cx-card-art svg")?.outerHTML ?? null, []);
  const onArtChange = useCallback(() => setArtKey((n) => n + 1), []);

  useEffect(() => {
    const sync = () => setLog(loadActivity());
    sync();
    try {
      const r = window.localStorage.getItem("fa:region");
      if (isRegion(r)) setRegion(r);
      setNick(cleanName(window.localStorage.getItem("fa:nick")));
    } catch {
      // ignore
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const byId = useMemo(() => {
    const m = new Map<string, MePandal>();
    for (const i of items) m.set(i.id, i);
    return m;
  }, [items]);
  const nameOf = (id?: string) => (id ? (byId.get(id)?.name ?? id) : "");

  // The passport is the truth for visits: an un-ticked pandal drops out of the log view, a re-ticked one
  // shows once (its newest event). Visits ticked before logging existed get a row at local midnight
  // on their day (so no time of day is shown).
  const events = useMemo(() => {
    const ticked = new Set(visits.map((v) => v.id));
    const seen = new Set<string>();
    const kept: ActivityEvent[] = [];
    for (const e of [...log].reverse()) {
      if (e.kind === "visit") {
        if (!e.id || !ticked.has(e.id) || seen.has(e.id)) continue;
        seen.add(e.id);
      }
      kept.push(e);
    }
    const older: ActivityEvent[] = visits.filter((v) => !seen.has(v.id)).map((v) => ({ kind: "visit", id: v.id, at: Date.parse(`${v.on}T00:00:00`) || 0 }));
    return [...kept, ...older].sort((a, b) => b.at - a.at);
  }, [log, visits]);
  const groups = useMemo(() => {
    const out: { day: string; items: ActivityEvent[] }[] = [];
    for (const e of events) {
      const day = todayLocal(new Date(e.at));
      const last = out[out.length - 1];
      if (last && last.day === day) last.items.push(e);
      else out.push({ day, items: [e] });
    }
    return out;
  }, [events]);

  const tithi = (iso: string): string | null => {
    if (iso === "2026-10-10") return M.mahalaya[lang];
    const cal = PUJA_2026[region];
    const d = PUJA_DAYS.find((x) => cal[x.id] === iso);
    return d ? d[lang] : null;
  };

  // Stats.
  const n = visits.length;
  const days = new Set(visits.map((v) => v.on)).size;
  const count = (kind: ActivityEvent["kind"]) => log.filter((e) => e.kind === kind).length;
  let metres = 0;
  for (let i = 1; i < visits.length; i++) {
    const a = byId.get(visits[i - 1].id);
    const b = byId.get(visits[i].id);
    if (!a || !b || typeof a.lat !== "number" || typeof a.lng !== "number" || typeof b.lat !== "number" || typeof b.lng !== "number") continue;
    const d = distanceM({ lat: a.lat, lng: a.lng }, { lat: b.lat, lng: b.lng });
    if (d <= MAX_LEG_M) metres += d;
  }
  const km = metres / 1000;
  const kmText = km >= 10 ? num(Math.round(km), lang) : lang === "bn" ? num(Math.round(km * 10) / 10, lang) : (Math.round(km * 10) / 10).toString();
  const who = cleanName(profile.name);

  // Summary card from the same engine as the games.
  const areas = useMemo(() => {
    const tally = new Map<string, number>();
    for (const v of visits) {
      const a = byId.get(v.id)?.area;
      if (a) tally.set(a, (tally.get(a) ?? 0) + 1);
    }
    return [...tally.entries()]
      .sort((x, y) => y[1] - x[1])
      .slice(0, 4)
      .map(([a]) => a);
  }, [visits, byId]);
  const tier = n === 0 ? M.tier0 : n <= 2 ? M.tier1 : n <= 5 ? M.tier2 : M.tier3;
  const vars = { n: num(n, lang), d: num(days, lang), km: kmText };
  const card: CardData = useMemo(
    () => ({
      lang,
      char: "selfie",
      mood: n >= 3 ? "proud" : "happy",
      kicker: M.kicker[lang],
      owner: who ? fill(M.owner[lang], { name: who }) : undefined,
      title: km >= 1 ? fill(M.titleKm[lang], vars) : fill(M.title[lang], vars),
      punchline: tier[lang],
      traits: areas,
      list: visits
        .slice(-6)
        .reverse()
        .map((v) => `✅ ${nameOf(v.id)}`),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang, n, days, kmText, who, areas, visits, byId],
  );
  const sharePath = `${withLang(lang, "/passport")}?v=${visitsToQuery(visits)}${who ? `&n=${encodeURIComponent(who)}` : ""}`;

  const exportData = async () => {
    const ok = await copyText(JSON.stringify({ exportedAt: new Date().toISOString(), profile, visits, activity: log }, null, 2));
    setMsg(ok ? M.exported[lang] : M.exportFailed[lang]);
  };
  const clearLog = () => {
    if (!window.confirm(M.clearConfirm[lang])) return;
    try {
      window.localStorage.removeItem(ACTIVITY_KEY);
    } catch {
      // ignore
    }
    setLog([]);
  };

  const row = (e: ActivityEvent) => {
    switch (e.kind) {
      case "visit":
        return fill(M.rowVisit[lang], { name: nameOf(e.id) });
      case "postcard":
        // Typed (unlisted) pandals carry "name · stamp" in the label and have no id.
        return e.id ? fill(M.rowPostcard[lang], { name: nameOf(e.id), stamp: e.label ?? "" }) : `📸 ${e.label ?? ""}`;
      case "play":
        return fill(M.rowPlay[lang], { label: e.label ?? e.id ?? "" });
      case "report":
        return fill(M.rowReport[lang], { name: nameOf(e.id), what: isWhat(e.label) ? WHAT[e.label][lang] : (e.label ?? "") });
      default:
        return M.rowGreeting[lang];
    }
  };
  const time = (at: number) => {
    const d = new Date(at);
    return d.getHours() || d.getMinutes() ? d.toLocaleTimeString(lang === "bn" ? "bn-BD" : "en-IN", { hour: "numeric", minute: "2-digit" }) : "";
  };

  return (
    <div className="my">
      <p className="my-hello">
        <b>{who ? fill(M.hello[lang], { name: who }) : M.h1[lang]}</b>{" "}
        <Link className="cx-link-btn" href={`${withLang(lang, "/play")}?me=1`}>
          {who ? M.changeName[lang] : M.setName[lang]}
        </Link>
        {nick ? <span className="fineprint"> · {fill(M.joined[lang], { nick })}</span> : null}
      </p>

      <ul className="my-stats" aria-busy={!ready}>
        <li>
          <b>{num(n, lang)}</b> {M.visited[lang]}
        </li>
        <li>
          <b>{num(days, lang)}</b> {M.days[lang]}
        </li>
        <li>
          <b>{num(count("postcard"), lang)}</b> {M.postcards[lang]}
        </li>
        <li>
          <b>{num(count("report"), lang)}</b> {M.reports[lang]}
        </li>
        <li>
          <b>{num(count("play"), lang)}</b> {M.plays[lang]}
        </li>
        {km >= 1 ? (
          <li>
            <b>{kmText}</b> {M.km[lang]}
          </li>
        ) : null}
      </ul>

      <section className="cx" aria-labelledby="my-card-h">
        <h2 id="my-card-h" className="cx-h2">
          {M.wrappedH2[lang]}
        </h2>
        <p className="section-lead">{M.wrappedP[lang]}</p>
        <div className="cx-stage">
          <section className="cx-result" aria-label={M.wrappedH2[lang]}>
            <div ref={ref}>
              <ResultCard key={`${n}|${days}|${who}|${kmText}`} card={card} s={s} onArtChange={onArtChange} />
            </div>
            <ShareBar s={s} path={sharePath} title={M.h1[lang]} text={fill(M.shareText[lang], vars)} card={card} getArt={getArt} artKey={artKey} />
          </section>
        </div>
      </section>

      <section aria-labelledby="my-days-h">
        <h2 id="my-days-h">{M.timelineH2[lang]}</h2>
        {groups.length === 0 ? (
          <p className="fineprint">
            {M.empty[lang]} <Link href={withLang(lang, "/puja")}>🗺️</Link> <Link href={withLang(lang, "/postcard")}>📸</Link>
          </p>
        ) : null}
        {groups.map((g) => {
          const t = tithi(g.day);
          return (
            <section key={g.day} className="my-day">
              <h3>
                {fmtDateWithDay(g.day, lang)}
                {t ? <span className="my-tithi"> · {t}</span> : null}
              </h3>
              <ul className="my-events">
                {g.items.map((e, i) => (
                  <li key={`${e.at}-${i}`}>
                    <span className="my-when">{time(e.at)}</span> {row(e)}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </section>

      <p className="cta-row">
        <button type="button" className="button button-light" onClick={exportData}>
          {M.exportBtn[lang]}
        </button>
        <button type="button" className="button button-light" onClick={clearLog}>
          {M.clearBtn[lang]}
        </button>
      </p>
      <p className="fineprint" role="status" aria-live="polite">
        {msg || M.privacy[lang]}
      </p>
    </div>
  );
}
