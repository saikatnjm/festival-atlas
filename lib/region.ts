// Which calendar to assume for a visitor (West Bengal or Bangladesh): the choice saved on the Local
// page, else the phone's time zone, else West Bengal. Pure helpers (unit-tested) + one browser read.

export type Region = "wb" | "bd";

export const REGION_KEY = "fa:region";

export const isRegion = (v: unknown): v is Region => v === "wb" || v === "bd";

/** Asia/Dhaka → Bangladesh, Asia/Kolkata (or its old name Calcutta) → West Bengal, anything else → unknown. */
export function regionFromTimeZone(tz: string | null | undefined): Region | null {
  if (tz === "Asia/Dhaka") return "bd";
  if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "wb";
  return null;
}

/** Saved region if any, else the time-zone guess, else `fallback`. Browser only; safe to call anywhere. */
export function guessRegion(fallback: Region = "wb"): Region {
  try {
    const saved = window.localStorage.getItem(REGION_KEY);
    if (isRegion(saved)) return saved;
  } catch {
    // storage blocked
  }
  try {
    return regionFromTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone) ?? fallback;
  } catch {
    return fallback;
  }
}
