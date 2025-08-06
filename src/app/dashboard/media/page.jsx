'use client';
import React from 'react';
import Link from 'next/link';
import { PlusCircleIcon } from 'lucide-react';

const Page = () => {
  return (
    <>
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
            <li className="text-gray-700">Media</li>
          </ol>
        </nav>

        {/* Media List */}
        <div className="bg-white shadow-md rounded-md p-6 max-w-7xl w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Media Library</h1>

            <div className="flex gap-4">
              {/* Upload Media Link styled as button */}
              <Link href="/dashboard/media/upload" className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md flex items-center text-sm">
                Upload Media
                <PlusCircleIcon className="inline h-4 w-4 ml-2" />
              </Link>

              {/* Trace Button */}
              <button className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md flex items-center text-sm">
                Trace
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Page;
