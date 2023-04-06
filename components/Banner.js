import React from 'react'
import { FaGithub, FaTwitter } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from './fade';
const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[70vh] flex items-center ' id='home'>
      <div className='container mx-auto'>
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className='flex-1 text-center font-secondary '>
            <motion.p
              variants={fadeIn('down',0.3)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}            
              className='uppercase lg:text-3xl font-medium tracking-widest text-[#05c57f]'>Hey There! MySelf</motion.p>
            <motion.h1
              variants={fadeIn('down',0.4)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
              className='text-[50px] text-[#ccd6f6] lg:text-[100px] leading-[0.8] font-bold p-5 '>Prathamesh <span className='hidden md:inline-flex'>Patil</span></motion.h1>
            <motion.div
              variants={fadeIn('up',0.5)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}           
              className='mb-6 text-[36px] code uppercase leading-[1]'>
              <span className='mr-4 text-[#8892b0]'>
              I&#39;m 
              </span> 
              <TypeAnimation
               sequence={[
                'Developer',
                  2000,
                'Designer',
                  2000,
                'Student',
                 2000
               ]} speed={50} className="text-[#05c57f]" wrapper='span' repeat={Infinity}
                
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up',0.5)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}              
              className='lg:text-xl font-tertiary'>Building things Online that People can interact with!</motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
