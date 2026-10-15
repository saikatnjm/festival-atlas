import { NextResponse } from "next/server";
import { activities } from "@/data/play";
import { pandals } from "@/data/pandals";
import { isDevice } from "@/lib/live-shared";
import { EMPTY_COMMUNITY, cleanNick, communityConfigured, fetchCommunity, isGame, isResult, recordPlay } from "@/lib/community";

export const dynamic = "force-dynamic";

/** GET: community stats, leaderboards and the activity feed (edge-cached for 60 s). */
export async function GET() {
  if (!communityConfigured()) return NextResponse.json({ ok: true, disabled: true, ...EMPTY_COMMUNITY }, { headers: { "Cache-Control": "public, s-maxage=300" } });
  try {
    const data = await fetchCommunity();
    return NextResponse.json({ ok: true, ...data, at: new Date().toISOString() }, { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120" } });
  } catch {
    return NextResponse.json({ ok: false, ...EMPTY_COMMUNITY }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

/** POST: record one play {device, game, result?, score?, nickname?}. The game must be a real one; results must exist. */
export async function POST(req: Request) {
  if (!communityConfigured()) return NextResponse.json({ ok: false, disabled: true }, { status: 503 });
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  const b = (body ?? {}) as { device?: unknown; game?: unknown; result?: unknown; score?: unknown; nickname?: unknown };
  const game = isGame(b.game) ? b.game : null;
  const activity = game ? activities.find((a) => a.meta.slug === game) : undefined;
  const knownGame = game === "passport" || Boolean(activity);
  const result = b.result === undefined || b.result === null ? null : isResult(b.result) ? b.result : undefined;
  const resultOk = result === null || (activity ? activity.results.some((r) => r.id === result) : false);
  const score = Number.isInteger(b.score) ? (b.score as number) : 0;
  // The passport score is "pandals ticked", so it can never exceed the directory size.
  const maxScore = game === "passport" ? pandals.length : 100000;
  const nickname = cleanNick(b.nickname) || null;
  if (!game || !knownGame || !isDevice(b.device) || !resultOk || score < 0 || score > maxScore) {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
  try {
    await recordPlay({ device: b.device, game, result: result ?? null, score, nickname });
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
