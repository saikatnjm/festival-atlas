import { ogImage } from "@/lib/og";

export const alt = "Kartik Puja 2026: Kartik Sankranti, 16 November (Drik) or 17 November (Surya Siddhanta)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "KARTIK PUJA 2026 · KARTIK SANKRANTI",
    title: "16 or 17 November 2026",
    subtitle: "Vrishchika Sankranti 16 Nov 7:48 pm (Kolkata). Katwa's Kartik Larai.",
    art: [{ id: "bagha", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}
