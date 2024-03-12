"use client";
import { IUser } from "@/types/user.types";
import React, { useEffect, useState } from "react";
import UserIcon from "../icons/UserIcon";
import useDate from "@/hooks/useDate";
import { IWorkhour } from "@/types";
import { Table } from ".";
import { ColumnDef } from "@tanstack/react-table";
const { getWeekDay } = useDate();
interface MemerDetailsProps {
  member: IUser;
}
type THours = {
  day: number;
  hours: string[] | [];
};

const hoursColumns: ColumnDef<THours>[] = [
  {
    accessorKey: "day",
    header: "day",
    cell: ({ getValue }) => getWeekDay(getValue<number>()),
  },
];
export default function MemberDetails({ member }: MemerDetailsProps) {
  const [workdays, setWorkDays] = useState<THours[] | []>([]);
  useEffect(() => {
    const res = [0, 1, 2, 3, 4, 5, 6].map((dayNumber) => {
      const workday = member.Workhours.filter((wh) => wh.day === dayNumber);

      if (workday.length) {
        return {
          day: dayNumber,
          hours: workday[0].hours,
        };
      } else {
        return {
          day: dayNumber,
          hours: [],
        };
      }
    });

    setWorkDays(res);
  }, [member]);
  return (
    <article className="flex flex-col p-8 bg-w   gap-4 h-full">
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

      <div className="border bg-black text-light-white flex-grow  rounded-md">
        <div className="  grid grid-cols-7 outline h-full ">
          {workdays.map((day) => (
            <div className="flex flex-col ">
              <div className="border text-center p-2 font-bold">
                {getWeekDay(day.day)}
              </div>
              <div className="flex flex-col items-center justify-between   flex-grow  ">
                {day.hours.length === 0 ? (
                  <span className=" bg-light-dark w-full h-full   flex-grow grid place-items-center"></span>
                ) : (
                  day.hours.map((hour) => (
                    <span className="border-b rounded-lg h-full w-full grid place-items-center">
                      {hour}
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
