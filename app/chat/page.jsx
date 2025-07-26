
import ChatSide from '@/components/chatbot/ChatSide';

const page = () => {
    const isOnline = true; // This should be replaced with actual online status logic
    return (
        <div className='w-screen h-[100dvh] fixed top-0 left-0 flex'>

            <ChatSide />


            {/* left side all the chats */}
            <div className='hidden md:block md:flex-[1] max-w-[400px] bg-gray-100'>
                <div className='w-full text-center my-3'>
                    <h1 className='text-2xl text-gray-600'>All chats</h1>
                    <span className='text-gray-500 text-sm'>You can't see any of the chat messages</span>
                </div>

                <div className='w-full h-full overflow-y-auto p-2'>
                    {/* List of all chats */}
                    <div className='flex items-center w-full h-fit bg-gray-500 hover:bg-gray-700 rounded-md p-3 transition duration-300 text-color-light mb-2'>
                        <h2 className='text-lg w-fit'>Hassan Raza</h2>
                        <span className={`w-3 h-3 rounded-full ml-2 ${isOnline ? "bg-color-success" : "bg-gray-400"}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page