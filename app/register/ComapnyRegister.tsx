"use client";
import useInput from "@/hooks/useInput";
import { CompanyServices } from "@/services";
import { INewCompany } from "@/types";
import { message } from "antd";
import React, { useState } from "react";
import { FormContainer } from "../components";
import UserIcon from "../icons/UserIcon";
import Input from "../common/Input";
interface ComapnyRegisterProps {
  handleNext: () => void;
  setCompanyId: (companyId: string) => void;
}
function TitleForm({ title }: { title: string }) {
  return <h2 className="text-light-white font-semibold text-sm ">{title}</h2>;
}
export default function ComapnyRegister({
  handleNext,
  setCompanyId,
}: ComapnyRegisterProps) {
  const name = useInput({ validatorType: "required" });
  const email = useInput({ validatorType: "email" });
  const address = useInput({ validatorType: "required" });
  const handleCompanySubmit = async () => {
    const data: INewCompany = {
      name: name.value,
      email: email.value,
      address: address.value,
    };
    const newCompany = await CompanyServices.create(data);
    setCompanyId(newCompany.data.id);
    handleNext();
    message.success("Company Created");
  };
  return (
    <FormContainer
      disableSubmit={
        !(name.value.length && email.value.length && address.value.length) ||
        !(!name.error && !email.error && !address.error)
      }
      title="Company Information"
      disabled={false}
      handleForm={handleCompanySubmit}
    >
      <div className="p-4 flex  gap-6 items-center">
        <div className="h-[250px] aspect-square bg-white rounded-md">
          <UserIcon className="text-light-dark" />
        </div>
        <div className=" flex-grow text-black">
          <span>
            <TitleForm title="Comapny Name" />
            <Input placeholder="Name Of Company" {...name} />
          </span>
          <span>
            <TitleForm title="Mail" />
            <Input placeholder="example@gmail.com" {...email} />
          </span>
          <span>
            <TitleForm title="Adress" />
            <Input placeholder="Andorra, 1550" {...address} isRegister={true} />
          </span>
        </div>
      </div>
    </FormContainer>
  );
}
