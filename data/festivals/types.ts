// Shape of a festival landing page (/jagaddhatri-puja-2026, later /saraswati-puja-2027…), rendered by
// components/festival/FestivalPage.tsx. Every date and clock time carries its source (AGENTS.md rule 1).

import type { Region } from "@/data/events/events";
import type { OtherPuja } from "@/data/pandals/pujas";
import type { TimingRow } from "@/data/puja-timings";
import type { L } from "@/lib/i18n";

export interface FestivalSource {
  title: string;
  url: string;
}

/** A paragraph in our own words; `source` is shown after it when the paragraph states facts. */
export interface FestivalPara {
  text: L;
  source?: FestivalSource;
}

export interface FestivalSection {
  id: string;
  h2: L;
  paras: FestivalPara[];
  /** Plain advice (no facts), shown as a list after the paragraphs. */
  tips?: L[];
}

/** A list table (e.g. every Ekadashi of the year); each row cites its source. */
export interface FestivalTable {
  id: string;
  h2: L;
  lead?: L;
  caption: L;
  columns: L[];
  /** `href` links the first cell to the festival's own page. */
  rows: { cells: L[]; source: FestivalSource; href?: string }[];
  note?: L;
}

export interface FestivalEvent {
  name: L;
  /** ISO dates from the sourced calendar. */
  start: string;
  end?: string;
  place: { name: string; locality: string; region?: string; country: "IN" | "BD" };
}

export interface FestivalPage {
  /** Path without the language, e.g. "/jagaddhatri-puja-2026". */
  path: string;
  title: L;
  description: L;
  h1: L;
  lead: L;
  /** Date and tithi table per region (Kolkata IST, Dhaka BST). */
  timings?: { h2: L; lead: L; rows: Partial<Record<Region, TimingRow[]>>; note?: L };
  /** List tables, shown right after the date table. */
  tables?: FestivalTable[];
  sections: FestivalSection[];
  /** Directory listings with this `puja` are listed with links (and as ItemList JSON-LD). */
  pandals?: { puja: OtherPuja; h2: L; lead: L; map: L };
  faq: { q: L; a: L }[];
  events: FestivalEvent[];
  /** Calls to action and related pages (internal links). */
  links: { href: string; label: L; primary?: boolean }[];
  lastChecked: string;
}
