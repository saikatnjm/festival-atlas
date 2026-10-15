"use client";

import { useEffect } from "react";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { num, type Lang } from "@/lib/i18n";
import { resultShare } from "@/lib/community-shared";
import { useCommunity } from "./useCommunity";

/**
 * Under a player's own result: records the result anonymously (device id + result id, once per
 * session) and shows how many other players got the same one. Hidden without a database.
 */
export default function ResultStats({ game, result, title, lang }: { game: string; result: string; title: string; lang: Lang }) {
  const C = fun.community;
  const { data, enabled, loaded, record, refresh } = useCommunity();

  useEffect(() => {
    if (!loaded || !enabled) return;
    record({ game, result }, `${game}:${result}`).then((ok) => {
      if (ok) refresh();
    });
  }, [loaded, enabled, game, result, record, refresh]);

  if (!loaded || !enabled) return null;
  const share = resultShare(data.stats, game, result);
  const others = share ? Math.max(0, share.n - 1) : 0;
  return (
    <p className="cx-stats" role="status">
      {others > 0 ? fill(C.youAnd[lang], { title, n: num(others, lang), pct: num(share?.pct ?? 0, lang) }) : fill(C.youFirst[lang], { title })}
    </p>
  );
}
