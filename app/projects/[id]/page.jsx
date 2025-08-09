// app/projects/[id]/page.jsx
"use client";

import projectsData from "@/components/projects/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectPage({ params }) {
    const project = projectsData.find((p) => p.id === params.id);

    if (!project) {
        return <div className="text-center py-20 text-gray-400">Project not found</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 px-4 md:px-12 lg:px-20 py-10">
            {/* Title & Meta */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
                <p className="text-gray-400 mb-6">{project.short}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Large Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="mb-10"
            >
                <Image
                    src={project.docs.images[0]}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="rounded-2xl shadow-lg border border-gray-700"
                />
            </motion.div>

            {/* Summary */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                <p className="text-gray-300 leading-relaxed">{project.docs.summary}</p>
            </motion.section>

            {/* How It Was Built */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold mb-4">How It Was Built</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.docs.how.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ul>
            </motion.section>

            {/* Architecture */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.docs.architecture.map((part, i) => (
                        <li key={i}>{part}</li>
                    ))}
                </ul>
            </motion.section>

            {/* Long Description */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <h2 className="text-2xl font-semibold mb-4">Details</h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 whitespace-pre-line">{project.docs.long}</p>
                </div>
            </motion.section>
        </div>
    );
}
