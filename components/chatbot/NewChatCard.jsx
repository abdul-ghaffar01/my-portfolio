import React from 'react'

const NewChatCard = () => {
    return (
        <div className='h-full flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 px-4">
                <img src="/illustrations/newchat.png" alt="Start Chat" className="w-40 h-40 mb-6 opacity-80 rounded-md" />
                <h2 className="text-xl font-semibold text-gray-600">No messages yet</h2>
                <p className="text-sm text-gray-500 mt-2 max-w-xs">
                    Start the conversation by sending your first message. We'll reply shortly!
                </p>
            </div>

        </div>
    )
}

export default NewChatCard