'use client';

import { useState } from 'react';
import LeftSideBar from '@/components/Home/LeftSidebar';
import UserManagementTable from '../DataTable/UserManagementTable';

// Import các components tương ứng khác như AuthoritiesTable, WarehouseTable, etc.

export default function HomePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'user-management':
        return <UserManagementTable />
      case 'authorities':
        return <div>Authorities Table</div>;
      case 'add-warehouse':
        return <div>Form Thêm Kho</div>;
      // Add các case khác
      default:
        return <div>Chọn một mục từ menu</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <LeftSideBar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        setSelectedMenu={setSelectedMenu}
        selectedMenu={selectedMenu}
      />
      <div className="flex-1 p-4 overflow-y-auto">{renderContent()}</div>
    </div>
  );
}
