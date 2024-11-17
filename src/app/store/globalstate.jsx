import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      globalstate: 0,
      setGlobalState: () =>
        set((state) => ({ globalstate: state.globalstate + 1 })),
    }),
    {
      name: "global-state-store",
    }
  )
);

export default useStore;
