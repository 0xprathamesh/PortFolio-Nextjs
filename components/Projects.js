import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './fade'
import Image from 'next/image'
import CoinMarket from '../assets/projects/Coinmarket.png';
import blog from '../assets/projects/blog.png'
import PeerView from '../assets/projects/Peerview.png'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Link from 'next/link'
const Projects = () => {
  return (
    <section className='section ' id='projects'>
    <div className='container mx-auto my-5'>
        <motion.div
         variants={fadeIn('up',0.4)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}  
        className='flex justify-center items-center mb-16'>
        <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] mr-3'></span>
          <h1 className='text-[25px] text-[#ccd6f6] lg:text-[50px] font-semibold leading-[0.8] p-5 tracking-wider'>My Projects.</h1>
          <span className='hidden md:inline-flex md:w-30 lg:w-36 h-[2px] bg-[#05c57f] ml-3'></span>
        </motion.div>
        
        <div variants={fadeIn('up',0.1)}  initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="flex flex-col justify-center ">
		<div
			
		      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl  p-3 max-w-xs md:max-w-4xl mx-auto bg-[#1e1f61] mb-16">
		        <div className="w-full md:w-2/3 grid place-items-center">
			        <Image src={CoinMarket}  alt="tailwind logo" className='rounded-md'   /> 
                </div>
			    <div className="w-full md:w-2/3  flex flex-col space-y-2 p-3">
				    <div className="flex justify-between item-center">
					    <p className="text-white font-medium hidden md:block">Front End</p>
				    </div>
				    <h3 className="font-black  text-[#05c57f] md:text-3xl text-xl">Coin Market</h3>
				    <p className="md:text-lg text-[#ddecff] text-base ">
					Builta cryptocurrency market data project utilizing React and the CoinGecko API to display real-time information on various cryptocurrencies.
					</p>
				    <div className="flex justify-start items-center gap-5">
					<Link href='https://coin-market-react.netlify.app/' target='_blank'>
					<p className="text-xl hover:text-[#05c57f] font-tertiary ">
					Live
					<span className="font-normal  ml-2 inline-flex  text-base"><BsBoxArrowUpRight size={15} /></span>
				    </p>
					</Link>
					<Link href='https://github.com/Prathamesh48/Coin-Market' target='_blank'>
					<p className="text-xl font-tertiary  hover:text-[#05c57f] ">
					Code
					<span className="font-normal  ml-2 inline-flex  text-base"><BsBoxArrowUpRight size={15} /></span>
				    </p>
					</Link>
					<p className='font-tertiary text-sm text-[#05c57f]'>ReactJs</p>
					<p className='font-tertiary text-sm text-[#05c57f]'>CSS</p>
					</div>
			    </div>
		    </div>
			
			<div
			
		      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl  p-3 max-w-xs md:max-w-4xl mx-auto bg-[#1e1f61] mb-16">
		        <div className="w-full md:w-2/3 grid place-items-center">
			        <Image src={blog}  alt="tailwind logo" className='rounded-md'   /> 
                </div>
			    <div className="w-full md:w-2/3  flex flex-col space-y-2 p-3">
				    <div className="flex justify-between item-center">
					    <p className="text-white font-medium hidden md:block">MERN Stack</p>
				    </div>
				    <h3 className="font-black  text-[#05c57f] md:text-3xl text-xl">.Blogger</h3>
				    <p className="md:text-lg text-[#ddecff] text-base ">
					Developed a MERN stack blog application with user authentication, allowing users to Read, comment, and like blog posts.
					</p>
				    <div className="flex justify-start items-center gap-5">
					<Link href='#' target='_blank'>
					<p className="text-xl hover:text-[#05c57f] font-tertiary ">
					Live
					<span className="font-normal  ml-2 inline-flex  text-base"><BsBoxArrowUpRight size={15} /></span>
				    </p>
					</Link>
					<Link href='https://github.com/Prathamesh48/Full-Stack-Blog-Frontend' target='_blank'>
					<p className="text-xl font-tertiary  hover:text-[#05c57f] ">
					Code
					<span className="font-normal  ml-2 inline-flex  text-base"><BsBoxArrowUpRight size={15} /></span>
				    </p>
					</Link>
					<p className='font-tertiary text-sm text-[#05c57f]'>MERN Stack</p>
					<p className='font-tertiary text-sm text-[#05c57f]'>CSS</p>
					</div>
			    </div>
		    </div>
			<div
			
		      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl  p-3 max-w-xs md:max-w-4xl mx-auto bg-[#1e1f61] mb-16">
		        <div className="w-full md:w-2/3 grid place-items-center">
			        <Image src={PeerView}  alt="tailwind logo" className='rounded-md'   /> 
                </div>
			    <div className="w-full md:w-2/3  flex flex-col space-y-2 p-3">
				    <div className="flex justify-between item-center">
					    <p className="text-white font-medium hidden md:block">Blockchain</p>
				    </div>
				    <h3 className="font-black  text-[#05c57f] md:text-3xl text-xl">PeerView</h3>
				    <p className="md:text-lg text-[#ddecff] text-base ">
					Participated in blockchain hackathon, project leveraging Livepeer to build a decentralized video upload and viewing platform, ensuring secure and reliable access for users. 
					</p>
				    <div className="flex justify-start items-center gap-5">
					<Link href='#' target='_blank'>
					<p className="text-xl hover:text-[#05c57f] font-tertiary ">
					Live
					<span className="font-normal ml-2 inline-flex  text-base"><BsBoxArrowUpRight size={15} /></span>
				    </p>
					</Link>
					<Link href='https://github.com/Prathamesh48/peerview-ethforall' target='_blank'>
					<p className="text-xl font-tertiary  hover:text-[#05c57f] ">
					Code
					<span className="font-normal  ml-2 inline-flex  text-base"><BsBoxArrowUpRight size={15} /></span>
				    </p>
					</Link>
					<div className='flex gap-1'>
					
					<p className='font-tertiary text-sm text-[#05c57f]'>Solidity</p>
					</div>
					</div>
			    </div>
		    </div>
			
			
			
	    </div>
        
    </div>
    </section>
  )
}

export default Projects
