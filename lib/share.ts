// Browser-only sharing helpers. No server, no third-party scripts.

import { cast } from "@/data/play/cast";
import type { CharId, Mood, Pattern } from "@/data/play/types";
import { BRAND, ICON_SVG } from "@/lib/brand";
import { num, type Lang } from "@/lib/i18n";

export type ShareOutcome = "shared" | "copied" | "cancelled" | "failed";

export interface CardData {
  lang: Lang;
  char: CharId;
  mood: Mood;
  kicker: string;
  title: string;
  /** Render the title as running text (generator output) instead of a big heading. */
  titleIsText?: boolean;
  punchline?: string;
  blurb?: string;
  stat?: { label: string; value: number };
  /** Personal ribbon, e.g. "পিন্টুর ভোগ খাওয়ার সরকারি লাইসেন্স". Shown big; omitted on generic pages. */
  owner?: string;
  /** A personal one-liner addressed to the player. */
  verdict?: string;
  /** Short trait chips earned from choices and optional profile details. */
  traits?: string[];
  /** Rows such as squad roles or plan stops. */
  list?: string[];
}

export type CardFormat = "portrait" | "square" | "story";
export const CARD_FORMATS: readonly CardFormat[] = ["portrait", "square", "story"];
export const CARD_SIZES: Record<CardFormat, { w: number; h: number }> = {
  portrait: { w: 1080, h: 1350 },
  square: { w: 1080, h: 1080 },
  story: { w: 1080, h: 1920 },
};

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API unavailable (e.g. non-secure origin): fall back below.
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/** Uses the device share sheet when available, otherwise copies the link. */
export async function shareLink(data: { title: string; text: string; url: string }): Promise<ShareOutcome> {
  if (typeof navigator.share === "function") {
    try {
      await navigator.share(data);
      return "shared";
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return "cancelled";
    }
  }
  return (await copyText(data.url)) ? "copied" : "failed";
}

/** True when this browser can share an image file (mostly phones). */
export function canShareImage(): boolean {
  try {
    if (typeof navigator.share !== "function" || typeof navigator.canShare !== "function") return false;
    return navigator.canShare({ files: [new File([new Blob(["x"])], "card.png", { type: "image/png" })] });
  } catch {
    return false;
  }
}

/**
 * Shares the card as an image file. The link goes into the text because several apps drop the `url`
 * field when a file is attached. Returns "failed" when the file could not be shared, so the caller
 * can fall back to a link.
 */
export async function shareImage(opts: { blob: Blob; filename: string; title: string; text: string; url: string; type?: string }): Promise<ShareOutcome> {
  try {
    const file = new File([opts.blob], opts.filename, { type: opts.type ?? "image/png" });
    if (!navigator.canShare?.({ files: [file] })) return "failed";
    await navigator.share({ files: [file], title: opts.title, text: `${opts.text}\n${opts.url}` });
    return "shared";
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") return "cancelled";
    return "failed";
  }
}

const INK = "#22182E";
const CREAM = "#FFF8EC";
const MARIGOLD = "#FFB400";
// Fonts are bundled in /public/fonts (see app/site.css); the system stack is only a last resort.
export const DISPLAY = '"Baloo Da 2", "Hind Siliguri", system-ui, sans-serif';
export const BODY = '"Hind Siliguri", system-ui, sans-serif';

export function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const test = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(test).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Wraps text, shrinking the font until it fits `maxLines` (and truncating as a last resort). */
export function fitText(
  ctx: CanvasRenderingContext2D,
  text: string,
  fontOf: (size: number) => string,
  maxWidth: number,
  maxLines: number,
  size: number,
  minSize: number,
) {
  let s = size;
  for (;;) {
    ctx.font = fontOf(s);
    const lines = wrapLines(ctx, text, maxWidth);
    if (lines.length <= maxLines) return { lines, size: s };
    if (s <= minSize) {
      const cut = lines.slice(0, maxLines);
      cut[maxLines - 1] = `${cut[maxLines - 1]}…`;
      return { lines: cut, size: s };
    }
    s -= 2;
  }
}

function drawPattern(ctx: CanvasRenderingContext2D, kind: Pattern, w: number, h: number) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, w, h);
  ctx.clip();
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  if (kind === "dots") {
    for (let row = 0, y = 16; y < h; row++, y += 44) {
      for (let x = 16 + (row % 2 ? 22 : 0); x < w; x += 44) {
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (kind === "stripes") {
    ctx.lineWidth = 24;
    for (let i = -h; i < w; i += 64) {
      ctx.beginPath();
      ctx.moveTo(i, h);
      ctx.lineTo(i + h, 0);
      ctx.stroke();
    }
  } else if (kind === "rays") {
    const cx = w / 2;
    const cy = h * 0.6;
    for (let a = 0; a < 360; a += 20) {
      const r1 = (a * Math.PI) / 180;
      const r2 = ((a + 10) * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(r1) * 1400, cy + Math.sin(r1) * 1400);
      ctx.lineTo(cx + Math.cos(r2) * 1400, cy + Math.sin(r2) * 1400);
      ctx.closePath();
      ctx.fill();
    }
  } else {
    for (let r = 0; r * 54 < h; r++) for (let c = 0; c * 54 < w; c++) if ((r + c) % 2 === 0) ctx.fillRect(c * 54, r * 54, 54, 54);
  }
  ctx.restore();
}

export function loadSvg(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load the illustration"));
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });
}

/** Makes sure the bundled fonts are loaded for exactly the characters we are about to draw. */
export async function loadFonts(sample: string): Promise<void> {
  try {
    await Promise.all([
      document.fonts.load('800 40px "Baloo Da 2"', sample),
      document.fonts.load('400 30px "Hind Siliguri"', sample),
      document.fonts.load('700 30px "Hind Siliguri"', sample),
    ]);
    await document.fonts.ready;
  } catch {
    // Fonts API unavailable or a font failed: the system fallback is fine.
  }
}

export const CARD_W = CARD_SIZES.portrait.w;
export const CARD_H = CARD_SIZES.portrait.h;

const LAYOUT: Record<CardFormat, { top: number; panel: number; art: number; foot: number; footPad: number; title: number; lines: number }> = {
  portrait: { top: 0, panel: 500, art: 390, foot: 120, footPad: 0, title: 72, lines: 4 },
  square: { top: 0, panel: 360, art: 280, foot: 104, footPad: 0, title: 60, lines: 3 },
  // Stories: keep text clear of the app's top bar and reply box.
  story: { top: 150, panel: 880, art: 560, foot: 120, footPad: 150, title: 80, lines: 6 },
};

/**
 * Draws the card to a PNG: portrait 1080x1350 (chat apps), square 1080x1080 (feeds) or
 * story 1080x1920. `svg` is the character illustration taken from the page (optional).
 * `host` is the website name for the footer (may be empty). Optional blocks (verdict, traits,
 * list, blurb) are drawn only when they fit, so nothing overlaps on the smaller formats.
 */
export async function cardToPngBlob(card: CardData, svg: string | null, host: string, format: CardFormat = "portrait"): Promise<Blob> {
  const { w: W, h: H } = CARD_SIZES[format];
  const L = LAYOUT[format];
  const PH = L.panel; // height of the coloured art panel
  const FOOT = L.foot; // height of the brand footer band
  const BOTTOM = H - FOOT - L.footPad; // top of the footer band
  const c = cast[card.char];
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported");

  const sample = [
    card.kicker,
    card.title,
    card.owner ?? "",
    card.punchline ?? "",
    card.verdict ?? "",
    card.blurb ?? "",
    card.stat?.label ?? "",
    ...(card.traits ?? []),
    ...(card.list ?? []),
    host,
    `${BRAND.name} পুজো গাইড 0123456789%`,
  ].join(" ");
  await loadFonts(sample);

  const display = (s: number) => `800 ${s}px ${DISPLAY}`;
  const body = (w: number) => (s: number) => `${w} ${s}px ${BODY}`;

  ctx.fillStyle = c.c2;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = c.c1;
  ctx.fillRect(0, 0, W, PH);
  drawPattern(ctx, c.pattern, W, PH);
  if (svg) {
    const img = await loadSvg(svg);
    const aw = L.art;
    const ah = Math.round(aw * 1.2);
    ctx.drawImage(img, (W - aw) / 2, PH - ah + 6, aw, ah);
  }
  ctx.fillStyle = INK;
  ctx.fillRect(0, PH, W, 10);

  // Kicker sticker.
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.font = display(36);
  const kw = Math.min(W - 120, ctx.measureText(card.kicker).width + 56);
  roundedRect(ctx, 48, L.top + 48, kw, 66, 33);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = INK;
  ctx.stroke();
  ctx.fillStyle = INK;
  ctx.fillText(card.kicker, 76, L.top + 96, kw - 56);

  // Body text, centred.
  ctx.textAlign = "center";
  const maxW = W - 160;
  // On a square card, personal traits/lists are worth more than the playful stat bar.
  const stat = format === "square" && (card.traits?.length || card.list?.length) ? undefined : card.stat;
  const statY = stat ? BOTTOM - 150 : BOTTOM - 20; // everything above must stay above this
  let y = PH + 10 + 28;

  // Personal ribbon across the panel edge: the player's name, big.
  if (card.owner) {
    const r = fitText(ctx, card.owner, display, maxW - 70, 1, format === "story" ? 64 : 56, 30);
    ctx.font = display(r.size);
    const rw = Math.min(W - 80, ctx.measureText(r.lines[0]).width + 80);
    const rh = Math.round(r.size * 1.25) + 30;
    const ry = PH + 5 - rh / 2;
    ctx.save();
    ctx.translate(W / 2, ry + rh / 2);
    ctx.rotate(-0.025);
    roundedRect(ctx, -rw / 2, -rh / 2, rw, rh, 18);
    ctx.fillStyle = MARIGOLD;
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = INK;
    ctx.stroke();
    ctx.fillStyle = INK;
    ctx.fillText(r.lines[0], 0, r.size * 0.36);
    ctx.restore();
    y = ry + rh + 18;
  }

  const title = card.titleIsText
    ? fitText(ctx, card.title, display, maxW, L.lines + 1, 58, 32)
    : fitText(ctx, card.title, display, maxW, 2, L.title, 40);
  const titleLine = Math.round(title.size * 1.2);
  ctx.fillStyle = INK;
  ctx.font = display(title.size);
  for (const line of title.lines) {
    y += titleLine;
    ctx.fillText(line, W / 2, y - titleLine * 0.22);
  }
  y += 42; // leaves room for the speech-bubble tail

  if (card.punchline) {
    const p = fitText(ctx, card.punchline, body(700), maxW - 90, 2, 40, 28);
    const lh = Math.round(p.size * 1.35);
    ctx.font = body(700)(p.size);
    const textW = Math.max(...p.lines.map((l) => ctx.measureText(l).width));
    const bw = Math.min(maxW, textW + 90);
    const bh = p.lines.length * lh + 34;
    const bx = (W - bw) / 2;
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = INK;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 20, y + 2);
    ctx.lineTo(W / 2, y - 22);
    ctx.lineTo(W / 2 + 20, y + 2);
    ctx.fill();
    ctx.stroke();
    roundedRect(ctx, bx, y, bw, bh, 28);
    ctx.fill();
    ctx.stroke();
    ctx.fillRect(W / 2 - 16, y - 3, 32, 9); // hide the border where the tail joins
    ctx.fillStyle = INK;
    p.lines.forEach((line, i) => ctx.fillText(line, W / 2, y + 16 + (i + 1) * lh - lh * 0.28));
    y += bh + 22;
  }

  // Rows (squad roles, plan stops) in a white box, as many as fit.
  if (card.list?.length) {
    const size = format === "square" ? 30 : 34;
    const rowH = Math.round(size * 1.55);
    const fitRows = Math.max(0, Math.floor((statY - 16 - y - 28) / rowH));
    const rows = card.list.slice(0, fitRows);
    if (rows.length) {
      const boxH = rows.length * rowH + 28;
      roundedRect(ctx, 64, y, W - 128, boxH, 24);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = INK;
      ctx.stroke();
      ctx.textAlign = "left";
      ctx.fillStyle = INK;
      rows.forEach((row, i) => {
        const f = fitText(ctx, row, body(700), W - 200, 1, size, 22);
        ctx.font = body(700)(f.size);
        ctx.fillText(f.lines[0], 100, y + 14 + (i + 1) * rowH - rowH * 0.32);
      });
      ctx.textAlign = "center";
      y += boxH + 22;
    }
  }

  // Trait chips, wrapped and centred; only whole rows that fit are drawn.
  if (card.traits?.length) {
    const size = format === "square" ? 26 : 30;
    const chipH = Math.round(size * 1.75);
    const gap = 12;
    ctx.font = body(700)(size);
    const chips = card.traits.map((t) => {
      const f = fitText(ctx, t, body(700), maxW - 40, 1, size, 20);
      ctx.font = body(700)(f.size);
      return { text: f.lines[0], size: f.size, w: Math.min(maxW, ctx.measureText(f.lines[0]).width + 40) };
    });
    const rows: { text: string; size: number; w: number }[][] = [];
    for (const chip of chips) {
      const row = rows[rows.length - 1];
      const used = row ? row.reduce((s, x) => s + x.w + gap, 0) : Infinity;
      if (row && used + chip.w <= maxW) row.push(chip);
      else rows.push([chip]);
    }
    const fitRows = Math.max(0, Math.floor((statY - 12 - y + gap) / (chipH + gap)));
    rows.slice(0, fitRows).forEach((row) => {
      const total = row.reduce((s, x) => s + x.w, 0) + gap * (row.length - 1);
      let x = (W - total) / 2;
      for (const chip of row) {
        roundedRect(ctx, x, y, chip.w, chipH, chipH / 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = INK;
        ctx.stroke();
        ctx.fillStyle = INK;
        ctx.font = body(700)(chip.size);
        ctx.fillText(chip.text, x + chip.w / 2, y + chipH / 2 + chip.size * 0.36);
        x += chip.w + gap;
      }
      y += chipH + gap;
    });
    if (fitRows > 0) y += 10;
  }

  // Personal verdict, then the longer blurb, each only if there is room.
  if (card.verdict) {
    const v = fitText(ctx, card.verdict, body(700), maxW, 2, 36, 26);
    const lh = Math.round(v.size * 1.4);
    if (y + v.lines.length * lh <= statY - 12) {
      ctx.fillStyle = INK;
      ctx.font = body(700)(v.size);
      v.lines.forEach((line, i) => ctx.fillText(line, W / 2, y + (i + 1) * lh - lh * 0.25));
      y += v.lines.length * lh + 14;
    }
  }

  if (card.blurb) {
    const avail = statY - 20 - y;
    let b: { lines: string[]; size: number } | null = null;
    for (let size = 36; size >= 26; size -= 2) {
      const attempt = fitText(ctx, card.blurb, body(400), maxW, L.lines, size, size);
      if (attempt.lines.length * Math.round(size * 1.4) <= avail) {
        b = attempt;
        break;
      }
    }
    if (!b && avail >= Math.round(26 * 1.4)) {
      const rows = Math.max(1, Math.floor(avail / Math.round(26 * 1.4)));
      b = fitText(ctx, card.blurb, body(400), maxW, rows, 26, 26);
    }
    if (b) {
      const lh = Math.round(b.size * 1.4);
      ctx.fillStyle = "#4a3a32";
      ctx.font = body(400)(b.size);
      b.lines.forEach((line, i) => ctx.fillText(line, W / 2, y + (i + 1) * lh - lh * 0.25));
    }
  }

  if (stat) {
    const sx = 80;
    const sw = W - 160;
    ctx.textAlign = "left";
    ctx.fillStyle = INK;
    ctx.font = body(700)(32);
    ctx.fillText(stat.label, sx, statY + 30, sw - 140);
    ctx.textAlign = "right";
    ctx.fillText(`${num(stat.value, card.lang)}%`, sx + sw, statY + 30);
    roundedRect(ctx, sx, statY + 48, sw, 34, 17);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = INK;
    ctx.stroke();
    const fillW = Math.max(0, Math.min(1, stat.value / 100)) * (sw - 8);
    if (fillW > 0) {
      roundedRect(ctx, sx + 4, statY + 52, Math.max(fillW, 20), 26, 13);
      ctx.fillStyle = c.c1;
      ctx.fill();
    }
  }

  // Brand footer band: logo, name and website, part of the card design.
  ctx.fillStyle = INK;
  ctx.fillRect(0, BOTTOM, W, H - BOTTOM);
  try {
    const icon = await loadSvg(ICON_SVG);
    ctx.drawImage(icon, 56, BOTTOM + (FOOT - 76) / 2, 76, 76);
  } catch {
    // The footer still carries the name if the icon cannot be drawn.
  }
  ctx.textAlign = "left";
  ctx.fillStyle = CREAM;
  ctx.font = display(48);
  ctx.fillText(card.lang === "bn" ? "পুজো গাইড" : BRAND.name, 152, BOTTOM + FOOT / 2 + 16);
  if (host) {
    ctx.textAlign = "right";
    ctx.fillStyle = MARIGOLD;
    ctx.font = body(700)(30);
    ctx.fillText(host, W - 56, BOTTOM + FOOT / 2 + 14, 330);
  }

  ctx.lineWidth = 14;
  ctx.strokeStyle = INK;
  ctx.strokeRect(7, 7, W - 14, H - 14);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Could not create image"))), "image/png");
  });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
