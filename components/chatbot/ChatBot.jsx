"use client";
import { useState, useEffect, useRef } from "react";
import MessageIcon from "@mui/icons-material/Message";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const messages = [
  "💬 Chat with me!",
  "👋 Need help?",
  "🚀 Let's talk!",
  "🤖 I'm here!",
  "✨ Say hi!",
];

const ChatBot = () => {
  const router = useRouter();
  const [activeMessage, setActiveMessage] = useState(null);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    if (window)
      window.open("https://chat.iabdulghaffar.com", "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage(messages[Math.floor(Math.random() * messages.length)]);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setActiveMessage(null), 2500);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-2">
      {/* Static Tooltip Style (Fade In/Out) */}
      {activeMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg text-sm font-medium"
        >
          {activeMessage}
        </motion.div>
      )}

      {/* Chat Button */}
      <motion.button
        aria-label="Chat with me"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] flex items-center justify-center transition-all"
      >
        <MessageIcon className="text-white text-2xl" />
      </motion.button>
    </div>
  );
};

export default ChatBot;
