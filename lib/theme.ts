// Colour palettes the visitor can choose. Applied as data-theme on <html>; the CSS lives in site.css.
// "auto" = classic, switching to sindoor during the Puja window (lib/puja-dates.ts).

import type { L } from "./i18n";

// Same window as lib/puja-dates.ts (kept local: tests load this file under Node, which can't resolve
// an extensionless value import).
const PUJA_MODE_WINDOW = { start: "2026-10-10", end: "2026-10-21" };

export const THEME_IDS = ["classic", "sindoor", "shiuli", "nodi"] as const;
export type ThemeId = (typeof THEME_IDS)[number];
export type ThemeChoice = ThemeId | "auto";
export const THEME_KEY = "fa:theme";

export const THEMES: Record<ThemeId, { name: L; swatch: [string, string, string] }> = {
  classic: { name: { bn: "ক্লাসিক", en: "Classic" }, swatch: ["#2b2d8f", "#ffb400", "#fff8ec"] },
  sindoor: { name: { bn: "সিঁদুর", en: "Sindoor" }, swatch: ["#b5121b", "#f2a900", "#fff3ea"] },
  shiuli: { name: { bn: "শিউলি", en: "Shiuli" }, swatch: ["#d9480f", "#ffd166", "#fffbf3"] },
  nodi: { name: { bn: "নদী", en: "River" }, swatch: ["#0b7f8a", "#ff5a5f", "#eefaf8"] },
};

export const isThemeChoice = (v: unknown): v is ThemeChoice => v === "auto" || (THEME_IDS as readonly string[]).includes(v as string);

/** The theme "auto" resolves to on a given calendar date. */
export function autoTheme(today: string): ThemeId {
  return today >= PUJA_MODE_WINDOW.start && today <= PUJA_MODE_WINDOW.end ? "sindoor" : "classic";
}

/**
 * Inline script for <head>: applies the saved choice before first paint so there is no flash.
 * Uses the device's local date (close enough for a colour choice).
 */
export const THEME_BOOT_SCRIPT = `(function(){try{var c=localStorage.getItem(${JSON.stringify(THEME_KEY)});var ids=${JSON.stringify(THEME_IDS)};var d=new Date();var t=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");var auto=(t>=${JSON.stringify(PUJA_MODE_WINDOW.start)}&&t<=${JSON.stringify(PUJA_MODE_WINDOW.end)})?"sindoor":"classic";var th=ids.indexOf(c)>=0?c:auto;document.documentElement.setAttribute("data-theme",th);document.documentElement.setAttribute("data-theme-choice",ids.indexOf(c)>=0?c:"auto");}catch(e){}})();`;
