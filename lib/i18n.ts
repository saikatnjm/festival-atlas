// Language helpers shared by server and client code. Keep this file dependency-free.

export const LANGS = ["en", "bn"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

/** A piece of text that exists in every supported language. */
export type L = { en: string; bn: string };

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

/** Picks the text for a language. */
export const tr = (v: L, lang: Lang): string => v[lang];

export const LANG_NAME: Record<Lang, string> = { en: "English", bn: "বাংলা" };
/** Default og:locale (Bangladesh/diaspora pages); West Bengal pages use OG_LOCALE_WB. */
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", bn: "bn_BD" };
export const OG_LOCALE_WB: Record<Lang, string> = { en: "en_IN", bn: "bn_IN" };

/** og:locale for a page: "wb" pages (Kolkata collection, Indian pandals) are Indian locales, everything else the default. */
export const ogLocale = (lang: Lang, region?: "wb" | "bd" | null): string => (region === "wb" ? OG_LOCALE_WB[lang] : OG_LOCALE[lang]);

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

/** Formats a number with the digits of the chosen language. */
export const num = (n: number, lang: Lang): string =>
  lang === "bn" ? String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]) : String(n);

/** "/en/puja/x" -> "/bn/puja/x". Paths without a language prefix get one. */
export function switchLangPath(pathname: string, to: Lang): string {
  const parts = pathname.split("/");
  if (isLang(parts[1] ?? "")) parts[1] = to;
  else parts.splice(1, 0, to);
  return parts.join("/") || `/${to}`;
}

/** Prefixes a language-less path: ("bn", "/puja") -> "/bn/puja"; ("bn", "/") -> "/bn". */
export const withLang = (lang: Lang, path: string): string => (path === "/" ? `/${lang}` : `/${lang}${path}`);
