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
      "Payment reconciliation platform for Adani Ports—each invoice gets a dedicated virtual account, with Razorpay webhooks writing into PostgreSQL and an admin dashboard for audit logs and immutable transaction history. Dockerized deployments; cut manual payment validation by about 50%.",
    tags: ["React", "Fastify", "PostgreSQL", "Razorpay", "Docker"],
    featured: true
  },
  {
    id: "esocr",
    name: "Exact Sciences OCR (ESOCR)",
    description:
      "OCR pipeline for patient intake forms at Exact Sciences—handwritten and printed fields, validated in a Next.js UI as data is extracted. Built synthetic training sets to improve the Nanonets model and raised field-level accuracy by 40% on the hardest handwriting samples.",
    repo: "https://github.com/ashfaqnisar/ESOCR",
    website: "https://esocr.vercel.app/",
    tags: ["Next.js", "Express", "Nanonets", "Firebase", "OCR"],
    featured: true
  },
  {
    id: "order_management_system",
    name: "Order Management System",
    description:
      "Operations hub for customers, vendors, products, orders, and inventory—one GraphQL API on Express/MongoDB instead of scattered spreadsheets. React dashboard gives teams live stock and fulfillment visibility across the supply chain.",
    tags: ["React", "GraphQL", "Express", "MongoDB", "TypeScript"],
    featured: true
  },
  {
    id: "return_order_system",
    name: "Return Order Management System",
    description:
      "Spring Boot microservices for return authorization, inspection, and restock when goods arrive damaged or defective. Split into focused services with Thymeleaf admin views—built to handle volume without a monolithic bottleneck.",
    repo: "https://github.com/ashfaqnisar/Return-Order-Management-System",
    tags: ["Java", "Spring Boot", "Maven", "Thymeleaf", "Microservices"]
  },
  {
    id: "college_erp",
    name: "College ERP",
    description:
      "Campus ERP for 1,000+ students, faculty, and staff—admissions, academic records, examination scheduling, and role-based access. React front end with Firebase Functions and Firestore handling enrollment workflows and notifications.",
    tags: ["React", "Firestore", "Firebase Functions", "Express"]
  },
  {
    id: "dsc_vjit",
    name: "DSC VJIT Community Site",
    description:
      "Public site for VJIT's Developer Student Club—workshops, team pages, and event listings students could actually find. Integrated with the GDG Aura community dashboard so organizers could update content without redeploying the site.",
    repo: "https://github.com/ashfaqnisar/dsc-vjit-website",
    tags: ["Next.js", "Firestore", "Vue.js"]
  },
  {
    id: "enimo",
    name: "Enimo — Energy Monitoring",
    description:
      "IoT energy monitor that streams per-appliance consumption into Firebase via Pub/Sub. React dashboard charts usage in real time so households can compare device draw and spot waste before the bill arrives.",
    repo: "https://github.com/ashfaqnisar/enimo",
    tags: ["React", "IoT", "Firebase", "Pub/Sub"]
  },
  {
    id: "mars_habitat",
    name: "Mars Habitat Environment",
    description:
      "Unreal Engine walkthrough simulating life-support tradeoffs in a Mars colony—resource loops, habitat layout, and environmental constraints. Won NASA Space Apps Challenge Hyderabad 2018 out of 85 teams.",
    tags: ["Unreal Engine", "C#", "Game Dev"]
  },
  {
    id: "kiosk",
    name: "KIOSK Wastage Recycler",
    description:
      "Java CLI for campus kiosk drop-off points—operators log waste type, weight, and category from the terminal. Built as lightweight tooling for a sustainability pilot where tracking intake mattered more than a full web app.",
    tags: ["Java", "Maven"]
  }
];
