"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import data from "./data"

const ShowSkills = () => {
    return (
        data.map((item, index) => {
            return (
                <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { delay: (0.1 * index) + 0.5, }
                    }}
                    viewport={{ once: true, amount: "all" }}
                    className="relative m-3 bg-gray-400 group hover:bottom-2 p-2 rounded-md flex items-center justify-between gap-[10px] shadow-md border border-color-gray-400"
                >
                    <Image src={item.img} width={30} height={30} alt={item.name} />
                    <p className="text-lg font-bold transition-all duration-200">{item.name}</p>
                </motion.div>
            );
        })
    )
}

export default ShowSkills