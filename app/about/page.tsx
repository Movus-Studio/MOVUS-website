import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Σχετικά",
  description:
    "Γνώρισε το MOVUS — το premium EMS fitness studio στην Πάτρα. Η ιστορία μας, η φιλοσοφία μας, η ομάδα μας.",
  openGraph: {
    title: "Σχετικά | MOVUS",
    description:
      "Γνώρισε το MOVUS — το premium EMS fitness studio στην Πάτρα.",
  },
};

const team = [
  {
    name: "Placeholder Trainer 1",
    role: "Head Coach",
    certification: "ΤΕΦΑΑ Πιστοποίηση",
    specialization: "EMS & Functional Training",
  },
  {
    name: "Placeholder Trainer 2",
    role: "EMS Specialist",
    certification: "ΤΕΦΑΑ Πιστοποίηση",
    specialization: "Body Composition & Nutrition",
  },
  {
    name: "Placeholder Trainer 3",
    role: "Coach",
    certification: "ΤΕΦΑΑ Πιστοποίηση",
    specialization: "Athletic Performance",
  },
];

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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-6">
            Αυτό είναι το{" "}
            <span className="text-movus-orange">MOVUS</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl">
            Δημιουργήσαμε τον χώρο που θέλαμε να υπάρχει στην Πάτρα — ένα studio
            όπου η τεχνολογία συναντά την εξειδίκευση για αποτελέσματα που
            πραγματικά μετράνε.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
                Η Ιστορία μας
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.01em] text-movus-navy mb-6">
                Η πρώτη γνωριμία μας με την EMS άλλαξε τα πάντα
              </h2>
              <div className="space-y-4 text-dark-gray leading-relaxed">
                <p>
                  Το MOVUS ξεκίνησε από μια απλή πεποίθηση: η γυμναστική δεν
                  πρέπει να είναι βάρος στο πρόγραμμά σου — πρέπει να είναι η
                  καλύτερη στιγμή της μέρας σου.
                </p>
                <p>
                  Μετά από χρόνια εμπειρίας στον χώρο του fitness, ανακαλύψαμε
                  την τεχνολογία EMS και είδαμε πώς μπορεί να αλλάξει τον τρόπο
                  που γυμνάζονται οι άνθρωποι. 20 λεπτά αντί για 2 ώρες.
                  Αποτελέσματα αντί για εξάντληση.
                </p>
                <p>
                  Φέραμε τον κορυφαίο εξοπλισμό i-Motion από την Ισπανία,
                  στελεχώσαμε την ομάδα μας με πιστοποιημένους γυμναστές ΤΕΦΑΑ,
                  και δημιουργήσαμε ένα χώρο premium — γιατί αξίζεις καλύτερα
                  από το μέσο γυμναστήριο.
                </p>
              </div>
            </div>
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
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-movus-black py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Φιλοσοφία
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.01em] text-movus-white mb-6">
            Smarter, not harder
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Πιστεύουμε ότι η πρόοδος δεν μετριέται σε ώρες — μετριέται σε
            αποτελέσματα. Η τεχνολογία EMS μας επιτρέπει να πετύχουμε
            περισσότερα σε λιγότερο χρόνο, χωρίς συμβιβασμούς.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Η Ομάδα
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.01em] text-movus-navy mb-12">
            Πιστοποιημένοι επαγγελματίες
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-movus-white border border-light-gray rounded-xl overflow-hidden"
              >
                <div className="aspect-[3/4] bg-light-gray flex items-center justify-center text-medium-gray text-sm">
                  [Trainer photo: {member.name}]
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-movus-navy">
                    {member.name}
                  </h3>
                  <p className="text-movus-orange text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-movus-orange-light text-movus-orange px-2 py-1 rounded-full">
                      {member.certification}
                    </span>
                    <span className="text-xs bg-cream text-dark-gray px-2 py-1 rounded-full">
                      {member.specialization}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-movus-black py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Ο Χώρος
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.01em] text-movus-white mb-12">
            Δες τον χώρο μας
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/studio-interior.webp", alt: "MOVUS studio — κύριος χώρος", span: true },
              { src: "/images/studio-training.webp", alt: "Προπόνηση με EMS στολή", span: false },
              { src: "/images/studio-night.webp", alt: "MOVUS studio βράδυ", span: false },
              { src: "/images/shapespace-red.webp", alt: "Shape Space μηχάνημα", span: false },
              { src: "/images/program-group.webp", alt: "Ομαδική προπόνηση", span: false },
              { src: "/images/ems-suits.webp", alt: "EMS στολές i-Motion", span: false },
            ].map((img, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden relative ${
                  img.span
                    ? "col-span-2 aspect-[16/9]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={img.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-movus-navy py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.01em] text-movus-white mb-4">
            Έλα να μας γνωρίσεις
          </h2>
          <p className="text-medium-gray text-lg mb-8 max-w-lg mx-auto">
            Η πρώτη δοκιμαστική συνεδρία είναι δωρεάν. Κλείσε τη δική σου τώρα.
          </p>
          <a
            href="https://booking.movus.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors duration-200"
          >
            Κλείσε Δοκιμαστικό
          </a>
        </div>
      </section>
    </>
  );
}
