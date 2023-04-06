import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from './fade';



const About = () => {

  return (
    <section className='section lg:h-screen ' id='about'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('up',0.5)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
          className='flex justify-center items-center mb-8'>
          <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] mr-3'></span>
          <h1 className='text-[25px] text-[#ccd6f6] lg:text-[50px] font-semibold leading-[0.8] p-5 tracking-wider'>About me.</h1>
          <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] ml-3'></span>
        </motion.div>

      
        
        <motion.div
          variants={fadeIn('up',0.6)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
          className='max-w-[70ch] mx-auto'>
          <p className='text-[1rem] lg:text-[18px] font-tertiary mx-1'>
           Hello!
            <br />
            <br />I&apos;m Prathamesh Patil, 
            Full-Stack Developer (Self && Web2-3).
            <br />
            Currently Exploring Blockchain Development with Solidity.
          </p>
          <br />
          <p className='text-[1rem] lg:text-[18px] font-tertiary mx-1'>
          ⚡ Building responsive Front End w/ Next | Tailwind CSS.<br />
          ⚡ Creating application backend in Node | Express. <br />
          ⚡ Hosting and managing Web Apps using MongoDB | Netlify | Heroku.
          </p>
          <br />
          
          <p className='text-[1rem] lg:text-[18px] font-tertiary mx-1'>
          I have a curious and enthusiastic mindset, always seeking to learn and create new things with simplicity in mind.
          </p>
        </motion.div>
       </div>
        
    
    </section>
  )
}

export default About
