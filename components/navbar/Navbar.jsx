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
      viewport={{ once: true }} className="p-2">

      {/* Logo */}
      <div className='ml-4'>
        <Logo />
      </div>
    </motion.div>


  )
}

export default Navbar