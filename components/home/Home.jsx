'use client'
import React, { useEffect, useRef, useState } from 'react'
import Bg from './Bg'
import TextBg from './TextBg'
import Image from 'next/image'
import { motion } from "framer-motion"
import Navbar from '../navbar/Navbar'
const Home = () => {
    const containerRef = useRef(null)
    const [height, setHeight] = useState(0)
    useEffect(() => {
        const setWidthHeightOfHome = () => {
            //Calculations to set for heroes section
            let calculatedHeight = 0;

            //Window width and height
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            console.log(windowHeight, windowWidth)

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
        <motion.div id='home' initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
            viewport={{ once: true, amount: .5 }} ref={containerRef} className='w-screen relative overflow-hidden'>
            <Bg />
            <div className='absolute top-0 w-full h-fit'>
                <Navbar />

                <div className="content bg-purple-600">
                    All the content goes here
                </div>

            </div>
        </motion.div>

    )
}

export default Home