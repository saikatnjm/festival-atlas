import { getActivity } from "@/data/play";
import { ogImage } from "@/lib/og";

const size = { width: 1200, height: 630 };
const contentType = "image/png";

/** One image per activity, with alt text that names the game (Latin only: OG rendering can't shape Bangla). */
export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getActivity(slug)?.meta;
  const title = meta?.title.en ?? "Festival Atlas";
  return [{ id: "card", size, contentType, alt: `${title}: a Puja cartoon game on Festival Atlas` }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getActivity(slug)?.meta;
  return ogImage({
    kicker: "PUJA CARTOON UNIVERSE",
    title: meta?.title.en ?? "Festival Atlas",
    subtitle: "Play it on Festival Atlas",
    art: (meta?.chars ?? ["detective"]).map((id, i) => ({ id, mood: i % 2 ? "smug" : "happy" })),
  });
}
