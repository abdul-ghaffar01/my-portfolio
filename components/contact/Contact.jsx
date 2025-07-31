"use client"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

const floatingBubbles = Array.from({ length: 12 }).map((_, i) => ({
  size: 40 + Math.random() * 80,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 8 + Math.random() * 6,
}))

const sparkles = Array.from({ length: 20 }).map(() => ({
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 2,
}))

const Contact = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -30, 0],
      x: [0, i % 2 === 0 ? 15 : -15, 0],
      transition: { duration: floatingBubbles[i].duration, delay: floatingBubbles[i].delay, repeat: Infinity, ease: "easeInOut" },
    }))
  }, [controls])

  return (
    <section className="relative bg-gray-900 py-24 mx-auto px-6 overflow-hidden text-center flex flex-col items-center">
      {/* Floating Bubbles */}
      {floatingBubbles.map((bubble, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          className="absolute rounded-full blur-3xl opacity-60"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle, rgba(59,130,246,0.3), rgba(147,51,234,0.25))`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
          }}
        />
      ))}

      {/* Sparkle Particles */}
      {sparkles.map((spark, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0.5, scale: 0 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.5, 1, 0.5] }}
          transition={{ duration: spark.duration, repeat: Infinity, delay: Math.random() * 2 }}
          className="absolute rounded-full bg-white"
          style={{
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            left: `${spark.left}%`,
            top: `${spark.top}%`,
          }}
        />
      ))}

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        className="relative text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent z-10 animate-gradient"
      >
        Ready to Collaborate?
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
        viewport={{ once: true }}
        className="mt-4 text-gray-400 max-w-2xl text-lg z-10"
      >
        Whether it's a project, an idea, or just a hello—drop me a message, and let's make something extraordinary happen!
      </motion.p>

      {/* Pulsing CTA Button with Sparkles */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
        viewport={{ once: true }}
        className="mt-8 z-10 relative"
      >
        {/* Sparkles around button */}
        <motion.div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              animate={{ opacity: [1, 0], scale: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Link
            href="mailto:agscontact777@gmail.com"
            className="relative inline-block px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            Let’s Talk ✨
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
