"use client";
import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ChatWindow from '@/components/chatbot/ChatWindow';

const ChatSide = () => {
    const textareaRef = useRef(null);
    const endRef = useRef(null);

    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [userId, setUserId] = useState(null);
    const [socketInstance, setSocketInstance] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user?.id) {
                setUserId(user.id);
                const socket = io(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL || "http://147.79.101.178:3009"}`, {
                    query: { userId: user.id }
                });
                setSocketInstance(socket);
            }
        }
    }, []);

    useEffect(() => {
        if (!socketInstance) return;

        socketInstance.on('receiveMessage', (message) => {
            const who = message.sender === 'chatbot' ? 'chatbot' : message.sender === 'user' ? 'you' : 'Abdul Ghaffar';
            const timestamp = message.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            if (message.sender !== 'user') {
                setMessages((prev) => [...prev, { ...message, who, timestamp }]);
            }
        });

        socketInstance.on('chatHistory', (history) => {
            const updatedHistory = history.map(msg => ({
                ...msg,
                who: msg.sender === 'chatbot' ? 'chatbot' : msg.sender === 'user' ? 'you' : 'Abdul Ghaffar',
                timestamp: msg.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            }));
            setMessages(updatedHistory);
            console.log("🔁 History loaded:", updatedHistory);
        });

        return () => {
            socketInstance.off('receiveMessage');
            socketInstance.off('chatHistory');
        };
    }, [socketInstance]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
        }
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setMessageText(value);

        textareaRef.current.style.height = '24px';
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 24 * 6)}px`;
        textareaRef.current.style.overflowY = textareaRef.current.scrollHeight > 24 * 6 ? "auto" : "hidden";
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !isMobile && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    const sendMessage = () => {
        if (!messageText.trim()) return;

        const sentAt = new Date();

        const newMessage = {
            content: messageText,
            sender: "user",
            sentAt,
        };
        setMessages((prev) => [...prev, newMessage]);

        socketInstance.emit('sendMessage', {
            userId,
            to: "6884c115c3fd2ec85813625a",
            content: messageText,
            sender: "user",
        });

        setMessageText('');
        textareaRef.current.style.height = '24px';
        textareaRef.current.focus();
    };

    const handleChatDownload = () => {
        const chatContent = messages.map(msg => `${msg.who}: ${msg.content} (${msg.timestamp})`).join('\n');
        const blob = new Blob([chatContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chat.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleChatDelete = () => {
        setMessages([]);
        setMessageText('');
        if (textareaRef.current) {
            textareaRef.current.style.height = '24px';
        }
    };

    return (
        <div className='flex-[2] flex flex-col'>
            <div className='w-full h-fit flex items-center justify-between p-2 bg-color-800'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-lg text-color-light font-medium'>Abdul Ghaffar - Bot</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <button onClick={handleChatDownload} className='text-color-500 bg-color-light rounded-full p-1'>
                        <DownloadIcon />
                    </button>
                    <button onClick={handleChatDelete} className='text-color-500 bg-color-light rounded-full p-1'>
                        <DeleteIcon />
                    </button>
                </div>
            </div>

            <div className='flex-1 overflow-y-auto bg-color-light'>
                <ChatWindow messages={messages} endRef={endRef} />
            </div>

            <div className='w-full h-fit max-w-screen p-2 md:p-3 bg-color-800 relative'>
                <textarea
                    onKeyDown={handleKeyDown}
                    ref={textareaRef}
                    onChange={handleChange}
                    value={messageText}
                    placeholder='Type your message'
                    style={{ height: "24px", lineHeight: "24px" }}
                    className='w-[calc(100%-70px)] h-fit bg-transparent mt-1 outline-none text-lg text-color-light resize-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                ></textarea>
                <button
                    onClick={sendMessage}
                    disabled={!messageText.trim()}
                    className='w-[60px] text-color-light p-2 absolute right-2 bottom-2'>
                    <SendIcon className={`${!messageText.trim() ? "text-gray-400" : "text-color-light"}`} />
                </button>
            </div>
        </div>
    );
};

export default ChatSide;
