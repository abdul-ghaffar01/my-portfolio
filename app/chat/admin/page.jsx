"use client"
import AllChats from '@/components/chatbot/admin/AllChat';
import ChatMessages from '@/components/chatbot/admin/ChatMessages';
import { isTokenValid } from '@/utils/checkAdminToken';
import { connectSocketWithUser } from '@/utils/socket';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'

const page = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [adminSocket, setAdminSocket] = useState(null)


    const router = useRouter()

    useEffect(() => {
        const adminToken = localStorage.getItem("adminToken")
        setAdminSocket(connectSocketWithUser(adminToken))
    }, [])


    useEffect(() => {
        const token = localStorage.getItem("adminToken"); // Or whatever key you're using
        if (!isTokenValid(token)) {
            console.log("Token is invalid or expired. Redirecting...");
            // e.g., logout or redirect
            localStorage.removeItem("adminToken");
            router.push("/chat/adminlogin")
        } else {
            setLoggedIn(true)
        }
    }, []);
    const [selectedUserId, setSelectedUserId] = useState(null);

    return (
        <div className="flex w-full h-screen">
            <AllChats adminSocket={adminSocket} onSelectChat={setSelectedUserId} />
            <ChatMessages adminSocket={adminSocket} selectedUserId={selectedUserId} />
        </div>
    );
}

export default page