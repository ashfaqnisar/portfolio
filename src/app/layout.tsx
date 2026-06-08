import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { type ReactNode } from "react";

import TopBar from "@/app/topbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { getPersonJsonLd, getProfilePageJsonLd, getWebsiteJsonLd } from "@/data/site";
import { createRootMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = createRootMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased", GeistSans.variable, GeistMono.variable)}
      >
        <JsonLd data={[getPersonJsonLd(), getWebsiteJsonLd(), getProfilePageJsonLd()]} />
        <ThemeProvider defaultTheme="dark" enableSystem attribute="class" disableTransitionOnChange>
          <div className="dev-grid relative flex min-h-screen flex-col">
            <TopBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
