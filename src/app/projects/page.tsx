import ProjectCard from "@/app/projects/components/ProjectCard";

const projects = [
  {
    id: "esocr",
    name: "Exact Sciences OCR",
    description:
      "Built an OCR Solution for Exact Sciences to automating the patients data directly into the system rather than manual input.",
    repo: "https://github.com/ashfaqnisar/ESOCR",
    website: "https://esocr.vercel.app/",
    tags: ["react", "nodejs", "nanonets"]
  },
  {
    id: "return_order_system",
    name: "Return Order Management System",
    description:
      "Built an Return Order System to return the defective or damaged goods back to the seller. Developed the application using various microservices.",
    repo: "https://github.com/ashfaqnisar/Return-Order-Management-System",
    tags: ["java", "maven", "SpringBoot", "thymeleaf"]
  },
  {
    id: "adani",
    name: "Adani Ports Invoicing System",
    description:
      "Built the invoicing system, to deal with invoices, payments, settlements and managing money in the wallets for Adani Ports during Hackathon",
    tags: ["react", "firestore", "express", "razorpay"]
  },
  {
    id: "college_erp",
    name: "College ERP",
    description:
      "Developed an ERP for the college to maintain all the info about the students, staff and fees.Also built the arrangement of the students for examinations.",
    tags: ["react", "firestore", "firebase Functions", "express js"]
  },
  {
    id: "dsc_vjit",
    name: "DSC VJIT Community Site",
    description:
      "Built an dynamic website for the DSC VJIT college club. Integrated the site to Open Source Aura Community Dashboard. ",
    repo: "https://github.com/ashfaqnisar/dsc-vjit-website",
    tags: ["next JS", "firestore", "firebase Functions", "vue JS"]
  },
  {
    id: "kiosk",
    name: "KIOSK Wastage Recycler",
    description:
      "Developed an java project to manage the various types of wastage provided to the KIOSK. Built an command line user interface for the user to interact with.",
    repo: "https://github.com/ashfaqnisar/Return-Order-Management-System",
    tags: ["java", "maven"]
  },
  {
    id: "enimo",
    name: "Enimo",
    description:
      "Developed the app for managing & monitoring the amount of energy consumed by the appliances.",
    repo: "https://github.com/ashfaqnisar/enimo",
    tags: ["react", "firestore", "pyrebase"]
  },
  {
    id: "mars_habitat",
    name: "Mars Habitat Environment",
    description: "Built a Game Environment to explore the colonization of Mars.",
    tags: ["UnRealEngine"]
  }
];

const Page = () => {
  return (
    <div className={"w-full px-4 pb-8 sm:pt-16"}>
      <div className={"md:container md:mx-auto"}>
        <h1
          className={
            "py-4 text-center text-lg font-bold tracking-tight duration-150 sm:text-left sm:text-xl md:text-2xl"
          }
        >
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
