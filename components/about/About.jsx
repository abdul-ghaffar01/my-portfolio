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
    if (frameRef.current && boundryRef.current) {
      frameRef.current.style.height = 0;
      boundryRef.current.style.transform = "rotate(0deg)";
    }

  }

  const handleImageAnimationOut = () => {
    if (frameRef.current && boundryRef.current) {
      frameRef.current.style.height = imgSize.height + "px";
      boundryRef.current.style.transform = "rotate(-15deg)"
    }
  }

  const handleImageLoad = () => {
    if (imgRef.current) {
      const imgRect = imgRef.current.getBoundingClientRect();
      setImgSize({ width: imgRect.width, height: imgRect.height });
    }
  };

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
      // color frame 
      frameRef.current.style.width = `${imgSize.width}px`;
      frameRef.current.style.height = `${imgSize.height}px`;

      // Boundry 
      boundryRef.current.style.width = `${imgSize.width}px`;
      boundryRef.current.style.height = `${imgSize.height}px`;


    }
  }, [imgSize]);

  return (
    <div id='about' className='bg-color-500 h-fit py-5 flex flex-col items-center justify-center pb-[80px]'>
      <Heading className="" text="About me" color="text-color-light" lineColor="bg-color-light" />

      {/* Full content */}
      <motion.div className="content mt-5 h-fit flex flex-col lg:flex-row items-center gap-[30px] justify-between w-full max-w-[1100px]  overflow-hidden xs:overflow-visible">

        {/* About me text container */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
          viewport={{ once: true, amount: .3 }}
          className="text flex-1 min-h-fit p-6 flex gap-[10px] "
        >
          {/* Vertical line */}
          <motion.div
            className="line w-[50px] bg-color-light rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100px" }}
            transition={{ duration: 1, ease: "easeInOut", delay: .8 }}
            viewport={{ once: true }}
          ></motion.div>

          {/* About me text */}
          <div className="h-fit text-slate-200 text-[17px]">
            <div className='h-fit flex items-center'>
              <span className='text-xl font-bold whitespace-nowrap'>
                I'm Abdul Ghaffar,
              </span>
              <motion.div initial={{ flex: 0 }}
                whileInView={{ flex: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: .8 }}
                viewport={{ once: true }} className='flex-1  border-t border-b border-gray-300 ml-2 mb-0' ></motion.div>
            </div>
            <p className='min-h-fit'>
              a backend-focused full-stack developer with a strong foundation in problem-solving, algorithms, and scalable system design. Currently pursuing a Bachelor's in Computer Science at SZABIST with a CGPA of 3.8 and two academic scholarships, I balance academic excellence with hands-on development. I specialize in TypeScript, Next.js, and NestJS, and I’m currently learning Golang for cloud computing. My projects include a personal portfolio (iabdulghaffar.com), a MERN-based investment platform with real-time updates, an e-commerce website with secure payments, and a custom DBMS (Aughr) built in C++ with its own query language. With over 180 LeetCode problems solved, I’m driven by building efficient backend systems and contributing to impactful software.
            </p>
          </div>
        </motion.div>

        {/* Image container */}
        <motion.div
          className='flex-1 p-2 flex items-center justify-center h-full '
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
          viewport={{ once: true, amount: .4 }}
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
              onLoad={handleImageLoad}
            />
            <div ref={frameRef} className=" absolute flex flex-col justify-evenly transition-all duration-300 top-0 bg-color-800 opacity-[50%] h-full w-full"></div>
            <div ref={boundryRef} className="absolute transition-all duration-300 top-0 w-full h-full border-2 p-3 border-color-700 rotate-[-15deg] origin-center "></div>
          </div>
        </motion.div>
      </motion.div>
    </div >
  )
}

export default About;
