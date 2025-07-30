
import React from 'react'
import Message from './Message'
import NewChatCard from './NewChatCard'
import { format } from 'date-fns';

const ChatWindow = ({ messages, endRef, scrollRef }) => {
  return (
    <div ref={scrollRef} className='flex flex-col h-full overflow-auto max-h-full pb-2 bg-gray-900'>

      {/* Load older messages */}
      {/* {hasMoreMessages &&
        <LoadOlderMessages />} */}

      {/* If chat is cleared or new chat is started then new chat card will be shown */}
      {messages.length === 0 && (
        <NewChatCard />
      )}

      {/* Showing all messages */}

      {Array.isArray(messages) && messages.length > 0 &&
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
            return format(date, "MMMM d, yyyy");
          };

          return (
            <Message
              key={index}
              message={message}
              showDate={isNewDay}
              formattedDate={getFriendlyDate(current)}
            />
          );
        })
      }


      {/* Scroll to bottom */}
      {messages.length > 0 && (<div className='h-[4px] w-full' ref={endRef} >&nbsp;</div>)}
    </div>
  )
}

export default ChatWindow