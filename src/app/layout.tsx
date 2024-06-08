import "./globals.css";

import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import TopBar from "./topbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}>
        <TopBar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
