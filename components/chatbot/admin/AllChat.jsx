"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AllChats = ({ onSelectChat, adminSocket, selectedUserId }) => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!adminSocket) return;

        const fetchChats = () => {
            console.log("✅ Admin socket connected, fetching chats...");
            adminSocket.emit("getAllChats");
        };

        // If already connected, fetch immediately
        if (adminSocket.connected) {
            fetchChats();
        } else {
            console.warn("⏳ Waiting for admin socket to connect...");
            adminSocket.once("connect", fetchChats); // Wait for connection event
        }

        // ✅ Listen for chat response
        const handleAllChats = (data) => {
            if (Array.isArray(data)) {
                console.log("✅ All chats received:", data);
                setChats(data);
            } else {
                console.warn("⚠️ Invalid data format received:", data);
                setChats([]);
            }
            setLoading(false);
        };

        adminSocket.on("allChats", handleAllChats);

        // ✅ Cleanup listeners
        return () => {
            adminSocket.off("allChats", handleAllChats);
            adminSocket.off("connect", fetchChats); // Clean up connect listener
        };
    }, [adminSocket]);
    useEffect(() => {
        if (!adminSocket) return;

        const fetchChats = () => {
            console.log("✅ Admin socket connected, fetching chats...");
            adminSocket.emit("getAllChats");
        };

        // If already connected, fetch immediately
        if (adminSocket.connected) {
            fetchChats();
        } else {
            console.warn("⏳ Waiting for admin socket to connect...");
            adminSocket.once("connect", fetchChats); // Wait for connection event
        }

        // ✅ Listen for chat response
        const handleAllChats = (data) => {
            if (Array.isArray(data)) {
                console.log("✅ All chats received:", data);
                setChats(data);
            } else {
                console.warn("⚠️ Invalid data format received:", data);
                setChats([]);
            }
            setLoading(false);
        };

        adminSocket.on("allChats", handleAllChats);

        // ✅ Cleanup listeners
        return () => {
            adminSocket.off("allChats", handleAllChats);
            adminSocket.off("connect", fetchChats); // Clean up connect listener
        };
    }, [adminSocket]);


    // ✅ Guard: Ensure `onSelectChat` is a function
    const handleSelectChat = (userId) => {
        if (typeof onSelectChat === "function") {
            onSelectChat(userId);
        } else {
            console.error("❌ onSelectChat is not a function");
        }
    };

    // ✅ Loading state
    if (loading) return <p className="p-4 text-gray-500">Loading chats...</p>;

    return (
        <div className="w-1/3 max-w-[350px] border-r border-gray-300 h-full overflow-y-auto p-2">
            <h2 className="text-xl font-semibold p-4 border-b">All Chats</h2>

            {chats.length === 0 ? (
                <p className="p-4 text-gray-500">No chats available</p>
            ) : (
                <div className="divide-y divide-gray-200">
                    {chats.map((chat) => (
                        <div
                            key={chat.userId || chat._id} // ✅ Fallback to _id if userId is missing
                            onClick={() => handleSelectChat(chat.userId)}
                            className={`p-4 my-2 transition-colors duration-200 cursor-pointer rounded-lg shadow-sm
                                ${chat.userId === selectedUserId
                                    ? "bg-blue-600 text-white"
                                    : "bg-white hover:bg-gray-50"
                                }`}
                        >
                            <p className="font-semibold text-sm md:text-base">
                                {chat.fullName || "Unknown User"} {/* ✅ Fallback */}
                            </p>
                            <p
                                className={`text-xs md:text-sm truncate mt-1 ${chat.userId === selectedUserId
                                        ? "text-blue-100"
                                        : "text-gray-500"
                                    }`}
                            >
                                {chat.lastMessage || "No messages yet"}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

AllChats.propTypes = {
    onSelectChat: PropTypes.func.isRequired,
    adminSocket: PropTypes.object,
    selectedUserId: PropTypes.string,
};

export default AllChats;
