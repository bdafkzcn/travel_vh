import DataTable from "../../../components/DataTable/UserManagementTable";
import { getUsers } from "../../../lib/api";
import { columns } from "../../../components/DataTable/UserManagementTable";


export default async function UserManagementPage() {
  
  const users = await getUsers();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Quản lý tài khoản</h1>
      <DataTable columns={columns} data={users} />
    </div>
  );
}
