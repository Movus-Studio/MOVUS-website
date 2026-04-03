"use client";

import { usePathname } from "next/navigation";

// Hardcoded SVG Fillets that draw the exact requested convex shapes without relying on brittle CSS rotation.
// The SVG creates a perfect inward-dipping concave curve while completely filling the requested corner with Black.

// Connects Right-of-Island and Top-of-Window. (Black mass in Top-Left)
const FilletTopLeft = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute pointer-events-none fill-movus-black stroke-movus-black ${className}`} preserveAspectRatio="none">
    <path d="M 0 0 H 100 C 44.77 0 0 44.77 0 100 V 0 Z" strokeWidth="2" />
  </svg>
);

// Connects Left-of-Island and Top-of-Window. (Black mass in Top-Right)
const FilletTopRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute pointer-events-none fill-movus-black stroke-movus-black ${className}`} preserveAspectRatio="none">
    <path d="M 100 0 H 0 C 55.23 0 100 44.77 100 100 V 0 Z" strokeWidth="2" />
  </svg>
);

// Connects Left-of-Island and Bottom-of-Window. (Black mass in Bottom-Right)
const FilletBottomRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute pointer-events-none fill-movus-black stroke-movus-black ${className}`} preserveAspectRatio="none">
    <path d="M 100 100 V 0 C 100 55.23 55.23 100 0 100 H 100 Z" strokeWidth="2" />
  </svg>
);

export function FrameMask() {
  return (
    <>
      {/* --- GLOBAL APP PERIMETER FRAME --- */}
      {/* Sharpened the global radius from 40px to 24px for a tighter premium feel */}
      {/* Replaced inset-0 with explicit top-0/left-0/w-100vw/h-100svh to prevent iOS Safari address bar from shoving the top border completely off-screen during scroll. */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-[100svh] z-[90] border-[12px] md:border-[16px] border-movus-black rounded-[20px] md:rounded-[24px] shadow-[0_0_0_50vmax_var(--color-movus-black)]" />

      {/* --- TOP LEFT ISLAND (Logo Area) --- */}
      {/* Sharpened island radius to 16px/20px to match frame */}
      <div className="fixed top-0 left-0 w-[130px] md:w-[160px] h-[60px] md:h-[68px] bg-movus-black z-[100] rounded-br-[16px] md:rounded-br-[20px] pointer-events-none transition-all">
        <FilletTopLeft className="w-4 h-4 md:w-5 md:h-5 top-[12px] md:top-[16px] right-[-16px] md:right-[-20px]" />
        <FilletTopLeft className="w-4 h-4 md:w-5 md:h-5 bottom-[-16px] md:bottom-[-20px] left-[12px] md:left-[16px]" />
      </div>

      {/* --- TOP RIGHT ISLAND (Hamburger Area) --- */}
      <div className="fixed top-0 right-0 w-[76px] md:w-[88px] h-[60px] md:h-[68px] bg-movus-black z-[100] rounded-bl-[16px] md:rounded-bl-[20px] pointer-events-none transition-all">
        <FilletTopRight className="w-4 h-4 md:w-5 md:h-5 top-[12px] md:top-[16px] left-[-16px] md:left-[-20px]" />
        <FilletTopRight className="w-4 h-4 md:w-5 md:h-5 bottom-[-16px] md:bottom-[-20px] right-[12px] md:right-[16px]" />
      </div>

      {/* --- BOTTOM RIGHT ISLAND (Floating CTA Area) --- */}
      <div className="fixed bottom-0 right-0 w-[205px] md:w-[220px] h-[72px] md:h-[76px] bg-movus-black z-[100] rounded-tl-[16px] md:rounded-tl-[20px] pointer-events-none transition-all">
        <FilletBottomRight className="w-4 h-4 md:w-5 md:h-5 bottom-[12px] md:bottom-[16px] left-[-16px] md:left-[-20px]" />
        <FilletBottomRight className="w-4 h-4 md:w-5 md:h-5 top-[-16px] md:top-[-20px] right-[12px] md:right-[16px]" />
      </div>
    </>
  );
}
