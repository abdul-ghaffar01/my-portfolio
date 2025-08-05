'use client'
import Spinner from '@/components/Spinner'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // ✅ Prevents hydration mismatch
    }, []);

    if (!mounted) return null; // ✅ Avoids animation issues on SSR

    return (
        <div className="w-screen h-[100dvh] bg-gray-900 flex flex-col items-center justify-center text-gray-300">
            {/* Spinner */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Spinner />
            </motion.div>

            {/* Loading text */}
            <motion.p
                className="mt-6 text-lg font-medium text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Preparing your chat...
            </motion.p>

            {/* Animated Dots (CSS-based) */}
            <div className="flex gap-1 mt-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:200ms]"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:400ms]"></span>
            </div>
        </div>
    )
}

export default Loading;
