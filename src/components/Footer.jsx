
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="space-y-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
                priority
              />
              <p className="text-sm text-gray-400">
                E-store is your trusted destination for quality and convenience. From fashion to essentials, we bring everything you need right to your doorstep. Shop smart, live better — only at E-store.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="text-sm text-gray-400">
                <li>T-shirt</li>
                <li>Hoodies</li>
                <li>Oversized</li>
                <li>Full Sleeves</li>
                <li>Polo</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Useful Links</h3>
              <ul className="text-sm text-gray-400">
                <li>Home</li>
                <li>Shop</li>
                <li>About Us</li>   
                <li>Contact Us</li>
                <li>Register</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="space-y-4">
             <h3 className="text-lg font-semibold">Help Center</h3>
                <ul className="text-sm text-gray-400">
                    <li>FAQs</li>
                    <li>Shipping & Returns</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Contact Support</li>
                </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="text-sm text-gray-400">
              <li>Email: support@e-store.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Address: 123 E-store St, Shopping City, SC 12345</li>
            </ul>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
