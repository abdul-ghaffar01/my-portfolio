
const handleChatDelete = () => {
    setMessages([]);
    setMessageText('');
    if (textareaRef.current) {
        textareaRef.current.style.height = '24px';
    }
};

export default handleChatDelete