import type { ReactNode } from "react";

// "/" only redirects (see page.tsx), so this layout never renders visible content.
export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
