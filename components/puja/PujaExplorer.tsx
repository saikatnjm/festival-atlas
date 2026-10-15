"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Facets, PandalStatus } from "@/data/pandals";
import type { PandalItem } from "@/data/pandals/view";
import type { Dict } from "@/data/i18n";
import { fmt } from "@/lib/format";
import { num, type Lang } from "@/lib/i18n";
import { applyFilters, filtersFromSearch, hasFilters, NO_FILTERS, searchFromFilters, type Filters } from "@/lib/pandal-filter";
import StatusBadge from "./StatusBadge";
import LiveBadge from "@/components/live/LiveBadge";
import { useLive } from "@/components/live/useLive";
import { useNearMe } from "@/components/live/useNearMe";
import { fun } from "@/data/i18n/fun";
import { distanceM, fmtDistance, inServiceArea } from "@/lib/geo";
import { crowdLevel } from "@/lib/live-shared";
import type { Heat } from "./PujaMap";

/** One-tap city picks shown above the filters; "All" clears them. */
/** Radius for the near-me "I'm here" check-in; pins are area-level, so this is generous. */
const HERE_RADIUS_M = 800;

const QUICK = [
  { city: "Kolkata", bn: "কলকাতা", icon: "🥁" },
  { city: "Dhaka", bn: "ঢাকা", icon: "🛕" },
  { city: "", bn: "", icon: "🌍" },
];

// Leaflet touches `window`, so the map is only loaded in the browser.
const PujaMap = dynamic(() => import("./PujaMap"), { ssr: false });

interface Props {
  lang: Lang;
  items: PandalItem[];
  facets: Facets;
  t: Dict["puja"];
}

const STATUSES: PandalStatus[] = ["confirmed", "pending", "historical"];
type Pin = PandalItem & { lat: number; lng: number };
const isPin = (p: PandalItem): p is Pin => typeof p.lat === "number" && typeof p.lng === "number";

export default function PujaExplorer({ lang, items, facets, t }: Props) {
  const [filters, setFilters] = useState<Filters>(NO_FILTERS);
  const [view, setView] = useState<"map" | "list">("list"); // narrow screens; wide screens show both
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const live = useLive();
  const listRef = useRef<HTMLUListElement>(null);
  const activeCount = (["country", "year", "status", "theme"] as const).filter((k) => filters[k] !== "").length + (filters.city && !QUICK.some((q) => q.city === filters.city) ? 1 : 0);

  // Filters and the selected pandal live in the URL (?city=...#e=id), so links and the language switch keep them.
  useEffect(() => {
    const fromUrl = filtersFromSearch(window.location.search);
    // No filters in the link: open on the visitor's region (the choice saved on the Local page), if any.
    // "?all=1" (used by the abroad page) asks for the whole directory instead.
    const wantsAll = new URLSearchParams(window.location.search).has("all");
    let region = "";
    try {
      const r = window.localStorage.getItem("fa:region");
      region = r === "wb" ? "IN" : r === "bd" ? "BD" : "";
    } catch {
      // ignore
    }
    setFilters(!hasFilters(fromUrl) && region && !wantsAll ? { ...fromUrl, country: region } : fromUrl);
    const m = /^#e=([\w-]+)$/.exec(window.location.hash);
    if (m && items.some((i) => i.id === m[1])) {
      setSelectedId(m[1]);
      setView("map");
    }
    setReady(true);
  }, [items]);
  useEffect(() => {
    if (!ready) return;
    const hash = selectedId ? `#e=${selectedId}` : "";
    window.history.replaceState(null, "", `${window.location.pathname}${searchFromFilters(filters)}${hash}`);
  }, [ready, filters, selectedId]);

  const near = useNearMe();
  const me = near.pos && inServiceArea(near.pos) ? near.pos : null;
  const [nearMsg, setNearMsg] = useState("");
  const visible = useMemo(() => {
    const list = applyFilters(items, filters);
    if (!me) return list;
    // Near me: pinned pandals by distance, then the rest (list-only entries) in their usual order.
    const d = (p: PandalItem) => (isPin(p) ? distanceM(me, p) : Infinity);
    return [...list].sort((a, b) => d(a) - d(b));
  }, [items, filters, me]);
  const pins = useMemo(() => visible.filter(isPin), [visible]);
  const distanceOf = (p: PandalItem): string | null => (me && isPin(p) ? fmtDistance(distanceM(me, p), lang) : null);
  // Heat layer for the map from the live board.
  const heat = useMemo(() => {
    const out: Record<string, Heat> = {};
    for (const [id, s] of Object.entries(live.board)) out[id] = { level: crowdLevel(s.crowd_avg), here: s.here_n };
    return out;
  }, [live.board]);
  const nearest = me ? pins[0] : undefined;
  // "I'm here" only when the nearest pin is actually close; pins are area-level, so allow a generous radius.
  const canCheckIn = !!me && !!nearest && distanceM(me, nearest) <= HERE_RADIUS_M;

  const onHereNearest = async () => {
    if (!nearest || !canCheckIn) return;
    const outcome = await live.send(nearest.id, "here");
    setNearMsg(outcome === "ok" ? fun.live.thanks[lang] : outcome === "already" ? fun.live.already[lang] : fun.live.failed[lang]);
  };
  const selected = selectedId ? (items.find((i) => i.id === selectedId) ?? null) : null;

  const set = (k: keyof Filters) => (e: { target: { value: string } }) => setFilters((f) => ({ ...f, [k]: e.target.value }));
  const onSelect = useCallback((id: string) => setSelectedId(id), []);

  // Picking a marker brings its list row into view.
  useEffect(() => {
    if (!selectedId) return;
    listRef.current?.querySelector(`[data-id="${selectedId}"]`)?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

  const showOnMap = (id: string) => {
    setSelectedId(id);
    setView("map");
  };

  return (
    <div className="explorer-wrap">
      <div className="quick-pick" role="group" aria-label={t.quickAria}>
        {QUICK.map((q) => {
          const on = filters.city === q.city && !filters.country;
          return (
            <button key={q.city || "all"} type="button" className="chip" aria-pressed={on} onClick={() => setFilters({ ...NO_FILTERS, q: filters.q, city: q.city })}>
              {q.icon} {q.city ? (lang === "bn" ? q.bn : q.city) : t.all}
            </button>
          );
        })}
        <button
          type="button"
          className="chip chip-near"
          aria-pressed={near.state === "on"}
          disabled={near.state === "asking"}
          onClick={() => (near.state === "on" ? near.off() : near.ask())}
        >
          {near.state === "asking" ? fun.near.asking[lang] : near.state === "on" ? fun.near.on[lang] : fun.near.chip[lang]}
        </button>
      </div>
      {near.state === "denied" || near.state === "unsupported" ? <p className="fineprint">{fun.near.denied[lang]}</p> : null}
      {near.state === "on" && !me ? <p className="fineprint">{fun.near.far[lang]}</p> : null}
      {me && nearest ? (
        <p className="near-bar" role="status">
          <span>
            {fun.near.nearest[lang]} <b>{nearest.name}</b> · {distanceOf(nearest)}
          </span>
          {canCheckIn ? (
            <button type="button" className="button button-light" onClick={onHereNearest}>
              {fun.live.here[lang]}
            </button>
          ) : null}
          {nearMsg ? <span className="fineprint">{nearMsg}</span> : null}
        </p>
      ) : null}
      <form className="filters" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="field field-wide">
          <span>{t.search}</span>
          <input type="search" value={filters.q} onChange={set("q")} placeholder={t.searchPlaceholder} autoComplete="off" />
        </label>
        <button type="button" className="chip filters-toggle" aria-expanded={moreOpen} aria-controls="more-filters" onClick={() => setMoreOpen((o) => !o)}>
          {t.moreFilters}
          {activeCount ? ` (${num(activeCount, lang)})` : ""}
        </button>
        <div id="more-filters" className={`filters-more${moreOpen ? " is-open" : ""}`}>
        <label className="field">
          <span>{t.country}</span>
          <select value={filters.country} onChange={set("country")}>
            <option value="">{t.any}</option>
            {facets.countries.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{t.city}</span>
          <select value={filters.city} onChange={set("city")}>
            <option value="">{t.any}</option>
            {facets.cities.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{t.year}</span>
          <select value={filters.year} onChange={set("year")}>
            <option value="">{t.any}</option>
            {facets.years.map((y) => (
              <option key={y} value={String(y)}>
                {lang === "bn" ? String(y).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]) : y}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{t.status}</span>
          <select value={filters.status} onChange={set("status")}>
            <option value="">{t.all}</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {t.statusLabel[s]}
              </option>
            ))}
          </select>
        </label>
        {facets.themes.length > 0 && (
          <label className="field field-wide">
            <span>{t.theme}</span>
            <select value={filters.theme} onChange={set("theme")}>
              <option value="">{t.any}</option>
              {facets.themes.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        )}
        </div>
      </form>

      <div className="status-line">
        <p role="status" aria-live="polite">
          {fmt(t.count, { n: visible.length, total: items.length }, lang)} · {fmt(t.pinned, { n: pins.length }, lang)}
        </p>
        {hasFilters(filters) && (
          <button type="button" className="link-button" onClick={() => setFilters(NO_FILTERS)}>
            {t.clear}
          </button>
        )}
      </div>

      <div className="view-toggle" role="group" aria-label={t.viewAria}>
        <button type="button" className="chip" aria-pressed={view === "list"} onClick={() => setView("list")}>
          {t.viewList}
        </button>
        <button type="button" className="chip" aria-pressed={view === "map"} onClick={() => setView("map")}>
          {t.viewMap}
        </button>
      </div>

      <div className="explorer">
        <div className="list-wrap" data-active={view === "list"}>
          {visible.length === 0 ? (
            <div className="empty">
              <h2>{t.emptyH}</h2>
              <p>{t.emptyP}</p>
              <button type="button" className="button" onClick={() => setFilters(NO_FILTERS)}>
                {t.clear}
              </button>
            </div>
          ) : (
            <ul className="entry-list" ref={listRef}>
              {visible.map((p) => (
                <li key={p.id} data-id={p.id} className={`entry${p.id === selectedId ? " is-selected" : ""}`} aria-current={p.id === selectedId ? "true" : undefined}>
                  <h3 className="entry-name">
                    <Link href={p.href}>{p.name}</Link>
                  </h3>
                  <p className="entry-meta">
                    {p.place}
                    {p.area ? ` · ${p.area}` : ""}
                    {distanceOf(p) ? <span className="entry-dist"> · 📍 {distanceOf(p)}</span> : null}
                  </p>
                  <p className="entry-badges">
                    <StatusBadge status={p.status} label={t.statusLabel[p.status]} />
                    <span className="year-badge">{p.year ? fmt(t.edition, { year: p.year }, lang) : t.yearUnknown}</span>
                  </p>
                  {p.theme ? <p className="entry-theme">{p.theme}</p> : null}
                  <LiveBadge stats={live.board[p.id]} lang={lang} />
                  <p className="entry-desc">{p.description}</p>
                  <p className="entry-actions">
                    {isPin(p) ? (
                      <button type="button" className="link-button" onClick={() => showOnMap(p.id)}>
                        {t.showOnMap}
                      </button>
                    ) : (
                      <span className="no-pin">{t.noPin}</span>
                    )}
                    <Link href={p.href}>{t.details} →</Link>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="explorer-map" data-active={view === "map"}>
          <PujaMap pins={pins} selectedId={selectedId} onSelect={onSelect} label={t.mapAria} loading={t.mapLoading} user={me} heat={heat} userLabel={fun.near.you[lang]} />
          {selected && (
            <div className="map-panel" role="region" aria-label={`${t.selected}: ${selected.name}`}>
              <button type="button" className="close" onClick={() => setSelectedId(null)} aria-label={t.close}>
                ×
              </button>
              <h3>{selected.name}</h3>
              <p className="entry-meta">{selected.place}</p>
              <p className="entry-badges">
                <StatusBadge status={selected.status} label={t.statusLabel[selected.status]} />
                <span className="year-badge">{selected.year ? fmt(t.edition, { year: selected.year }, lang) : t.yearUnknown}</span>
              </p>
              <p>
                <Link className="button" href={selected.href}>
                  {t.details}
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>

      <details className="legend">
        <summary>{t.legend}</summary>
        <ul>
          {STATUSES.map((s) => (
            <li key={s}>
              <StatusBadge status={s} label={t.statusLabel[s]} /> {t.statusHelp[s]}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
