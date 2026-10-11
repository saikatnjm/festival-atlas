// Pure filtering for the pandal directory (unit-tested in tests/).

export interface Filters {
  q: string;
  country: string;
  city: string;
  year: string;
  /** "" or the (English) theme text. */
  theme: string;
  status: string;
}

export const NO_FILTERS: Filters = { q: "", country: "", city: "", year: "", theme: "", status: "" };

export interface Filterable {
  /** Lower-case text to search in (names in both languages). */
  search: string;
  country: string;
  city: string;
  year?: number;
  themeKey?: string;
  status: string;
}

export const hasFilters = (f: Filters): boolean => Object.values(f).some((v) => v !== "");

export function applyFilters<T extends Filterable>(list: readonly T[], f: Filters): T[] {
  const q = f.q.trim().toLowerCase();
  return list.filter(
    (p) =>
      (!q || p.search.includes(q)) &&
      (!f.country || p.country === f.country) &&
      (!f.city || p.city === f.city) &&
      (!f.year || String(p.year ?? "") === f.year) &&
      (!f.theme || p.themeKey === f.theme) &&
      (!f.status || p.status === f.status),
  );
}

const KEYS = Object.keys(NO_FILTERS) as (keyof Filters)[];

/** Reads filters from a query string; unknown keys are ignored. */
export function filtersFromSearch(search: string): Filters {
  const p = new URLSearchParams(search);
  const out = { ...NO_FILTERS };
  for (const k of KEYS) out[k] = (p.get(k) ?? "").slice(0, 80);
  return out;
}

export function searchFromFilters(f: Filters): string {
  const p = new URLSearchParams();
  for (const k of KEYS) if (f[k]) p.set(k, f[k]);
  const s = p.toString();
  return s ? `?${s}` : "";
}

/**
 * Pins that share the exact same coordinates (several clubs in one locality) would hide each other.
 * Returns display positions, spreading such pins on a tiny circle (about 100 m). Pins are approximate
 * anyway, so this never claims precision. Order of `pins` decides who sits where, deterministically.
 */
export function spreadPins<T extends { id: string; lat: number; lng: number }>(pins: readonly T[]): Map<string, [number, number]> {
  const groups = new Map<string, T[]>();
  for (const p of pins) {
    const k = `${p.lat.toFixed(5)},${p.lng.toFixed(5)}`;
    const g = groups.get(k);
    if (g) g.push(p);
    else groups.set(k, [p]);
  }
  const out = new Map<string, [number, number]>();
  for (const g of groups.values()) {
    g.forEach((p, i) => {
      if (g.length === 1) return void out.set(p.id, [p.lat, p.lng]);
      const angle = (2 * Math.PI * i) / g.length;
      const r = 0.0011;
      out.set(p.id, [p.lat + r * Math.sin(angle), p.lng + (r * Math.cos(angle)) / Math.max(0.2, Math.cos((p.lat * Math.PI) / 180))]);
    });
  }
  return out;
}
