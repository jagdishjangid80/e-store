'use client';
import React from 'react';
import Link from 'next/link';
import { Input, SubmitButton } from '@/components/form/Materials';

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
          <li>
            <Link href="/coupons" className="text-blue-600 hover:underline">
              Coupons
            </Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-700">Add Coupon</li>
        </ol>
      </nav>

      {/* Form Card */}
      <div className="bg-white shadow-md rounded-md p-6 max-w-5xl">
        <h1 className="text-2xl font-bold mb-6 border-b border-gray-300 p-4">Add New Coupon</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Coupon Code"
            name="couponCode"
            placeholder="Enter Coupon Code"
            required
          />

          <Input
            label="Discount Amount"
            name="discountAmount"
            type="number"
            placeholder="Enter Discount Amount"
            required
          />

          <Input
            label="Min Shopping Amount"
            name="minShoppingAmount"
            type="number"
            placeholder="Enter Min Shopping Amount"
            required
          />

          <Input
            label="Expiration Date"
            name="expirationDate"
            type="date"
            required
          />

          <div className="col-span-full">
            <SubmitButton label="Add Coupon" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
