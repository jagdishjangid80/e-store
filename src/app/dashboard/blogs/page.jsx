"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All Blogs</h2>
        <Link href="/dashboard/blogs/new" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Blog
        </Link>
      </div>

      <ul className="space-y-4">
        {blogs.map(blog => (
          <li key={blog._id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-700">{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
