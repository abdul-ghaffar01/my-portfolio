"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import data from "./data"

const Skills = () => {
  return (
    <section 
      id='skills'
      className='relative w-full min-h-[700px] flex flex-col items-center overflow-hidden py-20'
    >
      {/* Tilted Background */}
      <motion.div 
        initial={{ rotate: -4, y: 50 }}
        whileInView={{ rotate: -4, y: 0, transition: { duration: 1, ease: "easeOut" } }}
        viewport={{ once: true }}
        className='absolute w-[200vw] h-[140%] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rotate-[-4deg] top-[-80px] z-[1]' 
      />

      {/* Accent Glows */}
      <motion.div className="absolute -top-32 left-20 w-[350px] h-[350px] bg-blue-500/10 blur-[150px] rounded-full z-[1]" />
      <motion.div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-purple-500/10 blur-[150px] rounded-full z-[1]" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        viewport={{ once: true }}
        className="relative z-[2] text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-10"
      >
        My Technical Arsenal
      </motion.h2>

      {/* Punchline */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }}
        viewport={{ once: true }}
        className='mt-5 text-gray-400 max-w-2xl text-center px-4 italic z-[2]'
      >
        Building robust, scalable, and stunning solutions with these technologies.
      </motion.p>

      {/* Skills Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } }
        }}
        className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 max-w-5xl z-[2]"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative group flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
          >
            {/* Floating Glow */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-20 h-20 rounded-full bg-blue-500/20 blur-2xl"
            />
            
            {/* Icon */}
            <Image 
              src={item.img} 
              width={40} 
              height={40} 
              alt={item.name} 
              className="relative z-10 brightness-125 group-hover:brightness-150"
            />

            {/* Name */}
            <p className="mt-3 text-base font-semibold text-gray-300 group-hover:text-blue-400 transition z-10">
              {item.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
