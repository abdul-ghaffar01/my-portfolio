"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectItem({ project, left }) {
  const statusColors = {
    completed: 'bg-green-500/80 text-white',
    ongoing: 'bg-yellow-500/80 text-white',
    archived: 'bg-gray-500/80 text-white'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 60, damping: 15 }
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative group max-w-5xl mx-auto flex flex-col md:flex-row my-2
        ${left ? '' : 'md:flex-row-reverse'} 
        items-stretch gap-6 min-h-[400px] rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 backdrop-blur-lg 
        hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-500`}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[250px] md:h-auto overflow-hidden flex-shrink-0">
        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`px-3 py-1 text-sm rounded-full shadow-md ${statusColors[project.status]
              }`}
          >
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>

        {/* Image */}
        <motion.img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
          whileHover={{ scale: 1.08 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: left ? 40 : -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.15, type: 'spring', stiffness: 50, damping: 12 }
        }}
        viewport={{ once: true }}
        className={`flex flex-col justify-center w-full md:w-1/2 px-2 md:px-6 py-2 
          ${left ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}
      >
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 max-w-md">
          {project.short}
        </p>

        {/* Tags */}
        <ul
          className={`flex flex-wrap gap-2 mb-4 ${left ? 'justify-start' : 'justify-start md:justify-end'
            }`}
        >
          {project.tags.map((tag, index) => (
            <li
              key={index}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-gray-800/70 border border-gray-700 text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="inline-block px-5 py-2 rounded-lg text-white text-center bg-gray-700 hover:bg-gray-800 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              GitHub
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="inline-block px-5 py-2 rounded-lg text-white text-center bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
            >
              Live Demo
            </Link>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-block px-5 py-2 rounded-lg text-white text-center bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
          >
            View Docs →
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
