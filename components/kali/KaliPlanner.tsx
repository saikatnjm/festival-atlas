"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fun } from "@/data/i18n/fun";
import type { PandalItem } from "@/data/pandals/view";
import { fill } from "@/data/play/personal";
import { track } from "@/lib/analytics";
import { num, withLang, type Lang } from "@/lib/i18n";
import { copyText, shareLink } from "@/lib/share";

// Leaflet touches `window`, so the map is only loaded in the browser.
const PujaMap = dynamic(() => import("@/components/puja/PujaMap"), { ssr: false });

type Pin = PandalItem & { lat: number; lng: number };
const isPin = (p: PandalItem): p is Pin => typeof p.lat === "number" && typeof p.lng === "number";

/** Cities in the order people ask for them; the rest follow alphabetically. */
const CITY_ORDER = ["Dhaka", "Kolkata", "Naihati", "Barasat"];
const STORE_KEY = "fa:kali:plan:2026";
const ID_RE = /^[a-z0-9-]{3,80}$/;

/**
 * Kali Puja night planner: tap the places you want to visit, get them as a list, open the whole
 * route in Google Maps, share it as a link. Everything stays in this browser.
 */
export default function KaliPlanner({ lang, items, cityLabels, mapAria, mapLoading }: { lang: Lang; items: PandalItem[]; cityLabels: Record<string, string>; mapAria: string; mapLoading: string }) {
  const K = fun.kaliPlan;
  // City names in the page language come from the server, so the directory JSON never ships to the browser.
  const cityName = (c: string) => (Object.prototype.hasOwnProperty.call(cityLabels, c) ? cityLabels[c] : c);
  const cities = useMemo(() => {
    const seen = [...new Set(items.map((p) => p.city))];
    return seen.sort((a, b) => {
      const ia = CITY_ORDER.indexOf(a);
      const ib = CITY_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b);
    });
  }, [items]);
  const [city, setCity] = useState<string>(cities[0] ?? "");
  const [plan, setPlan] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [msg, setMsg] = useState("");
  const [ready, setReady] = useState(false);

  // A shared link (?plan=id,id) wins over the saved plan; the first stop's city opens the right list.
  useEffect(() => {
    let ids: string[] = [];
    const q = new URLSearchParams(window.location.search).get("plan");
    if (q) ids = q.split(",");
    else {
      try {
        ids = JSON.parse(window.localStorage.getItem(STORE_KEY) ?? "[]") as string[];
      } catch {
        ids = [];
      }
    }
    const valid = (Array.isArray(ids) ? ids : []).filter((id) => typeof id === "string" && ID_RE.test(id) && items.some((p) => p.id === id)).slice(0, 12);
    setPlan(valid);
    const first = items.find((p) => p.id === valid[0]);
    if (first) setCity(first.city);
    setReady(true);
  }, [items]);
  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(plan));
    } catch {
      // ignore
    }
  }, [plan, ready]);

  const inCity = useMemo(() => items.filter((p) => p.city === city), [items, city]);
  const pins = useMemo(() => inCity.filter(isPin), [inCity]);
  const stops = plan.map((id) => items.find((p) => p.id === id)).filter((p): p is PandalItem => Boolean(p));
  const has = (id: string) => plan.includes(id);
  const toggle = useCallback((id: string) => {
    setPlan((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id].slice(0, 12)));
    setMsg("");
  }, []);
  const onSelect = useCallback(
    (id: string) => {
      setSelectedId(id);
      toggle(id);
    },
    [toggle],
  );
  const move = (i: number, dir: -1 | 1) =>
    setPlan((cur) => {
      const j = i + dir;
      if (j < 0 || j >= cur.length) return cur;
      const next = [...cur];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  // Google Maps directions: first stop → last stop, the rest as waypoints; pins by coordinates, others by name.
  const where = (p: PandalItem) => (isPin(p) ? `${p.lat},${p.lng}` : `${p.name}, ${p.city}`);
  const mapsUrl =
    stops.length >= 2
      ? `https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=${encodeURIComponent(where(stops[0]))}&destination=${encodeURIComponent(where(stops[stops.length - 1]))}${
          stops.length > 2 ? `&waypoints=${encodeURIComponent(stops.slice(1, -1).map(where).join("|"))}` : ""
        }`
      : stops.length === 1
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(where(stops[0]))}`
        : null;

  const planText = () => `${K.shareTitle[lang]}\n${stops.map((p, i) => `${num(i + 1, lang)}. ${p.name}${p.area ? ` (${p.area})` : ""}`).join("\n")}`;
  const planUrl = () => `${window.location.origin}${withLang(lang, "/kali-puja-2026")}?plan=${plan.join(",")}#plan`;

  const onShare = async () => {
    if (!stops.length) return;
    const outcome = await shareLink({ title: K.shareTitle[lang], text: planText(), url: planUrl() });
    setMsg(outcome === "shared" ? K.shared[lang] : outcome === "copied" ? K.copied[lang] : outcome === "cancelled" ? "" : K.failed[lang]);
    if (outcome === "shared" || outcome === "copied") track("share", { what: "kali_plan", stops: stops.length });
  };
  const onCopy = async () => {
    if (!stops.length) return;
    setMsg((await copyText(`${planText()}\n${planUrl()}`)) ? K.copied[lang] : K.failed[lang]);
  };

  return (
    <div className="kplan" id="plan">
      <div className="cx-chips" role="group" aria-label={K.cityLabel[lang]}>
        {cities.map((c) => (
          <button key={c} type="button" className="cx-chip" aria-pressed={city === c} onClick={() => setCity(c)}>
            {cityName(c)} <span className="fineprint">{num(items.filter((p) => p.city === c).length, lang)}</span>
          </button>
        ))}
      </div>

      <div className="kplan-grid">
        <ul className="kplan-list" aria-label={K.pickLabel[lang]}>
          {inCity.map((p) => {
            const on = has(p.id);
            return (
              <li key={p.id} className={`kplan-item${on ? " is-on" : ""}${p.id === selectedId ? " is-selected" : ""}`}>
                <div className="kplan-text">
                  <h3 className="entry-name">
                    <Link href={p.href}>{p.name}</Link>
                  </h3>
                  <p className="entry-meta">
                    {p.area ? `${p.area} · ` : ""}
                    {cityName(p.city)}
                    {!isPin(p) ? <span className="fineprint"> · {K.noPin[lang]}</span> : null}
                  </p>
                  <p className="entry-desc">{p.description}</p>
                </div>
                <button type="button" className={`button${on ? "" : " button-light"} kplan-add`} aria-pressed={on} onClick={() => toggle(p.id)}>
                  {on ? K.added[lang] : K.add[lang]}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="kplan-map">
          <PujaMap pins={pins} selectedId={selectedId} onSelect={onSelect} label={mapAria} loading={mapLoading} />
          <p className="fineprint">{K.mapHint[lang]}</p>
        </div>
      </div>

      <section className="kplan-plan" aria-labelledby="kplan-h">
        <h3 id="kplan-h">{fill(K.planH3[lang], { n: num(stops.length, lang) })}</h3>
        {stops.length === 0 ? (
          <p className="fineprint">{K.empty[lang]}</p>
        ) : (
          <ol className="kplan-stops">
            {stops.map((p, i) => (
              <li key={p.id}>
                <span className="kplan-stop-name">
                  {p.name} <span className="fineprint">{p.area ? `· ${p.area}` : ""}</span>
                </span>
                <span className="kplan-stop-btns">
                  <button type="button" className="chip" onClick={() => move(i, -1)} disabled={i === 0} aria-label={K.up[lang]}>
                    ↑
                  </button>
                  <button type="button" className="chip" onClick={() => move(i, 1)} disabled={i === stops.length - 1} aria-label={K.down[lang]}>
                    ↓
                  </button>
                  <button type="button" className="chip" onClick={() => toggle(p.id)} aria-label={K.remove[lang]}>
                    ✕
                  </button>
                </span>
              </li>
            ))}
          </ol>
        )}
        <p className="cta-row">
          {mapsUrl ? (
            <a className="button" href={mapsUrl} rel="noopener noreferrer" target="_blank" onClick={() => track("kali_plan_route", { stops: stops.length })}>
              {K.openMaps[lang]}
            </a>
          ) : null}
          <button type="button" className="button button-light" disabled={!stops.length} onClick={onShare}>
            {K.share[lang]}
          </button>
          <button type="button" className="button button-light" disabled={!stops.length} onClick={onCopy}>
            {K.copy[lang]}
          </button>
          {stops.length ? (
            <button type="button" className="button button-light" onClick={() => setPlan([])}>
              {K.clear[lang]}
            </button>
          ) : null}
        </p>
        <p className="fineprint" role="status" aria-live="polite">
          {msg || K.note[lang]}
        </p>
      </section>
    </div>
  );
}
