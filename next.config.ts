import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 blocks dev resources from cross-origin (LAN IP) by default —
  // breaks phone testing on the local network. Whitelist the LAN host.
  allowedDevOrigins: ["192.168.68.51"],
  images: {
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
