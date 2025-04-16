import { useEffect, useState } from 'react';
import { DataTable } from '../ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Trash2, RefreshCw, Plus } from 'lucide-react';
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
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'username',
    header: 'Tên người dùng',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'language',
    header: 'Ngôn ngữ',
  },
  {
    accessorKey: 'roles',
    header: 'Các quyền',
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái',
    cell: ({ row }) => (
      <Badge variant={row.original.status === 'Kích hoạt' ? 'success' : 'destructive'}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: 'actions',
    header: 'Hành động',
    cell: ({ row }) => (
      <div className='flex gap-2'>
        <Button variant='ghost' size='icon' aria-label='View'>
          <Eye size={16} />
        </Button>
        <Button variant='ghost' size='icon' aria-label='Edit'>
          <Edit size={16} />
        </Button>
        <Button variant='ghost' size='icon' aria-label='Delete'>
          <Trash2 size={16} />
        </Button>
      </div>
    ),
  },
];

export default function UserManagementTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await userApi.getUsers();
      console.log('Raw API data:', data);

      const mappedUsers: User[] = (Array.isArray(data) ? data : [data]).map((item) => ({
        id: item.userId,
        username: item.username,
        email: item.email,
        language: item.langKey, 
        roles: item.roles.map((role: { name: string }) => role.name).join(', '), 
        status: item.status === 'ACTIVE' ? 'Kích hoạt' : 'Không kích hoạt', 
      }));

      console.log('Mapped users:', mappedUsers);
      setUsers(mappedUsers);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setError('Không thể tải danh sách người dùng');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>Tài khoản</h2>
        <div className='flex gap-2'>
          <Button onClick={fetchUsers} variant='outline' size='sm'>
            <RefreshCw size={16} className='mr-2' />
            Refresh list
          </Button>
<Button size='sm'>
            <Plus size={16} className='mr-2' />
            Tạo tài khoản mới
          </Button>
        </div>
      </div>

      {loading ? (
        <div className='flex justify-center items-center h-64'>Loading...</div>
      ) : error ? (
        <div className='flex justify-center items-center h-64 text-red-500'>{error}</div>
      ) : users.length === 0 ? (
        <div className='flex justify-center items-center h-64'>Không có người dùng nào</div>
      ) : (
        <DataTable columns={columns} data={users} />
      )}
    </div>
  );
}