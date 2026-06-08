import { ArrowRight } from "lucide-react";

import ProjectCard from "@/app/projects/components/ProjectCard";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ page: "projects" });

const Page = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="container max-w-(--breakpoint-2xl) py-12 sm:py-16">
      <SectionHeader
        label="Projects"
        title="Things I've built"
        description="A selection of production systems, client deliverables, and side projects spanning healthcare, fintech, education, and IoT."
      />

      {featured.length > 0 && (
        <div className="mb-12">
          <h3 className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-brand-light">
            Featured
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <ProjectCard key={project.id} project={project} featured index={index} />
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground">
          More Projects
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-border/60 bg-card/50 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold">Want to see more?</p>
          <p className="text-sm text-muted-foreground">
            Check out my GitHub for additional repos and contributions.
          </p>
        </div>
        <Button href="https://github.com/ashfaqnisar" target="_blank" variant="outline">
          View GitHub
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Page;
