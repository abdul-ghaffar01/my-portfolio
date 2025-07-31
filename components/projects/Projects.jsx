import React from 'react'
import Heading from '../Heading'
import ProjectItem from './ProjectItem'
import projectsData from './data'

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="relative w-full bg-gray-950 text-gray-200 py-20 overflow-hidden"
    >
      {/* Background Accent Blobs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[120px]"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

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

      {/* Projects List */}
      <div className="relative z-10 mt-16 flex flex-col gap-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} left={index % 2 === 0} />
        ))}
      </div>

      {/* Subtle Bottom Divider Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-gray-950 to-transparent"></div>
    </section>
  )
}

export default Projects
