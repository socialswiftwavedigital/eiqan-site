import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import { blogPosts, blogPostsAr } from "@/lib/blog";
import { buildMetadata, localeHref, resolveLocale, type Locale } from "@/lib/i18n";

const metaText: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Blog",
    description:
      "Insights on student transportation, corporate shuttle programs, fleet management, and transport safety from the EIQAN team.",
  },
  ar: {
    title: "المدونة",
    description:
      "أفكار ورؤى حول نقل الطلاب وبرامج نقل الموظفين وإدارة الأسطول وسلامة النقل من فريق إيقان.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  return buildMetadata({
    lang,
    path: "/blog",
    title: metaText[lang].title,
    description: metaText[lang].description,
    image: "/images/slide-4.jpg",
  });
}

const text = {
  en: {
    heroEyebrow: "EIQAN Blog",
    heroTitle: "Insights on Safer, Smarter Transportation",
    heroDescription: "Practical guidance on student transportation, corporate shuttles, fleet management, and safety technology.",
    breadcrumb: "Blog",
    read: "Read",
  },
  ar: {
    heroEyebrow: "مدونة إيقان",
    heroTitle: "رؤى حول نقل أكثر أماناً وذكاءً",
    heroDescription: "إرشادات عملية حول نقل الطلاب ونقل الموظفين وإدارة الأسطول وتقنية السلامة.",
    breadcrumb: "المدونة",
    read: "اقرأ",
  },
};

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLocale((await params).lang);
  const t = text[lang];
  const posts = lang === "ar" ? blogPostsAr : blogPosts;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
        breadcrumbs={[{ label: t.breadcrumb, href: "/blog" }]}
        image="/images/slide-4.jpg"
        lang={lang}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={localeHref(lang, `/blog/${post.slug}`)}
                className="group overflow-hidden rounded-2xl border border-black/8 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                      {new Date(post.date).toLocaleDateString(
                        lang === "ar" ? "ar-SA" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-teal">
                      {t.read} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
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
