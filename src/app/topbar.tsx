"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { LogoMark } from "@/components/logo-mark";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resume", href: "/Ashfaq_Resume.pdf", external: true }
] satisfies { name: string; href: string; external?: boolean }[];

const Topbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container max-w-screen-2xl">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight"
          >
            <LogoMark className="transition-colors group-hover:bg-emerald-500/20" />
            <span className="hidden text-foreground sm:inline">Ashfaq Nisar</span>
          </Link>

          <nav className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
