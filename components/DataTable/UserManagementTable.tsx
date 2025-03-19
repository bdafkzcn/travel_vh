'use client';

import { useEffect, useState } from 'react';
import { DataTable } from "../ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import { userApi } from '@/services/api';

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

export default function UserManagementTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
        
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userApi.getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="h-full">
      <div className="bg-white rounded-lg shadow-lg border">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Quản lý tài khoản</h2>
            <Button variant="default">Thêm mới</Button>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              Loading...
            </div>
          ) : (
            <div className="overflow-hidden">
              <DataTable columns={columns} data={users} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

