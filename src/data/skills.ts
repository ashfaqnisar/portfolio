export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript",
      "Java",
      "React",
      "Next.js",
      "tRPC",
      "NestJS",
      "Spring Boot",
      "Fastify",
      "GraphQL"
    ]
  },
  {
    title: "UI & Tooling",
    skills: [
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "React Hook Form",
      "Vite",
      "SWC",
      "ESLint",
      "Prettier",
      "Turborepo"
    ]
  },
  {
    title: "Databases & ORMs",
    skills: ["PostgreSQL", "Firebase", "TypeORM", "Drizzle ORM", "MongoDB"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Bitbucket",
      "Vercel",
      "Sentry",
      "New Relic",
      "Better Auth",
      "Auth0",
      "Okta",
      "Clerk"
    ]
  },
  {
    title: "Testing",
    skills: ["Vitest", "Jest", "Cypress", "Playwright"]
  }
];
