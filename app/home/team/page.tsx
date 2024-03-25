"use client";
import { GridIcon, SpinnerLoading, SquaresIcon } from "@/app/icons";
import { teamStore } from "@/store";
import GridView from "./GridView";
import { useState } from "react";
import TableView from "./TableView";
import Button from "@/app/common/Button";
import RoleCard from "@/app/common/RoleCard";

export default function Page() {
  const { team } = teamStore();

  const [view, setView] = useState<"grid" | "table">("table");

  const toggleView = () => {
    setView(view === "grid" ? "table" : "grid");
  };

  const Icon = view === "grid" ? GridIcon : SquaresIcon;

  const adminCount = team.filter((member) => member.role === "admin").length;
  const employeeCount = team.filter(
    (member) => member.role === "employee"
  ).length;
  return (

    <div className="h-full  flex flex-col gap-4 p-2">
      <header className="flex justify-between">
        <h2 className="font-bold text-xl text-black">My Team</h2>
        <div>
          <Button onClick={toggleView} variant="dark">
            <Icon size={5} />
          </Button>

        </div>
      </header>
      <section className="grid grid-cols-2 w-1/6">
        <span className="flex flex-col items-center border rounded-lg bg-light-white ">
          <p className="p-1 font-bold">{adminCount}</p>
          <RoleCard role="admin" />
        </span>
        <span className="flex flex-col items-center border rounded-lg bg-light-white ">
          <p className="p-1 font-bold">{employeeCount}</p>
          <RoleCard role="employee" />
        </span>
      </section>
      <section className="">
        {team.length ? (
          view === "grid" ? (
            <GridView />
          ) : (
            <TableView />
          )
        ) : (

          <div className=" grid place-items-center border">
            <span className="text-light-dark font-bold ">
              {team.length === 0 ? (
                <div className="text-light-dark font-normal">No members</div>
              ) : (
                <div className="flex gap-2">
                  <SpinnerLoading className="" /> Loadng...
                </div>
              )}

            </span>
          </div>
        )}
      </section>
    </div>
  );
}
