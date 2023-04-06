import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from './fade';
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png"
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import threejs from "../assets/tech/threejs.svg";
import nextjs from "../assets/tech/nextjs.png"
import firebase from '../assets/tech/firebase.png'
import github from "../assets/tech/github1.png";
import bootstrap from '../assets/tech/bootstrap.svg'
import socketio from '../assets/tech/socketio.svg'
import query from '../assets/tech/query.svg'
import solidity from '../assets/tech/solidity.png'
import truffle from '../assets/tech/truffle.png'
import ganache from '../assets/tech/ganache.png'
import jquery from '../assets/tech/jquery.png'
import d3 from '../assets/tech/d3.png'
import python from '../assets/tech/python logo.png'
import web3 from '../assets/tech/web3.png'
import chainlink from '../assets/tech/chainlink.png'
import Image from 'next/image'
const Skills = () => {
  return (
    <section className='section lg:h-screen' id='skills'>
    <div className='container mx-auto my-5'>
      <motion.div 
         variants={fadeIn('up',0.5)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
         className='flex justify-center items-center'>
         <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] mr-3'></span>
         <h1 className='text-[25px] text-[#ccd6f6] lg:text-[50px] font-semibold leading-[0.8] p-5 tracking-wider'>SkillSet</h1>
         <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] ml-3'></span>
      </motion.div>
      
        <div className='max-w-2xl mx-auto my-8'>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-center items-center">
            <div className="flex items-center justify-center rounded-lg">
            <Image src={html} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={css} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={bootstrap} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={javascript} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={tailwind} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={reactjs} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={redux} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={query} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={nextjs} alt='/' width='50' className='md:w-28 bg-white rounded-full border'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={figma} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={nodejs} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={mongodb} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={firebase} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={threejs} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={typescript} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={socketio} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={git} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={github} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={python} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={jquery} alt='/' width='50' className='md:w-28'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={d3} alt='/' width='50' className='md:w-28'/>
            </div>
            
          </div>
          <div className=" flex justify-center items-center gap-8 my-8   ">
            <div className="flex items-center justify-center rounded-lg">
            <Image src={solidity} alt='/' width='50' className='md:w-16'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={truffle} alt='/' width='50' className='md:w-16'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={ganache} alt='/' width='50' className='md:w-16'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={web3} alt='/' width='50' className='md:w-16'/>
            </div>
            <div className="flex items-center justify-center rounded-lg">
            <Image src={chainlink} alt='/' width='50' className='md:w-16'/>
            </div>
          </div>
        </div>
     
    
       
      </div>
 
   </section>
  )
}

export default Skills