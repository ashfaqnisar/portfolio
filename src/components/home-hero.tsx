"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { SiCodersrank, SiLeetcode } from "react-icons/si";

import { DevArena } from "@/components/interactive/dev-arena";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { defaultTransition, fadeInUp, scaleIn, staggerContainer } from "@/lib/motion";

import type { ReactElement } from "react";
import type { IconBaseProps, IconType } from "react-icons";

const socialLinks = [
  { name: "GitHub", icon: <AiOutlineGithub />, link: "https://github.com/ashfaqnisar" },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/ashfaqnisar/"
  },
  {
    name: "Stack Overflow",
    icon: <FaStackOverflow />,
    link: "https://stackoverflow.com/users/10963451/ashfaq-nisar"
  },
  {
    name: "Codersrank",
    icon: <SiCodersrank />,
    link: "https://profile.codersrank.io/user/ashfaqnisar"
  },
  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/ashfaqnisar/" },
  { name: "Medium", icon: <AiOutlineMedium />, link: "https://ashfaqnisar.medium.com" },
  { name: "YouTube", icon: <AiFillYoutube />, link: "https://www.youtube.com/@ashfaqnisar" },
  { name: "Twitter", icon: <AiOutlineTwitter />, link: "https://twitter.com/ashfaqnisar00" }
] satisfies { name: string; icon: ReactElement<IconType>; link: string }[];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border/40">
      <div className="container max-w-(--breakpoint-2xl) py-16 sm:py-24 lg:py-28">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <motion.div
            className="flex max-w-2xl flex-col gap-6 text-center lg:text-left"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp} transition={defaultTransition}>
              <p className="font-mono text-sm font-medium uppercase tracking-widest text-brand-light">
                Full Stack Developer
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-r from-brand-light to-brand-teal bg-clip-text text-transparent">
                  Ashfaq Nisar
                </span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                I architect and ship end-to-end web applications — from HIPAA-compliant healthcare
                platforms to high-scale billing systems — with a focus on performance, reliability,
                and clean developer experience.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <MapPin size={16} className="text-brand-light" />
              <span>Hyderabad, India · Open to remote opportunities</span>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-2 lg:justify-start"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <Badge variant="accent">6+ Years Experience</Badge>
              <Badge variant="accent">Google Cloud Certified</Badge>
              <Badge variant="outline">TypeScript · React · NestJS</Badge>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-3 lg:justify-start"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <Button href={site.resume} target="_blank" size="lg">
                View Resume
                <ArrowRight size={16} />
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="text-muted-foreground transition-colors hover:text-brand-light"
                >
                  {cloneElement(item.icon, {
                    size: 22,
                    className: "duration-200"
                  } as IconBaseProps)}
                </Link>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative shrink-0"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={scaleIn}
            transition={{ ...defaultTransition, delay: 0.15 }}
          >
            <div className="absolute -inset-4 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl ring-2 ring-brand/30 ring-offset-4 ring-offset-background">
              <Image
                className="h-56 w-56 object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                src="/images/profile.png"
                alt="Ashfaq Nisar — Full Stack Developer"
                width={400}
                height={400}
                priority
              />
            </div>
          </motion.div>
        </div>

        <DevArena />
      </div>
    </section>
  );
}
