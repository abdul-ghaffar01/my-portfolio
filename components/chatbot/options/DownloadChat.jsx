"use client";
import React, { useState } from "react";
import { Download as DownloadIcon, Chat as ChatIcon } from "@mui/icons-material";
import useChatStore from "@/store/chatStore";

const DownloadChat = () => {
    const { messages } = useChatStore();
    const [fileType, setFileType] = useState("txt");
    const [limit, setLimit] = useState(100);

    // Filter and limit messages
    const getFilteredMessages = () => {
        const filtered = messages
            .filter((msg) => msg.sender !== "info")
            .map(({ sentAt, content, sender }) => ({
                sentAt,
                content,
                sender,
            }));
        return filtered.slice(-limit); // take last N messages
    };

    // Handle download
    const handleChatDownload = () => {
        const filteredMessages = getFilteredMessages();
        let blob;
        let fileName;

        switch (fileType) {
            case "json":
                blob = new Blob([JSON.stringify(filteredMessages, null, 2)], { type: "application/json" });
                fileName = "chat-history.json";
                break;
            case "csv":
                const csvContent = filteredMessages
                    .map((msg) =>
                        `"${msg.sender}","${msg.content.replace(/"/g, '""')}","${new Date(msg.sentAt).toLocaleString()}"`
                    )
                    .join("\n");
                blob = new Blob([`Sender,Message,Time\n${csvContent}`], { type: "text/csv" });
                fileName = "chat-history.csv";
                break;
            case "txt":
            default:
                const txtContent = filteredMessages
                    .map((msg) => `${msg.sender}: ${msg.content} (${new Date(msg.sentAt).toLocaleString()})`)
                    .join("\n");
                blob = new Blob([txtContent], { type: "text/plain" });
                fileName = "chat-history.txt";
                break;
        }

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gray-900 md:p-6 p-1 flex flex-col md:items-center text-gray-200">
            {/* Top Controls */}
            <div className="w-full md:max-w-3xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                <div className="w-full md:w-fit flex gap-2 items-center">
                    <label className="text-gray-300 text-sm font-medium whitespace-nowrap">File Type:</label>
                    <select
                        value={fileType}
                        onChange={(e) => setFileType(e.target.value)}
                        className="w-full md:w-fit border border-gray-700 bg-gray-800 rounded-md px-3 py-2 text-gray-200 focus:ring focus:ring-blue-500"
                    >
                        <option value="txt">Text (.txt)</option>
                        <option value="json">JSON (.json)</option>
                        <option value="csv">CSV (.csv)</option>
                    </select>
                </div>

                <div className="flex gap-2 items-center">
                    <label className="text-gray-300 text-sm font-medium">Limit:</label>
                    <input
                        type="number"
                        value={limit}
                        min={1}
                        onChange={(e) => setLimit(Math.max(1, Number(e.target.value)))} // prevent negatives/zero
                        className="w-full md:w-20 border border-gray-700 bg-gray-800 rounded-md px-2 py-1 text-gray-200 focus:ring focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={handleChatDownload}
                    disabled={messages.length === 0}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white transition
                        ${messages.length === 0
                            ? "bg-gray-700 cursor-not-allowed text-gray-500"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    <DownloadIcon /> Download
                </button>
            </div>

            {/* Chat History */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full md:max-w-3xl border border-gray-700">
                <h1 className="text-2xl font-semibold text-gray-100 flex items-center gap-2 mb-6">
                    <ChatIcon className="text-blue-500" /> Chat History (Last {limit})
                </h1>

                <div className="space-y-4">
                    {getFilteredMessages().length > 0 ? (
                        getFilteredMessages().map((msg, index) => (
                            <div key={index} className="pb-2 border-b border-gray-700">
                                <p className="font-semibold text-gray-200">{msg.sender}</p>
                                <p className="text-gray-300">{msg.content}</p>
                                <span className="text-xs text-gray-500">
                                    {new Date(msg.sentAt).toLocaleString()}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No chat history available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DownloadChat;
