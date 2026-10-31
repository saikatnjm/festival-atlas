"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import type { L, Lang } from "@/lib/i18n";
import { shareLink } from "@/lib/share";

const T = {
  share: { bn: "📤 শেয়ার করো", en: "📤 Share" },
  whatsapp: { bn: "WhatsApp", en: "WhatsApp" },
  copied: { bn: "লিঙ্ক কপি হয়েছে ✓", en: "Link copied ✓" },
} satisfies Record<string, L>;

/**
 * Share this page: the phone's share sheet (falls back to copying the link) and a WhatsApp link. The URL is
 * read in the handler, so the prerendered HTML stays the same everywhere.
 */
export default function SharePage({ lang, title, text }: { lang: Lang; title: string; text: string }) {
  const [msg, setMsg] = useState("");
  const url = () => window.location.href.split("#")[0];
  return (
    <p className="share-page cta-row">
      <button
        type="button"
        className="button"
        onClick={async () => {
          const out = await shareLink({ title, text, url: url() });
          if (out === "copied") {
            setMsg(T.copied[lang]);
            window.setTimeout(() => setMsg(""), 2500);
          }
          track("share", { method: out, path: window.location.pathname });
        }}
      >
        {T.share[lang]}
      </button>
      <button
        type="button"
        className="button button-light"
        onClick={() => {
          window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url()}`)}`, "_blank", "noopener,noreferrer");
          track("share", { method: "whatsapp", path: window.location.pathname });
        }}
      >
        {T.whatsapp[lang]}
      </button>
      <span className="fineprint" role="status">
        {msg}
      </span>
    </p>
  );
}
