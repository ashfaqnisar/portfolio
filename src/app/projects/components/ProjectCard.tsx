"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { defaultTransition, fadeInUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

import type { Project } from "@/data/projects";

const ProjectCard = ({
  project: { name, description, tags },
  featured = false,
  index = 0
}: {
  project: Project;
  featured?: boolean;
  index?: number;
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group flex h-full flex-col rounded-xl border border-border/60 bg-card/50 p-5 transition-colors duration-200 hover:border-emerald-500/30 hover:bg-card/80 sm:p-6",
        featured && "ring-1 ring-emerald-500/20"
      )}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: (index % 6) * 0.05 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <div className="flex-1 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold sm:text-lg">{name}</h3>
          {featured && <Badge variant="accent">Featured</Badge>}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
