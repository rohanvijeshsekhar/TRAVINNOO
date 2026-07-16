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

  // Prevent HTML pages from being cached by the browser.
  // After every deploy, Next.js generates new chunk filenames (content hashes).
  // If the browser serves stale cached HTML that references old chunk hashes,
  // it gets a ChunkLoadError 404 when trying to download those chunks.
  // Static JS/CSS chunks (/demo/_next/static/**) are still cached immutably
  // because their filenames contain content hashes and never change for the same content.
  async headers() {
    return [
      {
        // Apply to all HTML routes (everything except static assets)
        source: '/((?!_next/static|_next/image|favicon|images|fonts|video|partners).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
