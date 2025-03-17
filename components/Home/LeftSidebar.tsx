import { Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { NavigationMenu } from "./NavigationMenu";

interface LeftSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  selectedMenu: string;
  setSelectedMenu: (value: string) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  selectedMenu,
  setSelectedMenu,
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Logo and Toggle Section */}
      <div className="h-[60px] flex items-center justify-between px-4 border-b">
        <div className={cn("transition-all duration-300", 
          isCollapsed ? "w-10" : "w-36"
        )}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-gray-200"
        >
          <Menu size={20} />
        </Button>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu 
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
    </div>
  );
};

export default LeftSidebar;
