import { create } from "zustand";

type AuthMode = "login" | "signup";

type UIState = {
  isAuthOpen: boolean;
  authMode: AuthMode;
  openAuth: (mode?: AuthMode) => void;
  closeAuth: () => void;
  setAuthMode: (mode: AuthMode) => void;
};

export const useUIStore = create<UIState>((set) => ({
  isAuthOpen: false,
  authMode: "login",
  openAuth: (mode = "login") => set({ isAuthOpen: true, authMode: mode }),
  closeAuth: () => set({ isAuthOpen: false }),
  setAuthMode: (mode) => set({ authMode: mode }),
}));