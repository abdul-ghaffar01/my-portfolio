"use client";
import React, { useEffect, useRef, useState } from "react";

const ChatMessages = ({ selectedUserId, adminSocket }) => {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState("");
    const [loading, setLoading] = useState(false);
    const [botReplies, setBotReplies] = useState(true)
    const scrollRef = useRef(null);
    const endOfMessagesRef = useRef(null);

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);


    // Fetch messages when chat opens
    useEffect(() => {
        if (!adminSocket) return;

        // ✅ Listen for chat history when a user is selected
        if (selectedUserId) {
            adminSocket.emit("chatHistoryForAdmin", selectedUserId);
        }

        const handleChatHistory = (history) => {
            console.log("Chat history received:", history);
            setMessages(history);
        };

        const handleNewMessage = (message) => {
            // ✅ Only add message if it belongs to the currently selected user
            if (message.userId === selectedUserId || message.to === selectedUserId) {
                setMessages((prev) => [...prev, message]);
            }
        };

        adminSocket.on("chatHistoryForAdmin", handleChatHistory);
        adminSocket.on("adminReceiveMessage", handleNewMessage);

        return () => {
            adminSocket.off("chatHistoryForAdmin", handleChatHistory);
            adminSocket.off("adminReceiveMessage", handleNewMessage);
        };
    }, [adminSocket, selectedUserId]);


    const handleSendMessage = async () => {
        // Example: Sending message from admin panel to specific user
        adminSocket.emit("adminSendMessage", {
            targetUserId: selectedUserId,
            content: messageText
        });
        setMessageText("")

    };

    if (!selectedUserId) {
        return <div className="flex-1 flex items-center justify-center text-gray-500">Select a chat to view messages</div>;
    }

    return (
        <div className="flex-1 flex flex-col">
            <button
                className="p-2 bg-color-800 text-color-light"
                onClick={() => {
                    adminSocket.emit('toggleBotReply', { targetUserId: selectedUserId, enabled: !botReplies });
                    setBotReplies((prev) => !prev)
                }}>{botReplies ? "Stop bot replies" : "Continue bot replies"}</button>
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50" ref={scrollRef}>
                {loading ? (
                    <p>Loading messages...</p>
                ) : (
                    <>
                        {messages.map((msg, index) => {
                            return msg.sender === "info" ?
                                (<p className='text-center text-gray-400 my-3 text-sm'> {msg.content}</p>) :
                                (
                                    <div
                                        key={index}
                                        className={`p-2 my-1 rounded max-w-[70%] ${msg.sender !== "user"
                                            ? "bg-blue-500 text-white ml-auto"
                                            : "bg-gray-200"
                                            }`}
                                    >
                                        <p>{msg.content}</p>
                                        <span className="text-xs text-gray-600">
                                            {new Date(msg.sentAt).toLocaleTimeString()}
                                        </span>
                                    </div>
                                )
                        })}
                        {/* Invisible div to scroll to */}
                        <div ref={endOfMessagesRef} />
                    </>
                )}
            </div>
            <div className="p-3 border-t flex">
                <input
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type a message"
                    className="flex-1 p-2 border rounded"
                />
                <button
                    onClick={handleSendMessage}
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatMessages;
