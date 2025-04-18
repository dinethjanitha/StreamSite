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
      "source.unsplash.com",
      "images.unsplash.com",
      "marketplace.canva.com"
    ],
  },
};

export default nextConfig;
