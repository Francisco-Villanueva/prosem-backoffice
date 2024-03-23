import { IUser } from "@/types/user.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TeamState {
  team: IUser[];
  setTeam: (team: IUser[]) => void;
  selectedMember: IUser | null;
  setSelectedMember: (member: IUser) => void;
}

export const teamStore = create<TeamState>((set) => ({
  team: [],
  selectedMember: null,
  setTeam: (team) => set(() => ({ team: team })),
  setSelectedMember: (member) => set(() => ({ selectedMember: member })),
}));
