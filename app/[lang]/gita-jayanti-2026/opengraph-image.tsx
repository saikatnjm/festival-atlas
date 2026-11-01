import { ogImage } from "@/lib/og";

export const alt = "Gita Jayanti 2026: Sunday 20 December, Mokshada Ekadashi; tithi times for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GITA JAYANTI 2026 · MOKSHADA EKADASHI",
    title: "Sunday 20 December 2026",
    subtitle: "Ekadashi tithi Kolkata 19 Dec 10:09 pm to 20 Dec 8:14 pm. Dhaka 10:39 pm to 8:44 pm.",
    art: [{ id: "gopal", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}
