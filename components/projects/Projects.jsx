import React from 'react'
import Heading from '../Heading'
import ProjectItem from './ProjectItem'
import projectsData from './data'
const Projects = () => {
    return (
        <div className='relative w-full bg-purple-900 min-h-[600px] h-fit flex flex-col items-center py-8'>

            <div className='w-[200vw] absolute h-full bg-purple-900 z-[2] rotate-[4deg] top-[-50px] '></div>
            <div className="w-screen flex flex-col items-center z-[2] cont">
                <Heading text="What I've Built So Far" color="text-white" lineColor="bg-white" />
                <div className=" w-full mt-5">
                    {projectsData.map((project, index) => {
                        return <ProjectItem key={index} project={project} left={(index) % 2 === 0} />
                    })}
                </div>
                <div className='text-xl text-center text-white mt-5'>Other projects will be updated soon.</div>
            </div>

        </div>
    )
}

export default Projects