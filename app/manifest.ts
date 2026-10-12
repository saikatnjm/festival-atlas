import type { MetadataRoute } from "next";

/** Web app manifest so the site can be added to a phone's home screen (no service worker, no offline mode). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pujo Guide",
    short_name: "Pujo Guide",
    description: "Durga Puja 2026 games, a local guide for Kolkata and Dhaka, and a pandal map. English & বাংলা.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff3ea",
    theme_color: "#b5121b",
    lang: "en",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
