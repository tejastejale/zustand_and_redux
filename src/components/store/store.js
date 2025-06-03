import { create } from "zustand";

const store = create((set) => ({
  data: 0,
  increment: () => set((state) => ({ data: state.data + 1 })),
}));

export default store;
