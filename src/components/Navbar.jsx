"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["Home", "About", "Shop", "Blog", "Contact"];

  return (
    <nav
      className="bg-white shadow-sm w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" aria-label="Navigate to Home">
            <Image
              src="/images/logo.png"
              alt="Company logo"
              width={85}
              height={85}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-md text-gray-600">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-black transition-colors duration-200"
                aria-label={`Navigate to ${item}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Search */}
          <button
            aria-label="Search"
            className="text-xl text-gray-600 hover:text-black transition-colors duration-200"
          >
            <Image
              src="/images/search.png"
              alt="search"
              width={20}
              height={20}
              className="object-contain"
            />
          </button>

          {/* Cart */}
          <button
            aria-label="Shopping cart"
            className="relative text-xl text-gray-600 hover:text-black transition-colors duration-200"
          >
            <Image
              src="/images/cart.png"
              alt="cart"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              1
            </span>
          </button>

          {/* User */}
          <button
            aria-label="User profile"
            className="text-xl text-gray-600 hover:text-black transition-colors duration-200"
          >
            <Image
              src="/images/user.png"
              alt="user"
              width={30}
              height={30}
              className="object-contain rounded-full"
            />
          </button>

          {/* Hamburger menu (mobile only) */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-md text-gray-700">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block w-full py-2 px-2 rounded hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)} 
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
