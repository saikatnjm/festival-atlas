import type { Lang } from "@/lib/i18n";
import raw from "./entries.json";
import bnRaw from "./bn.json";
import geoBn from "./geo-bn.json";

export type PandalStatus = "confirmed" | "historical" | "pending";
export type PinKind = "area" | "city";

export interface Source {
  title: string;
  url: string;
}

/** One curated listing. Optional fields are shown only when present (and sourced). */
export interface Pandal {
  id: string;
  /** Original proper name, never translated. */
  name: string;
  country: string; // ISO 3166-1 alpha-2
  city: string;
  area?: string;
  lat?: number;
  lng?: number;
  pin?: PinKind;
  coordSource?: string;
  year?: number;
  status: PandalStatus;
  theme?: string;
  themeYear?: number;
  committee?: string;
  address?: string;
  dates?: string;
  website?: string;
  /** English description, written in our own words. */
  description: string;
  sources: Source[];
  /** ISO date of the last check against the sources. */
  lastVerified: string;
}

export type Located = Pandal & { lat: number; lng: number };

interface BnText {
  description: string;
  theme?: string;
}

export const pandals = raw as unknown as Pandal[];
const bnText = bnRaw as Record<string, BnText>;
const geo = geoBn as { countries: Record<string, string>; cities: Record<string, string> };

export const getPandal = (id: string): Pandal | undefined => pandals.find((p) => p.id === id);
export const hasPin = (p: Pandal): p is Located => typeof p.lat === "number" && typeof p.lng === "number";

/** English names for the countries that appear in the data (Intl.DisplayNames is avoided to stay deterministic). */
export const COUNTRY_EN: Record<string, string> = {
  IN: "India",
  BD: "Bangladesh",
  GB: "United Kingdom",
  DE: "Germany",
  LU: "Luxembourg",
  SE: "Sweden",
  CA: "Canada",
  AU: "Australia",
  SG: "Singapore",
  US: "United States",
  AE: "United Arab Emirates",
};

export const countryName = (code: string, lang: Lang): string =>
  lang === "bn" ? (geo.countries[code] ?? COUNTRY_EN[code] ?? code) : (COUNTRY_EN[code] ?? code);

export const cityName = (city: string, lang: Lang): string => (lang === "bn" ? (geo.cities[city] ?? city) : city);

export const descriptionOf = (p: Pandal, lang: Lang): string => (lang === "bn" ? (bnText[p.id]?.description ?? p.description) : p.description);
export const themeOf = (p: Pandal, lang: Lang): string | undefined =>
  lang === "bn" ? (bnText[p.id]?.theme ?? p.theme) : p.theme;

/** "Kolkata, India" / "Hesperange..." : city, then country. */
export const placeLabel = (p: Pandal, lang: Lang): string => `${cityName(p.city, lang)}, ${countryName(p.country, lang)}`;

/** Text used for searching: names in both languages, so either script finds an entry. */
export function searchText(p: Pandal): string {
  return [p.name, p.city, p.area, p.country, COUNTRY_EN[p.country], geo.cities[p.city], geo.countries[p.country], p.theme, bnText[p.id]?.theme, p.committee]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export const STATUS_ORDER: PandalStatus[] = ["confirmed", "pending", "historical"];

/** Newest edition first, then confirmed before the rest, then name. */
export function sortPandals(list: readonly Pandal[]): Pandal[] {
  const rank = (s: PandalStatus) => STATUS_ORDER.indexOf(s);
  return list.slice().sort((a, b) => rank(a.status) - rank(b.status) || (b.year ?? 0) - (a.year ?? 0) || a.name.localeCompare(b.name));
}

export interface Facets {
  countries: { value: string; label: string }[];
  cities: { value: string; label: string }[];
  years: number[];
  themes: { value: string; label: string }[];
}

/** Filter options come from the data, so new entries need no code changes. */
export function facets(list: readonly Pandal[], lang: Lang): Facets {
  const uniq = <T,>(xs: T[]) => [...new Set(xs)];
  const byLabel = (a: { label: string }, b: { label: string }) => a.label.localeCompare(b.label, lang);
  const themeSeen = new Map<string, string>(); // English theme (the filter value) -> label in the page language
  for (const p of list) if (p.theme) themeSeen.set(p.theme, themeOf(p, lang) ?? p.theme);
  return {
    countries: uniq(list.map((p) => p.country)).map((value) => ({ value, label: countryName(value, lang) })).sort(byLabel),
    cities: uniq(list.map((p) => p.city)).map((value) => ({ value, label: cityName(value, lang) })).sort(byLabel),
    years: uniq(list.map((p) => p.year).filter((y): y is number => typeof y === "number")).sort((a, b) => b - a),
    themes: [...themeSeen.entries()].map(([value, label]) => ({ value, label })).sort(byLabel),
  };
}

/** Light summary used on the home page. */
export function summary(list: readonly Pandal[] = pandals) {
  return { total: list.length, countries: new Set(list.map((p) => p.country)).size };
}
