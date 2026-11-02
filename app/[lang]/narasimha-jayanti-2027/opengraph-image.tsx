import { ogImage } from "@/lib/og";

export const alt = "Narasimha Jayanti 2027: Tuesday 18 May; Sayankala puja 3:32 to 6:11 pm (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "NARASIMHA JAYANTI 2027",
    title: "Tuesday 18 May 2027",
    subtitle: "Sayankala puja 3:32–6:11 pm Kolkata, 3:55–6:35 pm Dhaka. Chaturdashi tithi.",
    art: [{ id: "bagha", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}
