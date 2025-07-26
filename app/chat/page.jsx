"use client"
import ChatSide from '@/components/chatbot/ChatSide';
import AccountSetup from '@/components/chatbot/AccountSetup';
import CreateChatAccount from '@/components/chatbot/CreateChatAccount';
import LoginChat from '@/components/chatbot/LoginChat';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const isOnline = true; // This should be replaced with actual online status logic
    const sessionStarted = false; // This should be replaced with actual session logic
    const [creatingAccount, setCreatingAccount] = useState(false)
    const [loggingIn, setLoggingIn] = useState(false)
    const [guestMode, setGuestMode] = useState(false)
    const [accountSetup, setAccountSetup] = useState(true)
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            if (url !== window.location.pathname) {
                alert("Back button or route change triggered!");
                // router.push('/custom-page') or block it
                router.push('/chat'); // Redirect to chat page
            }
        };

        router.events?.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events?.off('routeChangeStart', handleRouteChange);
        };
    }, []);
    return (
        <div className='w-screen h-[100dvh] fixed top-0 left-0 flex'>
            <div className='flex-[3]'>

                {/* Chat side */}
                {sessionStarted && <ChatSide />}
                
                {/* Account setup */}
                {accountSetup && <AccountSetup setCreatingAccount={setCreatingAccount} setLoggingIn={setLoggingIn}
                    setGuestMode={setGuestMode} setAccountSetup={setAccountSetup} />}
                
                {/* Account creation */}
                {creatingAccount && <CreateChatAccount setCreatingAccount={setCreatingAccount} setAccountSetup={setAccountSetup} />}

                {/* Login for chat */}
                {loggingIn && <LoginChat setLoggingIn={setLoggingIn} setAccountSetup={setAccountSetup} />}
            </div>


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