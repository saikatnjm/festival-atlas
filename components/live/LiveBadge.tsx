import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { num, type Lang } from "@/lib/i18n";
import { crowdLevel, waitLabel, type LiveStats } from "@/lib/live-shared";

const ICON = { 1: "🟢", 2: "🟠", 3: "🔴" } as const;

/** Compact live line for a list row: crowd level, people here, loves today. Renders nothing without data. */
export default function LiveBadge({ stats, lang }: { stats?: LiveStats; lang: Lang }) {
  if (!stats) return null;
  const level = crowdLevel(stats.crowd_avg);
  const parts: string[] = [];
  if (level && stats.crowd_n) parts.push(`${ICON[level]} ${fun.live.levels[level - 1][lang]} · ${fill(fun.live.reports[lang], { n: num(stats.crowd_n, lang) })}`);
  const wait = waitLabel(stats.wait_med);
  if (wait && stats.wait_n) parts.push(`⏳ ${fill(fun.live.waitNow[lang], { m: lang === "bn" ? wait.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]) : wait })}`);
  if (stats.here_n) parts.push(fill(fun.live.hereCount[lang], { n: num(stats.here_n, lang) }));
  if (stats.love_today) parts.push(fill(fun.live.loveCount[lang], { n: num(stats.love_today, lang) }));
  if (!parts.length) return null;
  return <p className="live-badge">{parts.join(" · ")}</p>;
}
