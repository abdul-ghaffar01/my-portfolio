"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';
import data from "./data";

const floatingBubbles = Array.from({ length: 4 }).map(() => ({
  size: 20 + Math.random() * 40,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 8 + Math.random() * 4,
}));

const Skills = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -10, 0],
      x: [0, i % 2 === 0 ? 6 : -6, 0],
      transition: { duration: floatingBubbles[i].duration, delay: floatingBubbles[i].delay, repeat: Infinity, ease: "easeInOut" },
    }));
  }, [controls]);

  return (
    <section 
      id="skills" 
      className="relative w-full min-h-[550px] flex flex-col items-center overflow-hidden py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Floating Subtle Bubbles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {floatingBubbles.map((bubble, i) => (
          <motion.div
            key={i}
            custom={i}
            animate={controls}
            className="absolute rounded-full blur-2xl opacity-15"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: `radial-gradient(circle, rgba(255,255,255,0.05), transparent)`,
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
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-100"
        >
          My Skills
        </motion.h2>

        {/* Punchline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 }}}
          viewport={{ once: true }}
          className="mt-2 text-gray-400 max-w-lg text-center px-4 text-sm italic"
        >
          Tools and technologies I use to craft efficient, scalable, and modern solutions.
        </motion.p>

        {/* Skills Wrap (Auto-width tags, centered) */}
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4 px-6 max-w-4xl"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: index * 0.04, duration: 0.4, ease: "easeOut" }}}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-md
                         bg-gray-100/80 shadow-sm hover:shadow-md border border-gray-300/40
                         transition-all duration-300 cursor-pointer w-auto"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-8 h-8">
                <Image 
                  src={item.img} 
                  width={18} 
                  height={18} 
                  alt={item.name} 
                  className="brightness-100"
                />
              </div>

              <p className="text-xs md:text-sm font-medium text-gray-800 group-hover:text-blue-600 transition">
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
