
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarClient({ links }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Variants for simultaneous animations
  const itemVariants = {
    hidden: { y: -30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        initial="hidden"
        animate="show"
        className="hidden md:flex relative items-center gap-12"
      >
        {links.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative cursor-pointer text-gray-300 font-medium"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(index)}
          >
            <Link
              href={item.link}
              aria-label={item.ariaLabel}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
            {(hoveredIndex === index || activeIndex === index) && (
              <motion.span
                layoutId="dot"
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </motion.div>
        ))}

        {/* Resume Button */}
        <motion.div variants={itemVariants}>
          <Link aria-label="Resume" href="/resume" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold shadow-[0_0_12px_rgba(59,130,246,0.4)] transition"
            >
              Resume
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Hamburger */}
      <button
        aria-label="Open Menu"
        onClick={() => setSidebarOpen(true)}
        className="md:hidden flex flex-col gap-1 w-10 h-10 justify-center items-center bg-gray-800/60 rounded-lg"
      >
        <span className="w-6 h-[2px] bg-blue-400"></span>
        <span className="w-6 h-[2px] bg-blue-400"></span>
        <span className="w-6 h-[2px] bg-blue-400"></span>
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 h-screen w-3/4 bg-gray-950/90 backdrop-blur-xl border-l border-gray-800 z-50 flex flex-col p-8"
            >
              <button
                aria-label="Close menu"
                onClick={() => setSidebarOpen(false)}
                className="self-end mb-8"
              >
                <div className="relative w-6 h-6">
                  <span className="absolute w-6 h-[2px] bg-blue-400 rotate-45 top-3"></span>
                  <span className="absolute w-6 h-[2px] bg-blue-400 -rotate-45 top-3"></span>
                </div>
              </button>

              <ul className="flex flex-col gap-6 text-center text-lg text-gray-300 font-medium">
                {links.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { delay: index * 0.1 },
                    }}
                  >
                    <Link
                      href={item.link}
                      aria-label={item.ariaLabel}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
