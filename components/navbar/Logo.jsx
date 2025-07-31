import { motion } from "framer-motion"

const Logo = ({ startDelay }) => {
  return (
    <motion.div 
      initial={{ scale: 0.9 }}
      animate={{ scale: [0.95, 1, 0.95] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[60px] h-[60px] flex items-center justify-center"
    >
      {/* Lines */}
      <div className="absolute top-0 w-full h-full">
        {/* Top Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 0.3, delay: startDelay || 0.8 } }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        ></motion.div>

        {/* Right Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%", transition: { duration: 0.3, delay: 1.0 } }}
          viewport={{ once: true }}
          className="absolute right-0 top-0 w-[4px] bg-gradient-to-b from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(147,51,234,0.6)]"
        ></motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%", transition: { duration: 0.3, delay: 1.2 } }}
          viewport={{ once: true }}
          className="absolute bottom-0 right-0 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        ></motion.div>

        {/* Left Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%", transition: { duration: 0.3, delay: 1.4 } }}
          viewport={{ once: true }}
          className="absolute left-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(147,51,234,0.6)]"
        ></motion.div>
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.4, delay: 1.6 } }}
        viewport={{ once: true }}
        animate={{ textShadow: ["0 0 5px #3b82f6", "0 0 15px #9333ea", "0 0 5px #3b82f6"] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute text-2xl font-extrabold text-gray-200 tracking-widest"
      >
        AG
      </motion.div>
    </motion.div>
  )
}

export default Logo
