"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Input,
  Select,
  Label,
  MediaUpload,
  SubmitButton,
} from "@/components/form/Materials";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "",
    mrp: "",
    sellingPrice: "",
    discount: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCKEditorChange = (e) => {
    const data = e.editor.getData();
    setForm((prev) => ({ ...prev, description: data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", form);
  };

  return (
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
          <li className="text-gray-700">Add Product</li>
        </ol>
      </nav>

      {/* Card */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              required
            />
            <Select
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              options={["herbs", "oils"]}
              required
            />
            <Input
              label="MRP"
              name="mrp"
              value={form.mrp}
              onChange={handleChange}
              type="number"
              required
            />
            <Input
              label="Selling Price"
              name="sellingPrice"
              value={form.sellingPrice}
              onChange={handleChange}
              type="number"
              required
            />
            <Input
              label="Discount (%)"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              type="number"
              required
            />
          </div>

          {/* Description */}
          <div initData="something">
            <Label text="Description" required />
            <textarea
              initData={form.description}
              onChange={handleCKEditorChange}
              config={{ height: 150 }}
            />
          </div>

          {/* Media Upload */}
          <MediaUpload />

          <SubmitButton label="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
