import type { Metadata } from "next";
import { BRAND } from "./brand";
import { LANGS, OG_LOCALE, type Lang, withLang } from "./i18n";

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

/**
 * Page metadata for one language of one page. `path` has no language prefix ("/puja", "/" for home).
 * Canonical, hreflang and og:url are only emitted when a site origin is configured, because a
 * relative canonical without a known origin would be wrong.
 */
export function pageMeta(opts: { lang: Lang; title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const configured = Boolean(siteUrl());
  const self = withLang(opts.lang, opts.path);
  const other: Lang = opts.lang === "en" ? "bn" : "en";
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: configured ? { canonical: self, languages: languageAlternates(opts.path) } : undefined,
    openGraph: {
      title: opts.title,
      description: opts.description,
      siteName: BRAND.name,
      type: "website",
      locale: OG_LOCALE[opts.lang],
      alternateLocale: [OG_LOCALE[other]],
      url: configured ? self : undefined,
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}
