"use client";
import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Head from "./Head";
import Content from "./Content";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full h-[60px] bg-gray-50 shadow-md z-40">
        <div className="flex justify-end h-full px-4">
          <Head />
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-[60px] min-h-screen">
        {/* Sidebar */}
        <aside className={`fixed left-0 h-[calc(100vh-60px)] bg-gray-50 transition-all duration-300 ${
          isCollapsed ? "w-[80px]" : "w-[260px]"
        }`}>
          <LeftSidebar 
            isCollapsed={isCollapsed} 
            setIsCollapsed={setIsCollapsed}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-[80px]" : "ml-[260px]"
        }`}>
          <div className="p-6">
            <Content selectedMenu={selectedMenu}/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
