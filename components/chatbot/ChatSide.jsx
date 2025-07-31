"use client";
import React, { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ChatWindow from '@/components/chatbot/ChatWindow';
import { connectSocketWithUser } from '@/utils/socket';
import sendMessage from '@/utils/chatbot/sendMessage';
import useChatStore from '@/store/chatStore';
import useSocketStore from '@/store/chatSocketStore';
import Spinner from '../Spinner';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';

const ChatSide = ({ setSessionStarted, setAccountSetup }) => {
    const textareaRef = useRef(null);
    const endRef = useRef(null);
    const scrollRef = useRef(null);

    const [messageText, setMessageText] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [loadingHistory, setLoadingHistory] = useState(true);
    const [botReplyEnabled, setBotReplyEnabled] = useState(true);

    const [logoutLoading, setLogoutLoading] = useState(false);
    // Extracting state and actions from chat store
    const {
        userId,
        token,
        messages,
        setUserId,
        setToken,
        setMessages,
        addMessage,
        setUser,
        shouldScrollToBottom,
    } = useChatStore()

    const { socket, setSocket } = useSocketStore();
    const router = useRouter()

    // Initializing userId and token from localStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const token = localStorage.getItem("jwt");
        setUserId(user?.id || null);
        setToken(token || null);
        setUser(user || null);
    }, []);

    // Connecting to socket when token is available
    useEffect(() => {
        if (token) {
            setSocket(connectSocketWithUser(token));
        }
    }, [token]);

    // Listening to socket events
    useEffect(() => {
        if (!socket) return;

        socket.on('receiveMessage', (message) => {
            addMessage(message)
        });

        socket.on('chatHistory', (history) => {
            const scroll = scrollRef.current;
            const prevScrollHeight = scroll?.scrollHeight;

            // const newMessages = [...history, ...messages];
            setMessages(history);
            setLoadingHistory(false);

            requestAnimationFrame(() => {
                const newScrollHeight = scroll?.scrollHeight;
                const scrollTop = scroll?.scrollTop;
                if (scroll) {
                    scroll.scrollTop = newScrollHeight - prevScrollHeight + scrollTop;
                }
            });
        });

        socket.on("botReplyStatus", ({ enabled }) => {
            console.log("🤖 Bot reply status updated:", enabled);
            setBotReplyEnabled(enabled); // update state
        });


        return () => {
            socket.off('receiveMessage');
            socket.off('chatHistory');
            socket.off('botReplyStatus');
        };
    }, [socket]);

    // Scrolling to the bottom when new messages arrive
    useEffect(() => {
        if (shouldScrollToBottom)
            endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Detecting the device type (mobile or desktop)
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
        }
    }, []);

    // Detecting writing of message and adjusting textarea height
    const handleChange = (e) => {
        const value = e.target.value;
        setMessageText(value);

        textareaRef.current.style.height = '24px';
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 24 * 6)}px`;
        textareaRef.current.style.overflowY = textareaRef.current.scrollHeight > 24 * 6 ? "auto" : "hidden";
    };

    // Detecting enter to send message without shift 
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !isMobile && !e.shiftKey) {
            e.preventDefault();
            sendMessage(messageText,
                socket,
                userId,
                setMessageText,
                textareaRef);
        }
    };

    const handleLogout = () => {
        setLogoutLoading(true)
        localStorage.removeItem("jwt");
        setToken("");


        if (socket && socket.connected) {
            socket.disconnect(); // 🔌 Disconnect socket
            console.log("Socket disconnected on logout");
            setSessionStarted(false)
            setAccountSetup(true)

        }
        setLogoutLoading(false)
    };
    return (
        <div className='flex-[2] w-full flex flex-col'>
            {(!socket) ? (
                <div className='flex-1 flex items-center justify-center'>
                    <p className='text-color-dark'>Connecting to chat...</p>
                </div>
            ) : (
                <>
                    <div className='w-full h-[50px] flex items-center justify-between p-2 bg-color-gray-700 shrink-0'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-lg text-color-gray-400 font-medium flex gap-1'>Abdul Ghaffar - {botReplyEnabled ? <p>Bot</p> : (
                                <div className='flex gap-2 items-center'>
                                    <p>Real</p>
                                    <div className='w-3 h-3 rounded-full bg-color-success'></div>
                                </div>
                            )}</h1>
                        </div>
                        <div className='flex h-full items-center gap-2'>

                            {/* Show options */}
                            <Link href="/chat/options" className='text-color-gray-400 rounded-full p-1'>
                                <MoreVertIcon />
                            </Link>
                            {/* Logout button */}
                            <button onClick={handleLogout} className='text-color-gray-400 w-[50px] rounded-full p-1' disabled={logoutLoading}>
                                {logoutLoading ? (
                                    <Spinner />
                                ) : <LogoutIcon />}
                            </button>

                        </div>
                    </div>

                    <div className='flex-1 overflow-y-auto bg-color-gray-900'>
                        {
                            loadingHistory && (
                                <div className='w-full h-full bg-gray-900 flex justify-center items-center'>
                                    <Spinner />
                                </div>
                            )
                        }{

                            !loadingHistory &&
                            (< ChatWindow messages={messages} endRef={endRef} scrollRef={scrollRef} />)
                        }
                    </div>

                    <div className='w-full h-fit max-w-screen p-2 md:p-3 bg-color-gray-700 shrink-0 relative'>
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
                            onClick={() => {
                                sendMessage(messageText,
                                    socket,
                                    userId,
                                    setMessageText,
                                    textareaRef)
                            }}
                            disabled={!messageText.trim()}
                            className='w-[60px] text-color-light p-2 absolute right-2 bottom-2'>
                            {messageText.length > 0 && (
                                <SendIcon className="text-color-light" />
                            )}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatSide;
