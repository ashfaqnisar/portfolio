import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container flex max-w-(--breakpoint-2xl) flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-brand-light"
            >
              {site.email}
            </Link>
            <Link
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-brand-light"
            >
              {site.phone}
            </Link>
            <span>{site.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-brand-light"
              aria-label="GitHub"
            >
              <AiOutlineGithub size={20} />
            </Link>
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-brand-light"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
