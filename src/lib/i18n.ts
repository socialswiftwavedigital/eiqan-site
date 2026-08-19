export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

// Builds a locale-aware href. English (default locale) URLs stay unprefixed
// (e.g. "/bus-rental") since the proxy rewrites them internally to /en — the
// prefix only shows up in the browser for non-default locales (e.g. "/ar/bus-rental").
export function localeHref(locale: Locale, href: string) {
  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }
  if (locale === defaultLocale) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

// Strips a locale prefix off a pathname to get the canonical (English) path,
// e.g. "/ar/bus-rental" -> "/bus-rental", "/ar" -> "/".
export function stripLocale(pathname: string) {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}
