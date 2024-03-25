import { IUser } from "@/types/user.types";
import React from "react";
import MemberStatus from "../common/MemberStatus";
interface MemberCardProps {
  member: IUser;
  selected?: boolean;
  handleSelect?: () => void;
  className?: string;
}
export default function MemberCard({
  member,
  handleSelect,
  selected,
  className = "",
}: MemberCardProps) {
  return (
    <div
      className={`border p-2 rounded-md relative transition-all duration-150  cursor-pointer select-none ${
        selected ? "bg-black text-green " : "bg-white"
      } ${className}`}
      onClick={handleSelect}
    >
      <MemberStatus status="active" className="absolute top-0 right-0 m-1" />

      <div className="flex gap-2 items-center">
        <b>{member.lastName}</b>
        <p>{member.name}</p>
      </div>
    </div>
  );
}
