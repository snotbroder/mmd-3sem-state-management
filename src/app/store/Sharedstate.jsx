import { create } from "zustand";

const useStore = create((set) => ({
  randomStateValue: "Banan",
  setRandomStateValue: (data) =>
    set((state) => ({ randomStateValue: (state.randomStateValue = data) })),
}));

export default useStore;
