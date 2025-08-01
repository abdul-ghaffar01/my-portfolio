"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';
import data from "./data";

const floatingBubbles = Array.from({ length: 15 }).map(() => ({
  size: 30 + Math.random() * 60,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 10 + Math.random() * 5,
}));

const Skills = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -20, 0],
      x: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: { duration: floatingBubbles[i].duration, delay: floatingBubbles[i].delay, repeat: Infinity, ease: "easeInOut" },
    }));
  }, [controls]);

  return (
    <section id="skills" className="relative w-full min-h-[650px] flex flex-col items-center overflow-hidden py-16">
      {/* Sticky Glass Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900/90 via-gray-950/95 to-gray-900/90 backdrop-blur-[6px] sticky top-0" />

      {/* Floating Bubbles */}
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
              background: `radial-gradient(circle, rgba(59,130,246,0.2), rgba(147,51,234,0.15))`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-blue-400 mt-8"
        >
          My Skills
        </motion.h2>

        {/* Punchline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 }}}
          viewport={{ once: true }}
          className="mt-3 text-gray-300 max-w-xl text-center px-4 text-sm italic"
        >
          Tools and technologies I use to craft modern, efficient, and scalable solutions.
        </motion.p>

        {/* Skills Grid (Compact) */}
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4 px-4 max-w-4xl"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: index * 0.05, duration: 0.4, ease: "easeOut" }}}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg 
                         bg-white/10 backdrop-blur-lg border border-gray-700 
                         hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                         transition-all duration-300 cursor-pointer"
            >
              {/* Smaller Icon */}
              <div className="flex items-center justify-center w-9 h-9 rounded-full 
                              bg-white/80 shadow-inner group-hover:scale-110 transition">
                <Image 
                  src={item.img} 
                  width={20} 
                  height={20} 
                  alt={item.name} 
                  className="brightness-110"
                />
              </div>

              <p className="text-xs md:text-sm font-semibold text-gray-200 group-hover:text-blue-400 transition">
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
