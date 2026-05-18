import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { siteContact, siteCopy } from "@/content/site";

const PT_TITLE = "Personal Trainer Πάτρα | MOVUS Fitness Studio";
const PT_DESCRIPTION =
  "Personal trainer στην Πάτρα. Εξατομικευμένα πλάνα, ιδιαίτερα μαθήματα, τιμές personal training MOVUS. Ιερού Λόχου 1.";

export const metadata: Metadata = {
  title: { absolute: PT_TITLE },
  description: PT_DESCRIPTION,
  alternates: {
    canonical: "https://movus.gr/personal-training",
  },
  openGraph: {
    title: PT_TITLE,
    description: PT_DESCRIPTION,
  },
};

const FORMATS = [
  {
    name: "MOVUS PERSONAL",
    tagline: "2 άτομα, ένας coach.",
    body:
      "Δουλεύεις με τον coach στο πλευρό σου και έναν partner στον δικό σου στόχο. Σχεδόν πλήρης προσοχή, χτίσιμο σχέσης και κινήτρου, εξατομικευμένο πλάνο για κάθε άτομο ξεχωριστά.",
    href: "/programs/personal",
  },
  {
    name: "MOVUS PRIVATE",
    tagline: "1-on-1. Αποκλειστικά για εσένα.",
    body:
      "Όλο το πλάνο, η προπόνηση και η προσοχή είναι μόνο για σένα. Για όσους θέλουν μέγιστη εξατομίκευση, διακριτικότητα ή έχουν συγκεκριμένο deadline.",
    href: "/programs/private",
  },
];

const WHAT_YOU_GET = [
  "Αρχική αξιολόγηση: στόχος, επίπεδο, ιστορικό, διαθέσιμος χρόνος.",
  "Εξατομικευμένο πλάνο που εξελίσσεται κάθε 2 με 4 εβδομάδες.",
  "Ιδιαίτερα μαθήματα 1-on-1 ή σε δυάδα, με πιστοποιημένο coach.",
  "Στοχευμένη καθοδήγηση σε κάθε επανάληψη, με διόρθωση τεχνικής.",
  "Πρακτικές συμβουλές διατροφής, χρόνων γευμάτων και αποκατάστασης.",
  "Μετρήσεις και επαναξιολογήσεις για να βλέπεις τη διαφορά.",
];

export default function PersonalTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Personal Training Πάτρα",
            description: PT_DESCRIPTION,
            url: "https://movus.gr/personal-training",
            provider: { "@id": "https://movus.gr/#business" },
            areaServed: { "@type": "City", name: "Πάτρα" },
            serviceType: "Personal Training",
            category: "Fitness Training",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              {
                name: "Personal Training",
                url: "https://movus.gr/personal-training",
              },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-movus-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-dark-gray/70">
              <li>
                <Link href="/" className="hover:text-movus-orange-text transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-black">Personal Training</li>
            </ol>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Personal Training Πάτρα
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.02em] text-movus-black mb-6 leading-[0.95]">
            Personal Trainer.
            <br />
            <span className="text-movus-orange">Στην Πάτρα.</span>
          </h1>
          <p className="text-xl text-dark-gray max-w-2xl leading-relaxed">
            Εξατομικευμένη προπόνηση που χτίζει πλάνο πάνω σου. Όχι γενικό
            πρόγραμμα. Όχι τυχαίες ασκήσεις. Ο coach σε βλέπει σε κάθε επανάληψη,
            προσαρμόζει σε πραγματικό χρόνο και κρατά το επίπεδο εκεί που πρέπει.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
                Τι περιλαμβάνει η συνεργασία
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.01em] text-movus-navy mb-6 leading-[1.05]">
                Πλάνο πάνω σου. Όχι πάνω στον μέσο όρο.
              </h2>
              <p className="text-dark-gray leading-relaxed text-lg">
                Κάθε personal training session ξεκινά με έναν στόχο, έναν χρόνο
                και ένα σώμα: το δικό σου. Από εκεί και κάτω, ο coach γράφει το
                πλάνο και το προσαρμόζει συνεχώς. Δεν μπαίνεις σε ένα έτοιμο
                πρόγραμμα. Σου χτίζεται ένα.
              </p>
            </div>
            <ul className="space-y-3">
              {WHAT_YOU_GET.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg text-movus-navy bg-movus-white border border-light-gray rounded-xl px-5 py-4"
                >
                  <span className="text-movus-orange mt-1 text-2xl leading-none">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-movus-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Δύο formats
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.01em] text-movus-navy mb-12 leading-[1.05]">
            Διάλεξε πώς θες να δουλέψεις.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FORMATS.map((format) => (
              <Link
                key={format.name}
                href={format.href}
                className="group block bg-cream border border-light-gray rounded-2xl p-8 md:p-10 hover:border-movus-orange/40 hover:shadow-lg transition-all duration-300"
              >
                <h3
                  className="text-3xl md:text-4xl tracking-[-0.01em] text-movus-navy mb-2 uppercase"
                  style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSynthesis: "none" }}
                >
                  {format.name}
                </h3>
                <p className="text-lg text-movus-orange font-semibold mb-4">
                  {format.tagline}
                </p>
                <p className="text-dark-gray leading-relaxed mb-6">
                  {format.body}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.05em] text-movus-navy group-hover:text-movus-orange transition-colors">
                  Δες περισσότερα
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-movus-black py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Σε ποιον ταιριάζει
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.01em] text-movus-white mb-8 leading-[1.05]">
            Personal training για πραγματικούς ανθρώπους.
          </h2>
          <div className="space-y-5 text-lg text-medium-gray leading-relaxed">
            <p>
              Σε όσους ξεκινούν από την αρχή και θέλουν κάποιον δίπλα τους να
              τους δείξει σωστή τεχνική από την πρώτη μέρα.
            </p>
            <p>
              Σε όσους γυμνάζονται καιρό, έχουν φτάσει σε plateau και θέλουν
              πλάνο που τους ξεκολλάει.
            </p>
            <p>
              Σε επαγγελματίες με πιεσμένο πρόγραμμα που χρειάζονται 2 με 3
              στοχευμένες προπονήσεις την εβδομάδα, όχι 5 χλιαρές.
            </p>
            <p>
              Σε όσους επιστρέφουν μετά από τραυματισμό, εγκυμοσύνη ή διάλειμμα
              και χρειάζονται προσεκτική επανένταξη.
            </p>
          </div>
        </div>
      </section>

      {/* CTA + contact */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Ξεκίνα
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.01em] text-movus-navy mb-6 leading-[1.05]">
            Μία γνωριμία. Ένα πλάνο. Η πρώτη σου προπόνηση.
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            Στείλε μήνυμα ή κάλεσε. Συζητάμε στόχο, ώρες και format. Από εκεί
            και κάτω, ξεκινάς.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors"
            >
              {siteCopy.ctaBand.cta}
            </Link>
            <a
              href={`tel:${siteContact.phoneHref}`}
              className="inline-block bg-movus-navy hover:bg-movus-black text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors"
            >
              {siteContact.phoneDisplay}
            </a>
          </div>
          <p className="text-sm text-medium-gray mt-6">
            MOVUS, Ιερού Λόχου 1, 26331 Πάτρα.
          </p>
        </div>
      </section>
    </>
  );
}
