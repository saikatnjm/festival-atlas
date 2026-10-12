// Single source for the brand mark used in the page header, the hero, share images and the PNG card
// export. public/brand/logo-icon.svg and app/icon.svg carry the same artwork. See docs/BRAND.md.

export const BRAND = {
  /** Latin brand name (share images, filenames, manifest). The UI uses t.site.name per language. */
  name: "Pujo Guide",
  indigo: "#2B2D8F",
  marigold: "#FFB400",
  sindoor: "#B5121B",
  coral: "#FF5A5F",
  teal: "#0FA3B1",
  cream: "#FFF8EC",
  ink: "#22182E",
} as const;

/**
 * Icon-only logo: a dhak seen head-on, with its two sticks crossed behind it. Comic outlines so it
 * matches the cast, marigold lacing, sindoor-red barrel. Reads as "drum" even at favicon size. 128x128.
 */
export const ICON_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" role="img" aria-label="Pujo Guide">' +
  '<g stroke="#22182E" stroke-width="10" stroke-linecap="round" fill="none"><path d="M12 34L78 96"/><path d="M116 34L50 96"/></g>' +
  '<g fill="#FFB400" stroke="#22182E" stroke-width="4"><circle cx="12" cy="33" r="6"/><circle cx="116" cy="33" r="6"/></g>' +
  '<circle cx="72" cy="80" r="42" fill="#B5121B" stroke="#22182E" stroke-width="6"/>' +
  '<circle cx="58" cy="72" r="42" fill="#FFF3EA" stroke="#22182E" stroke-width="6"/>' +
  '<circle cx="58" cy="72" r="31" fill="none" stroke="#FFB400" stroke-width="5"/>' +
  '<circle cx="58" cy="72" r="6" fill="#B5121B"/>' +
  "</svg>";
