"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { num, withLang, type Lang } from "@/lib/i18n";
import { useVisits } from "@/lib/use-visits";

const T = {
  plan: { bn: "🗺️ তোমার প্ল্যান", en: "🗺️ Your plan" },
  passport: { bn: "🎫 পাসপোর্ট: {n}টা প্যান্ডেল", en: "🎫 Passport: {n} pandals" },
};

/** Home-page shortcuts to things this visitor already made: their last plan and their passport. Hidden until there is one. */
export default function MyPlanChip({ lang }: { lang: Lang }) {
  const [plan, setPlan] = useState<string | null>(null);
  const { visits, ready } = useVisits();
  useEffect(() => {
    try {
      const p = window.localStorage.getItem("fa:plan");
      // Stored path is language-prefixed; show it in the current language.
      if (p && p.startsWith("/")) setPlan(p.replace(/^\/(en|bn)\//, `/${lang}/`));
    } catch {
      // ignore
    }
  }, [lang]);
  if (!plan && !(ready && visits.length)) return null;
  return (
    <p className="cta-row my-chips">
      {plan ? (
        <Link className="button button-light" href={plan}>
          {T.plan[lang]}
        </Link>
      ) : null}
      {ready && visits.length ? (
        <Link className="button button-light" href={withLang(lang, "/passport")}>
          {T.passport[lang].replace("{n}", num(visits.length, lang))}
        </Link>
      ) : null}
    </p>
  );
}
