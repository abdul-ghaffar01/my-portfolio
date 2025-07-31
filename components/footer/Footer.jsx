"use client";
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="relative w-full flex flex-col items-center justify-center bg-gray-950 text-gray-400 py-12 overflow-hidden"
        >
            {/* Animated Glowing Background */}
            <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full -bottom-40"
            />

            {/* Social Icons */}
            <div className="flex items-center gap-6 z-10 mb-4">
                <SocialLink href="https://github.com/abdul-ghaffar01">
                    <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/i_abdul_ghaffar/">
                    <InstagramIcon sx={{ color: '#f95370' }} />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/abdul-ghaffar01/">
                    <LinkedInIcon sx={{ color: '#0a66c2' }} />
                </SocialLink>
                <SocialLink href="https://leetcode.com/u/abdulghaffar01/">
                    <LeetCodeIcon />
                </SocialLink>
            </div>

            {/* Text */}
            <motion.div className="italic flex items-center gap-1 z-10 text-gray-400">
                Designed & developed with 
                <motion.span 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-red-500"
                >
                    <FavoriteIcon fontSize="small" />
                </motion.span> 
                by
            </motion.div>

            <motion.div 
                initial={{ letterSpacing: "2px" }}
                animate={{ letterSpacing: ["2px", "8px", "2px"] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="text-center text-lg font-bold text-white z-10 mt-1"
            >
                Abdul Ghaffar
            </motion.div>
        </motion.footer>
    );
};

const SocialLink = ({ href, children }) => (
    <Link href={href} target="_blank">
        <motion.div
            whileHover={{ scale: 1.3, rotate: 5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
        >
            {children}
        </motion.div>
    </Link>
);

const LeetCodeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        className="w-6 h-6 fill-yellow-400 hover:scale-125 transition-transform"
    >
        <title>LeetCode</title>
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
);

export default Footer;
