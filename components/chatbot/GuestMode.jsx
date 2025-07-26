import React from 'react'

const GuestMode = ({ setAccountSetup, setGuestMode }) => {

    const handleBack = () => {
        setAccountSetup(true);
        setGuestMode(false);
    }
    return (
        <div className='w-[90vw] max-w-[400px] m-auto h-full flex flex-col justify-center font-medium'>
            <h1 className='text-3xl text-color-800 font-semibold text-center'>Who are you?</h1>
            <button className='w-full bg-color-success text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>
                Human resource officer
            </button>
            <button className='w-full bg-color-500 text-color-light px-4 py-2 rounded-md mt-5 mx-auto block'>
                Others
            </button>
            <button type='button' onClick={handleBack} className='w-full bg-gray-700 text-color-light hover:bg-gray-800 px-4 py-2 rounded-md mt-5 mx-auto block'>Go back</button>

        </div>
    )
}

export default GuestMode