import React from "react";

export default function MemberStatus({
  status,
  className = "",
}: {
  status: "active" | "inactive";
  className: string;
}) {
  return (
    <div
      className={` w-[10px] h-[10px]  rounded-full  ${
        status === "active" ? "bg-green" : "bg-light-dark"
      } ${className}`}
    ></div>
  );
}
