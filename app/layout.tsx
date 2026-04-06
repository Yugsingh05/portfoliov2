import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import img1 from '@/public/newprofile.jpeg'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yug Singh | Full Stack Developer Portfolio",
    template: "%s | Yug Singh",
  },

  description:
    "Yug Singh is a Full Stack Developer specializing in Next.js, React, Fastify, and PostgreSQL. Explore projects, AI-powered applications, and scalable web solutions.",

  keywords: [
    "Yug Singh",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "AI Projects",
    "Ecommerce Developer",
    "Fastify",
    "PostgreSQL",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Yug Singh" }],
  creator: "Yug Singh",

  openGraph: {
    title: "Yug Singh | Full Stack Developer",
    description:
      "Explore Yug Singh's portfolio featuring scalable web apps, AI-powered platforms, and modern full-stack projects.",
    url: "https://yugsingh.com",
    siteName: "Yug Singh Portfolio",
    images: [
      {
        url: img1.src, 
        width: 1200,
        height: 630,
        alt: "Yug Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yug Singh | Full Stack Developer",
    description:
      "Building scalable web apps, AI platforms, and modern digital experiences.",
    images: [img1.src],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://yugsingh.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
