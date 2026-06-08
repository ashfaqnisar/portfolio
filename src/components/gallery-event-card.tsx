"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { defaultTransition, fadeInUp, viewportOnce } from "@/lib/motion";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    year: string;
    description?: string;
    tag?: string;
    images: string[];
  };
  index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  const { images = [], tag } = event;
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group overflow-hidden rounded-xl border border-border/60 bg-card/50 transition-colors duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: (index % 8) * 0.04 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={images[0]!}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale-[30%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {tag && (
          <div className="absolute right-3 top-3">
            <Badge variant="accent">{tag}</Badge>
          </div>
        )}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 rounded-md bg-background/80 px-2 py-0.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            +{images.length - 1} photos
          </div>
        )}
      </div>
      <div className="space-y-2 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-semibold sm:text-lg">{event.title}</h2>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{event.year}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
      </div>
    </motion.article>
  );
}
