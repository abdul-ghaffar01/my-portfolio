import sendMessage from '@/utils/chatbot/sendMessage'
import React from 'react'

const SendMessage = ({ messageText }) => {


    return (
        <button
            onClick={(messageText,
                socketInstance,
                setMessages,
                userId,
                setMessageText,
                setShouldScrollToBottom,
                textareaRef) => { sendMessage }}
            disabled={!messageText.trim()}
            className='w-[60px] text-color-light p-2 absolute right-2 bottom-2'>
            {/* <SendIcon className={`${!messageText.trim() ? "text-gray-400" : "text-color-light"}`} /> */}
            <SendIcon className={`${!messageText.trim() ? "text-gray-400" : "text-color-light"}`} />
        </button>

    )
}

export default SendMessage