"use client";
import { ReactNode, useState } from "react";
import { ArrowIcon, CheckIcon } from "../icons";
import Button from "../common/Button";
import { message } from "antd";

interface FormContainerProps {
  children: ReactNode;
  title: string;
  disabled: boolean;
  handleForm: () => Promise<unknown>;
  disableSubmit: boolean;
}
export function FormContainer({
  children,
  title,
  disabled,
  handleForm,
  disableSubmit,
}: FormContainerProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [done, setDone] = useState(false);

  const handleFormData = () => {
    handleForm()
      .then(() => {
        setIsOpen(false);
        setDone(true);
      })
      .catch(() => message.error("Por favor, revise la información cargada"));
  };
  return (
    <div
      className={`    rounded-md ${
        disabled
          ? "text-light-dark border-light-dark  opacity-50"
          : done
          ? "text-green border-green opacity-90"
          : "text-white border"
      } 
       
        `}
    >
      <div
        className={` flex justify-between p-2 rounded-t-md items-center  ${
          done ? "border-green" : "border"
        }`}
      >
        <span className="text-lg font-semibold flex items-center gap-10 max-lg:text-sm">
          {title} {done && <CheckIcon />}
        </span>
        <div className="flex">
          <Button
            variant="dark"
            onClick={() => setIsOpen(!isOpen)}
            disabled={disabled}
          >
            <ArrowIcon
              className={`w-6 transition-all duration-300 ${
                isOpen ? "rotate-[-180deg]" : "rotate-[-90deg]"
              }`}
            />
          </Button>
        </div>
      </div>

      {!disabled && isOpen && (
        <div className="flex flex-col items-end p-4 bg-[rgba(0,0,0,.25)]">
          <div className="w-full">{children}</div>
          <div className="w-1/4 ">
            <Button onClick={handleFormData} disabled={disableSubmit}>
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
