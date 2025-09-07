'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutImage() {
    const containerRef = useRef(null);
    const frameRef = useRef(null);
    const boundaryRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    const handleHoverIn = () => {
        if (frameRef.current && boundaryRef.current) {
            frameRef.current.style.height = '0';
            boundaryRef.current.style.transform = 'rotate(0deg)';
        }
    };

    const handleHoverOut = () => {
        if (frameRef.current && boundaryRef.current) {
            frameRef.current.style.height = size.height + 'px';
            boundaryRef.current.style.transform = 'rotate(-10deg)';
        }
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            const rect = containerRef.current.getBoundingClientRect();
            setSize({ width: rect.width, height: rect.height });
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        if (frameRef.current && boundaryRef.current) {
            frameRef.current.style.width = `${size.width}px`;
            frameRef.current.style.height = `${size.height}px`;
            boundaryRef.current.style.width = `${size.width}px`;
            boundaryRef.current.style.height = `${size.height}px`;
        }
    }, [size]);

    return (
        <motion.div
            className="flex-1 p-10 flex items-center justify-center relative"
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
        >
            <div className="absolute w-[250px] h-[250px] rounded-full bg-blue-500/20 blur-[120px] -z-10"></div>

            <motion.div whileHover={{ scale: 1.03 }} className="relative">
                <div ref={containerRef} className="relative w-[300px] sm:w-[400px] h-[500px]">
                    <Image
                        src="/about_profile.png"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                        alt="Profile"
                    />

                    {/* Overlay Frame */}
                    <div
                        ref={frameRef}
                        className="absolute top-0 left-0 bg-blue-500/10 backdrop-blur-sm rounded-lg transition-all duration-300"
                    ></div>

                    {/* Tilted Border */}
                    <div
                        ref={boundaryRef}
                        className="absolute top-0 border-2 border-blue-500/70 rounded-lg p-3 rotate-[-10deg] transition-all duration-300 origin-center"
                    ></div>
                </div>
            </motion.div>
        </motion.div>
    );
}
