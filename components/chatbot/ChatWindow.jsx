import { useEffect, useState } from 'react';
import useSocketStore from '@/store/chatSocketStore';
import Message from './Message';
import NewChatCard from './NewChatCard';
import { format } from 'date-fns';

const ChatWindow = ({ messages, endRef, scrollRef, setStopSendingMessage }) => {
  const { socket } = useSocketStore();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!socket) return;

    // Listen for typing start
    socket.on('typing', () => setIsTyping(true));

    // Listen for typing stop
    socket.on('stopTyping', () => setIsTyping(false));

    // Cleanup listeners
    return () => {
      socket.off('typing');
      socket.off('stopTyping');
    };
  }, [socket]);

  useEffect(()=>{
    if(isTyping) setStopSendingMessage(true);
    else setStopSendingMessage(false)
  }, [isTyping])

  return (
    <div
      ref={scrollRef}
      className="flex flex-col h-full overflow-auto max-h-full p-2 bg-gray-900"
    >
      {messages.length === 0 && <NewChatCard />}

      {Array.isArray(messages) &&
        messages.length > 0 &&
        messages.map((message, index) => {
          const current = new Date(message.sentAt);
          const previous = index > 0 ? new Date(messages[index - 1].sentAt) : null;

          const isNewDay = !previous || current.toDateString() !== previous.toDateString();

          const getFriendlyDate = (date) => {
            const today = new Date();
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);

            if (date.toDateString() === today.toDateString()) return 'Today';
            if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
            return format(date, 'MMMM d, yyyy');
          };

          return (
            <Message
              key={index}
              message={message}
              showDate={isNewDay}
              formattedDate={getFriendlyDate(current)}
            />
          );
        })}

      {/* Typing animation */}
      {isTyping && (
        <div className="flex w-fit items-center gap-1 px-3 py-2 bg-gray-800/80 rounded-xl shadow-md">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="relative w-2 h-2"
            >
              <span
                className="absolute inset-0 bg-gray-300 rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 0.15}s`
                }}
              ></span>
              <span className="absolute inset-0 bg-gray-400 rounded-full"></span>
            </span>
          ))}
        </div>
      )}

      {/* Scroll to bottom */}
      {messages.length > 0 && <div className="h-[4px] w-full" ref={endRef}>&nbsp;</div>}
    </div>
  );
};

export default ChatWindow;
