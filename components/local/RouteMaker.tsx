"use client";

import { useId, useMemo, useState } from "react";
import type { FestEvent, Region } from "@/data/events/events";
import { ui } from "@/data/local/content";
import { FACTS, SLOTS, START_PLACES, VIBES, buildRoute, type VibeId } from "@/data/local/routes";
import type { Stop } from "@/data/local/stops";
import { fill } from "@/data/play/personal";
import { num, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  region: Region;
  stops: Stop[];
  events: FestEvent[];
  onUse: (ids: string[]) => void;
}

/** Starting neighbourhood + vibe + time slider -> an instant, playful route that can feed the plan builder. */
export default function RouteMaker({ lang, region, stops, events, onUse }: Props) {
  const id = useId();
  const [start, setStart] = useState<string | null>(null);
  const [vibe, setVibe] = useState<VibeId | null>(null);
  const [slot, setSlot] = useState(1);
  const [variant, setVariant] = useState(0);

  const places = START_PLACES.filter((p) => p.region === region);
  const byId = useMemo(() => new Map(stops.map((x) => [x.id, x])), [stops]);
  const available = useMemo(() => new Set(stops.map((x) => x.id)), [stops]);
  const route = start && vibe ? buildRoute(region, start, vibe, available, variant) : null;
  const place = places.find((p) => p.id === start);
  const v = VIBES.find((x) => x.id === vibe);
  const s = SLOTS[slot];
  const fact = FACTS[region];
  const factSource = events.find((e) => e.id === fact.eventId)?.sources[0];

  return (
    <div className="route">
      <fieldset className="cx-field">
        <legend>{ui.routeStart[lang]}</legend>
        <div className="cx-chips">
          {places.map((p) => (
            <button key={p.id} type="button" className="cx-chip" aria-pressed={start === p.id} onClick={() => setStart(p.id)}>
              <span aria-hidden="true">{p.icon}</span> {p.name[lang]}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="cx-field">
        <legend>{ui.routeVibe[lang]}</legend>
        <div className="cx-chips">
          {VIBES.map((x) => (
            <button key={x.id} type="button" className="cx-chip" aria-pressed={vibe === x.id} onClick={() => setVibe(x.id)}>
              <span aria-hidden="true">{x.icon}</span> {x.name[lang]}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="cx-field">
        <label htmlFor={`${id}-t`}>{ui.routeTime[lang]}</label>
        <div className="route-slider">
          <input
            id={`${id}-t`}
            type="range"
            min={0}
            max={SLOTS.length - 1}
            step={1}
            value={slot}
            aria-valuetext={s.name[lang]}
            onChange={(e) => setSlot(Number(e.target.value))}
          />
          <output htmlFor={`${id}-t`} className="route-slot">
            <span aria-hidden="true">{s.icon}</span> {s.name[lang]}
          </output>
        </div>
      </div>

      {route && place && v ? (
        <div className="route-ticket" aria-live="polite">
          <p className="route-joke">“{place.joke[lang]}”</p>
          <ol className="route-steps">
            <li className="route-start">
              <span aria-hidden="true">📍</span> {fill(ui.routeFrom[lang], { place: place.name[lang] })}
            </li>
            {route.stops.map((sid, i) => {
              const x = byId.get(sid);
              const brk = route.breaks.find((b) => b.after === i);
              return (
                <li key={sid} className="route-stop-wrap">
                  <div className="route-stop">
                    <span className="route-num" aria-hidden="true">
                      {num(i + 1, lang)}
                    </span>
                    <div>
                      <p className="plan-name">{x?.href ? <a href={x.href}>{x.name}</a> : (x?.name ?? sid)}</p>
                      {x?.place ? <p className="plan-place">{x.place}</p> : null}
                    </div>
                  </div>
                  {brk ? <p className="route-break">{brk.label[lang]}</p> : null}
                </li>
              );
            })}
          </ol>
          <p className="route-verdict">
            <span aria-hidden="true">{v.icon}</span> {v.verdict[lang]}
          </p>
          <p className="route-time">
            <span aria-hidden="true">{s.icon}</span> {s.line[lang]}
          </p>
          <p className="route-fact">
            <b>{ui.routeFact[lang]}:</b> {fact.text[lang]}{" "}
            {factSource ? (
              <a href={factSource.url} target="_blank" rel="noopener noreferrer" title={factSource.title} aria-label={`${ui.source[lang]}: ${factSource.title}`}>
                ℹ️
              </a>
            ) : null}
          </p>
          <p className="cx-share-row">
            <button type="button" className="cx-btn" onClick={() => onUse(route.stops)} disabled={!route.stops.length}>
              {ui.routeUse[lang]}
            </button>
            <button type="button" className="cx-btn cx-btn-light" onClick={() => setVariant((n) => n + 1)}>
              {ui.routeAgain[lang]}
            </button>
          </p>
        </div>
      ) : (
        <p className="cx-note">{ui.routePick[lang]}</p>
      )}
      <p className="route-note">{ui.routeNote[lang]}</p>
    </div>
  );
}
