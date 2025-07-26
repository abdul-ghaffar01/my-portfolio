import React from 'react'

const AccountSetup = ({ setCreatingAccount, setGuestMode, setLoggingIn, setAccountSetup }) => {
    
    const handleLogin = () => {
        setLoggingIn(true)
        setAccountSetup(false)
    }
    const handleSignup = () => {
        setCreatingAccount(true)
        setAccountSetup(false)
    }
    const handleGuest = () => {
        setGuestMode(true)
        setAccountSetup(false)
    }
    return (
        <div className='flex-[2] min-h-[100dvh] flex flex-col justify-center'>
            <div>
                <h1 className='text-3xl text-color-800 font-semibold text-center mt-10'>Login to start chatting</h1>
            </div>

            <div className='max-w-[400px] w-full mx-auto p-2 text-lg'>
                <button onClick={handleLogin} className='w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>Login with email and password</button>
                <button onClick={handleSignup} className='w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>Create new account</button>
                <button onClick={handleGuest} className='w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>Continue as guest</button>
                <p className='text-center text-sm text-gray-400 mt-2'>You may lose history in guest mode after some time</p>
            </div>
        </div>
    )
}

export default AccountSetup