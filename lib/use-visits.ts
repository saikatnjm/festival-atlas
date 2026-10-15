"use client";

import { useCallback, useEffect, useState } from "react";
import { loadVisits, saveVisits, toggleVisit, type Visit } from "./visits";

/** The player's "ঘুরেছি" ticks, kept in sync across components and tabs. */
export function useVisits(): { visits: Visit[]; ready: boolean; toggle: (id: string) => void; has: (id: string) => boolean } {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setVisits(loadVisits());
    sync();
    setReady(true);
    window.addEventListener("fa:visits", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("fa:visits", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const next = toggleVisit(loadVisits(), id);
    setVisits(next); // works even when storage is blocked
    saveVisits(next);
  }, []);

  const has = useCallback((id: string) => visits.some((v) => v.id === id), [visits]);
  return { visits, ready, toggle, has };
}
