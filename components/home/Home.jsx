'use client'
import React, { useEffect, useRef, useState } from 'react'
import Bg from './Bg'
import { motion } from "framer-motion"
import Navbar from '../navbar/Navbar'
import Image from 'next/image'

const tracker = [];
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
    const containerRef = useRef(null)
    const [height, setHeight] = useState(0)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const lastPost = useRef({ x: 0, y: 0 });
    const contentCont = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });

            if (tracker.length <= 20) {  // ✅ Fixed typo
                if (
                    Math.abs(lastPost.current.x - event.clientX) >= 100 ||
                    Math.abs(lastPost.current.y - event.clientY) >= 100
                ) {
                    const randomIndex = Math.floor(Math.random() * skills.length);
                    const randomSkill = skills[randomIndex];
                    const pTag = document.createElement("p");
                    pTag.textContent = randomSkill;
                    pTag.style.position = "absolute";
                    pTag.style.left = `${event.clientX}px`;
                    pTag.style.top = `${event.clientY - 70}px`; // Removing the height of navbar 
                    pTag.style.color = "black";
                    pTag.style.background = "rgba(255, 255, 255, 0.2)";
                    pTag.style.padding = "5px 10px";
                    pTag.style.borderRadius = "5px";
                    pTag.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
                    pTag.style.transform = "scale(0)"; // Start small for animation
                    pTag.style.wordBreak = "keep"; // Start small for animation

                    if (contentCont.current) {
                        contentCont.current.appendChild(pTag);
                        tracker.push(pTag);
                    }

                    // Animate pop-up effect
                    setTimeout(() => {
                        pTag.style.transform = "scale(1)";
                        pTag.style.opacity = "1";
                    }, 10);

                    // Remove automatically after 2 seconds
                    setTimeout(() => {
                        pTag.style.opacity = "0";
                        pTag.style.transform = "scale(0)";
                        setTimeout(() => {
                            pTag.remove();
                            tracker.splice(tracker.indexOf(pTag), 1);  // ✅ Fix: Properly remove from array
                        }, 300);
                    }, 1000);

                    lastPost.current = { x: event.clientX, y: event.clientY }; // ✅ Use `useRef`
                }
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // For calculating height
    useEffect(() => {
        const setWidthHeightOfHome = () => {
            //Calculations to set for heroes section
            let calculatedHeight = 0;

            //Window width and height
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // calculating ratio
            const widthToHeightRatio = windowWidth / windowHeight;

            // Calculating on the basis of ratio
            if (widthToHeightRatio > 1.1) {
                calculatedHeight = 100
            }
            else if (widthToHeightRatio > 0.9) {
                calculatedHeight = 70
            } else if (widthToHeightRatio > 0.6) {
                calculatedHeight = 50
            } else {
                calculatedHeight = 40
            }

            if (calculatedHeight !== height) {
                setHeight(calculatedHeight)
            }

            if (containerRef.current) {
                // containerRef.current.style.width = `${calculatedWidth}vw`
                containerRef.current.style.height = `${calculatedHeight}vh`;
            }
        }
        setWidthHeightOfHome();

        // listening for resize event
        window.addEventListener("resize", setWidthHeightOfHome);
        return () => {
            window.removeEventListener("resize", setWidthHeightOfHome);
        }
    }, [height])
    return (
        <motion.div
            id='home'
            ref={containerRef}
            className='w-screen relative overflow-hidden '>
            <Bg />
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
                viewport={{ once: true, amount: .5 }}
                className='absolute top-0 w-full h-full'>
                <Navbar />

                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 2.2, duration: .5 } }}
                    viewport={{ once: true, amount: .3 }}
                    ref={contentCont}
                    className="content relative w-full h-full flex items-center justify-center overflow-hidden">

                    <Image
                        src="/profile.png"
                        width={200}
                        height={200}
                        quality={100}
                        alt='Profile'
                        className='h-full w-auto absolute bottom-0 z-[100]'
                    />
                </motion.div>

            </motion.div >
            {/* <ImageHoverEffect /> */}
        </motion.div >

    )
}

export default Home