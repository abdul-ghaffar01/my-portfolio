"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import decodeJWT from "@/utils/chatbot/decodeJwt";

const ProtectedChatBot = ({ children }) => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        if (!token) {
            router.replace("/chat");
            return;
        }

        try {
            const decoded = decodeJWT(token);

            // Check expiration
            if (!decoded) {
                localStorage.removeItem("jwt");
                router.replace("/chat");
                return;
            }

            // Token is valid
            setIsAuthorized(true);
        } catch (error) {
            localStorage.removeItem("jwt");
            router.replace("/chat");
        }
    }, [router]);

    if (!isAuthorized) return null; // Prevent flicker while checking

    return children
};

export default ProtectedChatBot;
