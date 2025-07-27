"use client";

import ChatSide from '@/components/chatbot/ChatSide';
import AccountSetup from '@/components/chatbot/AccountSetup';
import CreateChatAccount from '@/components/chatbot/CreateChatAccount';
import LoginChat from '@/components/chatbot/LoginChat';
import GuestMode from '@/components/chatbot/GuestMode';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { connectSocketWithUser, connectSocketReadOnly } from '@/utils/socket';

let socket;

const Page = () => {
    const [sessionStarted, setSessionStarted] = useState(false);
    const [creatingAccount, setCreatingAccount] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [guestMode, setGuestMode] = useState(false);
    const [accountSetup, setAccountSetup] = useState(false);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const user = JSON.parse(localStorage.getItem('user'));

        if (!jwt || !user?.id) {
            setAccountSetup(true);
            setCreatingAccount(false);
            setLoggingIn(false);
            setGuestMode(false);
            setSessionStarted(false);
            socket = connectSocketReadOnly();
        } else {
            socket = connectSocketWithUser(user.id);
            setSessionStarted(true);
        }

        socket.on('onlineUsers', (users) => {
            console.log("🟢 Online users list:", users);
            setOnlineUsers(users);
        });

        return () => {
            if (socket) {
                socket.off('onlineUsers');
                socket.disconnect();
            }
        };
    }, []);

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
        <div className='w-screen md:h-screen h-[100dvh] fixed top-0 left-0 flex'>

            {/* Chat Side */}
            {sessionStarted && <ChatSide />}

            {/* Account setup flow */}
            {accountSetup && <AccountSetup setCreatingAccount={setCreatingAccount} setLoggingIn={setLoggingIn} setGuestMode={setGuestMode} setAccountSetup={setAccountSetup} />}
            {creatingAccount && <CreateChatAccount setCreatingAccount={setCreatingAccount} setAccountSetup={setAccountSetup} setSessionStarted={setSessionStarted} />}
            {loggingIn && <LoginChat setLoggingIn={setLoggingIn} setAccountSetup={setAccountSetup} setSessionStarted={setSessionStarted} />}
            {guestMode && <GuestMode setAccountSetup={setAccountSetup} setGuestMode={setGuestMode} setSessionStarted={setSessionStarted} />}

            {/* Sidebar: All online users */}
            <div className='hidden md:block md:flex-[1] max-w-[400px] bg-gray-100'>
                <div className='w-full text-center my-3'>
                    <h1 className='text-2xl text-gray-600'>All Chats</h1>
                    <span className='text-gray-500 text-sm'>You can't see any of the chat messages</span>
                </div>

                <div className='w-full h-full overflow-y-auto p-2'>
                    {onlineUsers.map((user, index) => (
                        <div key={index} className='flex items-center w-full h-fit bg-gray-500 hover:bg-gray-700 rounded-md p-3 transition duration-300 text-color-light mb-2'>
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
