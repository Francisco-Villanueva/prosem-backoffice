import { IUser } from "@/types/user.types";
import React from "react";
import UserIcon from "../icons/UserIcon";
interface MemerDetailsProps {
  member: IUser;
}
export default function MemberDetails({ member }: MemerDetailsProps) {
  return (
    <article className="flex flex-col p-8   gap-4 h-full">
      <header className="flex justify-between ">
        <div className="w-[150px] h-[150px] bg-light-dark rounded-lg grid place-items-center ">
          <UserIcon className="w-30 text-white" />
        </div>
        <div className="w-1/3 flex flex-col  gap-1">
          <h3 className="text-3xl text-black font-bold">
            {member.name}, {member.lastName}
          </h3>
          <section className=" ml-2  border-light-dark flex flex-col  w-2/3 ">
            <div className="flex gap-2 items-center justify-between ">
              <span className="font-light text-sm ">User Name:</span>
              <p>{member.userName}</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <span className="font-light text-sm ">Email:</span>
              <p>{member.email}</p>
            </div>
            <div className="flex gap-2 items-center justify-between ">
              <span className="font-light text-sm ">Role:</span>
              <p>{member.role}</p>
            </div>
            <div className="flex gap-2 items-center justify-between ">
              <span className="font-light text-sm ">Phone:</span>
              <p>+54 2915275753</p>
            </div>
          </section>
        </div>
      </header>

      <div className="border bg-green text-light-white  rounded-md">
        <div className="grid grid-cols-7">
          {[
            "Monday",
            "Thuesday",
            "Wendsday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div
              key={day.length * Math.random() * 15526}
              className="border text-center p-2"
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
