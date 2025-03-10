'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { motion } from "framer-motion"

export const fadeInFromTopInViewVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const links = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Github", link: "#github" },
  { name: "Skills", link: "#skills" },
]
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);


  return (
    <motion.div variants={fadeInFromTopInViewVariants} initial="initial"
      whileInView="animate"
      viewport={{ once: true }} className="w-full px-2 sm:px-8 md:mx-auto p-2 flex items-center justify-between lg:w-[80%]">

      {/* Logo */}
      <Link href="/">
        <Logo />
      </Link>

      {/* menus */}
      <div className='w-fit h-fit'>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: .8 } }}
          viewport={{ once: true, amount: "all" }} className='hidden md:flex h-[60px] p-2 items-center gap-[10px]'>
          {/* All the links */}
          {links.map((item, index) => {
            return (<motion.li key={index}
              initial={{ y: -20, opacity: 0, }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: (0.1 * index) + 0.8 } }}
              viewport={{ once: true, amount: "all" }} className=' font-bold text-xl relative mx-2 transition-all duration-300'>
              <Link className='text-[#00000075] hover:text-purple-700' href={item.link}>{item.name}</Link>
              <div className='absolute bottom-0 w-full h-[10px] rounded-full '></div>
            </motion.li>)
          })}

          {/* Resume button */}
          <Link href="/resume">
            <button className='hidden md:block bg-purple-500 block px-5 py-2 text-center w-fit hover:bg-purple-700 text-white font-semibold transition-all duration-200 md:border-slate-100 rounded-md'>
              View resume
            </button>
          </Link>
        </motion.ul>
      </div>


      {/* Hamburger for menus */}
      <button onClick={() => { setShowSidebar(true) }} className="md:hidden hamburger w-[50px] h-[50px] bg-white p-2 flex flex-col justify-evenly items-center rounded-lg ">
        <div className="line w-full h-[05px] bg-purple-500 rounded-full"></div>
        <div className="line w-full h-[05px] bg-purple-500 rounded-full"></div>
        <div className="line w-full h-[05px] bg-purple-500 rounded-full"></div>
      </button>

      {/* mobile side bar */}
      <div
        initial={{}}
        whileInView={{}}
        viewport={{ once: true }}
        className={`fixed md:hidden top-0 left-0 ${showSidebar ? "w-screen" : "w-0"} h-[101vh] bg-purple-900 z-[1000] overflow-hidden transition-all duration-500`}
      >
        <div className="content p-5">

          {/* Cross button  */}
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:hidden w-[50px] h-[50px] bg-white p-2 flex justify-center items-center rounded-lg relative">

            {/* Top Line */}
            <div className={`absolute w-[35px] h-[5px] bg-purple-500 rounded-full transition-transform duration-300 ease-in-out ${showSidebar ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}>
            </div>

            {/* Bottom Line */}
            <div className={`absolute w-[35px] h-[5px] bg-purple-500 rounded-full transition-transform duration-300 ease-in-out ${showSidebar ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}>
            </div>
          </button>

          <div className="menus">
            <ul className='flex flex-col items-center justify-evenly'>
              {/* All the links */}
              {links.map((item, index) => {
                return (<motion.li key={index}
                  initial={{ y: -20, opacity: 0, }}
                  whileInView={{ y: 0, opacity: 1, transition: { delay: (0.1 * index) } }}
                  viewport={{ once: true, amount: "all" }} className=' font-bold text-xl relative my-4 transition-all duration-300'>
                  <Link onClick={() => setShowSidebar(false)} className='text-[30px] text-[#00000075] ' href={item.link}>{item.name}</Link>
                  <div className='absolute bottom-0 w-full h-[10px] rounded-full '></div>
                </motion.li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div >


  )
}

export default Navbar