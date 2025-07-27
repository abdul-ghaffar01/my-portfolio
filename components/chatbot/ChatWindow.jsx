
import React from 'react'
import Message from './Message'
import NewChatCard from './NewChatCard'

const ChatWindow = ({ messages, endRef }) => {
  return (
    <div className='flex flex-col h-full max-h-full pb-2'>
      {messages.length === 0 && (
        <NewChatCard />
      )}
      {
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      }
      {messages.length > 0 && (<div className='h-[4px] w-full' ref={endRef} >&nbsp;</div>)}
    </div>
  )
}

export default ChatWindow