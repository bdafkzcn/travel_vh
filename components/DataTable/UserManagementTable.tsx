'use client';

import { DataTable } from "../ui/data-table"; // Nếu bạn có component sẵn
import { ColumnDef } from "@tanstack/react-table"; // Hoặc Shadcn Table
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";

export type User = {
  id: string;
  username: string;
  email: string;
  language: string;
  roles: string;
  status: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Tên người dùng",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "language",
    header: "Ngôn ngữ",
  },
  {
    accessorKey: "roles",
    header: "Các quyền",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => (
      <Badge variant={row.original.status === "active" ? "default" : "destructive"}>
      {row.original.status === "active" ? "Kích hoạt" : "Khóa"}
    </Badge>
    ),
  },
  {
    id: "actions",
    header: "Hành động",
    cell: () => (
      <div className="flex gap-2">
        <Button variant="ghost" size="icon"><Eye size={16} /></Button>
        <Button variant="ghost" size="icon"><Edit size={16} /></Button>
        <Button variant="ghost" size="icon"><Trash2 size={16} /></Button>
      </div>
    ),
  },
];

const data: User[] = [
  { id: '00000001', username: 'admin', email: 'admin123@gmail.com', language: 'vi', roles: 'SUPER_ADMIN', status: 'inactive' },
  { id: 'security', username: 'security', email: 'security@gmail.com', language: 'vi', roles: 'ROLE_SECURITY', status: 'active' },
  { id: 'admin', username: 'admin', email: 'admin1234@gmail.com', language: 'vi', roles: 'SUPER_ADMIN', status: 'active' },
  { id: 'qc', username: 'qc', email: 'qc@gmail.com', language: 'vi', roles: 'ROLE_QC', status: 'active' },
];

export default function UserManagementTable() {
  return (
    <div className="container mx-auto py-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

