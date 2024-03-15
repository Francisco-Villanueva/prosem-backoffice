import Image from "next/image";
import React from "react";

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
              Enjoy our best performace web application.
            </span>
          </div>
        </header>
      </section>
    </div>
  );
}
