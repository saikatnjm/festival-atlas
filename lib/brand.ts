// Single source for the brand mark used in the page header and the PNG card export.
// public/brand/logo-icon.svg is the same artwork (generated from it). See docs/BRAND.md.

export const BRAND = {
  name: "Festival Atlas",
  indigo: "#2B2D8F",
  marigold: "#FFB400",
  coral: "#FF5A5F",
  teal: "#0FA3B1",
  cream: "#FFF8EC",
  ink: "#22182E",
} as const;

/** Icon-only logo: a globe (discovery) with a burst of confetti (celebration). 128x128. */
export const ICON_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 128 128\" width=\"128\" height=\"128\" role=\"img\" aria-label=\"Festival Atlas\"><circle cx=\"56\" cy=\"74\" r=\"44\" fill=\"#2B2D8F\"/><g fill=\"none\" stroke=\"#FFF8EC\" stroke-width=\"5\" stroke-linecap=\"round\"><ellipse cx=\"56\" cy=\"74\" rx=\"19\" ry=\"44\"/><path d=\"M15 74H97\"/><path d=\"M20 52Q56 62 92 52\"/><path d=\"M20 96Q56 86 92 96\"/></g><circle cx=\"102\" cy=\"26\" r=\"9\" fill=\"#FFB400\"/><path d=\"M112 44l12 20-24 1z\" fill=\"#FF5A5F\" stroke=\"#FF5A5F\" stroke-width=\"3\" stroke-linejoin=\"round\"/><rect x=\"76\" y=\"6\" width=\"15\" height=\"15\" rx=\"3.5\" transform=\"rotate(24 83.5 13.5)\" fill=\"#0FA3B1\"/><circle cx=\"120\" cy=\"22\" r=\"4\" fill=\"#FF5A5F\"/><circle cx=\"68\" cy=\"14\" r=\"3.5\" fill=\"#FFB400\"/></svg>";
