// app/projects/page.js  (Next.js app-router page)
// Requires: framer-motion, tailwindcss
"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react"; // optional icon lib; or swap with MUI icons
import projectsData from "@/components/projects/data";
import ProjectItem from "@/components/projects/ProjectItem";

// export const metadata = {
//     title: "Projects | Abdul Ghaffar",
//     description: "All projects — ongoing, completed and archived. Deep docs and demos for each project.",
// };

/* ----------------------
   Utility / UI pieces
   ---------------------- */

const STATUS_TABS = [
    { key: "all", label: "All" },
    { key: "ongoing", label: "Ongoing" },
    { key: "completed", label: "Completed" },
    { key: "archived", label: "Archived" }
];

/* ----------------------
   Main Projects page
   ---------------------- */
export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState("all");
    const [query, setQuery] = useState("");

    const projects = useMemo(() => projectsData, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return projects.filter(p => {
            if (activeTab !== "all" && p.status !== activeTab) return false;
            if (!q) return true;
            return (
                p.title.toLowerCase().includes(q) ||
                p.short.toLowerCase().includes(q) ||
                p.tags.join(" ").toLowerCase().includes(q)
            );
        });
    }, [projects, activeTab, query]);

    return (
        <main className="min-h-screen bg-gray-800 text-gray-100 p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-6">
                <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
                        <p className="text-gray-400 mt-1">All my work — deep docs available for every project.</p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:flex-none">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects, tech or short descriptions..."
                                className="w-full md:w-72 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100"
                                aria-label="Search projects"
                            />
                        </div>

                        <div className="flex gap-2">
                            {STATUS_TABS.map(t => (
                                <button
                                    key={t.key}
                                    onClick={() => setActiveTab(t.key)}
                                    className={`px-3 py-2 rounded-lg text-sm ${activeTab === t.key ? "bg-gray-800 text-white" : "bg-gray-800/60 text-gray-300 hover:bg-gray-800"}`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Featured section */}
                {activeTab === "all" && <section>

                    <hr className="border border-gray-700 my-5" />
                    <h2 className="text-xl font-semibold mb-3">Featured</h2>
                    <div className="flex flex-col">
                        {projects.filter(p => p.featured && (activeTab === "all" || p.status === activeTab)).map((p, i) => (
                            <ProjectItem project={p} left={i % 2} />
                        ))}
                    </div>
                </section>}

                <hr className="border border-gray-700" />

                {/* All projects grid */}
                <section>
                    <h2 className="text-xl font-semibold mb-3">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Projects</h2>
                    <div className="flex flex-col gap-4">
                        {filtered.map((p, i) => (
                            <ProjectItem project={p} left={i % 2} />
                        ))}

                        {filtered.length === 0 && (
                            <div className="col-span-full text-center text-gray-400 py-12">
                                No projects match your search.
                            </div>
                        )}
                    </div>
                </section>
            </div>

        </main>
    );
}
