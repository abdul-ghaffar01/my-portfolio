
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
      <div className='h-[4px] w-full' ref={endRef} >&nbsp;</div>
    </div>
  )
}

export default ChatWindow