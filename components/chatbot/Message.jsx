import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const Message = ({ message, showDate, formattedDate }) => {
    const who = message.sender;

    // Function to format bold text (convert **bold** to <strong>bold</strong>)
    const formatContent = (content) => {
        return content.split(/(\*\*.*?\*\*)/g).map((part, idx) =>
            part.startsWith('**') && part.endsWith('**') ? (
                <strong key={idx}>{part.slice(2, -2)}</strong>
            ) : (
                part
            )
        );
    };

    if (who === 'info') {
        return <p className='text-center text-gray-400 my-3 text-sm'>{message.content}</p>;
    }

    return (
        <>
            {showDate && (
                <div className="text-center text-gray-500 text-sm my-4">
                    {formattedDate}
                </div>
            )}

            <div className={`${who === "user" ? "bg-color-500 self-end" : "bg-gray-500"} w-fit min-w-[150px] max-w-[80%] p-1 md:p-2 rounded-md m-1 text-color-light`}>
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
            </div>
        </>
    );
};

export default Message;
