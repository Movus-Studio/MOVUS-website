"use client";

import React from "react";
import { motion, type MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

interface GradientTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  /** "dark" (default): bg-movus-black + mix-blend-darken (paints color onto light text).
      "light": bg-movus-white + mix-blend-lighten (paints color onto dark text). */
  variant?: "dark" | "light";
}

function GradientText({
  className,
  children,
  as: Component = "span",
  variant = "dark",
  ...props
}: GradientTextProps) {
  const MotionComponent = motion.create(Component);
  const wrapperBg = variant === "dark" ? "bg-movus-black" : "bg-movus-white";
  const overlayBlend =
    variant === "dark" ? "mix-blend-darken" : "mix-blend-multiply";

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex overflow-hidden",
        wrapperBg,
        className,
      )}
      {...props}
    >
      {children}
      <span className={cn("pointer-events-none absolute inset-0", overlayBlend)}>
        <span className="pointer-events-none absolute -top-1/2 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute -bottom-1/2 right-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-4))] mix-blend-overlay blur-[1rem]"></span>
      </span>
    </MotionComponent>
  );
}

export { GradientText };
