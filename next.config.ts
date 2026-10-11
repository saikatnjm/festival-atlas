import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
