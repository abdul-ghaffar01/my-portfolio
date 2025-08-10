// app/projects/[id]/page.jsx

import projectsData from "@/components/projects/data";
import fs from "fs";
import path from "path";
import Project from "./Project";

export default function ProjectPage({ params }) {
    const project = projectsData.find((p) => p.id === params.id);


    if (!project) {
        return <div className="text-center py-20 text-gray-400">Project not found</div>;
    }

    // Read the markdown file
    const fullPath = path.join(process.cwd(), "docs", `desc/${params.id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");


    return (
        <Project project={project} fileContents={fileContents} />
    );
}
