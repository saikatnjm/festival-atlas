import { getActivity } from "@/data/play";
import { ogImage } from "@/lib/og";

export const alt = "Festival Atlas activity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
