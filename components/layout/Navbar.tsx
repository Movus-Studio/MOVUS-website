import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "Αρχική", href: "/" },
  {
    label: "Προγράμματα",
    href: "/programs",
    children: [
      { label: "Όλα τα προγράμματα", href: "/programs" },
      { label: "EMS", href: "/programs#ems" },
      { label: "Personal", href: "/programs#personal" },
      { label: "Ομαδικά", href: "/programs#group" },
    ],
  },
  { label: "Σχετικά", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Επικοινωνία", href: "/contact" },
];

export function Navbar() {
  return (
    <>
      {/* TOP LEFT LOGO — sits inside the FrameMask logo island (160×54 / 228×74). */}
      <div
        className="fixed left-0 w-[160px] md:w-[228px] h-[54px] md:h-[74px] z-[110] flex items-center pointer-events-auto group"
        style={{ padding: '20px 24px 14px 24px', top: 'env(safe-area-inset-top)' }}
      >
        <Link
          href="/"
          aria-label="MOVUS"
          className="pointer-events-auto w-full block transform group-hover:scale-[1.03] transition-transform duration-300"
        >
          <Logo variant="dark" className="w-full md:w-[160px]" />
        </Link>
      </div>

      {/* TOP RIGHT HAMBURGER — pure HTML/CSS toggle. Label flips the hidden
          #movus-menu-toggle checkbox in layout.tsx; CSS in globals.css reacts
          via :has(). No JS dependency. */}
      <label
        htmlFor="movus-menu-toggle"
        aria-label="Άνοιγμα/Κλείσιμο μενού"
        className="movus-burger fixed right-0 w-[64px] md:w-[88px] h-[54px] md:h-[75px] z-[10002] flex items-center justify-center cursor-pointer [-webkit-tap-highlight-color:transparent]"
        style={{ top: 'env(safe-area-inset-top)', touchAction: 'manipulation' }}
      >
        <div className="relative flex flex-col gap-[5px] pointer-events-none">
          <span className="movus-burger-line movus-burger-line-top block w-6 md:w-7 h-[2px] bg-white transition-transform duration-300" />
          <span className="movus-burger-line movus-burger-line-mid block w-6 md:w-7 h-[2px] bg-white transition-opacity duration-300" />
          <span className="movus-burger-line movus-burger-line-bot block w-6 md:w-7 h-[2px] bg-white transition-transform duration-300" />
        </div>
      </label>

      {/* Mobile Menu — always rendered, CSS-controlled visibility. */}
      <MobileMenu navItems={navItems} />
    </>
  );
}
