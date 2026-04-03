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

      {/* TOP LEFT LOGO - Absolute position to fit Top-Left Island */}
      <div 
        className="fixed top-0 left-0 w-[130px] md:w-[160px] h-[60px] md:h-[68px] z-[110] flex items-center justify-center pointer-events-auto group transition-all"
        style={{ padding: '12px 12px 0 0px' }} // Compensating for the 12px/16px outer border
      >
        <Link href="/" aria-label="MOVUS" className="relative w-20 md:w-24 h-6 md:h-7 pointer-events-auto transform group-hover:scale-105 transition-transform duration-300">
          <Logo variant="dark" className="absolute inset-0 w-full h-full text-white" />
        </Link>
      </div>

      {/* TOP RIGHT HAMBURGER - Absolute position to fit Top-Right Island */}
      <button 
        className="fixed top-0 right-0 w-[80px] md:w-[88px] h-[60px] md:h-[68px] z-[110] flex items-center justify-center pointer-events-auto group transition-all"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        style={{ padding: '12px 0 0 12px' }} // Compensating for the outer border
      >
        <div className="flex flex-col gap-[5px] pointer-events-auto">
          <span className={`block w-6 md:w-7 h-[2px] bg-white transition-transform duration-300 ${isMobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
          <span className={`block w-6 md:w-7 h-[2px] bg-white transition-opacity duration-300 ${isMobileOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 md:w-7 h-[2px] bg-white transition-transform duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
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
