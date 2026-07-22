import type { MetadataRoute } from "next";
import { isProdDeployment, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isProdDeployment) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
