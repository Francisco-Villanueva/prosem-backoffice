"use client";
import React, { FormEvent, useState } from "react";
import Input from "../common/Input";
import useInput from "@/hooks/useInput";
import Button from "../common/Button";
import { AuthServices, CompanyServices } from "@/services";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { companyStore, userStore } from "@/store";
import { IUser } from "@/types/user.types";
import { SpinnerLoading } from "../icons";

export function Login() {
  const { setUserLogged } = userStore();
  const { setCompany } = companyStore();
  const userName = useInput({ validatorType: "no required" });
  const password = useInput({ validatorType: "password" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // AuthServices.login({ user: userName.value, password: password.value })
    //   .then((res: { user: IUser }) => {
    //     setUserLogged(res.user);
    //     localStorage.setItem("companyId", res.user.companyId);
    //     localStorage.setItem("userLoggedId", res.user.id);
    //     CompanyServices.getById(res.user.companyId).then((res) => {
    //       setCompany(res);
    //       message.success("Login successfully");
    //       router.push("/home/dashboard");
    //     });
    //   })
    //   .catch(() => message.error("Please check your credentials"))
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };
  return (
    <form
      className="flex flex-col gap-4 items-center w-5/6"
      onSubmit={handleLogin}
    >
      <Input {...userName} placeholder="Username" />
      <Input {...password} placeholder="Password" />
      <Button className="w-[80%]" type="submit" variant="dark">
        {loading ? <SpinnerLoading /> : "Log in"}
      </Button>
      <span className="text-black text-sm"> forgot password</span>
    </form>
  );
}
