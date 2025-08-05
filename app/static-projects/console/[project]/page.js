import fs from "fs";
import path from "path";
import Documentation from "@/components/console/Documentation";
import Console from "@/components/console/Console";

export default async function Page({ params }) {
    const { project } = params;
    const filePath = path.join(process.cwd(), "docs", `${project}.md`);

    let markdownContent = "";
    let fileExists = false;

    try {
        markdownContent = fs.readFileSync(filePath, "utf-8").trim();
        fileExists = true;
    } catch (error) {
        // some projects has docs while others don't so no need to handle this
        // console.error("Error reading markdown file:", error);
    }

    return (
        <>
            {/* Custom Scrollbar Styling (Only for this Page) */}
            <style>
                {`
                /* Scrollbar for WebKit Browsers (Chrome, Edge, Safari) */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 2px;
                    height: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #a0a0a0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #e0e0e0;
                }

                /* Firefox Scrollbar */
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #a0a0a0 #e0e0e0;
                }
                `}
            </style>

            <div className="w-screen h-[100dvh] flex bg-gray-100 custom-scrollbar">
                {/* Left Sidebar: Fixed Console */}
                <div className={`h-full bg-gray-900 text-white shadow-lg ${fileExists ? "w-full md:w-1/2 fixed top-0 left-0" : "w-full"}`}>
                    <Console project={project} />
                </div>

                {/* Right Section: Documentation (Handles responsiveness inside itself) */}
                {fileExists && <Documentation content={markdownContent} />}
            </div>
        </>
    );
}
