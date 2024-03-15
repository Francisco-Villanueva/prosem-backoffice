"use client";
import React, { FormEvent, useState } from "react";
import Input from "../common/Input";
import useInput from "@/hooks/useInput";
import Button from "../common/Button";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { SpinnerLoading } from "../icons";
import { signIn } from "next-auth/react";
import Link from "next/link";

export function Login() {
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
        message.error("Please check your credentials");
      })
      .finally(() => setLoading(false));
  };
  return (
    <form
      className="flex flex-col  items-center w-full  "
      onSubmit={handleLogin}
    >
      <div className="w-full">
        <Input {...userName} placeholder="Username" />
        <Input {...password} placeholder="Password" />
      </div>
      <div className="w-1/3 flex flex-col items-center gap-1">
        <Button type="submit">{loading ? <SpinnerLoading /> : "Log in"}</Button>
        <span className="text-light-white text-sm font-semibold">
          <span className="font-extralight">or</span>{" "}
          <Link href={"/register"}>Sign Up </Link>
        </span>
      </div>
    </form>
  );
}
