"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';
import data from "./data";

const floatingBubbles = Array.from({ length: 15 }).map(() => ({
  size: 40 + Math.random() * 70,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 10 + Math.random() * 5,
}));

const Skills = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -30, 0],
      x: [0, i % 2 === 0 ? 15 : -15, 0],
      transition: { duration: floatingBubbles[i].duration, delay: floatingBubbles[i].delay, repeat: Infinity, ease: "easeInOut" },
    }));
  }, [controls]);

  return (
    <section id="skills" className="relative w-full min-h-[700px] flex flex-col items-center overflow-hidden py-20">
      {/* Tilted Background (Lowest Layer) */}
      <div className="absolute w-[200vw] h-[160%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rotate-[-4deg] top-[-80px] z-[0]" />

      {/* Floating Bubbles (Above Tilted Background) */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {floatingBubbles.map((bubble, i) => (
          <motion.div
            key={i}
            custom={i}
            animate={controls}
            className="absolute rounded-full blur-3xl opacity-60"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: `radial-gradient(circle, rgba(59,130,246,0.25), rgba(147,51,234,0.2))`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
            }}
          />
        ))}
      </div>

      {/* Content Layer (Above Bubbles) */}
      <div className="relative z-[2] flex flex-col items-center">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-blue-400 mt-10"
        >
          My Skills
        </motion.h2>

        {/* Punchline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 }}}
          viewport={{ once: true }}
          className="mt-4 text-gray-300 max-w-2xl text-center px-4 italic"
        >
          Tools and technologies I use to craft modern, efficient, and scalable solutions.
        </motion.p>

        {/* Skills Grid */}
        <motion.div 
          className="mt-14 flex flex-wrap justify-center gap-6 px-6 max-w-5xl"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: index * 0.07, duration: 0.5, ease: "easeOut" }}}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="group relative flex items-center gap-3 px-6 py-4 rounded-xl 
                        bg-gray-800/70 backdrop-blur-md border border-gray-700 
                        hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                        transition-all duration-300 cursor-pointer"
            >
              {/* Icon Glow */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full 
                              bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                              group-hover:from-blue-500/40 group-hover:to-purple-500/40">
                <Image 
                  src={item.img} 
                  width={26} 
                  height={26} 
                  alt={item.name} 
                  className="brightness-125 group-hover:brightness-150"
                />
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-blue-400 transition">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
