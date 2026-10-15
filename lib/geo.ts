// Distance helpers for "near me". Pure; no imports.

export interface LatLng {
  lat: number;
  lng: number;
}

/** Great-circle distance in metres (haversine). */
export function distanceM(a: LatLng, b: LatLng): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

/** "৮০০ মি" / "2.4 km"; area-level pins are rough, so nothing finer than 100 m is claimed. */
export function fmtDistance(m: number, lang: "bn" | "en"): string {
  const bn = (s: string) => (lang === "bn" ? s.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]) : s);
  const hundreds = Math.max(100, Math.round(m / 100) * 100);
  if (hundreds < 1000) return bn(`${hundreds} ${lang === "bn" ? "মি" : "m"}`);
  const km = m / 1000; // 999.5 m → "1.0 km", 9.96 km → "10 km" (never "1000 m" or "10.0 km")
  return bn(`${km < 9.95 ? km.toFixed(1) : km.toFixed(0)} ${lang === "bn" ? "কিমি" : "km"}`);
}

/** True when the point is plausibly in the Kolkata/Dhaka service area (keeps a wrong fix from sorting nonsense). */
export function inServiceArea(p: LatLng): boolean {
  return p.lat > 20 && p.lat < 27 && p.lng > 86 && p.lng < 93;
}
