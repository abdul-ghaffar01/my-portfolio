// app/projects/page.js (Server Component)
import projectsData from "@/components/projects/data";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-800 text-gray-100 p-2 md:p-12">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <p className="text-gray-400 mt-1">
              All my work — deep docs available for every project.
            </p>
          </div>
        </header>

        {/* Pass data to client component */}
        <ProjectsPageClient projects={projectsData} />
      </div>
    </main>
  );
}
