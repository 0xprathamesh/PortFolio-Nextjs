import Link from 'next/link'
import React from 'react'
import {
	RiInstagramLine,
	RiTwitterFill,
	RiGithubLine,
	RiMailOpenLine,
	RiLinkedinFill,
} from "react-icons/ri";
import { motion } from 'framer-motion';
import { fadeIn } from './fade';
const Connect = () => {
  return (
    <section className='section lg:h-screen' id='connect'>
      <div className='container mx-auto '>
        <motion.div
           variants={fadeIn('up',0.4)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
          className='flex justify-center items-center mb-16 lg:mb-[7rem]'>
        <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] mr-3'></span>
          <h1 className='text-[25px] text-[#ccd6f6] lg:text-[50px] font-semibold leading-[0.8] p-5 tracking-wider'>Connect With Me.</h1>
          <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] ml-3'></span>
        </motion.div>
        <motion.div
          variants={fadeIn('up',0.5)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
          className="social max-w-[600px] h-[200px]  p-4 flex justify-evenly flex-wrap  m-auto">
          <Link href='https://github.com/Prathamesh48' target='_blank' className='w-[160] mx-[0.4rem] flex items-center'>
            <div className='item inline-flex font-tertiary hover:text-[#05c57f] md:text-2xl'>
              <RiGithubLine size={30} className='mr-4'/>  <span>Github</span>
            </div>
          </Link>
          <Link href='https://www.linkedin.com/in/prathamesh-patil-569579209/' target='_blank' className='w-[160] mx-[0.4rem] flex items-center'>
            <div className='item inline-flex font-tertiary hover:text-[#05c57f]  md:text-2xl'>
             <RiLinkedinFill  size={30} className='mr-4' /> <span>Linkedin</span>
            </div>
          </Link>
          <Link href='mailto:prathameshpatil6499@gmail.com' target='_blank' className='w-[160] mx-[0.4rem] flex items-center'>
            <div className='item inline-flex font-tertiary hover:text-[#05c57f]  md:text-2xl'>
             <RiMailOpenLine size={30}  className='mr-4' /> <span>Email</span>
            </div>
          </Link>
          <Link href='https://twitter.com/patilprathmesh_' target='_blank' className='w-[160] mx-[0.4rem] flex items-center'>
            <div className='item inline-flex font-tertiary hover:text-[#05c57f]  md:text-2xl'>
            <RiTwitterFill  size={30} className='mr-4' />  <span>Twitter</span>
            </div>
          </Link>
          <Link href='https://www.instagram.com/prathameshspatil_/' target='_blank' className='w-[160] mx-[0.4rem] flex items-center'>
            <div className='item inline-flex font-tertiary hover:text-[#05c57f]  md:text-2xl'>
              <RiInstagramLine   size={30} className='mr-4'/><span>Instagram</span>
            </div>
          </Link>
          
        </motion.div>
        
     </div>
    </section>
  )
}

export default Connect
