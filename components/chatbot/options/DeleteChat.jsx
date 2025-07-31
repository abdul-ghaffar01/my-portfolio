"use client";
import React, { useEffect, useState } from "react";
import useChatStore from "@/store/chatStore";
import { Delete as DeleteIcon, Warning as WarningIcon } from "@mui/icons-material";

const DeleteChat = ({ setSelectedSection }) => {
    const { messages, setMessages } = useChatStore();
    const [showWarning, setShowWarning] = useState(false);
    const [serverResponse, setServerResponse] = useState(null); // ✅ For server response modal
    const [messageCount, setMessageCount] = useState(0);



    useEffect(() => {
        const fetchMessageCount = async () => {
            try {
                const token = localStorage.getItem("jwt"); // ✅ JWT from localStorage
                const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/msg-count`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await res.json();

                if (!res.ok) throw new Error(data.message || "Failed to fetch count");

                setMessageCount(data.count); // ✅ Store count in state
            } catch (error) {
                console.error("Error fetching message count:", error.message);
            }
        };

        fetchMessageCount();
    }, []);


    const handleChatDelete = async () => {
        try {
            const token = localStorage.getItem("jwt"); // ✅ JWT token stored locally
            console.log(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/delete-chat`)
            const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/delete-chat`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to delete chat.");
            }
            console.log(data)

            setMessages([]); // Clear chat locally
            setMessageCount(0)
            setServerResponse(data.message); // Show server message
        } catch (error) {
            setServerResponse(error.message || "Failed to delete chat.");
        } finally {
            setShowWarning(false);
        }
    };

    return (
        <div className="min-h-fit bg-gray-900 md:p-6 text-gray-200">
            {/* Chat Info Panel */}
            <div className="bg-gray-800 rounded-lg shadow p-4 border border-gray-700 mb-5">
                <h2 className="text-lg font-semibold mb-4">Chat Summary</h2>
                <p className="text-gray-300">
                    Total messages: <strong>{messageCount}</strong>
                </p>
                <p className="text-gray-300">
                    Last message:{" "}
                    <strong>{messages[messages.length - 1]?.content || "No messages"}</strong>
                </p>
                <p className="text-sm text-gray-400 mt-2">
                    Deleting will permanently remove all chat history.
                </p>
                <button
                    onClick={() => setSelectedSection("download")}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                >
                    Download Chat Backup
                </button>
            </div>

            {/* Delete Chat Action */}
            <div className="md:col-span-2 flex flex-col justify-start">
                <div className="flex mb-4 md:w-fit w-full">
                    <button
                        disabled={messageCount === 0}
                        onClick={() => setShowWarning(true)}
                        className={`flex items-center justify-center w-full gap-2 px-4 py-2 rounded-md font-medium transition 
                        ${messageCount === 0
                                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-red-600 hover:bg-red-700 text-white"}`}
                    >
                        <DeleteIcon /> <span>Delete Chat</span>
                    </button>
                </div>

                {/* Warning Modal */}
                {showWarning && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 m-2 w-full max-w-sm border border-gray-700">
                            <div className="flex items-center gap-2 text-red-500 mb-4">
                                <WarningIcon />
                                <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Are you sure you want to delete all chat history? This action cannot be undone.
                            </p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowWarning(false)}
                                    className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleChatDelete}
                                    className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ✅ Server Response Modal */}
                {serverResponse && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 m-2 w-full max-w-sm border border-gray-700 text-center">
                            <p className="text-gray-200 mb-4">{serverResponse}</p>
                            <button
                                onClick={() => setServerResponse(null)}
                                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteChat;
