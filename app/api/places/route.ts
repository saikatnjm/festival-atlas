import { NextResponse } from "next/server";
import { isDevice } from "@/lib/live-shared";
import { cleanPlace, fetchApprovedPlaces, insertPlace, placesConfigured } from "@/lib/places";

export const dynamic = "force-dynamic";

/** GET: approved community places for the map (edge-cached for 5 minutes). */
export async function GET() {
  if (!placesConfigured()) return NextResponse.json({ ok: true, disabled: true, places: [] }, { headers: { "Cache-Control": "public, s-maxage=600" } });
  try {
    const places = await fetchApprovedPlaces();
    return NextResponse.json({ ok: true, places }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=900" } });
  } catch {
    return NextResponse.json({ ok: false, places: [] }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

/** POST: one new place {device, name, area?, city, country, lat, lng, note?, lang?, website?(honeypot)}; stored as pending. */
export async function POST(req: Request) {
  if (!placesConfigured()) return NextResponse.json({ ok: false, disabled: true }, { status: 503 });
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  const b = (body ?? {}) as { device?: unknown; lang?: unknown; website?: unknown };
  if (typeof b.website === "string" && b.website.trim()) return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  const place = cleanPlace(body);
  if (!isDevice(b.device) || !place) return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  try {
    await insertPlace({ ...place, device: b.device, lang: b.lang === "bn" ? "bn" : "en" });
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
