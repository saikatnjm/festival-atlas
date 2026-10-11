import { ImageResponse } from "next/og";
import { characterArt } from "@/components/play/art/Character";
import { cast } from "@/data/play/cast";
import type { CharId, Mood } from "@/data/play/types";
import { BRAND, ICON_SVG } from "@/lib/brand";

interface Opts {
  kicker: string;
  title: string;
  subtitle?: string;
  /** Characters to draw on the right (1 to 3). */
  art?: { id: CharId; mood: Mood }[];
}

const ICON_URI = `data:image/svg+xml;base64,${Buffer.from(ICON_SVG).toString("base64")}`;

/** Keeps Latin text only. The default share-image font has no Bangla glyphs, so Bangla would show as boxes. */
export const latin = (s: string): string =>
  s
    .replace(/\s*\([^)]*[^\x00-\x7F‘’“”–—][^)]*\)/g, "")
    .replace(/[^\x00-\x7F‘’“”–— -ÿ]/g, "")
    .trim();

/**
 * 1200x630 share-preview image. Text is plain Latin: the default OG font has no Bangla glyphs, and
 * the characters carry the personality. Colours follow the first character's palette.
 */
export function ogImage({ kicker, title, subtitle, art }: Opts) {
  const lead = art?.[0] ? cast[art[0].id] : null;
  const count = art?.length ?? 0;
  const w = count === 1 ? 360 : count === 2 ? 230 : 160;
  const h = Math.round((w * 240) / 200);
  const bg = lead ? `linear-gradient(135deg, ${lead.c3}, ${BRAND.ink})` : `linear-gradient(135deg, ${BRAND.indigo}, ${BRAND.ink})`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 64,
          background: bg,
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", flex: 1, paddingRight: 32 }}>
          <div style={{ display: "flex", fontSize: 30, color: BRAND.marigold, letterSpacing: 2 }}>{kicker}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: title.length > 40 ? 48 : title.length > 26 ? 56 : 72, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
            {subtitle ? <div style={{ display: "flex", fontSize: 30, marginTop: 24, opacity: 0.92 }}>{subtitle}</div> : null}
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 32, fontWeight: 700 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ICON_URI} width={56} height={56} alt="" style={{ marginRight: 16 }} />
            Festival Atlas
          </div>
        </div>
        {art && count > 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: lead?.c2 ?? BRAND.cream,
              border: `6px solid ${BRAND.ink}`,
              borderRadius: 36,
              padding: 20,
            }}
          >
            {art.map((a) => (
              <div key={a.id} style={{ display: "flex" }}>
                {characterArt(a.id, a.mood, w, h)}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
