import { getActivity } from "@/data/play";
import { ogImage } from "@/lib/og";

export const alt = "Festival Atlas result";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string; result: string }> }) {
  const { slug, result: resultId } = await params;
  const activity = getActivity(slug);
  const result = activity?.results.find((r) => r.id === resultId);
  return ogImage({
    kicker: (activity?.meta.title.en ?? "Festival Atlas").toUpperCase(),
    title: result?.title.en ?? "Festival Atlas",
    subtitle: "Which one are you? Play on Festival Atlas",
    art: result ? [{ id: result.char, mood: result.mood }] : undefined,
  });
}
