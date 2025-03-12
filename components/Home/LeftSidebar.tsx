"use client";
import { 
  Home, 
  User, 
  UserSearch, 
  Warehouse, 
  Car, 
  Plus, 
  Split, 
  Logs, 
  PackageSearch 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, ReactNode } from "react";

type LeftSideBarProps = {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  setSelectedMenu: Dispatch<SetStateAction<string>>; // Thêm để handle nội dung bên phải
  selectedMenu: string; // Menu đang được chọn
};

type MenuItemProps = {
  icon: ReactNode;
  label: string;
  isCollapsed: boolean;
  active?: boolean;
  onClick?: () => void;
};

const LeftSideBar: React.FC<LeftSideBarProps> = ({ isCollapsed, setIsCollapsed, setSelectedMenu, selectedMenu }) => {
  return (
    <div
      className={`h-full p-4 space-y-6 shadow-lg transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
        }`}
    >
      {/* Logo và nút thu gọn */}  
      <div className="flex items-center mb-4">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="ml-auto"
        >
          {isCollapsed ? <Logs size={20} /> : <Logs size={20} />}
        </Button>
        {!isCollapsed && <img src="/images/Logo.png" alt="Logo" className="w-16 object-contain" />}
      </div>

      {/* Menu List */}
      <div className="flex-1 overflow-y-auto space-y-4 mt-4">
        {/* HOME */}
        <div>
          {!isCollapsed && <h3 className="text-xs font-semibold px-2 mb-2 text-orange-500">HOME</h3>}
          <MenuItem 
            icon={<Home size={20} />} 
            label="Dashboard" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'dashboard'}
            onClick={() => setSelectedMenu('dashboard')} 
          />
        </div>

        {/* QUẢN LÝ TÀI KHOẢN */}
        <div>
          {!isCollapsed && <h3 className="text-xs font-semibold px-2 mb-2 text-orange-500">QUẢN LÝ TÀI KHOẢN</h3>}
          <MenuItem 
            icon={<User size={20} />} 
            label="Quản lý tài khoản" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'user-management'}
            onClick={() => setSelectedMenu('user-management')} 
          />
          <MenuItem 
            icon={<UserSearch size={20} />} 
            label="Authorities" 
            isCollapsed={isCollapsed}
            active={selectedMenu === 'authorities'}
            onClick={() => setSelectedMenu('authorities')} 
          />
        </div>

        {/* QUẢN LÝ KHO */}
        <div>
          {!isCollapsed && <h3 className="text-xs font-semibold px-2 mb-2 text-orange-500">QUẢN LÝ KHO</h3>}
          <MenuItem 
            icon={<Warehouse size={20} />} 
            label="Thêm mới kho" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'add-warehouse'}
            onClick={() => setSelectedMenu('add-warehouse')} 
          />
          <MenuItem 
            icon={<PackageSearch size={20} />} 
            label="Tìm kiếm kho" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'search-warehouse'}
            onClick={() => setSelectedMenu('search-warehouse')} 
          />
        </div>

        {/* QUẢN LÝ BÃI ĐỖ XE */}
        <div>
          {!isCollapsed && <h3 className="text-xs font-semibold px-2 mb-2 text-orange-500">QUẢN LÝ BÃI ĐỖ XE</h3>}
          <MenuItem 
            icon={<Car size={20} />} 
            label="Tìm kiếm bãi đỗ xe" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'search-parking'}
            onClick={() => setSelectedMenu('search-parking')} 
          />
          <MenuItem 
            icon={<Plus size={20} />} 
            label="Thêm bãi đỗ xe" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'add-parking'}
            onClick={() => setSelectedMenu('add-parking')} 
          />
        </div>

        {/* QUẢN LÝ CHI NHÁNH */}
        <div>
          {!isCollapsed && <h3 className="text-xs font-semibold px-2 mb-2 text-orange-500">QUẢN LÝ CHI NHÁNH</h3>}
          <MenuItem 
            icon={<Split size={20} />} 
            label="Tìm kiếm chi nhánh" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'search-branch'}
            onClick={() => setSelectedMenu('search-branch')} 
          />
          <MenuItem 
            icon={<Plus size={20} />} 
            label="Thêm chi nhánh" 
            isCollapsed={isCollapsed} 
            active={selectedMenu === 'add-branch'}
            onClick={() => setSelectedMenu('add-branch')} 
          />
        </div>
      </div>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isCollapsed, active = false, onClick }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={`w-full justify-start gap-2 px-3 py-2 rounded-lg transition 
      ${active ? "bg-orange-300 font-semibold" : "hover:bg-orange-400"} 
      ${isCollapsed ? "justify-center" : ""}`}
  >
    {icon}
    {!isCollapsed && <span>{label}</span>}
  </Button>
);

export default LeftSideBar;
