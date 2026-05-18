"use client";

import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface MobileMenuProps {
  navItems: NavItem[];
}

// Mobile menu. Visibility flipped by the #movus-menu-toggle checkbox in
// app/layout.tsx via :has() in globals.css. Link clicks close the menu by
// programmatically unchecking the toggle — nesting <Link> inside a <label
// for=...> caused iOS Safari to swallow the navigation.
const closeMenu = () => {
  const toggle = document.getElementById("movus-menu-toggle");
  if (toggle instanceof HTMLInputElement) toggle.checked = false;
};

export function MobileMenu({ navItems }: MobileMenuProps) {
  return (
    <div className="movus-mobile-menu fixed inset-0 z-[10001] bg-movus-black">
      {/* Backdrop label — clicking outside the menu (or pressing the X) closes it */}
      <label
        htmlFor="movus-menu-toggle"
        aria-label="Κλείσιμο μενού"
        className="absolute inset-0 cursor-pointer"
      />

      <div className="relative h-full flex">
        {/* Left, navigation + contact */}
        <div
          className="flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-20"
          style={{
            paddingTop: "calc(env(safe-area-inset-top) + 5rem)",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 5rem)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-24">
            <div>
              <p
                className="text-movus-white/50 mb-6"
                style={{ fontSize: "var(--text-caption)" }}
              >
                Menu
              </p>
              <nav className="space-y-1">
                {navItems.map((item) =>
                  item.children?.length ? (
                    <details key={item.href} className="movus-nav-group group">
                      <summary
                        className="flex items-center gap-3 cursor-pointer list-none uppercase tracking-[-0.01em] text-3xl md:text-4xl lg:text-5xl text-movus-white hover:text-movus-orange transition-colors duration-200 py-2 [&::-webkit-details-marker]:hidden"
                        style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSynthesis: "none" }}
                      >
                        <span>{item.label}</span>
                        <svg
                          className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <ul className="mt-1 mb-3 ml-1 border-l border-movus-white/15 pl-5 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className="block text-lg md:text-xl text-movus-white/80 hover:text-movus-orange transition-colors duration-200 py-1.5"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block uppercase tracking-[-0.01em] text-3xl md:text-4xl lg:text-5xl text-movus-white hover:text-movus-orange transition-colors duration-200 py-2"
                      style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSynthesis: "none" }}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </div>

            <div>
              <p
                className="text-movus-white/50 mb-6"
                style={{ fontSize: "var(--text-caption)" }}
              >
                Socials
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.instagram.com/movusfitness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-movus-white hover:text-movus-orange transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/movus.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-movus-white hover:text-movus-orange transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p
              className="text-movus-white/50 mb-4"
              style={{ fontSize: "var(--text-caption)" }}
            >
              Contact
            </p>
            <a
              href="mailto:info@movus.gr"
              className="block text-movus-white font-medium hover:text-movus-orange transition-colors text-xl md:text-2xl mb-1"
            >
              info@movus.gr
            </a>
            <a
              href="tel:+302611814010"
              className="block text-movus-white font-medium hover:text-movus-orange transition-colors text-xl md:text-2xl"
            >
              +30 2611 81 4010
            </a>
          </div>
        </div>

        {/* Right, image */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="/images/menu-photo.webp"
            alt="MOVUS EMS Training"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
    </div>
  );
}
