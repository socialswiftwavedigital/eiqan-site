import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { CTASection } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [post.image],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: `${siteConfig.url}${post.image}`,
          datePublished: post.date,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              light={false}
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-teal">
              {post.category}
            </span>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-dark text-balance sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-dark/50">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>

            <div className="prose-content mt-10 space-y-5">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-base leading-7 text-dark/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
