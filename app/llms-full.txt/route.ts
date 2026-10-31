import { ARTICLES } from "@/data/blog";
import { FESTIVAL_PAGES } from "@/data/festivals/index";
import { KALI_TEXT } from "@/data/kali-puja";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms-full.txt: the key answers of every festival page and article as plain Markdown (English), so AI
 * assistants can quote dates with their sources. Built from the same data as the pages.
 */
export function GET(): Response {
  const o = siteUrl() ?? "";
  const out: string[] = [
    "# Pujo Guide: festival dates, times and stories (full text)",
    "",
    "> Every date and time below is copied from a named source (mostly Drik Panchang for Kolkata and Dhaka) and is shown on the linked page with the source. Times are Kolkata IST unless marked Dhaka (BST). Panjikas can differ by a day.",
    "",
    `## Kali Puja 2026`,
    `Page: ${o}/en/kali-puja-2026`,
    "",
    KALI_TEXT.lead.en,
    "",
    ...KALI_TEXT.faq.flatMap((q) => [`### ${q.q.en}`, q.a.en, ""]),
  ];
  for (const f of FESTIVAL_PAGES) {
    out.push(`## ${f.h1.en}`, `Page: ${o}/en${f.path} (last checked ${f.lastChecked})`, "", f.lead.en, "");
    for (const rows of Object.entries(f.timings?.rows ?? {})) {
      const [region, list] = rows;
      for (const r of list ?? []) out.push(`- ${region === "bd" ? "Dhaka" : "Kolkata"}, ${r.day.en}: ${r.what.en}: ${r.when.en} (source: ${r.source.title}, ${r.source.url})`);
    }
    out.push("");
    for (const q of f.faq) out.push(`### ${q.q.en}`, q.a.en, "");
  }
  for (const a of ARTICLES) {
    out.push(`## ${a.h1.en}`, `Page: ${o}/en/blog/${a.slug} (updated ${a.updated})`, "", a.lead.en, "");
    for (const q of a.faq) out.push(`### ${q.q.en}`, q.a.en, "");
  }
  return new Response(out.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
