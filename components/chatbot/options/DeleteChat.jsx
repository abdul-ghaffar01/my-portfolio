"use client";
import React, { useState } from "react";
import useChatStore from "@/store/chatStore";
import { Delete as DeleteIcon, Warning as WarningIcon } from "@mui/icons-material";

const DeleteChat = ({setSelectedSection}) => {
    const { messages, setMessages } = useChatStore();
    const [showWarning, setShowWarning] = useState(false);

    const handleChatDelete = () => {
        setMessages([]);
        setShowWarning(false);
    };

    return (
        <div className="min-h-fit bg-gray-50 md:p-6 ">
            {/* Right: Chat Info Panel */}
            <div className="bg-white rounded-lg shadow p-2 border mb-5">
                <h2 className="text-lg font-semibold mb-4">Chat Summary</h2>
                <p className="text-gray-700">Total messages: <strong>{messages.length}</strong></p>
                <p className="text-gray-700">
                    Last message: <strong>{messages[messages.length - 1]?.content || "No messages"}</strong>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    Deleting will permanently remove all chat history.
                </p>
                <button
                    onClick={()=>{setSelectedSection("download")}}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                    Download Chat Backup
                </button>
            </div>

            {/* Left: Delete Chat Action */}
            <div className="md:col-span-2 flex flex-col justify-start">
                {/* Delete Button */}
                <div className="flex mb-4 md:w-fit w-full">
                    <button
                        disabled={messages.length === 0}
                        onClick={() => setShowWarning(true)}
                        className={`${messages.length === 0 ? "bg-color-gray-400": "text-white bg-color-danger hover:bg-red-700"} flex items-center w-full gap-2 px-4 py-2 rounded-md font-medium transition`}
                    >
                        <DeleteIcon /> Delete Chat
                    </button>
                </div>

                {/* Warning Modal */}
                {showWarning && (
                    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 m-2 w-full max-w-sm">
                            <div className="flex items-center gap-2 text-red-600 mb-4">
                                <WarningIcon />
                                <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Are you sure you want to delete all chat history? This action cannot be undone.
                            </p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowWarning(false)}
                                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
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
            </div>


        </div>
    );
};

export default DeleteChat;
