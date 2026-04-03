import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programs } from "@/content/programs";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) return { title: "Πρόγραμμα" };

  return {
    title: program.title,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | MOVUS`,
      description: program.shortDescription,
    },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              name: program.title,
              description: program.shortDescription,
              slug: program.slug,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Προγράμματα", url: "https://movus.gr/programs" },
              {
                name: program.title,
                url: `https://movus.gr/programs/${program.slug}`,
              },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-medium-gray">
              <li>
                <Link href="/" className="hover:text-movus-white transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-movus-white transition-colors"
                >
                  Προγράμματα
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-white">{program.title}</li>
            </ol>
          </nav>

          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange bg-movus-orange/10 px-3 py-1 rounded-full mb-4">
            {program.tag}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-4">
            {program.title}
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl">
            {program.shortDescription}
          </p>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="bg-movus-black">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
            <Image
              src={program.image}
              alt={program.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-movus-black py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-movus-white mb-4">
                  Τι είναι
                </h2>
                <p className="text-medium-gray leading-relaxed text-lg">
                  {program.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-movus-white mb-4">
                  Πώς λειτουργεί
                </h2>
                <p className="text-medium-gray leading-relaxed text-lg">
                  {program.howItWorks}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-movus-white mb-4">
                  Για ποιους είναι
                </h2>
                <p className="text-medium-gray leading-relaxed text-lg">
                  {program.whoItsFor}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-movus-navy/50 border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-movus-white mb-4">
                  Αναμενόμενα αποτελέσματα
                </h3>
                <p className="text-medium-gray leading-relaxed mb-6">
                  {program.resultsTimeline}
                </p>
                <a
                  href="https://booking.movus.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-6 py-4 rounded-lg transition-colors duration-200"
                >
                  Κλείσε Δοκιμαστικό
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
