// Tiny Google Analytics 4 helper. Does nothing unless the GA script is on the page (NEXT_PUBLIC_GA_ID set).

type Gtag = (command: "event", name: string, params?: Record<string, string | number | boolean>) => void;

/** Sends a custom event (e.g. "share", "save_image"); never throws, never sends personal data. */
export function track(name: string, params: Record<string, string | number | boolean> = {}): void {
  try {
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    gtag?.("event", name, params);
  } catch {
    // Analytics must never break the page.
  }
}
