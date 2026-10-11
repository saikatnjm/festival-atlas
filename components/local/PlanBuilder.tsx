"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Region } from "@/data/events/events";
import { DAYS, planPunchline, regionInfo, ui } from "@/data/local/content";
import type { Stop } from "@/data/local/stops";
import { fill } from "@/data/play/personal";
import ResultCard from "@/components/play/ResultCard";
import ShareBar from "@/components/play/ShareBar";
import type { PlayStrings } from "@/components/play/strings";
import { num, withLang, type Lang } from "@/lib/i18n";
import { cleanName, possessive } from "@/lib/profile";
import type { CardData } from "@/lib/share";
import { useProfile } from "@/lib/use-profile";

export const PLAN_MAX = 8;

interface Props {
  lang: Lang;
  s: PlayStrings;
  region: Region;
  stops: Stop[];
  /** A preset chosen above; `n` changes on every click so the same preset can be re-applied. */
  preset: { ids: string[]; n: number } | null;
}

/** Plan query: region, stop ids, optional day and optional name. Everything the card shows is in the link. */
function planQuery(region: Region, ids: string[], day: string, name: string): string {
  const q = new URLSearchParams({ r: region, p: ids.join(",") });
  if (day) q.set("d", day);
  if (name) q.set("n", name);
  return q.toString();
}

export default function PlanBuilder({ lang, s, region, stops, preset }: Props) {
  const { profile } = useProfile();
  const [ids, setIds] = useState<string[]>([]);
  const [day, setDay] = useState("");
  const [view, setView] = useState<"edit" | "card">("edit");
  const [sharedName, setSharedName] = useState<string | null>(null);
  const [artKey, setArtKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const byId = new Map(stops.map((x) => [x.id, x]));

  // Opened from a shared plan link: show that plan (with the sender's name, if the link has one).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("r") !== region || !q.get("p")) return;
    const valid = new Set(stops.map((x) => x.id));
    const list = (q.get("p") ?? "").split(",").filter((id) => valid.has(id)).slice(0, PLAN_MAX);
    if (!list.length) return;
    const d = q.get("d") ?? "";
    setIds(list);
    setDay(DAYS.some((x) => x.id === d) ? d : "");
    setSharedName(cleanName(q.get("n")));
    setView("card");
  }, [region, stops]);

  useEffect(() => {
    if (preset) {
      setIds(preset.ids.filter((id) => byId.has(id)).slice(0, PLAN_MAX));
      setSharedName(null);
      setView("edit");
    }
    // byId is derived from stops; re-run only for a new preset click.
  }, [preset?.n]);

  const getArt = useCallback(() => ref.current?.querySelector(".cx-card-art svg")?.outerHTML ?? null, []);
  const onArtChange = useCallback(() => setArtKey((n) => n + 1), []);

  const toggle = (id: string) => setIds((list) => (list.includes(id) ? list.filter((x) => x !== id) : list.length < PLAN_MAX ? [...list, id] : list));
  const move = (i: number, d: -1 | 1) =>
    setIds((list) => {
      const j = i + d;
      if (j < 0 || j >= list.length) return list;
      const next = list.slice();
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  const name = sharedName ?? cleanName(profile.name);
  const dayLabel = DAYS.find((x) => x.id === day)?.label[lang];
  const card: CardData = {
    lang,
    char: region === "wb" ? "detective" : "bagha",
    mood: "proud",
    kicker: [ui.cardKicker[lang], regionInfo[region].short[lang], dayLabel].filter(Boolean).join(" · "),
    title: fill(ui.cardTitle[lang], { of: possessive(name, lang) }),
    punchline: planPunchline(ids.length)[lang],
    list: ids.map((id, i) => {
      const x = byId.get(id);
      return `${num(i + 1, lang)}. ${x?.name ?? id}${x?.place ? ` · ${x.place}` : ""}`;
    }),
    stat: { label: ui.stat[lang], value: Math.min(100, 40 + ids.length * 8) },
  };

  if (view === "card" && ids.length) {
    return (
      <section className="cx-result" aria-label={ui.myPlan[lang]}>
        <div ref={ref}>
          <ResultCard key={card.title + ids.join()} card={card} s={s} onArtChange={onArtChange} />
        </div>
        <p className="cx-note">{ui.planNote[lang]}</p>
        <ShareBar
          s={s}
          path={`${withLang(lang, "/local")}?${planQuery(region, ids, day, name)}`}
          title={`${card.title} · Festival Atlas`}
          text={ui.shareText[lang]}
          card={card}
          getArt={getArt}
          artKey={artKey}
        />
        <p className="cx-share-row">
          <button
            type="button"
            className="cx-btn cx-btn-light"
            onClick={() => {
              setSharedName(null);
              setView("edit");
            }}
          >
            {ui.edit[lang]}
          </button>
        </p>
      </section>
    );
  }

  return (
    <div className="plan">
      <div className="plan-mine">
        <h3 className="cx-h3">{ui.myPlan[lang]}</h3>
        {ids.length ? (
          <ol className="plan-picked">
            {ids.map((id, i) => {
              const x = byId.get(id);
              if (!x) return null;
              return (
                <li key={id}>
                  <span className="plan-name">{x.name}</span>
                  <span className="plan-btns">
                    <button type="button" className="cx-link-btn" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`${ui.up[lang]}: ${x.name}`}>
                      ↑
                    </button>
                    <button type="button" className="cx-link-btn" onClick={() => move(i, 1)} disabled={i === ids.length - 1} aria-label={`${ui.down[lang]}: ${x.name}`}>
                      ↓
                    </button>
                    <button type="button" className="cx-link-btn" onClick={() => toggle(id)} aria-label={`${ui.remove[lang]}: ${x.name}`}>
                      ✕
                    </button>
                  </span>
                </li>
              );
            })}
          </ol>
        ) : (
          <p className="cx-note">{ui.empty[lang]}</p>
        )}
        <fieldset className="cx-field">
          <legend>{ui.day[lang]}</legend>
          <div className="cx-chips">
            <button type="button" className="cx-chip" aria-pressed={day === ""} onClick={() => setDay("")}>
              {ui.anyDay[lang]}
            </button>
            {DAYS.map((d) => (
              <button key={d.id} type="button" className="cx-chip" aria-pressed={day === d.id} onClick={() => setDay(d.id)}>
                {d.label[lang]}
              </button>
            ))}
          </div>
        </fieldset>
        <button type="button" className="cx-btn cx-btn-big" disabled={!ids.length} onClick={() => setView("card")}>
          {ui.make[lang]}
        </button>
      </div>
      <h3 className="cx-h3">{ui.listH3[lang]}</h3>
      <p className="cx-note">{ui.directoryNote[lang]}</p>
      <ul className="plan-stops">
        {stops.map((x) => {
          const on = ids.includes(x.id);
          return (
            <li key={x.id} className={on ? "is-on" : undefined}>
              <div>
                <p className="plan-name">{x.href ? <a href={x.href}>{x.name}</a> : x.name}</p>
                {x.place ? <p className="plan-place">{x.place}</p> : null}
                {x.note ? <p className="plan-note">{x.note}</p> : null}
              </div>
              <button type="button" className="cx-chip" aria-pressed={on} onClick={() => toggle(x.id)} disabled={!on && ids.length >= PLAN_MAX}>
                {on ? `✓ ${ui.added[lang]}` : `+ ${ui.add[lang]}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
