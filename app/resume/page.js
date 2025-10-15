"use client";

import { useRef } from "react";
import { Download, Github, Globe, Mail, Linkedin } from "lucide-react";
import projectsData from "@/components/projects/data";

const Resume = () => {
  const btnRef = useRef();

  const handleDownload = () => {
    btnRef.current.style.display = "none";
    window.print();
    btnRef.current.style.display = "flex";
  };

  // Select top 4 strong projects
  const featuredProjects = projectsData.filter(p =>
    ["p2", "p8", "p1", "p3"].includes(p.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto resume-container bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <header className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Abdul Ghaffar</h1>
            <p className="text-gray-700 text-sm mt-1">
              Backend-Focused Full Stack Developer
            </p>
            <div className="flex flex-col gap-1 mt-2 text-sm text-gray-600">
              <a
                href="mailto:agscontact777@gmail.com"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Mail size={14} /> agscontact777@gmail.com
              </a>
              

              <a
                href="https://github.com/abdul-ghaffar01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Github size={14} /> github.com/abdul-ghaffar01
              </a>
              

              <a
                href="https://www.linkedin.com/in/abdul-ghaffar01/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Linkedin size={14} /> linkedin.com/in/abdul-ghaffar01
              </a>
              

              <a
                href="https://iabdulghaffar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                🌐 iabdulghaffar.com
              </a>
            </div>

          </div>

          <button
            ref={btnRef}
            onClick={handleDownload}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Download size={16} /> Download PDF
          </button>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            I am a backend-focused full-stack developer with strong foundations
            in algorithms, scalable systems, and cloud computing. Experienced in
            Node.js, Next.js, and DevOps automation using Docker and Nginx. I
            specialize in building secure, performant web systems and
            microservices architectures. Currently pursuing a Bachelor’s in
            Computer Science at SZABIST with a 3.8 CGPA and two merit
            scholarships.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-3">
            Professional Experience
          </h2>

          <div>
            <p className="font-medium text-gray-800 text-sm">
              Freelance Full Stack Developer <span className="text-gray-500">| Remote</span>
            </p>
            <p className="text-gray-600 text-sm mb-2">2022 — Present</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>
                Delivered multiple full-stack web applications for clients across
                e-commerce, portfolio, and automation domains.
              </li>
              <li>
                Designed and deployed backend systems using Node.js, Express,
                MongoDB, and RESTful APIs.
              </li>
              <li>
                Integrated authentication, real-time features, and third-party
                services like Stripe and Firebase.
              </li>
              <li>
                Managed deployments using Docker, Nginx, and CI/CD pipelines with
                GitHub Actions and Webhooks.
              </li>
              <li>
                Collaborated directly with clients to gather requirements,
                implement features, and ensure on-time delivery.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-3">
            Major Projects
          </h2>
          <div className="space-y-4">
            {featuredProjects.map(project => (
              <div key={project.id}>
                <h3 className="font-semibold text-gray-900 text-base">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-snug mt-1">
                  {project.docs.summary}
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
                  {project.docs.how.slice(0, 4).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-2 text-blue-600 text-sm">

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Globe size={14} /> Demo: {project.demo.replace(/^https?:\/\//, '')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
            Education
          </h2>
          <div>
            <p className="font-medium text-gray-800 text-sm">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-gray-600 text-sm">
              SZABIST University — CGPA: 3.8 | 3 Semesters completed, Two Merit Scholarships
              <br />
              Expected Graduation: January 2028
            </p>
          </div>
        </section>

        {/* Hobbies */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
            Hobbies & Interests
          </h2>
          <p className="text-gray-700 text-sm">
            Reading books, learning new technologies, and playing cricket.
            Enjoy exploring system design, AI integrations, and automation tools
            to continuously improve my development workflow.
          </p>
        </section>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          button {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .resume-container {
            box-shadow: none !important;
            border: none !important;
          }
        }
        @page {
          margin: 1cm 0, 1cm 0;
          @top-left { content: none; }
          @top-right { content: none; }
          @bottom-left { content: none; }
          @bottom-right { content: none; }
        }
      `}</style>
    </div>
  );
};

export default Resume;
