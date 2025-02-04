'use client'
import React, { useEffect, useRef, useState } from 'react'
import Bg from './Bg'
import TextBg from './TextBg'
import FadeInFromTopInView from '../FadeInFromTopInView'
import Image from 'next/image'

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
                calculatedHeight = 80
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
        <FadeInFromTopInView>
            <div ref={containerRef} className='w-screen relative flex flex-col items-center overflow-hidden z-[auto]'>
                <Bg />
                <div className='absolute flex items-center justify-center w-full lg:w-[80vw] max-w-[1200px] h-full mx-auto z-[1] p-2'>
                    <TextBg />
                    <Image className='absolute z-[3] bottom-0 h-[90%] w-auto' initial={{ opacity: 0 }} animate={{ opacity: 1 }} src="/profile.png" width={400} height={400} />
                </div>
            </div>
            
        </FadeInFromTopInView>
    )
}

export default Home