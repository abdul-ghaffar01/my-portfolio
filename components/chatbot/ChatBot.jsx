import MessageIcon from '@mui/icons-material/Message';
import { useRouter } from 'next/navigation';

const ChatBot = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat")
  }
  return (
    <div className='fixed bottom-3 right-3 w-12 h-12 shadow-lg bg-color-700 rounded-full right-0 z-50'>
      <button className='w-full h-full flex items-center justify-center' onClick={handleClick}>
        <MessageIcon className='text-color-light' />
      </button>
    </div>
  )
}

export default ChatBot