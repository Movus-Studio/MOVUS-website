import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog";
import { siteCopy } from "@/content/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips για Fitness, EMS, Ομαδικά και Διατροφή από το MOVUS Πάτρα.",
  openGraph: {
    title: "Blog MOVUS Πάτρα | Tips για Fitness, EMS, Ομαδικά και Διατροφή",
    description:
      "Άρθρα για EMS, διατροφή, fitness tips και αποτελέσματα από τους ειδικούς του MOVUS.",
  },
};

const categoryColors: Record<string, string> = {
  EMS: "bg-movus-orange/10 text-movus-orange",
  Διατροφή: "bg-movus-orange/10 text-movus-orange",
  "Fitness Tips": "bg-movus-orange/10 text-movus-orange",
  Αποτελέσματα: "bg-movus-orange/10 text-movus-orange",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Blog", url: "https://movus.gr/blog" },
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
              <li className="text-movus-white">Blog</li>
            </ol>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            MOVUS Journal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            Tips για Fitness, EMS,
            <br />
            <span className="text-movus-orange">Ομαδικά και Διατροφή</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl leading-relaxed">
            Γνώση και πρακτικές συμβουλές από την ομάδα μας στην Πάτρα. Τα πάντα
            για την EMS και τη φυσική κατάσταση.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="bg-cream py-20 md:py-24">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-movus-white rounded-2xl overflow-hidden border border-light-gray hover:border-movus-orange/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                <Image
                  src="/images/program-ems.webp"
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${
                      categoryColors[featured.category] || "bg-cream text-dark-gray"
                    }`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs text-medium-gray">{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-[-0.01em] text-movus-navy mb-4 group-hover:text-movus-orange transition-colors leading-[1.1]">
                  {featured.title}
                </h2>
                <p className="text-dark-gray leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between gap-4 text-sm text-medium-gray">
                  <span>
                    By <strong className="text-movus-navy">{featured.author}</strong>
                  </span>
                  <time dateTime={featured.datePublished}>
                    {new Date(featured.datePublished).toLocaleDateString("el-GR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other posts */}
      {rest.length > 0 && (
        <section className="bg-cream pb-20 md:pb-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-movus-white border border-light-gray rounded-xl overflow-hidden hover:border-movus-orange/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-light-gray relative overflow-hidden">
                    <Image
                      src="/images/program-ems.webp"
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${
                          categoryColors[post.category] || "bg-cream text-dark-gray"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-medium-gray">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-movus-navy mb-2 group-hover:text-movus-orange transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-dark-gray leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <time
                      dateTime={post.datePublished}
                      className="block text-xs text-medium-gray mt-4"
                    >
                      {new Date(post.datePublished).toLocaleDateString("el-GR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-movus-black py-20 md:py-28">
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
