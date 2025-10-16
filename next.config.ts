import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {}, // fallback clean
    },
  },
  webpack: (config) => {
    // ensure next-pwa works with webpack
    return config;
  },
};

export default withPWA(nextConfig);
