"use client";

import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, ReactNode, useState } from "react";
import Button from "../common/Button";
import { ArrowIcon } from "../icons";

type TableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  subComponent?: ReactNode;
  getRowCanExpand?: () => boolean;
};

export const Table = function <T>({
  columns,
  data,
  getRowCanExpand,
  subComponent,
}: TableProps<T>) {
  const [tableData, setTableData] = useState(() => [...data]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: tableData,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <>
      <table className="w-full  relative border rounded-md font-semibold ">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b-2  border-gray-200 bg-light-grey "
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: `${header.getSize()}px` }}
                  className={` py-3 px-4 border-r  text-start  text-black font-semibold   `}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <tr
                key={row.id}
                className={` text-black border-b  border-gray-200 text-left  ${
                  row.getIsExpanded() &&
                  "border-l-2 border-l-black bg-hoverBlue"
                }`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=" p-2  px-4 ">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {row.getIsExpanded() && (
                <tr className="border-l-2 border-l-black">
                  <td colSpan={row.getVisibleCells().length}>{subComponent}</td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      {data.length > pagination.pageSize && (
        <div className="flex items-center gap-6 mt-2  justify-center ">
          <Button
            variant="dark"
            className="rounded-full"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowIcon />
          </Button>
          <span className="flex items-center gap-1">
            {new Array(table.getPageCount()).fill(1).map((e, i) => (
              <Button
                key={i}
                className="rounded-full"
                onClick={() => table.setPageIndex(i)}
                variant={`${
                  table.getState().pagination.pageIndex === i
                    ? "secondary"
                    : "dark"
                }`}
              >
                {e + i}
              </Button>
            ))}
          </span>
          <Button
            variant="dark"
            className="rounded-full"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ArrowIcon />
          </Button>
        </div>
      )}
    </>
  );
};
