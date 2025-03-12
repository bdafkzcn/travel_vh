'use client';

import UserManagementTable from '../DataTable/UserManagementTable';

// Import các components tương ứng khác như AuthoritiesTable, WarehouseTable, etc.
  interface ContentProps {
    selectedMenu: string;
  }

  const Content: React.FC<ContentProps> = ({ selectedMenu }) => {
    return (
      <div>
        {selectedMenu === 'dashboard' && <div>Dashboard Content</div>}
        {selectedMenu === 'user-management' && <UserManagementTable />}
        {/* Add other content conditions based on selectedMenu */}
      </div>
    );
}


export default Content;