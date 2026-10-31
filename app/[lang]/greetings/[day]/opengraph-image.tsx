import { getGreeting } from "@/data/play/greetings";
import { latin, ogImage } from "@/lib/og";

export const alt = "Bengali festival wishes and a greeting card with your name, on Pujo Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ day: string }> }) {
  const g = getGreeting((await params).day);
  if (!g) return ogImage({ kicker: "GREETING CARDS", title: "Pujo Guide" });
  return ogImage({
    kicker: "WISHES IN BENGALI · FREE CARD",
    title: latin(g.headline.en) || "Pujo Guide",
    subtitle: latin(g.lines[0].en),
    art: [{ id: g.char, mood: g.mood }],
  });
}
