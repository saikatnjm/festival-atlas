// Feedback rows via Supabase's REST API. Server-side only (app/api/feedback/route.ts): the anon key
// may only insert, so nothing here reads rows; the owner reads them on /admin with the service key.

export * from "./feedback-shared";

export interface FeedbackRow {
  device: string;
  topic: string;
  contact: string | null;
  message: string;
  page: string | null;
  lang: "bn" | "en";
}

function config(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "");
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? { url, key } : null;
}

export const feedbackConfigured = (): boolean => config() !== null;

export async function insertFeedback(row: FeedbackRow): Promise<void> {
  const c = config();
  if (!c) throw new Error("feedback not configured");
  const res = await fetch(`${c.url}/rest/v1/feedback`, {
    method: "POST",
    headers: {
      apikey: c.key,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
      ...(c.key.startsWith("eyJ") ? { Authorization: `Bearer ${c.key}` } : {}),
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`feedback insert ${res.status}`);
}
