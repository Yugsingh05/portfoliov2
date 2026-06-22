"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialIcon from "@/components/ui/SocialIcon";
import { socials } from "@/lib/socials.lib";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Herosection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-28 sm:px-8"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_90%,rgba(139,92,246,0.10),transparent_50%)]" />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,24,27,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hey, I&rsquo;m{" "}
          <span className="bg-linear-to-r from-slate-500 via-gray-400 to-slate-800 bg-clip-text text-transparent">
            Yug Singh
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mt-5 max-w-2xl text-balance text-lg font-medium text-zinc-600 sm:text-xl md:text-2xl"
        >
          Full Stack Developer — building scalable, real-world web experiences.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-zinc-500 sm:text-base"
        >
          I turn ideas into high-performance applications — from AI-powered
          platforms to scalable eCommerce systems — focused on products that are
          fast, intuitive, and impactful.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg sm:w-auto"
          >
            View my work
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md sm:w-auto"
          >
            Let&rsquo;s talk
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-9 flex items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-md"
            >
              <SocialIcon name={social.key} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-zinc-300 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-zinc-500"
          />
        </span>
      </motion.a>
    </section>
  );
};

export default Herosection;
