"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SEGMENTS = 40;
const DURATION_MS = 1500; // bar fill duration — also drives .movus-loader-counter in globals.css
const TOTAL_MS = 2200;    // includes 200ms settle + 500ms split. Must match keyframe timings in globals.css.
const STORAGE_KEY = "movus-loaded";

type Phase = "loading" | "gone" | "skip";

export function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const forceReplay =
      new URLSearchParams(window.location.search).get("reload") === "1";
    if (forceReplay) sessionStorage.removeItem(STORAGE_KEY);

    if (!forceReplay && sessionStorage.getItem(STORAGE_KEY)) {
      setPhase("skip");
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setPhase("skip");
      return;
    }

    // Persist the flag immediately so iOS suspending mid-loader still won't replay.
    sessionStorage.setItem(STORAGE_KEY, "1");
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "skip" || phase === "gone") return null;

  // Listen for the root container's end animation (visibility flip) — compositor-synced,
  // fires on iOS even when setTimeout would stall.
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName !== "movus-loader-root-end") return;
    document.body.style.overflow = "";
    setPhase("gone");
  };

  const stepMs = DURATION_MS / SEGMENTS;

  return (
    <div
      className="movus-loader-root fixed inset-0 z-[9999] overflow-hidden"
      onAnimationEnd={handleAnimationEnd}
      style={{ ["--movus-loader-duration" as string]: `${DURATION_MS}ms` }}
      role="status"
    >
      {/* TOP HALF — black panel that lifts up; carries the MOVUS logo. */}
      <div className="movus-loader-top absolute top-0 left-0 right-0 h-1/2 bg-movus-black flex items-end justify-center pb-12 md:pb-16">
        {/* Faint scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
          }}
        />
        <div className="relative w-32 h-12 md:w-44 md:h-16">
          <Image
            src="/images/logo-movus-white.webp"
            alt="MOVUS"
            fill
            className="object-contain"
            priority
            sizes="176px"
          />
        </div>
      </div>

      {/* BOTTOM HALF — black panel that drops down; carries the tagline. */}
      <div className="movus-loader-bottom absolute bottom-0 left-0 right-0 h-1/2 bg-movus-black flex items-start justify-center pt-12 md:pt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
          }}
        />
        <div className="text-center text-[9px] md:text-[10px] tracking-[0.4em] text-movus-white/35 uppercase font-mono">
          Entering the future of fitness
        </div>
      </div>

      {/* SEAM — bar + counter, sits exactly at the split line. Flares wide & vanishes
          as the two halves separate, making the bar itself the "moment of reveal". */}
      <div className="movus-loader-bar absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[400px] flex flex-col gap-3 z-[1]">
        <div className="flex justify-between text-[10px] md:text-[11px] tracking-[0.3em] text-movus-white/55 uppercase font-mono">
          <span>System</span>
          <span className="movus-loader-counter" aria-hidden="true" />
        </div>
        <div className="flex gap-[2px] h-3">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <div
              key={i}
              className="flex-1 movus-loader-segment"
              style={{ animationDelay: `${i * stepMs}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
