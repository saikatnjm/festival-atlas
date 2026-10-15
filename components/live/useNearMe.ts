"use client";

import { useCallback, useState } from "react";
import type { LatLng } from "@/lib/geo";

export type NearState = "idle" | "asking" | "on" | "denied" | "unsupported" | "far";

/**
 * One-tap "near me": asks the browser for the phone's position (the browser shows its own permission
 * prompt), keeps it in memory only, and never sends it anywhere.
 */
export function useNearMe(): { state: NearState; pos: LatLng | null; ask: () => void; off: () => void } {
  const [state, setState] = useState<NearState>("idle");
  const [pos, setPos] = useState<LatLng | null>(null);

  const ask = useCallback(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) return setState("unsupported");
    setState("asking");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setPos({ lat: p.coords.latitude, lng: p.coords.longitude });
        setState("on");
      },
      () => setState("denied"),
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 60_000 },
    );
  }, []);

  const off = useCallback(() => {
    setPos(null);
    setState("idle");
  }, []);

  return { state, pos, ask, off };
}
