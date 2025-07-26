import React, { useState } from 'react'

const LoginChat = ({ setAccountSetup, setLoggingIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/chatbot/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data);
        // Optionally store token/cookie or redirect

      } else {
        console.error("Login failed:", data.message);
        // Show error message to user
      }

    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };


  const handleBack = () => {
    setLoggingIn(false);
    setAccountSetup(true);
  }
  return (
    <div className='w-[90vw] max-w-[400px] m-auto bg-gray-400 rounded-md p-2 mt-10'>
      <h1 className='text-3xl text-color-800 font-semibold text-center'>Login to start chatting</h1>
      <div className='max-w-[400px] w-full mx-auto p-2 text-lg'>
        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
          <input onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Email' className='p-2 rounded-md bg-color-light text-color-800 outline-none' />
          <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' className='p-2 rounded-md bg-color-light text-color-800 outline-none' />
          <button type='submit' className='w-full bg-color-500 hover:bg-color-700 text-color-light px-4 py-2 rounded-md mt-1 mx-auto block'>Login</button>
          <button type='button' onClick={handleBack} className='w-full bg-gray-700 text-color-light hover:bg-gray-800 px-4 py-2 rounded-md mt-1 mx-auto block'>Go back</button>
        </form>
      </div>
    </div>
  )
}

export default LoginChat