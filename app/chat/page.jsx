"use client"
import ChatSide from '@/components/chatbot/ChatSide';
import AccountSetup from '@/components/chatbot/AccountSetup';
import CreateChatAccount from '@/components/chatbot/CreateChatAccount';
import LoginChat from '@/components/chatbot/LoginChat';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GuestMode from '@/components/chatbot/GuestMode';
import { connectSocketReadOnly } from '@/utils/socket';
import Loader from '@/components/Loader';

const Page = () => {
    const [sessionStarted, setSessionStarted] = useState(false);
    const [creatingAccount, setCreatingAccount] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [guestMode, setGuestMode] = useState(false);
    const [accountSetup, setAccountSetup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const router = useRouter();

    // ✅ Connect socket & listen for online users
    useEffect(() => {
        const socket = connectSocketReadOnly();
        if (socket) {
            setLoading(false);
        }

        socket.on('onlineUsers', (users) => {
            console.log("Online users:", users);

            if (!users || !Array.isArray(users)) {
                console.warn("Invalid users data:", users);
                setOnlineUsers([]);
                return;
            }
            setOnlineUsers(users);
        });

        return () => {
            socket.off('onlineUsers');
        };
    }, []);

    // ✅ JWT check for session
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
            setAccountSetup(true);
            setCreatingAccount(false);
            setLoggingIn(false);
            setGuestMode(false);
            setSessionStarted(false);
        } else {
            setSessionStarted(true);
        }
    }, []);

    // ✅ Force route to /chat
    useEffect(() => {
        const handleRouteChange = (url) => {
            if (url !== window.location.pathname) {
                router.push('/chat');
            }
        };
        router.events?.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events?.off('routeChangeStart', handleRouteChange);
        };
    }, []);

    return (
        <div className='w-screen h-[100dvh] top-0 left-0 flex overflow-hidden'>
            {loading && <Loader />}

            {/* Chat Side */}
            {sessionStarted && <ChatSide />}

            {/* Account setup flow */}
            {accountSetup && <AccountSetup setCreatingAccount={setCreatingAccount} setLoggingIn={setLoggingIn} setGuestMode={setGuestMode} setAccountSetup={setAccountSetup} />}
            {creatingAccount && <CreateChatAccount setCreatingAccount={setCreatingAccount} setAccountSetup={setAccountSetup} setSessionStarted={setSessionStarted} />}
            {loggingIn && <LoginChat setLoggingIn={setLoggingIn} setAccountSetup={setAccountSetup} setSessionStarted={setSessionStarted} />}
            {guestMode && <GuestMode setAccountSetup={setAccountSetup} setGuestMode={setGuestMode} setSessionStarted={setSessionStarted} />}

            {/* Sidebar: Online users */}
            <div className='hidden md:block md:flex-[1] max-w-[400px] bg-gray-100 flex flex-col overflow-y-auto'>
                <div className='w-full text-center mt-3'>
                    <span className='text-gray-500 text-sm'>You can't see any of the chat messages</span>
                </div>

                <div className='w-full h-fit overflow-y-auto p-2'>
                    <h1 className='text-xl text-gray-600 text-left mb-1 font-medium'>Online users</h1>
                    {loading && <p>Loading online users...</p>}
                    {!loading && onlineUsers.length === 0 && <p>Nobody is online</p>}

                    {onlineUsers.map((user, index) => (
                        <div
                            key={user.id || user._id || index}
                            className='flex items-center w-full h-fit bg-gray-500 hover:bg-gray-700 rounded-md p-3 transition duration-300 text-color-light mb-2'
                        >
                            <h2 className='text-lg w-fit'>{user.fullName}</h2>
                            <span className='w-3 h-3 rounded-full ml-2 bg-color-success'></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
