"use client";
import MemberCard from "@/app/components/MemberCard";
import MemberDetails from "@/app/components/MemberDetails";
import { UserServices } from "@/services";
import { teamStore } from "@/store";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Page() {
  const { team, setTeam, setSelectedMember, selectedMember } = teamStore();
  useEffect(() => {
    UserServices.getAll().then((res) => setTeam(res));
  }, [team]);
  return (
    <div className="h-full  flex flex-col gap-4">
      <h1 className="font-bold text-xl text-light-dark">My Team</h1>
      {team.length ? (
        <section className="grid grid-cols-4 gap-2 ">
          {team.map((member) => (
            <MemberCard
              key={Math.random() * 2565463}
              selected={member.id === selectedMember?.id}
              member={member}
              handleSelect={() => setSelectedMember(member)}
            />
          ))}
        </section>
      ) : (
        <div className=" grid place-items-center border">
          <span className="text-light-dark font-bold ">Loading ...</span>
        </div>
      )}
      <section className="flex-grow border bg-light-white rounded-md">
        {selectedMember ? (
          <MemberDetails member={selectedMember} />
        ) : (
          <div className="h-full w-full  flex flex-col justify-center items-center">
            <span className="text-light-dark">
              Select one member to see details
            </span>
            <div className="relative w-[150px]  h-[150px] ">
              <Image
                src={"/svg/teamMember.svg"}
                objectFit="contain"
                fill
                alt="member"
                className="opacity-15"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
