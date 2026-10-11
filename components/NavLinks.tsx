"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { withLang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  labels: { home: string; puja: string; play: string; local: string };
}

export default function NavLinks({ lang, labels }: Props) {
  const pathname = usePathname();
  const links = [
    { path: "/", label: labels.home },
    { path: "/play", label: labels.play },
    { path: "/local", label: labels.local },
    { path: "/puja", label: labels.puja },
  ];
  return (
    <ul className="nav-list">
      {links.map(({ path, label }) => {
        const href = withLang(lang, path);
        const active = path === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <li key={path}>
            <Link href={href} aria-current={active ? "page" : undefined}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
