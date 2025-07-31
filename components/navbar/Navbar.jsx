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
      className="fixed top-0 left-0  w-full z-50 bg-gray-900/50 backdrop-blur-md border-b border-gray-800/50"
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
              {/* Underline Animation */}
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </motion.li>
          ))}

          {/* Resume Button */}
          <Link href="/resume">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-[0_0_12px_#3b82f6]/50 transition-all"
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
          <div className="w-6 h-[3px] bg-blue-500 rounded"></div>
          <div className="w-6 h-[3px] bg-blue-500 rounded"></div>
          <div className="w-6 h-[3px] bg-blue-500 rounded"></div>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen bg-gray-900/95 backdrop-blur-md z-[1000] overflow-hidden transition-all duration-500 ${
          showSidebar ? "w-screen" : "w-0"
        }`}
      >
        {/* ✅ Hide content when closed */}
        <div className={`p-6 flex flex-col h-full transition-opacity duration-300 ${showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          {/* Close Button */}
          <button
            onClick={() => setShowSidebar(false)}
            className="self-end w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg"
          >
            <div className="relative w-6 h-6">
              <span className="absolute w-full h-[3px] bg-blue-500 rounded rotate-45 top-1/2"></span>
              <span className="absolute w-full h-[3px] bg-blue-500 rounded -rotate-45 top-1/2"></span>
            </div>
          </button>

          {/* Sidebar Links */}
          <ul className="flex flex-col items-center justify-center flex-grow gap-6">
            {links.map((item, index) => (
              <motion.li
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: index * 0.1 }}
                }
                className="text-2xl font-semibold"
              >
                <Link
                  href={item.link}
                  onClick={() => setShowSidebar(false)}
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
