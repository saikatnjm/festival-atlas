import { NextResponse } from "next/server";
import { cleanContact, cleanMessage, cleanPage, cleanTopic, feedbackConfigured, insertFeedback } from "@/lib/feedback";
import { isDevice } from "@/lib/live-shared";

export const dynamic = "force-dynamic";

/** POST: one feedback entry {device, topic?, contact?, message, page?, lang?, website?(honeypot)}. */
export async function POST(req: Request) {
  if (!feedbackConfigured()) return NextResponse.json({ ok: false, disabled: true }, { status: 503 });
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  const b = (body ?? {}) as { device?: unknown; topic?: unknown; contact?: unknown; message?: unknown; page?: unknown; lang?: unknown; website?: unknown };
  // Honeypot: real visitors never see the "website" field, bots fill it. Pretend it worked.
  if (typeof b.website === "string" && b.website.trim()) return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  const message = cleanMessage(b.message);
  if (!isDevice(b.device) || !message) return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  try {
    await insertFeedback({
      device: b.device,
      topic: cleanTopic(b.topic),
      contact: cleanContact(b.contact),
      message,
      page: cleanPage(b.page),
      lang: b.lang === "bn" ? "bn" : "en",
    });
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
