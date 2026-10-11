import { COUNTRY_EN, getPandal } from "@/data/pandals";
import { latin, ogImage } from "@/lib/og";

export const alt = "Durga Puja pandal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getPandal(id);
  if (!p) return ogImage({ kicker: "DURGA PUJA PANDAL", title: "Festival Atlas" });
  const place = `${p.city}, ${COUNTRY_EN[p.country] ?? p.country}`;
  return ogImage({
    kicker: "DURGA PUJA PANDAL",
    title: latin(p.name) || "Pandal",
    subtitle: p.year ? `${place} · Edition ${p.year}` : place,
  });
}
