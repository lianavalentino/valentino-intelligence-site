import type { Metadata } from "next";
import { Public_Sans, Zilla_Slab } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Practical AI and automation for small businesses — Valentino Intelligence",
  description:
    "Find out where automation pays off in your business. A two-week, fixed-price plan for owners of 5–75 person businesses, from Liana Valentino in Beaverton, Oregon.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${zillaSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans text-body sm:text-body-lg">
        {children}
      </body>
    </html>
  );
}
