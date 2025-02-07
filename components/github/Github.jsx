// components/Github.js
import { useEffect, useState } from "react";
import Followers from "./Followers";
import ProfileSection from "./ProfileSection";
import Heading from "../Heading";
import { motion } from "framer-motion"

// services/github.js
export const getUserRepositories = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) throw new Error('Failed to fetch repositories');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};


const Github = () => {

    return (
        <motion.div
            className=" py-7 bg-black text-white flex flex-col items-center pb-[150px]"
        >
            <Heading text="Github profile" className="z-[0]" color="text-slate-500" lineColor="bg-slate-500" />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: .8 } }}
                viewport={{ once: true, amount: .5 }}
                className="flex flex-col items-center z-[1] mt-3"
            >
                <ProfileSection />
                <div className="w-screen overflow-hidden mt-8">
                    <Followers />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Github;
