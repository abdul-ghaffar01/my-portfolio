import React from 'react';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';

const Message = ({ message, showDate, formattedDate }) => {
    const who = message.sender;

    // Function to format bold text (**bold** → <strong>)
    const formatContent = (content) => {
        return content.split(/(\*\*.*?\*\*)/g).map((part, idx) =>
            part.startsWith('**') && part.endsWith('**') ? (
                <strong key={idx}>{part.slice(2, -2)}</strong>
            ) : (
                part
            )
        );
    };

    // Animation variants
    const variants = {
        fromLeft: { opacity: 0, x: -50 },
        fromRight: { opacity: 0, x: 50 },
        fadeIn: { opacity: 0, scale: 0.8 }
    };

    const animateTo = { opacity: 1, x: 0, scale: 1 };

    if (who === 'info') {
        return (
            <motion.p
                initial={variants.fadeIn}
                animate={animateTo}
                transition={{ duration: 0.3 }}
                className='text-center text-gray-400 my-3 text-sm'
            >
                {message.content}
            </motion.p>
        );
    }

    const initialAnim =
        who === 'user'
            ? variants.fromLeft
            : (who.toLowerCase() === 'abdul ghaffar' || who.toLowerCase() === 'chatbot')
                ? variants.fromRight
                : variants.fadeIn;

    return (
        <>
            {showDate && (
                <div className="text-center text-gray-500 text-sm my-4">
                    {formattedDate}
                </div>
            )}

            <motion.div
                initial={initialAnim}
                animate={animateTo}
                transition={{ duration: 0.4 }}
                className={`${who === "user" ? "bg-color-500 self-end" : "bg-gray-500"} w-fit min-w-[150px] max-w-[80%] p-1 md:p-2 rounded-md m-1 text-color-light`}
            >
                <div className='font-semibold break-words whitespace-pre-wrap w-full'>
                    {formatContent(message.content)}
                </div>

                <div className='text-xs flex items-center justify-between mt-1'>
                    <p className='text-color-light'>{who === 'user' ? "You" : who}</p>
                    <div className='flex items-center gap-1'>
                        <p className='text-color-light'>
                            {new Date(message.sentAt).toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                            })}
                        </p>
                        {who === "user" && <CheckIcon className='text-color-light' sx={{ fontSize: "14px" }} />}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Message;
