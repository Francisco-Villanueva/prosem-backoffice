import { ICompany } from "@/types";
import { create } from "zustand";

interface CompanyState {
  company: ICompany | null;
  setCompany: (company: ICompany) => void;
}
export const companyStore = create<CompanyState>((set) => ({
  company: null,
  setCompany: (company) => set(() => ({ company })),
}));
