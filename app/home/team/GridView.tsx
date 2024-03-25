import MemberCard from "@/app/components/MemberCard";
import { teamStore } from "@/store";
import React from "react";

export default function GridView() {
  const { team, setSelectedMember, selectedMember } = teamStore();
  return (
    <section className="grid grid-cols-3 gap-2 ">
      {team.map((member) => (
        <MemberCard
          key={Math.random() * 2565463}
          selected={member.id === selectedMember?.id}
          member={member}
          handleSelect={() => setSelectedMember(member)}
        />
      ))}
    </section>
  );
}
