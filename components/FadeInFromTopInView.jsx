'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const fadeInFromTopInViewVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const FadeInFromTopInView = ({ children, className }) => {
    return (
        <motion.div className={className} variants={fadeInFromTopInViewVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}>
            {children}
        </motion.div>
    )
}

export default FadeInFromTopInView