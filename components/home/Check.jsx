import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ImageHoverEffect = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [lastPost, setLastPost] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });

            if (Math.abs(lastPost.x - event.clientX) >= 100 || Math.abs(lastPost.y - event.clientY) >= 100) {
                const pTag = document.createElement("p");
                pTag.textContent = "Hello!";
                pTag.style.position = "absolute";
                pTag.style.left = `${event.clientX}px`;
                pTag.style.top = `${event.clientY}px`;
                pTag.style.color = "black";
                // pTag.style.background = "rgba(255, 255, 255, 0.2)";
                pTag.style.padding = "5px 10px";
                pTag.style.borderRadius = "5px";
                pTag.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
                pTag.style.transform = "scale(0)"; // Start small for animation

                document.getElementById("checking").appendChild(pTag);

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
                    }, 300); // Wait for fade-out animation to complete
                }, 2000);

                setLastPost({ x: event.clientX, y: event.clientY });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lastPost]);

    return (
        <div
            id="checking"
            onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
            className="absolute top-0 w-full h-screen bg-gray-100">

            <motion.img
                src="/profile.png"
                alt="Hover Image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, x: mousePos.x - 50, y: mousePos.y - 50 }}
                transition={{ duration: 0.2 }}
                className="absolute w-32 h-32 rounded-lg pointer-events-none"
            />

        </div>
    );
};

export default ImageHoverEffect;
