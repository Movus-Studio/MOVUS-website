import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 blocks dev resources from cross-origin (LAN IP) by default —
  // breaks phone testing on the local network. Whitelist the LAN host.
  allowedDevOrigins: ["192.168.68.51"],
  images: {
    qualities: [75, 90, 100],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/home-el", destination: "/", permanent: true },
      { source: "/contact-el", destination: "/contact", permanent: true },
      { source: "/programs-el", destination: "/programs", permanent: true },
      { source: "/about-us-el", destination: "/about", permanent: true },
      { source: "/imotion-ems-el", destination: "/programs/ems", permanent: true },
      { source: "/shape-space-el", destination: "/programs/shape-space", permanent: true },
      { source: "/ishape-el", destination: "/programs/ems", permanent: true },
      { source: "/omadika-el", destination: "/programs/team", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/blogs/:path*", destination: "/blog/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
