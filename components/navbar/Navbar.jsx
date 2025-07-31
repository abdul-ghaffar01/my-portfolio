'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { motion } from "framer-motion"

export const fadeInFromTopInViewVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
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
    <motion.nav
      variants={fadeInFromTopInViewVariants}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-950/80 via-gray-900/80 to-gray-950/80 backdrop-blur-md border-b border-blue-500/20 shadow-[0_2px_15px_rgba(59,130,246,0.15)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[70px] text-gray-200">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer text-lg font-medium"
            >
              <Link href={item.link} className="text-gray-300 hover:text-blue-400 transition">
                {item.name}
              </Link>
              {/* Gradient Underline */}
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </motion.li>
          ))}

          {/* Resume Button */}
          <Link href="/resume">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] rounded-lg text-white font-semibold transition-all"
            >
              View Resume
            </motion.button>
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setShowSidebar(true)}
          className="md:hidden flex flex-col justify-evenly items-center w-12 h-12 bg-gray-800/70 rounded-lg shadow hover:shadow-[0_0_10px_#3b82f6] transition"
        >
          <div className="w-6 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          <div className="w-6 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          <div className="w-6 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
        </button>
      </div>
    </motion.nav>

  )
}

export default Navbar
