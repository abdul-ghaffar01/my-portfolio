"use client"
import { isTokenValid } from '@/utils/checkAdminToken';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'

const page = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const router = useRouter()


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

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            logged in
        </div>
    );
}

export default page