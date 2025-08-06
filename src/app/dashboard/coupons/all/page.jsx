"use client";
import React from "react";
import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { DownloadCloudIcon, Trash2 } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-lg p-6">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-4">
          <ol className="list-reset flex">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/coupons" className="text-blue-600 hover:underline">
                Coupons
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">All Coupons</li>
          </ol>
        </nav>
        {/* Coupons List */}
        <div className="bg-white shadow-md rounded-md p-6 max-w-7xl">
          <div className="flex justify-between items-center mb-6 ">
            <h1 className="text-2xl font-bold mb-6 ">All Coupons</h1>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              <PlusCircleIcon className="h-5 w-5 inline-block mr-2" />
              <Link href="/dashboard/coupons/add">Add New Coupon</Link>
            </button>
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

          <div className="mt-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Coupon Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Min Shopping Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiration Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{/* Map through your coupon data here */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
