"use client";

import { motion, useReducedMotion } from "framer-motion";

import { defaultTransition, fadeInUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: "div" | "section" | "article";
}

export function FadeInView({ children, className, delay = 0, id, as = "div" }: FadeInViewProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      id={id}
      className={cn(className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}
