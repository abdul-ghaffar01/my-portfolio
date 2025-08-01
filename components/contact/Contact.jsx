"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const Contact = () => {
  return (
    <section className="relative min-h-[500px] bg-gray-950 py-20 px-6 text-center flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-950 to-gray-950 pointer-events-none"></div>

      {/* Minimal Floating Bubbles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full blur-2xl opacity-30 bg-blue-500/20"
          style={{
            width: `${50 + i * 20}px`,
            height: `${50 + i * 20}px`,
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent z-10"
      >
        Ready to Collaborate?
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-gray-400 max-w-2xl text-lg z-10"
      >
        Have an idea or project in mind? Drop me a message and let's build something amazing together.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 z-10"
      >
        <Link
          href="mailto:agscontact777@gmail.com"
          className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
        >
          Let’s Talk ✨
        </Link>
      </motion.div>
    </section>
  )
}

export default Contact
