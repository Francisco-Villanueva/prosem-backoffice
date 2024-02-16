"use client";
import { ChangeEvent, FocusEvent, useState } from "react";
import { ErroIcon, EyeIcon } from "../icons";
import { ERROR_MESSAGES, TypeOfInputs } from "@/types";
import { CheckIcon } from "@/app/icons";

interface InputProps {
  type: TypeOfInputs;
  placeholder?: string;
  className?: string;
  isRegister?: boolean;
  value?: string;
  variant?: "primary" | "secondary" | "dark";
  error?: string | null | (string | null)[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}
export default function Input({
  type,
  placeholder,
  error,
  className = "",
  onBlur,
  onChange,
  onFocus,
  isRegister = false,
  value,
  variant = "primary",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  const VARIANT = {
    primary: "text-black bg-white border  ",
    secondary: "text-green bg-white border border-green",
    dark: "text-green bg-black",
  };

  return (
    <div className=" min-h-[4rem] w-full">
      <div className="relative flex items-center ">
        <input
          type={inputType}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          value={value || ""}
          onFocus={onFocus}
          className={` ${className} ${VARIANT[variant]}   rounded-md outline-none px-2 py-1  w-full  `}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute  right-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyeIcon slashed={!showPassword} />
          </button>
        )}
      </div>
      <div className="text-[11px] font-semibold py-1 px-2 ">
        {error && type !== "password" && (
          <p className="text-error   ">{error}</p>
        )}
        {type === "password" && isRegister ? (
          <div className={`flex flex-col w-full  `}>
            {[
              ERROR_MESSAGES.passwordUppercase,
              ERROR_MESSAGES.passwordLowercase,
              ERROR_MESSAGES.passwordLength,
              ERROR_MESSAGES.passwordDigit,
            ].map((msg) => (
              <div
                key={msg}
                className={`flex items-center gap-1 transition-all duration-300 ${
                  error?.includes(msg) ? "text-error" : "text-green"
                }`}
              >
                {error?.includes(msg) ? (
                  <ErroIcon className="text-error w-3" />
                ) : (
                  <CheckIcon className="text-green w-3" />
                )}
                <p>{msg}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
