"use client"
import { motion } from 'framer-motion';
import Image from 'next/image'; // Remove or replace if not using Next.js
const About = () => {
  // Container variant to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variant for text blocks
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  // Variant for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-purple-500 py-20 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Animated image container */}
        <motion.div
          variants={imageVariants}
          className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
        >
          <Image
            src="/about_profile.png" // Replace with your image path
            alt="About Me"
            width={500}
            height={500}
            className="rounded-full shadow-2xl"
          />
        </motion.div>

        {/* Animated text content */}
        <motion.div variants={textVariants} className="w-full lg:w-1/2 text-white">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hello, I'm [Your Name], a passionate frontend developer who loves creating interactive and visually stunning websites.
            I specialize in modern web technologies and always strive to build unique user experiences.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-purple-500 font-bold rounded-full shadow-lg transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
