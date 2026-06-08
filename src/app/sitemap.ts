import { site, siteRoutes } from "@/data/site";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority
  }));
}
