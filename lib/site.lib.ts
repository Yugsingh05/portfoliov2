import { socials, CONTACT_EMAIL, LOCATION } from "@/lib/socials.lib";

export const SITE_URL = "https://yugsingh.com";

export const siteConfig = {
  name: "Yug Singh",
  jobTitle: "Full Stack Developer",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  location: LOCATION,
  description:
    "Yug Singh is a Full Stack Developer specializing in Next.js, React, Fastify, and PostgreSQL. Explore projects, AI-powered applications, and scalable web solutions.",
  // Geo coordinates for Gandhinagar, Gujarat, India (used for GEO SEO).
  geo: {
    region: "IN-GJ",
    placename: "Gandhinagar",
    latitude: 23.2156,
    longitude: 72.6369,
    country: "India",
    addressRegion: "Gujarat",
  },
} as const;

export const sameAs = socials.map((s) => s.href);
