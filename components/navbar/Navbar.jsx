'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { motion } from "framer-motion"
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

export const fadeInFromTopInViewVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const Navbar = () => {
  return (
    <motion.div variants={fadeInFromTopInViewVariants} initial="initial"
      whileInView="animate"
      viewport={{ once: true }} className="flex items-center justify-between px-2 z-[999] w-full sm:w-[80vw] h-[50px] mx-auto relative sm:bottom-[-25px] shadow-md border border-slate-200 sm:rounded-full bg-[rgba(255, 255, 255, 0.8)] backdrop-blur-[8px]">
      <div className="">
        <Logo />
        {/* <Image src="/logo1.png" width={300} height={70} className='mix-blend-difference' /> */}
      </div>
      <Link href="/resume" className="group p-1 px-4 text-black border border-purple-700 rounded-full font-bold relative overflow-hidden">
        <span className='group-hover:text-white'>
          View resume <DocumentScannerIcon />
        </span>
        <span className="absolute left-0 bottom-0 h-full bg-purple-500 w-0 group-hover:w-full transition-all duration-400 z-[-1]"></span>
      </Link>
    </motion.div>


  )
}

export default Navbar