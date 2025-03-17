import { Home, Users, Database, Warehouse, Car, Building2, Search, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu } from "lucide-react";


interface NavigationMenuProps {
  isCollapsed: boolean;
  selectedMenu: string;
  setSelectedMenu: (value: string) => void;
  setIsCollapsed: (value: boolean) => void; 
}

interface MenuItem {
  id: string;
  label: string;
  icon?: any;
  type?: 'group' | 'item';
  children?: MenuItem[];
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  isCollapsed,
  selectedMenu,
  setSelectedMenu,
  setIsCollapsed,
}) => {
  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'HOME',
      type: 'group',
      children: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
      ]
    },
    {
      id: 'account',
      label: 'QUẢN LÝ TÀI KHOẢN',
      type: 'group',
      children: [
        { id: 'user-management', label: 'Quản lý tài khoản', icon: Users },
        { id: 'authorities', label: 'Authorities', icon: Database },
      ]
    },
    {
      id: 'warehouse',
      label: 'QUẢN LÝ KHO',
      type: 'group',
      children: [
        { id: 'add-warehouse', label: 'Thêm mới kho', icon: Warehouse },
        { id: 'search-warehouse', label: 'Tìm kiếm kho', icon: Search },
      ]
    },
    {
      id: 'parking',
      label: 'QUẢN LÝ BÃI ĐỖ XE',
      type: 'group',
      children: [
        { id: 'search-parking', label: 'Tìm kiếm bãi đỗ xe', icon: Car },
        { id: 'add-parking', label: 'Thêm bãi đỗ xe', icon: Plus },
      ]
    },
    {
      id: 'branch',
      label: 'QUẢN LÝ CHI NHÁNH',
      type: 'group',
      children: [
        { id: 'search-branch', label: 'Tìm kiếm chi nhánh', icon: Building2 },
        { id: 'add-branch', label: 'Thêm chi nhánh', icon: Plus },
      ]
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Logo and Menu Toggle */}
      <div className="h-[60px] flex items-center justify-between px-4 border-b">
        {!isCollapsed && (
          <Image
            src="/uni-president-logo.png"
            alt="Uni President"
            width={150}
            height={40}
            className="object-contain"
          />
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-200 rounded-lg ml-auto"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menuItems.map((group) => (
          <div key={group.id} className="mb-4">
            {!isCollapsed && (
              <div className="px-4 py-2 text-xs font-semibold text-gray-500">
                {group.label}
              </div>
            )}
            {group.children?.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedMenu(item.id)}
                className={cn(
                  "w-full flex items-center px-4 py-2 text-sm transition-colors",
                  isCollapsed ? "justify-center" : "justify-start",
                  selectedMenu === item.id
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {item.icon && <item.icon size={18} className={cn(isCollapsed ? "" : "mr-3")} />}
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            ))}
          </div>
        ))}
        <div className="mt-auto px-4 py-2 text-xs text-gray-500">
          {!isCollapsed && (
            <div className="flex items-center justify-center border-t pt-4">
              Track Management by <span className="text-orange-500 ml-1">Uni President</span>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};