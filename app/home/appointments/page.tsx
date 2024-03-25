"use client";
import Button from "@/app/common/Button";
import AppointmentTable from "@/app/components/AppointmentTable";
import { teamStore } from "@/store";
import { IUser } from "@/types/user.types";
import { useState } from "react";

export default function Page() {
  const { team } = teamStore();
  const [selectedMember, setSelectedMember] = useState<IUser>(team[0]);

  return (
    <div className="flex flex-col gap-4 h-full">
      <h2>List of appointments</h2>
      <div className="flex justify-around gap-6">
        {selectedMember &&
          team.map((member) => (
            <Button
              key={member.id}
              className="w-1/3"
              onClick={() => setSelectedMember(member)}
              variant={`${
                selectedMember.id === member.id ? "dark" : "secondary"
              }`}
            >
              {member.name}
            </Button>
          ))}
      </div>

      {selectedMember && <AppointmentTable member={selectedMember} />}
    </div>
  );
}
