"use client";

import Link from "next/link";
import { withLang, type Lang } from "@/lib/i18n";
import { useProfile } from "@/lib/use-profile";

/** Header chip with the player's (optional) name; opens "my Puja" (log, stats, summary card). Hidden until a name is set. */
export default function NameChip({ lang, label }: { lang: Lang; label: string }) {
  const { profile } = useProfile();
  if (!profile.name) return null;
  return (
    <Link className="name-chip" href={withLang(lang, "/me")} aria-label={`${label}: ${profile.name}`}>
      <span aria-hidden="true">👤</span> {profile.name}
    </Link>
  );
}
