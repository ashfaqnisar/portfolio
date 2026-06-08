import { achievements, education, experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";

export const site = {
  name: "Ashfaq Nisar",
  title: "Ashfaq Nisar — Full Stack Developer",
  tagline: "Full Stack Developer",
  description:
    "Full Stack Developer with 6+ years of experience building scalable web applications, HIPAA-compliant healthcare systems, and cloud-native solutions.",
  url: "https://ashfaqnisar.me",
  locale: "en_US",
  language: "en",
  email: "ashfaqnisar00@gmail.com",
  phone: "+91-8328277518",
  location: "Hyderabad, India",
  twitter: "@ashfaqnisar00",
  ogImage: "/images/profile.png",
  resume: "/Ashfaq_Resume.pdf",
  social: {
    github: "https://github.com/ashfaqnisar",
    linkedin: "https://www.linkedin.com/in/ashfaqnisar/",
    stackoverflow: "https://stackoverflow.com/users/10963451/ashfaq-nisar",
    medium: "https://ashfaqnisar.medium.com",
    leetcode: "https://leetcode.com/ashfaqnisar/",
    youtube: "https://www.youtube.com/@ashfaqnisar",
    twitter: "https://twitter.com/ashfaqnisar00"
  }
} as const;

export const pageMeta = {
  home: {
    title: site.title,
    description: site.description,
    path: "/"
  },
  projects: {
    title: "Projects",
    description:
      "Production systems and side projects by Ashfaq Nisar—invoice reconciliation, healthcare OCR, order management, ERP, IoT, and more.",
    path: "/projects"
  },
  gallery: {
    title: "Gallery",
    description:
      "Hackathons, workshops, and developer community events — Smart India Hackathon, NASA Space Apps, DevFest, and more.",
    path: "/gallery"
  }
} as const;

export type SiteRoute = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export const siteRoutes: SiteRoute[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "yearly", priority: 0.6 }
];

function buildKeywords(): string[] {
  const skillKeywords = skillCategories.flatMap((category) => category.skills);
  const roleKeywords = experience.map((job) => `${job.role} at ${job.company}`);
  const achievementKeywords = achievements.map((item) => item.split("—")[0]?.trim() ?? item);

  return [
    site.name,
    site.tagline,
    "Software Engineer",
    "Web Developer",
    site.location,
    ...roleKeywords,
    ...achievementKeywords,
    ...skillKeywords
  ];
}

export const siteKeywords = [...new Set(buildKeywords())];

export function getCurrentRole() {
  return experience[0];
}

export function getPersonJsonLd() {
  const currentRole = getCurrentRole();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}${site.ogImage}`,
    email: site.email,
    telephone: site.phone,
    jobTitle: currentRole?.role,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN"
    },
    worksFor: currentRole
      ? {
          "@type": "Organization",
          name: currentRole.company
        }
      : undefined,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school
    },
    sameAs: Object.values(site.social),
    knowsAbout: skillCategories.flatMap((category) => category.skills)
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: site.language,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url
    }
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: site.title,
    url: site.url,
    description: site.description,
    mainEntity: {
      "@type": "Person",
      name: site.name,
      url: site.url
    }
  };
}
