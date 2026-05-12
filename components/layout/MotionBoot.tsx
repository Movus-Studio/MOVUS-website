"use client";

import { useEffect } from "react";

const FAILSAFE_MS = 3500;

export function MotionBoot() {
  useEffect(() => {
    let cancelled = false;

    const refresh = () => {
      import("gsap/ScrollTrigger")
        .then((m) => m.ScrollTrigger.refresh())
        .catch(() => {});
    };

    refresh();
    const onLoad = () => refresh();
    const onPageShow = () => refresh();
    window.addEventListener("load", onLoad);
    window.addEventListener("pageshow", onPageShow);

    const failsafe = window.setTimeout(() => {
      if (cancelled) return;
      document.body.classList.add("motion-failsafe");
    }, FAILSAFE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return null;
}
