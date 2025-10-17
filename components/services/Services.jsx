"use client";
import { motion } from "framer-motion";
import { Code, Server, Globe, Cloud } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-indigo-400" />,
      title: "Web Development",
      description:
        "Building responsive, performance-driven web experiences with clean, scalable code.",
    },
    {
      icon: <Server className="w-10 h-10 text-indigo-400" />,
      title: "Server Deployment",
      description:
        "Deploying production-ready servers using Docker, Nginx, and CI/CD pipelines.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-indigo-400" />,
      title: "Cloud Hosting",
      description:
        "Secure, fast, and cost-efficient hosting solutions tailored for your applications.",
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-400" />,
      title: "Domain Integration",
      description:
        "Professional domain setup and SSL configuration for a seamless online presence.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-200"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_60%)] animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)] blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          My <span className="text-indigo-400">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Explore the range of services I offer — from crafting high-performing web apps to full-scale deployments.
        </motion.p>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              className="relative group bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-indigo-500/10 group-hover:bg-indigo-500/20 transition">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-indigo-400 transition">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* subtle reflection */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-gray-700/5 to-gray-300/10 opacity-0 group-hover:opacity-100 transition duration-700" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.a
          href="https://services.iabdulghaffar.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-16 px-8 py-3 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all"
        >
          View All Services
        </motion.a>
      </div>
    </section>
  );
}
