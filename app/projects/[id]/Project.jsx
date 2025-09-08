import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Project = ({ project, fileContents }) => {
    return (
        <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 px-4 md:px-12 lg:px-20 py-10"
        >
            {/* Title & Meta */}
            <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
                <p className="text-gray-400 mb-6">{project.short}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-700 rounded-full border border-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Large Image */}
            <div className="mb-10">
                <Image
                    src={project.docs.images[0]}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="rounded-2xl shadow-lg border border-gray-700"
                />
            </div>

            {/* Summary */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                <p className="text-gray-300 leading-relaxed">{project.docs.summary}</p>
            </section>

            {/* How It Was Built */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">How It Was Built</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.docs.how.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ul>
            </section>

            {/* Architecture */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.docs.architecture.map((part, i) => (
                        <li key={i}>{part}</li>
                    ))}
                </ul>
            </section>

            {/* Long Description */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Details</h2>
                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {fileContents}
                    </ReactMarkdown>
                </div>
            </section>
        </div>
    );
};

export default Project;
