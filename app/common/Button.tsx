import React, { MouseEvent, ReactNode } from "react";

type VariantTypes = "primary" | "secondary" | "dark" | "none";
export interface ButtonProps {
  variant?: VariantTypes;
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
  const ACTIVE_STYLE: Record<VariantTypes, string> = {
    primary: "text-white bg-green ",
    secondary: "text-green bg-white border border-green",
    dark: "text-white bg-black",
    none: "w-auto",
  };

  const DISABLE_STYLE: Record<VariantTypes, string> = {
    primary: `${ACTIVE_STYLE.primary} opacity-50`,
    secondary: `${ACTIVE_STYLE.secondary} opacity-50`,
    dark: `${ACTIVE_STYLE.dark} opacity-50`,
    none: "",
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
