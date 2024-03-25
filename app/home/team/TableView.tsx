import Button from "@/app/common/Button";
import RoleCard, { RoleTypes } from "@/app/common/RoleCard";
import { Table } from "@/app/components";
import { EditIcon } from "@/app/icons";
import { asideStore, teamStore } from "@/store";
import { IUser } from "@/types/user.types";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
const membersColumns: (
  handleSelect: (member: IUser) => void
) => ColumnDef<IUser>[] = (handleSelect) => [
  {
    accessorFn: (row) => row.name,
    header: "Name",
    cell: ({ row }) => (
      <span className="font-semibold">
        {row.original.name} {row.original.lastName}
      </span>
    ),
  },
  {
    accessorFn: (row) => row.role,
    header: "Role",
    cell: ({ getValue }) => <RoleCard role={getValue<RoleTypes>()} />,
  },
  {
    accessorFn: (row) => row.email,
    header: "Email",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorFn: (row) => row.userName,
    header: "User Name",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <span>
        <Button onClick={() => handleSelect(row.original)} variant="none">
          <EditIcon size={6} />
        </Button>
      </span>
    ),
  },
];
export default function TableView() {
  const { team, setSelectedMember, selectedMember } = teamStore();
  const { setAside } = asideStore();
  const handleSelectMember = (member: IUser) => {
    setSelectedMember(member);
    setAside("EditMember");
  };
  return <Table columns={membersColumns(handleSelectMember)} data={team} />;
}
