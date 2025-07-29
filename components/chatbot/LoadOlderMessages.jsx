import React, { useState } from 'react'
import Spinner from '../Spinner'
import useSocketStore from '@/store/chatSocketStore'
import useChatStore from '@/store/chatStore'

const LoadOlderMessages = () => {
  const [loading, setLoading] = useState(false)
  const { socket } = useSocketStore();
  const { userId, messages } = useChatStore();
  const limit = 20
  const loadMessages = () => {
    if (!socket) return console.error("Socket not connected");
    setLoading(true)
    const skip = JSON.parse(localStorage.getItem("chat-messages")).state.messages.length
    console.log("local", JSON.parse(localStorage.getItem("chat-messages")))
    socket.emit("loadOlderMessages", { userId, skip, limit })
    setLoading(false)
  }
  return (
    <div className='w-full flex justify-center mt-1'>
      {loading && <Spinner />}
      {!loading
        && (<button onClick={loadMessages} className='w-fit h-fit px-3 py-1 bg-gray-100 border border-gray-400 rounded-full'>
          Load more
        </button>)
      }
    </div>
  )
}

export default LoadOlderMessages