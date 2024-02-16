import Image from "next/image";
import React from "react";
import SidebarItem from "./SidebarItem";
import DashboardIcon from "../icons/DashboardIcon";
import UserIcon from "../icons/UserIcon";
import { userStore } from "@/store";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

export function Sidebar({ sideBarStatus }: { sideBarStatus: boolean }) {
  const { userLogged } = userStore();

  const items = [
    {
      name: "Reset",
      subitems: [
        { name: "Dashboard", link: "dashboard", icon: <DashboardIcon /> },
        { name: "Appointments", link: "appointments" },
      ],
    },
    {
      name: "Admin",
      subitems: [
        { name: "Team", link: "team" },
        { name: "Add to team", link: "addMember" },
      ],
    },
  ];

  const router = useRouter();

  const handleLogOut = () => {
    localStorage.clear();
    router.push("/login");
  };
  return (
    <div
      className={`bg-black text-white h-full  shadow-md w-full transition-all duration-150 flex flex-col ${
        sideBarStatus ? "" : "opacity-0"
      }`}
    >
      <div className="relative  w-[76%] h-[10vh] m-auto p-2  ">
        <Image src={"/svg/Logo.svg"} fill objectFit="contain" alt="logo" />
      </div>
      <div className=" h-full flex flex-col gap-2 p-4 ">
        {items.map((item, i) => (
          <SidebarItem item={item} key={i * Math.random() * 15526} />
        ))}
      </div>
      <div className="border text-light-white border-light-dark   m-2 p-2 rounded-md flex justify-between ">
        <div className="flex gap-2 items-center">
          <UserIcon />
          <h2>{userLogged?.name}</h2>
        </div>

        <div className="w-1/3 ">
          <Button
            variant="dark"
            className="   text-xs  px-0 hover:bg-light-white transition-all duration-200"
            onClick={handleLogOut}
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}
