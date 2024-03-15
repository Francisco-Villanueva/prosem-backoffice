"use client";
import ButtonEffect from "@/app/common/ButtonEffect";
import Input from "@/app/common/Input";
import UserIcon from "@/app/icons/UserIcon";
import useInput from "@/hooks/useInput";
import { UserServices } from "@/services";
import { companyStore } from "@/store";
import { IUserCreate, UserROLES } from "@/types/user.types";
import { message } from "antd";
import React, { FormEvent, useState } from "react";

export default function Page() {
  const { company } = companyStore();
  const name = useInput({ validatorType: "name" });
  const lastName = useInput({ validatorType: "name" });
  const userName = useInput({ validatorType: "userName" });
  const email = useInput({ validatorType: "email" });
  const phone = useInput({ validatorType: "no required" });
  const password = useInput({ validatorType: "password" });
  const confirmPasswrod = useInput({ validatorType: "password" });
  const [role, setRole] = useState<UserROLES>("employee");
  const [loading, setLoading] = useState(false);
  const handleCreateUser = (e: FormEvent) => {
    e.preventDefault();
    setLoading(!loading);
    if (company) {
      const userData: IUserCreate = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        userName: userName.value,
        role,
        password: password.value,
        CompanyId: company.id,
        phone: phone.value,
        image: undefined,
      };

      UserServices.create(userData)
        .then((res) => {
          userName.clearInput();
          name.clearInput();
          lastName.clearInput();
          phone.clearInput();
          password.clearInput();
          confirmPasswrod.clearInput();
          setRole("employee");
          email.clearInput();
          message.success("User created successfully");
        })
        .catch(() => {
          message.error("Error at creating member");
        })
        .finally(() => setLoading(false));
    }
  };
  return (
    <section className="flex flex-col  h-full ">
      <header className="border-b p-2">
        <h2 className="font-semibold text-light-dark text-xl">New Member</h2>
      </header>
      <form
        className=" flex flex-col gap-4 text-sm p-2   "
        onSubmit={handleCreateUser}
      >
        <section className="">
          <h2 className="text-light-dark font-normal text-md ">
            Personal Information
          </h2>
          <div className="flex  max-md:flex-col max-md:gap-4 justify-between p-4">
            <div className="bg-light-dark h-[150px] aspect-square rounded-md grid place-items-center relative">
              <UserIcon className="aspect-square h-full  text-light-white" />
              <button className="rounded-full bg-white text-black   grid place-items-center w-6 h-6 absolute bottom-0 right-0 m-8">
                +
              </button>
            </div>
            <div className="flex flex-col flex-grow   justify-center p-8 max-md:p-0 ">
              <div className=" flex max-lg:flex-col max-lg:gap-0 gap-4 ">
                <Input {...name} placeholder="Name" />
                <Input {...lastName} placeholder="Last name" />
              </div>
              <div className=" flex max-lg:flex-col max-lg:gap-0 gap-4 ">
                <Input {...email} placeholder="email " />
                <Input {...phone} placeholder="phone number " type="number" />
              </div>
            </div>
            <div className="">
              <p className="text-light-dark font-semibold ">Role:</p>
              <select name="role" id="">
                <option value="employee">employee</option>
                <option value="admin">admin</option>
              </select>
            </div>
          </div>
        </section>
        <hr />
        <section className="">
          <h2 className="text-light-dark font-normal text-md ">
            Access Information
          </h2>
          <div className="p-4">
            <Input {...userName} placeholder="User name" />
            <Input {...password} placeholder="password " isRegister={true} />
            <Input {...confirmPasswrod} placeholder="confirm password " />
          </div>
        </section>

        <ButtonEffect
          effect="bg-effect"
          type="submit"
          preHover="create"
          afterHover="Add Member"
        />
      </form>
    </section>
  );
}
