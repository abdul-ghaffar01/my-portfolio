import React, { useState } from 'react'
import Logo from '../navbar/Logo';

const GuestMode = ({ setAccountSetup, setGuestMode, setSessionStarted }) => {
    const [creatingAccount, setCreatingAccount] = useState(false);
    const [respMessage, setRespMessage] = useState("")

    const createGuestAccount = async (who) => {
        setCreatingAccount(true)
        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/signup-guest`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ who }),
            });

            const data = await res.json();

            if (res.ok) {
                console.log("Login successful:", data);
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('jwt', data.token);
                setRespMessage(data.message);

                setSessionStarted(true); // ✅ Start session only when ready
                setGuestMode(false);
            }
            else {
                console.error("Login failed:", data.message);
                setRespMessage(data.message);
                // Show error message to user
            }

        } catch (error) {
            console.error("An error occurred during login:", error);
        } finally {
            setCreatingAccount(false)
        }
    }

    const handleBack = () => {
        setAccountSetup(true);
        setGuestMode(false);
    }
    return (
        <div className='flex-[3]'>
            {creatingAccount && (
                <div className='w-full h-full bg-color-900 flex flex-col justify-center items-center'>
                    <Logo startDelay={0} />
                    <p className='text-gray-100 mt-2'>Creating your account...</p>
                </div>
            )}
            <div className='w-[90vw] max-w-[400px] m-auto h-full flex flex-col justify-center font-medium'>

                <h1 className='text-3xl text-color-800 font-semibold text-center'>Who are you?</h1>
                <button onClick={() => createGuestAccount("hr")} className='w-full bg-color-success text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>
                    Human resource officer
                </button>
                <button onClick={() => createGuestAccount("other")} className='w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>
                    Others
                </button>
                <button type='button' onClick={handleBack} className='w-full bg-gray-700 text-color-light hover:bg-gray-800 px-4 py-2 rounded-md mt-5 mx-auto block'>Go back</button>

            </div>
        </div>
    )
}

export default GuestMode