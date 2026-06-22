export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  subdescription: string;
  href: string;
  github?: string;
  tags: string[];
  features: string[];
  /**
   * Image paths live in /public/projects/<slug>/.
   * Drop your screenshots in those folders and they'll show up automatically.
   */
  images: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "9Rock — Jewelry E-commerce",
    category: "Full-Stack · AI E-commerce",
    description:
      "A leading online jewelry store offering a wide range of high-quality, stylish pieces for men and women. Built with a feature-rich admin dashboard, real-time inventory tracking, and secure payment workflows.",
    subdescription:
      "Architected a scalable system using Next.js, Fastify, PostgreSQL, and AWS — reducing page load time by ~45%.",
    href: "https://9rock.in/",
    tags: ["Next.js", "Fastify", "PostgreSQL", "AWS", "TypeScript"],
    features: [
      "Real-time inventory & order management",
      "Secure auth & payment workflows",
      "Performance optimized (~45% faster loads)",
    ],
    images: [
      "/projects/9rock/1.png",
      "/projects/9rock/2.png",
      "/projects/9rock/3.png",
      "/projects/9rock/4.png",
      "/projects/9rock/admin.png",
    ],
  },
  {
    id: 2,
    title: "PetZone — Premium Pet Supplies",
    category: "E-commerce · Frontend",
    description:
      "Your ultimate online destination for premium pet supplies, offering a vast selection of top brands in food, harnesses, toys, and grooming products with a loyalty rewards system.",
    subdescription:
      "Experience the convenience of modern pet care with a user-friendly interface and comprehensive features.",
    href: "https://petzone-mu.vercel.app/",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    features: [
      "Curated multi-brand catalog",
      "Loyalty points & rewards",
      "Fully responsive storefront",
    ],
    images: [
      "/projects/petzone/1.png",
      "/projects/petzone/2.png",
      "/projects/petzone/3.png",
      "/projects/petzone/4.png",
    ],
  },
  {
    id: 3,
    title: "FinSpend — Smart Finance Companion",
    category: "Fintech · AI Insights",
    description:
      "A modern finance management platform that simplifies budgeting and expense tracking with bill scanning, multi-account tracking, and AI-powered financial insights.",
    subdescription:
      "Helps users take full control of their money while enjoying a smooth and secure experience.",
    href: "https://finspend.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    features: [
      "AI-powered spending insights",
      "Bill scanning & email alerts",
      "Multi-account budgeting tools",
    ],
    images: [
      "/projects/finspend/1.png",
      "/projects/finspend/2.png",
      "/projects/finspend/3.png",
      "/projects/finspend/4.png",
    ],
  },
  {
    id: 4,
    title: "Belongify — Team Culture Platform",
    category: "SaaS · Frontend",
    description:
      "Dedicated to fostering inclusive workplace cultures by providing tools and strategies that enhance employee engagement and a sense of belonging.",
    subdescription:
      "Tailored solutions to help organizations build cohesive teams and improve overall performance.",
    href: "https://belongify-yug-singhs-projects.vercel.app/",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Employee engagement toolkit",
      "Inclusive culture analytics",
      "Clean, accessible UI",
    ],
    images: [
      "/projects/belongify/1.png",
      "/projects/belongify/2.png",
      "/projects/belongify/3.png",
      "/projects/belongify/4.png",
    ],
  },
];
