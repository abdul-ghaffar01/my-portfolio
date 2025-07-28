import { create } from 'zustand';

const useSocketStore = create((set) => ({
    socket: null,
    setSocket: (socketInstance) => set({ socket: socketInstance }),
}));
export default useSocketStore;
