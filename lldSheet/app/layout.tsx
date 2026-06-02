import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mySystemDesign — Beginner to Advanced Architecture Tracker",
  description: "The ultimate interactive tracker to master Low-Level Design (LLD), High-Level Design (HLD), system architecture, and design patterns. Ace your tech interviews.",
  keywords: ["System Design", "Low Level Design", "High Level Design", "LLD", "HLD", "Software Architecture", "Design Patterns", "Tech Interview Prep", "FAANG Prep"],
  authors: [{ name: "Ankit" }],
  openGraph: {
    title: "mySystemDesign — Master System Architecture",
    description: "An interactive tracker to learn High-Level Design, Low-Level Design, and crack your software engineering interviews.",
    type: "website",
    siteName: "mySystemDesign",
  },
  twitter: {
    card: "summary_large_image",
    title: "mySystemDesign — Master System Architecture",
    description: "An interactive tracker to learn High-Level Design, Low-Level Design, and crack your software engineering interviews.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
