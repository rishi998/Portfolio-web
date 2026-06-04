import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/work-assets/:path*",
        destination: "/api/work-assets/:path*",
      },
    ];
  },
};

export default nextConfig;
