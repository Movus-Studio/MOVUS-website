"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "Αρχική", href: "/" },
  {
    label: "Προγράμματα",
    href: "/programs",
    children: [
      { label: "i-Motion EMS", href: "/programs/ems" },
      { label: "i-Shape EMS Suit", href: "/programs/i-shape" },
      { label: "Shape Space", href: "/programs/shape-space" },
      { label: "Ομαδικά", href: "/programs/group-classes" },
    ],
  },
  { label: "Σχετικά", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Επικοινωνία", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // ESC key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  return (
    <>
      {/* 
        The actual navigation wrapper no longer relies on flex positioning.
        Instead we absolutely place the logo and hamburger to MATCH the dimensions 
        of the FrameMask islands.
      */}

      {/* TOP LEFT LOGO — sits inside the FrameMask logo island (160×54 mobile / 228×74 desktop).
          Padding ports Framer's Logo node padding (30 40 20 40) so the wordmark hangs at the
          optical centre of the island. */}
      <div
        className="fixed top-0 left-0 w-[160px] md:w-[228px] h-[54px] md:h-[74px] z-[110] flex items-center pointer-events-auto group"
        style={{ padding: '20px 24px 14px 24px' }}
      >
        <Link
          href="/"
          aria-label="MOVUS"
          className="pointer-events-auto w-full block transform group-hover:scale-[1.03] transition-transform duration-300"
        >
          <Logo variant="dark" className="w-full md:w-[160px]" />
        </Link>
      </div>

      {/* TOP RIGHT HAMBURGER — sits inside the FrameMask hamburger island (64×54 / 88×75). */}
      <button
        className="fixed top-0 right-0 w-[64px] md:w-[88px] h-[54px] md:h-[75px] z-[110] flex items-center justify-center pointer-events-auto group"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
      >
        <div className="relative flex flex-col gap-[5px] pointer-events-auto">
          <span
            className={`block w-6 md:w-7 h-[2px] bg-white transition-transform duration-300 ${
              isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 md:w-7 h-[2px] bg-white transition-opacity duration-300 ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 md:w-7 h-[2px] bg-white transition-transform duration-300 ${
              isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
