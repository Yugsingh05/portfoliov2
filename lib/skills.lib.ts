export type Skill = {
  name: string;
  category: string;
  logo: string;
};

export const CATEGORY_ORDER = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "ORM",
  "DevOps",
  "Cloud",
  "Tools",
  "Monitoring",
  "Concepts",
] as const;

export const skillsWithLogos: Skill[] = [
  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "TypeScript",
    category: "Languages",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "C++",
    category: "Languages",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },

  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React Native",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MUI",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Redux / Zustand",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "React Query (TanStack)",
    category: "Frontend",
    logo: "https://cdn.simpleicons.org/reactquery/FF4154",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Fastify",
    category: "Backend",
    logo: "https://cdn.simpleicons.org/fastify/000000",
  },
  {
    name: "REST API Design",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "WebSockets (Socket.io)",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "Authentication (JWT, OAuth)",
    category: "Backend",
    logo: "https://cdn.simpleicons.org/jsonwebtokens/000000",
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  // ORM
  {
    name: "Prisma",
    category: "ORM",
    logo: "https://cdn.simpleicons.org/prisma/2D3748",
  },
  {
    name: "Drizzle ORM",
    category: "ORM",
    logo: "https://cdn.simpleicons.org/drizzle/000000",
  },

  // DevOps
  {
    name: "Docker",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },

  // Cloud
  {
    name: "AWS",
    category: "Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Tools",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  // Monitoring
  {
    name: "Sentry",
    category: "Monitoring",
    logo: "https://cdn.simpleicons.org/sentry/362D59",
  },

  // Concepts
  {
    name: "System Design",
    category: "Concepts",
    logo: "https://cdn.simpleicons.org/amazonaws/232F3E",
  },
  {
    name: "Performance Optimization",
    category: "Concepts",
    logo: "https://cdn.simpleicons.org/lighthouse/F44B21",
  },
  {
    name: "Responsive Design",
    category: "Concepts",
    logo: "https://cdn.simpleicons.org/css3/1572B6",
  },
];
