import { ogImage } from "@/lib/og";

export const alt = "Add a pandal or mandir to the Pujo Guide map";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "ADD A PANDAL",
    title: "Is your para's puja missing?",
    subtitle: "Add a pandal or mandir with a pin. It shows on the map once it is checked.",
    art: [
      { id: "detective", mood: "wow" },
    ],
  });
}
