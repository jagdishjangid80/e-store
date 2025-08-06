'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Squares2X2Icon,
  Cog6ToothIcon,
  TagIcon,
  UsersIcon,
  StarIcon,
  PhotoIcon,
  RectangleStackIcon,
  PlusCircleIcon,
  ListBulletIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  GiftIcon,
  CubeIcon,
} from '@heroicons/react/24/outline'

const AdminSidebar = ({ isOpen, toggleSidebar, isDarkMode }) => {
  const [categoryOpen, setCategoryOpen] = React.useState(false)
  const [productOpen, setProductOpen] = React.useState(false)
  const [couponOpen, setCouponOpen] = React.useState(false)

  const navLinkClass = (isDark) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 ${
      isDark
        ? 'hover:bg-gray-800 active:bg-gray-700'
        : 'hover:bg-gray-100 active:bg-gray-200'
    } group`

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-30 transition-all duration-300 ease-in-out  ${
        isOpen ? 'w-64' : 'w-16'
      } ${isDarkMode ? 'bg-[#101010] text-white' : 'bg-white text-gray-900'} border-r ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      {/* Logo Section */}
      <div
        className={`flex items-center justify-center h-16 px-2 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <div className="flex items-center w-full justify-center">
          <Image
            src={isOpen ? '/images/logo.png' : '/images/shop.png'}
            alt="E-Store"
            width={isOpen ? 80 : 36}
            height={isOpen ? 80 : 36}
            className={`object-contain ${
              isOpen ? 'max-w-[80px] max-h-[55px]' : 'rounded max-w-[36px] max-h-[36px]'
            } w-full h-auto`}
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-2 py-6 flex flex-col gap-2 overflow-hidden h-[calc(100vh-64px)]">
        {/* Dashboard */}
        <Link href="/dashboard" className={navLinkClass(isDarkMode)}>
          <Squares2X2Icon className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
          {isOpen && <span className="font-medium">Dashboard</span>}
        </Link>

        {/* Category */}
        <button
          type="button"
          className={navLinkClass(isDarkMode) + ' w-full justify-between'}
          onClick={() => setCategoryOpen((prev) => !prev)}
        >
          <RectangleStackIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && (
            <>
              <span className="font-medium flex-1 text-left">Category</span>
              {categoryOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
            </>
          )}
        </button>
        {categoryOpen && isOpen && (
          <div className="ml-8 flex flex-col gap-1">
            <Link href="/dashboard/category/add" className={navLinkClass(isDarkMode)}>
              <PlusCircleIcon className="h-5 w-5" />
              <span>Add Category</span>
            </Link>
            <Link href="/dashboard/category/all" className={navLinkClass(isDarkMode)}>
              <ListBulletIcon className="h-5 w-5" />
              <span>All Categories</span>
            </Link>
          </div>
        )}

        {/* Product */}
        <button
          type="button"
          className={navLinkClass(isDarkMode) + ' w-full justify-between'}
          onClick={() => setProductOpen((prev) => !prev)}
        >
          <CubeIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && (
            <>
              <span className="font-medium flex-1 text-left">Product</span>
              {productOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
            </>
          )}
        </button>
        {productOpen && isOpen && (
          <div className="ml-8 flex flex-col gap-1">
            <Link href="/dashboard/products/add" className={navLinkClass(isDarkMode)}>
              <PlusCircleIcon className="h-5 w-5" />
              <span>Add Product</span>
            </Link>
            <Link href="/dashboard/products/variant/add" className={navLinkClass(isDarkMode)}>
              <PlusCircleIcon className="h-5 w-5" />
              <span>Add Variant</span>
            </Link>
            <Link href="/dashboard/products/all" className={navLinkClass(isDarkMode)}>
              <ListBulletIcon className="h-5 w-5" />
              <span>All Products</span>
            </Link>
            <Link href="/dashboard/products/variant/all" className={navLinkClass(isDarkMode)}>
              <ListBulletIcon className="h-5 w-5" />
              <span>Product Variants</span>
            </Link>
          </div>
        )}

        {/* Coupon */}
        <button
          type="button"
          className={navLinkClass(isDarkMode) + ' w-full justify-between'}
          onClick={() => setCouponOpen((prev) => !prev)}
        >
          <GiftIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && (
            <>
              <span className="font-medium flex-1 text-left">Coupon</span>
              {couponOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
            </>
          )}
        </button>
        {couponOpen && isOpen && (
          <div className="ml-8 flex flex-col gap-1">
            <Link href="/dashboard/coupons/add" className={navLinkClass(isDarkMode)}>
              <PlusCircleIcon className="h-5 w-5" />
              <span>Add Coupon</span>
            </Link>
            <Link href="/dashboard/coupons/all" className={navLinkClass(isDarkMode)}>
              <ListBulletIcon className="h-5 w-5" />
              <span>All Coupons</span>
            </Link>
          </div>
        )}

        {/* Other Direct Links */}
        <Link href="/dashboard/orders" className={navLinkClass(isDarkMode)}>
          <TagIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && <span className="font-medium">Orders</span>}
        </Link>
        <Link href="/dashboard/customers" className={navLinkClass(isDarkMode)}>
          <UsersIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && <span className="font-medium">Customers</span>}
        </Link>
        <Link href="/dashboard/rating" className={navLinkClass(isDarkMode)}>
          <StarIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && <span className="font-medium">Rating & Review</span>}
        </Link>
        <Link href="/dashboard/media" className={navLinkClass(isDarkMode)}>
          <PhotoIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && <span className="font-medium">Media</span>}
        </Link>
        <Link href="/dashboard/settings" className={navLinkClass(isDarkMode)}>
          <Cog6ToothIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          {isOpen && <span className="font-medium">Settings</span>}
        </Link>
      </nav>
    </aside>
  )
}

export default AdminSidebar;
