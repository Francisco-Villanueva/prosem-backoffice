"use client";
import ButtonEffect from "@/app/common/ButtonEffect";
import { EmptyCard } from "@/app/common/EmptyCard";
import { teamStore } from "@/store";
import { useRouter } from "next/navigation";
import React from "react";

function MembersHomeCard() {
  const { team } = teamStore();
  const router = useRouter();
  return (
    <article className="flex-grow h-full border p-2 rounded-md  text-light-dark flex gap-2 max-md:flex-col ">
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
      <div className=" rounded-md w-2/3 text-light-dark border ">
        <section className=" flex flex-col h-full justify-center gap-2 ">
          {team.map((member) => (
            <ButtonEffect
              key={Math.random() * 454 + 5}
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
  );
}
export default function Page() {
  const { team } = teamStore();
  const router = useRouter();
  return (
    <section className="flex flex-col h-full gap-2">
      <div className="flex gap-2 h-[40%] justify-center max-md:flex-col max-md:h-full">
        <div className="border w-full rounded-md">
          {team.length ? <MembersHomeCard /> : <EmptyCard type="team" />}
        </div>
        <article className="w-[30%] max-md:w-full  h-full border p-2  rounded-md">
          <EmptyCard type="appointmens" />
        </article>
      </div>
      <article className="w-full flex-grow border p-2 rounded-md max-md:h-1/3">
        <EmptyCard type="status" />
      </article>
    </section>
  );
}
