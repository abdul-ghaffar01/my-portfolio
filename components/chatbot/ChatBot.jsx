import Image from 'next/image'
import MessageIcon from '@mui/icons-material/Message';
import { useRef } from 'react';
import ChatWindow from './ChatWindow';

const ChatBot = () => {
  // const [isChatOpened, setIsChatOpened] = useState(false)
  const chatWindowElem = useRef(null)
  const chatWindowElemArrow = useRef(null)
  const showChat = () => {
    if (chatWindowElem.current) {
      chatWindowElem.current.style.height = "70vh"
      chatWindowElem.current.style.width = "400px"
      if (chatWindowElemArrow.current)
        chatWindowElemArrow.current.style.borderTop = "12px solid var(--color-800)"
    }
  };
  const hideChat = () => {
    // Logic to close the chat window
    console.log("Chat window closed");
  };
  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col overflow-hidden">
      <div ref={chatWindowElem} className='w-screen h-screen bg-color-800 md:h-0 md:w-0 md:mr-3 md:rounded-md shadow-lg '>
        {/* header of chat window */}
        
        <ChatWindow />
      </div>
      <div className='self-end mr-3 mb-3 flex flex-col items-center justify-center'>
        {/* Pointing triangle */}
        <div ref={chatWindowElemArrow} class="w-0 h-0 mb-1 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-0 border-t-color-800"></div>

        {/* Message icon button */}
        <button onClick={showChat} className="w-fit self-end bg-color-700 text-light p-3 rounded-full shadow-md hover:bg-color-800 transition duration-300">
          <MessageIcon className="text-2xl text-color-light" />
        </button>
      </div>
    </div>
  )
}

export default ChatBot