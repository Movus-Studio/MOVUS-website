import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Άρθρα για EMS, διατροφή, fitness tips και αποτελέσματα. Μάθε τα πάντα για την ηλεκτρομυοδιέγερση στο blog του MOVUS.",
  openGraph: {
    title: "Blog | MOVUS",
    description:
      "Άρθρα για EMS, διατροφή, fitness tips και αποτελέσματα από τους ειδικούς του MOVUS.",
  },
};

const categoryColors: Record<string, string> = {
  EMS: "bg-movus-orange/10 text-movus-orange",
  Διατροφή: "bg-cyan/10 text-cyan",
  "Fitness Tips": "bg-purple/10 text-purple",
  Αποτελέσματα: "bg-success/10 text-success",
};

export default function BlogPage() {
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl">
            Γνώση, tips και αποτελέσματα. Τα πάντα για την EMS και τη φυσική
            κατάσταση.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-movus-white border border-light-gray rounded-xl overflow-hidden hover:border-movus-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-light-gray flex items-center justify-center text-medium-gray/50 text-sm">
                  [Blog: Featured image for &ldquo;{post.title}&rdquo;]
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
                    <span className="text-xs text-medium-gray">
                      {post.readTime}
                    </span>
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
    </>
  );
}
