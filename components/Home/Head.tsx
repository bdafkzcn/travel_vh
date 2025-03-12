import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Globe, User } from "lucide-react";

type Language = {
  label: string;
  value: string;
  icon: string;
};


const languages: Language[] = [
  { label: "Tiếng Việt", value: "vi", icon: "🇻🇳" },
  { label: "中文 (简体)", value: "zh-CN", icon: "🇨🇳" },
  { label: "繁體中文", value: "zh-TW", icon: "🇹🇼" },
  { label: "English", value: "en", icon: "🇺🇸" },
];

export default function Header() {
  const [currentLang, setCurrentLang] = useState("vi");
  const router = useRouter();

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang.value);
    // TODO: thêm logic đổi ngôn ngữ i18n tại đây
  };

  const handleLogout = () => {
    // TODO: Xóa token hoặc thông tin user
    router.push("/auth/login"); // điều hướng về login
  };

  return (
    <header className="flex justify-end items-center px-4 py-2 shadow ">

      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <span>{languages.find((l) => l.value === currentLang)?.icon}</span>
              <span>{languages.find((l) => l.value === currentLang)?.label}</span>
              <Globe className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {languages.map((lang) => (
              <DropdownMenuItem key={lang.value} onClick={() => handleLanguageChange(lang)}>
                <span className="mr-2">{lang.icon}</span> {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full p-2">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="px-3 py-2 text-sm">Xin chào, admin</div>
            <DropdownMenuItem onClick={() => router.push("/settings")}>⚙️ Cài đặt</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/change-password")}>🔒 Mật khẩu</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>↩️ Đăng xuất</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
