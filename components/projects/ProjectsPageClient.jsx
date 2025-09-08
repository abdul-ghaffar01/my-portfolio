"use client";

import { useMemo, useState } from "react";
import ProjectItemProjectsPage from "./ProjectsPageItem";

const STATUS_TABS = [
    { key: "all", label: "All" },
    { key: "ongoing", label: "Ongoing" },
    { key: "completed", label: "Completed" },
    { key: "archived", label: "Archived" },
];

export default function ProjectsPageClient({ projects }) {
    const [activeTab, setActiveTab] = useState("all");
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return projects.filter((p) => {
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
        <>
            {/* Search + Tabs */}
            <div className="md:flex md:items-center gap-3 w-full justify-between md:w-auto">
                <div className="relative mb-3 md:mb-0 flex-1 md:flex-none">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects, tech or short descriptions..."
                        className="w-full md:w-80 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-400 outline-none"
                        aria-label="Search projects"
                    />
                </div>

                <div className="flex gap-2">
                    {STATUS_TABS.map((t) => (
                        <button
                            key={t.key}
                            onClick={() => setActiveTab(t.key)}
                            className={`px-3 py-2 rounded-lg text-sm ${activeTab === t.key
                                    ? "bg-gray-800 text-white"
                                    : "bg-gray-800/60 text-gray-300 hover:bg-gray-800"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured */}
            {activeTab === "all" && query.length === 0 && (
                <section>
                    <hr className="border border-gray-700 my-5" />
                    <h2 className="text-xl font-semibold mb-3">Featured</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects
                            .filter((p) => p.featured)
                            .map((p, i) => (
                                <ProjectItemProjectsPage key={p.slug} project={p} left={i % 2} />
                            ))}
                    </div>
                </section>
            )}

            <hr className="border border-gray-700 my-5" />

            {/* All projects */}
            <section>
                <h2 className="text-xl font-semibold mb-3">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {filtered.map((p, i) => (
                        <ProjectItemProjectsPage key={p.slug} project={p} left={i % 2} />
                    ))}

                    {filtered.length === 0 && (
                        <div className="col-span-full text-center text-gray-400 py-12">
                            No projects match your search.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
