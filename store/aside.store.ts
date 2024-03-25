import { create } from "zustand";
export const ASIDE_TYPES = ["EditMember"] as const;

export type AsideType = (typeof ASIDE_TYPES)[number];
interface AsideState {
  type: AsideType | null;
  setAside: (type: AsideType | null) => void;
}

export const asideStore = create<AsideState>((set) => ({
  type: null,
  setAside: (type) => set(() => ({ type: type })),
}));
