import htm5 from "@/public/experience/htm5.png";
import technovast from "@/public/experience/technovast.png";
import xmatiq from "@/public/experience/xmatiq.png";
import ninerock from "@/public/experience/9rocklogo3.jpg";

export const workExperiences = [
  {
    id: 1,
    name: "Hack the Mountains 5.0",
    pos: "1st Runner-Up – Healthcare Track",
    duration: "Sep 2024",
    title:
      "Developed a scalable web platform for pet owners to buy and sell pet-related products, focusing on seamless user experience and efficient product discovery. Collaborated in a high-pressure hackathon environment, securing 1st Runner-Up among 100+ teams.",
    img: htm5.src,
  },
  {
    id: 2,
    name: "Technovate for India",
    pos: "Top 5 Finalist – Innovation Pitch",
    duration: "Jan 2025",
    title:
      "Delivered a compelling product pitch to industry judges, showcasing problem-solving, business understanding, and communication skills. Ranked in Top 5 among multiple competing teams.",
    img: technovast.src,
  },
  {
    id: 3,
    name: "XMATIQ Technologies",
    pos: "Full Stack Developer Intern",
    duration: "Jan 2025 – Mar 2025",
    title:
      "Built and optimized Fiind.app by developing a scalable admin panel and implementing Redux for efficient state management. Improved routing performance and component reusability, resulting in smoother navigation and better maintainability.",
    img: xmatiq.src,
  },
  {
    id: 4,
    name: "XMATIQ Technologies",
    pos: "Full Stack Developer",
    duration: "Jul 2025 – Aug 2025",
    title:
      "Designed and developed an inventory management system handling product lifecycle, order tracking, and admin operations. Integrated custom payment webhook logic, reducing manual processing effort by ~60%. Also customized Shopify stores to enhance UI/UX and improve client conversion rates.",
    img: xmatiq.src,
  },
  {
    id: 5,
    name: "9Rock",
    pos: "Full Stack Developer",
    duration: "Aug 2025 – Present",
    title:
      "Leading end-to-end development of an AI-powered e-commerce platform for a jewelry brand. Architected a scalable system using Next.js, Fastify, PostgreSQL, and AWS. Built a feature-rich admin dashboard with real-time inventory tracking, order management, and analytics.\n\nOptimized performance through lazy loading, caching, and efficient API design, reducing page load time by ~45%. Implemented secure authentication and payment workflows, ensuring reliability and scalability.\n\nEnhanced user engagement with dynamic UI, animations (Framer Motion), and mobile-first design, contributing to increased customer retention and smoother purchasing experience.",
    img: ninerock.src,
  },
];
