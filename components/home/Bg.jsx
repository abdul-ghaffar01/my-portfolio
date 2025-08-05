"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Bg = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!window) return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    // ✅ Simpler, lighter mobile background
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-gray-950">
        <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full bg-blue-500/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[180px] h-[180px] rounded-full bg-gray-600/20 blur-[90px]"></div>
      </div>
    );
  }

  // ✅ Full animated background for larger screens
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-gray-950">
      {/* Diagonal glowing streaks */}
      <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: "50%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute top-1/4 w-[200%] h-[4px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rotate-[10deg]"
      />
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: "-50%" }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute bottom-1/3 w-[200%] h-[4px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-[8deg]"
      />

      {/* Floating glass shards */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4"
      >
        <div className="absolute w-[300px] h-[400px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl rotate-[8deg] left-[15%] top-[10%] shadow-[0_0_30px_rgba(59,130,246,0.15)]"></div>
        <div className="absolute w-[250px] h-[350px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl -rotate-[12deg] right-[20%] bottom-[15%] shadow-[0_0_30px_rgba(59,130,246,0.15)]"></div>
        <div className="absolute w-[200px] h-[300px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl rotate-[18deg] left-[40%] top-[40%] shadow-[0_0_30px_rgba(59,130,246,0.2)]"></div>
      </motion.div>

      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[160px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-gray-600/20 blur-[140px]"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[250px] -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default Bg;
