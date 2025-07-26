
import React from 'react'
import Message from './Message'

const ChatWindow = ({ messages, endRef }) => {
  return (
    <div className='flex flex-col max-h-full pb-2'>
      {
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      }
      <div ref={endRef} />
    </div>
  )
}

export default ChatWindow