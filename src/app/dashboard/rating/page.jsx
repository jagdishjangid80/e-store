"use client";
import React from "react";
import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { DownloadCloudIcon, Trash2 } from "lucide-react";

const Page = () => {
  return (
    <div className="flex flex-col text-lg p-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="list-reset flex">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-700">All Ratings</li>
        </ol>
      </nav>

      {/* Orders List */}
      <div className="bg-white shadow-md rounded-md p-6 max-w-7xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Ratings & Reviews</h1>
        </div>

        {/* Search + Export + Delete */}
        <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-300 flex-wrap gap-2">
          <button className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md flex items-center text-sm">
            Export
            <DownloadCloudIcon className="inline h-4 w-4 ml-2" />
          </button>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search categories..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-52 text-sm"
            />
            <button className="text-red-600 hover:text-red-800">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Responsive Table with Scroll */}
        <div className="mt-6 overflow-hidden">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Product", "User", "Email", "Title", "Rating", "Review", "Actions"
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Map through your order data here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
