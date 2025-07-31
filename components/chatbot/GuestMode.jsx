import React, { useState } from 'react';
import Logo from '../navbar/Logo';

const GuestMode = ({ setAccountSetup, setGuestMode, setSessionStarted }) => {
    const [creatingAccount, setCreatingAccount] = useState(false);
    const [respMessage, setRespMessage] = useState("");

    const createGuestAccount = async (who) => {
        setCreatingAccount(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/signup-guest`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ who }),
            });

            const data = await res.json();

            if (res.ok) {
                const payload = decodeJWT(data.token)
                localStorage.setItem("jwt", data.token);
                localStorage.setItem("user", JSON.stringify(payload));
                setRespMessage(data.message || "Guest account created successfully!");
                setSessionStarted(true);
                setGuestMode(false);
            } else {
                setRespMessage(data.message || "Failed to create guest account.");
            }
        } catch (error) {
            console.error("Guest signup error:", error);
            setRespMessage("An unexpected error occurred. Try again.");
        } finally {
            setCreatingAccount(false);
        }
    };

    const handleBack = () => {
        setAccountSetup(true);
        setGuestMode(false);
    };

    return (
        <div className="flex-[3] relative bg-gray-900 text-gray-100">
            {/* Loader Overlay */}
            {creatingAccount && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-10">
                    <div className="w-10 h-10 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-3 text-gray-300">Creating your account...</p>
                </div>
            )}

            <div className="w-[90vw] max-w-[400px] mx-auto h-full flex flex-col justify-center font-medium px-4">
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>

                <h1 className="text-2xl font-semibold text-center text-gray-200 mb-6">
                    Who are you?
                </h1>

                {/* Role Selection */}
                <button
                    onClick={() => createGuestAccount("hr")}
                    className="w-full bg-blue-700 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-all duration-200 shadow-md"
                >
                    Human Resource Officer
                </button>
                <button
                    onClick={() => createGuestAccount("other")}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-all duration-200 shadow-md mt-4"
                >
                    Other
                </button>

                {/* Response Message */}
                {respMessage && (
                    <p
                        className={`mt-4 text-center text-sm ${respMessage.toLowerCase().includes("failed") || respMessage.toLowerCase().includes("error")
                            ? "text-red-400"
                            : "text-green-400"
                            }`}
                    >
                        {respMessage}
                    </p>
                )}

                {/* Back Button */}
                <button
                    type="button"
                    onClick={handleBack}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-3 rounded-lg mt-6 transition-all duration-200"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default GuestMode;
