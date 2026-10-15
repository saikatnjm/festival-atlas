import { NextResponse } from "next/server";
import { getPandal } from "@/data/pandals";
import {
  KINDS,
  bucketFor,
  fetchBoard,
  fetchTimings,
  insertTiming,
  isDevice,
  isPandalId,
  isTimingKind,
  kolkataDay,
  liveConfigured,
  upsertSignal,
  type SignalKind,
} from "@/lib/live";

export const dynamic = "force-dynamic";

/** GET: the live board + today's timings (cached at the edge for 30 s so Supabase sees a few requests a minute at most). */
export async function GET() {
  if (!liveConfigured()) return NextResponse.json({ ok: true, disabled: true, board: {}, timings: {} }, { headers: { "Cache-Control": "public, s-maxage=300" } });
  try {
    const [board, timings] = await Promise.all([fetchBoard(), fetchTimings().catch(() => ({}))]);
    return NextResponse.json({ ok: true, board, timings, at: new Date().toISOString() }, { headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" } });
  } catch {
    return NextResponse.json({ ok: false, board: {}, timings: {} }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

/**
 * POST one report. Signals: {device, pandalId, kind: crowd|here|love|wait, value?}.
 * Timings: {device, pandalId, kind: anjali|bhog, minutes}. Validated here; the database enforces one per bucket.
 */
export async function POST(req: Request) {
  if (!liveConfigured()) return NextResponse.json({ ok: false, disabled: true }, { status: 503 });
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  const b = (body ?? {}) as { device?: unknown; pandalId?: unknown; kind?: unknown; value?: unknown; minutes?: unknown };
  if (!isDevice(b.device) || !isPandalId(b.pandalId) || !getPandal(b.pandalId)) {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  if (isTimingKind(b.kind)) {
    const minutes = typeof b.minutes === "number" ? b.minutes : NaN; // Number(null/""/[]) would be a valid 00:00
    if (!Number.isInteger(minutes) || minutes < 0 || minutes > 1439) return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
    try {
      await insertTiming({ device: b.device, pandal_id: b.pandalId, kind: b.kind, minutes, day: kolkataDay() });
      return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
    } catch {
      return NextResponse.json({ ok: false }, { status: 503 });
    }
  }

  const kind = KINDS.includes(b.kind as SignalKind) ? (b.kind as SignalKind) : null;
  const value = kind === "crowd" || kind === "wait" ? Number(b.value) : 1;
  const max = kind === "wait" ? 4 : 3;
  if (!kind || !Number.isInteger(value) || value < 1 || value > max) {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
  try {
    await upsertSignal({ device: b.device, pandal_id: b.pandalId, kind, value, bucket: bucketFor(kind) });
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
