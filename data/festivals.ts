import type { L } from "@/lib/i18n";

export interface Festival {
  id: string;
  icon: string;
  name: L;
  /** "live" festivals link to a real section; "soon" ones are only announced. */
  status: "live" | "soon";
  /** Language-less path of the live section. */
  path?: string;
}

/** Festival tiles on the home page. A festival becomes "live" only when its section has real, sourced content. */
export const festivals: Festival[] = [
  { id: "durga-puja", icon: "🥁", name: { bn: "দুর্গাপুজো", en: "Durga Puja" }, status: "live", path: "/puja" },
  { id: "kali-puja", icon: "🪔", name: { bn: "কালীপুজো", en: "Kali Puja" }, status: "soon" },
  { id: "saraswati-puja", icon: "📚", name: { bn: "সরস্বতীপুজো", en: "Saraswati Puja" }, status: "soon" },
  { id: "eid", icon: "🌙", name: { bn: "ঈদ", en: "Eid" }, status: "soon" },
  { id: "pohela-boishakh", icon: "🎊", name: { bn: "পয়লা বৈশাখ", en: "Pohela Boishakh" }, status: "soon" },
  { id: "biju", icon: "🌸", name: { bn: "বিজু", en: "Biju" }, status: "soon" },
  { id: "more", icon: "✨", name: { bn: "আরও উৎসব", en: "And more" }, status: "soon" },
];
