'use client'
import Loader from '@/components/Loader'
import Spinner from '@/components/Spinner'
import React from 'react'

const loading = () => {
    return (
        <div className='w-screen h-[100dvh]bg-gray-900'>
            <Spinner />
        </div>
    )
}

export default loading