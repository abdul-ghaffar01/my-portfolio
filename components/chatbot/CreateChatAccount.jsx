"use client"
import { useState } from 'react';

const CreateChatAccount = ({ setAccountSetup, setCreatingAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, fullName: fullname }),
      });
      console.log(email, password, fullname)

      const data = await res.json();

      if (!res.ok) {
        console.error('Signup failed:', data.message);
        // Show error to user if needed
        return;
      }

      console.log('Signup successful:', data);
      // Redirect or clear form if needed
    } catch (err) {
      console.error('Error during signup:', err);
    }
  };


  const handleBack = () => {
    setCreatingAccount(false);
    setAccountSetup(true);
  }
  return (
    <div className='w-[90vw] max-w-[400px] m-auto bg-gray-400 rounded-md p-2 mt-10'>
      <h1 className='text-3xl text-color-800 font-semibold text-center'>Signup to start chatting</h1>
      <div className='max-w-[400px] w-full mx-auto p-2 text-lg'>
        <form className='flex flex-col gap-4' onSubmit={handleSignup}>
          <input onChange={(e) => { setFullname(e.target.value) }} type='text' placeholder='Fullname' className='p-2 rounded-md bg-color-light text-color-800 outline-none' />
          <input onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Email' className='p-2 rounded-md bg-color-light text-color-800 outline-none' />
          <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' className='p-2 rounded-md bg-color-light text-color-800 outline-none' />
          <button type='submit' className='w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>Signup</button>
          <button type='button' onClick={handleBack} className='w-full bg-gray-700 text-color-light hover:bg-gray-800 px-4 py-2 rounded-md mt-1 mx-auto block'>Go back</button>
        </form>
      </div>
    </div>
  )
}

export default CreateChatAccount