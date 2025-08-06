// src/app/dashboard/layout.js
"use client";

import { useState } from "react";
import Sidebar from "@/components/AdminSidebar";
import Navbar from "@/components/AdminNavbar";
import AdminFooter from "@/components/AdminFooter";

const AdminLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
      />
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 `}
        style={{ marginLeft: isSidebarOpen ? 256 : 64 }}
      >
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
        />
        <main className="flex-1 p-4 mt-16 overflow-auto">{children}</main>
        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminLayout;