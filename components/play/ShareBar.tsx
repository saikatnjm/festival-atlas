"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { CARD_FORMATS, cardToPngBlob, canShareImage, copyText, downloadBlob, shareImage, shareLink, type CardData, type CardFormat } from "@/lib/share";
import { track } from "@/lib/analytics";
import { useHost } from "@/lib/use-host";
import type { PlayStrings } from "./strings";

interface Props {
  s: PlayStrings;
  /** Site path to share, already including the language prefix. */
  path: string;
  title: string;
  text: string;
  card: CardData;
  /** Returns the card's character illustration as SVG markup, for the image export. */
  getArt: () => string | null;
  /** Changes whenever the drawing changes, so the pre-rendered image is refreshed. */
  artKey: number;
  /** Optional extra button that copies this text instead of the link (generator output). */
  copyLabel?: string;
  copyValue?: string;
}

export default function ShareBar({ s, path, title, text, card, getArt, artKey, copyLabel, copyValue }: Props) {
  const [origin, setOrigin] = useState<string | null>(null);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [canFiles, setCanFiles] = useState(false);
  const [message, setMessage] = useState("");
  const [format, setFormat] = useState<CardFormat>("portrait");
  const host = useHost();
  const filename = `pujo-guide-${format}.png`;
  // Pre-rendered image, so sharing can start right inside the tap (some browsers require that).
  const cache = useRef<{ key: string; blob: Blob } | null>(null);

  useEffect(() => {
    setOrigin(window.location.origin);
    setCanNativeShare(typeof navigator.share === "function");
    setCanFiles(canShareImage());
  }, []);

  const url = origin ? new URL(path, origin).toString() : null;

  const makeBlob = useCallback(async (): Promise<Blob> => {
    const art = getArt();
    const key = `${art ?? ""}|${JSON.stringify(card)}|${host}|${format}`;
    if (cache.current?.key === key) return cache.current.blob;
    const blob = await cardToPngBlob(card, art, host, format);
    cache.current = { key, blob };
    return blob;
  }, [card, getArt, host, format]);

  // Warm the cache when the card (or its expression) changes, only where file sharing can use it.
  useEffect(() => {
    if (!canFiles) return;
    const id = window.setTimeout(() => {
      makeBlob().catch(() => undefined);
    }, 250);
    return () => window.clearTimeout(id);
  }, [canFiles, makeBlob, artKey]);

  // Analytics events carry the shared path and format only, never the player's name or card text.
  const onShare = async () => {
    if (!url) return;
    track("share", { method: "native", path, format });
    if (canFiles) {
      try {
        const outcome = await shareImage({ blob: await makeBlob(), filename, title, text, url });
        if (outcome === "shared") return void setMessage(s.share.sharedImage);
        if (outcome === "cancelled") return;
      } catch {
        // Fall through to sharing the link.
      }
    }
    const outcome = await shareLink({ title, text, url });
    if (outcome === "shared") setMessage(s.share.shared);
    else if (outcome === "copied") setMessage(s.share.linkCopied);
    else if (outcome === "failed") setMessage(s.share.shareFailed);
  };

  const onCopyLink = async () => {
    if (!url) return;
    track("share", { method: "copy_link", path });
    setMessage((await copyText(url)) ? s.share.linkCopied : s.share.copyFailed);
  };

  const onCopyValue = async () => {
    if (!copyValue) return;
    setMessage((await copyText(copyValue)) ? s.share.textCopied : s.share.textCopyFailed);
  };

  const onSave = async () => {
    track("save_image", { path, format });
    setMessage(s.share.making);
    try {
      downloadBlob(await makeBlob(), filename);
      setMessage(s.share.saved);
    } catch {
      setMessage(s.share.imageFailed);
    }
  };

  return (
    <div className="cx-share">
      <div className="cx-formats" role="group" aria-label={fun.card.format[card.lang]}>
        <span aria-hidden="true">{fun.card.format[card.lang]}:</span>
        {CARD_FORMATS.map((f) => (
          <button key={f} type="button" className="cx-chip" aria-pressed={format === f} onClick={() => setFormat(f)}>
            {fun.card[f][card.lang]}
          </button>
        ))}
      </div>
      <div className="cx-share-row" role="group" aria-label={s.share.group}>
        {canNativeShare && (
          <button type="button" className="cx-btn" onClick={onShare}>
            {s.share.share}
          </button>
        )}
        {copyLabel && copyValue ? (
          <button type="button" className="cx-btn cx-btn-light" onClick={onCopyValue}>
            {copyLabel}
          </button>
        ) : null}
        <button type="button" className="cx-btn cx-btn-light" onClick={onCopyLink} disabled={!url}>
          {s.share.copyLink}
        </button>
        <button type="button" className="cx-btn cx-btn-light" onClick={onSave}>
          {s.share.saveImage}
        </button>
        {url && (
          <>
            <a
              className="cx-btn cx-btn-light"
              href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("share", { method: "whatsapp", path })}
            >
              {s.share.whatsapp}
            </a>
            <a
              className="cx-btn cx-btn-light"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("share", { method: "facebook", path })}
            >
              {s.share.facebook}
            </a>
          </>
        )}
      </div>
      <p className="cx-note" role="status">
        {message}
      </p>
    </div>
  );
}
