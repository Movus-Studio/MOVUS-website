"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const SEGMENTS = 40;
const DURATION_MS = 1500; // bar fill — also drives .movus-loader-counter in globals.css
const TOTAL_MS = 2200;    // 1500 fill + 200 settle + 500 split. Matches keyframes in globals.css.
const SAFETY_MS = TOTAL_MS + 400; // hard fallback if iOS stalls the keyframe
const STORAGE_KEY = "movus-loaded";

type Phase = "idle" | "loading" | "gone";

// Refresh GSAP ScrollTrigger after the loader unmounts so triggers re-measure
// against the unlocked body (otherwise they're computed against overflow:hidden state).
function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("resize"));
  import("gsap/ScrollTrigger")
    .then((m) => m.ScrollTrigger.refresh())
    .catch(() => {});
}

export function LoadingScreen() {
  // Render nothing on SSR + first client paint to avoid hydration mismatch and
  // the "loader flashes on every cold restore" bug. We accept a 1-frame FOUC on
  // first ever visit in exchange for never seeing a re-fired loader on returns.
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    setMounted(true);

    try {
      const forceReplay =
        new URLSearchParams(window.location.search).get("reload") === "1";
      if (forceReplay) localStorage.removeItem(STORAGE_KEY);

      if (localStorage.getItem(STORAGE_KEY)) {
        setPhase("gone");
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        localStorage.setItem(STORAGE_KEY, "1");
        setPhase("gone");
        return;
      }
    } catch {}

    setPhase("loading");
  }, []);

  // Drive lifecycle: lock scroll, persist flag, schedule safety dismiss, unlock on cleanup.
  useEffect(() => {
    if (phase !== "loading") return;

    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    lockBodyScroll();

    const safety = window.setTimeout(() => {
      setPhase("gone");
    }, SAFETY_MS);

    return () => {
      window.clearTimeout(safety);
      unlockBodyScroll();
    };
  }, [phase]);

  // When we leave "loading", refresh scroll-tied animations.
  useEffect(() => {
    if (phase === "gone") refreshScrollTriggers();
  }, [phase]);

  if (!mounted || phase !== "loading") return null;

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName !== "movus-loader-root-end") return;
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
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
          }}
        />
        <div className="relative w-32 h-12 md:w-44 md:h-16">
          <Image
            src="/images/movus-logo-white.webp"
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

      {/* SEAM — bar + counter at the split line. */}
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
