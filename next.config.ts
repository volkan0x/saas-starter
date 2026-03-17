import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    clientSegmentCache: true
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;