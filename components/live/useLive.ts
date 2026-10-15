"use client";

import { useCallback, useEffect, useState } from "react";
import { bucketFor, kolkataDay, type LiveBoard, type SignalKind, type TimingKind, type Timings } from "@/lib/live-shared";

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
  timings: Timings;
  /** false until the first fetch; stays false when the server has no database configured. */
  enabled: boolean;
  loaded: boolean;
  send: (pandalId: string, kind: SignalKind, value?: number) => Promise<SendOutcome>;
  sendTiming: (pandalId: string, kind: TimingKind, minutes: number) => Promise<SendOutcome>;
  refresh: () => Promise<void>;
}

/** The database keeps one report per device, pandal, kind and bucket; remembering it here avoids a wasted round trip and a false "thanks". */
function sentKey(pandalId: string, kind: SignalKind | TimingKind): string {
  const bucket = kind === "anjali" || kind === "bhog" ? kolkataDay() : bucketFor(kind);
  return `fa:live:${kind}:${pandalId}:${bucket}`;
}

function wasSent(key: string): boolean {
  try {
    return Boolean(window.sessionStorage.getItem(key));
  } catch {
    return false;
  }
}
function markSent(key: string): void {
  try {
    window.sessionStorage.setItem(key, "1");
  } catch {
    // ignore
  }
}

/** The live board (crowd, check-ins, love), refreshed every minute while the tab is visible. */
export function useLive(): Live {
  const [board, setBoard] = useState<LiveBoard>({});
  const [timings, setTimings] = useState<Timings>({});
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/live", { cache: "no-store" });
      const data = (await res.json()) as { ok: boolean; disabled?: boolean; board?: LiveBoard; timings?: Timings };
      if (!data.ok) return; // database hiccup: keep the last board
      if (data.disabled) setEnabled(false);
      else {
        setEnabled(true);
        if (data.board) setBoard(data.board);
        if (data.timings) setTimings(data.timings);
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
      if (wasSent(key)) return "already";
      try {
        const res = await fetch("/api/live", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ device: deviceId(), pandalId, kind, value }),
        });
        if (!res.ok) return "failed";
        markSent(key);
        // Optimistic bump so the tap shows immediately; the next refresh brings the true numbers.
        setBoard((b) => {
          const s = b[pandalId] ?? { crowd_n: 0, crowd_avg: null, here_n: 0, love_today: 0, wait_n: 0, wait_med: null };
          const next = { ...s };
          if (kind === "crowd") {
            next.crowd_avg = ((s.crowd_avg ?? value) * s.crowd_n + value) / (s.crowd_n + 1);
            next.crowd_n = s.crowd_n + 1;
          } else if (kind === "wait") {
            next.wait_med = ((s.wait_med ?? value) * s.wait_n + value) / (s.wait_n + 1);
            next.wait_n = s.wait_n + 1;
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

  const sendTiming = useCallback(async (pandalId: string, kind: TimingKind, minutes: number): Promise<SendOutcome> => {
    const key = sentKey(pandalId, kind);
    if (wasSent(key)) return "already";
    try {
      const res = await fetch("/api/live", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ device: deviceId(), pandalId, kind, minutes }),
      });
      if (!res.ok) return "failed";
      markSent(key);
      setTimings((t) => {
        const cur = t[pandalId]?.[kind];
        // First report shows at once; later ones wait for the server's mode.
        return cur ? t : { ...t, [pandalId]: { ...(t[pandalId] ?? {}), [kind]: { minutes, n: 1 } } };
      });
      return "ok";
    } catch {
      return "failed";
    }
  }, []);

  return { board, timings, enabled, loaded, send, sendTiming, refresh };
}
