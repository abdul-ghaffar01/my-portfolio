"use client";
import React, { useEffect, useRef, useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ChatWindow from '@/components/chatbot/ChatWindow';

const ChatSide = () => {
    const textareaRef = useRef(null);
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([{
        content: "This is a large message what do you say about this large message what do you say about this?",
        who: "you",
        timestamp: "12:30 pm",
    }, {
        content: "This is a large message what do you say about this large message what do you say about this?",
        who: "you",
        timestamp: "12:30 pm",
    }, {
        content: "This is a response from the bot.",
        who: "chatbot",
        timestamp: "12:31 pm",
    }, {
        content: "This is a large message what do you say about this large message what do you say about this?",
        who: "you",
        timestamp: "12:30 pm",
    }, {
        content: "This is a response from the bot.",
        who: "chatbot",
        timestamp: "12:31 pm",
    }, {
        content: "This is a large message what do you say about this large message what do you say about this?",
        who: "you",
        timestamp: "12:30 pm",
    }, {
        content: "This is a response from the bot.",
        who: "Abdul Ghaffar",
        timestamp: "12:31 pm",
    }, {
        content: "This is a large message what do you say about this large message what do you say about this?",
        who: "you",
        timestamp: "12:30 pm",
    }, {
        content: "This is a response from the bot.",
        who: "Abdul Ghaffar",
        timestamp: "12:31 pm",
    },

    ]); // State to hold messages
    const [isMobile, setIsMobile] = useState(false);
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); // 👈 scrolls every time messages update

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
        }
    }, []);


    // To handle the change on textarea 
    const handleChange = (e) => {
        const value = e.target.value;
        setMessageText(value);

        const lines = value.split('\n').length;
        const lineHeight = 24;
        const maxLines = 6;

        const newHeight = Math.min(lines, maxLines) * lineHeight;


        textareaRef.current.style.height = '24px'; // Reset to base height first
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 24 * 6)}px`; // Max 6 lines
        textareaRef.current.style.overflowY = textareaRef.current.scrollHeight > 24 * 6 ? "auto" : "hidden";
    };

    const handleKeyDown = (e) => {
        // Check key pressed
        if (e.key === "Enter") {
            if (e.key === "Enter" && !isMobile && !e.shiftKey) {
                // If shift key is not pressed, send the message
                e.preventDefault(); // prevent newline
                sendMessage();
            }
        }
    };

    // To send the message
    const sendMessage = () => {
        console.log("Message sent:", messageText);
        messages.push({
            content: messageText,
            who: "you",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
        setMessages([...messages]); // Update messages state
        // Clear the message text
        setMessageText('');

        // Reset height (optional)
        if (textareaRef.current) {
            textareaRef.current.style.height = '24px';
            textareaRef.current.focus(); // 🔥 This line sets focus back
        }
    }

    const handleChatDownload = () => {
        // Logic to download chat messages
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
    }

    const handleChatDelete = () => {
        // Logic to delete chat messages
        setMessages([]); // Clear the messages state
        if (textareaRef.current) {
            textareaRef.current.value = ''; // Clear the textarea
            textareaRef.current.style.height = '24px'; // Reset height
        }
    }

    return (
        <div className='flex-[2] flex flex-col'>
            {/* top of the chat window */}
            <div className='w-full h-fit flex items-center justify-between p-2 bg-color-800'>
                {/* Left side */}
                <div className='flex items-center gap-2'>
                    <h1 className='text-lg text-color-light font-medium'>Abdul Ghaffar - Bot</h1>
                </div>

                {/* Right side */}
                <div className='flex items-center gap-2'>
                    <button onClick={handleChatDownload} className='text-color-500 bg-color-light rounded-full p-1 transition duration-300'>
                        <DownloadIcon />
                    </button>
                    <button onClick={handleChatDelete} className='text-color-500 bg-color-light rounded-full p-1 transition duration-300'>
                        <DeleteIcon />
                    </button>
                </div>
            </div>




            {/* Main chat area */}
            <div className='flex-1 overflow-y-auto bg-color-light'>

                <ChatWindow messages={messages} endRef={endRef} />
            </div>


            {/* Bottom part of chat window */}
            <div className='w-full h-fit p-2 md:p-3 bg-color-800 relative'>
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
    )
}

export default ChatSide