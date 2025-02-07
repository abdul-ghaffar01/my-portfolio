import React from 'react'
import Heading from '../Heading'
import { delay, motion } from "framer-motion"
import Image from 'next/image'
import data from "./data"
import { duration } from '@mui/material'


const Skills = () => {
  return (
    <div className='relative w-full h-fit min-h-[600px] flex flex-col items-center '>
      <div className='w-[200vw] absolute h-full bg-purple-50 z-[2] rotate-[-4deg] top-[-50px] '></div>
      {/* All the content */}
      <Heading
        text="What I Bring to the Table"
        color="text-black"
        lineColor="bg-black"
        className="z-[2] mt-10"
      />
      <motion.div
        className='z-[3] mt-10 flex flex-col items-center max-w-[800px] text-center'
      >
        {/* Punch line */}
        <p className='mt-3 text-slate-500 p-2 text-sm italic'>
          Mastering the art of software development requires the right set of tools. From backend logic to frontend aesthetics, every technology I use plays a crucial role in transforming ideas into reality. Here’s a glimpse of my technical arsenal that helps me build, innovate, and optimize.
        </p>
        <div className="skills mt-10 flex justify-center w-full flex-wrap">


          {data.map((item, index) => {
            return (
              <motion.div
              key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: (0.1 * index) + 0.5, }
                }}
                viewport={{ once: true, amount: "all" }}
                className="relative m-3 group hover:bottom-2 p-2 rounded-md flex items-center justify-between gap-[10px] shadow-md border border-slate-300"
              >
                <Image src={item.img} width={30} height={30} alt={item.name} />
                <p className="text-lg font-bold transition-all duration-200">{item.name}</p>
              </motion.div>
            );
          })}

        </div>
      </motion.div >
    </div >
  )
}

export default Skills