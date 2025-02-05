"use client"
import React, { useEffect, useRef, useState } from 'react'
import Heading from '../Heading'
import { motion } from "framer-motion"
import Image from 'next/image'

const About = () => {
  const imgRef = useRef(null);
  const frameRef = useRef(null);
  const boundryRef = useRef(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const handleImageAnimationIn = () => {
    frameRef.current.style.height = 0;
    boundryRef.current.style.transform = "rotate(0deg)"
  }

  const handleImageAnimationOut = () => {
    frameRef.current.style.height = imgSize.height + "px";
    boundryRef.current.style.transform = "rotate(-15deg)"
  }

  useEffect(() => {
    if (imgRef.current) {
      const updateSize = () => {
        const imgRect = imgRef.current.getBoundingClientRect();
        setImgSize({ width: imgRect.width, height: imgRect.height });
      };

      updateSize(); // Initial size update
      window.addEventListener("resize", updateSize); // Update on resize
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  useEffect(() => {
    if (frameRef.current) {
      // purple frame 
      frameRef.current.style.width = `${imgSize.width}px`;
      frameRef.current.style.height = `${imgSize.height}px`;

      // Boundry 
      boundryRef.current.style.width = `${imgSize.width}px`;
      boundryRef.current.style.height = `${imgSize.height}px`;


    }
  }, [imgSize]);

  return (
    <div id='about' className='bg-purple-500 h-fit py-5 flex flex-col items-center justify-center'>
      <Heading className="" text="About me" color="text-white" lineColor="bg-white" />

      {/* Full content */}
      <motion.div className="content mt-5 h-fit flex flex-col lg:flex-row items-center gap-[30px] justify-between w-full max-w-[1100px]  overflow-x-hidden xs:overflow-x-visible">

        {/* About me text container */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
          viewport={{ once: true, amount: .5 }}
          className="text flex-1 h-full p-6 flex gap-[10px]"
        >
          {/* Vertical line */}
          <motion.div
            className="line w-[50px] bg-white rounded-full self-stretch"
            initial={{ height: 0 }}
            whileInView={{ height: "100px" }}
            transition={{ duration: 1, ease: "easeInOut", delay: .8 }}
            viewport={{ once: true }}
          ></motion.div>

          {/* About me text */}
          <div className="text-slate-200 text-[17px]">
            <div className='flex items-center'>
              <span className='text-xl font-bold whitespace-nowrap'>
                I'm Abdul Ghaffar,
              </span>
              <motion.div initial={{ flex: 0 }}
                whileInView={{ flex: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: .8 }}
                  viewport={{ once: true }} className='flex-1  border-t border-b border-gray-300 ml-2 mb-0' ></motion.div>
            </div>
            a passionate full-stack developer with a strong foundation in problem-solving, algorithms, and scalable web applications. With expertise in Next.js, NestJS, and TypeScript, I specialize in building high-performance solutions that prioritize user experience and functionality. Currently pursuing a Bachelor's degree in Computer Science at SZABIST, I have maintained a GPA of 3.84 in my second semester with a CGPA of 3.8, reflecting my dedication to both academics and practical development. Beyond coursework, I have solved over 180+ LeetCode problems, continuously refining my skills in data structures and algorithms. My experience spans full-stack development, API design, and database management, with a growing interest in machine learning integration. Whether it's crafting scalable web applications or optimizing system efficiency, I thrive on solving complex challenges and pushing the boundaries of innovation.
          </div>
        </motion.div>

        {/* Image container */}
        <motion.div
          className='flex-1 p-2 flex items-center justify-center h-full '
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
          viewport={{ once: true, amount: .5 }}
          onMouseEnter={handleImageAnimationIn}
          onMouseLeave={handleImageAnimationOut}
        >
          <div className="content relative lg:h-5/4 lg:w-auto w-[300px] sm:w-[400px]">
            <Image
              ref={imgRef}
              src="/about_profile.png"
              width={300}
              height={500}
              alt='Profile'
              className='h-full w-full object-cover mb-[30px]'
            />
            <div ref={frameRef} className=" absolute transition-all duration-300 top-0 bg-purple-800 opacity-[50%] h-full w-full"></div>
            <div ref={boundryRef} className="absolute transition-all duration-300 top-0 w-full h-full border-2 p-3 border-purple-700 rotate-[-15deg] origin-center "></div>
          </div>
        </motion.div>
      </motion.div>
    </div >
  )
}

export default About;
