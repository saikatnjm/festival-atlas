// Community-added places via Supabase's REST API. Server-side only (app/api/places/route.ts).

import { toPlace, type Place, type PlaceInput } from "./places-shared";

export * from "./places-shared";

function config(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "");
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? { url, key } : null;
}

export const placesConfigured = (): boolean => config() !== null;

function headers(key: string): Record<string, string> {
  return { apikey: key, "Content-Type": "application/json", ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}) };
}

/** Approved places from the approved_places() SQL function (anything malformed is dropped). */
export async function fetchApprovedPlaces(): Promise<Place[]> {
  const c = config();
  if (!c) return [];
  const res = await fetch(`${c.url}/rest/v1/rpc/approved_places`, { method: "POST", headers: headers(c.key), body: "{}", cache: "no-store" });
  if (!res.ok) throw new Error(`approved_places ${res.status}`);
  const rows = (await res.json()) as unknown;
  return Array.isArray(rows) ? rows.map(toPlace).filter((p): p is Place => p !== null) : [];
}

export async function insertPlace(row: PlaceInput & { device: string; lang: "bn" | "en" }): Promise<void> {
  const c = config();
  if (!c) throw new Error("places not configured");
  const res = await fetch(`${c.url}/rest/v1/places`, {
    method: "POST",
    headers: { ...headers(c.key), Prefer: "return=minimal" },
    body: JSON.stringify(row),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`places insert ${res.status}`);
}
