import { create } from "zustand";
import type { UserInfo } from "../dto/Types";

type AuthState = {
  isLoggedIn: boolean;
  user: UserInfo | null;
  setToken: (token: string, user: UserInfo) => void;
  removeToken: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  // !(getItem==null)をセット
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
  setToken: (token: string, user: UserInfo) => {
    localStorage.setItem("token", token);
    set({
      isLoggedIn: true,
      user,
    });
  },
  removeToken: () => {
    localStorage.removeItem("token");
    set({ isLoggedIn: false, user: null });
    const data = get();
    console.log(`logout/ isLoggedIn: ${data.isLoggedIn}, user: ${data.user}`);
  },
}));
