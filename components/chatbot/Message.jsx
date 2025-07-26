import React from 'react'

const Message = ({ message }) => {
    const who = message.who || "you"; // Default to "user" if not provided
    return (
        <div className={`${who === "you" ? "bg-color-500 self-end" : "bg-gray-400"} w-fit min-w-[150px] max-w-[80%] p-1 md:p-2 rounded-md m-1 text-color-light `}>
            {/* Message component */}
            <div className='w-fit '>
                <p className='font-semibold'>{message.content}</p>
            </div>
            <div className='text-xs flex items-center justify-between mt-1'>
                <p className='text-color-light'>{message.who}</p>
                <p className='text-color-light'>{message.timestamp}</p>
            </div>
        </div>
    )
}

export default Message