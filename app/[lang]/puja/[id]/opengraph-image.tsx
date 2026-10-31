import { COUNTRY_EN, OTHER_PUJAS, getPandal } from "@/data/pandals";
import { latin, ogImage } from "@/lib/og";

export const alt = "Puja pandal on Pujo Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getPandal(id);
  if (!p) return ogImage({ kicker: "DURGA PUJA PANDAL", title: "Pujo Guide" });
  const place = `${p.city}, ${COUNTRY_EN[p.country] ?? p.country}`;
  return ogImage({
    kicker: p.puja ? OTHER_PUJAS[p.puja].og : "DURGA PUJA PANDAL",
    title: latin(p.name) || "Pandal",
    subtitle: p.year ? `${place} · Edition ${p.year}` : place,
  });
}
