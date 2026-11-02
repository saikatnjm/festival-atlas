import { ogImage } from "@/lib/og";

export const alt = "Parshuram Jayanti 2027: Saturday 8 May; Tritiya tithi (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PARSHURAM JAYANTI 2027",
    title: "Saturday 8 May 2027",
    subtitle: "Tritiya 8 May 11:42 am to 9 May 9:03 am (Kolkata). Akshaya Tritiya is Sun 9 May.",
    art: [{ id: "bagha", mood: "happy" }, { id: "detective", mood: "smug" }],
  });
}
