# Festival Atlas brand

**Concept.** A globe (an *atlas*, discovery, "every corner of the world") with a burst of confetti
leaving it (celebration). Only generic shapes (circle, triangle, square, dots) are used, so it works
for every festival and community; no religious or cultural symbols.

## Assets (all in `public/brand/`, favicons in `app/`)

| File | Use |
| --- | --- |
| `logo-primary.svg` / `-dark.svg` | Icon + wordmark, for light / dark backgrounds. Wordmark is outlined (no font needed). |
| `logo-icon.svg` / `-dark.svg` | Icon only (avatars, share cards). |
| `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png` | Favicon set (simplified, holds up at 16 px). |
| `lib/brand.ts` | Palette constants and the inline icon used by the header and the PNG card export. |

## Palette

| Name | Hex | Use |
| --- | --- | --- |
| Indigo | `#2B2D8F` | Globe, links, primary actions |
| Marigold | `#FFB400` | Highlights, dark-mode accent |
| Coral | `#FF5A5F` | Confetti accent, small highlights |
| Teal | `#0FA3B1` | Confetti accent, map |
| Cream | `#FFF8EC` | Page and card background |
| Ink | `#22182E` | Text and outlines |

The Puja cartoon cast keeps its own per-character colours inside the cards.

## Typography

- **Baloo Da 2** (ExtraBold 800, static, subset): headings and card titles. Latin and Bangla. OFL. Body: system font, with **Hind Siliguri** (400/700) for Bangla. Files in `public/fonts/`, loaded via `@font-face` in `app/site.css`.
- **Hind Siliguri** (400 / 700): body text. Latin and Bangla. OFL.
- Both are bundled as subset WOFF files in `public/fonts/` (licences alongside), so Bangla renders the
  same everywhere, including inside exported PNG cards.
