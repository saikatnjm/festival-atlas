import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** Search and AI-assistant crawlers are welcome everywhere except admin and the API (named for clarity). */
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot"];
const PRIVATE = ["/en/admin", "/bn/admin", "/api/"];

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  return {
    rules: [
      { userAgent: AI_BOTS, allow: "/", disallow: PRIVATE },
      { userAgent: "*", allow: "/", disallow: PRIVATE },
    ],
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
