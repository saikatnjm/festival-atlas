import { ogImage } from "@/lib/og";

export const alt = "Rath Yatra 2027: Monday 5 July; Dwitiya tithi 5 Jul 4:50 am to 6 Jul 1:13 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "RATH YATRA 2027 · DATE & TIME",
    title: "Monday 5 July 2027",
    subtitle: "Dwitiya tithi (Kolkata) 5 Jul 4:50 am to 6 Jul 1:13 am. Mahesh Rath, Serampore; Dhamrai, Bangladesh.",
    art: [{ id: "gopal", mood: "happy" }, { id: "bhog", mood: "wow" }],
  });
}
