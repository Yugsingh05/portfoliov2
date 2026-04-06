import React from 'react'

import { motion } from 'framer-motion'

const RightSection = () => {
  return (
    <motion.div
    className='flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 px-6 font-sans '
    initial='hidden'
    animate='visible'
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
      },
    }}
  >
    <motion.h1
      className='text-4xl md:text-5xl font-extrabold text-slate-500 leading-tight italic font-serif'
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      Hey, I’m <span className='text-slate-900'>Yug Singh</span>
    </motion.h1>

    <motion.h2
      className='mt-3 text-xl md:text-2xl font-semibold text-slate-600'
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      Full Stack Developer | Building Scalable Web Experiences
    </motion.h2>

    <motion.p
      className='mt-6 text-base md:text-lg text-slate-500 max-w-xl  '
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      I specialize in turning ideas into high-performance, real-world
      applications. From AI-powered platforms to scalable eCommerce systems,
      I focus on building products that are fast, intuitive, and impactful.
    </motion.p>

    <motion.p
      className='mt-3 text-base text-slate-500 max-w-xl'
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      Currently exploring advanced system design, real-time applications,
      and DevOps to build production-ready solutions.
    </motion.p>

  
  </motion.div>  )
}

export default RightSection