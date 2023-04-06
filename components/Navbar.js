import React from 'react'
import {BiClipboard, BiHomeAlt, BiUser} from "react-icons/bi"
import { BsCode, BsBriefcase, BsChatSquareText, BsTerminal } from "react-icons/bs"
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-2xl max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50'>
        <Link to="home" activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link to="about" activeClass='active' smooth={true} spy={true} className='cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link to="skills" activeClass='active' smooth={true} spy={true}  className='cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center'>
          <BsTerminal/>
        </Link>
        <Link to="projects" activeClass='active' smooth={true} spy={true}  className='cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center'>
          <BsCode />
        </Link>
        <Link to="connect" activeClass='active' smooth={true} spy={true}  className='cursor-pointer rounded-full w-[60px] h-[60px] flex items-center justify-center'>
          <BsChatSquareText />
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
