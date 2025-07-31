"use client";
import { useState, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleClick = () => {
    router.push("/chat");
  };

  // Show random pop-up messages periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage(messages[Math.floor(Math.random() * messages.length)]);
      setTimeout(() => setActiveMessage(null), 2500); // Hide after 2.5s
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Animated Pop-up Message */}
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            key={activeMessage}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="mb-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg text-sm font-medium"
          >
            {activeMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
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
