import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.konst.se',
        port: '',
        pathname: '/konstverk/**',
      },
    ],
  },
};

export default nextConfig;
