"use client";

import React, { useState } from "react";
import LeftSideBar from "./LeftSidebar";
import Head from "./Head";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // collapse state

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full z-30 bg-gray-50">
        <LeftSideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-[80px]" : "ml-[260px]"
        } h-full`}
      >
        {/* Header */}
        <div
          className={`fixed top-0 ${
            isCollapsed ? "left-[80px]" : "left-[260px]"
          } right-0 h-[60px] bg-gray-50 shadow-md z-20 flex items-center px-4`}
        >
          <Head />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pt-[60px] p-4 bg-pink-50 min-h-full">
        </div>
      </div>
    </div>
  );
};

export default Home;
