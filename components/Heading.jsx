"use client"
import React from 'react'
import { motion } from "framer-motion"
const Heading = ({ text, color, lineColor, className }) => {
  return (
    <div className={className}>
      <div className='w-fit'>
        <h1 className={`${color} text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold `}>{text}</h1>
        <motion.div initial={{ width: 0 }} whileInView={{ width: "100%", transition: { duration: 1 } }} className={`${lineColor} line w-full h-[5px] rounded-full`}></motion.div>
      </div>
    </div>
  )
}

export default Heading