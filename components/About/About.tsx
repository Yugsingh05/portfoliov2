"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutImages, aboutIntro, funFacts, passionText } from "@/lib/about.lib";
import { CONTACT_EMAIL, LOCATION } from "@/lib/socials.lib";

const cardBase =
  "group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_8px_30px_-18px_rgba(0,0,0,0.18)] transition-all duration-500 hover:border-zinc-300 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.28)]";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "3+", label: "Hackathon Wins" },
  { value: "20+", label: "Technologies" },
];

const focusAreas = [
  {
    title: "Full-Stack Engineering",
    desc: "End-to-end product development with Next.js, Node.js, and PostgreSQL — from UI systems to APIs and auth.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3m-2-9l-4 12" />
    ),
  },
  {
    title: "Performance & Scale",
    desc: "Caching, lazy loading, and efficient API design — shipping fast, reliable experiences that scale.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    ),
  },
  {
    title: "Polished UI / UX",
    desc: "Accessible, responsive interfaces with thoughtful motion that feel effortless on every device.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.2 5.6L20 9.2l-4 3.9 1 5.9-5-2.8-5 2.8 1-5.9-4-3.9 5.8-.6L12 3z" />
    ),
  },
];

const About = () => {
  const [copied, setCopied] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const gallery = aboutImages.gallery;

  useEffect(() => {
    if (gallery.length <= 1) return;
    const id = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % gallery.length);
    }, 3500);
    return () => clearInterval(id);
  }, [gallery.length]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section id="about" className="relative w-full bg-white px-4 py-20 sm:px-6 md:px-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            About Me
          </p>
          <h2 className="bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Get to know me a little better
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-5 grid grid-cols-2 gap-3 sm:gap-4 md:mb-5 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/60 px-4 py-5 text-center transition-colors hover:border-zinc-300 hover:bg-white sm:py-6"
            >
              <p className="bg-linear-to-br from-zinc-900 to-zinc-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-500 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3"
        >
          {/* Profile */}
          <motion.div
            variants={cardVariants}
            className={`${cardBase} flex flex-col md:row-span-2`}
          >
            <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-auto md:flex-1">
              <Image
                src={aboutImages.profile}
                alt="Yug Singh"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/50 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
                {LOCATION}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                Hi, I&rsquo;m Yug Singh
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{aboutIntro}</p>

              <button
                onClick={handleCopy}
                className="mt-5 flex w-full items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-left transition-colors hover:border-zinc-300 hover:bg-zinc-100"
              >
                <span className="min-w-0">
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-zinc-400">
                    Email me
                  </span>
                  <span className="block truncate text-sm font-medium text-zinc-800">
                    {CONTACT_EMAIL}
                  </span>
                </span>
                <span className="shrink-0 rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-indigo-600 shadow-sm ring-1 ring-zinc-200">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>
          </motion.div>

          {/* What I do / focus areas */}
          <motion.div variants={cardVariants} className={`${cardBase} p-6 md:col-span-2`}>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-800">
                What I Do
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4 transition-colors hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-zinc-200">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      {area.icon}
                    </svg>
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-zinc-900">{area.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{area.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fun facts */}
          <motion.div variants={cardVariants} className={`${cardBase} p-6`}>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-800">
                Beyond the Code
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {funFacts.map((fact, i) => (
                <motion.span
                  key={fact}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                    i % 3 === 0
                      ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                      : i % 3 === 1
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-zinc-200 bg-zinc-100 text-zinc-700"
                  }`}
                >
                  {fact}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Passion + gallery */}
          <motion.div variants={cardVariants} className={`${cardBase} flex flex-col p-6`}>
            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50">
              {gallery.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Yug Singh ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover transition-opacity duration-700 ${
                    activeImage === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {gallery.length > 1 && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      aria-label={`Show image ${i + 1}`}
                      onClick={() => setActiveImage(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeImage === i ? "w-5 bg-white" : "w-1.5 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-900">
              My Passion for Coding
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{passionText}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
