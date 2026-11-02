import { ogImage } from "@/lib/og";

export const alt = "Dhanteras 2027: Wednesday 27 October; Kolkata puja muhurat 6:08 to 7:34 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DHANTERAS 2027 · DHANTRAYODASHI",
    title: "Wednesday 27 October 2027",
    subtitle: "Kolkata puja muhurat 6:08–7:34 pm. Dhaka 6:28–7:55 pm.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}
