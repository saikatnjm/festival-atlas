"use client";

import { useCallback, useEffect, useState } from "react";
import { loadProfile, saveProfile, toProfile, type Profile } from "./profile";

/** The optional player profile from this browser, kept in sync across components and tabs. */
export function useProfile(): { profile: Profile; ready: boolean; update: (p: Profile) => void } {
  const [profile, setProfile] = useState<Profile>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setProfile(loadProfile());
    sync();
    setReady(true);
    window.addEventListener("fa:profile", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("fa:profile", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback((p: Profile) => {
    const clean = toProfile(p);
    setProfile(clean); // works even when storage is blocked
    saveProfile(clean);
  }, []);

  return { profile, ready, update };
}
