import React from 'react'
import { motion } from 'framer-motion'

import profileImage from '@/public/newprofile.jpeg'
import Image from 'next/image'

const LeftImageSection = () => {
  return (
    <motion.div
    className='relative h-[400px] md:h-full w-full rounded-none overflow-hidden shadow-2xl'
    initial={{ opacity: 0, x: -80, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  >
    <Image
      src={profileImage}
      alt='Yug Singh'
      fill
      className='object-cover'
      priority
    />
  </motion.div>  )
}

export default LeftImageSection