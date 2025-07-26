import React from 'react'

const ChatWindow = () => {
  return (
      <div ref={chatWindowElem} className='w-screen h-screen md:relative bg-color-800 md:h-0 md:w-0 md:mr-3 md:rounded-md shadow-lg overflow-hidden transition duration-300' >
        {/* header of chat window */}
        <div className='w-full h-[60px] p-2 flex items-center justify-between' >
          {/* My name */}
          <h3 className='text-color-light font-bold md:text-lg text-md' > Abdul Ghaffar - Bot</h3>

          {/* right buttons */}
          <div >
            <button className='ml-2 text-color-light hover:text-color-400 transition duration-300'>
              <DownloadIcon />
            </button>
            <button className='ml-2 text-color-light hover:text-color-400 transition duration-300'>
              <FullscreenIcon />
            </button>
            <button onClick={hideChat} className='ml-2 text-color-light hover:text-color-400 transition duration-300'>
              <ClearIcon />
            </button>

          </div >
        </div >

        {/* Bottom part of chat window */}
        <div className='px-2 h-[calc(100%-68px)] rounded-md' >
          {/* Main messeging window */}
          {/* < ChatWindow /> */}
        </div>

      </div >
  )
}

export default ChatWindow