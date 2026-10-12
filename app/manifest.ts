import type { MetadataRoute } from "next";

/** Web app manifest so the site can be added to a phone's home screen (no service worker, no offline mode). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Festival Atlas",
    short_name: "Festival Atlas",
    description: "Funny Puja games, a local Puja guide for Kolkata and Dhaka, and a pandal map. English & বাংলা.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8ec",
    theme_color: "#2b2d8f",
    lang: "en",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
