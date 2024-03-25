"use client";
import React, { ReactNode, useEffect } from "react";

import { SidebarLayout } from "@/app/components";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { companyStore, userStore, teamStore } from "@/store";
import { CompanyServices, UserServices } from "@/services";
import { useRouter } from "next/navigation";
import Aside from "../components/Aside";
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const session = useSession();
  const router = useRouter();
  const { setUserLogged } = userStore();
  const { setCompany } = companyStore();
  const { setTeam } = teamStore();
  useEffect(() => {
    if (session.data) {
      localStorage.setItem("userLoggedID", session.data?.user.id);
      localStorage.setItem("companyId", session.data?.user.companyId);

      setUserLogged(session.data.user);
      CompanyServices.getById(session.data.user.companyId).then((res) =>
        setCompany(res)
      );
    }

    UserServices.getAll().then((res) => setTeam(res));

    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    <div className="h-[100vh] flex bg-black ">
      <SidebarLayout />
      <div className=" flex flex-col gap-2  flex-grow h-max-full  ">
        <Navbar />
        <div className="p-2 w-full h-[90%] bg-white rounded-l-md">
          <div className="w-full h-full max-h-full overflow-y-auto  border transition-all duration-300  rounded-md p-2 ">
            {children}
          </div>
        </div>
      </div>
      <Aside />
    </div>
  );
}
