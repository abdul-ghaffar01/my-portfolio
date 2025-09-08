"use client"
import { motion } from "framer-motion"

const Logo = ({ startDelay = 0 }) => {
  return (
    <div className="relative w-[60px] h-[60px] flex items-center justify-center">
      {/* Lines */}
      <div className="absolute top-0 w-full h-full">
        {/* Top Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3, delay: startDelay + 0.2 }}
          className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500"
        />

        {/* Right Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.3, delay: startDelay + 0.5 }}
          className="absolute right-0 top-0 w-[4px] bg-gradient-to-b from-purple-500 to-blue-500"
        />

        {/* Bottom Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3, delay: startDelay + 0.8 }}
          className="absolute bottom-0 right-0 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500"
        />

        {/* Left Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.3, delay: startDelay + 1.1 }}
          className="absolute left-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 to-blue-500"
        />
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: startDelay + 1.4 }}
        className="absolute text-2xl font-extrabold text-gray-200 tracking-widest"
      >
        AG
      </motion.div>
    </div>
  )
}

export default Logo
