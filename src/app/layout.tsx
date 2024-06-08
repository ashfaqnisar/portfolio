import "./globals.css";

import { type ReactNode } from "react";
import { Inter, Roboto_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import TopBar from "./topbar";

import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap"
});

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
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className={"bg-zinc-950"}>
        <TopBar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
