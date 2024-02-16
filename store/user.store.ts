import { IUser } from "@/types/user.types";
import { create } from "zustand";

interface UserState {
  userLogged: IUser | null;
  setUserLogged: (user: IUser) => void;
}
export const userStore = create<UserState>((set) => ({
  userLogged: null,
  setUserLogged: (user) => set(() => ({ userLogged: user })),
}));
