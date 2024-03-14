"use client";
import React, { useState } from "react";
import { Sidebar } from ".";
import { ArrowIcon } from "../icons";
export function SidebarLayout() {
  const [sideBarStatus, setSideBarStatus] = useState(true);

  return (
    <section className={`relative  ${sideBarStatus ? "w-1/6" : "w-1/36 "}`}>
      <div
        className={`relative h-full  ${
          sideBarStatus ? "w-full" : "w-10 "
        } transition-all duration-300`}
      >
        <Sidebar sideBarStatus={sideBarStatus} />

        <div
          className="cursor-pointer"
          onClick={() => setSideBarStatus(!sideBarStatus)}
        >
          <ArrowIcon
            className={` absolute w-8 top-2 text-light-dark bg-black  rounded-full transition-all duration-500 ${
              sideBarStatus ? "rotate-270 -right-4 " : "-rotate-180 -right-7 "
            }`}
          />
        </div>
      </div>
    </section>
  );
}
