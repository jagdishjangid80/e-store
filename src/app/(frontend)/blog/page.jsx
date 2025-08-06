import React from "react";
import Image from "next/image";
import Link from "next/link";


const ShoppingBlogPage = () => {
  const posts = [
    {
      title: "Top 10 Must-Have Products for This Season",
      link: "#",
      description:
        "Discover the most popular and trending products you shouldn't miss out on this season.",
    },
    {
      title: "How to Choose the Perfect T-Shirt Online",
      link: "#",
      description:
        "A complete guide on fabric, fit, and sizing to help you shop smarter.",
    },
    {
      title: "Hoodie vs. T-Shirt: What to Wear for Every Occasion",
      link: "#",
      description:
        "Understand the fashion and function of each to make the right choice every time.",
    },
    {
      title: "5 Tips for a Smooth Online Shopping Experience",
      link: "#",
      description:
        "Avoid common mistakes and learn how to make your orders stress-free.",
    },
    {
      title: "Customer Reviews: Why They Matter When Shopping Online",
      link: "#",
      description:
        "Learn how reviews help in decision-making and finding trustworthy products.",
    },
  ];

  return (
    <div className="w-full mx-auto ">
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
             Blog
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
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Featured Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="block p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-lg font-bold text-purple-600 mb-2 hover:underline">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingBlogPage;
