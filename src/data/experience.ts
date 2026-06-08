export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    id: "rhythm",
    company: "Rhythm Healthcare",
    role: "Full Stack Engineer",
    period: "Jul 2023 – Present",
    location: "Hyderabad, India",
    summary:
      "Building HIPAA-compliant full-stack solutions for cardiac care and EHR systems serving 400,000+ patients and practitioners.",
    highlights: [
      "Designed an AI-driven medical triage system with AWS Bedrock, processing 10,000+ HL7/XML transmissions daily via SQS with full audit logging.",
      "Architected a React 18 + TypeScript front end from scratch, migrating 400+ components from Chakra UI to Mantine with Redux Toolkit and RTK Query.",
      "Migrated a 2M+ record billing system to a normalized relational schema, cutting manual corrections by 80% with zero downtime.",
      "Integrated SWC into NestJS, reducing build times from 5 minutes to ~2–3 minutes and cold starts by 70%.",
      "Optimized Bitbucket pipelines with Turborepo caching, cutting build time by 40%."
    ],
    tech: ["React", "TypeScript", "NestJS", "AWS", "Redux Toolkit", "Okta", "PostgreSQL"]
  },
  {
    id: "ezerka",
    company: "Ezerka Technology Solutions",
    role: "Technical Lead & Co-founder",
    period: "Sep 2021 – Jul 2023",
    location: "Hyderabad, India",
    summary:
      "Co-founded and led a 5–8 engineer team delivering full-stack MERN applications for diverse client projects.",
    highlights: [
      "Built advanced PDF report generation with @react-pdf/renderer and automated E2E testing with Playwright in CI/CD.",
      "Increased OCR model accuracy by 40% through synthetic training dataset generation for handwritten form processing.",
      "Owned backend reliability with PostgreSQL triggers, mentoring engineers on Git, CI/CD, and scalable architecture.",
      "Served as primary technical contact for clients—documentation, requirements alignment, and delivery risk mitigation."
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Playwright", "Tailwind CSS"]
  },
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst Trainee",
    period: "Dec 2020 – Aug 2021",
    location: "Hyderabad, India",
    summary:
      "Revamped Verizon's enterprise email infrastructure with data-driven HTML templates, Spring Boot microservices, and React dashboards.",
    highlights: [
      "Built Spring Boot microservices for template rendering, data binding, and outbound email delivery.",
      "Created 20+ dynamic HTML email templates for promotional, transactional, and customer communications.",
      "Developed React interfaces enabling non-technical teams to preview and dispatch campaigns independently.",
      "Conducted workshops on Spring Boot microservices and React patterns for internal adoption."
    ],
    tech: ["Java", "Spring Boot", "React", "Microservices", "CI/CD"]
  },
  {
    id: "rubicon",
    company: "Rubicon Red",
    role: "Software Developer Intern",
    period: "Dec 2019 – Apr 2020",
    location: "Hyderabad, India",
    summary:
      "Modernized a logistics application by migrating React class components to hooks-based functional components.",
    highlights: [
      "Led migration of an enterprise 3PL client app from class to functional components with Hooks.",
      "Delivered critical dashboard features under aggressive deadlines with designers, QA, and PMs.",
      "Improved maintainability with reusable components and custom ESLint rules for coding standards."
    ],
    tech: ["React", "JavaScript", "ESLint"]
  }
];

export const achievements = [
  "Google Cloud Associate Engineer certified",
  "Smart India Hackathon 2020 — 1st Prize",
  "Smart India Hackathon 2019 — Finalist",
  "Google Developer Student Club Lead (India)",
  "IBM Hack 2019 — Best UI/UX Design Award",
  "NASA Space Apps Challenge 2018 — Winner (Mars Habitat game)"
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "Vidya Jyothi Institute of Technology",
  period: "2016 – 2020",
  location: "Hyderabad, India"
};
