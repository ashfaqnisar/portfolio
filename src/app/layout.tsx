import "./globals.css";

import { type ReactNode } from "react";
import { type Metadata } from "next";

import TopBar from "@/app/topbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Ashfaq Nisar",
  description: "Portfolio of Ashfaq Nisar",
  openGraph: {
    title: "Ashfaq Nisar",
    description: "Portfolio of Ashfaq Nisar",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", GeistSans.variable, GeistMono.variable)}>
        <ThemeProvider
          defaultTheme={"dark"}
          enableSystem
          attribute={"class"}
          disableTransitionOnChange>
          <TopBar />
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
