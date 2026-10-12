import type { MetadataRoute } from "next";
import { activities } from "@/data/play";
import { pandals } from "@/data/pandals";
import { collections } from "@/data/pandals/collections";
import { LANGS, withLang } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastModified?: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  if (!base) return []; // No origin configured: nothing valid to list. See PROJECT_STATUS.md.
  const entries: Entry[] = [
    { path: "/", priority: 1, changeFrequency: "daily" },
    { path: "/durga-puja-2026", priority: 0.95, changeFrequency: "daily" },
    { path: "/local", priority: 0.9, changeFrequency: "daily" },
    { path: "/puja", priority: 0.9, changeFrequency: "weekly" },
    ...collections.map((c) => ({ path: `/puja/${c.slug}`, priority: 0.9, changeFrequency: "weekly" as const })),
    { path: "/play", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.4, changeFrequency: "monthly" },
    ...pandals.map((p) => ({ path: `/puja/${p.id}`, priority: p.year === 2026 ? 0.8 : 0.6, changeFrequency: "weekly" as const, lastModified: p.lastVerified })),
    ...activities.flatMap((a) => [
      { path: `/play/${a.meta.slug}`, priority: 0.7, changeFrequency: "monthly" as const },
      ...a.results.map((r) => ({ path: `/play/${a.meta.slug}/r/${r.id}`, priority: 0.5, changeFrequency: "monthly" as const })),
    ]),
  ];
  const url = (lang: (typeof LANGS)[number], p: string) => `${base}${withLang(lang, p)}`;
  return entries.flatMap((e) =>
    LANGS.map((lang) => ({
      url: url(lang, e.path),
      changeFrequency: e.changeFrequency,
      priority: e.priority,
      ...(e.lastModified ? { lastModified: e.lastModified } : {}),
      alternates: { languages: { en: url("en", e.path), bn: url("bn", e.path), "x-default": `${base}/` } },
    })),
  );
}
