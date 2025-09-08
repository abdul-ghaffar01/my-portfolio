import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectItemProjectsPage({ project }) {
    const statusColors = {
        completed: 'bg-green-500/80 text-white',
        ongoing: 'bg-yellow-500/80 text-white',
        archived: 'bg-gray-500/80 text-white'
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" }
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative group w-full h-fit min-w-[300px] m-2 max-w-md mx-auto flex flex-col gap-4 rounded-2xl overflow-hidden 
    bg-gray-900/50 border border-gray-800 backdrop-blur-lg 
    hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-500`}
        >

            {/* Image Section */}
            <div className="relative w-full h-[250px] overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-20">
                    <span
                        className={`px-3 py-1 text-sm rounded-full shadow-md ${statusColors[project.status]}`}
                    >
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                </div>

                {/* Image */}
                <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-3 px-4 pb-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>

                {/* Short Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{project.short}</p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <li
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-gray-800/70 border border-gray-700 text-gray-300"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-wrap mt-2">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="inline-block px-5 py-2 rounded-lg text-white bg-gray-700 hover:bg-gray-800 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                        >
                            GitHub
                        </Link>
                    )}
                    {project.demo && (
                        <Link
                            href={project.demo}
                            target="_blank"
                            className="inline-block px-5 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                        >
                            Live Demo
                        </Link>
                    )}
                    <Link
                        href={`/projects/${project.id}`}
                        className="inline-block px-5 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
                    >
                        View Docs →
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
