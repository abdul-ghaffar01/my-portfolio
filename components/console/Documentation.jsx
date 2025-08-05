"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Close, ContentCopy } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";

export default function Documentation({ content }) {
    const [isDocVisible, setIsDocVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("doc-theme");
        if (savedTheme) setIsDarkMode(savedTheme === "dark");
    }, []);

    useEffect(() => {
        localStorage.setItem("doc-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <>
            {/* Floating Open Button */}
            {!isDocVisible && <button
                className="md:hidden fixed bottom-4 right-4 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
                onClick={() => setIsDocVisible(true)}
            >
                <ArticleIcon sx={{ fontSize: 25 }} />
            </button>}

            {/* Documentation Panel */}
            <div
                className={`absolute inset-0 transition-transform duration-300 transform ${isDocVisible ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0 md:relative md:w-1/2 md:ml-[50%] md:block ${isDarkMode ? "bg-gray-900" : "bg-gray-100"
                    } overflow-y-auto h-full p-6`}
            >
                {/* Close Button */}
                <button
                    className="md:hidden fixed bottom-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
                    onClick={() => setIsDocVisible(false)}
                >
                    <Close sx={{ fontSize: 30 }} />
                </button>

                {/* Theme Toggle */}
                <button
                    className="absolute top-4 right-4 md:left-auto md:right-20 bg-gray-700 text-white p-2 rounded-md shadow hover:bg-gray-600"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? "☀️" : "🌙"}
                </button>

                {/* Header */}
                <h2
                    className={`text-2xl font-bold mb-4 pb-2 ${isDarkMode ? "text-gray-100" : "text-gray-800"
                        }`}
                >
                    Documentation
                </h2>

                {/* Markdown Content */}
                <div
                    className={`prose max-w-none ${isDarkMode ? "prose-invert" : ""
                        } prose-pre:bg-transparent`}
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");

                                if (!inline && match) {
                                    return (
                                        <div className="relative group">
                                            {/* Copy Button */}
                                            <button
                                                onClick={() =>
                                                    navigator.clipboard.writeText(
                                                        String(children).replace(/\n$/, "")
                                                    )
                                                }
                                                className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition"
                                                title="Copy code"
                                            >
                                                <ContentCopy sx={{ fontSize: 16 }} />
                                            </button>

                                            <SyntaxHighlighter
                                                language={match[1]}
                                                style={vscDarkPlus}
                                                customStyle={{
                                                    margin: 0,
                                                    background: isDarkMode ? "#1f2937" : "#e5e7eb",
                                                    color: isDarkMode ? "#f3f4f6" : "#111827",
                                                    padding: "12px",
                                                    borderRadius: "8px",
                                                    fontSize: "14px",
                                                }}
                                                codeTagProps={{
                                                    style: {
                                                        color: isDarkMode ? "#f3f4f6" : "#111827",
                                                        fontFamily: "monospace",
                                                    },
                                                }}
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, "")}
                                            </SyntaxHighlighter>
                                        </div>
                                    );
                                }

                                // Inline Code
                                return (
                                    <code
                                        className="px-2 py-1 rounded text-sm font-mono"
                                        style={{
                                            background: isDarkMode ? "#374151" : "#d1d5db",
                                            color: isDarkMode ? "#f3f4f6" : "#1f2937",
                                        }}
                                        {...props}
                                    >
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    );
}
