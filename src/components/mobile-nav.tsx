"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resume", href: "/Ashfaq_Resume.pdf", external: true }
] satisfies { name: string; href: string; external?: boolean }[];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-base transition-colors",
                    pathname === item.href
                      ? "bg-brand/10 font-medium text-brand-light"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
