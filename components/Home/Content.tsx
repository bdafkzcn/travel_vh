'use client';
import UserManagementTable from '../DataTable/UserManagementTable';

// Import các components tương ứng khác như AuthoritiesTable, WarehouseTable, etc.
  interface ContentProps {
    selectedMenu: string;
  }

  const Content: React.FC<ContentProps> = ({ selectedMenu }) => {
    return (
      <div className="w-full h-full">
      <div className="max-w-[1200px] mx-auto">
        <div className=" rounded-lg shadow-sm p-6 mb-6">
          <div className="overflow-x-auto">
            {selectedMenu === 'dashboard' && <div>Dashboard Content</div>}
            {selectedMenu === 'user-management' && <UserManagementTable />}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Content;