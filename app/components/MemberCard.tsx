import { IUser } from "@/types/user.types";
import React from "react";
import MemberStatus from "../common/MemberStatus";
import UserIcon from "../icons/UserIcon";
import Button from "../common/Button";
import { EditIcon, ErroIcon } from "../icons";
import RoleCard from "../common/RoleCard";
import { asideStore, teamStore, userStore } from "@/store";
interface MemberCardProps {
  member: IUser;
  selected?: boolean;
  handleSelect?: () => void;
  className?: string;
}
export default function MemberCard({
  member,
  handleSelect,
  selected,
  className = "",
}: MemberCardProps) {
  const { setAside } = asideStore();
  const { setSelectedMember } = teamStore();

  const handleSelectMember = () => {
    handleSelect;
    setSelectedMember(member);
    setAside("EditMember");
  };
  return (
    <div
      className={`border p-2 rounded-md relative transition-all duration-300   select-none ${
        selected ? "bg-black text-white " : ""
      } ${className}`}
    >
      <MemberStatus status="active" className="absolute top-0 right-0 m-1" />

      <div>
        <div className="flex justify-between">
          <div className="w-[50px] h-[50px] bg-light-dark rounded-lg grid place-items-center ">
            <UserIcon className="w-30 text-white" />
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <h3 className="text-xl  font-bold flex gap-4 w-full">
                {member.name}, {member.lastName}
              </h3>
            </div>
            <div>
              <Button variant="none" onClick={handleSelectMember}>
                <EditIcon size={5} />
              </Button>
            </div>
          </div>
        </div>

        <section className=" flex flex-col    gap-1 text-sm     ">
          <div className="flex gap-2 items-center  ">
            <span className="font-light text-sm ">User Name:</span>

            <p>{member.userName}</p>
          </div>
          <div className="flex gap-2 items-center ">
            <span className="font-light text-sm ">Email:</span>

            <p>{member.email}</p>
          </div>
          <div className="flex gap-2 items-center  ">
            <span className="font-light  ">Role:</span>
            <RoleCard role={member.role} />
            {/* <p>{member.role}</p> */}
          </div>
        </section>
      </div>
    </div>
  );
}
