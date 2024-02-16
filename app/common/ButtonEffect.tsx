import React, { ReactNode } from "react";
import { ButtonProps } from "./Button";
interface ButtonEffect extends ButtonProps {
  preHover?: ReactNode;
  afterHover?: ReactNode;
  selected?: boolean;
  effect: "bg-effect" | "text-effect" | "suit-hover";
}
export default function ButtonEffect({
  onClick,
  preHover,
  afterHover,
  effect,
  selected = false,
}: ButtonEffect) {
  switch (effect) {
    case "bg-effect": {
      return (
        <button
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium"
          onClick={onClick}
        >
          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
            {preHover}
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-[5]"></span>
            <span className="z-10">{afterHover}</span>
          </div>
        </button>
      );
    }

    case "text-effect":
      return (
        <button
          className=" flex items-center flex-grow group relative  w-full rounded-md border border-neutral-200 bg-transparent px-4 "
          onClick={onClick}
        >
          <span className="relative inline-flex overflow-hidden  w-full ">
            <div className="translate-y-0 skew-y-0 transition duration-300 group-hover:-translate-y-[200%] group-hover:skew-y-12  items-center ">
              {preHover}
            </div>
            <div className="absolute translate-y-[150%] skew-y-14 transition duration-300 group-hover:translate-y-0 group-hover:skew-y-0 text-black   ">
              {afterHover}
            </div>
          </span>
        </button>
      );

    case "suit-hover":
      return (
        <button
          onClick={onClick}
          className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md ${
            selected ? "bg-black" : "bg-light-dark"
          } px-6 font-medium text-neutral-200 transition hover:scale-10`}
        >
          <span>{preHover}</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20"></div>
          </div>
        </button>
      );
  }
}
