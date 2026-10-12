import { ImageResponse } from "next/og";
import { ICON_SVG } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the dhak mark on a cream tile (iOS wants an opaque PNG). */
export default function AppleIcon() {
  const src = `data:image/svg+xml;base64,${Buffer.from(ICON_SVG).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, display: "flex", alignItems: "center", justifyContent: "center", background: "#FFF3EA" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={148} height={148} alt="" />
      </div>
    ),
    size,
  );
}
