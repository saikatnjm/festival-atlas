"use client";

import Link from "next/link";
import { useLangContext } from "@/components/LangContext";
import { withLang } from "@/lib/i18n";

export default function NotFound() {
  const { lang, strings } = useLangContext();
  const t = strings.notFound;
  return (
    <>
      <h1>{t.h1}</h1>
      <p className="lead">{t.p}</p>
      <p className="cta-row">
        <Link className="button" href={withLang(lang, "/")}>
          {t.home}
        </Link>
        <Link className="button button-light" href={withLang(lang, "/puja")}>
          {t.map}
        </Link>
      </p>
    </>
  );
}
