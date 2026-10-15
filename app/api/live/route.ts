import { NextResponse } from "next/server";
import { getPandal } from "@/data/pandals";
import { KINDS, bucketFor, fetchBoard, isDevice, isPandalId, liveConfigured, upsertSignal, type SignalKind } from "@/lib/live";

export const dynamic = "force-dynamic";

/** GET: the aggregated live board (cached at the edge for 30 s so Supabase sees a few requests a minute at most). */
export async function GET() {
  if (!liveConfigured()) return NextResponse.json({ ok: true, disabled: true, board: {} }, { headers: { "Cache-Control": "public, s-maxage=300" } });
  try {
    const board = await fetchBoard();
    return NextResponse.json({ ok: true, board, at: new Date().toISOString() }, { headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" } });
  } catch {
    return NextResponse.json({ ok: false, board: {} }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

/** POST: one signal {device, pandalId, kind, value?}. Validated here; the database enforces one per bucket. */
export async function POST(req: Request) {
  if (!liveConfigured()) return NextResponse.json({ ok: false, disabled: true }, { status: 503 });
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  const b = (body ?? {}) as { device?: unknown; pandalId?: unknown; kind?: unknown; value?: unknown };
  const kind = KINDS.includes(b.kind as SignalKind) ? (b.kind as SignalKind) : null;
  const value = kind === "crowd" ? Number(b.value) : 1;
  if (!kind || !isDevice(b.device) || !isPandalId(b.pandalId) || !getPandal(b.pandalId) || ![1, 2, 3].includes(value)) {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
  try {
    await upsertSignal({ device: b.device, pandal_id: b.pandalId, kind, value, bucket: bucketFor(kind) });
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
