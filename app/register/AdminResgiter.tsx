"use client";
import useInput from "@/hooks/useInput";
import { UserServices } from "@/services";
import { message } from "antd";
import { FormContainer } from "../components";
import Input from "../common/Input";
import { IUserCreate } from "@/types/user.types";
import { ReactNode } from "react";
function InternalLayout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2  lg:w-1/2">{children}</div>;
}
function TitleForm({ title }: { title: string }) {
  return (
    <h2 className="text-light-white font-semibold text-sm  max-lg:text-xs">
      {title}
    </h2>
  );
}

interface AdminRegisterProps {
  handleNext: () => void;
  comapanyId: string;
  disabled: boolean;
}
export default function AdminResgiter({
  handleNext,
  comapanyId,
  disabled,
}: AdminRegisterProps) {
  const name = useInput({ validatorType: "name" });
  const lastName = useInput({ validatorType: "name" });
  const userName = useInput({ validatorType: "name" });
  const email = useInput({ validatorType: "email" });
  const phone = useInput({ validatorType: "no required" });
  const password = useInput({ validatorType: "password" });
  const confirmPwInput = useInput({ validatorType: "password" });

  const handleAdminSubmit = async () => {
    const data: IUserCreate = {
      name: name.value,
      lastName: lastName.value,
      userName: userName.value,
      email: email.value,
      phone: phone.value,
      CompanyId: comapanyId,
      password: password.value,
      role: "admin",
    };
    await UserServices.create(data);
    message.success("User Admin Created");
    handleNext();
  };

  const disableState = !(
    name.value.length &&
    lastName.value.length &&
    userName.value.length &&
    email.value.length &&
    phone.value.length &&
    password.value.length &&
    confirmPwInput.value.length &&
    confirmPwInput.value === password.value
  );

  return (
    <FormContainer
      disableSubmit={disableState}
      title="User Admin | Information"
      disabled={disabled}
      handleForm={handleAdminSubmit}
    >
      <div className="p-4 flex  gap-6 items-center">
        <div className=" flex max-lg:flex-col flex-grow gap-6">
          <InternalLayout>
            <h2 className="text-lg font-semibold border-b  border-light-dark">
              Personal Information
            </h2>
            <section className="flex max-md:flex-col w-5/6 mx-auto  gap-6 max-md:w-full max-md:gap-1">
              <div className="flex-col  w-1/2 max-md:w-full max-md:gap-1  ">
                <div>
                  <TitleForm title="First Name" />
                  <Input placeholder="First name" {...name} isRegister={true} />
                </div>
                <div>
                  <TitleForm title="Last Name" />
                  <Input
                    placeholder="Last Name"
                    {...lastName}
                    isRegister={true}
                  />
                </div>
              </div>
              <div className="flex-col w-1/2  max-md:w-full max-md:gap-1">
                <div>
                  <TitleForm title="Phone Number" />
                  <Input
                    placeholder="+1 111-111-111"
                    {...phone}
                    isRegister={true}
                  />
                </div>
                <div>
                  <TitleForm title="Email" />
                  <Input
                    placeholder="example@admin.com"
                    {...email}
                    isRegister={true}
                  />
                </div>
              </div>
            </section>
          </InternalLayout>
          <InternalLayout>
            <h2 className="text-lg font-semibold border-b border-light-dark ">
              Access Information
            </h2>
            <section className="flex flex-col   w-5/6 m-auto max-md:w-full max-md:gap-1">
              <div>
                <TitleForm title="User Name" />
                <Input placeholder="userName" {...userName} isRegister={true} />
              </div>
              <div>
                <TitleForm title="Passwrod" />
                <Input placeholder="password" {...password} isRegister={true} />
              </div>
              <div>
                <TitleForm title="Confirm password" />
                <Input
                  placeholder="Confirm password"
                  {...confirmPwInput}
                  isRegister={false}
                />
              </div>
            </section>
          </InternalLayout>
        </div>
      </div>
    </FormContainer>
  );
}
