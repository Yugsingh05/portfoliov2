"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/projects.lib";

const Projects = () => {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const project = projects[active];
  const images = project.images;

  // Auto-rotate screenshots for the active project
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(id);
  }, [active, images.length]);

  const selectProject = (index: number) => {
    setActive(index);
    setImageIndex(0);
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-zinc-50 px-4 py-20 md:px-16 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(99,102,241,0.07),transparent_55%)]" />

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
            Selected Work
          </p>
          <h2 className="bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 md:mx-0 md:text-base">
            A curated selection of products I&rsquo;ve designed and shipped —
            from AI-powered platforms to scalable eCommerce systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Media panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_50px_-25px_rgba(0,0,0,0.3)]"
          >
            <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}-${imageIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <ProjectImage
                    src={images[imageIndex]}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    title={project.title}
                  />
                </motion.div>
              </AnimatePresence>

              <span className="absolute left-4 top-4 rounded-lg bg-black/55 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-2 border-t border-zinc-100 bg-white p-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setImageIndex(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
                    imageIndex === i
                      ? "border-indigo-500 ring-2 ring-indigo-500/30"
                      : "border-zinc-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <ProjectImage src={src} alt={`thumb ${i + 1}`} title={project.title} thumb />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content panel */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.18)] md:p-8"
              >
                <span className="w-fit rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {project.description}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {project.subdescription}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-zinc-600">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-7">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg"
                  >
                    Visit project
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => selectProject(active === 0 ? projects.length - 1 : active - 1)}
                      aria-label="Previous project"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => selectProject((active + 1) % projects.length)}
                      aria-label="Next project"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project selector */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => selectProject(i)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 md:text-sm ${
                active === i
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
              }`}
            >
              {p.title.split("—")[0].trim()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Image with graceful fallback — until the screenshots are dropped into
 * /public/projects/, a branded gradient placeholder is shown instead.
 */
function ProjectImage({
  src,
  alt,
  title,
  thumb = false,
}: {
  src: string;
  alt: string;
  title: string;
  thumb?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-200 via-zinc-100 to-indigo-100">
        {!thumb && (
          <span className="px-4 text-center text-sm font-medium text-zinc-500">
            {title}
          </span>
        )}
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
    />
  );
}

export default Projects;
