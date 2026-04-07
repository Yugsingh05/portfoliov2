'use client'

import { workExperiences } from "@/lib/experience.lib";
import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const MyJourney = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 text-zinc-900 md:px-20 md:py-24">
      {/* Ambient background glow */}
     

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.35em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400 md:mb-3 md:text-xs"
          >
            Experience
          </motion.p>

          <h2 className="bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl">
          A Journey of Innovation & Growth
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 md:mt-4 md:max-w-lg md:text-base"
          >
          From hackathons to real-world systems — shaping scalable, impactful digital experiences.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Background rail */}
          <span className="absolute bottom-0 left-[10px] top-0 w-px bg-linear-to-b from-zinc-200 via-zinc-300/40 to-transparent md:left-[13px]" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {workExperiences.map((exp, index) => (
              <TimelineCard key={exp.id} exp={exp} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
