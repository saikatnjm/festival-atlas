"use client";

import { useEffect, useId, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { THEMES, THEME_IDS, THEME_KEY, autoTheme, isThemeChoice, type ThemeChoice } from "@/lib/theme";

const T = {
  label: { bn: "রং বদলাও", en: "Colours" },
  auto: { bn: "পুজো-মোড (আপনা-আপনি)", en: "Puja mode (auto)" },
  autoHint: { bn: "মহালয়া থেকে দশমী সিঁদুর রং, বাকি সময় ক্লাসিক।", en: "Sindoor from Mahalaya to Dashami, classic otherwise." },
  saved: { bn: "শুধু এই ব্রাউজারে মনে থাকে।", en: "Remembered in this browser only." },
};

function todayLocal(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Palette switcher: four colour palettes plus "auto" (Puja mode). Saved in localStorage; applied via data-theme. */
export default function ThemePicker({ lang }: { lang: Lang }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<ThemeChoice>("auto");

  useEffect(() => {
    const v = document.documentElement.getAttribute("data-theme-choice");
    if (isThemeChoice(v)) setChoice(v);
  }, []);

  const apply = (c: ThemeChoice) => {
    setChoice(c);
    const theme = c === "auto" ? autoTheme(todayLocal()) : c;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-theme-choice", c);
    try {
      if (c === "auto") localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, c);
    } catch {
      // Storage blocked: the choice still applies to this page view.
    }
  };

  return (
    <div className="theme">
      <button type="button" className="theme-btn" aria-expanded={open} aria-controls={`${id}-p`} onClick={() => setOpen((o) => !o)}>
        <span aria-hidden="true">🎨</span>
        <span className="visually-hidden">{T.label[lang]}</span>
      </button>
      {open ? (
        <div id={`${id}-p`} className="theme-pop" role="group" aria-label={T.label[lang]}>
          <button type="button" className="theme-opt" aria-pressed={choice === "auto"} onClick={() => apply("auto")}>
            <span className="theme-sw theme-sw-auto" aria-hidden="true" />
            <span>
              {T.auto[lang]}
              <small>{T.autoHint[lang]}</small>
            </span>
          </button>
          {THEME_IDS.map((t) => (
            <button key={t} type="button" className="theme-opt" aria-pressed={choice === t} onClick={() => apply(t)}>
              <span className="theme-sw" aria-hidden="true" style={{ background: `linear-gradient(135deg, ${THEMES[t].swatch[0]} 0 40%, ${THEMES[t].swatch[1]} 40% 70%, ${THEMES[t].swatch[2]} 70%)` }} />
              <span>{THEMES[t].name[lang]}</span>
            </button>
          ))}
          <p className="fineprint">{T.saved[lang]}</p>
        </div>
      ) : null}
    </div>
  );
}
