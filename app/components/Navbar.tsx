"use client";

import { companyStore } from "@/store";

export default function Navbar() {
  const { company } = companyStore();
  return (
    <div className="h-[8%] flex justify-end items-center w-full bg-black  transition-all duration-300  p-2 ">
      <h2 className="text-xl font-light text-light-white ">{company?.name}</h2>
    </div>
  );
}
