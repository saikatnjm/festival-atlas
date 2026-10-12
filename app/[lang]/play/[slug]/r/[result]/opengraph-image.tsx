import { getActivity } from "@/data/play";
import { ogImage } from "@/lib/og";

const size = { width: 1200, height: 630 };
const contentType = "image/png";

/** One image per result, with alt text that names the result and its game. */
export async function generateImageMetadata({ params }: { params: Promise<{ slug: string; result: string }> }) {
  const { slug, result: resultId } = await params;
  const activity = getActivity(slug);
  const result = activity?.results.find((r) => r.id === resultId);
  const alt = result && activity ? `${result.title.en}: a result card from ${activity.meta.title.en} on Pujo Guide` : "Pujo Guide result card";
  return [{ id: "card", size, contentType, alt }];
}

export default async function Image({ params }: { params: Promise<{ slug: string; result: string }> }) {
  const { slug, result: resultId } = await params;
  const activity = getActivity(slug);
  const result = activity?.results.find((r) => r.id === resultId);
  return ogImage({
    kicker: (activity?.meta.title.en ?? "Pujo Guide").toUpperCase(),
    title: result?.title.en ?? "Pujo Guide",
    subtitle: "Which one are you? Play on Pujo Guide",
    art: result ? [{ id: result.char, mood: result.mood }] : undefined,
  });
}
