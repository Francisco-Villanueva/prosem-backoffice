import React from "react";

export type RoleTypes = "admin" | "employee";
interface RoleCardProps {
  role: RoleTypes;
}

export default function RoleCard({ role }: RoleCardProps) {
  const COLORS = {
    green: "#D2FAEE",
    yellow: "#FFF2D1",
    blue: "#D6E1FF",
    orange: "#FFE8E8",
    purple: "#F2E8FF",
  };

  const Config: Record<RoleTypes, string> = {
    admin: COLORS.green,
    employee: COLORS.purple,
  };

  const color = Config[role];
  return (
    <span
      className={`bg-[${color}] py-[1px] px-3 text-xs font-bold text-black rounded-md w-full text-center`}
    >
      {role}
    </span>
  );
}
