import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.konst.se'],
    formats: ['image/webp', 'image/avif'],
  },
  // SEO och prestanda optimeringar
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  // Headers för säkerhet och SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
