"use client";

interface LogoProps {
  variant?: "dark" | "light" | "orange";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const letterColor = {
    dark: "text-movus-white",
    light: "text-movus-black",
    orange: "text-movus-white",
  }[variant];

  const uColor = {
    dark: "text-movus-orange",
    light: "text-movus-orange",
    orange: "text-movus-white",
  }[variant];

  return (
    <span
      className={`font-black text-2xl tracking-[-0.02em] select-none ${className}`}
    >
      <span className={letterColor}>MOV</span>
      <span className={uColor}>U</span>
      <span className={letterColor}>S</span>
    </span>
  );
}
