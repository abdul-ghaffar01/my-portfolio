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
      boundryRef.current.style.transform = "rotate(-10deg)"
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
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  useEffect(() => {
    if (frameRef.current) {
      frameRef.current.style.width = `${imgSize.width}px`;
      frameRef.current.style.height = `${imgSize.height}px`;
      boundryRef.current.style.width = `${imgSize.width}px`;
      boundryRef.current.style.height = `${imgSize.height}px`;
    }
  }, [imgSize]);

  return (
    <div id='about' className='z-[2] bg-gray-900 h-fit py-16 flex flex-col items-center justify-center relative overflow-hidden'>
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full -translate-x-1/2"></div>

      <Heading className="" text="About Me" color="text-blue-400" lineColor="bg-blue-400" />

      {/* Full content */}
      <motion.div className="content mt-10 h-fit flex flex-col lg:flex-row items-center gap-[50px] justify-between w-full max-w-[1100px] px-4 overflow-hidden">

        {/* About me text container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
          viewport={{ once: true, amount: .3 }}
          className="text flex-1 p-6"
        >
          <div className="border-l-4 border-blue-500 pl-5">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Who am I?</h3>
            <p className="text-gray-300 text-[17px] leading-relaxed">
              I' <span className='font-semibold text-white'>Abdul Ghaffar</span>,
              a backend-focused full-stack developer with a strong foundation in algorithms,
              scalable systems, and cloud computing. I’m pursuing a Bachelor's in Computer Science
              at SZABIST with a CGPA of 3.8 and two scholarships.
            </p>
            <p className="text-gray-400 mt-4">
              I specialize in TypeScript, Next.js, and NestJS, and I'm currently learning
              <span className='text-blue-400'> Golang </span> for cloud-based systems.
              My projects include a portfolio, real-time investment platform, e-commerce store,
              and a custom DBMS (Aughr) built in C++.
            </p>
          </div>
        </motion.div>

        {/* Image container */}
        <motion.div
          className='flex-1 p-10 flex items-center justify-center relative'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
          viewport={{ once: true }}
          onMouseEnter={handleImageAnimationIn}
          onMouseLeave={handleImageAnimationOut}
        >
          {/* Floating particles */}
          <div className="absolute w-[250px] h-[250px] rounded-full bg-blue-500/20 blur-[120px] -z-10"></div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-[300px] sm:w-[400px]"
          >
            <Image
              ref={imgRef}
              src="/about_profile.png"
              width={300}
              height={500}
              alt='Profile'
              className='h-full w-full object-cover rounded-lg shadow-lg'
              onLoad={handleImageLoad}
            />

            {/* Overlay Frame */}
            <div
              ref={frameRef}
              className="absolute top-0 left-0 bg-blue-500/10 backdrop-blur-sm rounded-lg transition-all duration-300"
            ></div>

            {/* Tilted Border */}
            <div
              ref={boundryRef}
              className="absolute top-0 border-2 border-blue-500/70 rounded-lg p-3 rotate-[-10deg] transition-all duration-300 origin-center"
            ></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About;
