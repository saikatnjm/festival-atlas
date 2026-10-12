"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

const T = {
  title: { bn: "হোম স্ক্রিনে রেখে দাও", en: "Keep it on your home screen" },
  body: { bn: "পুজোর ক’দিন এক ট্যাপেই রুট, খবর আর খেলা।", en: "One tap to routes, news and games during Puja week." },
  install: { bn: "যোগ করো", en: "Add" },
  ios: { bn: "Safari-তে শেয়ার বোতাম → ‘Add to Home Screen’।", en: "In Safari: Share button → ‘Add to Home Screen’." },
  later: { bn: "পরে", en: "Not now" },
};

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
}

const VISITS = "fa:visits";
const DISMISS = "fa:install-off";

/**
 * Small dismissible banner on the second visit: uses the browser's install prompt where it exists
 * (Chrome/Android), otherwise shows the iOS tip. Never shown inside an installed app.
 */
export default function InstallHint({ lang }: { lang: Lang }) {
  const [show, setShow] = useState(false);
  const [evt, setEvt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    try {
      if (window.matchMedia("(display-mode: standalone)").matches || localStorage.getItem(DISMISS)) return;
      const n = Number(localStorage.getItem(VISITS) ?? "0") + 1;
      localStorage.setItem(VISITS, String(n));
      const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !("MSStream" in window);
      setIsIos(ios);
      const onPrompt = (e: Event) => {
        e.preventDefault();
        setEvt(e as BeforeInstallPromptEvent);
        if (n >= 2) setShow(true);
      };
      window.addEventListener("beforeinstallprompt", onPrompt);
      if (ios && n >= 2) setShow(true);
      return () => window.removeEventListener("beforeinstallprompt", onPrompt);
    } catch {
      // Storage blocked: no banner.
    }
  }, []);

  if (!show) return null;
  const dismiss = () => {
    setShow(false);
    try {
      localStorage.setItem(DISMISS, "1");
    } catch {
      // ignore
    }
  };
  return (
    <div className="install" role="region" aria-label={T.title[lang]}>
      <p>
        <b>{T.title[lang]}</b> {T.body[lang]}
        {isIos && !evt ? <span className="fineprint"> {T.ios[lang]}</span> : null}
      </p>
      <p className="install-btns">
        {evt ? (
          <button
            type="button"
            className="button"
            onClick={async () => {
              await evt.prompt();
              dismiss();
            }}
          >
            {T.install[lang]}
          </button>
        ) : null}
        <button type="button" className="button button-light" onClick={dismiss}>
          {T.later[lang]}
        </button>
      </p>
    </div>
  );
}
