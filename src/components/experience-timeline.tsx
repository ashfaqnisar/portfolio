"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

import type { Experience } from "@/data/experience";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative space-y-8 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-border sm:before:left-[11px]"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {items.map((job, index) => (
        <motion.article
          key={job.id}
          className="relative pl-8 sm:pl-12"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: index * 0.03 }}
        >
          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-brand bg-background sm:h-5 sm:w-5" />
          <div className="rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-colors hover:border-brand/30 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p className="font-medium text-brand-light">{job.company}</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>{job.period}</p>
                {job.location && <p>{job.location}</p>}
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">{job.summary}</p>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-muted-foreground before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-brand"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
