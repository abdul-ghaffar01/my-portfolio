import { motion } from 'framer-motion';
import React from 'react';

const computerScientist = Array.from("Abdul Ghaffar");

const textVariants = {
    initial: { y: -100, opacity: 0 }, // Start from above
    animate: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.05 * index
        }
    }),
};

const TextBg = () => {
    return (
        <div className="flex text-bg relative bottom-[50px] text-[30px] z-[2] xs:text-[35px] xs:bottom-[80px] sm:text-[50px] sm:bottom-[120px] md:text-[65px] lg:text-[75px] xl:text-[82px] 2xl:text-[95px] ">
            {
                computerScientist.map((char, index) => (
                    <motion.p
                        key={index}
                        className="text-char font-bold"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        custom={index} // Pass index as a custom prop
                    >
                        {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                    </motion.p>
                ))
            }
        </div>
    );
};

export default TextBg;
