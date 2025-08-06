"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Input, Label, SubmitButton } from "@/components/form/Materials";

const CategoryAddPage = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    categorySlug: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
  };

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
            <Link href="/category" className="text-blue-600 hover:underline">
              Category
            </Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-700">Add Category</li>
        </ol>
      </nav>

      {/* Form Card */}
      <div className="bg-white shadow-md rounded-md p-6 max-w-5xl">
        <h1 className="text-2xl font-bold mb-6">Add New Category</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Category Name"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            required
            
            
          />

          <Input
            label="Slug"
            name="categorySlug"
            value={formData.categorySlug}
            onChange={handleChange}
            required
            
          />

          <SubmitButton label="Add Category" />
        </form>
      </div>
    </div>
  );
};

export default CategoryAddPage;
