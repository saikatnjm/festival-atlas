// Reads the GPS position out of a JPEG's EXIF block, in the browser, so a pandal photo can pick its
// own pandal. Pure and import-free (unit-tested); returns null for anything it does not understand.

export interface ExifGps {
  lat: number;
  lng: number;
}

const TYPE_SIZE: Record<number, number> = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8 };

/** GPS latitude/longitude from a JPEG buffer, or null (no EXIF, no GPS, PNG/WebP, truncated data). */
export function readExifGps(buf: ArrayBuffer): ExifGps | null {
  try {
    const v = new DataView(buf);
    if (v.byteLength < 4 || v.getUint16(0) !== 0xffd8) return null;
    let off = 2;
    while (off + 4 <= v.byteLength) {
      if (v.getUint8(off) !== 0xff) return null;
      const marker = v.getUint8(off + 1);
      if (marker === 0xff) {
        off += 1; // padding
        continue;
      }
      if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
        off += 2; // standalone markers carry no length
        continue;
      }
      if (marker === 0xda || marker === 0xd9) return null; // image data starts: EXIF would have come first
      const len = v.getUint16(off + 2);
      if (len < 2) return null;
      // APP1 "Exif\0\0" then a TIFF header.
      if (marker === 0xe1 && off + 10 <= v.byteLength && v.getUint32(off + 4) === 0x45786966) {
        return parseTiff(v, off + 10, Math.min(v.byteLength, off + 2 + len));
      }
      off += 2 + len;
    }
    return null;
  } catch {
    return null;
  }
}

function parseTiff(v: DataView, start: number, end: number): ExifGps | null {
  if (start + 8 > end) return null;
  const order = v.getUint16(start);
  const le = order === 0x4949; // "II" little-endian, "MM" big-endian
  if (!le && order !== 0x4d4d) return null;
  const u16 = (o: number) => v.getUint16(o, le);
  const u32 = (o: number) => v.getUint32(o, le);
  if (u16(start + 2) !== 42) return null;

  /** Walks one IFD; `visit` gets each entry's tag, type, count and the offset where its value lives. */
  const walk = (ifd: number, visit: (tag: number, type: number, count: number, at: number) => void) => {
    if (ifd < start || ifd + 2 > end) return;
    const n = u16(ifd);
    for (let i = 0; i < n; i++) {
      const e = ifd + 2 + i * 12;
      if (e + 12 > end) return;
      const tag = u16(e);
      const type = u16(e + 2);
      const count = u32(e + 4);
      const size = (TYPE_SIZE[type] ?? 0) * count;
      const at = size > 4 ? start + u32(e + 8) : e + 8;
      if (size > 0 && at >= start && at + size <= end) visit(tag, type, count, at);
    }
  };

  let gpsIfd = 0;
  walk(start + u32(start + 4), (tag, type, _count, at) => {
    if (tag === 0x8825 && (type === 4 || type === 3)) gpsIfd = start + (type === 4 ? u32(at) : u16(at));
  });
  if (!gpsIfd) return null;

  // Collected in an object: TypeScript cannot see assignments made inside the callback.
  const g: { latRef?: string; lngRef?: string; lat?: number; lng?: number } = {};
  const dms = (at: number) => {
    let deg = 0;
    for (let i = 0; i < 3; i++) {
      const den = u32(at + i * 8 + 4);
      const val = den ? u32(at + i * 8) / den : 0;
      deg += val / [1, 60, 3600][i];
    }
    return deg;
  };
  walk(gpsIfd, (tag, type, count, at) => {
    if (tag === 0x0001 && type === 2) g.latRef = String.fromCharCode(v.getUint8(at));
    if (tag === 0x0003 && type === 2) g.lngRef = String.fromCharCode(v.getUint8(at));
    if (tag === 0x0002 && type === 5 && count === 3) g.lat = dms(at);
    if (tag === 0x0004 && type === 5 && count === 3) g.lng = dms(at);
  });
  if (g.lat === undefined || g.lng === undefined) return null;
  const la = g.latRef === "S" ? -g.lat : g.lat;
  const ln = g.lngRef === "W" ? -g.lng : g.lng;
  if (!Number.isFinite(la) || !Number.isFinite(ln) || Math.abs(la) > 90 || Math.abs(ln) > 180) return null;
  if (la === 0 && ln === 0) return null; // cameras write 0/0 when the fix was missing
  return { lat: la, lng: ln };
}
