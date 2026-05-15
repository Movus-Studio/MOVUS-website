import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { siteContact } from "@/content/site";

const socialLinks = [
  {
    label: "Instagram",
    href: siteContact.social.instagram,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-movus-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          {/* Brand + Contact */}
          <div className="lg:max-w-sm">
            <Logo variant="light" className="w-40 mb-6" />
            <p className="text-movus-black/70 leading-relaxed mb-10 text-lg">
              Όχι γυμναστήριο. Ένα σύστημα προπόνησης φτιαγμένο γύρω από τον στόχο σου, τον χρόνο σου, το σώμα σου.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-movus-black font-medium">
              <a href={`tel:${siteContact.phoneHref}`} className="hover:text-movus-orange-text transition-colors">
                {siteContact.phoneDisplay}
              </a>
              <a href={`mailto:${siteContact.email}`} className="hover:text-movus-orange-text transition-colors">
                {siteContact.email}
              </a>
            </div>
            <p className="mt-6 text-movus-black/60 text-sm">
              {siteContact.address.full}
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex gap-12 md:gap-24 flex-wrap">
            <div>
              <h3 className="text-lg font-semibold text-movus-orange-text mb-6">
                Σελίδες
              </h3>
              <ul className="space-y-4">
                <li><Link href="/" className="text-movus-black/70 hover:text-movus-orange-text transition-colors">Αρχική</Link></li>
                <li><Link href="/programs" className="text-movus-black/70 hover:text-movus-orange-text transition-colors">Προγράμματα</Link></li>
                <li><Link href="/about" className="text-movus-black/70 hover:text-movus-orange-text transition-colors">MOVUS | Για εμάς</Link></li>
                <li><Link href="/contact" className="text-movus-black/70 hover:text-movus-orange-text transition-colors">Επικοινωνία</Link></li>
                <li><Link href="/blog" className="text-movus-black/70 hover:text-movus-orange-text transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-movus-orange-text mb-6">
                Ωράριο
              </h3>
              <ul className="space-y-3 text-sm text-movus-black/70">
                <li>{siteContact.hours.weekdaysDisplay}</li>
                <li>{siteContact.hours.saturdayDisplay}</li>
                <li>{siteContact.hours.sundayDisplay}</li>
              </ul>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-movus-black/5 hover:bg-movus-orange hover:text-movus-white text-movus-black flex items-center justify-center transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-movus-black/60">
            © Copyright {new Date().getFullYear()} MOVUS. All Rights Reserved.
          </p>
          <p className="text-sm text-movus-black/60 flex items-center gap-2">
            Created by 
            <a href="https://k2o.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-movus-black hover:text-movus-orange-text transition-colors font-medium">
              <span className="w-6 h-6 rounded-full bg-movus-black text-white flex items-center justify-center text-[10px]">K₂O</span>
              K2O
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
