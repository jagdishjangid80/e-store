"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";


import { useState, useRef } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <div className="w-full mx-auto">
        {/* Hero Section */}
        <div className="relative w-full h-64 flex items-center justify-center">
          <Image
            src="/images/about.png"
            alt="Contact Us background"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0  z-10" />
          <div className="absolute z-20 flex flex-col items-center justify-center text-center w-full">
            <h1
              id="blog-heading"
              className="text-4xl md:text-5xl font-bold text-black mb-2 drop-shadow-lg"
            >
              Contact Us
            </h1>

            {/* Breadcrumbs */}
            <nav className="text-black text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center space-x-2">
                <li className="flex items-center space-x-1">
                  <Link href="/" className="hover:underline ml-1">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <HiOutlineChevronRight className="mx-1" />
                </li>
                <li className="text-black font-medium" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className=" p-6 rounded-lg ">
              <Image
                src="/images/contact.png"
                alt="Contact Us"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Get in Touch
              </h2>

              <p className="mb-4 text-gray-600">
                We would love to hear from you! Please fill out the form below
                or reach us via email or phone.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
                {submitted && (
                  <div className="mt-4 text-green-600 font-semibold text-center">
                    Successfully sent message!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
