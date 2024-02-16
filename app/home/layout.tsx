"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Sidebar } from "@/app/components";
import { ArrowIcon } from "@/app/icons";
import { CompanyServices, UserServices } from "@/services";
import { useRouter } from "next/navigation";
import { userStore, teamStore, companyStore } from "@/store";
import { ICompany } from "@/types";
import Navbar from "../components/Navbar";
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [sideBarStatus, setSideBarStatus] = useState(true);
  const router = useRouter();
  const { setUserLogged } = userStore();
  const { setTeam } = teamStore();
  const { setCompany } = companyStore();
  useEffect(() => {
    const companyId_storage = localStorage.getItem("companyId");
    const userLoggedId_storage = localStorage.getItem("userLoggedId");

    if (!companyId_storage || !userLoggedId_storage) {
      router.push("/login");
      return;
    } else {
      UserServices.getUserById(userLoggedId_storage).then((res) => {
        setUserLogged(res);
      });
      UserServices.getAll().then((res) => {
        setTeam(res);
      });
      CompanyServices.getById(companyId_storage).then((res: ICompany) => {
        setCompany(res);
      });
    }
  }, []);
  return (
    <div className="h-[100vh] flex bg-black ">
      <section className={`relative  ${sideBarStatus ? "w-1/6" : "w-1/36 "}`}>
        <div
          className={`relative h-full  ${
            sideBarStatus ? "w-full" : "w-10 "
          } transition-all duration-300`}
        >
          <Sidebar sideBarStatus={sideBarStatus} />

          <div
            className="cursor-pointer"
            onClick={() => setSideBarStatus(!sideBarStatus)}
          >
            <ArrowIcon
              className={` absolute w-8 top-2 text-light-dark bg-black  rounded-full transition-all duration-500 ${
                sideBarStatus ? "rotate-270 -right-4 " : "-rotate-180 -right-7 "
              }`}
            />
          </div>
        </div>
      </section>

      <div className=" flex flex-col gap-2  flex-grow h-max-full  ">
        <Navbar />
        <div className="p-2 w-full h-[90%] bg-white rounded-l-md">
          <div className="w-full h-full max-h-full overflow-y-auto  border transition-all duration-300  rounded-md p-2 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
