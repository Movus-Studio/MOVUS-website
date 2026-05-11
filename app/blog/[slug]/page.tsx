import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { siteCopy } from "@/content/site";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Άρθρο" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | MOVUS Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: post.title,
              description: post.excerpt,
              slug: post.slug,
              datePublished: post.datePublished,
              dateModified: post.dateModified,
              category: post.category,
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
              { name: "Blog", url: "https://movus.gr/blog" },
              { name: post.title, url: `https://movus.gr/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <article>
        <header className="bg-movus-black pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="mx-auto max-w-[800px] px-5 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-medium-gray">
                <li>
                  <Link href="/" className="hover:text-movus-white transition-colors">
                    Αρχική
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-movus-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-movus-white truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange bg-movus-orange/10 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-medium-gray">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[1.05]">
              {post.title}
            </h1>
            <p className="text-lg text-medium-gray leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between gap-4 text-sm text-medium-gray pt-4 border-t border-white/5">
              <span>
                By <strong className="text-movus-white">{post.author}</strong>
              </span>
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("el-GR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="bg-movus-black pb-12">
          <div className="mx-auto max-w-[1000px] px-5 md:px-8">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/program-ems.webp"
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 1000px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-[800px] px-5 md:px-8">
            <div className="text-dark-gray leading-[1.8] text-lg">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-black text-movus-navy mt-12 mb-4 tracking-[-0.01em]"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").map((l) => l.replace(/^- /, ""));
                  return (
                    <ul key={index} className="list-disc pl-6 my-6 space-y-2">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="mb-5">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Inline CTA */}
            <div className="mt-12 bg-movus-white border border-light-gray rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold text-movus-navy mb-2">
                Θέλεις να δοκιμάσεις;
              </h3>
              <p className="text-dark-gray mb-6">
                Επικοινώνησε μαζί μας και κλείσε την πρώτη σου συνεδρία.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-lg transition-colors"
              >
                {siteCopy.ctaBand.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="bg-movus-black py-20 md:py-24">
            <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.01em] text-movus-white mb-10">
                Συνεχίστε να διαβάζετε
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block bg-movus-navy/50 border border-white/5 rounded-xl overflow-hidden hover:border-movus-orange/30 transition-all duration-300"
                  >
                    <div className="p-6">
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange bg-movus-orange/10 px-2.5 py-1 rounded-full mb-3">
                        {p.category}
                      </span>
                      <h3 className="text-lg font-bold text-movus-white mb-2 group-hover:text-movus-orange transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-medium-gray leading-relaxed line-clamp-3">
                        {p.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
