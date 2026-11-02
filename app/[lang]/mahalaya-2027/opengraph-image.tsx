import { ogImage } from "@/lib/og";

export const alt = "Mahalaya 2027: Wednesday 29 September; tarpan Kutup muhurat 11:03 to 11:51 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MAHALAYA 2027 · DEVI PAKSHA",
    title: "Wednesday 29 September 2027",
    subtitle: "Tarpan Kutup 11:03–11:51 am Kolkata. Amavasya tithi and Dhaka times.",
    art: [{ id: "sleepy", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}
