"use client";
import { useEffect, useState } from 'react';
import ChatSide from '@/components/chatbot/ChatSide';
import AccountSetup from '@/components/chatbot/AccountSetup';
import GuestMode from '@/components/chatbot/GuestMode';
import { connectSocketReadOnly } from '@/utils/socket';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import decodeJWT from '@/utils/chatbot/decodeJwt';

const Page = () => {
    const [mounted, setMounted] = useState(false); // ✅ Fix hydration mismatch
    const [sessionStarted, setSessionStarted] = useState(false);
    const [creatingAccount, setCreatingAccount] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [guestMode, setGuestMode] = useState(false);
    const [accountSetup, setAccountSetup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setMounted(true); // ✅ Only render UI after mount
    }, []);

    useEffect(() => {
        if (!mounted) return; // ✅ Prevent SSR issues

        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        if (token) {
            const payload = decodeJWT(token)
            localStorage.setItem("jwt", token);
            localStorage.setItem("user", JSON.stringify(payload));
            window.history.replaceState({}, document.title, window.location.pathname);
            router.push("/chat");
        }
    }, [mounted, router]);

    useEffect(() => {
        if (!mounted) return;
        const socket = connectSocketReadOnly();
        if (socket) setLoading(false);

        socket.on('onlineUsers', (users) => {
            if (!Array.isArray(users)) return setOnlineUsers([]);
            setOnlineUsers(users);
        });

        return () => socket.off('onlineUsers');
    }, [mounted]);

    useEffect(() => {
        if (!mounted) return;
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
            setAccountSetup(true);
        } else {
            setSessionStarted(true);
        }
    }, [mounted]);

    if (!mounted) return null; // ✅ Skip SSR rendering entirely

    return (
        <div className='w-screen h-[100dvh] flex overflow-hidden'>
            {loading && <Loader />}
            {sessionStarted && <ChatSide setSessionStarted={setSessionStarted} setAccountSetup={setAccountSetup} />}
            {accountSetup && <AccountSetup setCreatingAccount={setCreatingAccount} setLoggingIn={setLoggingIn} setGuestMode={setGuestMode} setAccountSetup={setAccountSetup} />}
            {guestMode && <GuestMode setAccountSetup={setAccountSetup} setGuestMode={setGuestMode} setSessionStarted={setSessionStarted} />}

            {/* Sidebar */}
            <div className='hidden md:block md:flex-[1] max-w-[400px] border-l border-color-gray-500 bg-gray-900 flex flex-col overflow-y-auto'>
                <div className='w-full text-center mt-3'>
                    <span className='text-gray-400 text-sm'>You can't see any of the chat messages</span>
                </div>
                <div className='w-full h-fit overflow-y-auto p-2'>
                    <h1 className='text-xl text-gray-400 mb-1 font-medium'>Online users</h1>
                    {loading && <p>Loading online users...</p>}
                    {!loading && onlineUsers.length === 0 && <p className='text-color-gray-400'>Nobody is online</p>}
                    {onlineUsers.map((user, index) => (
                        <div key={user.id || user._id || index} className='flex items-center bg-gray-500 hover:bg-gray-600 rounded-md p-3 mb-2'>
                            <h2 className='text-lg'>{user.fullName}</h2>
                            <span className='w-3 h-3 rounded-full ml-2 bg-color-success'></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
