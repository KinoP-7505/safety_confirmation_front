import { create } from "zustand";
import type { User } from "../dto/Types";

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
  login: (token: string, user: User) => {
    localStorage.setItem("token", token);
    set({ isLoggedIn: true, user });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ isLoggedIn: false, user: null });
  },
}));
