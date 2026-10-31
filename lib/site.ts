import type { Metadata } from "next";
import { getDict } from "@/data/i18n";
import { BRAND } from "./brand";
import { LANGS, ogLocale, type Lang, withLang } from "./i18n";

/**
 * Public origin of the site, or undefined if none is configured. Resolved at build time in
 * next.config.ts: Vercel's production domain on Vercel, NEXT_PUBLIC_SITE_URL elsewhere.
 * Nothing is assumed otherwise: without an origin there are no canonical URLs or sitemap entries.
 */
export function siteUrl(): string | undefined {
  return process.env.NEXT_PUBLIC_SITE_ORIGIN || undefined;
}

/** Host shown on share cards when an origin is configured (the browser host is used otherwise). */
export function siteHost(): string | undefined {
  const o = siteUrl();
  if (!o) return undefined;
  try {
    return new URL(o).host;
  } catch {
    return undefined;
  }
}

/** hreflang map for a language-less path. "x-default" is the language chooser at "/". */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of LANGS) out[l] = withLang(l, path);
  out["x-default"] = "/";
  return out;
}

/** Roughly what Google shows before cutting a title or snippet off. */
const TITLE_MAX = 60;
const DESC_MAX = 160;

/** Trims text to `max` characters at a word boundary, with an ellipsis when something was cut. */
export function clampText(text: string, max: number): string {
  const chars = [...text];
  if (chars.length <= max) return text;
  const cut = chars.slice(0, max - 1).join("");
  const space = cut.lastIndexOf(" ");
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,;:.\-–—·]+$/, "")}…`;
}

/**
 * Page metadata for one language of one page. `path` has no language prefix ("/puja", "/" for home).
 * Canonical, hreflang and og:url are only emitted when a site origin is configured, because a
 * relative canonical without a known origin would be wrong. `region: "wb"` switches og:locale to the
 * Indian locales (bn_IN / en_IN); everything else uses bn_BD / en_US.
 * The " · Pujo Guide" suffix is dropped when it would push the title past what search results show,
 * and the description is trimmed to snippet length. Share images come from each route's
 * opengraph-image file (setting `images` here would override those files, so it is left out).
 */
export function pageMeta(opts: { lang: Lang; title: string; description: string; path: string; absoluteTitle?: boolean; region?: "wb" | "bd" | null }): Metadata {
  const configured = Boolean(siteUrl());
  const self = withLang(opts.lang, opts.path);
  const other: Lang = opts.lang === "en" ? "bn" : "en";
  const suffix = ` · ${getDict(opts.lang).site.name}`;
  const absolute = opts.absoluteTitle || [...opts.title].length + [...suffix].length > TITLE_MAX;
  const description = clampText(opts.description, DESC_MAX);
  return {
    title: absolute ? { absolute: opts.title } : opts.title,
    description,
    alternates: configured ? { canonical: self, languages: languageAlternates(opts.path) } : undefined,
    openGraph: {
      title: opts.title,
      description,
      siteName: BRAND.name,
      type: "website",
      locale: ogLocale(opts.lang, opts.region),
      alternateLocale: [ogLocale(other, opts.region)],
      url: configured ? self : undefined,
    },
    twitter: { card: "summary_large_image", title: opts.title, description },
  };
}
