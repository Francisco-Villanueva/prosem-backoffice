import Link from "next/link";
import React from "react";
import { CheckIcon } from "../icons";

export default function ConfirmRegistration() {
  return (
    <section className=" flex flex-col items-center  justify-center border-3 w-full p-8 max-md:p-0 text-white rounded-xl border-light-dark  flex-grow gap-10">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-[4rem] max-lg:text-3xl font-bold">
          Bienvenido a <span className="text-green">ProSeM</span> !
        </h2>
        <div className="flex text-md max-lg:text-sm items-center text-light-white gap-2">
          <p>Su registro se a realizado con éxtio!</p>
          <CheckIcon className="w-8 max-lg:w-6" />
        </div>
      </div>
      <span className="flex items-center gap-2 max-lg:p-2  p-4 rounded-md shadow-light-dark shadow-sm  bg-[rgba(0,0,0,.2)] hover:px-6 transition-all duration-200">
        <Link
          href={"/login"}
          className="font-normal text-md max-md:text-xs text-white"
        >
          Iniciar Sesión
        </Link>
      </span>
    </section>
  );
}
