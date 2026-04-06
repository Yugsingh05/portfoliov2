'use client'
import LeftImageSection from "./LeftImageSection"
import RightSection from "./RightSection"

const Herosection = () => {
  return (
    <section className='grid min-h-screen grid-cols-1 md:grid-cols-2 items-center overflow-hidden'>
      
      <LeftImageSection/>
      <RightSection/>
    

    
    </section>
  )
}

export default Herosection