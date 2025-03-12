"use client";
import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Head from "./Head";
import Content from "./Content";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full z-40 bg-gray-50">
      <LeftSidebar 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </div>

      {/* Main content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-[80px]" : "ml-[260px]"
        } h-full`}
      >
        {/* Header */}
        <div className="fixed top-0 right-0 h-[60px] bg-gray-50 shadow-md z-30 flex items-center transition-all duration-300"
          style={{
            width: `calc(100% - ${isCollapsed ? "80px" : "260px"})`
          }}
        >
          <div className="w-full flex justify-between items-center px-4">
            <div className="flex items-center">
              {/* Có thể để trống hoặc thêm nội dung sau */}
            </div>
            <Head />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pt-[60px] p-4 bg-purple-50 min-h-full">
        <Content selectedMenu={selectedMenu}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
