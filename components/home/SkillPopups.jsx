"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const skills = [
    "💻 JavaScript", "⚛️ React", "🔗 Next.js", "🟢 Node.js",
    "🚀 Express.js", "🏗️ NestJS", "🎨 Tailwind CSS", "🖌️ MUI"
]

export default function SkillPopups() {
    const [popups, setPopups] = useState([])
    const lastPost = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event

            if (
                Math.abs(lastPost.current.x - clientX) >= 100 ||
                Math.abs(lastPost.current.y - clientY) >= 100
            ) {
                const randomSkill = skills[Math.floor(Math.random() * skills.length)]
                const id = Date.now()

                setPopups((prev) => {
                    const updated = [...prev, { id, text: randomSkill, x: clientX, y: clientY - 70 }]
                    return updated.slice(-20)
                })

                lastPost.current = { x: clientX, y: clientY }

                setTimeout(() => {
                    setPopups((prev) => prev.filter((p) => p.id !== id))
                }, 1000)
            }
        }

        document.getElementById("home").addEventListener("mousemove", handleMouseMove)
        return () => document.getElementById("home").removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
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
    )
}
