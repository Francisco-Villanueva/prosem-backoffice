"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import Input from "../common/Input";
import { SpinnerLoading } from "../icons";
import Button from "../common/Button";
import { message } from "antd";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function page() {
  const userName = useInput({ validatorType: "no required" });
  const password = useInput({ validatorType: "password" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    signIn("credentials", {
      user: userName.value,
      password: password.value,
      redirect: false,
    })
      .then((res) => {
        if (!res?.ok) {
          console.error(res?.error);
          return;
        }
        message.success("Login success");
        router.push("/home/dashboard");
      })
      .catch((error) => {
        console.log("error at lohgin", { error });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <div className="flex h-[100vh]">
        <div className="w-full  flex flex-col items-center justify-center bg-black">
          <div className="  relative w-5/6 h-2/6  ">
            <Image src={"/svg/Logo.svg"} fill objectFit="contain" alt="logo" />
          </div>
          <div className="w-1/2 text-center text-green font-thin">
            <span>Your living room, our technology</span>
          </div>
        </div>
        <div className="w-1/2 h-full grid place-items-center bg-black">
          <div className="bg-green h-2/3 grid place-items-center w-3/4 rounded-md">
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
          </div>
        </div>
      </div>
    </div>
  );
}
