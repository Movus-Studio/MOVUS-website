import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light" | "orange";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const src = variant === "dark" ? "/images/movus-logo-white.webp" : "/images/movus-logo.webp";

  return (
    <span className={`relative inline-block aspect-[5072/1880] ${className}`}>
      <Image
        src={src}
        alt="MOVUS"
        fill
        priority={variant !== "light"}
        sizes="240px"
        className="object-contain select-none"
      />
    </span>
  );
}
