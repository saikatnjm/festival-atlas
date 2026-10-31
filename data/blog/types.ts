// Shape of a blog article (/blog/<slug>), rendered by components/blog/ArticlePage.tsx. Articles explain
// festivals in our own words; every fact (date, time, number, name, history) carries a fetched source
// (AGENTS.md rule 1). Only type imports here, so tests can import the article files.

import type { L } from "@/lib/i18n";

export interface ArticleSource {
  title: string;
  url: string;
}

/** One block of the article body. */
export type ArticleBlock =
  | { kind: "h2"; text: L }
  | { kind: "p"; text: L; source?: ArticleSource }
  | { kind: "list"; items: L[]; source?: ArticleSource }
  | { kind: "tip"; text: L };

export interface Article {
  slug: string;
  /** ISO date first published and last checked. */
  published: string;
  updated: string;
  /** ≤ 60 characters in English; Bangla similar. */
  title: L;
  /** ≤ 160 characters in English. */
  description: L;
  h1: L;
  /** One or two sentences under the h1. */
  lead: L;
  /** Emoji shown on the blog index card. */
  icon: string;
  body: ArticleBlock[];
  faq: { q: L; a: L }[];
  /** Internal links to our own pages (paths without the language). */
  related: { href: string; label: L }[];
  /** Every source used anywhere in the article. */
  sources: ArticleSource[];
}
