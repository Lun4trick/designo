import React from 'react'
import Link from 'next/link'

function IntroPanel() {
  return (
    <section className='flex flex-col items-center bg-intro-bg-mobile bg-center bg-cover h-[900px] w-full px-[25px] pt-1'>
      <h1 className='text-center text-3xl text-white mt-[100px] leading-10'>
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className='text-white text-[15px] text-center mt-[40px] leading-8'>
        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
      </p>
      <Link href={'/about'} className='px-[25px] py-[15px] bg-white rounded-lg mt-[20px] uppercase text-[15px] font-semibold'>
        Learn More
      </Link>
    </section>
  )
}

export default IntroPanel