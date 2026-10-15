// Feedback form validation shared by the browser form and the API route. Pure; no imports (unit-tested).

export const FEEDBACK_TOPICS = ["general", "bug", "idea"] as const;
export type FeedbackTopic = (typeof FEEDBACK_TOPICS)[number];

export const MESSAGE_MIN = 5;
export const MESSAGE_MAX = 2000;
export const CONTACT_MAX = 120;

/** Topics are fixed ids or "puja-<id>" from the Pujo menu. */
export function cleanTopic(v: unknown): string {
  if (typeof v !== "string") return "general";
  const t = v.trim().toLowerCase();
  return /^[a-z0-9-]{1,40}$/.test(t) ? t : "general";
}

/** Collapses whitespace and trims; empty becomes null. */
export function cleanContact(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const c = v.replace(/\s+/g, " ").trim().slice(0, CONTACT_MAX);
  return c.length >= 3 ? c : null;
}

/** Keeps line breaks, strips control characters, caps the length; too short becomes null. */
export function cleanMessage(v: unknown): string | null {
  if (typeof v !== "string") return null;
  // eslint-disable-next-line no-control-regex
  const m = v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/\r\n?/g, "\n").trim().slice(0, MESSAGE_MAX);
  return m.length >= MESSAGE_MIN ? m : null;
}

/** The page the form was on: a site-relative path only, never a full URL from the client. */
export function cleanPage(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const p = v.trim();
  return /^\/[A-Za-z0-9/_?=&%.-]{0,199}$/.test(p) ? p : null;
}
