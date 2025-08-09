import React from 'react'
import Heading from '../Heading'
import ProjectItem from './ProjectItem'
import projectsData from './data'
import Link from 'next/link'

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0B0B0F] text-gray-200 py-20 overflow-hidden"
    >
      {/* Soft Static Light Accents */}
      <div className="absolute -top-24 -left-32 w-[350px] h-[350px] rounded-full bg-blue-500/5"></div>
      <div className="absolute top-1/3 right-[-100px] w-[250px] h-[250px] rounded-full bg-purple-500/5"></div>
      <div className="absolute bottom-[-150px] left-1/3 w-[400px] h-[400px] rounded-full bg-blue-400/5"></div>

      {/* Grid Overlay - Ultra Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center">
        <Heading
          text="Projects"
          color="text-blue-400"
          lineColor="bg-blue-500"
        />
        <p className="mt-4 text-gray-400 text-center max-w-xl">
          A showcase of my work—blending creativity, performance, and clean architecture.
        </p>
      </div>

      {/* Projects List - Only Top 3 */}
      <div className="relative z-10 mt-16 flex flex-col gap-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectItem key={index} project={project} left={index % 2 === 0} />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="relative z-10 mt-12 flex justify-center">
        <Link href="/projects">
          <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold shadow-[0_0_12px_rgba(59,130,246,0.4)] transition duration-300 hover:scale-[1.1]">
            View All Projects
          </span>
        </Link>
      </div>

      {/* Bottom Fade Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#0B0B0F] to-transparent"></div>
    </section>
  )
}

export default Projects
