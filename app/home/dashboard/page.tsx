"use client";
import ButtonEffect from "@/app/common/ButtonEffect";
import UserIcon from "@/app/icons/UserIcon";
import { teamStore } from "@/store";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const { team } = teamStore();
  const router = useRouter();
  return (
    <section className="flex flex-col h-full gap-2">
      <div className="flex gap-2 h-[50%] justify-center">
        <article className="flex-grow h-full border p-2 rounded-md  text-light-dark flex gap-2 ">
          <div className="flex flex-col w-full ">
            <h3 className="font-bold ">My Team</h3>
            <section className=" flex flex-col items-center  flex-grow  justify-center ">
              <strong className="text-[3rem] text-black">{team.length}</strong>
              <span className="">Members</span>
            </section>
            <ButtonEffect
              effect="bg-effect"
              preHover={"+"}
              afterHover={"Add Member"}
              onClick={() => router.push("/home/addMember")}
            />
          </div>
          <div className=" rounded-md w-2/3 text-light-dark  ">
            <section className=" flex flex-col h-full justify-center gap-2 ">
              {team.map((member) => (
                <ButtonEffect
                  effect="text-effect"
                  preHover={`${member.lastName} ${member.name}`}
                  afterHover={
                    <div className="flex gap-2">
                      <span>{member.email}</span>
                      <span className="font-light">{member.role}</span>
                    </div>
                  }
                />
              ))}
            </section>
          </div>
        </article>
        <article className="w-[30%] h-full bg-light-dark p-2 ">
          <section className="flex flex-col text-sm text-light-dark"></section>
        </article>
      </div>
      <article className="w-full h-full bg-light-white p-2 rounded-md"></article>
    </section>
  );
}
