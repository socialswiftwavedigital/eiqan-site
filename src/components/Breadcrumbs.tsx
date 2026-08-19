import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";
import { localeHref, type Locale } from "@/lib/i18n";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({
  items,
  light = true,
  lang = "en",
}: {
  items: Crumb[];
  light?: boolean;
  lang?: Locale;
}) {
  const homeLabel = lang === "ar" ? "الرئيسية" : "Home";
  const trail: Crumb[] = [{ label: homeLabel, href: "/" }, ...items];

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: `${siteConfig.url}${localeHref(lang, crumb.href)}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className={light ? "text-white/30" : "text-dark/30"}>
                    /
                  </span>
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={light ? "text-white/85" : "text-dark/85"}
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={localeHref(lang, crumb.href)}
                    className={
                      light
                        ? "text-white/55 hover:text-teal"
                        : "text-dark/55 hover:text-teal"
                    }
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
