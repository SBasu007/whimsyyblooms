import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    // Serve WebP/AVIF automatically — dramatically smaller than JPEG/PNG
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 30 days (default is 60 s)
    minimumCacheTTL: 2592000,
    // Align device breakpoints with actual card widths used in the app
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 64, 128, 256, 400, 640, 800],
  },
};

export default nextConfig;

