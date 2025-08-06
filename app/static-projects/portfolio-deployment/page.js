"use client"
import React, { useState } from 'react';
import { Moon, Sun, X, Download } from 'lucide-react';
import Image from 'next/image';

const Page = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const toolsUsed = [
        "Docker",
        "Docker Compose",
        "Nginx",
        "GitHub Webhooks",
        "Ubuntu (VPS)",
        "Certbot (SSL)",
        "Shell Scripting",
        "Node.js",
        "Next.js"
    ];

    const handleDownload = (src, name) => {
        const link = document.createElement('a');
        link.href = src;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300 text-base sm:text-sm`}>
            {/* Header */}
            <header className="border-b border-gray-700 p-4 sm:p-6 flex justify-between items-center">
                <h1 className="text-2xl sm:text-xl md:text-3xl font-bold text-blue-600">🚀 DevOps Deployment: Microservices Portfolio Website</h1>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-md border border-gray-600 hover:bg-gray-700 transition"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto p-4 sm:p-6 space-y-16">
                {/* Overview */}
                <section>
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">📌 Project Overview</h2>
                    <p className="leading-relaxed text-base sm:text-sm md:text-lg">
                        This project showcases the <strong>end-to-end deployment of my microservices-based portfolio website</strong> using a full DevOps pipeline.
                        The stack included multiple services (frontend, backend API, and chatbot) containerized with <span className="text-blue-600 font-semibold">Docker</span>
                        and deployed on an <span className="text-blue-600 font-semibold">Ubuntu VPS</span>.
                        I automated the entire deployment process using <span className="text-blue-600 font-semibold">GitHub webhooks</span>,
                        ensuring that every push triggered an automatic rebuild and restart of containers without downtime.
                    </p>
                </section>

                {/* Architecture */}
                <section>
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">🛠 Architecture & Workflow</h2>
                    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg space-y-4">
                        <p className="text-gray-300 text-sm md:text-base">
                            The deployment followed a <strong>microservices approach</strong> with isolated containers for each component, all connected within a single Docker network.
                        </p>
                        <ul className="list-disc list-inside text-sm md:text-lg space-y-2">
                            <li>User requests hit <strong>Nginx</strong> (reverse proxy with SSL).</li>
                            <li>Nginx routes requests to the appropriate container (Frontend, API, Chatbot).</li>
                            <li>Containers communicate internally over a Docker bridge network.</li>
                            <li><strong>GitHub Webhook</strong> triggers rebuilds on <code>git push</code>, using shell scripts for zero-downtime redeployment.</li>
                        </ul>
                        <Image
                            src="/projects/deployment/architecture.png"
                            alt="Architecture image"
                            width={1200}
                            height={800}
                            className="mx-auto w-full h-auto object-contain cursor-pointer"
                            onClick={() => setFullscreenImage({ src: "/projects/deployment/architecture.png", alt: "Architecture Diagram" })}
                        />

                    </div>
                </section>

                {/* Tools */}
                <section>
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">🔧 Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-3">
                        {toolsUsed.map((tool, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-2 text-sm md:text-base bg-gray-800 text-gray-200 rounded-lg shadow hover:bg-blue-600 hover:text-white transition"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Challenges & Solutions */}
                <section>
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">⚠️ Challenges & How I Solved Them</h2>
                    <div className="space-y-6 text-sm md:text-lg">
                        <div>
                            <h3 className="font-semibold text-blue-500">1️⃣ Container Networking Issues</h3>
                            <p>I initially faced issues where containers couldn’t communicate properly (e.g., backend API unreachable from frontend). The fix involved creating a dedicated Docker network and linking containers through service names instead of `localhost`.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-500">2️⃣ SSL & Nginx Configuration</h3>
                            <p>Setting up HTTPS with Nginx was tricky. I automated certificate issuance and renewal using <strong>Certbot</strong> and tweaked Nginx configs for proxy forwarding and WebSocket support (important for my chatbot).</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-500">3️⃣ Automated Deployment</h3>
                            <p>Manually redeploying after every push was inefficient. I used <strong>GitHub Webhooks</strong> + a server-side Node.js script to pull changes, rebuild Docker images, and restart containers automatically.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-500">4️⃣ Downtime During Rebuilds</h3>
                            <p>I implemented zero-downtime by first spinning up new containers, verifying health checks, then stopping old ones—this ensured the site remained accessible even during updates.</p>
                        </div>
                    </div>
                </section>

                {/* Gallery with Fullscreen */}
                <section>
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">🖼 Deployment Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { src: "/projects/deployment/docker-containers.png", alt: "Docker containers" },
                            { src: "/projects/deployment/nginx-config.png", alt: "Nginx config" }
                        ].map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-800 rounded-lg h-56 overflow-hidden border border-gray-600 cursor-pointer"
                                onClick={() => setFullscreenImage(img)}
                            >
                                <Image className="h-full w-full object-cover" src={img.src} alt={img.alt} width={400} height={300} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Fullscreen Image Viewer */}
            {fullscreenImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={() => setFullscreenImage(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                        >
                            <X size={30} />
                        </button>
                        <button
                            onClick={() => handleDownload(fullscreenImage.src, fullscreenImage.alt.replace(/\s+/g, '_') + ".png")}
                            className="absolute top-4 left-4 text-gray-400 hover:text-gray-500"
                        >
                            <Download size={30} />
                        </button>
                        <Image
                            src={fullscreenImage.src}
                            alt={fullscreenImage.alt}
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg max-h-[90vh] max-w-[90vw]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
