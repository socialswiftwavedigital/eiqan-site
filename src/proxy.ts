import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// A single Vercel deployment can be reached via several hostnames at once:
// the eiqan.com custom domain AND the default *.vercel.app URL for that same
// build. VERCEL_ENV alone can't tell them apart (both report "production"),
// so we check the actual request Host header and stop search engines from
// indexing anything that isn't the canonical domain.
const CANONICAL_HOSTS = ["www.eiqan.com", "eiqan.com"];

// All routes live under app/[lang]/*, but English (the default locale) keeps
// its existing unprefixed URLs (e.g. /bus-rental) for SEO/backlink continuity
// — we rewrite those internally to /en/* without changing the visible URL.
// Only non-default locales (e.g. /ar/bus-rental) show a prefix.
const PRELOAD_SKIP = /\.[a-zA-Z0-9]+$/; // favicon.ico, robots.txt, sitemap.xml, images, etc.

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") ?? "").split(":")[0];
  const { pathname } = request.nextUrl;

  let response: NextResponse;

  const needsLocaleRewrite =
    !pathname.startsWith("/ar") &&
    !pathname.startsWith("/en") &&
    !pathname.startsWith("/_next") &&
    !PRELOAD_SKIP.test(pathname);

  if (needsLocaleRewrite) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    response = NextResponse.rewrite(url);
  } else {
    response = NextResponse.next();
  }

  if (!CANONICAL_HOSTS.includes(hostname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image).*)",
};
