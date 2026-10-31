import { ogImage } from "@/lib/og";

export const alt = "Janmashtami 2027: Wednesday 25 August; Nishita puja 11:16 pm to 12:01 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "JANMASHTAMI 2027 · DATE & TIME",
    title: "Wednesday 25 August 2027",
    subtitle: "Nishita puja (Kolkata) 11:16 pm–12:01 am. Ashtami, Rohini and parana times, Dhaka too.",
    art: [{ id: "gopal", mood: "wow" }, { id: "sleepy", mood: "happy" }],
  });
}
