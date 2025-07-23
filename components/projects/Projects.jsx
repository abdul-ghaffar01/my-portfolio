import React from 'react'
import Heading from '../Heading'
import ProjectItem from './ProjectItem'
import projectsData from './data'
const Projects = () => {
    return (
        <div id="projects" className='relative w-full bg-color-900 min-h-[600px] h-fit flex flex-col items-center py-8'>

            <div className='w-[200vw] absolute h-full bg-color-900 z-[2] rotate-[4deg] top-[-50px] '></div>
            <div className="w-screen flex flex-col items-center z-[2] cont">
                <Heading text="What I've Built So Far" color="text-color-light" lineColor="bg-color-light" />
                <div className=" w-full mt-5">
                    {projectsData.map((project, index) => {
                        return <ProjectItem key={index} project={project} left={(index) % 2 === 0} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default Projects