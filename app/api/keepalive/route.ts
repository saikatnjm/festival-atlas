import { NextResponse } from "next/server";
import { communityConfigured, pingDatabase } from "@/lib/community";

export const dynamic = "force-dynamic";

/**
 * GET: touch the database so the Supabase Free plan doesn't pause it for inactivity (Vercel cron in
 * vercel.json, plus .github/workflows/keepalive.yml as a backup). When CRON_SECRET is set, callers must
 * send `Authorization: Bearer <CRON_SECRET>` (Vercel's cron does this automatically).
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }
  if (!communityConfigured()) return NextResponse.json({ ok: false, disabled: true }, { status: 503, headers: { "Cache-Control": "no-store" } });
  const { answered, errors } = await pingDatabase();
  if (errors.length) console.error("keepalive:", errors.join("; "));
  return NextResponse.json(
    { ok: answered > 0, answered, errors, at: new Date().toISOString() },
    { status: answered > 0 ? 200 : 503, headers: { "Cache-Control": "no-store" } },
  );
}
