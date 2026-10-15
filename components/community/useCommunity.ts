"use client";

import { useCallback, useEffect, useState } from "react";
import { deviceId } from "@/components/live/useLive";
import { EMPTY_COMMUNITY, type Community } from "@/lib/community-shared";

const REFRESH_MS = 120_000;

interface Hook {
  data: Community;
  enabled: boolean;
  loaded: boolean;
  /** Records a play; resolves true when stored. `once` keys dedupe per browser session (e.g. one record per result). */
  record: (play: { game: string; result?: string | null; score?: number; nickname?: string | null }, once?: string) => Promise<boolean>;
  refresh: () => Promise<void>;
}

/** Community stats, leaderboards and the activity feed; refreshed every two minutes while visible. */
export function useCommunity(): Hook {
  const [data, setData] = useState<Community>(EMPTY_COMMUNITY);
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/community", { cache: "no-store" });
      const d = (await res.json()) as { ok: boolean; disabled?: boolean } & Partial<Community>;
      if (!d.ok) return;
      if (d.disabled) setEnabled(false);
      else {
        setEnabled(true);
        setData({ stats: d.stats ?? {}, leaderboard: d.leaderboard ?? {}, activity: d.activity ?? [] });
      }
    } catch {
      // keep the last data
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

  const record = useCallback(async (play: { game: string; result?: string | null; score?: number; nickname?: string | null }, once?: string) => {
    const key = once ? `fa:play:${once}` : null;
    try {
      if (key && window.sessionStorage.getItem(key)) return true;
    } catch {
      // ignore
    }
    try {
      const res = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ device: deviceId(), game: play.game, result: play.result ?? null, score: play.score ?? 0, nickname: play.nickname ?? null }),
      });
      if (!res.ok) return false;
      try {
        if (key) window.sessionStorage.setItem(key, "1");
      } catch {
        // ignore
      }
      return true;
    } catch {
      return false;
    }
  }, []);

  return { data, enabled, loaded, record, refresh };
}
