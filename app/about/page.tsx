import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/content/programs";
import { siteCopy } from "@/content/site";
import { aboutFAQ } from "@/content/faq";
import { FAQ } from "@/components/sections/FAQ";
import { Experience } from "@/components/sections/Experience";
import { MovusTech } from "@/components/sections/MovusTech";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const ABOUT_TITLE = "Ποιοι είμαστε. EMS Fitness Studio Πάτρα";
const ABOUT_DESCRIPTION =
  "Πιστοποιημένοι προπονητές EMS και personal training στην Πάτρα. Δες τη φιλοσοφία, την ομάδα και τον χώρο του MOVUS.";

export const metadata: Metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  alternates: {
    canonical: "https://movus.gr/about",
  },
  openGraph: {
    title: `${ABOUT_TITLE} | MOVUS`,
    description: ABOUT_DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Σχετικά", url: "https://movus.gr/about" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(aboutFAQ)) }}
      />

      {/* Hero */}
      <section className="bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-medium-gray">
              <li>
                <Link href="/" className="hover:text-movus-white transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-white">Σχετικά</li>
            </ol>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Γιατί MOVUS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            Δεν είναι ένα απλό γυμναστήριο, αλλά
            <br />
            <span className="text-movus-orange">πρωτοποριακό EMS fitness studio</span> στην Πάτρα.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/movus-studio-interior.webp"
                  alt="Εσωτερικό του MOVUS studio στην Πάτρα"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-6 text-dark-gray leading-[1.8] text-lg">
              <p>
                Το όνομα <strong className="text-movus-navy">MOVUS</strong> προέρχεται
                από τη λατινική λέξη <em>&ldquo;movere&rdquo;</em>: <em>να κινώ</em>.
                Για εμάς όμως είναι κάτι περισσότερο από κίνηση. Είναι πρόοδος,
                ενέργεια και μεταμόρφωση.
              </p>
              <p>
                Πιστεύουμε ότι η προπόνηση δεν χρειάζεται να είναι ώρες χαμένου
                χρόνου. Πρέπει να είναι έξυπνη, στοχευμένη, αποτελεσματική. Για
                αυτό φτιάξαμε το MOVUS.
              </p>
              <p>
                Συνδυάζουμε EMS i-Motion, Pilates και functional training με το
                MOVUS Shape Space, πέντε τεχνολογίες σε μία συνεδρία. Κάθε
                πρόγραμμα γραμμένο γύρω από τον στόχο σου, τον χρόνο σου, το σώμα
                σου.
              </p>
              <p className="text-movus-navy font-semibold">
                Λιγότερος χρόνος, περισσότερη δουλειά.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience (moved from homepage) */}
      <Experience />

      {/* MOVUS Tech (moved from homepage) */}
      <MovusTech />

      {/* Future of Fitness */}
      <section className="bg-movus-black py-20 md:py-28 lg:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Future of Fitness
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.01em] text-movus-white mb-10 leading-[1] max-w-3xl">
            Από πού ξεκινάς δεν έχει σημασία.{" "}
            <span className="text-movus-orange">Πού θες να φτάσεις, έχει.</span>
          </h2>
          <p className="text-xl text-medium-gray leading-relaxed max-w-3xl mb-12">
            Αρχάριος ή επαγγελματίας αθλητής, ο coach σου χτίζει το πλάνο πάνω
            σου. Σε κάθε επανάληψη, σε κάθε κίνηση, σε κάθε λεπτομέρεια. Από
            την πρώτη μέρα ξέρεις τι κάνεις και γιατί.
          </p>
          <blockquote className="border-l-4 border-movus-orange pl-6 md:pl-10 max-w-3xl">
            <p className="text-2xl md:text-3xl font-semibold text-movus-white leading-snug italic">
              &ldquo;This isn&apos;t just a workout. This is the future of fitness.
              Welcome to MOVUS.&rdquo;
            </p>
            <cite className="block mt-4 text-sm text-movus-orange not-italic font-medium uppercase tracking-wider">
              MOVUS Team
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Programs teaser */}
      <section className="bg-movus-black py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Τα προγράμματα
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.01em] text-movus-white mb-12">
            Εννέα προγράμματα. Ένα σύστημα.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group block bg-movus-navy/50 border border-white/5 rounded-xl overflow-hidden hover:border-movus-orange/30 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-movus-white mb-2 group-hover:text-movus-orange transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs text-medium-gray leading-relaxed line-clamp-3">
                    {program.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={aboutFAQ}
        image="/images/movus-studio-interior.webp"
        imageAlt="MOVUS studio interior - high-tech EMS fitness Πάτρα"
        helperText="Όλα όσα θέλεις να ξέρεις για το MOVUS, τη φιλοσοφία μας και την ομάδα που θα σε καθοδηγήσει."
      />

      {/* CTA */}
      <section className="bg-movus-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="bg-movus-orange rounded-3xl px-8 md:px-16 py-14 md:py-20 text-center">
            <p className="text-movus-white/80 text-sm mb-3 tracking-wider">
              {siteCopy.tagline}
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.01em] text-movus-white mb-4 leading-[1.05]">
              {siteCopy.ctaBand.hook}
            </h2>
            <p className="text-lg text-movus-white/90 mb-8 max-w-2xl mx-auto">
              {siteCopy.ctaBand.body}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-movus-black hover:bg-movus-navy text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors"
            >
              {siteCopy.ctaBand.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
