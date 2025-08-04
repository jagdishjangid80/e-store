"use client";
import React, { useState } from "react";


const categories = [
  "T-shirts",
  "Oversized",
  "Hoodies",
  "Full Sleeves",
  "Polo",
  "Shoes",
  "Jackets",
  "Sweatshirts",
  "Kurta",
  "Blazer",
];

const colors = [
  "Black",
  "Blue",
  "Green",
  "Red",
  "White",
  "Yellow",
  "Purple",
  "Gray",
];

const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];


const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Handlers for checkbox changes
  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };
  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };
  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="w-full bg-white rounded shadow-md p-4 space-y-6 text-black ">

      {/* CATEGORY */}
      <div>
        <h3 className="font-bold text-sm mb-2 uppercase">Category</h3>
        <div className="max-h-40 overflow-y-auto pr-1 custom-scroll">
          {categories.map((cat, i) => (
            <label key={i} className="block mb-1 cursor-pointer select-none text-sm">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* COLOR */}
      <div>
        <h3 className="font-bold text-sm mb-2 uppercase">Color</h3>
        <div className="max-h-40 overflow-y-auto pr-1 custom-scroll">
          {colors.map((color, i) => (
            <label key={i} className="block mb-1 cursor-pointer select-none text-sm">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600"
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      {/* SIZE */}
      <div>
        <h3 className="font-bold text-sm mb-2 uppercase">Size</h3>
        <div className="max-h-32 overflow-y-auto pr-1 custom-scroll">
          {sizes.map((size, i) => (
            <label key={i} className="block mb-1 cursor-pointer select-none text-sm">
              <input
                type="checkbox"
                className="mr-2 accent-purple-600"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* PRICE RANGE */}
      <div>
        <h3 className="font-bold text-sm mb-2 uppercase">Price</h3>
        <div className="flex items-center space-x-2 mb-3">
          <input
            type="number"
            value={priceRange[0]}
            min={0}
            max={priceRange[1]}
            onChange={(e) =>
              setPriceRange([+e.target.value, priceRange[1]])
            }
            className="border rounded px-2 py-1 w-20 text-sm focus:outline-purple-600"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            value={priceRange[1]}
            min={priceRange[0]}
            max={10000}
            onChange={(e) =>
              setPriceRange([priceRange[0], +e.target.value])
            }
            className="border rounded px-2 py-1 w-20 text-sm focus:outline-purple-600"
            placeholder="Max"
          />
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-1.5 px-4 rounded w-full text-sm transition-colors duration-150">
          Filter Price
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
