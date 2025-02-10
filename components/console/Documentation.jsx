"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';

export default function Documentation({ content }) {
    const [isDocVisible, setIsDocVisible] = useState(false);

    return (
        <>
            {/* Mobile Menu Button (Visible on Small Screens) */}
            <button
                className="md:hidden fixed bottom-4 shadow-sm shadow-slate-400 right-4 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg"
                onClick={() => setIsDocVisible(true)}
            >
                <ArticleIcon sx={{ fontSize: 25 }} />
            </button>

            {/* Documentation Section */}
            <div
                className={`absolute inset-0 bg-white overflow-y-auto z-50 h-full p-6 md:relative md:w-1/2 md:ml-[50%] md:block md:p-2 md:pl-6 ${isDocVisible ? "w-full" : "hidden"
                    }`}
            >

                {/* Close Button for Small Screens */}
                <button
                    className="md:hidden fixed top-4 right-4 z-50 bg-gray-900 text-white p-2 rounded-full shadow-lg"
                    onClick={() => setIsDocVisible(false)}
                >
                    <Close sx={{ fontSize: 30 }} />
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-gray-300">
                    Documentation
                </h2>
                <div className="prose max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
            </div>
        </>
    );
}



