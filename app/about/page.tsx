import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/content/programs";
import { siteCopy } from "@/content/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Σχετικά",
  description:
    "High-tech EMS fitness studio στην Πάτρα. Η ιστορία μας και η φιλοσοφία μας για το μέλλον του fitness.",
  openGraph: {
    title: "Γιατί MOVUS Πάτρα – Η Ιστορία & Ομάδα μας",
    description:
      "High-tech EMS fitness studio στην Πάτρα. Από τη λατινική λέξη 'movere', να κινώ.",
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

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Γιατί MOVUS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            High‑tech EMS fitness
            <br />
            <span className="text-movus-orange">studio στην Πάτρα</span>
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
                  src="/images/studio-interior.webp"
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
                από τη λατινική λέξη <em>&ldquo;movere&rdquo;</em> που σημαίνει{" "}
                <em>&ldquo;να κινώ&rdquo;</em>. Για εμάς, όμως, είναι κάτι περισσότερο
                από κίνηση, είναι πρόοδος, ενέργεια και μεταμόρφωση.
              </p>
              <p>
                Στο MOVUS πιστεύουμε ότι η κίνηση πρέπει να είναι τρόπος ζωής αλλά
                όταν δεν είναι εφικτό απ&apos; όλους, πρέπει να είναι ευφυής,
                αποτελεσματική και εμπνευσμένη. Για τον λόγο αυτό, επαναπροσδιορίσαμε
                τον τρόπο που προπονούνται οι άνθρωποι.
              </p>
              <p>
                Συνδυάζουμε την πρωτοποριακή τεχνολογία Ηλεκτρομυϊκής Διέγερσης (EMS)
                με καινοτόμες ομαδικές συνεδρίες όπως Yoga, Pilates, functional και
                circuit training, όλα σχεδιασμένα ώστε να ταιριάζουν στους στόχους
                και στον τρόπο ζωής σας. Οι υψηλής τεχνολογίας στολές EMS μας και το
                καθηλωτικό Shape Space κάνουν κάθε συνεδρία πιο αποτελεσματική και
                εστιασμένη με στόχο να σας εξοικονομήσει χρόνο.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Fitness */}
      <section className="bg-movus-black py-20 md:py-28 lg:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Future of Fitness
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.01em] text-movus-white mb-10 leading-[1] max-w-3xl">
            Εκεί που η προσωπική σας διαδρομή συναντά την{" "}
            <span className="text-movus-orange">έξυπνη προπόνηση</span>
          </h2>
          <p className="text-xl text-medium-gray leading-relaxed max-w-3xl mb-12">
            Είτε ξεκινάτε από την αρχή είτε προσπαθείτε να ανακαλύψετε τα όρια σας,
            το MOVUS είναι το σημείο όπου η προσωπική σας διαδρομή συναντά την
            έξυπνη προπόνηση. Οι επαγγελματίες προπονητές μας προσαρμόζουν κάθε
            συνεδρία σε εσάς, ώστε να αισθάνεστε πιο δυνατοί, να κινείστε καλύτερα
            και να παραμένετε παρακινημένοι.
          </p>
          <blockquote className="border-l-4 border-movus-orange pl-6 md:pl-10 max-w-3xl">
            <p className="text-2xl md:text-3xl font-semibold text-movus-white leading-snug italic">
              &ldquo;This isn&apos;t just a workout. This is the future of fitness.
              Welcome to MOVUS.&rdquo;
            </p>
            <cite className="block mt-4 text-sm text-movus-orange not-italic font-medium uppercase tracking-wider">
             , MOVUS Team
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Programs teaser */}
      <section className="bg-movus-black py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Τα Προγράμματά μας
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.01em] text-movus-white mb-12">
            Εξερεύνησε τι προσφέρουμε
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
