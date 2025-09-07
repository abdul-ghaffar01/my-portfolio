'use client'
import React, { useEffect, useRef, useState } from 'react'
import Bg from './Bg'
import { motion, AnimatePresence } from "framer-motion"
import Navbar from '../navbar/NavbarClient'
import Image from 'next/image'

const skills = [
    "💻 JavaScript", "⚛️ React", "🔗 Next.js", "🟢 Node.js", "🚀 Express.js",
    "🏗️ NestJS", "🎨 Tailwind CSS", "🖌️ Material-UI", "✨ Framer Motion",
    "📦 MongoDB", "🐘 PostgreSQL", "🗄️ MySQL", "🔗 REST APIs", "📡 GraphQL",
    "🛠️ Microservices", "🔒 Authentication", "🛡️ Web Security",
    "📊 Data Structures", "🧩 Algorithms", "🧠 Problem Solving",
    "🤖 Machine Learning", "⚡ Arduino", "📟 Digital Logic Design",
    "🐙 Git", "🐳 Docker", "🐧 Linux", "🌍 Full-Stack Development"
];

const Home = () => {
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [popups, setPopups] = useState([]);
    const lastPost = useRef({ x: 0, y: 0 });

    // Mouse movement and skill popups
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePos({ x: clientX, y: clientY });

            if (
                Math.abs(lastPost.current.x - clientX) >= 100 ||
                Math.abs(lastPost.current.y - clientY) >= 100
            ) {
                const randomSkill = skills[Math.floor(Math.random() * skills.length)];
                const id = Date.now();

                setPopups((prev) => {
                    const updated = [...prev, { id, text: randomSkill, x: clientX, y: clientY - 70 }];
                    return updated.slice(-20); // keep only last 20
                });

                lastPost.current = { x: clientX, y: clientY };

                // Remove popup after 1s
                setTimeout(() => {
                    setPopups((prev) => prev.filter((p) => p.id !== id));
                }, 1000);
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Calculate hero height
    useEffect(() => {
        const setWidthHeightOfHome = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const ratio = windowWidth / windowHeight;

            let calculatedHeight = 40;
            if (ratio > 1.1) calculatedHeight = 100;
            else if (ratio > 0.9) calculatedHeight = 70;
            else if (ratio > 0.6) calculatedHeight = 50;

            if (calculatedHeight !== height) setHeight(calculatedHeight);
            if (containerRef.current) containerRef.current.style.height = `${calculatedHeight}vh`;
        };

        setWidthHeightOfHome();
        window.addEventListener("resize", setWidthHeightOfHome);
        return () => window.removeEventListener("resize", setWidthHeightOfHome);
    }, [height]);

    return (
        <motion.div
            id='home'
            ref={containerRef}
            className='w-screen relative overflow-hidden bg-gray-900 text-gray-200'
        >
            {/* Background with grey + blue accent */}
            <Bg />

            <motion.div className='absolute top-0 w-full h-full'>
                <Navbar />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 2.2, duration: .5 } }}
                    viewport={{ once: true, amount: .3 }}
                    className="content relative w-full h-full flex items-center justify-center overflow-hidden"
                >
                    {/* Skill Popups */}
                    <AnimatePresence>
                        {popups.map((popup) => (
                            <motion.p
                                key={popup.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute px-3 py-1 rounded-md text-sm text-blue-400 bg-gray-800/80 shadow-[0_0_10px_#3b82f6]"
                                style={{ left: popup.x, top: popup.y }}
                            >
                                {popup.text}
                            </motion.p>
                        ))}
                    </AnimatePresence>

                    {/* Profile Image with Blue Glow */}
                    <Image
                        src="/profile.png"
                        width={200}
                        height={200}
                        quality={100}
                        alt='Profile'
                        className='h-4/5 w-auto absolute bottom-0 z-[10]'
                    />

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Home;
