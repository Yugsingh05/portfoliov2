"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsWithLogos } from "@/lib/skills.lib";

const groupedByCategory = skillsWithLogos.reduce<Record<string, string[]>>(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  },
  {},
);

const mergedRows = [
  {
    title: "Full-Stack Development",
    description:
      "UI systems, APIs, auth, and real-time features used to build production-ready products.",
    categories: ["Frontend", "Backend"],
    focus: ["React.js", "Next.js", "Node.js", "Authentication (JWT, OAuth)"],
  },
  {
    title: "Data, Infra & Delivery",
    description:
      "Persistent data models, ORM workflows, and cloud-native deployment tooling.",
    categories: ["Database", "ORM", "DevOps", "Cloud"],
    focus: ["PostgreSQL", "Prisma", "Docker", "AWS"],
  },
  {
    title: "Engineering Foundation",
    description:
      "Core language strength, workflow tooling, observability, and architectural thinking.",
    categories: ["Languages", "Tools", "Monitoring", "Concepts"],
    focus: ["TypeScript", "GitHub", "Sentry", "System Design"],
  },
] as const;

const rows = mergedRows.map((row) => {
  const items = row.categories.flatMap((category) => groupedByCategory[category] ?? []);
  return { ...row, items };
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const SkillsLayout = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen px-6 md:px-16 py-20 text-zinc-900 bg-zinc-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-14 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950">
          Technical <span className="text-indigo-600">Skills</span>
        </h2>
        <p className="mt-4 text-zinc-600 max-w-2xl">
          A curated toolkit I use to design, build, and ship polished digital
          products.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {rows.map((row) => (
          <motion.div
            key={row.title}
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-zinc-300 hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-zinc-800">
                  {row.title}
                </h3>
                <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-600">
                  {row.description}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-500">
                {row.items.length} skills
              </span>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {row.focus.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="relative flex flex-wrap gap-2.5">
              {row.items.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    i < 3
                      ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                      : "border-zinc-200 bg-zinc-100 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-200"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsLayout;