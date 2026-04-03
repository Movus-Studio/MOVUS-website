"use client";

import { usePathname } from "next/navigation";

// Hardcoded SVG Fillets that draw the exact requested convex shapes without relying on brittle CSS rotation.
// The SVG creates a perfect inward-dipping concave curve while completely filling the requested corner with Black.

// Connects Right-of-Island and Top-of-Window. (Black mass in Top-Left)
const FilletTopLeft = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute pointer-events-none fill-movus-black ${className}`} preserveAspectRatio="none">
    <path d="M 0 0 H 100 C 44.77 0 0 44.77 0 100 V 0 Z" />
  </svg>
);

// Connects Left-of-Island and Top-of-Window. (Black mass in Top-Right)
const FilletTopRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute pointer-events-none fill-movus-black ${className}`} preserveAspectRatio="none">
    <path d="M 100 0 H 0 C 55.23 0 100 44.77 100 100 V 0 Z" />
  </svg>
);

// Connects Left-of-Island and Bottom-of-Window. (Black mass in Bottom-Right)
const FilletBottomRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute pointer-events-none fill-movus-black ${className}`} preserveAspectRatio="none">
    <path d="M 100 100 V 0 C 100 55.23 55.23 100 0 100 H 100 Z" />
  </svg>
);

export function FrameMask() {
  return (
    <>
      {/* --- GLOBAL APP PERIMETER FRAME --- */}
      {/* Restored to inset-0 configuration, proven unbreakable constraints */}
      <div className="pointer-events-none fixed inset-0 z-[90] border-[12px] md:border-[16px] border-movus-black rounded-[20px] md:rounded-[24px] shadow-[0_0_0_50vmax_var(--color-movus-black)]" />

      {/* --- TOP LEFT ISLAND (Logo Area) --- */}
      {/* 1px pixel overlaps applied mechanically without SVG strokes ruining vector integrity */}
      <div className="fixed top-0 left-0 w-[130px] md:w-[160px] h-[60px] md:h-[68px] bg-movus-black z-[100] rounded-br-[16px] md:rounded-br-[20px] pointer-events-none transition-all">
        {/* Overlaps: Top-11px (frame 12px), Right-[-15px] (width 16px) */}
        <FilletTopLeft className="w-4 h-4 md:w-5 md:h-5 top-[11px] md:top-[15px] right-[-15px] md:right-[-19px]" />
        {/* Overlaps: Bottom-[-15px] (width 16px), Left-[11px] (frame 12px) */}
        <FilletTopLeft className="w-4 h-4 md:w-5 md:h-5 bottom-[-15px] md:bottom-[-19px] left-[11px] md:left-[15px]" />
      </div>

      {/* --- TOP RIGHT ISLAND (Hamburger Area) --- */}
      <div className="fixed top-0 right-0 w-[76px] md:w-[88px] h-[60px] md:h-[68px] bg-movus-black z-[100] rounded-bl-[16px] md:rounded-bl-[20px] pointer-events-none transition-all">
        <FilletTopRight className="w-4 h-4 md:w-5 md:h-5 top-[11px] md:top-[15px] left-[-15px] md:left-[-19px]" />
        <FilletTopRight className="w-4 h-4 md:w-5 md:h-5 bottom-[-15px] md:bottom-[-19px] right-[11px] md:right-[15px]" />
      </div>

      {/* --- BOTTOM RIGHT ISLAND (Floating CTA Area) --- */}
      <div className="fixed bottom-0 right-0 w-[155px] md:w-[170px] h-[56px] md:h-[60px] bg-movus-black z-[100] rounded-tl-[16px] md:rounded-tl-[20px] pointer-events-none transition-all">
        <FilletBottomRight className="w-4 h-4 md:w-5 md:h-5 bottom-[11px] md:bottom-[15px] left-[-15px] md:left-[-19px]" />
        <FilletBottomRight className="w-4 h-4 md:w-5 md:h-5 top-[-15px] md:top-[-19px] right-[11px] md:right-[15px]" />
      </div>
    </>
  );
}
