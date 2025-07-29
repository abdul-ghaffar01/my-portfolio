
// To send message
const sendMessage = (messageText,
    socketInstance,
    userId,
    setMessageText,
    textareaRef) => {
    if (!messageText.trim() || !socketInstance) return;
    socketInstance.emit('sendMessage', {
        userId,
        to: "6884c115c3fd2ec85813625a",
        content: messageText,
        sender: "user",
    });

    setMessageText('');
    textareaRef.current.style.height = '24px';
    textareaRef.current.focus();
};

export default sendMessage;