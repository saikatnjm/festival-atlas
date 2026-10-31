import { ogImage } from "@/lib/og";

export const alt = "Send feedback to Pujo Guide: ideas, bugs and the pujas you want next";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "FEEDBACK",
    title: "Tell us what you want next",
    subtitle: "Ideas, bugs, the next puja to cover: a couple of lines reaches us directly.",
    art: [
      { id: "gopal", mood: "happy" },
    ],
  });
}
