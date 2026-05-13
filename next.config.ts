import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.wordpress.com", // allows all wordpress images
      },
    ],
  },
};

export default nextConfig;