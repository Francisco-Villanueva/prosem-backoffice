"use client";
import React, { ReactNode } from "react";
import { ShortArrowIcon } from "../icons";
import useModal from "@/hooks/useModal";
import { useRouter, usePathname } from "next/navigation";
import StarsIcon from "../icons/StarsIcon";
interface SidebarItemProps {
  item: ItemProps;
}
interface ItemProps {
  name: string;
  subitems?: { name: string; link: string; icon?: ReactNode }[];
}
export default function SidebarItem({ item }: SidebarItemProps) {
  const { modalStatus, toggleModal } = useModal();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-2">
        {item.subitems && item.subitems.length > 0 && (
          <div className="cursor-pointer " onClick={toggleModal}>
            <ShortArrowIcon
              className={`transition-all duration-200 w-2  ${
                modalStatus ? "rotate-180" : "rotate-90 "
              }}`}
            />
          </div>
        )}
        <p className="font-semibold text-white">{item.name}</p>
      </div>
      {!modalStatus && item.subitems && (
        <div className="flex flex-col gap-1  pl-6">
          {item.subitems.map((item) => (
            <p
              className={`font-semibold  cursor-pointer flex items-center gap-2  transition-all duration-150${
                pathname.includes(item.link)
                  ? "text-white border-r-2"
                  : " text-light-dark"
              }`}
              onClick={() => {
                router.push(item.link);
              }}
            >
              {item.icon ? item.icon : <StarsIcon />}
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
