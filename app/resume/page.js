"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, Github, Globe } from "lucide-react";
import projectsData from "@/components/projects/data"; 

const Resume = () => {
  const resumeRef = useRef();
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  const handleDownload = () => {
    // Swap with html2pdf/react-to-pdf for real PDF export
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto resume-container">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Abdul Ghaffar</h1>
          <button
            onClick={handleDownload}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Download size={18} /> Download PDF
          </button>
        </header>

        {/* About */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Full Stack Developer (backend-focused) with hands-on experience in
            building scalable web applications, microservices, and DevOps
            pipelines. Skilled in Node.js, Next.js, and Docker with proven
            freelance success delivering full-stack solutions. Passionate about
            cloud computing, automation, and creating impactful digital
            experiences.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
            <span>Node.js & Express</span>
            <span>Next.js / React</span>
            <span>MongoDB / SQL</span>
            <span>Docker & Nginx</span>
            <span>CI/CD & GitHub Actions</span>
            <span>Microservices Architecture</span>
            <span>WebSockets</span>
            <span>Authentication (JWT/OAuth)</span>
            <span>Cloud Deployments</span>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Education
          </h2>
          <div>
            <p className="font-medium text-gray-700">
              Bachelor in Computer Science
            </p>
            <p className="text-gray-600">
              4th Semester | Expected Graduation: 2026
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Freelance Experience
          </h2>
          <div>
            <p className="font-medium text-gray-700">
              Full Stack Developer — Freelance
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Developed and deployed scalable full-stack web solutions.</li>
              <li>
                Delivered modern, responsive UI designs with React & Tailwind.
              </li>
              <li>
                Automated deployments with Docker, Nginx, and GitHub webhooks.
              </li>
              <li>
                Integrated APIs, authentication, and payment systems for
                clients.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Featured Projects
          </h2>
          <div className="space-y-6">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 rounded-lg shadow border"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.short}</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {project.docs.how.slice(0, 2).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-3 text-blue-600">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Globe size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hobbies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
            Hobbies & Interests
          </h2>
          <p className="text-gray-600">
            Reading technology books and programming literature | Digital art
            and design (enhancing frontend aesthetics and creativity)
          </p>
        </section>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          button {
            display: none;
          }
          .resume-container {
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
