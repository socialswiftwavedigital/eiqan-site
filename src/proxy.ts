import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// A single Vercel deployment can be reached via several hostnames at once:
// the eiqan.com custom domain AND the default *.vercel.app URL for that same
// build. VERCEL_ENV alone can't tell them apart (both report "production"),
// so we check the actual request Host header and stop search engines from
// indexing anything that isn't the canonical domain.
const CANONICAL_HOSTS = ["www.eiqan.com", "eiqan.com"];

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") ?? "").split(":")[0];
  const response = NextResponse.next();

  if (!CANONICAL_HOSTS.includes(hostname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image).*)",
};
