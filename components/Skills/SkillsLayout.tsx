"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CATEGORY_ORDER,
  skillsWithLogos,
  type Skill,
} from "@/lib/skills.lib";

const skillsByCategory = CATEGORY_ORDER.reduce<Record<string, Skill[]>>(
  (acc, category) => {
    const skills = skillsWithLogos.filter((skill) => skill.category === category);
    if (skills.length > 0) acc[category] = skills;
    return acc;
  },
  {},
);

const categories = Object.keys(skillsByCategory);

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = skill.name
    .split(/[\s/()]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className="group"
    >
      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-zinc-200 bg-white px-3 py-5 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-indigo-200 hover:shadow-[0_16px_40px_-20px_rgba(99,102,241,0.35)] sm:px-4 sm:py-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-100 group-hover:bg-white sm:mb-4 sm:h-16 sm:w-16">
          {!imgError ? (
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={40}
              height={40}
              className="h-8 w-8 object-contain sm:h-10 sm:w-10"
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : (
            <span className="text-xs font-bold tracking-wide text-indigo-600 sm:text-sm">
              {initials}
            </span>
          )}
        </div>

        <p className="relative text-center text-[11px] font-semibold leading-snug text-zinc-700 transition-colors duration-300 group-hover:text-zinc-900 sm:text-xs">
          {skill.name}
        </p>

        <div className="absolute inset-x-4 bottom-0 h-px scale-x-0 bg-linear-to-r from-transparent via-indigo-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </motion.div>
  );
}

const SkillsLayout = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-zinc-50 px-4 py-20 sm:px-6 md:px-16 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.07),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16 md:text-left"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Technical Expertise
          </p>
          <h2 className="bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base md:mx-0">
            A curated collection of modern technologies I use to design, build,
            and ship polished digital products.
          </p>
        </motion.div>

        {/* Category sections */}
        <div className="space-y-10 md:space-y-14">
          {categories.map((category) => {
            const skills = skillsByCategory[category];

            return (
              <motion.div
                key={category}
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <motion.div
                  variants={categoryVariants}
                  className="mb-5 flex items-center gap-3 sm:mb-6"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                  <h3 className="shrink-0 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl md:text-2xl">
                    {category}
                  </h3>
                  <div className="h-px flex-1 bg-linear-to-r from-zinc-200 via-zinc-300 to-transparent" />
                  <span className="shrink-0 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {skills.length}
                  </span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                >
                  {skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsLayout;
