"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DownloadCloudIcon, PencilIcon, Trash2 } from "lucide-react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const CategoryPage = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Herbs", slug: "herbs" },
    { id: 2, name: "Oils", slug: "oils" },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = categories.map((cat) => cat.id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col text-lg p-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="flex">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link href="/category" className="text-blue-600 hover:underline">
              Category
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="text-gray-700">All Categories</li>
        </ol>
      </nav>

      {/* Page Container */}
      <div className="bg-white shadow-md rounded-md p-6">
        {/* Header + Add Button */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">All Categories</h1>
          <Link href="/dashboard/category/add">
            <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              Add New Category
            </button>
          </Link>
        </div>

        {/* Search + Export + Delete */}
        <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-300">
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

        {/* Table */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === categories.length}
                    onChange={handleSelectAll}
                    aria-label="Select all categories"
                  />
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                  Category Name
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                  Slug
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="border border-gray-300 text-center py-6 text-gray-500"
                  >
                    No categories found.
                  </td>
                </tr>
              ) : (
                categories.map((category) => (
                  <tr
                    key={category.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(category.id)}
                        onChange={() => handleSelectOne(category.id)}
                        aria-label="Select category"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {category.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {category.slug}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <Link href={`/dashboard/category/edit/${category.id}`}>
                          <button
                            className="text-blue-600 hover:text-blue-800 p-1 rounded"
                            title="Edit"
                          >
                            <PencilIcon className="inline h-4 w-4" />
                          </button>
                        </Link>
                        <button
                          className="text-red-600 hover:text-red-800 p-1 rounded"
                          title="Delete"
                        >
                          <Trash2 className="inline h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
