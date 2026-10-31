import { ARTICLES } from "@/data/blog";
import { FESTIVAL_PAGES } from "@/data/festivals/index";
import { GREETINGS } from "@/data/play/greetings";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** /llms.txt (llmstxt.org): a plain-Markdown map of the site for AI assistants, built from the same data as the pages. */
export function GET(): Response {
  const o = siteUrl() ?? "";
  const en = (p: string) => `${o}/en${p}`;
  const lines = [
    "# Pujo Guide",
    "",
    "> Free bilingual (Bangla/English) guide to Bengali Hindu festivals for West Bengal, Bangladesh and the diaspora: festival dates and tithi times for Kolkata (IST) and Dhaka (BST), a sourced pandal directory with a map, greeting cards and stories. Every date and time cites a named source (mostly Drik Panchang, plus news and official notices) and shows when it was last checked; unknowns are marked as unknown.",
    "",
    "Every page exists in English (/en/...) and Bangla (/bn/...). Panjikas can differ by a day; pages say so where they do.",
    "",
    "## Festival dates and times",
    `- [Kali Puja 2026](${en("/kali-puja-2026")}): Sunday 8 November 2026, Amavasya and Nishita kaal for Kolkata and Dhaka, Bhai Phota, cracker rules, Kali Puja pandals`,
    ...FESTIVAL_PAGES.map((f) => `- [${f.h1.en}](${en(f.path)}): ${f.description.en}`),
    `- [Durga Puja 2026](${en("/durga-puja-2026")}): day-by-day dates and puja timings for Kolkata and Bangladesh`,
    "",
    "## Pandals",
    `- [Pandal directory and map](${en("/puja")}): sourced Durga, Kali and Jagaddhatri Puja listings with area-level pins`,
    `- [Kolkata pandals](${en("/puja/kolkata")}), [Dhaka and Bangladesh](${en("/puja/dhaka")}), [Abroad](${en("/puja/abroad")})`,
    "",
    "## Stories",
    ...ARTICLES.map((a) => `- [${a.h1.en}](${en(`/blog/${a.slug}`)}): ${a.description.en}`),
    "",
    "## Wishes and greeting cards",
    ...GREETINGS.map((g) => `- [${g.headline.en.replace(/!$/, "")} wishes](${en(`/greetings/${g.id}`)})`),
    "",
    "## Optional",
    `- [About Pujo Guide and how sources are used](${en("/about")})`,
    `- [Bangla edition](${o}/bn)`,
    `- [Full text: key answers and FAQs](${o}/llms-full.txt)`,
    `- [Sitemap](${o}/sitemap.xml)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
