import { ogImage } from "@/lib/og";

export const alt = "Akshaya Tritiya 2027: Sunday 9 May; Kolkata puja muhurat 5:00 to 9:03 am";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "AKSHAYA TRITIYA 2027",
    title: "Sunday 9 May 2027",
    subtitle: "Kolkata puja muhurat 5:00–9:03 am. Gold-buying time and Tritiya tithi, Kolkata and Dhaka.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}
