import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,

  async headers() {
    const securityHeaders = [
      {
        key: "Content-Security-Policy-Report-Only",
        value: [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'self'",
          "form-action 'self' https:",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: https://challenges.cloudflare.com",
          "style-src 'self' 'unsafe-inline' https:",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data: https:",
          "connect-src 'self' https: https://challenges.cloudflare.com",
          "frame-src 'self' https: https://challenges.cloudflare.com",
        ].join("; "),
      },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];

    if (process.env.NODE_ENV === "production") {
      securityHeaders.push({
        key: "Strict-Transport-Security",
        value: "max-age=31536000",
      });
    }

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wpapi.acmeglobal.tech",
      },
    ],
  },
};

export default nextConfig;
