import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion } from "framer-motion"
const ProjectItem = ({ project, left }) => {
    const coverRef = useRef(null)
    const hideCover = () => {
        if (coverRef.current)
            if (window.innerWidth >= 786)
                coverRef.current.style.opacity = 0;
    }
    const showCover = () => {
        if (coverRef.current)
            if (window.innerWidth >= 786)
                coverRef.current.style.opacity = .9;
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
            viewport={{ once: true, amount: .5 }}
            onMouseEnter={hideCover}
            onMouseLeave={showCover}
            className='relative max-w-full w-[96%] hover:shadow-xl md:hover:shadow-none h-fit min-h-[450px] lg:w-[80%] mx-auto  mt-[80px]'>
            {/* Project Image Container */}
            <div className={`absolute w-full h-full overflow-hidden group md:w-[50%] ${left ? "md:left-0" : "md:right-0"}`}>
                <img
                    src={project.img}
                    alt="Project image"
                    width={600}
                    height={600}
                    className='w-full h-full object-cover border border-slate-300 '
                />
                <div
                    ref={coverRef}
                    className='absolute top-0 opacity-[0.9] transition-all duration-200 bg-purple-500 w-full h-full group-hover:opacity-0 '></div>
            </div>

            {/* Text & Content */}
            <div className={`absolute text-[#300a35] ${left ? "md:right-0 md:items-end" : "md:left-0 md:items-start"} md:w-[50%] md:text-white md:px-5 w-full h-full top-0 px-2 py-5 md:h-full md:flex md:flex-col md:justify-center md:w-[calc(50%+150px)]`}>

                {/* Title of the project */}
                <div className={`text-purple-900 font-bold text-2xl md:text-2xl w-full md:text-white ${left ? "md:text-right" : "md:text-left"} `}>{project.title}</div>

                {/* Description of the project */}
                <div className={`relative md:mt-5 text-lg md:bg-purple-800 md:p-3 md:relative shadow-md `}>{project.desc}</div>

                {/* Tools Used */}
                <ul className={`flex ${left ? "md:justify-end" : "md:justify-start"} w-full gap-[10px]`}>
                    {project.tools.map((item, index) => (
                        <li key={index} className='text-lg mt-2'>{item}</li>
                    ))}
                </ul>

                {/* View Project Button */}
                <Link href={project.link} target='_blank'
                    className='border border-purple-900 py-2 px-5 block mt-2 text-center w-fit hover:bg-purple-700 hover:text-white transition-all duration-300 md:border-slate-100 '>
                    View project
                </Link>
            </div>
        </motion.div>

    )
}

export default ProjectItem