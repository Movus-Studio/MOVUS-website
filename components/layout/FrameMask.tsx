"use client";

/**
 * Faithful port of Fightness Framer template's Nav + Frame Accent.
 *
 * Verified via design-bridge MCP against the source canvas (1200×800):
 *   - 14px black border, fixed inset:0
 *   - Logo island: 228×74.5 top-left, radius 0 0 14 0
 *   - Hamburger island: 87.5×75 top-right, radius 0 0 0 14
 *   - Fixed Button (CTA): 245.5×84 bottom-right (right:6), radius 14 0 0 0
 *   - 6 Corner Shape fillets (20×20 quarter-pie SVGs) at the concave L-seams
 *
 * No skew. The "diagonal" appearance is an illusion from rounded inner corner
 * + fillet at the opposite end of the rectangle.
 */

const CornerShape = ({
  rotation = 0,
  className = "",
}: {
  rotation?: 0 | 90 | 180 | 270;
  className?: string;
}) => (
  <svg
    viewBox="0 0 100 100"
    className={`pointer-events-none fill-movus-black ${className}`}
    style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center" }}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path d="M 0 0 H 100 C 44.77 0 0 44.77 0 100 V 0 Z" />
  </svg>
);

export function FrameMask() {
  return (
    <>
      {/* Outer black frame */}
      <div className="pointer-events-none fixed inset-0 z-[90] border-[10px] md:border-[14px] border-movus-black" />

      {/* Safe-area fillers — include the 10/14px frame border height so the
          inside cutout edge lands at safe-area + border, matching the fillet
          positions and the islands' interior corners. */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[95] bg-movus-black
                   h-[calc(env(safe-area-inset-top)_+_10px)] md:h-[calc(env(safe-area-inset-top)_+_14px)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[95] bg-movus-black
                   h-[calc(env(safe-area-inset-bottom)_+_10px)] md:h-[calc(env(safe-area-inset-bottom)_+_14px)]"
        aria-hidden
      />

      {/* === Page-interior fillets at the empty viewport corners ============== */}
      {/* top-right: between top frame and right frame (no island here in Fightness on this side) */}
      {/* but our layout has the hamburger here so this slot is covered — keep for symmetry */}
      {/* bottom-left: rounds the frame's own interior 90° corner */}
      <CornerShape
        rotation={270}
        className="fixed z-[101] left-[10px] md:left-[14px]
                   bottom-[calc(env(safe-area-inset-bottom)_+_10px)] md:bottom-[calc(env(safe-area-inset-bottom)_+_14px)]
                   w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
      />

      {/* === LOGO island, top-left ============================================
          Height extends through iOS safe-area-inset-top so the black reaches
          the device's physical top edge when viewport-fit=cover is on. */}
      <div
        className="pointer-events-none fixed top-0 left-0 bg-movus-black z-[100]
                   w-[160px] md:w-[228px]
                   h-[calc(env(safe-area-inset-top)_+_54px)] md:h-[calc(env(safe-area-inset-top)_+_74px)]
                   rounded-br-[12px] md:rounded-br-[14px]"
      />
      {/* fillet at logo's right edge meeting top frame */}
      <CornerShape
        rotation={0}
        className="fixed z-[101] left-[160px] md:left-[228px]
                   top-[calc(env(safe-area-inset-top)_+_10px)] md:top-[calc(env(safe-area-inset-top)_+_14px)]
                   w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
      />
      {/* fillet at logo's bottom edge meeting left frame */}
      <CornerShape
        rotation={0}
        className="fixed z-[101] left-[10px] md:left-[14px]
                   top-[calc(env(safe-area-inset-top)_+_54px)] md:top-[calc(env(safe-area-inset-top)_+_74px)]
                   w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
      />

      {/* === HAMBURGER island, top-right ====================================== */}
      <div
        className="pointer-events-none fixed top-0 right-0 bg-movus-black z-[100]
                   w-[64px] md:w-[88px]
                   h-[calc(env(safe-area-inset-top)_+_54px)] md:h-[calc(env(safe-area-inset-top)_+_75px)]
                   rounded-bl-[12px] md:rounded-bl-[14px]"
      />
      {/* fillet at hamburger's left edge meeting top frame */}
      <CornerShape
        rotation={90}
        className="fixed z-[101] right-[64px] md:right-[88px]
                   top-[calc(env(safe-area-inset-top)_+_10px)] md:top-[calc(env(safe-area-inset-top)_+_14px)]
                   w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
      />
      {/* fillet at hamburger's bottom edge meeting right frame */}
      <CornerShape
        rotation={90}
        className="fixed z-[101] right-[10px] md:right-[14px]
                   top-[calc(env(safe-area-inset-top)_+_54px)] md:top-[calc(env(safe-area-inset-top)_+_75px)]
                   w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
      />

      {/* === FIXED BUTTON (CTA) island, bottom-right ==========================
          Height extends through safe-area-inset-bottom so the black covers the
          home-indicator zone seamlessly. */}
      <div
        className="pointer-events-none fixed bottom-0 right-[4px] md:right-[6px] bg-movus-black z-[100]
                   w-[200px] md:w-[245px]
                   h-[calc(env(safe-area-inset-bottom)_+_60px)] md:h-[calc(env(safe-area-inset-bottom)_+_84px)]
                   rounded-tl-[12px] md:rounded-tl-[14px]"
      />
      {/* fillet at CTA's top edge meeting right frame */}
      <CornerShape
        rotation={180}
        className="fixed z-[101] right-[10px] md:right-[14px]
                   bottom-[calc(env(safe-area-inset-bottom)_+_60px)] md:bottom-[calc(env(safe-area-inset-bottom)_+_84px)]
                   w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
      />
      {/* fillet at CTA's left edge meeting bottom frame */}
      <CornerShape
        rotation={180}
        className="fixed z-[101] right-[204px] md:right-[251px]
                   bottom-[calc(env(safe-area-inset-bottom)_+_10px)] md:bottom-[calc(env(safe-area-inset-bottom)_+_14px)]
                   w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
      />
    </>
  );
}
