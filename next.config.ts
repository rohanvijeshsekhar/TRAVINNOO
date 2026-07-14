import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/demo',
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimize images: serve WebP automatically, allow both relative and base64 images
  images: {
    formats: ['image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/demo',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
