import ProjectCard from "@/app/projects/components/ProjectCard";

import type { Metadata } from "next";

const projects: {
  id: string;
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  image?: string;
  website?: string;
}[] = [
  {
    id: "order_management_system",
    name: "Order Management System",
    description:
      "Developed an order management system designed to streamline operations and increase efficiency. The platform allows users to manage customers, vendors, and products in one centralized location, making it easier to track orders and inventory levels of the products.",
    tags: ["react", "graphql", "express", "mongo", "typescript"]
  },
  {
    id: "esocr",
    name: "Exact Sciences OCR",
    description:
      "ESOCR was a COTS OCR solution designed to extract information from both handwritten and system-generated patient application forms and insert it into the system, in-order to reduce human error and time needed for manual data entry.",
    repo: "https://github.com/ashfaqnisar/ESOCR",
    tags: ["react", "express", "nanonets", "firebase"],
    website: "https://esocr.vercel.app/"
  },
  {
    id: "return_order_system",
    name: "Return Order Service System",
    description:
      "Created a Return Order System to facilitate the return of defective or damaged goods to the seller. The application was built using various microservices for optimal performance and scalability",
    repo: "https://github.com/ashfaqnisar/Return-Order-Management-System",
    tags: ["java", "maven", "SpringBoot", "thymeleaf"]
  },
  {
    id: "adani",
    name: "Adani Ports Invoice Reconciliation System",
    description:
      "APIRS is a system designed to streamline the invoicing and payment process for both customers and the Adani Ports billing team. Its goal is to ensure accurate and timely payments while reducing the time and effort required to manage invoices and payments.",
    tags: ["react", "firebase", "express", "razorpay"]
  },
  {
    id: "college_erp",
    name: "College ERP",
    description:
      "Designed and Implemented an ERP (Enterprise Resource Planning) system that maintains detailed information on over 1,000 students, faculty, and staff. The system includes an arrangement feature that facilitates scheduling and management of student examinations.",
    tags: ["react", "firestore", "firebase Functions", "express"]
  },
  {
    id: "dsc_vjit",
    name: "DSC VJIT Community Site",
    description:
      "Built a dynamic website for the DSC (Developer Student Club), which was integrated with the GDG Aura Community Dashboard. Due to this integration, we were able to leverage additional features from the dashboard, including seamless management of workshops, teams, and custom pages for the events",
    repo: "https://github.com/ashfaqnisar/dsc-vjit-website",
    tags: ["next JS", "firestore", "Vue JS"]
  },
  {
    id: "kiosk",
    name: "KIOSK Wastage Recycler",
    description:
      "Developed a Java project to manage various types of wastage provided to the KIOSK, featuring a command-line user interface for user interaction. The system enables efficient handling and monitoring of different types of wastage through an intuitive interface.",
    repo: "https://github.com/ashfaqnisar/Return-Order-Management-System",
    tags: ["java", "maven"]
  },
  {
    id: "enimo",
    name: "Enimo",
    description:
      "Enimo is an energy information and monitoring system designed to help users monitor the energy consumption of their appliances. The system provides real-time updates on the energy consumed by each appliance and displays the data in easy-to-read charts.",
    repo: "https://github.com/ashfaqnisar/enimo",
    tags: ["react", "IOT", "firebase", "Pub-Sub"]
  },
  {
    id: "mars_habitat",
    name: "Mars Habitat Environment",
    description:
      "Designed and built a game environment to simulate the colonization of Mars, providing users with an immersive experience. The game environment features a range of technical elements and challenges, enabling players to explore and learn about the challenges of colonizing the red planet.",
    tags: ["UnrealEngine", "C#"]
  }
];

export const metadata: Metadata = {
  title: "Ashfaq Nisar - Projects",
  description: "Projects developed by Ashfaq Nisar",
  openGraph: {
    title: "Ashfaq Nisar - Projects",
    description: "Projects developed by Ashfaq Nisar",
    url: "https://ashfaqnisar.com/projects"
  }
};

const Page = () => {
  return (
    <div className={"w-full px-4 pb-8 sm:pt-16"}>
      <div className={"md:container md:mx-auto"}>
        <h1
          className={
            "py-4 text-center text-lg font-bold tracking-tight duration-150 sm:text-left sm:text-xl md:text-2xl"
          }>
          Projects
        </h1>
        <div className={"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
