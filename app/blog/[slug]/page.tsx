import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
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
              {
                name: post.title,
                url: `https://movus.gr/blog/${post.slug}`,
              },
            ])
          ),
        }}
      />

      {/* Article header */}
      <article>
        <header className="bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-[800px] px-5 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-medium-gray">
                <li>
                  <Link
                    href="/"
                    className="hover:text-movus-white transition-colors"
                  >
                    Αρχική
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-movus-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-movus-white truncate max-w-[200px]">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange bg-movus-orange/10 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-medium-gray">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.02em] text-movus-white mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-medium-gray">{post.excerpt}</p>
            <time
              dateTime={post.datePublished}
              className="block text-sm text-medium-gray mt-4"
            >
              {new Date(post.datePublished).toLocaleDateString("el-GR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Featured image placeholder */}
        <div className="bg-movus-black pb-8">
          <div className="mx-auto max-w-[800px] px-5 md:px-8">
            <div className="aspect-[16/9] rounded-xl bg-movus-navy border border-white/5 flex items-center justify-center text-medium-gray/50 text-sm">
              [Blog: Featured image for &ldquo;{post.title}&rdquo;]
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-[800px] px-5 md:px-8">
            <div className="prose prose-lg max-w-none text-dark-gray leading-relaxed">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-movus-navy mt-10 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-movus-white border border-light-gray rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-movus-navy mb-2">
                Θέλεις να δοκιμάσεις;
              </h3>
              <p className="text-dark-gray mb-4">
                Η πρώτη δοκιμαστική συνεδρία EMS είναι δωρεάν.
              </p>
              <a
                href="https://booking.movus.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Κλείσε Δοκιμαστικό
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
