import projectsData from "@/components/projects/data";
import fs from "fs";
import path from "path";
import Project from "./Project";

export default function ProjectPage({ params }) {
    const project = projectsData.find((p) => p.id === params.id);


    if (!project) {
        return <div className="text-center py-20 text-gray-400">Project not found</div>;
    }
    let fileContents;
    try {
        // Read the markdown file
        const fullPath = path.join(process.cwd(), "docs", `desc/${params.id}.md`);
        fileContents = fs.readFileSync(fullPath, "utf8");
    } catch (e) {
        console.log("Description of the project is not available")
        return (
            <div className="bg-gray-800 flex items-center justify-center h-[100dvh] w-screen">
                <p className="text-gray-400 text-lg">
                    Description is not available for this projects
                </p>
            </div>
        )
    }


    return (
        <Project project={project} fileContents={fileContents} />
    );
}
