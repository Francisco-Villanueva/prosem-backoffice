import React, { MouseEvent, ReactNode } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
  type?: "submit" | "reset" | "button";
}

export default function Button({
  children,
  variant,
  className,
  disabled,
  onClick,
  type = "button",
}: ButtonProps) {
  const ACTIVE_STYLE = {
    primary: "text-white bg-green ",
    secondary: "text-green bg-white border border-green",
    dark: "text-green bg-black",
  };

  const DISABLE_STYLE = {
    primary: `${ACTIVE_STYLE.primary} opacity-50`,
    secondary: `${ACTIVE_STYLE.secondary} opacity-50`,
    dark: `${ACTIVE_STYLE.dark} opacity-50`,
  };

  const buttonStyle = disabled
    ? DISABLE_STYLE[variant || "primary"]
    : ACTIVE_STYLE[variant || "primary"];

  return (
    <button
      className={`font-bold flex justify-center rounded-md p-2 w-full ${buttonStyle}  ${className} `}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

{
  /* <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
  <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
    +
  </div>
  <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
    <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
    <span className="z-10">Add Member</span>
  </div>
</button>; */
}
