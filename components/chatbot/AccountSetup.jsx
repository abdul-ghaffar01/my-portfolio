import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from "next/image";

const AccountSetup = ({ setGuestMode, setAccountSetup }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleGuest = () => {
        setGuestMode(true);
        setAccountSetup(false);
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        window.location.href = `${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/googlelogin`;
    };

    return (
        <div className="flex-[3] min-h-[100dvh] flex flex-col justify-center bg-gray-900 text-gray-100 px-4">
            <div className="max-w-[400px] w-full mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-200 mb-6">
                    Login to Start Chatting
                </h1>

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200 disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <span className="loader border-2 border-gray-400 border-t-transparent rounded-full w-4 h-4 animate-spin" />
                            <span>Signing in...</span>
                        </>
                    ) : (
                        <>
                            <Image src="/google_logo.png" alt="Google logo" width={20} height={20} />
                            <span>Continue with Google</span>
                        </>
                    )}
                </button>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <span className="flex-1 h-px bg-gray-700"></span>
                    <span className="px-3 text-sm text-gray-500">OR</span>
                    <span className="flex-1 h-px bg-gray-700"></span>
                </div>

                {/* Guest Mode Button */}
                <button
                    onClick={handleGuest}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-3 rounded-lg transition-all duration-200 shadow-md"
                >
                    Continue as Guest
                </button>

                {/* Info Text */}
                <p className="text-center text-xs text-gray-400 mt-3">
                    ⚠ You may lose history in guest mode after clearing your browser data.
                </p>
            </div>
        </div>
    );
};

export default AccountSetup;
