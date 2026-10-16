// Draws the "Puja postcard": the visitor's own pandal photo with the pandal name, a small map inset,
// the day's tithi as a postmark and the brand corner. Browser-only; the photo never leaves the device.

import { BRAND, ICON_SVG } from "@/lib/brand";
import type { Lang } from "@/lib/i18n";
import { BODY, CARD_SIZES, DISPLAY, fitText, loadFonts, loadSvg, roundedRect, type CardFormat } from "@/lib/share";

export interface PostcardInput {
  lang: Lang;
  photo: HTMLImageElement;
  /** Pandal name (never translated) and "area · city". */
  name: string;
  place: string;
  /** Postmark text ("ষষ্ঠী") and the date under it ("১৬ অক্টোবর"). */
  stamp: string;
  date: string;
  caption?: string;
  /** "— Rini · পুজো #3" under the name. */
  byline?: string;
  /** Website name for the brand corner, e.g. "pujoguide.vercel.app" (may be empty). */
  host: string;
  pin?: { lat: number; lng: number } | null;
  format: CardFormat;
  /** Drawn under the map inset when real tiles were used. */
  attribution: string;
  theme?: PostcardTheme;
  /** "cover" fills the frame (crops); "contain" shows the whole photo in a frame over a blurred copy of itself. */
  fit?: "cover" | "contain";
}

export const POSTCARD_TYPE = "image/jpeg";
export const POSTCARD_EXT = "jpg";

/** Colour palette for a postcard: accent (caption, byline, host), light text/ring colour, dark overlay RGB and pin colour. */
export interface PostcardTheme {
  id: string;
  name: { bn: string; en: string };
  accent: string;
  light: string;
  /** "r,g,b" of the dark gradient bands and the postmark fill. */
  band: string;
  pin: string;
}

export const POSTCARD_THEMES: readonly PostcardTheme[] = [
  { id: "marigold", name: { bn: "গাঁদা", en: "Marigold" }, accent: BRAND.marigold, light: BRAND.cream, band: "10,6,14", pin: BRAND.sindoor },
  { id: "sindoor", name: { bn: "সিঁদুর", en: "Sindoor" }, accent: "#FF8A80", light: "#FFF1E6", band: "58,6,12", pin: BRAND.sindoor },
  { id: "shiuli", name: { bn: "শিউলি", en: "Shiuli" }, accent: "#FF8C1A", light: "#FFFFFF", band: "24,12,4", pin: "#FF7A1A" },
  { id: "nodi", name: { bn: "নদী", en: "River" }, accent: "#8AE6EC", light: "#EAF7F7", band: "4,28,40", pin: BRAND.teal },
  { id: "night", name: { bn: "রাত", en: "Night" }, accent: "#C3C4FF", light: "#F2F2FF", band: "10,12,58", pin: BRAND.indigo },
  { id: "mono", name: { bn: "সাদা-কালো", en: "Mono" }, accent: "#FFFFFF", light: "#FFFFFF", band: "0,0,0", pin: "#111111" },
];

export const themeById = (id: unknown): PostcardTheme => POSTCARD_THEMES.find((t) => t.id === id) ?? POSTCARD_THEMES[0];

const INK = BRAND.ink;
const TILE = "https://tile.openstreetmap.org";
const ZOOM = 15; // ~1 km across the inset: enough streets and water to recognise the neighbourhood

interface Layout {
  safeTop: number; // stories: keep clear of the app's top bar / reply box
  safeBottom: number;
  inset: number; // map inset side
  name: number; // pandal name font size
  caption: number;
  stamp: number; // postmark radius
  /** Height kept for the text block (and inset) at the bottom when the whole photo is framed above it. */
  textZone: number;
}

const LAYOUT: Record<CardFormat, Layout> = {
  portrait: { safeTop: 0, safeBottom: 0, inset: 250, name: 66, caption: 36, stamp: 84, textZone: 500 },
  square: { safeTop: 0, safeBottom: 0, inset: 210, name: 56, caption: 32, stamp: 74, textZone: 450 },
  story: { safeTop: 150, safeBottom: 170, inset: 280, name: 74, caption: 40, stamp: 92, textZone: 520 },
};

const display = (s: number) => `800 ${s}px ${DISPLAY}`;
const body = (w: number) => (s: number) => `${w} ${s}px ${BODY}`;

/** Object-fit: cover. */
function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;
  const s = Math.max(w / iw, h / ih);
  const dw = iw * s;
  const dh = ih * s;
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
}

/**
 * A soft, blurred copy of the photo filling the frame: drawn tiny, then scaled back up with smoothing.
 * Works everywhere (no canvas `filter`, which older iOS lacks).
 */
function drawBlurredCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  const small = document.createElement("canvas");
  small.width = Math.max(8, Math.round(w / 16));
  small.height = Math.max(8, Math.round(h / 16));
  const sctx = small.getContext("2d");
  if (!sctx) return drawCover(ctx, img, w, h);
  sctx.imageSmoothingEnabled = true;
  drawCover(sctx, img, small.width, small.height);
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(small, 0, 0, w, h);
  ctx.restore();
}

/** The whole photo, as large as fits inside the box, centred, with rounded corners and a light frame. */
function drawFramed(ctx: CanvasRenderingContext2D, img: HTMLImageElement, box: { x: number; y: number; w: number; h: number }, border: string) {
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;
  const s = Math.min(box.w / iw, box.h / ih);
  const dw = Math.round(iw * s);
  const dh = Math.round(ih * s);
  const dx = Math.round(box.x + (box.w - dw) / 2);
  const dy = Math.round(box.y + (box.h - dh) / 2);
  ctx.save();
  roundedRect(ctx, dx, dy, dw, dh, 24);
  ctx.clip();
  ctx.drawImage(img, dx, dy, dw, dh);
  ctx.restore();
  roundedRect(ctx, dx, dy, dw, dh, 24);
  ctx.strokeStyle = border;
  ctx.lineWidth = 6;
  ctx.stroke();
}

function loadTile(z: number, x: number, y: number): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // the tile server allows it; without this the canvas would be tainted
    const timer = setTimeout(() => reject(new Error("tile timeout")), 7000);
    img.onload = () => {
      clearTimeout(timer);
      resolve(img);
    };
    img.onerror = () => {
      clearTimeout(timer);
      reject(new Error("tile failed"));
    };
    img.src = `${TILE}/${z}/${x}/${y}.png`;
  });
}

/** Draws real map tiles centred on the pin into the (already clipped) inset; false when any tile failed. */
async function drawTiles(ctx: CanvasRenderingContext2D, pin: { lat: number; lng: number }, x: number, y: number, size: number): Promise<boolean> {
  const n = 2 ** ZOOM;
  const latR = (pin.lat * Math.PI) / 180;
  const wx = ((pin.lng + 180) / 360) * n * 256;
  const wy = ((1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2) * n * 256;
  const left = wx - size / 2;
  const top = wy - size / 2;
  const jobs: Promise<{ img: HTMLImageElement; tx: number; ty: number }>[] = [];
  for (let ty = Math.floor(top / 256); ty <= Math.floor((top + size - 1) / 256); ty++) {
    if (ty < 0 || ty >= n) continue;
    for (let tx = Math.floor(left / 256); tx <= Math.floor((left + size - 1) / 256); tx++) {
      const wrapped = ((tx % n) + n) % n;
      jobs.push(loadTile(ZOOM, wrapped, ty).then((img) => ({ img, tx, ty })));
    }
  }
  if (!jobs.length) return false;
  let tiles: { img: HTMLImageElement; tx: number; ty: number }[];
  try {
    tiles = await Promise.all(jobs);
  } catch {
    return false;
  }
  for (const t of tiles) ctx.drawImage(t.img, x + t.tx * 256 - left, y + t.ty * 256 - top);
  return true;
}

/** Stylised stand-in when tiles are unavailable (offline, blocked): cream grid with soft rings. */
function drawMapFallback(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.fillStyle = "#F3E7D3";
  ctx.fillRect(x, y, size, size);
  ctx.strokeStyle = "rgba(43,45,143,0.18)";
  ctx.lineWidth = 2;
  for (let i = 0; i <= size; i += 28) {
    ctx.beginPath();
    ctx.moveTo(x + i, y);
    ctx.lineTo(x + i, y + size);
    ctx.moveTo(x, y + i);
    ctx.lineTo(x + size, y + i);
    ctx.stroke();
  }
  ctx.strokeStyle = "rgba(181,18,27,0.28)";
  ctx.lineWidth = 3;
  for (const r of [size * 0.18, size * 0.32, size * 0.46]) {
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, r, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawPin(ctx: CanvasRenderingContext2D, cx: number, cy: number, colour: string) {
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = colour;
  ctx.beginPath();
  ctx.arc(cx, cy, 34, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx - 16, cy - 30);
  ctx.arc(cx, cy - 34, 17, Math.PI * 0.95, Math.PI * 0.05, false);
  ctx.lineTo(cx, cy);
  ctx.closePath();
  ctx.fillStyle = colour;
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(cx, cy - 34, 6, 0, Math.PI * 2);
  ctx.fill();
}

/** Renders the postcard as a JPEG blob (photos compress far better than PNG, so sharing is quick). */
export async function renderPostcard(input: PostcardInput): Promise<Blob> {
  const { w: W, h: H } = CARD_SIZES[input.format];
  const L = LAYOUT[input.format];
  const T = input.theme ?? POSTCARD_THEMES[0];
  const CREAM = T.light;
  const MARIGOLD = T.accent;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported");
  const brandName = input.lang === "bn" ? "পুজো গাইড" : BRAND.name;
  await loadFonts([input.name, input.place, input.stamp, input.date, input.caption ?? "", input.byline ?? "", input.host, brandName, input.attribution, "0123456789"].join(" "));

  // Photo (filling the frame, or a blurred copy as the backdrop), then soft dark bands so the text reads anywhere.
  const contain = input.fit === "contain";
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, W, H);
  if (contain) {
    drawBlurredCover(ctx, input.photo, W, H);
    ctx.fillStyle = `rgba(${T.band},0.45)`;
    ctx.fillRect(0, 0, W, H);
  } else {
    drawCover(ctx, input.photo, W, H);
  }
  const topBand = ctx.createLinearGradient(0, L.safeTop, 0, L.safeTop + 300);
  topBand.addColorStop(0, `rgba(${T.band},0.62)`);
  topBand.addColorStop(1, `rgba(${T.band},0)`);
  ctx.fillStyle = topBand;
  ctx.fillRect(0, 0, W, L.safeTop + 300);
  const bottomBand = ctx.createLinearGradient(0, H * 0.42, 0, H - L.safeBottom);
  bottomBand.addColorStop(0, `rgba(${T.band},0)`);
  bottomBand.addColorStop(0.55, `rgba(${T.band},0.62)`);
  bottomBand.addColorStop(1, `rgba(${T.band},0.9)`);
  ctx.fillStyle = bottomBand;
  ctx.fillRect(0, H * 0.42, W, H - H * 0.42);
  if (L.safeBottom) {
    ctx.fillStyle = `rgba(${T.band},0.9)`;
    ctx.fillRect(0, H - L.safeBottom, W, L.safeBottom);
  }
  // Whole-photo mode: the picture sits framed between the brand line and the text zone; nothing covers it.
  if (contain) {
    const top = L.safeTop + 150;
    const bottom = H - L.safeBottom - L.textZone;
    drawFramed(ctx, input.photo, { x: 56, y: top, w: W - 112, h: bottom - top }, CREAM);
  }

  // Brand corner.
  const bx = 56;
  const by = L.safeTop + 56;
  try {
    ctx.drawImage(await loadSvg(ICON_SVG), bx, by, 76, 76);
  } catch {
    // The name still carries the brand.
  }
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.fillStyle = CREAM;
  ctx.font = display(40);
  ctx.fillText(brandName, bx + 92, by + 36);
  if (input.host) {
    ctx.fillStyle = MARIGOLD;
    ctx.font = body(700)(26);
    ctx.fillText(input.host, bx + 92, by + 70, W - 400);
  }

  // Postmark: the tithi and date in a tilted double ring.
  const R = L.stamp;
  const sx = W - 56 - R;
  const sy = L.safeTop + 56 + R;
  ctx.save();
  ctx.translate(sx, sy);
  ctx.rotate(-0.22);
  ctx.fillStyle = `rgba(${T.band},0.5)`;
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = CREAM;
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.setLineDash([10, 8]);
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, R - 14, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.textAlign = "center";
  ctx.fillStyle = CREAM;
  const st = fitText(ctx, input.stamp, display, R * 2 - 56, 1, Math.round(R * 0.5), 22);
  ctx.font = display(st.size);
  ctx.fillText(st.lines[0], 0, st.size * 0.3);
  ctx.font = body(700)(Math.round(R * 0.26));
  ctx.fillText(input.date, 0, st.size * 0.3 + R * 0.4, R * 2 - 56);
  ctx.restore();

  // Map inset, bottom-right, clipped to a rounded square. No pin (a typed pandal without a location): no inset.
  const S = input.pin ? L.inset : 0;
  if (input.pin) {
    const mx = W - 56 - S;
    const my = H - L.safeBottom - 56 - S;
    ctx.save();
    roundedRect(ctx, mx, my, S, S, 28);
    ctx.clip();
    const usedTiles = await drawTiles(ctx, input.pin, mx, my, S);
    if (!usedTiles) drawMapFallback(ctx, mx, my, S);
    drawPin(ctx, mx + S / 2, my + S / 2, T.pin);
    if (usedTiles) {
      ctx.fillStyle = "rgba(255,248,236,0.85)";
      ctx.fillRect(mx, my + S - 26, S, 26);
      ctx.fillStyle = INK;
      ctx.textAlign = "right";
      ctx.font = body(400)(17);
      ctx.fillText(input.attribution, mx + S - 8, my + S - 8, S - 16);
    }
    ctx.restore();
    roundedRect(ctx, mx, my, S, S, 28);
    ctx.strokeStyle = CREAM;
    ctx.lineWidth = 6;
    ctx.stroke();
  }

  // Text block, bottom-left, laid out from the bottom up.
  const tx = 56;
  const textW = S ? W - S - 144 : W - 112;
  let yb = H - L.safeBottom - 56;
  ctx.textAlign = "left";
  if (input.byline) {
    const b = fitText(ctx, input.byline, body(700), textW, 1, 30, 22);
    ctx.font = body(700)(b.size);
    ctx.fillStyle = MARIGOLD;
    ctx.fillText(b.lines[0], tx, yb);
    yb -= Math.round(b.size * 1.5);
  }
  const pl = fitText(ctx, input.place, body(700), textW, 1, 34, 24);
  ctx.font = body(700)(pl.size);
  ctx.fillStyle = CREAM;
  ctx.fillText(pl.lines[0], tx, yb);
  yb -= Math.round(pl.size * 1.45);
  const nm = fitText(ctx, input.name, display, textW, 2, L.name, 38);
  const nmLine = Math.round(nm.size * 1.15);
  ctx.font = display(nm.size);
  ctx.fillStyle = "#fff";
  for (let i = nm.lines.length - 1; i >= 0; i--) {
    ctx.fillText(nm.lines[i], tx, yb);
    yb -= nmLine;
  }
  if (input.caption) {
    yb -= 10;
    // Same column as the name: the map inset sits to the right of this whole block.
    const cp = fitText(ctx, input.caption, body(700), textW, 3, L.caption, 26);
    const lh = Math.round(cp.size * 1.4);
    ctx.font = body(700)(cp.size);
    ctx.fillStyle = MARIGOLD;
    for (let i = cp.lines.length - 1; i >= 0; i--) {
      ctx.fillText(cp.lines[i], tx, yb);
      yb -= lh;
    }
  }

  // Postcard border.
  ctx.strokeStyle = CREAM;
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, W - 10, H - 10);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Could not create image"))), POSTCARD_TYPE, 0.9);
  });
}

/**
 * Loads a picked file into an image element (the browser applies the photo's EXIF orientation).
 * `img.src` stays a live object URL so it can also be shown as a thumbnail; call `releasePhoto` when done.
 */
export function loadPhoto(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read the photo"));
    };
    img.src = url;
  });
}

export function releasePhoto(img: HTMLImageElement | null): void {
  if (img?.src.startsWith("blob:")) URL.revokeObjectURL(img.src);
}
