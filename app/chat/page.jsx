"use client";
import React, { useRef, useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const page = () => {
    const isOnline = true; // This should be replaced with actual online status logic
    const textareaRef = useRef(null);
    const [messageText, setMessageText] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setMessageText(value);

        const lines = value.split('\n').length;
        const lineHeight = 24;
        const maxLines = 6;

        const newHeight = Math.min(lines, maxLines) * lineHeight;

        textareaRef.current.style.height = `${newHeight}px`;
        textareaRef.current.style.overflowY = lines > maxLines ? "auto" : "hidden";
    };

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex'>

            {/* main chat window */}
            <div className='flex-[2] flex flex-col'>
                {/* top of the chat window */}
                <div className='w-full h-fit flex items-center justify-between p-2 bg-color-800'>
                    {/* Left side */}
                    <div className='flex items-center gap-2'>
                        <h1 className='text-lg text-color-light font-medium'>Abdul Ghaffar - Bot</h1>
                    </div>

                    {/* Right side */}
                    <div className='flex items-center gap-2'>
                        <button className='text-color-500 bg-color-light rounded-full p-1 transition duration-300'>
                            <DownloadIcon />
                        </button>
                        <button className='text-color-500 bg-color-light rounded-full p-1 transition duration-300'>
                            <DeleteIcon />
                        </button>
                    </div>
                </div>




                {/* Main chat area */}
                <div className='flex-[1]'>messages</div>


                {/* Bottom part of chat window */}
                <div className='w-full h-fit p-2 md:p-3 bg-color-800 relative'>
                    <textarea

                        ref={textareaRef}
                        onChange={handleChange}
                        value={messageText}
                        placeholder='Type your message'
                        style={{ height: "24px", lineHeight: "24px" }}
                        className='w-[calc(100%-70px)] bg-transparent mt-1 outline-none text-lg text-color-light resize-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                    ></textarea>
                    <button className='w-[60px] text-color-light p-2 absolute right-2 bottom-2'>
                        <SendIcon />
                    </button>
                </div>

            </div>


            {/* left side all the chats */}
            <div className='hidden md:block md:flex-[1] max-w-[400px] border-l border-gray-400'>
                <div className='w-full text-center my-3'>
                    <h1 className='text-2xl text-gray-600'>All chats</h1>
                    <span className='text-gray-500 text-sm'>You can't see any of the chat messages</span>
                </div>

                <div className='w-full h-full overflow-y-auto p-2'>
                    {/* List of all chats */}
                    <div className='flex items-center w-full h-fit bg-gray-500 hover:bg-gray-700 rounded-md p-3 transition duration-300 text-color-light mb-2'>
                        <h2 className='text-lg w-fit'>Hassan Raza</h2>
                        <span className={`w-3 h-3 rounded-full ml-2 ${isOnline ? "bg-color-success" : "bg-gray-400"}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page