import { siteUrl } from "./site";

/** Renders structured data. `<` is escaped so page text can never close the script tag. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Absolute URL for a site path, or undefined when no origin is configured. */
export function abs(path: string): string | undefined {
  const o = siteUrl();
  return o ? `${o}${path === "/" ? "" : path}` : undefined;
}

/** The site as an Organization (one node per page, referenced by `@id` from articles and the WebSite). */
export function orgLd(): Record<string, unknown> | null {
  const o = siteUrl();
  if (!o) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${o}/#org`,
    name: "Pujo Guide",
    alternateName: "পুজো গাইড",
    url: `${o}/`,
    logo: { "@type": "ImageObject", url: `${o}/apple-icon`, width: 180, height: 180 },
  };
}

/** `{"@id": …#org}` for author/publisher fields, or a plain name when no origin is configured. */
export function orgRef(): Record<string, unknown> {
  const o = siteUrl();
  return o ? { "@id": `${o}/#org` } : { "@type": "Organization", name: "Pujo Guide" };
}

export function breadcrumbs(items: { name: string; path: string }[]): Record<string, unknown> | null {
  const list = items.map((it, i) => {
    const url = abs(it.path);
    return url ? { "@type": "ListItem", position: i + 1, name: it.name, item: url } : null;
  });
  if (list.some((x) => x === null)) return null;
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: list };
}
