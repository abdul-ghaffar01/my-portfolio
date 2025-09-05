"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) =>
        prev.length < 10 ? prev + "." : "Loading"
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[100dvh] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="text-gray-300 text-lg tracking-[0.3em]"
      >
        {loadingText}
      </motion.p>
    </div>
  );
};

export default Loader;
