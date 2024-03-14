"use client";

import { companyStore } from "@/store";

export default function Navbar() {
  const { company } = companyStore();
  return (
    <div className="h-[8%] flex justify-end items-center w-full bg-black  transition-all duration-300  px-8 ">
      <h2 className="text-2xl border-l-2 px-2 font-semibold text-light-white  ">
        {company?.name}
      </h2>
    </div>
  );
}
