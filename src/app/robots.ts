import { site } from "@/data/site";

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"]
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}
