"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { DownloadCloud, PencilIcon, Trash2 } from "lucide-react";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      slug: "product-1",
      category: "Category 1",
      mrp: 100,
      price: 80,
      discount: "20%",
    },
    // Add more products as needed
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

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
    <div className="p-4 md:p-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="flex flex-wrap items-center space-x-2">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="text-blue-600 hover:underline">
              Products
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-700">All Products</li>
        </ol>
      </nav>

      {/* Main Card */}
      <div className="bg-white shadow-md rounded-md p-6">
        {/* Heading and Add Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <h1 className="text-2xl font-semibold">All Products</h1>
          <Link href="/dashboard/products/add">
            <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800 text-sm">
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              Add New Product
            </button>
          </Link>
        </div>

        {/* Export + Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-300 pb-4">
          <button className="flex items-center text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm">
            Export
            <DownloadCloud className="ml-2 w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-4 py-2 text-sm w-52 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="text-red-600 hover:text-red-800" title="Delete selected">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-[900px] w-full border border-gray-300 text-sm">
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
                  Slug
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase text-gray-700">
                  Category
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right text-xs font-semibold uppercase text-gray-700">
                  MRP
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right text-xs font-semibold uppercase text-gray-700">
                  Selling Price
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right text-xs font-semibold uppercase text-gray-700">
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
                    colSpan={8}
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
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(product.id)}
                        onChange={() => handleSelectOne(product.id)}
                        aria-label="Select product"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.slug}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.category}
                    </td>
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
                          <button className="text-blue-600 hover:text-blue-800 p-1" title="Edit">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </Link>
                        <button className="text-red-600 hover:text-red-800 p-1" title="Delete">
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
    </div>
  );
};

export default ProductsPage;
