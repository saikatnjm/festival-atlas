import type { ReactNode } from "react";

/** Comic speech bubble. `tail` says where the pointer sits. */
export default function Bubble({
  children,
  tail = "down",
  className,
}: {
  children: ReactNode;
  tail?: "down" | "up" | "none";
  className?: string;
}) {
  return <div className={`cx-bubble cx-bubble-${tail}${className ? ` ${className}` : ""}`}>{children}</div>;
}
