import React from 'react'
import Heading from '../Heading'
import ShowSkills from './ShowSkills'


const Skills = () => {
  return (
    <div
      id='skills'
      className='relative w-full min-h-[100dvh] bg-gray-900 h-fit flex flex-col items-center '>
      <div className='w-[200vw] absolute h-[400px] bg-gray-900 z-[2] rotate-[-3deg] top-[-50px] '></div>
      {/* All the content */}
      <Heading
        text="What I Bring to the Table"
        color="text-gray-400"
        lineColor="bg-gray-400"
        className="z-[2] mt-10"
      />
      <div
        className='z-[3] mt-10 flex flex-col items-center max-w-[800px] text-center'
      >
        {/* Punch line */}
        <p className='mt-3 text-color-gray-500 p-2 text-sm italic'>
          Mastering the art of software development requires the right set of tools. From backend logic to frontend aesthetics, every technology I use plays a crucial role in transforming ideas into reality. Here’s a glimpse of my technical arsenal that helps me build, innovate, and optimize.
        </p>
        <div className="skills mt-10 flex justify-center w-full flex-wrap">

          <ShowSkills />
          {/* 
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
                className="relative m-3 bg-gray-400 group hover:bottom-2 p-2 rounded-md flex items-center justify-between gap-[10px] shadow-md border border-color-gray-400"
              >
                <Image src={item.img} width={30} height={30} alt={item.name} />
                <p className="text-lg font-bold transition-all duration-200">{item.name}</p>
              </motion.div>
            );
          })} */}

        </div>
      </div>
    </div >
  )
}

export default Skills