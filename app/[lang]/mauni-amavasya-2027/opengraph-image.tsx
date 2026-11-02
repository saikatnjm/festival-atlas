import { ogImage } from "@/lib/og";

export const alt = "Mauni Amavasya 2027: Saturday 6 February; Amavasya tithi for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MAUNI AMAVASYA 2027",
    title: "Saturday 6 February 2027",
    subtitle: "Amavasya Kolkata 5 Feb 7:05 pm to 6 Feb 9:25 pm. Dhaka 7:35 pm to 9:55 pm.",
    art: [{ id: "sleepy", mood: "happy" }, { id: "detective", mood: "smug" }],
  });
}
