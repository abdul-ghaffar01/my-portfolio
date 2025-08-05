"use client";
import React, { useEffect, useState } from "react";
import Logo from "./navbar/Logo";
import { motion } from "framer-motion";

const Loader = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  const [bubbles, setBubbles] = useState([]);

  // Generate bubbles client-side only
  useEffect(() => {
    const generated = Array.from({ length: 8 }).map(() => ({
      size: 30 + Math.random() * 60,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 6 + Math.random() * 4,
    }));
    setBubbles(generated);
  }, []);

  // Animate "Loading..." dots
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) =>
        prev.length < 10 ? prev + "." : "Loading"
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[100dvh] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Grey Bubbles */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0.15, 0.4, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(180,180,180,0.08), rgba(80,80,80,0.04))",
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
          }}
        />
      ))}

      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="drop-shadow-[0_0_15px_rgba(200,200,200,0.1)]"
      >
        <Logo />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-gray-400 text-sm tracking-[0.3em]"
      >
        {loadingText}
      </motion.p>
    </div>
  );
};

export default Loader;
