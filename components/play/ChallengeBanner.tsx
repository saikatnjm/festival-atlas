"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { getActivity } from "@/data/play";
import { withLang, type Lang } from "@/lib/i18n";
import { cleanName } from "@/lib/profile";

/**
 * Shows an incoming friend challenge. Activity page: reads ?vs=Name&vr=resultId.
 * Result page (`resultId` given): reads ?from=Name and links to the game with the challenge attached.
 * Only what is in the link is shown; nothing else about the sender is known or stored.
 */
export default function ChallengeBanner({ lang, slug, resultId }: { lang: Lang; slug: string; resultId?: string }) {
  const [state, setState] = useState<{ name: string; title: string; href?: string } | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const activity = getActivity(slug);
    if (!activity) return;
    if (resultId) {
      const name = cleanName(q.get("from"));
      const res = activity.results.find((r) => r.id === resultId);
      if (!name || !res) return;
      const p = new URLSearchParams({ vs: name, vr: resultId });
      setState({ name, title: res.title[lang], href: withLang(lang, `/play/${slug}?${p.toString()}`) });
    } else {
      const res = activity.results.find((r) => r.id === q.get("vr"));
      if (!res) return;
      setState({ name: cleanName(q.get("vs")) || fun.duel.friend[lang], title: res.title[lang] });
    }
  }, [lang, slug, resultId]);

  if (!state) return null;
  return (
    <div className="cx-duel" role="status">
      <p>{fill(fun.duel.banner[lang], { name: state.name, title: state.title })}</p>
      {state.href ? (
        <p>
          <Link className="cx-btn" href={state.href}>
            {fun.duel.play[lang]}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
