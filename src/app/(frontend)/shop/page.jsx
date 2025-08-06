"use client";
import FilterSidebar from "@/components/FilterSidebar";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "T Shirt",
    price: 10,
    originalPrice: 30,
    image: "/images/tshirt1.png",
  },
  {
    id: 2,
    name: "MH Shefat product",
    price: 90,
    originalPrice: 100,
    image: "/images/tshirt2.png",
  },
  {
    id: 3,
    name: "Mishra jacket",
    price: 1200,
    originalPrice: 1500,
    image: "/images/tshirt3.png",
  },
];

const ShopPage = () => {
  const [itemsToShow, setItemsToShow] = useState(9);
  const [sortOrder, setSortOrder] = useState("default");

  return (
    <>
         <div className="relative w-full h-64 flex items-center justify-center">
        <Image
          src="/images/about.png"
          alt="About Us background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute z-10 flex flex-col items-center justify-center text-center">
          <h1
            id="blog-heading"
            className="text-4xl md:text-5xl font-bold text-black mb-2 drop-shadow-lg"
          >
            Shop
          </h1>

          {/* Breadcrumbs */}
          <nav className="text-black text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2">
              <li>
                <Link href="/" className="hover:underline focus:outline-none">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">/</span>
              </li>
              <li className="text-black" aria-current="page">
                Shop
              </li>
            </ol>
          </nav>
        </div>
      </div>

    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
      {/* Filters */}
      <aside className="w-full md:w-1/4">
        <FilterSidebar />
      </aside>

      {/* Products */}
      <main className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold mb-6">Products</h2>

        {/* Show count and sorting */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 bg-gray-50 px-4 py-3 rounded-md">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-semibold">Show</span>
            {[1, 2, 3, 4].map((count) => (
              <button
                key={count}
                onClick={() => setItemsToShow(count)}
                className={`w-8 h-8 rounded-full text-sm font-semibold flex items-center justify-center ${
                  itemsToShow === count
                    ? "bg-purple-500 text-white"
                    : "bg-transparent hover:bg-gray-200"
                }`}
              >
                {count}
              </button>
            ))}
          </div>

          <div className="mt-4 md:mt-0">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A-Z</option>
              <option value="name-z-a">Name: Z-A</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, itemsToShow).map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                <div className="text-gray-500 line-through text-sm">
                  ₹{product.originalPrice.toFixed(2)}
                </div>
                <div className="text-xl font-bold text-black">
                  ₹{product.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Load More Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setItemsToShow(itemsToShow + 3)}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-150"
          >
            Load More
          </button>
        </div>
      </main>
    </div>
    </>
  );
};

export default ShopPage;
