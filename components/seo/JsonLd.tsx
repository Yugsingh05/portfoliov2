import React from "react";
import { SITE_URL, sameAs, siteConfig } from "@/lib/site.lib";
import { projects } from "@/lib/projects.lib";

/**
 * Structured data (schema.org) for rich results and GEO / AI-search discovery.
 * Renders Person, WebSite, and ProfilePage + ItemList of projects.
 */
const JsonLd = () => {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: siteConfig.name,
    url: SITE_URL,
    jobTitle: siteConfig.jobTitle,
    email: `mailto:${siteConfig.email}`,
    description: siteConfig.description,
    image: `${SITE_URL}/newprofile.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.geo.placename,
      addressRegion: siteConfig.geo.addressRegion,
      addressCountry: siteConfig.geo.country,
    },
    sameAs,
    knowsAbout: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "AWS",
      "System Design",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${siteConfig.name} — Portfolio`,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${siteConfig.name} | ${siteConfig.jobTitle}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };

  const projectList = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#projects`,
    name: "Featured Projects",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.href,
        keywords: project.tags.join(", "),
        author: { "@id": `${SITE_URL}/#person` },
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, projectList],
  };

  return (
    <script
      type="application/ld+json"
      // Structured data must be serialized JSON.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
};

export default JsonLd;
