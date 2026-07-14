import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/demo',
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Redirect bare root (outside basePath) → /demo
      {
        source: '/',
        destination: '/demo',
        permanent: false,
        basePath: false, // apply outside the /demo basePath context
      },
    ];
  },
};

export default nextConfig;
