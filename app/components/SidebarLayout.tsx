"use client";
import React, { useState } from "react";
import { Sidebar } from ".";
import { ArrowIcon } from "../icons";
export function SidebarLayout() {
  const [sideBarStatus, setSideBarStatus] = useState(true);

  return (
    <section
      className={` max-md:absolute h-full    z-50 ${
        sideBarStatus ? "w-[15%] max-md:w-1/2 " : " "
      }`}
    >
      <div className={`relative h-full  w-full `}>
        <Sidebar sideBarStatus={sideBarStatus} />

        <div
          className="cursor-pointer"
          onClick={() => setSideBarStatus(!sideBarStatus)}
        >
          <ArrowIcon
            className={` absolute w-8 top-0 text-light-dark bg-black z-20  rounded-full transition-all duration-500 ${
              sideBarStatus ? "rotate-0 -right-4 " : "rotate-180 "
            }`}
          />
        </div>
      </div>
    </section>
  );
}
