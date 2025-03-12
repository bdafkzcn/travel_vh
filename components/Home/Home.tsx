"use client";

import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Head from "./Head";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full z-30 bg-gray-50">
        <LeftSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-[80px]" : "ml-[260px]"
        } h-full`}
      >
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 h-[60px] bg-gray-50 shadow-md z-20 flex items-center transition-all duration-300">
  <div
    className={`w-full flex justify-between items-center px-4 ${
      isCollapsed ? "pl-[80px]" : "pl-[260px]"
    }`}
  >
    {/* Bên trái nếu muốn thêm logo hoặc breadcrumb */}
    <div className="flex items-center">
      {/* Có thể để trống hoặc thêm nội dung sau */}
    </div>

    {/* Bên phải: Head component */}
    <Head />
  </div>
</div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto pt-[60px] p-4 bg-purple-50 min-h-full">
        </div>
      </div>
    </div>
  );
};

export default Home;
