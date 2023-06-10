import "./globals.css";
import { ReactNode } from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import TopBar from "./topbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional"
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "optional"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <body className={"bg-black/60"}>
        <TopBar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
