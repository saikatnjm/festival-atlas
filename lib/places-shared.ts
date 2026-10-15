// Community-added places ("add a pandal"): types and validation shared by the form and the API.
// Pure; no imports (unit-tested).

export interface PlaceInput {
  name: string;
  area: string | null;
  city: string;
  country: string;
  lat: number;
  lng: number;
  note: string | null;
}

/** One approved place as served to the map. */
export interface Place extends PlaceInput {
  id: number;
}

export const PLACE_NAME_MAX = 80;
export const PLACE_AREA_MAX = 60;
export const PLACE_CITY_MAX = 40;
export const PLACE_NOTE_MAX = 200;

/** Country choices on the form; "ZZ" (ISO user-assigned) stands for "somewhere else". */
export const PLACE_COUNTRIES = ["IN", "BD", "GB", "US", "CA", "AU", "DE", "SG", "AE", "ZZ"] as const;

const oneLine = (v: unknown, max: number): string => (typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "");

export function cleanPlace(v: unknown): PlaceInput | null {
  if (!v || typeof v !== "object") return null;
  const b = v as Record<string, unknown>;
  const name = oneLine(b.name, PLACE_NAME_MAX);
  const city = oneLine(b.city, PLACE_CITY_MAX);
  const area = oneLine(b.area, PLACE_AREA_MAX) || null;
  const note = oneLine(b.note, PLACE_NOTE_MAX) || null;
  const country = typeof b.country === "string" && /^[A-Z]{2}$/.test(b.country) ? b.country : "";
  const lat = typeof b.lat === "number" ? b.lat : NaN;
  const lng = typeof b.lng === "number" ? b.lng : NaN;
  if (name.length < 3 || city.length < 2 || !country) return null;
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180 || (lat === 0 && lng === 0)) return null;
  // Six decimals (~10 cm) is more than a pin needs and keeps rows small.
  return { name, area, city, country, lat: Math.round(lat * 1e6) / 1e6, lng: Math.round(lng * 1e6) / 1e6, note };
}

/** Validates a row from the database (or any JSON) into a Place, or null. */
export function toPlace(v: unknown): Place | null {
  if (!v || typeof v !== "object") return null;
  const id = (v as { id?: unknown }).id;
  const p = cleanPlace(v);
  if (!p || typeof id !== "number" || !Number.isInteger(id) || id <= 0) return null;
  return { id, ...p };
}
