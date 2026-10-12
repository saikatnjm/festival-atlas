"use client";

import Link from "next/link";
import { withLang, type Lang } from "@/lib/i18n";
import { useProfile } from "@/lib/use-profile";

/** Header chip with the player's (optional) name; opens the name prompt on the play page. Hidden until a name is set. */
export default function NameChip({ lang, label }: { lang: Lang; label: string }) {
  const { profile } = useProfile();
  if (!profile.name) return null;
  return (
    <Link className="name-chip" href={`${withLang(lang, "/play")}?me=1`} aria-label={`${label}: ${profile.name}`}>
      <span aria-hidden="true">👤</span> {profile.name}
    </Link>
  );
}
