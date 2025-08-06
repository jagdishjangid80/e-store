"use client";

import React, { useState } from "react";
import { SubmitButton } from "@/components/form/Materials";
import { PlusCircleIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DownloadCloudIcon, Trash2 } from "lucide-react";

// Temporary mock data for products — replace with real data or props
const mockProducts = [
  {
    id: 1,
    name: "T-Shirt",
    color: "Red",
    size: "M",
    sku: "TSHIRT-RED-M",
    mrp: 29.99,
    price: 19.99,
    discount: "33%",
  },
  {
    id: 2,
    name: "Hoodie",
    color: "Black",
    size: "L",
    sku: "HOODIE-BLK-L",
    mrp: 49.99,
    price: 39.99,
    discount: "20%",
  },
];

const AllVariants = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [products] = useState(mockProducts); // Replace with actual data from props or API

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = products.map((p) => p.id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="p-6 space-y-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a
                href="/dashboard/products"
                className="text-blue-600 hover:underline"
              >
                Products
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-700">All Variants</li>
          </ol>
        </nav>
      </div>

      <div className="bg-white shadow-md rounded-md p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-6">All Product Variants</h1>
          <Link href="/dashboard/products/variant/add">
            <button
              type="button"
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none"
            >
              <PlusCircleIcon className="h-5 w-5 mr-2" />
              Add Variant
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-between p-4 b gray-300 border-b border-gray-300">
          <button className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md cursor-pointer">
            Export
            <DownloadCloudIcon className="inline h-4 w-4 ml-2" />
          </button>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search categories..."
              className="border gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="text-red-600 hover:text-red-800 cursor-pointer">
              <Trash2 className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-[900px] w-full border gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase text-gray-700">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedIds.length === products.length}
                    aria-label="Select all products"
                  />
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase text-gray-700">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase text-gray-700">
                  Color
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase text-gray-700">
                  Size
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase text-gray-700">
                  SKU
                </th>
                <th className="border border-gray-300  px-4 py-3 text-right text-xs font-semibold uppercase text-gray-700">
                  MRP
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right text-xs font-semibold uppercase text-gray-700">
                  Selling Price
                </th>
                <th className="border border-gray-300  px-4 py-3 text-right text-xs font-semibold uppercase text-gray-700">
                  Discount %
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center text-xs font-semibold uppercase text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="border border-gray-300 text-center py-6 text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="border border-gray-300 gray-300 px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(product.id)}
                        onChange={() => handleSelectOne(product.id)}
                        aria-label="Select product"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.color}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.size}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.sku}</td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      ${product.mrp}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      ${product.price}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-right">
                      {product.discount}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <Link href={`/dashboard/products/edit/${product.id}`}>
                          <button
                            className="text-blue-600 hover:text-blue-800 p-1"
                            title="Edit"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </Link>
                        <button
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
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
    </>
  );
};

export default AllVariants;
