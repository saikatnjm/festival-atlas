"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ResultCard from "@/components/play/ResultCard";
import ShareBar from "@/components/play/ShareBar";
import type { PlayStrings } from "@/components/play/strings";
import { fun } from "@/data/i18n/fun";
import { STOP_META } from "@/data/local/routes";
import type { Stop } from "@/data/local/stops";
import { fill } from "@/data/play/personal";
import { num, withLang, type Lang } from "@/lib/i18n";
import { cleanName, possessive } from "@/lib/profile";
import type { CardData } from "@/lib/share";
import { useProfile } from "@/lib/use-profile";
import { useVisits } from "@/lib/use-visits";
import { visitsFromQuery, visitsToQuery, type Visit } from "@/lib/visits";

export interface PassportGroup {
  key: string;
  icon: string;
  title: string;
  stops: Stop[];
}

interface Props {
  lang: Lang;
  s: PlayStrings;
  /** Tickable pandals, grouped (Kolkata, Dhaka, elsewhere), already in the page language. */
  groups: PassportGroup[];
}

/** The "ঘুরেছি" passport: a shareable card built from the player's ticks, plus the tick list itself. */
export default function Passport({ lang, s, groups }: Props) {
  const p = fun.passport;
  const { profile } = useProfile();
  const { visits: mine, ready, toggle } = useVisits();
  const [shared, setShared] = useState<{ visits: Visit[]; name: string } | null>(null);
  const [artKey, setArtKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const getArt = useCallback(() => ref.current?.querySelector(".cx-card-art svg")?.outerHTML ?? null, []);
  const onArtChange = useCallback(() => setArtKey((n) => n + 1), []);

  const all = useMemo(() => new Map(groups.flatMap((g) => g.stops).map((x) => [x.id, x])), [groups]);

  // A shared passport link (?v=id1,id2&n=Name) shows the sender's ticks instead of mine.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const list = visitsFromQuery(q.get("v")).filter((v) => all.has(v.id));
    if (list.length) setShared({ visits: list, name: cleanName(q.get("n")) });
  }, [all]);

  const visits = shared ? shared.visits : mine.filter((v) => all.has(v.id));
  const name = shared ? shared.name : cleanName(profile.name);
  const areas = new Set(visits.map((v) => all.get(v.id)?.place).filter(Boolean));
  const zones = new Set(visits.map((v) => STOP_META[v.id]?.zone).filter(Boolean));
  const n = visits.length;
  const traits = [fill(p.areas[lang], { n: num(areas.size, lang) })];
  if (zones.has("north") && zones.has("south")) traits.push(p.both[lang]);

  const card: CardData = {
    lang,
    char: n >= 7 ? "bagha" : n >= 3 ? "detective" : "sleepy",
    mood: n >= 7 ? "proud" : n >= 3 ? "smug" : "happy",
    kicker: p.kicker[lang],
    owner: fill(p.cardTitle[lang], { of: possessive(name, lang) }),
    title: fill(p.count[lang], { n: num(n, lang) }),
    punchline: p.punch[Math.min(2, n >= 7 ? 2 : n >= 3 ? 1 : 0)][lang],
    list: visits.slice(0, 8).map((v, i) => `${num(i + 1, lang)}. ${all.get(v.id)?.name ?? v.id}`),
    traits: n ? traits : undefined,
    stat: { label: p.stat[lang], value: Math.min(100, n * 12) },
  };
  const query = new URLSearchParams({ v: visitsToQuery(visits) });
  if (name) query.set("n", name);

  return (
    <div className="passport">
      {shared ? (
        <p className="notice">
          {shared.name ? fill(p.viewing[lang], { name: shared.name }) : p.viewingAnon[lang]}{" "}
          <button type="button" className="link-button" onClick={() => setShared(null)}>
            {p.mine[lang]}
          </button>
        </p>
      ) : null}
      {ready && n === 0 && !shared ? <p className="notice">{p.none[lang]}</p> : null}
      <section className="cx-result" aria-label={p.title[lang]}>
        <div ref={ref}>
          <ResultCard key={`${n}|${name}`} card={card} s={s} onArtChange={onArtChange} />
        </div>
        <ShareBar
          s={s}
          path={`${withLang(lang, "/passport")}?${query.toString()}`}
          title={`${card.owner} · ${s.card.brand}`}
          text={fill(p.shareText[lang], { n: num(n, lang) })}
          card={card}
          getArt={getArt}
          artKey={artKey}
        />
        <p className="cx-note">{p.note[lang]}</p>
      </section>

      {!shared ? (
        <section className="home-section" aria-labelledby="pass-list">
          <h2 id="pass-list">{p.checklist[lang]}</h2>
          {groups.map((g) => (
            <div key={g.key} className="col-group">
              <h3>
                {g.icon} {g.title}
              </h3>
              <ul className="tick-list">
                {g.stops.map((x) => {
                  const on = mine.some((v) => v.id === x.id);
                  return (
                    <li key={x.id}>
                      <button type="button" className={`tick${on ? " is-on" : ""}`} aria-pressed={on} onClick={() => toggle(x.id)}>
                        <span className="tick-box" aria-hidden="true">
                          {on ? "✓" : ""}
                        </span>
                        <span className="tick-text">
                          <span className="plan-name">{x.name}</span>
                          {x.place ? <span className="plan-place">{x.place}</span> : null}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}
