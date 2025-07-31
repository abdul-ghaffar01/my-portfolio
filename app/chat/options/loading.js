'use client'
import Spinner from '@/components/Spinner'
import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
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
                Loading, please wait...
            </motion.p>

            {/* Animated dots */}
            <motion.div
                className="flex gap-1 mt-2"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2, repeat: Infinity } },
                }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="w-2 h-2 bg-gray-500 rounded-full"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: [0.2, 1, 0.2], transition: { duration: 0.8, repeat: Infinity } },
                        }}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default Loading
