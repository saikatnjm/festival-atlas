"use client";

import { useEffect, useState } from "react";

function hostOf(url: string | undefined): string {
  if (!url) return "";
  try {
    return new URL(url).host;
  } catch {
    return "";
  }
}

// Inlined at build time when NEXT_PUBLIC_SITE_URL is set.
const CONFIGURED = hostOf(process.env.NEXT_PUBLIC_SITE_URL);

/**
 * The website name shown on cards. The configured site host when there is one; otherwise the host the
 * page is actually served from (known only in the browser). Never an invented domain.
 */
export function useHost(): string {
  const [host, setHost] = useState(CONFIGURED);
  useEffect(() => {
    if (!CONFIGURED) setHost(window.location.host);
  }, []);
  return host;
}
