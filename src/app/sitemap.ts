import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { navItems, siteConfig } from "@/lib/site";
import { locales, localeHref } from "@/lib/i18n";

function languageAlternates(path: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${siteConfig.url}${localeHref(locale, path)}`])
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = navItems.flatMap((item) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${localeHref(locale, item.href)}`,
      lastModified: new Date(),
      changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: item.href === "/" ? 1 : 0.8,
      alternates: languageAlternates(item.href),
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.flatMap((post) => {
    const path = `/blog/${post.slug}`;
    return locales.map((locale) => ({
      url: `${siteConfig.url}${localeHref(locale, path)}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: languageAlternates(path),
    }));
  });

  return [...staticRoutes, ...blogRoutes];
}
