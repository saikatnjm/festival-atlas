"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FestEvent, Region } from "@/data/events/events";
import { regionInfo, ui } from "@/data/local/content";
import { fill } from "@/data/play/personal";
import { fmtDate } from "@/lib/dates";
import { daysUntil, eventStatus, trending, type EventStatus } from "@/lib/events";
import { num, withLang, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  events: FestEvent[];
  region?: Region;
  limit?: number;
  /** Show the region label on each item (when both regions are mixed). */
  showRegion?: boolean;
}

/**
 * Sourced event cards, ordered "what's happening now" first. Status comes from the visitor's clock,
 * so it is only shown after the page has loaded in the browser (static HTML has no "now").
 */
export default function EventList({ lang, events, region, limit = 6, showRegion = false }: Props) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  const list = now
    ? trending(events, now, region, limit)
    : events
        .filter((e) => !region || e.region === region)
        .slice()
        .sort((a, b) => a.start.localeCompare(b.start))
        .slice(0, limit);

  return (
    <ul className="ev-list">
      {list.map((e) => {
        const st: EventStatus | null = now ? eventStatus(e, now) : null;
        const days = now && st === "upcoming" ? daysUntil(e, now) : 0;
        return (
          <li key={e.id} className={`ev-card${st ? ` is-${st}` : ""}`}>
            <p className="ev-top">
              {st ? <span className={`ev-status ev-${st}`}>{ui.status[st][lang]}</span> : null}
              {e.confidence === "reported" ? <span className="ev-tag">{ui.reported[lang]}</span> : null}
              {showRegion ? (
                <span className="ev-tag">
                  {regionInfo[e.region].icon} {regionInfo[e.region].short[lang]}
                </span>
              ) : null}
              <span className="ev-date">
                {fmtDate(e.start, lang, e.end)}
                {days > 0 ? ` · ${days === 1 ? ui.tomorrow[lang] : fill(ui.daysLeft[lang], { n: num(days, lang) })}` : ""}
              </span>
            </p>
            <h3 className="ev-title">{e.title[lang]}</h3>
            {e.place ? <p className="ev-place">{e.place[lang]}</p> : null}
            <p className="ev-summary">{e.summary[lang]}</p>
            <p className="ev-meta">
              {ui.source[lang]}:{" "}
              {e.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 ? ", " : ""}
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                  </a>{" "}
                  ({fmtDate(s.date, lang)})
                </span>
              ))}
              {" · "}
              {fill(ui.verified[lang], { date: fmtDate(e.lastVerified, lang) })}
              {e.pandalId ? (
                <>
                  {" · "}
                  <Link href={withLang(lang, `/puja/${e.pandalId}`)}>{ui.inDirectory[lang]}</Link>
                </>
              ) : null}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
