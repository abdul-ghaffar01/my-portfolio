import { io } from 'socket.io-client';

let socket = null;

// Call this to connect as an active user (will be tracked as online)
export function connectSocketWithUser(userId) {
    socket = io(process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL, {
        query: { userId },
        autoConnect: true
    });
    return socket;
}

// Call this when you just want passive access (e.g., just to receive onlineUsers)
export function connectSocketReadOnly() {
    socket = io(process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL, {
        autoConnect: true
    });
    return socket;
}

export { socket };
