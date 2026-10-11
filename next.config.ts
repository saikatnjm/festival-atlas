import type { NextConfig } from "next";

/**
 * The site's public origin, resolved once at build time.
 * On Vercel, the project's production domain (VERCEL_PROJECT_PRODUCTION_URL) always wins: it follows
 * the custom domain automatically, so a stale NEXT_PUBLIC_SITE_URL can't point metadata at a dead
 * domain, and preview builds still use the production canonical. Elsewhere (Docker, CI)
 * NEXT_PUBLIC_SITE_URL is used. Empty when neither is set.
 */
function siteOrigin(): string {
  const vercel = process.env.VERCEL && process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const raw = vercel ? `https://${vercel}` : (process.env.NEXT_PUBLIC_SITE_URL ?? "");
  return raw.replace(/\/+$/, "");
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: { NEXT_PUBLIC_SITE_ORIGIN: siteOrigin() },
  // Old unprefixed links keep working (temporary redirect to the English version).
  async redirects() {
    return [
      { source: "/puja", destination: "/en/puja", permanent: false },
      { source: "/play", destination: "/en/play", permanent: false },
      { source: "/play/:path*", destination: "/en/play/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
