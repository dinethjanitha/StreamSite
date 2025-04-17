import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "http://localhost:3005",
      "img.daisyui.com",
      "streamback-production.up.railway.app",
      "st3.depositphotos.com",
      "localhost",
      "unpkg.com",
      "images.unsplash.com"
    ],
  },
};

export default nextConfig;
