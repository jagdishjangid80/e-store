"use client";
import { useState } from "react";

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, image: "/images/about.png" }),
    });
    if (res.ok) {
      alert("Blog added");
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <h2 className="text-xl font-bold mb-2">Add Blog</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        className="w-full border p-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
