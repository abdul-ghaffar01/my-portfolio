import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AccountSetup = ({ setCreatingAccount, setGuestMode, setLoggingIn, setAccountSetup }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoggingIn(true);
        setAccountSetup(false);
    };

    const handleSignup = () => {
        setCreatingAccount(true);
        setAccountSetup(false);
    };

    const handleGuest = () => {
        setGuestMode(true);
        setAccountSetup(false);
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        window.location.href = `${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/googlelogin`;
    };

    return (
        <div className="flex-[2] min-h-[100dvh] flex flex-col justify-center">
            <div>
                <h1 className="text-3xl text-color-800 font-semibold text-center mt-10">
                    Login to start chatting
                </h1>
            </div>

            <div className="max-w-[400px] w-full mx-auto p-2 text-lg">
                <button
                    onClick={handleLogin}
                    aria-label="Login with email"
                    className="w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5"
                >
                    Login with email and password
                </button>

                <button
                    onClick={handleSignup}
                    aria-label="Create a new account"
                    className="w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5"
                >
                    Create new account
                </button>

                <button
                    onClick={handleGuest}
                    aria-label="Continue as guest"
                    className="w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5"
                >
                    Continue as guest
                </button>

                <button
                    onClick={handleGoogleLogin}
                    aria-label="Continue with Google"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md mt-5 hover:bg-gray-50"
                >
                    {loading ? (
                        <span className="loader border-2 border-gray-400 border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                    ) : (
                        <>
                            <img src="/google-icon.svg" alt="Google logo" className="w-5 h-5" />
                            Continue with Google
                        </>
                    )}
                </button>

                <p className="text-center text-sm text-gray-400 mt-2">
                    You may lose history in guest mode after clearing browser history.
                </p>
            </div>
        </div>
    );
};

export default AccountSetup;
