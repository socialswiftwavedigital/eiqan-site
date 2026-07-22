import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on student transportation, corporate shuttle programs, fleet management, and transport safety from the EIQAN team.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="EIQAN Blog"
        title="Insights on Safer, Smarter Transportation"
        description="Practical guidance on student transportation, corporate shuttles, fleet management, and safety technology."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-black/8 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-teal">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-dark">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-dark/65">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-dark/50">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-teal">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
