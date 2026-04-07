import { workExperiences } from '@/lib/experience.lib';
import Image from 'next/image';
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";




const cardVariants = {
    hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };
  
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "backOut" as const, delay: 0.15 },
    },
  };
  
  

function TimelineCard({
    exp,
    index,
  }: {
    exp: (typeof workExperiences)[0];
    index: number;
  }) {
    const ref = useRef<HTMLDivElement>(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });
  
    const lineScale = useSpring(
      useTransform(scrollYProgress, [0, 0.4], [0, 1]),
      { stiffness: 100, damping: 20 }
    );
  
    const isLast = index === workExperiences.length - 1;
  
    return (
      <motion.div ref={ref} variants={cardVariants} className="relative pl-9 md:pl-12">
        {/* Animated connector line */}
        {!isLast && (
          <motion.span
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute bottom-0 left-[10px] top-[44px] w-px bg-linear-to-b from-zinc-400/50 via-zinc-300/30 to-transparent md:left-[13px] md:top-[52px]"
          />
        )}
  
        {/* Dot */}
        <motion.span
          variants={dotVariants}
          className="absolute left-0 top-4 flex h-6 w-6 items-center justify-center md:top-5 md:h-7 md:w-7"
        >
          <span className="absolute inset-0 rounded-full border border-zinc-300/80 bg-white shadow-[0_0_0_3px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.12)]" />
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
            className="relative h-2 w-2 rounded-full bg-zinc-900 md:h-2.5 md:w-2.5"
          />
        </motion.span>
  
        {/* Card */}
        <motion.div
          whileHover={{ y: -2, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
          className="group relative mb-8 rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.16),0_1px_3px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_16px_40px_-14px_rgba(0,0,0,0.24)] md:mb-10 md:p-6"
        >
          {/* Shimmer top line on hover */}
          <span className="absolute inset-x-5 top-0 h-px rounded-full bg-linear-to-r from-transparent via-zinc-400/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  
          {/* Header row: logo + name + badge */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                <Image
                  src={exp.img}
                  alt={exp.name}
                  width={44}
                  height={44}
                  className=" rounded-lg object-cover"
                />
              </div>
  
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-zinc-900 md:text-base">
                  {exp.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-zinc-500 md:text-sm">
                  {exp.pos}
                </p>
              </div>
            </div>
  
            {/* Duration badge — always visible top-right */}
            <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] md:px-3 md:py-1 md:text-xs">
              {exp.duration}
            </span>
          </div>
  
          {/* Divider */}
          <span className="my-3 block h-px w-full bg-linear-to-r from-zinc-100 via-zinc-200/80 to-zinc-100 md:my-4" />
  
          {/* Description */}
          <p className="whitespace-pre-line text-xs leading-[1.8] tracking-[0.01em] text-zinc-600 md:text-sm">
            {exp.title}
          </p>
        </motion.div>
      </motion.div>
    );
  }

export default TimelineCard