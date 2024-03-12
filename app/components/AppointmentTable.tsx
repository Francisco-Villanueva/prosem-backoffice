import { IAappointment } from "@/types";
import { IUser } from "@/types/user.types";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Table } from ".";
const appoinmentColumns: ColumnDef<IAappointment>[] = [
  {
    accessorFn: (row) => row.name,
    header: "Name",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    header: "LastName",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorFn: (row) => row.time,
    header: "Time",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorFn: (row) => row.date,
    header: "Date",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
];
export default function AppointmentTable({ member }: { member: IUser }) {
  return (
    <div className="w-full border p-4 flex-grow bg-light-white rounded-md flex flex-col gap-2">
      {member.Appointments.length ? (
        <Table<IAappointment>
          data={member.Appointments}
          columns={appoinmentColumns}
        />
      ) : (
        "No hay "
      )}
    </div>
  );
}
