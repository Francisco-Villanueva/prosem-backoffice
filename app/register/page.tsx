"use client";
import Image from "next/image";
import React, { useState } from "react";
import ComapnyRegister from "./ComapnyRegister";
import AdminResgiter from "./AdminResgiter";
import ConfirmRegistration from "./ConfirmRegistration";

export default function Page() {
  const [step, setStep] = useState(1);
  const [comapanyId, setCompanyId] = useState("");

  const handleNext = () => setStep((s) => s + 1);

  return (
    <div className="bg-black h-[100vh] ">
      <section className="w-full h-[100%]   p-4  flex flex-col   ">
        <header className="flex h-[15%]   justify-between items-center ">
          <div className="relative h-full max-lg:h-[60%]  aspect-video">
            <Image src="/svg/Logo.svg" alt="ProsemLogo" fill />
          </div>
          <div className="text-light-white flex flex-col items-end ">
            <h2 className="font-bold text-3xl max-lg:text-xl">
              Welcome to <span className="text-green">ProSeM </span>
            </h2>
            <span className="font-light max-lg:text-xs max-md:w-5/6">
              Please complete all the require fields to create your account.
            </span>
          </div>
        </header>
        <section className="flex flex-col gap-4 px-4  flex-grow h-5/6 max-h-5/6 overflow-auto">
          <ComapnyRegister
            handleNext={handleNext}
            setCompanyId={setCompanyId}
          />
          <AdminResgiter
            comapanyId={comapanyId}
            disabled={step < 2}
            handleNext={handleNext}
          />

          {step === 3 && <ConfirmRegistration />}
        </section>
      </section>
    </div>
  );
}
