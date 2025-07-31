import { motion } from "framer-motion";
import { useState } from "react";

const ImageHoverEffect = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [popups, setPopups] = useState([]);
    const [lastPost, setLastPost] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePos({ x: clientX, y: clientY });

        if (Math.abs(lastPost.x - clientX) >= 100 || Math.abs(lastPost.y - clientY) >= 100) {
            const id = Date.now();
            setPopups((prev) => [...prev, { id, x: clientX, y: clientY }]);

            setTimeout(() => {
                setPopups((prev) => prev.filter((p) => p.id !== id));
            }, 2000);

            setLastPost({ x: clientX, y: clientY });
        }
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="absolute top-0 w-full h-screen bg-gray-900 overflow-hidden"
        >
            {/* Popups */}
            {popups.map((popup) => (
                <motion.p
                    key={popup.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute px-3 py-1 rounded-md text-sm text-gray-200 bg-gray-800/80 shadow-[0_0_10px_#3b82f6]"
                    style={{ left: popup.x, top: popup.y }}
                >
                    Hello!
                </motion.p>
            ))}

            {/* Hover Image with Blue Glow */}
            <motion.img
                src="/profile.png"
                alt="Hover Image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: mousePos.x - 50,
                    y: mousePos.y - 50,
                }}
                transition={{ duration: 0.2 }}
                className="absolute w-32 h-32 rounded-lg pointer-events-none shadow-[0_0_20px_#3b82f6] border border-blue-500/50"
            />
        </div>
    );
};

export default ImageHoverEffect;
