import React from 'react'
import profileImage from '@/public/newprofile.jpeg'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div
    className='grid grid-cols-2 items-center justify-center h-screen'
    >
       <div className='relative w-full h-full'>
       <Image src={profileImage} alt='profile' fill className='object-cover'/>
       </div>

        <div className='text-slate-600 text-4xl font-bold text-center'>
            Hey , I am Yug Singh 👋
            <p className='text-slate-600 text-2xl font-bold text-center'>converting ideas into website</p>
        </div>
    </div>
  )
}

export default Herosection