"use client";

import { useCallback, useEffect, useState } from "react";
import { bucketFor, type LiveBoard, type SignalKind } from "@/lib/live-shared";

const DEVICE_KEY = "fa:device";
const REFRESH_MS = 60_000;

/** Random per-browser id for the once-per-hour rule. Not linked to the name or anything else. */
export function deviceId(): string {
  try {
    const saved = window.localStorage.getItem(DEVICE_KEY);
    if (saved && /^[A-Za-z0-9_-]{16,64}$/.test(saved)) return saved;
    const id = (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`).replace(/[^A-Za-z0-9_-]/g, "").slice(0, 32).padEnd(16, "0");
    window.localStorage.setItem(DEVICE_KEY, id);
    return id;
  } catch {
    return `${Date.now()}${Math.random()}`.replace(/\D/g, "").padEnd(16, "0").slice(0, 32);
  }
}

export type SendOutcome = "ok" | "already" | "failed";

interface Live {
  board: LiveBoard;
  /** false until the first fetch; stays false when the server has no database configured. */
  enabled: boolean;
  loaded: boolean;
  send: (pandalId: string, kind: SignalKind, value?: number) => Promise<SendOutcome>;
  refresh: () => Promise<void>;
}

/** The database keeps one report per device, pandal, kind and bucket; remembering it here avoids a wasted round trip and a false "thanks". */
function sentKey(pandalId: string, kind: SignalKind): string {
  return `fa:live:${kind}:${pandalId}:${bucketFor(kind)}`;
}

/** The live board (crowd, check-ins, love), refreshed every minute while the tab is visible. */
export function useLive(): Live {
  const [board, setBoard] = useState<LiveBoard>({});
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/live", { cache: "no-store" });
      const data = (await res.json()) as { ok: boolean; disabled?: boolean; board?: LiveBoard };
      if (!data.ok) return; // database hiccup: keep the last board
      if (data.disabled) setEnabled(false);
      else {
        setEnabled(true);
        if (data.board) setBoard(data.board);
      }
    } catch {
      // Keep the last board.
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    refresh();
    const tick = () => {
      if (document.visibilityState === "visible") refresh();
    };
    const id = window.setInterval(tick, REFRESH_MS);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [refresh]);

  const send = useCallback(
    async (pandalId: string, kind: SignalKind, value = 1): Promise<SendOutcome> => {
      const key = sentKey(pandalId, kind);
      try {
        if (window.sessionStorage.getItem(key)) return "already";
      } catch {
        // ignore
      }
      try {
        const res = await fetch("/api/live", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ device: deviceId(), pandalId, kind, value }),
        });
        if (!res.ok) return "failed";
        try {
          window.sessionStorage.setItem(key, "1");
        } catch {
          // ignore
        }
        // Optimistic bump so the tap shows immediately; the next refresh brings the true numbers.
        setBoard((b) => {
          const s = b[pandalId] ?? { crowd_n: 0, crowd_avg: null, here_n: 0, love_today: 0 };
          const next = { ...s };
          if (kind === "crowd") {
            next.crowd_avg = ((s.crowd_avg ?? value) * s.crowd_n + value) / (s.crowd_n + 1);
            next.crowd_n = s.crowd_n + 1;
          } else if (kind === "here") next.here_n = s.here_n + 1;
          else next.love_today = s.love_today + 1;
          return { ...b, [pandalId]: next };
        });
        return "ok";
      } catch {
        return "failed";
      }
    },
    [],
  );

  return { board, enabled, loaded, send, refresh };
}
