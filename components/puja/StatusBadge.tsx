import type { PandalStatus } from "@/data/pandals";

/** Text label plus a shape, so the status never depends on colour alone. */
export default function StatusBadge({ status, label }: { status: PandalStatus; label: string }) {
  const mark = status === "confirmed" ? "✓" : status === "historical" ? "◷" : "?";
  return (
    <span className={`status-badge status-${status}`}>
      <span aria-hidden="true">{mark}</span> {label}
    </span>
  );
}
