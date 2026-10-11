import { num, type Lang } from "@/lib/i18n";
import { events, type Region } from "@/data/events/events";
import { toItems } from "@/data/pandals/view";
import { regionInfo } from "./content";

/** One pickable stop for a pandal-hopping plan, already in the page language. */
export interface Stop {
  id: string;
  name: string;
  place: string;
  /** 2026 theme highlight (as reported) or the directory's theme with its year. */
  note?: string;
  href?: string;
}

/** Directory pandals of the region, enriched with 2026 highlights; highlights without a listing are added. */
export function stopsFor(region: Region, lang: Lang): Stop[] {
  const highlights = events.filter((e) => e.region === region && e.kind === "pandal");
  const byPandal = new Map(highlights.filter((e) => e.pandalId).map((e) => [e.pandalId as string, e]));
  const fromDirectory: Stop[] = toItems(lang)
    .filter((p) => p.country === regionInfo[region].country)
    .map((p) => {
      const h = byPandal.get(p.id);
      const year = p.year ? num(p.year, lang) : "";
      const note = h ? `${num(2026, lang)} · ${h.summary[lang]}` : [year, p.theme].filter(Boolean).join(" · ") || undefined;
      return { id: p.id, name: p.name, place: p.area ?? p.place, note, href: p.href };
    });
  const extra: Stop[] = highlights
    .filter((e) => !e.pandalId)
    .map((e) => ({ id: e.id, name: e.title[lang], place: e.place?.[lang] ?? "", note: `${num(2026, lang)} · ${e.summary[lang]}` }));
  return [...extra, ...fromDirectory];
}
