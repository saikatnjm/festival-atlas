"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

/** The strings client-side fallback pages (not-found, error) need, passed down once by the layout. */
export interface FallbackStrings {
  notFound: { h1: string; p: string; home: string; map: string };
  error: { h1: string; p: string; retry: string };
}

const Ctx = createContext<{ lang: Lang; strings: FallbackStrings } | null>(null);

export function LangProvider({ lang, strings, children }: { lang: Lang; strings: FallbackStrings; children: ReactNode }) {
  return <Ctx.Provider value={{ lang, strings }}>{children}</Ctx.Provider>;
}

export function useLangContext() {
  const v = useContext(Ctx);
  if (!v) throw new Error("LangProvider is missing");
  return v;
}
