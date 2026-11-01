import { ogImage } from "@/lib/og";

export const alt = "Dhanteras 2026: Friday 6 November; Kolkata puja muhurat 5:28 to 7:26 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DHANTERAS 2026 · DHANTRAYODASHI",
    title: "Friday 6 November 2026",
    subtitle: "Kolkata puja muhurat 5:28–7:26 pm. Dhaka 5:48–7:45 pm. Trayodashi tithi and Pradosh Kaal.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}
