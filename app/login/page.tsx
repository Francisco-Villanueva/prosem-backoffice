import React from "react";
import { Login } from "@/app/components";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="flex h-[100vh]">
        <div className="w-full  flex flex-col items-center justify-center bg-black">
          <div className="  relative w-5/6 h-2/6  ">
            <Image src={"/svg/Logo.svg"} fill objectFit="contain" alt="logo" />
          </div>
          <div className="w-1/2 text-center text-green font-thin">
            <span>Your living room, our technology</span>
          </div>
        </div>
        <div className="w-1/2 h-full grid place-items-center bg-black">
          <div className="bg-green h-2/3 grid place-items-center w-3/4 rounded-md">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
