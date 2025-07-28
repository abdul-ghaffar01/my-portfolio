import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useChatStore = create(persist((set) => ({
    messages: [],
    user: null,
    token: null,
    userId: null,

    // Actions
    setMessages: (messages) => set({ messages }),
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    setUser: (user) => set({ user }),
    setUserId: (userId) => set({ userId }),
    setToken: (token) => set({ token }),
    clearMessages: () => set({ messages: [] }),
})));

export default useChatStore;
