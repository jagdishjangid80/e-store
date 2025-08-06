"use client";
import Image from "next/image";
import {
  MoonIcon,
  SunIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

const AdminNavbar = ({
  isDarkMode,
  toggleDarkMode,
  toggleSidebar,
  isOpen,
}) =>   {   
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-30 flex items-center justify-between px-4 py-3  border-b h-16 transition-all ${
        isDarkMode
          ? "bg-[#0e0e0e] text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-200"
      }`}
      style={{
        left: isOpen ? 256 : 64,
      }}
    >
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={toggleSidebar}
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Bars3BottomRightIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2.5 border border-gray-300 rounded-full transition-colors hover:bg-gray-100"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
        <div className="flex items-center">
          <Image
            src="/images/user.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover border-gray-300 shadow-sm"
            priority
          />
        </div>
      </div>
    </header>
  );
};
export default AdminNavbar;