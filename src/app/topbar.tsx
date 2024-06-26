"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Projects",
    href: "/projects"
  },
  {
    name: "Gallery",
    href: "/gallery"
  },
  {
    name: "Resume",
    href: "Ashfaq_Resume.pdf",
    external: true
  }
] satisfies { name: string; href: string; external?: boolean }[];

const Topbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="top-0 z-30 w-full backdrop-blur sm:fixed">
      <div className="container max-w-screen-2xl">
        <div className="flex flex-col items-center justify-between gap-2 pt-6 sm:h-20 sm:flex-row sm:pt-0">
          <Link
            href="/"
            className={
              "bg-gradient-to-t from-zinc-100/60 to-white bg-clip-text py-4 text-center font-sans text-3xl font-black tracking-tighter text-transparent sm:text-4xl"
            }>
            AN
          </Link>
          <nav className="flex grow items-center">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 sm:justify-end">
              {navigation.map((item) => (
                <li className="" key={item.href}>
                  <Link
                    className={`flex items-center px-2 py-2 text-sm duration-200 hover:text-zinc-50 sm:px-3 sm:text-base ${pathname === item.href ? "font-medium text-zinc-50" : "text-zinc-400"}`}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
