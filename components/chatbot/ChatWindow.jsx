
import React from 'react'
import Message from './Message'
import NewChatCard from './NewChatCard'
import { format } from 'date-fns';

const ChatWindow = ({ messages, endRef }) => {
  return (
    <div className='flex flex-col h-full max-h-full pb-2'>
      {messages.length === 0 && (
        <NewChatCard />
      )}

      {/* Showing all messages */}

      {
        messages.map((message, index) => {
          const current = new Date(message.sentAt);
          const previous = index > 0 ? new Date(messages[index - 1].sentAt) : null;

          const isNewDay = !previous || current.toDateString() !== previous.toDateString();

          const getFriendlyDate = (date) => {
            const today = new Date();
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);

            if (date.toDateString() === today.toDateString()) return "Today";
            if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
            return format(date, "MMMM d, yyyy"); // e.g., July 25, 2025
          };

          return (
            <React.Fragment key={index}>
              {isNewDay && (
                <div className="text-center text-gray-500 text-sm my-4">
                  {getFriendlyDate(current)}
                </div>
              )}
              <Message message={message} />
            </React.Fragment>
          );
        })
      }


      {/* Scroll to bottom */}
      {messages.length > 0 && (<div className='h-[4px] w-full' ref={endRef} >&nbsp;</div>)}
    </div>
  )
}

export default ChatWindow