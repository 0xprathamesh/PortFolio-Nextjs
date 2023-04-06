
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa"

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Link href="/">
           
        
        <h1 className="text-[#05c57f] text-2xl font-semibold whitespace-nowrap dark:text-white">TechTribe</h1>
          </Link>
          <button className=' flex justify-center items-center'>
            <Link href='https://github.com/Prathamesh48' target='_blank'>
              
              <FaGithub size={30} />
              
            </Link>
          </button>    
        </div>
      </div>
    </header>
  )
}

export default Header
