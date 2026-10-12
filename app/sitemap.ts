import type { MetadataRoute } from "next";
import { activities } from "@/data/play";
import { pandals } from "@/data/pandals";
import { LANGS, withLang } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  if (!base) return []; // No origin configured: nothing valid to list. See PROJECT_STATUS.md.
  const paths = [
    "/",
    "/puja",
    "/play",
    "/local",
    "/about",
    ...pandals.map((p) => `/puja/${p.id}`),
    ...activities.flatMap((a) => [`/play/${a.meta.slug}`, ...a.results.map((r) => `/play/${a.meta.slug}/r/${r.id}`)]),
  ];
  const url = (lang: (typeof LANGS)[number], p: string) => `${base}${withLang(lang, p)}`;
  return paths.flatMap((p) =>
    LANGS.map((lang) => ({
      url: url(lang, p),
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : p === "/puja" || p === "/play" || p === "/local" ? 0.9 : 0.6,
      alternates: { languages: { en: url("en", p), bn: url("bn", p), "x-default": `${base}/` } },
    })),
  );
}
