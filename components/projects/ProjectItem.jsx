import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const ProjectItem = ({ project, left }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 60, damping: 15, duration: 1.2 }
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative group max-w-5xl mx-auto w-full flex flex-col md:flex-row 
        ${left ? "md:flex-row" : "md:flex-row-reverse"} 
        items-center gap-6 rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 backdrop-blur-lg 
        hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-500 p-4 md:p-0 md:h-[400px]`}
    >
      {/* Image Side */}
      <div className="relative w-full md:w-1/2 h-[250px] md:h-full overflow-hidden">
        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`px-3 py-1 text-sm rounded-full shadow-md ${project.isCompleted ? "bg-green-500/80 text-white" : "bg-yellow-500/80 text-white"
              }`}
          >
            {project.isCompleted ? "Completed" : "In Progress"}
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

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: left ? 50 : -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, type: "spring", stiffness: 50, damping: 12 }
        }}
        viewport={{ once: true }}
        className={`flex flex-col justify-center w-full md:w-1/2 px-4 md:px-8 py-4 md:py-0 
          text-left ${left ? "md:items-start" : "md:items-end md:text-right"}`}
      >
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 max-w-md">
          {project.desc}
        </p>

        {/* Tools */}
        <ul className={`flex flex-wrap gap-2 mb-4 ${left ? "justify-start" : "justify-start md:justify-end"}`}>
          {project.tools.map((tool, index) => (
            <li
              key={index}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-gray-800/70 border border-gray-700 text-gray-300"
            >
              {tool}
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link
          href={project.link}
          target="_blank"
          className="relative inline-block px-5 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
        >
          {project.btnTxt ? project.btnTxt : "View Project →"}
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default ProjectItem
