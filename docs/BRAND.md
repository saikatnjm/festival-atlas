# Pujo Guide brand

**Name.** "Pujo Guide" in Latin (share images, filenames, manifest); "পুজো গাইড" in the Bangla UI
(`t.site.name`). Renamed from "Festival Atlas" on 2026-10-12 to match the domain pujoguide.vercel.app.

**Mark.** A dhak seen head-on: cream drumhead with a marigold lacing ring and a sindoor strike mark,
the red barrel showing behind it, and the two sticks crossed behind with marigold knobs. Thick ink
outlines so it sits with the cartoon cast; reads as "drum" at 16 px. Our own drawing, no copied art.

## Assets (all in `public/brand/`, favicons in `app/`)

| File | Use |
| --- | --- |
| `logo-icon.svg` / `-dark.svg` | The mark, for light / dark backgrounds (header, footer, cards). |
| `logo-primary.svg` / `-dark.svg` | Mark + "Pujo Guide" wordmark (SVG `<text>`, so it needs the page font; the header builds the wordmark in HTML instead). |
| `app/icon.svg` | Favicon (SVG; slightly thicker strokes). |
| `app/apple-icon.tsx` | Home-screen PNG generated at build time (the mark on a cream tile). The old `favicon.ico` and `apple-icon.png` are removed. |
| `lib/brand.ts` | Palette constants and the inline mark used by the hero, share images and the PNG card export. |

## Palette

| Name | Hex | Use |
| --- | --- | --- |
| Sindoor | `#B5121B` | Drum barrel, Puja-mode primary, theme colour |
| Indigo | `#2B2D8F` | Classic palette primary, links, primary actions |
| Marigold | `#FFB400` | Lacing, highlights, dark-mode accent |
| Coral | `#FF5A5F` | Small highlights, "on now" badge |
| Teal | `#0FA3B1` | River palette, map |
| Cream | `#FFF8EC` | Page and card background |
| Ink | `#22182E` | Text and outlines |

Visitors can switch palettes (Classic, Sindoor, Shiuli, River) from the header; see `lib/theme.ts`.

The Puja cartoon cast keeps its own per-character colours inside the cards.

## Typography

- **Baloo Da 2** (ExtraBold 800, static, subset): headings and card titles. Latin and Bangla. OFL. Body: system font, with **Hind Siliguri** (400/700) for Bangla. Files in `public/fonts/`, loaded via `@font-face` in `app/site.css`.
- **Hind Siliguri** (400 / 700): body text. Latin and Bangla. OFL.
- Both are bundled as subset WOFF files in `public/fonts/` (licences alongside), so Bangla renders the
  same everywhere, including inside exported PNG cards.
