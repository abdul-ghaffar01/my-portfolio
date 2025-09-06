import { create } from 'zustand';

const useChatStore = create(

    (set) => ({
        messages: [],
        user: null,
        token: null,
        userId: null,
        shouldScrollToBottom: true,
        hasMoreMessages: true,

        // Actions
        setMessages: (messages) =>
            set(() => ({
                messages: [], // ✅ Flash old messages
            })) || set(() => ({
                messages, // ✅ Then add new messages
            })),

        addMessage: (message) =>
            set((state) => ({ messages: [...state.messages, message] })),
        setUser: (user) => set({ user }),
        setUserId: (userId) => set({ userId }),
        setToken: (token) => set({ token }),
        clearMessages: () => set({ messages: [] }),
        setShouldScrollToBottom: (newValue) => set({ shouldScrollToBottom: newValue }),
        setHasMoreMessages: (newValue) => set({ hasMoreMessages: newValue }),
    }),

);

export default useChatStore;
