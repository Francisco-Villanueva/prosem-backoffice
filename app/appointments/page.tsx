import Image from "next/image";
import React from "react";
import Searcher from "./Searcher";

export default function page() {
  return (
    <div className="bg-black h-[100vh] ">
      <section className="w-full h-[100%]   p-4  flex flex-col   ">
        <header className="flex h-[15%]   justify-between items-center ">
          <div className="relative h-full max-lg:h-[60%]  aspect-video">
            <Image src="/svg/Logo.svg" alt="ProsemLogo" fill />
          </div>
          <div className="text-light-white flex flex-col items-end ">
            <h2 className="font-bold text-3xl max-lg:text-xl">
              Welcome to <span className="text-green">ProSeM </span>
            </h2>
            <span className="font-light max-lg:text-xs max-md:w-5/6">
              Search your salon and set an appointment.
            </span>
          </div>
        </header>
        <section className="h-[85%]  w-full  rounded-md text-white border-light-dark p-6">
          <div className="flex gap-2 items-start  flex-col h-full ">
            <h2>Search your salon</h2>
            <Searcher />
          </div>
        </section>
      </section>
    </div>
  );
}
