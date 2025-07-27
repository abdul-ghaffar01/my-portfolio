"use client";
import React, { useEffect, useRef, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ChatWindow from '@/components/chatbot/ChatWindow';
import { connectSocketWithUser } from '@/utils/socket';

const ChatSide = () => {
    const textareaRef = useRef(null);
    const endRef = useRef(null);
    const scrollRef = useRef(null);

    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [socketInstance, setSocketInstance] = useState(null);
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("")
    const [isLoadingOlder, setIsLoadingOlder] = useState(false);
    const [skip, setSkip] = useState(0);
    const limit = 20;
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const token = localStorage.getItem("jwt");
        setUserId(user?.id || null);
        setToken(token || null);
    }, []);

    useEffect(() => {
        if (token) {
            const socket = connectSocketWithUser(token);
            setSocketInstance(socket);
        }
    }, [token]);

    useEffect(() => {
        if (!socketInstance) return;

        socketInstance.on('receiveMessage', (message) => {
            const who = message.sender === 'chatbot' ? 'chatbot' : message.sender === 'user' ? 'you' : 'Abdul Ghaffar';
            const timestamp = message.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            if (message.sender !== 'user') {
                setMessages((prev) => [...prev, { ...message, who, timestamp }]);
                setShouldScrollToBottom(true);
            }
        });

        socketInstance.on('chatHistory', (history) => {
            const formatted = history.map(msg => ({
                ...msg,
                who: msg.sender === 'chatbot' ? 'chatbot' : msg.sender === 'user' ? 'you' : 'Abdul Ghaffar',
                timestamp: msg.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            }));

            const scroll = scrollRef.current;
            const prevScrollHeight = scroll?.scrollHeight;

            setMessages(prev => [...formatted, ...prev]);

            requestAnimationFrame(() => {
                const newScrollHeight = scroll?.scrollHeight;
                const scrollTop = scroll?.scrollTop;
                if (scroll) {
                    scroll.scrollTop = newScrollHeight - prevScrollHeight + scrollTop;
                }
            });
        });

        socketInstance.on('olderMessages', (payload) => {
            const { messages: olderMessages, hasMore } = payload;
            const formatted = olderMessages.map(msg => ({
                ...msg,
                who: msg.sender === 'chatbot' ? 'chatbot' : msg.sender === 'user' ? 'you' : 'Abdul Ghaffar',
                timestamp: msg.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            }));

            const scroll = scrollRef.current;
            const prevScrollHeight = scroll?.scrollHeight;
            const scrollTop = scroll?.scrollTop;

            setMessages(prev => [ ...prev, ...formatted]);
            setIsLoadingOlder(false);
            console.log("has", hasMore);

            requestAnimationFrame(() => {
                const newScrollHeight = scroll?.scrollHeight;
                if (scroll) {
                    scroll.scrollTop = newScrollHeight - prevScrollHeight + scrollTop;
                }
            });

            if (!hasMore) {
                // 👇 disable further loads
                setHasMore(false);
            }
        });


        return () => {
            socketInstance.off('receiveMessage');
            socketInstance.off('chatHistory');
            socketInstance.off('olderMessages');
        };
    }, [socketInstance]);

    useEffect(() => {
        if (shouldScrollToBottom) {
            endRef.current?.scrollIntoView({ behavior: "smooth" });
            setShouldScrollToBottom(false);
        }
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
        if (!messageText.trim() || !socketInstance) return;

        const sentAt = new Date();

        const newMessage = {
            content: messageText,
            sender: "user",
            sentAt,
            who: "you",
            timestamp: sentAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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
        setShouldScrollToBottom(true);
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

    useEffect(() => {
        const chatDiv = scrollRef.current;
        if (!chatDiv) return;

        const handleScroll = () => {
            if (chatDiv.scrollTop < 100) {
                loadOlderMessages();
            }
        };

        chatDiv.addEventListener('scroll', handleScroll);
        return () => chatDiv.removeEventListener('scroll', handleScroll);
    }, [socketInstance]);

    const loadOlderMessages = () => {
        if (!socketInstance || isLoadingOlder || !hasMore) return;

        setIsLoadingOlder(true);
        console.log(messages.length, skip, limit);
        console.log(scrollRef.current.length)
        socketInstance.emit('loadOlderMessages', { userId, skip: scrollRef.current.children.length, limit });


        setIsLoadingOlder(false);
    };


    return (
        <div className='flex-[2] w-full flex flex-col'>
            {(!socketInstance) ? (
                <div className='flex-1 flex items-center justify-center'>
                    <p className='text-color-dark'>Connecting to chat...</p>
                </div>
            ) : (
                <>
                    <div className='w-full flex items-center justify-between p-2 bg-color-800 shrink-0'>
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
                        <ChatWindow messages={messages} endRef={endRef} scrollRef={scrollRef} />
                    </div>

                    <div className='w-full h-fit max-w-screen p-2 md:p-3 bg-color-800 shrink-0 relative'>
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
                </>
            )}
        </div>
    );
};

export default ChatSide;
