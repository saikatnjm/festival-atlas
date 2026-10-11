"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { LANGS, LANG_NAME, switchLangPath, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  label: string;
  /** Template such as "Switch to {name}". */
  switchTo: string;
}

/**
 * EN / বাংলা switch. Each option is a plain link to the same page in the other language, so it works
 * without JavaScript and search engines can follow it. With JavaScript it also keeps the query string
 * and hash (game state, filters, selected pandal).
 */
export default function LangSwitch({ lang, label, switchTo }: Props) {
  const pathname = usePathname();

  const onClick = (e: MouseEvent<HTMLAnchorElement>, to: Lang) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    window.location.assign(`${switchLangPath(pathname, to)}${window.location.search}${window.location.hash}`);
  };

  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {[...LANGS].reverse().map((l) => (
        <a
          key={l}
          href={switchLangPath(pathname, l)}
          lang={l}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          aria-label={l === lang ? LANG_NAME[l] : switchTo.replace("{name}", LANG_NAME[l])}
          onClick={(e) => onClick(e, l)}
        >
          {LANG_NAME[l]}
        </a>
      ))}
    </div>
  );
}
