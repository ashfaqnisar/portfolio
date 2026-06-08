import { pageMeta, site, siteKeywords } from "@/data/site";

import type { Metadata } from "next";

type PageMetaKey = keyof typeof pageMeta;

type CreatePageMetadataOptions = {
  page: PageMetaKey;
  title?: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
};

function absoluteUrl(path: string) {
  return `${site.url}${path === "/" ? "" : path}`;
}

function formatTitle(title: string, path: string) {
  if (path === "/") {
    return title;
  }

  return `${title} | ${site.name}`;
}

export function createPageMetadata({
  page,
  title,
  description,
  keywords,
  noIndex = false
}: CreatePageMetadataOptions): Metadata {
  const config = pageMeta[page];
  const resolvedTitle = title ?? config.title;
  const resolvedDescription = description ?? config.description;
  const resolvedPath = config.path;
  const fullTitle = formatTitle(resolvedTitle, resolvedPath);
  const url = absoluteUrl(resolvedPath);
  const resolvedKeywords = keywords ?? siteKeywords;

  return {
    title: fullTitle,
    description: resolvedDescription,
    keywords: resolvedKeywords,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    applicationName: site.name,
    category: "technology",
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description: resolvedDescription,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: site.ogImage,
          width: 400,
          height: 400,
          alt: `${site.name} — ${site.tagline}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      creator: site.twitter,
      images: [site.ogImage]
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
          }
        }
  };
}

export function createRootMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    ...createPageMetadata({ page: "home" }),
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
    },
    manifest: "/manifest.webmanifest",
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    }
  };
}

export { absoluteUrl, formatTitle };
