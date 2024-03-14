import { IUser } from "@/types/user.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  userLogged: IUser | null;
  setUserLogged: (user: IUser) => void;
}
export const userStore = create(
  persist<UserState>(
    (set) => ({
      userLogged: null,
      setUserLogged: (user) => set(() => ({ userLogged: user })),
    }),
    {
      name: "userLogged",
    }
  )
);
