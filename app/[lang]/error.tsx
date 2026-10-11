"use client";

import { useLangContext } from "@/components/LangContext";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useLangContext().strings.error;
  return (
    <>
      <h1>{t.h1}</h1>
      <p className="lead">{t.p}</p>
      <button type="button" className="button" onClick={reset}>
        {t.retry}
      </button>
    </>
  );
}
