import { create } from "zustand";

interface State {
  user: WebAppUser | null;
  setUser: (user: WebAppUser | null) => void;
}

export const useUserStore = create<State>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
