"use client";
import Image from "next/image";
import products from "../data/products";
import { FaArrowRight } from "react-icons/fa6";

const Page = () => {
  return (
    <>
      {/* Top Banner Cards */}
      <div className="max-w-7xl mx-auto p-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-[#fdf5ed] rounded-lg  flex items-center justify-center">
            <Image
              src="/images/left.png"
              width={500}
              height={350}
              alt="Left Banner"
              className="w-full h-auto object-contain rounded-md"
              priority
            />
          </div>

          {/* Right Card */}
          <div className="bg-[#f8f2ec] rounded-lg  flex items-center justify-center">
            <Image
              src="/images/right.png"
              width={500}
              height={350}
              alt="Right Banner"
              className="w-full h-auto object-contain rounded-md"
              priority
            />
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Products
            </h2>
            <a className="inline-flex items-center text-md font-semibold text-black underline hover:text-blue-700 transition duration-200 cursor-pointer">
              View All
              <FaArrowRight className="ml-2" size={15} />
            </a>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
              >
                {/* Image */}
                <div className="w-full h-60 flex items-center justify-center p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base mt-3 font-medium text-gray-900 line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center mt-2 space-x-2">
                    <p className="text-sm text-gray-400 line-through">
                      ₹{item.originalPrice}
                    </p>
                    <p className="text-lg font-bold text-black">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-beige">
        <div className="mx-auto py-4">
          <div className=" overflow-hidden ">
            <Image
              src="/images/banner.png"
              alt="Fashion Boutique Banner"
              width={1600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
