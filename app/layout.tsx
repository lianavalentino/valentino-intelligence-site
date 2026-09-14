import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valentino-intelligence-site.vercel.app"),
  title: "Valentino Intelligence · AI and automation for owner-led businesses",
  description:
    "I turn the data and busywork in your business into systems that run on their own. You keep approving.",
  openGraph: {
    title: "Valentino Intelligence",
    description:
      "AI and automation for owner-led businesses. Systems that run on their own; you keep approving.",
    url: "/",
    siteName: "Valentino Intelligence",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans text-body sm:text-body-lg">
        {children}
      </body>
    </html>
  );
}
