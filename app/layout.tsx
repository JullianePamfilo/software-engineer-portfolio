import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jullianepamfilo.github.io"),
  title: "Julliane Pamfilo | Software Engineer",
  description:
    "Software engineer building high-performance full-stack systems, cloud-native products, and AI-powered experiences.",
  keywords: [
    "Julliane Pamfilo",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Cloud Engineer",
    "Node.js Developer",
    "AI Engineer",
    "RAG",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: "Julliane Pamfilo" }],
  creator: "Julliane Pamfilo",
  publisher: "Julliane Pamfilo",
  applicationName: "Julliane Pamfilo Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jullianepamfilo.github.io",
    title: "Julliane Pamfilo | Software Engineer",
    description:
      "Software engineer building high-performance full-stack systems, cloud-native products, and AI-powered experiences.",
    siteName: "Julliane Pamfilo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julliane Pamfilo | Software Engineer",
    description:
      "Software engineer building high-performance full-stack systems, cloud-native products, and AI-powered experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#06070A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jullianepamfilo.github.io" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#06070A] text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}