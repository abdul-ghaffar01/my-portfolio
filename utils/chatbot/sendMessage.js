
// To send message
const sendMessage = (messageText,
    socketInstance,
    setMessages,
    userId,
    setMessageText,
    setShouldScrollToBottom,
    textareaRef) => {
    if (!messageText.trim() || !socketInstance) return;

    const sentAt = new Date();

    const newMessage = {
        content: messageText,
        sender: "user",
        sentAt,
        who: "you",
        timestamp: sentAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMessage]);
    socketInstance.emit('sendMessage', {
        userId,
        to: "6884c115c3fd2ec85813625a",
        content: messageText,
        sender: "user",
    });

    setMessageText('');
    textareaRef.current.style.height = '24px';
    textareaRef.current.focus();
    setShouldScrollToBottom(true);
};

export default sendMessage;