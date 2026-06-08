import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container flex max-w-screen-2xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ashfaq Nisar. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/ashfaqnisar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-emerald-400"
            aria-label="GitHub"
          >
            <AiOutlineGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ashfaqnisar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-emerald-400"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={20} />
          </Link>
          <Link
            href="mailto:ashfaqnisar00@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-emerald-400"
          >
            ashfaqnisar00@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
