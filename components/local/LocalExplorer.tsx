"use client";

import { useEffect, useState } from "react";
import type { FestEvent, Region } from "@/data/events/events";
import { REGIONS, regionInfo, traditions, ui } from "@/data/local/content";
import type { Stop } from "@/data/local/stops";
import type { PlayStrings } from "@/components/play/strings";
import type { Lang } from "@/lib/i18n";
import EventList from "./EventList";
import PlanBuilder from "./PlanBuilder";
import RouteMaker from "./RouteMaker";

interface Props {
  lang: Lang;
  s: PlayStrings;
  events: FestEvent[];
  stops: Record<Region, Stop[]>;
}

const STORE = "fa:region";
const isRegion = (v: unknown): v is Region => v === "wb" || v === "bd";

/** Region selector (skippable) plus each region's news, traditions, plan comparison and plan builder. */
export default function LocalExplorer({ lang, s, events, stops }: Props) {
  const [region, setRegion] = useState<Region | null>(null);
  const [preset, setPreset] = useState<{ ids: string[]; n: number } | null>(null);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("r");
    try {
      if (isRegion(fromUrl)) {
        // A link with a region counts as a choice: the map and countdown follow it too.
        window.localStorage.setItem(STORE, fromUrl);
        return setRegion(fromUrl);
      }
      const saved = window.localStorage.getItem(STORE);
      if (isRegion(saved)) setRegion(saved);
    } catch {
      if (isRegion(fromUrl)) setRegion(fromUrl); // storage blocked: still honour the link
    }
  }, []);

  const choose = (r: Region | null) => {
    setRegion(r);
    setPreset(null);
    try {
      if (r) window.localStorage.setItem(STORE, r);
      else window.localStorage.removeItem(STORE);
    } catch {
      // ignore
    }
    window.history.replaceState(null, "", r ? `?r=${r}` : window.location.pathname);
  };

  return (
    <>
      <div className="region-pick" role="group" aria-label={ui.pick[lang]}>
        <span className="region-pick-label">{ui.pick[lang]}</span>
        {REGIONS.map((r) => (
          <button key={r} type="button" className="cx-chip" aria-pressed={region === r} onClick={() => choose(r)}>
            {regionInfo[r].icon} {regionInfo[r].name[lang]}
          </button>
        ))}
        <button type="button" className="cx-chip" aria-pressed={region === null} onClick={() => choose(null)}>
          {ui.both[lang]}
        </button>
      </div>

      <section className="home-section" aria-labelledby="local-trend">
        <h2 id="local-trend" className="cx-h2">
          {ui.trendH2[lang]}
          {region ? ` · ${regionInfo[region].short[lang]}` : ""}
        </h2>
        <p className="cx-note">{ui.trendNote[lang]}</p>
        <EventList lang={lang} events={events} region={region ?? undefined} limit={region ? 4 : 6} showRegion={!region} />
      </section>

      {region ? (
        <RegionView key={region} lang={lang} s={s} region={region} events={events} stops={stops[region]} preset={preset} onPreset={setPreset} />
      ) : null}
    </>
  );
}

function RegionView({
  lang,
  s,
  region,
  events,
  stops,
  preset,
  onPreset,
}: {
  lang: Lang;
  s: PlayStrings;
  region: Region;
  events: FestEvent[];
  stops: Stop[];
  preset: { ids: string[]; n: number } | null;
  onPreset: (p: { ids: string[]; n: number }) => void;
}) {
  const mine = events.filter((e) => e.region === region);
  const news = mine.filter((e) => e.kind !== "pandal");
  const highlights = mine.filter((e) => e.kind === "pandal");

  return (
    <>
      <section className="home-section" aria-labelledby="local-route">
        <h2 id="local-route" className="cx-h2">
          {ui.routeH2[lang]}
        </h2>
        <p className="cx-note">{ui.routeP[lang]}</p>
        <RouteMaker
          lang={lang}
          region={region}
          stops={stops}
          events={events}
          onUse={(ids) => {
            onPreset({ ids, n: Date.now() });
            window.setTimeout(() => document.getElementById("local-build")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
          }}
        />
      </section>

      <section className="home-section" aria-labelledby="local-all">
        <h2 id="local-all" className="cx-h2">
          {ui.allEvents[lang]}
        </h2>
        <h3 className="cx-h3">{ui.newsH3[lang]}</h3>
        <EventList lang={lang} events={news} limit={news.length} />
        {highlights.length ? (
          <>
            <h3 className="cx-h3">{ui.pandalsH3[lang]}</h3>
            <EventList lang={lang} events={highlights} limit={highlights.length} />
          </>
        ) : null}
      </section>

      <section className="home-section" aria-labelledby="local-ways">
        <h2 id="local-ways" className="cx-h2">
          {ui.traditionsH2[lang]}
        </h2>
        <ul className="honest-grid">
          {traditions[region].map((t) => (
            <li key={t.title.en} className="honest-card">
              <h3>
                <span aria-hidden="true">{t.icon}</span> {t.title[lang]}
              </h3>
              <p>{t.text[lang]}</p>
              {t.source ? (
                <p className="ev-meta">
                  {ui.source[lang]}:{" "}
                  <a href={t.source.url} target="_blank" rel="noopener noreferrer">
                    {t.source.title}
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="local-build">
        <h2 id="local-build" className="cx-h2">
          {ui.builderH2[lang]}
        </h2>
        <p className="cx-note">{ui.builderP[lang]}</p>
        <PlanBuilder lang={lang} s={s} region={region} stops={stops} preset={preset} />
      </section>
    </>
  );
}
