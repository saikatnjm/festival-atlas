"use client";

import { useState } from "react";
import { copyText } from "@/lib/share";

/** A small "Copy" button for one greeting line; shows "Copied ✓" for a moment. */
export default function CopyLine({ text, label, done }: { text: string; label: string; done: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      className="cx-chip"
      onClick={async () => {
        if (await copyText(text)) {
          setOk(true);
          window.setTimeout(() => setOk(false), 1500);
        }
      }}
    >
      {ok ? done : label}
    </button>
  );
}
