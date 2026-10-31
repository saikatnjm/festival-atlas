import { getArticle } from "@/data/blog";
import { latin, ogImage } from "@/lib/og";

export const alt = "Pujo Guide article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug);
  if (!a) return ogImage({ kicker: "PUJO GUIDE · STORIES", title: "Pujo Guide" });
  return ogImage({
    kicker: "PUJO GUIDE · STORIES",
    title: latin(a.h1.en) || "Pujo Guide",
    subtitle: latin(a.description.en),
    art: [{ id: "detective", mood: "happy" }],
  });
}
