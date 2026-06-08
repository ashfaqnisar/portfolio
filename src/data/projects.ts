export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  website?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "adani",
    name: "Adani Ports Invoice Reconciliation",
    description:
      "Per-invoice virtual account mapping with PostgreSQL and Razorpay for automated reconciliation. Admin dashboard with audit logging, immutable transaction history, and Dockerized deployments—cutting manual validation by 50%.",
    tags: ["React", "Fastify", "PostgreSQL", "Razorpay", "Docker"],
    featured: true
  },
  {
    id: "esocr",
    name: "Exact Sciences OCR (ESOCR)",
    description:
      "COTS OCR solution extracting data from handwritten and system-generated patient forms. Next.js front end with real-time field validation, synthetic training data generation, and 40% accuracy improvement.",
    repo: "https://github.com/ashfaqnisar/ESOCR",
    website: "https://esocr.vercel.app/",
    tags: ["Next.js", "Express", "Nanonets", "Firebase", "OCR"],
    featured: true
  },
  {
    id: "order_management_system",
    name: "Order Management System",
    description:
      "Centralized platform for managing customers, vendors, products, orders, and inventory—streamlining operations and improving visibility across the supply chain.",
    tags: ["React", "GraphQL", "Express", "MongoDB", "TypeScript"],
    featured: true
  },
  {
    id: "return_order_system",
    name: "Return Order Management System",
    description:
      "Microservices-based system for returning defective or damaged goods, built for performance and scalability with Spring Boot.",
    repo: "https://github.com/ashfaqnisar/Return-Order-Management-System",
    tags: ["Java", "Spring Boot", "Maven", "Thymeleaf", "Microservices"]
  },
  {
    id: "college_erp",
    name: "College ERP",
    description:
      "Enterprise resource planning for 1,000+ students, faculty, and staff with examination scheduling and academic management features.",
    tags: ["React", "Firestore", "Firebase Functions", "Express"]
  },
  {
    id: "dsc_vjit",
    name: "DSC VJIT Community Site",
    description:
      "Dynamic website for the Developer Student Club integrated with the GDG Aura Community Dashboard for workshops, teams, and event pages.",
    repo: "https://github.com/ashfaqnisar/dsc-vjit-website",
    tags: ["Next.js", "Firestore", "Vue.js"]
  },
  {
    id: "enimo",
    name: "Enimo — Energy Monitoring",
    description:
      "IoT energy monitoring system with real-time appliance consumption tracking and intuitive chart visualizations.",
    repo: "https://github.com/ashfaqnisar/enimo",
    tags: ["React", "IoT", "Firebase", "Pub/Sub"]
  },
  {
    id: "mars_habitat",
    name: "Mars Habitat Environment",
    description:
      "Immersive game environment simulating Mars colonization—winner of NASA Space Apps Challenge 2018 among 85 teams.",
    tags: ["Unreal Engine", "C#", "Game Dev"]
  },
  {
    id: "kiosk",
    name: "KIOSK Wastage Recycler",
    description:
      "Java CLI application for managing and monitoring various wastage types through an intuitive command-line interface.",
    repo: "https://github.com/ashfaqnisar/Return-Order-Management-System",
    tags: ["Java", "Maven"]
  }
];
