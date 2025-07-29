"use client";
import React, { useEffect, useState } from "react";

const AllChats = ({ onSelectChat, adminSocket }) => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        if (!adminSocket) return;

        // Request all chats
        adminSocket.emit("getAllChats");

        // Listen for response
        adminSocket.on("allChats", (data) => {
            console.log("All chats received:", data);
            setChats(data);
            setLoading(false)
        });

        return () => {
            adminSocket.off("allChats");
        };
    }, [adminSocket]);


    if (loading) return <p className="p-4 text-gray-500">Loading chats...</p>;

    return (
        <div className="w-1/3 border-r border-gray-300 h-full overflow-y-auto">
            <h2 className="text-xl font-semibold p-4 border-b">All Chats</h2>
            {chats.length === 0 ? (
                <p className="p-4 text-gray-500">No chats available</p>
            ) : (
                chats.map((chat) => (
                    <div
                        key={chat.userId}
                        className="p-4 border-b hover:bg-gray-100 cursor-pointer"
                        onClick={() => onSelectChat(chat.userId)}
                    >
                        <p className="font-medium">{chat.fullName}</p>
                        <p className="text-sm text-gray-500 truncate">
                            Last message: {chat.lastMessage || "No messages"}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
};

export default AllChats;
