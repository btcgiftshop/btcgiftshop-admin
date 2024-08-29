"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderItemType>[] = [
  {
    accessorKey: "gift",
    header: "Gift",
    cell: ({ row }) => {
      return (
        <Link
          href={`/gifts/${row.original.gift._id}`}
          className="hover:text-red-1"
        >
          {row.original.gift.title}
        </Link>
      );
    },
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
];
